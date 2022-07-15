import React from 'react'
import CustomModal from '@components/Modal';
import Card from '@components/Card';
import Input from '@components/Input';
import Button from '@components/Button';
function Login({
  open,
  onClose
}) {

  
  const [pNumber,setPNumber] = React.useState('')
  const [buttonDisable,setButtonDisable] = React.useState(true)

  const resetState = () => {
    setPNumber('')
    setButtonDisable(true)
    onClose()
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
    <CustomModal open = {open} onClose = {onClose}>
      <Card title = {'Sign in to continue'} className='login__modal center' >
        <div className="login__modal-text">Please Enter Mobile Number to Continue</div>
        <form onSubmit={formSubmission} className = 'login__modal-form'>
            <div className='login__modal-input-wrap'>
              <div className='login__modal-prefix'>+91</div>
              <Input onChange = {handleChange} title="Phone number must be 10 digits" required type="tel" name="tel" placeholder='XXXXXXXX' autoFocus = {true}/>
            </div>
            <Button text='submit' variant='secondary' type='submit' className = 'login__modal-button' disabled = {buttonDisable}/>
        </form>
      </Card>
    </CustomModal>
  )
}

export default Login