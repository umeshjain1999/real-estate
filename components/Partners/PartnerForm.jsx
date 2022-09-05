/* library */
import React, { useState, useRef } from 'react'
import Image from 'next/image';
import { useSnackbar } from 'notistack';
/* components */
import Card from '@components/Card';
import Button from '@components/Button';
import Input from '@components/Input';
import EnterOTP from '@components/RequestCallBack/EnterOTP';
import CustomModal from '@components/Modal';
/* utils */
import { isNormalNumber } from '@utility/functions'
/* helpers */
import { becomePartner, verifyOTP, sendOTP } from "@helpers/requestCallback";
/* constants */
import { API_SUCCESS_CODE, ERROR_MESSAGE } from "@constants/constant";

function PartnerForm({
  title = false,
  formTitle = false
}) {

  const formEvent = useRef(null)
  const { enqueueSnackbar } = useSnackbar()
  const [pNumber, setPNumber] = useState('')
  const [query, setQuery] = useState({})
  const [OTP, setOTP] = useState(false)

  const resetInputValues = (e) => {
    let arr = ['fullName', 'email', 'tel']
    for (let index = 0; index < arr.length; index++) {
      let element = arr[index];
      e[element].value = ''
    }
    setPNumber('')
  }

  const formSubmission = async (e) => {
    e.preventDefault()
    let arr = ['fullName', 'email', 'tel']
    let dataObj = {}
    for (let index = 0; index < arr.length; index++) {
      let element = arr[index];
      dataObj[element] = e.target[element].value
    }

    const res = await sendOTP({
      mobile: dataObj?.tel
    })
    setQuery({
      name: dataObj?.fullName,
      email: dataObj?.email,
      phone: dataObj?.tel,
    })
    if (res?.statusCode === API_SUCCESS_CODE) {
      enqueueSnackbar('OTP Successfully Sent', { variant: 'success' })
      setOTP(true)
    } else {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
      setOTP(false)
    }

  }

  const handleChange = (e) => {
    const ele = e.target
    if (!isNormalNumber(ele.value)) return false
    setPNumber(ele.value)
  }

  const otpVerifcation = async ({ phoneNumber, otp }) => {
    const res = await verifyOTP({
      mobile: phoneNumber,
      otp: otp,
    })
    if (res?.statusCode === API_SUCCESS_CODE) {
      const callbackRes = await becomePartner({ ...query })
      if (callbackRes?.statusCode === API_SUCCESS_CODE) {
        enqueueSnackbar("You will soon receive a call on registered mobile number.", { variant: "success" })
        setOTP(false)
        resetInputValues(formEvent.current)
      } else {
        enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
      }

    } else {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
    }
  }


  return (
    <div className='partners__join divider-lg'>
      <div className="partners__join__left">
        <Image
          src={'/assets/images/form_left.png'}
          alt="Buildings"
          width={500}
          height={670}
        />
      </div>
      <div className="partners__join__middle">
        {title && <div className='partners__join__title sub-title'>{title}</div>}
        <Card title={formTitle} >
          <form onSubmit={formSubmission} className='common-form' ref={formEvent}>
            <Input required className='common-form-input' type="text" id="name" name="fullName" placeholder='Name' />
            <Input required className='common-form-input' type="email" id="email" name="email" placeholder='Email ID' />
            <Input required className='common-form-input' onChange={handleChange} value={pNumber} type="tel" id="tel" name="tel" placeholder='Phone Number' />
            <Button text='submit' variant='secondary' type='submit' className='common-form-button' />
          </form>
        </Card>
        <CustomModal open={OTP} onClose={() => setOTP(prev => !prev)} backdropClick={OTP}>
          <Card title={"Enter OTP to continue"} className="login__modal center">
            <EnterOTP
              phoneNumber={pNumber}
              changePhoneNumberFunc={() => setOTP(prev => !prev)}
              otpVerifcationFunc={otpVerifcation}
            />
          </Card>
        </CustomModal>
      </div>
      <div className="partners__join__right">
        <Image
          src={'/assets/images/form_right.png'}
          alt="Buildings"
          width={265}
          height={460}
        />
      </div>
    </div>
  )
}

export default PartnerForm;