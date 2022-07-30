import React from 'react'
import Input from '@components/Input'
import RadioButton from '@components/Input/RadioButton'
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
    let arr = ['type','fullName','email','city','tel']
    let registerObj = {}
    for (let index = 0; index < arr.length; index++) {
      let element = arr[index];
      registerObj[element] = e.target[element].value
    }
    alert(JSON.stringify({...registerObj}))
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
          <RadioButton
            containerClassName = "register__form-radio common-input-radio"
            labelClassName = "common-input-radio-text"
            label="Individual (3 Free Listings)"
            name="type"
            value="individual"
            id="individual"
            defaultChecked
          />
          <RadioButton
            containerClassName = "register__form-radio common-input-radio"
            labelClassName = "common-input-radio-text"
            label="Agent (Unlimited Listings)"
            name="type"
            value="agent"
            id="agent"
          />
        </div>
        <Input required className='common-form-input' type="text" name="fullName" placeholder='Name' autoFocus/>
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