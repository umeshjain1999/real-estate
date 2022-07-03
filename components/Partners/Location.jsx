import React from 'react'

function Location() {
  return (
    <div className="container">
      <div className='partners__locations'>
        <div className='partners__locations__title sub-title'>{locationInfo.title}</div>
        <div className="partners__locations__cards">
          {locationInfo.arr.map((data,index) => {
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
  )
}

const locationInfo = {
  title : 'Cities we are present in',
  arr : [
    {
      url : '/assets/images/locations/mumbai.png',
      location : 'mumbai',
    },
    {
      url : '/assets/images/locations/mumbai.png',
      location : 'goa',
    },
    {
      url : '/assets/images/locations/mumbai.png',
      location : 'hyderabad',
    },
  ]
}

export default Location