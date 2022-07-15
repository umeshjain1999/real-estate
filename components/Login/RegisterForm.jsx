import React from 'react'
import Input from '@components/Input'
import Button from '@components/Button'
function RegisterForm({
  handleRegister
}) {

  const goToLogin = () => {
    handleRegister()
  }
  const formSubmission = (e) => {
    e.preventDefault()
    let arr = ['fullName','email','tel','city']
    let registerObj = {}
    for (let index = 0; index < arr.length; index++) {
      let element = arr[index];
      registerObj[element] = e.target[element].value
    }
    alert(JSON.stringify(registerObj))
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
        <Input required className='common-form-input' type="tel" name="tel" placeholder='Phone Number' />
        <Input required className='common-form-input' type="text" name="city" placeholder='City' />
        <Button text='submit' variant='secondary' type='submit' className='common-form-button'/>
      </form>
      <div className='register__form-login'>
        <span onClick={goToLogin}>
          want to login ?
        </span>
      </div>
    </div>
  )
}

export default RegisterForm