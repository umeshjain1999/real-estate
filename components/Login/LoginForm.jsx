import React from 'react';
import Button from '@components/Button';
import Input from '@components/Input';
import { isNormalNumber } from '@utility/functions';
function LoginForm({
  handleOTP,
  handleRegister,
  updatePhoneNumber
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
    const ele = e.target
    if(!isNormalNumber(ele.value)) return false
    setPNumber(ele.value)
  }

  React.useEffect(() => {
    if(pNumber.length === 10) {
      setButtonDisable(false)
      //! Auto Submit
    } else{
      setButtonDisable(true)
    }
  },[pNumber])

  const formSubmission = (e) => {
    e.preventDefault()
    if(pNumber) {
      updatePhoneNumber(pNumber)
      resetState();
      alert(`Hey! Your Phone Number is ${pNumber}`)
    } else {
      alert('Sorry,Something went wrong.')
    }
  }


  return (
    <>
      <div className='login__modal-top'>
        <div className="login__modal-text">Please Enter Mobile Number to Continue</div>
        <div className='login__modal-register login__modal-highlight' onClick={callRegister}>Register</div>
      </div>
      <form onSubmit={formSubmission} className = 'login__modal-form'>
          <div className='login__modal-input-wrap'>
            <div className='login__modal-prefix'>+91</div>
            <Input
              required
              type="tel"
              name="tel"
              autoFocus
              onChange = {handleChange}
              value = {pNumber}
            />
          </div>
          <Button text='submit' variant='secondary' type='submit' className = 'login__modal-button' disabled = {buttonDisable}/>
      </form>
    </>
  )
}

export default LoginForm