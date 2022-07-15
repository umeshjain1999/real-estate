import React from 'react'
import Icon from '@components/Icon'
function HorizontalFeature(props) {
  const {
    profileImagePath = false,
    name = '',
    feature = false,
    icon = false,
    ...remainingProps
  } = props

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
    <div {...remainingProps} className='horizontal__profile'>
      {userProfile}
      <div className="horizontal__profile-desc">
        <span className="horizontal__profile-name">{name}</span>
        {feature && <span className="horizontal__profile-feature normal-text">{feature}</span>}
      </div>
    </div>
  )
}

export default HorizontalFeature