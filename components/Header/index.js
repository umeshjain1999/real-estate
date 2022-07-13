import React, { useState } from 'react'
import Logo from '@components/Logo';
import Button from '@components/Button';
import Navigation from '@components/Navigation';
import Icon from '@components/Icon';
import Login from '@components/Login';
function Header() {
  const [open,setOpen] = useState(false)
  const [modal,setModal] = useState(false)

  const handleOpen = () => setModal(true)
  const handleClose = () => setModal(false)
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <Logo/>
          <span onClick={() => setOpen(!open)} className = 'header__hamburger-wrap'>
            {!open && <Icon className='header__hamburger animation-jello' icon='hamburger' />}
            {open && <Icon className='header__hamburger' icon='close' />}
          </span>
          <div className={`header__wrapper__nav ${open ? 'active' : ''}`}>
            <Navigation navigation = {headerNavigation} navChildClassName={'link-text'}/>
            <Button onClick={() => handleOpen()} text="Login/Register" icon = 'loginUser' iconPosition = 'right' className = 'header__login'/>
            <Login
              open = {modal}
              onClose = {handleClose}
            />
            <Button text="+91 9326518230" icon = 'call' className = 'header__btn animation-wobble' link = {true} href = {contactInfo} />
          </div>
        </div>
      </div>
    </header>
  )
}

const headerNavigation = [
  {name:'home',link:'/'},
  {name:'projects',link:'/projects'},
  {name:'partners',link:'/partners'},
]

const contactInfo = 'tel:+91 9326518230'

export default Header