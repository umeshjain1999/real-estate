import React from 'react'
import Link from 'next/link'
function Navigation({navigation,navClassName="",navChildClassName=""}) {
  
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
    </nav>
  )
}

export default Navigation