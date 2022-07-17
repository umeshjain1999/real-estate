import React from 'react';
import ProjectCard from '@components/ProjectCard';
import Image from 'next/image';
import Card from '@components/Card';
import Input from '@components/Input';
import Button from '@components/Button';

function RightSection({featuredProperties = []}) {

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
    <div className="project__detail-right-section">
      <div className="project__detail-form divider">
        <Card title={contactFormTitle} >
          <form onSubmit={formSubmission} className='common-form' >
            <Input required className='common-form-input' type="text" id="name" name="fullName" placeholder='Name' />
            <Input required className='common-form-input' type="email" id="email" name="email" placeholder='Email ID'/>
            <Input required className='common-form-input' type="tel" id="tel" name="tel" placeholder='Phone Number'/>
            <Button text='submit' variant='secondary' type='submit' className='common-form-button'/>
          </form>
        </Card>
      </div>
      <div className="project__detail-banner divider">
        <Image
          src={'/assets/images/banner.png'}
          alt="Zero Brokerage"
          width={460}
          height={195}
        />
      </div>
      <div className="project__detail-featured-wrap">
        <div className="sub-title-sm divider">{featuredTitle}</div>
        <div className="project__detail-featured">
          {featuredProperties && featuredProperties.map((data) => {
            return (
              <ProjectCard
                projectInfo = {data}
                key = {data?.id}
              />
            )
          }) }
        </div>
      </div>
    </div>
  )
}

const featuredTitle = 'Featured Properties'

const contactFormTitle = 'Contact Our Real Estate experts'

export default RightSection