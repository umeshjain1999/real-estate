import React from 'react'
import Logo from '@components/Logo';
import Button from '@components/Button';
import Navigation from '@components/Navigation';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <Logo/>
          <div className='header__wrapper__nav'>
            <Navigation navigation = {headerNavigation} navChildClassName={'link-text'}/>
            <Button text="Login/Register" icon = 'loginUser' iconPosition = 'right' className = 'header__login'/>
            <Button text="contact us" icon = 'call' className = 'header__btn animation-wobble' link = {true} href = {contactInfo} />
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