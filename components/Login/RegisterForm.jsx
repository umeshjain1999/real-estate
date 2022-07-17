import React from 'react'
import Input from '@components/Input'
import Button from '@components/Button'
import { isNormalNumber } from '@utility/functions'
function RegisterForm({
  handleRegister,
  closeModal
}) {

  const [pNumber,setPNumber] = React.useState('')

  const goToLogin = () => {
    handleRegister()
  }
  const formSubmission = (e) => {
    e.preventDefault()
    let arr = ['fullName','email','city']
    let registerObj = {}
    for (let index = 0; index < arr.length; index++) {
      let element = arr[index];
      registerObj[element] = e.target[element].value
    }
    alert(JSON.stringify({...registerObj,'tel': pNumber}))
    closeModal()
  }

  const handleChange = (e) => {
    const ele = e.target
    if(!isNormalNumber(ele.value)) return false
    setPNumber(ele.value)
  }


  return (
    <div className='register__form'>
      <form onSubmit={formSubmission} className='common-form' >
      <div className='register__form-text'>I am am</div>
      <div className="register__form-wrap">
          <div className='register__form-radio common-input-radio'>
              <Input type="radio" name="type" value = "individual" defaultChecked/>
                <span className='common-input-radio-text'>Individual (3 Free Listings)</span>
          </div>
          <div className='register__form-radio common-input-radio'>
              <Input type="radio" name="type" value = "agent" />
              <span className='common-input-radio-text'>Agent (Unlimited Listings)</span>
          </div>
        </div>
        <Input required className='common-form-input' type="text" name="fullName" placeholder='Name' />
        <Input required className='common-form-input' type="email" name="email" placeholder='Email ID'/>
        <Input required className='common-form-input' onChange = {handleChange} value = {pNumber} type="tel" name="tel" placeholder='Phone Number'/>
        <Input required className='common-form-input' type="text" name="city" placeholder='City' />
        <Button text='submit' variant='secondary' type='submit' className='common-form-button'/>
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