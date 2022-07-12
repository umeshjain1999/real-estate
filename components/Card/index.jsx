import React from 'react'

function Card(props) {
  const {title = "",className = ''} = props
  return (
    <div className={`common-card ${className}`}>
        {title && <div className="card-title">{title}</div>}
        <div className="card-content">{props.children}</div>
    </div>
  )
}

export default Card