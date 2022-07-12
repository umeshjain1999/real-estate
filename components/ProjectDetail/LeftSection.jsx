import React from 'react';
import Card from '@components/Card';
import Profile from '@components/Home/Profile';
import PlanAndPrice from './PlanAndPrice';
import LocalMap from './LocalMap';
function LeftSection(props) {
  const {
    overview = false,
    aboutProject = false,
    aboutDevelopers = false,
    hightLights = false,
    amenities = false,
    floorPlanAndPrice = false,
    localityMap = false
  } = props
  return (
    <div className="project__detail-left-section">
      {overview && <Card title={'Overview'} className = "divider" >{overview}</Card>}
      {hightLights && <Card title = {'Highlights'} className='divider project__detail-highlights'>
        {hightLights && hightLights.map((data) => {
          return (
            <Profile
              key={data?.id}
              name = {data?.name}
              company = {data?.feature}
              icon = {data?.icon}
            />
          )
        })}
      </Card>}
      {aboutProject && <Card title={'About Project'} className = "divider">{aboutProject}</Card>}
      {floorPlanAndPrice && <Card title={'Floor Plan & Price'} className = "divider">
        <PlanAndPrice floorPlanAndPrice = {floorPlanAndPrice}/>
      </Card>}
      {amenities && <Card title = {'Amenities'} className='divider project__detail-amenities'>
        {amenities && amenities.map((data) => {
          return (
            <Profile
              key={data?.id}
              name = {data?.name}
              company = {data?.feature}
              icon = {data?.icon}
            />
          )
        })}
      </Card>}
      {localityMap && <Card title={'Locality'} className='divider project_detail-locality' >
        <LocalMap/>
      </Card>}
      {aboutDevelopers && <Card title={'About Developers'} className = "divider">{aboutDevelopers}</Card>}
    </div>
  )
}

export default LeftSection