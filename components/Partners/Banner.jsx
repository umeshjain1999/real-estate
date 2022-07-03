import React from 'react'

function Banner({largeTxt= '',smallTxt=''}) {
  return (
    <div className="partners__banner">
        <span className="partners__banner__lg_txt">{largeTxt}</span>
        <span className="partners__banner__sm_txt">{smallTxt}</span>
    </div>
  )
}

export default Banner;