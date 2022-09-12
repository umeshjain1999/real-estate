import React from 'react';
import Button from '@components/Button';
import Image from 'next/image';
import { CURRENCY } from '@constants/constant';
import { useRouter } from 'next/router';
function PlanAndPrice({ floorPlanAndPrice = [] }) {
  const router = useRouter()
  const initialState = {
    price: floorPlanAndPrice[0]?.price,
    area: floorPlanAndPrice[0]?.area,
    structure: floorPlanAndPrice[0]?.structure
  }
  const [currentPlan, setPlan] = React.useState(initialState)

  React.useEffect(() => {
    setPlan(initialState)
  }, [router])

  return (
    <div className='project__detail-plan-price'>
      <div className="top-plan-price">
        <div className="tabs-plan-price divider-sm">
          {
            floorPlanAndPrice && floorPlanAndPrice.map((data) => {
              return (
                <div key={data?.structure} className={`tabs-wrap-plan-price ${data?.structure === currentPlan?.structure ? 'active' : ''}`}>
                  <Button onClick={() => setPlan(data)} text={data?.structure.toUpperCase()} className='structure-plan-price' />
                  <div className='area-plan-price'>{data?.area}</div>
                </div>
              )
            })
          }
        </div>
        {currentPlan?.price ? <div className="price-plan-price divider-sm">{CURRENCY} {currentPlan?.price}</div> : 'none'}
      </div>
      <div className='image-plan-price divider'>
        {currentPlan?.structure && floorImage[currentPlan?.structure.toUpperCase()] ? <Image
          src={floorImage[currentPlan?.structure.toUpperCase()]}
          alt={currentPlan?.structure}
          width={330}
          height={255}
        /> : 'none'}
      </div>
      <Button text="Contact Us" icon='call' link={true} href={'tel:+91 9326518230'} />
    </div>
  )
}

export default PlanAndPrice

const floorImage = {
  "1BHK": '/assets/images/rooms/1BHK.png',
  "2BHK": '/assets/images/rooms/2BHK.png',
  "3BHK": '/assets/images/rooms/2BHK.png',
  "4BHK": '/assets/images/rooms/2BHK.png',
  "5BHK": '/assets/images/rooms/2BHK.png',
  "6BHK": '/assets/images/rooms/2BHK.png',
}