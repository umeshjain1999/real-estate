import React from 'react';
import Image from 'next/image';
import Button from '@components/Button';
import HorizontalFeature from '@components/HorizontalFeature';
import Icon from '@components/Icon';
import {currency} from '@constants/constant'
function Project() {
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
        <div className="content-title divider-sm">White Forest</div>
        <div className="content-provider divider-sm">by Kamdhenu Builers</div>
        <div className="content-address divider-sm">
          <Icon icon='projectDirection'/>
          <span>Sector 3, Kharghar, Navi Mumbai 410210</span>
        </div>
        <div className="content-price-range divider-sm">{currency} 2.5 Cr to 2.7 Cr</div>
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