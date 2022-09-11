import React from 'react'
import Image from 'next/image';
import Icon from '@components/Icon';
import { InitialSlide } from '@components/Animation';

function Feature({
  title = false,
  desc = false,
  arr = []
}) {
  return (
    <div className='partners__feat'>
      <div className="partners__feat__left">
        <InitialSlide>
          {title && <div className='feat__title sub-title'>{title}</div>}
          <div className="feat__icons">
            {arr && arr.map((data, index) => {
              return (
                <div className="feat__icon__wrap" key={index}>
                  <Icon icon={data.icon} className={'feat__icon'} />
                  <span className="feat__icon__title">{data.title}</span>
                </div>
              )
            })}
          </div>
          {desc && <p className='feat__desc normal-text'>{desc}</p>}
        </InitialSlide>
      </div>
      <div className="partners__feat__right">
        <Image
          src={'/assets/images/feature.png'}
          alt="Buildings"
          width={400}
          height={670}
        />
      </div>
    </div>
  )
}

export default Feature;