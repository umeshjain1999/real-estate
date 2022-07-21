import React from 'react'
import Link from 'next/link'
import Icon from '@components/Icon'
import { useRouter } from 'next/router';
import LogoutModal from './LogoutModal';
function Sidebar({
  className = ''
}) {
  const [loginModal,setLoginModal] = React.useState(false)
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
  const toggleModal = () => {
    setLoginModal(!loginModal)
  }
  return (
    <>
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
        <div onClick={toggleModal} className="sidebar__link-last" title='Logout'>
          <Icon icon='logout'/>
          <span className='sidebar-text'>
            Logout
          </span>
        </div>
      </aside>
      <LogoutModal
        open = {loginModal}
        onClose = {toggleModal}
      />
    </>
  )
}

export default Sidebar