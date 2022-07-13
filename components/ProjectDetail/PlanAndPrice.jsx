import React from 'react';
import Button from '@components/Button';
import Image from 'next/image';
function PlanAndPrice({floorPlanAndPrice = []}) {
  const initialState = {
    id : floorPlanAndPrice[0]?.id,
    price : floorPlanAndPrice[0]?.price,
    imagePath : floorPlanAndPrice[0]?.imagePath,
    area : floorPlanAndPrice[0]?.area,
    structure : floorPlanAndPrice[0]?.structure
  }
  const [currentPlan,setPlan] = React.useState(initialState)

  return (
    <div className='project__detail-plan-price'>
      <div className="top-plan-price">
        <div className="tabs-plan-price divider-sm">
          {
            floorPlanAndPrice && floorPlanAndPrice.map((data) => {
              return (
                <div key={data?.id} className={`tabs-wrap-plan-price ${data?.id === currentPlan?.id ? 'active' : ''}`}>
                    <Button onClick={() => setPlan(data)} text= {data?.structure} className = 'structure-plan-price'/>
                    <div className='area-plan-price'>{data?.area}</div>
                </div>
              )
            })
          }
        </div>
        {currentPlan?.price ? <div className="price-plan-price divider-sm">{currentPlan?.price}</div> : 'none'}
      </div>
      <div className='image-plan-price divider'>
        {currentPlan?.imagePath ? <Image
          src={currentPlan?.imagePath}
          alt={currentPlan?.structure}
          width={330}
          height={255}
        /> : 'none'}
      </div>
      <Button text="Contact Us" icon = 'call' className = 'animation-wobble' link = {true} href = {'tel:+91 9326518230'} />
    </div>
  )
}

export default PlanAndPrice