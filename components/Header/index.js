/* library */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

/* components */
import Logo from '@components/Logo';
import Button from '@components/Button';
import Navigation from '@components/Navigation';
import Icon from '@components/Icon';
import Login from '@components/Login';

/* hooks */
import { useLoginModalContext, useAuthContext } from 'hooks';

/* constant */
import { MOBILE_NUMBER } from '@constants/constant';


function Header() {
  const router = useRouter()
  const { loginModal, toggleLoginModal } = useLoginModalContext()
  const { user } = useAuthContext()
  const [menuStatus, setMenuStatus] = useState(false)


  useEffect(() => {
    if (menuStatus) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuStatus])

  useEffect(() => {
    const toggleMenu = () => {
      setMenuStatus(false)
    }
    router.events.on('routeChangeComplete', toggleMenu)

    return () => {
      router.events.off('routeChangeComplete', toggleMenu)
    }
  }, [router])

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <Logo />
          <span onClick={() => setMenuStatus(true)} className='header__hamburger-wrap'>
            {!menuStatus && <Icon className='header__hamburger' icon='hamburger' />}
          </span>
          <div className={`header__wrapper__nav ${menuStatus ? 'active' : ''}`}>
            <div className='header__close' onClick={() => setMenuStatus(false)}>
              <Icon className='header__close' icon='close' />
            </div>
            <div className='header__wrapper__nav-inner'>
              <Navigation navigation={headerNavigation} navChildClassName={'link-text'} />
              {!user && <Button onClick={toggleLoginModal} text="Login/Register" icon='loginUser' iconPosition='right' className='header__login' />}
              {!user && <Login
                open={loginModal}
                onClose={toggleLoginModal}
              />}
              <Button text="+91 9326518230" icon='call' className='header__btn animation-wobble' link={true} href={contactInfo} />
            </div>
          </div>
          {menuStatus && <div className='header__overlay' onClick={() => setMenuStatus(false)}></div>}
        </div>
      </div>
    </header>
  )
}

const headerNavigation = [
  { name: 'home', link: '/' },
  { name: 'projects', link: '/projects' },
  { name: 'partners', link: '/partners' },
]

const contactInfo = `tel:${MOBILE_NUMBER}`

export default Header