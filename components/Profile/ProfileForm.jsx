import Button from '@components/Button'
import Input from '@components/Input'
import { convertTime, isNormalNumber } from '@utility/functions'
import React from 'react'
function ProfileForm({
  name = '',
  mobile = '',
  email = '',
  dob = '',
  city = '',
  pincode = ''
}) {

  const initialState = {
    name : name,
    mobile : mobile,
    email : email,
    dob : convertTime(dob,'inputDateDefault'),
    city : city,
    pincode : pincode,
  }

  const [user, setUser] = React.useState(initialState)
  const [disable,setDisable] = React.useState(true)

  const formSubmission = (e) => {
    e.preventDefault()
    alert(JSON.stringify({...user}))
    setDisable(true)
  }

  const handleChange = (e) => {
    const ele = e.target
    const objProperty = ele.name
    if((objProperty === 'mobile' || objProperty === 'pincode') && !isNormalNumber(ele.value)){
      return false
    }
    setUser(prev => {
      return{
        ...prev,
      [objProperty] : ele.value
      }
    })
  }

  const cancelSubmit = () => {
    setDisable(true)
  }

  return (
    <div className='profile__form-wrap'>
      <form onSubmit={formSubmission} className='profile__form' >
        <div className="profile__form-inner-wrap">
          <div className="profile__form-input-wrap">
            <label htmlFor='name'>Name</label>
            <Input value = {user?.name} onChange = {handleChange} disabled = {disable} required className='profile__form-input' type="text" name="name" placeholder='Alex Do' />
          </div>
          <div className="profile__form-input-wrap">
            <label htmlFor="mobile">Phone Number</label>
            <Input value = {user?.mobile} onChange = {handleChange} disabled = {disable} required className='profile__form-input' type="tel" name="mobile"/>
          </div>
          <div className="profile__form-input-wrap">
            <label htmlFor="dob">Date of Birth</label>
            <Input value = {user?.dob} onChange = {handleChange} disabled = {disable} required className='profile__form-input' type="date" name="dob" placeholder='26-01-1947'/>
          </div>
          <div className="profile__form-input-wrap">
            <label htmlFor="email">Email Address</label>
            <Input value = {user?.email} onChange = {handleChange} disabled = {disable} required className='profile__form-input' type="email" name="email" placeholder='alex@do.com'/>
          </div>
          <div className="profile__form-input-wrap">
            <label htmlFor="city">City</label>
            <Input value = {user?.city} onChange = {handleChange} disabled = {disable} required className='profile__form-input' type="text" name="city" placeholder='Mumbai' />
          </div>
          <div className="profile__form-input-wrap">
            <label htmlFor="pincode">Pincode</label>
            <Input value = {user?.pincode} onChange = {handleChange} disabled = {disable} required className='profile__form-input' type="number" name="pincode" placeholder='400018' maxLength = '6'/>
          </div>
        </div>
        <div className='profile__form-button-wrap'>
        {!disable && <Button onClick = {cancelSubmit} text='cancel' className='profile__form-cancel-button'/>}
          {!disable && <Button icon='check' iconPosition = 'right' text='save' variant='secondary' type='submit' className='profile__form-button'/>}
        </div>
      </form>
      {disable && <Button onClick = {() => setDisable(!disable)} icon='rightArrow' iconPosition = 'left' text='edit profile' variant='secondary' className='profile__form-edit-button'/>}
    </div>
  )
}

export default ProfileForm