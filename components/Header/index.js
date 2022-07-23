import React, { useEffect, useState } from 'react'
import Logo from '@components/Logo';
import Button from '@components/Button';
import Navigation from '@components/Navigation';
import Icon from '@components/Icon';
import Login from '@components/Login';
function Header() {
  const [open,setOpen] = useState(false)
  const [modal,setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  useEffect(() => {
    if(open){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  },[open])
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <Logo/>
          <span onClick={() => setOpen(true)} className = 'header__hamburger-wrap'>
            {!open && <Icon className='header__hamburger' icon='hamburger' />}
          </span>
          <div className={`header__wrapper__nav ${open ? 'active animation-entrance' : ''}`}>
            {open && <div className='header__close'  onClick={() => setOpen(false)}>
              <Icon className='header__close' icon='close' />
            </div>}
            <div className='header__wrapper__nav-inner'>
              <Navigation navigation = {headerNavigation} navChildClassName={'link-text'}/>
              <Button onClick={toggleModal} text="Login/Register" icon = 'loginUser' iconPosition = 'right' className = 'header__login'/>
              <Login
                open = {modal}
                onClose = {toggleModal}
              />
              <Button text="+91 9326518230" icon = 'call' className = 'header__btn animation-wobble' link = {true} href = {contactInfo} />
            </div>
          </div>
          {open && <div className='header__overlay animation-entrance' onClick={() => setOpen(false)}></div>}
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