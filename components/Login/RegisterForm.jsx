/* library */
import React, { useState } from 'react'
import { useSnackbar } from 'notistack'
/* components */
import Input from '@components/Input'
import RadioButton from '@components/Input/RadioButton'
import Button from '@components/Button'
import EnterOTP from '@components/RequestCallBack/EnterOTP'
/* utils */
import { isNormalNumber } from '@utility/functions'
/* helpers */
import { verifyOTP, sendOTP } from '@helpers/requestCallback'
/* constant */
import { API_SUCCESS_CODE, ERROR_MESSAGE } from '@constants/constant'
/* hooks */
import { useAuthContext } from '@hooks/useAuthContext'
function RegisterForm({
  handleType,
  closeModal,
  authAPI,
  OTPState,
  updateOTPState,
}) {
  const { dispatch } = useAuthContext()
  const { enqueueSnackbar } = useSnackbar()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [query, setQuery] = useState({})

  const goToLogin = () => {
    handleType("LOGIN")
  }
  const formSubmission = async (e) => {
    e.preventDefault()
    let arr = ['type', 'fullName', 'email', 'tel']
    let registerObj = {}
    for (let index = 0; index < arr.length; index++) {
      let element = arr[index];
      registerObj[element] = e.target[element].value
    }

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

    setQuery({
      type: registerObj?.type,
      first_name: registerObj?.fullName,
      email: registerObj?.email,
      phone: registerObj?.tel
    })

  }

  const handleChange = (e) => {
    const ele = e.target
    if (!isNormalNumber(ele.value)) return false
    setPhoneNumber(ele.value)
  }

  const otpVerifcation = async ({ phoneNumber, otp }) => {
    const res = await verifyOTP({
      mobile: phoneNumber,
      otp: otp,
    })
    if (res?.statusCode === API_SUCCESS_CODE) {
      const authRes = await authAPI("REGISTER", query)
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
    <div className='register__form'>
      <form onSubmit={formSubmission} className='common-form' >
        <div className='register__form-text'>I am</div>
        <div className="register__form-wrap">
          <RadioButton
            containerClassName="register__form-radio common-input-radio"
            labelClassName="common-input-radio-text"
            label="Individual (3 Free Listings)"
            name="type"
            value="individual"
            id="individual"
            defaultChecked
          />
          <RadioButton
            containerClassName="register__form-radio common-input-radio"
            labelClassName="common-input-radio-text"
            label="Agent (Unlimited Listings)"
            name="type"
            value="agent"
            id="agent"
          />
        </div>
        <Input required className='common-form-input' type="text" name="fullName" placeholder='Name' autoFocus />
        <Input required className='common-form-input' type="email" name="email" placeholder='Email ID' />
        <Input required className='common-form-input' onChange={handleChange} value={phoneNumber} type="tel" name="tel" placeholder='Phone Number' />
        <Button text='submit' variant='secondary' type='submit' className='common-form-button' />
      </form>
      <div className='register__form-highlight login__modal-highlight'>
        <span onClick={goToLogin}>
          I want to login
        </span>
      </div>
    </div>
  )

}

export default RegisterForm