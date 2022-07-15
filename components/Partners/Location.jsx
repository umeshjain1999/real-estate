import React from 'react'

function Location({
  title = false,
  arr = []
}) {
  return (
    <div className='partners__locations divider-lg'>
      <div className="container">
      <div className='partners__locations_wrap'>
        {title && <div className='partners__locations__title sub-title divider'>{title}</div>}
        <div className="partners__locations__cards">
          {arr && arr.map((data,index) => {
            return (
              <div className="location__card" key={index}>
              <div className="location__card__img" style={{
                backgroundImage : `url(${data.url})`
              }}></div>
              <div className="location__card__title">{data.location}</div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Location