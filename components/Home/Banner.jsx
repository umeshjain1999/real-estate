import React from 'react'

function Banner({largeTxt= '',smallTxt=''}) {
  return (
    <div className="home__banner">
        <span className="home__banner__lg_txt">{largeTxt}</span>
        <span className="home__banner__sm_txt">{smallTxt}</span>
    </div>
  )
}

export default Banner;