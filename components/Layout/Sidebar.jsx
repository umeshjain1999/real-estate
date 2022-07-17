import React from 'react'
import Link from 'next/link'
import Icon from '@components/Icon'
function Sidebar({
  className = '',
  currentMenu = ''
}) {
  const sidebarLinks = [
    {
      icon:'loginUser',
      title:'Profile',
      link:'/profile'
    },
    {
      icon:'myListings',
      title:'My Listings',
      link:'/my-listings'
    },
  ]
  return (
    <aside className={`sidebar ${className}`}>
      {sidebarLinks && sidebarLinks.map((data,index) => {
        return(
          <div className={`sidebar__link ${data.link === currentMenu ? 'active':''}`} key={index}>
            <Link href={data?.link}>
              <a className='sidebar__link-child' title={data?.title}>
                <Icon icon={data?.icon}/>
                <span className='sidebar-text'>
                  {data?.title}
                </span>
              </a>
            </Link>
          </div>
        )
      })}
      <div className="sidebar__link-last" title='Logout'>
        <Icon icon='logout'/>
        <span className='sidebar-text'>
          Logout
        </span>
      </div>
    </aside>
  )
}

export default Sidebar