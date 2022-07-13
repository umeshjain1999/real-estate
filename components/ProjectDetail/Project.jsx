import React from 'react';
import Image from 'next/image';
import Button from '@components/Button';
import HorizontalFeature from '@components/HorizontalFeature';
import Icon from '@components/Icon';
import {currency} from '@constants/constant'

function Project({
  name = false,
  provider = false,
  address = false,
  price = false,
  imageArr = [],
  specsArr = [],
  tags = []
}) {

  const firstImage = imageArr && imageArr[0] ? imageArr[0] : '/assets/images/image-loader.svg';
  
  return (
    <div className="detail__wrap divider">
      <div className="detail__wrap-image">
        <Image
          src = {firstImage}
          alt = {'Property Image'}
          width = {700}
          height = {440}
        />
      </div>
      <div className="detail__wrap-content divider">
        {name && <div className="content-title divider-sm">{name}</div>}
        {provider && <div className="content-provider divider-sm">{provider}</div>}
        {address && <div className="content-address divider-sm">
          <Icon icon='projectDirection'/>
          <span>{address}</span>
        </div>}
        {price && <div className="content-price-range divider-sm">{currency} {price}</div>}
        <div className="content-tags">
          {tags && tags.map((data,index) => {
            return (
              <div className='content-tags-name' key={index}>{data}</div>
            )
          })}
        </div>
        <div className="content-feature-wrap divider">
          {specsArr && specsArr.map((data,index) => {
            return (
              <HorizontalFeature
                name = {data?.name}
                feature = {data?.desc}
                icon = {data?.icon}
                key = {index}
              />
            )
          })}
        </div>
        <Button className = 'content-button' text = {buttonTitle} icon = 'call' variant='secondary' />
      </div>
    </div>
  )
}

const buttonTitle = 'Request a Call Back'

export default Project