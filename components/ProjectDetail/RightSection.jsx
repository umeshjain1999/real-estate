import React from 'react';
import ProjectCard from '@components/ProjectCard';
import Image from 'next/image';
import Card from '@components/Card';
import Input from '@components/Input';
import Button from '@components/Button';
import { isNormalNumber } from '@utility/functions';

function RightSection({ featuredProperties = [] }) {

  const [pNumber, setPNumber] = React.useState('')

  const resetInputValues = (e) => {
    let arr = ['fullName', 'email', 'tel']
    for (let index = 0; index < arr.length; index++) {
      let element = arr[index];
      e.target[element].value = ''
    }
    setPNumber('')
  }

  const formSubmission = (e) => {
    e.preventDefault()
    try {
      let arr = ['fullName', 'email', 'tel']
      let dataObj = {}
      for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        dataObj[element] = e.target[element].value
      }

      alert(`Hey ${dataObj.fullName}, your Email is ${dataObj.email} and Phone Number is ${dataObj.tel}`)
      resetInputValues(e)
    } catch (error) {

      alert('Something went wrong.')

    }
  }

  const handleChange = (e) => {
    const ele = e.target
    if (!isNormalNumber(ele.value)) return false
    setPNumber(ele.value)
  }

  return (
    <div className="project__detail-right-section">
      <div className="project__detail-form divider">
        <Card title={contactFormTitle} >
          <form onSubmit={formSubmission} className='common-form' >
            <Input required className='common-form-input' type="text" id="name" name="fullName" placeholder='Name' />
            <Input required className='common-form-input' type="email" id="email" name="email" placeholder='Email ID' />
            <Input required className='common-form-input' onChange={handleChange} value={pNumber} type="tel" id="tel" name="tel" placeholder='Phone Number' />
            <Button text='submit' variant='secondary' type='submit' className='common-form-button' />
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
      {featuredProperties?.length ? <div className="project__detail-featured-wrap">
        <div className="sub-title-sm divider">{featuredTitle}</div>
        <div className="project__detail-featured">
          {featuredProperties.map((data) => {
            return (
              <ProjectCard
                projectInfo={data}
                key={data?.id}
              />
            )
          })}
        </div>
      </div> : ''}
    </div>
  )
}

const featuredTitle = 'Featured Properties'

const contactFormTitle = 'Contact Our Real Estate experts'

export default RightSection