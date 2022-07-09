import React from 'react'

function Profile({
  profileImagePath = false,
  name = '',
  company = false
}) {
  const imgStyle = profileImagePath ? {
    backgroundImage : `url(${profileImagePath})`
  } : {}
  return (
    <div className='user__profile'>
      <div className="user__profile-img" style={imgStyle}></div>
      <div className="user__profile-desc">
        <span className="user__profile-name">{name}</span>
        {company && <span className="user__profile-company normal-text">{company}</span>}
      </div>
    </div>
  )
}

export default Profile