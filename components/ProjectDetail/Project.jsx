import React from 'react';
import Image from 'next/image';
import Button from '@components/Button';
import HorizontalFeature from '@components/HorizontalFeature';
import Icon from '@components/Icon';
import {currency} from '@constants/constant'
function Project({projectDetail}) {
  return (
    <div className="detail__wrap divider">
      <div className="detail__wrap-image">
        <Image
          src = {'/assets/images/garbage/sample-2.png'}
          alt = {'Project Details'}
          width = {700}
          height = {440}
        />
      </div>
      <div className="detail__wrap-content divider">
        <div className="content-title divider-sm">{projectDetail?.name}</div>
        <div className="content-provider divider-sm">{projectDetail?.provider}</div>
        <div className="content-address divider-sm">
          <Icon icon='projectDirection'/>
          <span>{projectDetail?.address}</span>
        </div>
        <div className="content-price-range divider-sm">{currency} {projectDetail?.price}</div>
        <div className="content-tags">
          {projectDetail?.tags && projectDetail?.tags.map((data) => {
            return (
              <div className='content-tags-name'>{data}</div>
            )
          })}
        </div>
        <div className="content-feature-wrap divider">
          <HorizontalFeature
            name = {'Configuration'}
            feature = {'1,2BHK Aparments'}
            icon = {'amenitiesRooms'}
          />
          <HorizontalFeature
            name = {'Sizes'}
            feature = {'443.00 sq.ft. - 655.00 sq.ft. (Carpet Area)'}
            icon = {'amenitiesRooms'}
          />
        </div>
        <Button className = 'content-button' text = 'Request a Call Back' icon = 'call' variant='secondary' />
      </div>
    </div>
  )
}

export default Project