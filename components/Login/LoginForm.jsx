import Button from '@components/Button';
import Input from '@components/Input';
import { phoneValidationPattern } from '@utility/functions';
import React from 'react';

function LoginForm({
  handleOTP,
  handleRegister
}) {

  const [pNumber,setPNumber] = React.useState('')
  const [buttonDisable,setButtonDisable] = React.useState(true)

  const callRegister = () => {
    handleRegister()
  }

  const resetState = () => {
    setPNumber('')
    setButtonDisable(true)
    handleOTP()
  }
  const handleChange = (e) => {
    if(e.target.value) {
      setPNumber(e.target.value)
    }
    setButtonDisable(true)
  }

  React.useEffect(() => {
    if(pNumber.match(/^\d{10}$/)) {
      setButtonDisable(false)
      //! Auto Submit
    }
  },[pNumber])

  const formSubmission = (e) => {
    e.preventDefault()
    if(e.target.tel && e.target.tel.value) {
      let tel = e.target.tel.value
      alert(`Hey! Your Phone Number is ${tel}`)
      resetState();
    } else {
      // alert('Sorry,Something went wrong.')
    }
  }


  return (
    <>
      <div className='login__modal-top'>
        <div className="login__modal-text">Please Enter Mobile Number to Continue</div>
        <div className='login__modal-register' onClick={callRegister}>Register</div>
      </div>
      <form onSubmit={formSubmission} className = 'login__modal-form'>
          <div className='login__modal-input-wrap'>
            <div className='login__modal-prefix'>+91</div>
            <Input
              onChange = {handleChange}
              title="Phone number must be of 10 digits"
              pattern = {phoneValidationPattern}
              required
              type="tel"
              name="tel"
              placeholder='XXXXXXXX'
              autoFocus
            />
          </div>
          <Button text='submit' variant='secondary' type='submit' className = 'login__modal-button' disabled = {buttonDisable}/>
      </form>
    </>
  )
}

export default LoginForm