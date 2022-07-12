import React from 'react'
import Icon from '@components/Icon'
function Profile({
  profileImagePath = false,
  name = '',
  feature = false,
  icon = false
}) {

  const imgStyle = profileImagePath ? {
    backgroundImage : `url(${profileImagePath})`
  } : {}
  let userProfile = ''
  if(icon) {
    userProfile = <div className='horizontal__profile-icon'><Icon icon = {icon}/></div>
  } else {
    userProfile = <div className="horizontal__profile-img" style={imgStyle}></div>
  }

  return (
    <div className='horizontal__profile'>
      {userProfile}
      <div className="horizontal__profile-desc">
        <span className="horizontal__profile-name">{name}</span>
        {feature && <span className="horizontal__profile-feature normal-text">{feature}</span>}
      </div>
    </div>
  )
}

export default Profile