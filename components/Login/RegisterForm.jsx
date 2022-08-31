/* library */
import React from 'react'
import { useSnackbar } from 'notistack'
/* components */
import Input from '@components/Input'
import RadioButton from '@components/Input/RadioButton'
import Button from '@components/Button'
/* utils */
import { isNormalNumber } from '@utility/functions'
/* helpers */
import { register } from '@helpers/authentication'
/* constant */
import { API_SUCCESS_CODE, ERROR_MESSAGE } from '@constants/constant'

function RegisterForm({
  handleRegister,
  closeModal
}) {
  const { enqueueSnackbar } = useSnackbar()
  const [pNumber, setPNumber] = React.useState('')

  const goToLogin = () => {
    handleRegister()
  }
  const formSubmission = async (e) => {
    e.preventDefault()
    let arr = ['type', 'fullName', 'email', 'tel']
    let registerObj = {}
    for (let index = 0; index < arr.length; index++) {
      let element = arr[index];
      registerObj[element] = e.target[element].value
    }

    const res = await register({
      query: {
        type: registerObj?.type,
        name: registerObj?.fullName,
        email: registerObj?.email,
        phoneNumber: registerObj?.tel
      }
    })

    if (res?.statusCode === API_SUCCESS_CODE) {
      enqueueSnackbar("You're Successfully register!", { variant: 'success' })
      closeModal()
    } else {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
    }
  }

  const handleChange = (e) => {
    const ele = e.target
    if (!isNormalNumber(ele.value)) return false
    setPNumber(ele.value)
  }


  return (
    <div className='register__form'>
      <form onSubmit={formSubmission} className='common-form' >
        <div className='register__form-text'>I am am</div>
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
        <Input required className='common-form-input' onChange={handleChange} value={pNumber} type="tel" name="tel" placeholder='Phone Number' />
        {/* <Input required className='common-form-input' type="text" name="city" placeholder='City' /> */}
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