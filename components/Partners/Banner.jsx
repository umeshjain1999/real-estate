import React from 'react'

function Banner({largeTxt = false,smallTxt = false}) {
  return (
    <div className="partners__banner">
        {largeTxt && <span className="partners__banner__lg_txt">{largeTxt}</span>}
        {smallTxt && <span className="partners__banner__sm_txt">{smallTxt}</span>}
    </div>
  )
}

export default Banner;