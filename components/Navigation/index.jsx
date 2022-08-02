/* library */
import React from 'react'
import Link from 'next/link'

/* hooks */
import {useAuthContext} from 'hooks';

function Navigation({navigation,navClassName="",navChildClassName=""}) {
  
  const {user} = useAuthContext()

  const menuItems = navigation && navigation.map((i,index) => {
    return (
        <Link href={i.link} key={index}>
          <a className={`nav__link ${navChildClassName}`}>
            {i.name}
          </a>
        </Link>
    )
  })
  return (
    <nav className={`nav__wrapper ${navClassName}`}>
      {menuItems}
      {
        user && <Link href='/profile'>
          <a className={`nav__link ${navChildClassName}`}>
            Profile
          </a>
        </Link>
      }
    </nav>
  )
}

export default Navigation