import React from 'react';
import CustomModal from '@components/Modal';
import LoginForm from './LoginForm';
import OTPForm from './OTPForm';
import Card from '@components/Card';
import RegisterForm from './RegisterForm';
function Login({
  open,
  onClose
}) {
  const initialTitle = loginTitle
  const [OTP,setOTP] = React.useState(false);
  const [Register,setRegister] = React.useState(false)
  const [title,setTitle] = React.useState(initialTitle)
  const [phoneNumber, setPhoneNumber] = React.useState('')
  
  React.useEffect(() => {
    if(OTP) {
      setTitle(otpTitle)
    } else if(Register) {
      setTitle(registerTitle)
    } else {
      setTitle(initialTitle)
    }
  },[OTP,Register])

  const handleOTP = () => {
    setOTP(!OTP)
  }
  
  const handleRegister = () => {
    setRegister(!Register)
  }

  const updatePhoneNumber = (pN) => {
    setPhoneNumber(pN)
  }

  const resetAllState = () => {
    setOTP(false)
    setRegister(false)
    onClose()
  }

  return (
    <CustomModal open = {open} onClose = {resetAllState} type = {OTP ? "OTP" : ''}>
      <Card title = {title} className='login__modal center'>
        {!OTP && !Register && <LoginForm handleOTP = {handleOTP} handleRegister = {handleRegister} updatePhoneNumber = {updatePhoneNumber} />}
        {OTP && <OTPForm phoneNumber = {phoneNumber} handleOTP = {handleOTP} closeModal = {resetAllState}/>}
        {Register && <RegisterForm handleRegister = {handleRegister} closeModal = {resetAllState}/>}
      </Card>
    </CustomModal>
  )
}

const loginTitle = 'Sign in to continue'
const otpTitle = 'Confirm OTP to continue'
const registerTitle = 'Register'

export default Login