import React from 'react'
import Image from 'next/image';
import Card from '@components/Card';
import Button from '@components/Button';
import Input from '@components/Input';

function PartnerForm({
  title = false,
  formTitle = false
}) {

  const formSubmission = (e) => {
    e.preventDefault()
    if( e.target.fullName && e.target.fullName.value
      && e.target.email && e.target.email.value
      && e.target.tel && e.target.tel.value) {
      const data = {
        name : e.target.fullName.value,
        email : e.target.email.value,
        tel : e.target.tel.value
      }
      alert(`Hey ${data.name}, your Email is ${data.email} and Phone Number is ${data.tel}`)
    } else {
      alert('Sorry,Something went wrong.')
    }
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
            <Input required className='common-form-input' type="tel" id="tel" name="tel" placeholder='Phone Number' />
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