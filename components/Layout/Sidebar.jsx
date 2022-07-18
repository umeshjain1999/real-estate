import React from 'react'
import Link from 'next/link'
import Icon from '@components/Icon'
import { useRouter } from 'next/router';
function Sidebar({
  className = ''
}) {
  const router = useRouter()
  const {pathname} = router
  const sidebarLinks = [
    {
      icon:'loginUser',
      title:'Profile',
      link:'/profile'
    },
    {
      icon:'activity',
      title:'My Activity',
      link:'/activity'
    },
  ]
  return (
    <aside className={`sidebar ${className}`}>
      {sidebarLinks && sidebarLinks.map((data,index) => {
        return(
          <div className={`sidebar__link ${data.link === pathname ? 'active' : ''}`} key={index}>
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