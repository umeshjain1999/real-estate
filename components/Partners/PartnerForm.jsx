import React from 'react'
import Image from 'next/image';
import Card from '@components/Card';
import Button from '@components/Button';
import Input from '@components/Input';

function PartnerForm() {
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
    <div className='partners__join'>
      <div className="partners__join__left">
        <Image
            src={'/assets/images/form_left.png'}
            alt="Buildings"
            width={500}
            height={670}
          />
      </div>
      <div className="partners__join__middle">
        <div className='partners__join__title sub-title'>Join the Sqfthome family</div>
        <Card title={'Fill the Form to Be a Partner'} >
          <form onSubmit={formSubmission} className='partners__join__form' >
            <Input required inputClassName='partners__form__input' type="text" id="name" name="fullName" placeholder='Name' />
            <Input required inputClassName='partners__form__input' type="email" id="email" name="email" placeholder='Email ID'/>
            <Input required inputClassName='partners__form__input' type="tel" id="tel" name="tel" placeholder='Phone Number' />
            <Button text='submit' variant='secondary' type='submit' className='partners__join__button'/>
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