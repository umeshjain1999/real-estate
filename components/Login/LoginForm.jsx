/* library */
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
/* components */
import Button from '@components/Button';
import Input from '@components/Input';
import EnterOTP from '@components/RequestCallBack/EnterOTP';
/* utils */
import { isNormalNumber } from '@utility/functions';
/* helpers */
import { verifyOTP, sendOTP } from '@helpers/requestCallback'
/* constants */
import { API_SUCCESS_CODE, ERROR_MESSAGE } from '@constants/constant';
/* hooks */
import { useAuthContext } from '@hooks/useAuthContext';

function LoginForm({
  handleType,
  closeModal,
  authAPI,
  OTPState,
  updateOTPState,
}) {
  const { dispatch } = useAuthContext()
  const { enqueueSnackbar } = useSnackbar()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [buttonDisable, setButtonDisable] = useState(true)

  React.useEffect(() => {
    if (phoneNumber.length === 10) {
      setButtonDisable(false)
      //? Auto Submit
    } else {
      setButtonDisable(true)
    }
  }, [phoneNumber])

  const callRegister = () => {
    handleType("REGISTER")
  }

  const handleChange = (e) => {
    const ele = e.target
    if (!isNormalNumber(ele.value)) return false
    setPhoneNumber(ele.value)
  }

  const formSubmission = async (e) => {
    e.preventDefault()
    if (phoneNumber) {
      const res = await sendOTP({
        mobile: phoneNumber
      })
      if (res?.statusCode === API_SUCCESS_CODE) {
        updateOTPState(true)
        enqueueSnackbar('OTP Successfully Sent', { variant: 'success' })
      } else {
        updateOTPState(false)
        enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
      }
    }
  }

  const otpVerifcation = async ({ phoneNumber, otp }) => {
    const res = await verifyOTP({
      mobile: phoneNumber,
      otp: otp,
    })
    if (res?.statusCode === API_SUCCESS_CODE) {
      enqueueSnackbar("You're Successfully Verified", { variant: 'success' })
      const authRes = await authAPI("LOGIN", { phone: phoneNumber })
      if (authRes) {
        dispatch({ type: "LOGIN", payload: authRes })
        closeModal()
      }
    } else {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
    }
  }

  if (OTPState) {
    return (
      <EnterOTP
        phoneNumber={phoneNumber}
        changePhoneNumberFunc={updateOTPState}
        otpVerifcationFunc={otpVerifcation}
      />
    )
  }

  return (
    <>
      <div className='login__modal-top'>
        <div className="login__modal-text">Please Enter Mobile Number to Continue</div>
        <div className='login__modal-register login__modal-highlight' onClick={callRegister}>Register</div>
      </div>
      <form onSubmit={formSubmission} className='login__modal-form'>
        <div className='login__modal-input-wrap'>
          <div className='login__modal-prefix'>+91</div>
          <Input
            required
            type="tel"
            name="tel"
            autoFocus
            onChange={handleChange}
            value={phoneNumber}
          />
        </div>
        <Button text='submit' variant='secondary' type='submit' className='login__modal-button' disabled={buttonDisable} />
      </form>
    </>
  )
}

export default LoginForm