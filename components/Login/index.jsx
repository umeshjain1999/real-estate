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
  const initialTitle = 'Sign in to continue'
  const [OTP,setOTP] = React.useState(false);
  const [Register,setRegister] = React.useState(false)
  const [title,setTitle] = React.useState(initialTitle)
  
  React.useEffect(() => {
    if(OTP) {
      setTitle('Confirm OTP to continue')
    } else if(Register) {
      setTitle('Register')
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

  const resetAllState = () => {
    setOTP(false)
    setRegister(false)
    onClose()
  }

  return (
    <CustomModal open = {open} onClose = {resetAllState}>
      <Card title = {title} className='login__modal center'>
        {!OTP && !Register && <LoginForm handleOTP = {handleOTP} handleRegister = {handleRegister} />}
        {OTP && <OTPForm/>}
        {Register && <RegisterForm handleRegister = {handleRegister}/>}
      </Card>
    </CustomModal>
  )
}

export default Login