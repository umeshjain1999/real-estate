import React from 'react'
import Image from 'next/image';
import Card from '@components/Card';
import Button from '@components/Button';
import Input from '@components/Input';
import { isNormalNumber } from '@utility/functions'

function PartnerForm({
  title = false,
  formTitle = false
}) {

  const [pNumber,setPNumber] = React.useState('')

  const resetInputValues = (e) => {
    let arr = ['fullName','email','tel']
    for (let index = 0; index < arr.length; index++) {
      let element = arr[index];
      e.target[element].value = ''
    }
    setPNumber('')
  }

  const formSubmission = (e) => {
    e.preventDefault()
    try {
      let arr = ['fullName','email','tel']
      let dataObj = {}
      for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        dataObj[element] = e.target[element].value
      }

      alert(`Hey ${dataObj.fullName}, your Email is ${dataObj.email} and Phone Number is ${dataObj.tel}`)
      resetInputValues(e)
    } catch(error)  {
    
      alert('Something went wrong.')
    
    }
  }

  const handleChange = (e) => {
    const ele = e.target
    if(!isNormalNumber(ele.value)) return false
    setPNumber(ele.value)
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
          <form onSubmit={formSubmission} className='common-form' >
            <Input required className='common-form-input' type="text" id="name" name="fullName" placeholder='Name' />
            <Input required className='common-form-input' type="email" id="email" name="email" placeholder='Email ID'/>
            <Input required className='common-form-input' onChange = {handleChange} value = {pNumber} type="tel" id="tel" name="tel" placeholder='Phone Number'/>
            <Button text='submit' variant='secondary' type='submit' className='common-form-button'/>
          </form>
        </Card>
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