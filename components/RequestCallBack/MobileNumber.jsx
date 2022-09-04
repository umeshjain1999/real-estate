/* library */
import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
/* components */
import Button from '@components/Button';
import Input from '@components/Input';
import EnterOTP from './EnterOTP';
/* utils */
import { isNormalNumber } from '@utility/functions';
/* helpers */
import { verifyOTP, sendOTP, getCallback } from '@helpers/requestCallback'
/* constants */
import { API_SUCCESS_CODE, ERROR_MESSAGE } from '@constants/constant';

function MobileNumber({
  OTPState,
  updateOTPState,
  projectDetail,
}) {
  const { enqueueSnackbar } = useSnackbar()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [buttonDisable, setButtonDisable] = useState(true)

  const handleChange = (e) => {
    const ele = e.target
    if (!isNormalNumber(ele.value)) return false
    setPhoneNumber(ele.value)
  }

  useEffect(() => {
    if (phoneNumber.length === 10) {
      setButtonDisable(false)
    } else {
      setButtonDisable(true)
    }
  }, [phoneNumber])

  const formSubmission = async (e) => {
    e.preventDefault()
    if (phoneNumber) {
      const res = await sendOTP({
        mobile: phoneNumber
      })
      if (res?.statusCode === API_SUCCESS_CODE) {
        enqueueSnackbar('OTP Successfully Sent', { variant: 'success' })
        updateOTPState(true)
      } else {
        enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
        updateOTPState(false)
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
      //! call getcallback api before you close the modal
      const callbackRes = await getCallback({
        name: '',
        email: '',
        phone: phoneNumber,
        project: {
          ...projectDetail
        }
      })
      if (callbackRes) {
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

export default MobileNumber