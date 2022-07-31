import React from 'react';
import Card from '@components/Card';
import PlanAndPrice from './PlanAndPrice';
import LocalMap from './LocalMap';
import HorizontalFeature from '@components/HorizontalFeature';
function LeftSection(props) {
  const {
    overview = false,
    aboutProject = false,
    aboutDevelopers = false,
    highlights = false,
    amenities = false,
    floorPlanAndPrice = false,
    localityMap = false
  } = props

  return (
    <div className="project__detail-left-section">
      {overview && <Card id="project-overview" title={'Overview'} className = "divider" >{overview}</Card>}
      {highlights && <Card id="project-highlights" title = {'Highlights'} className='divider project__detail-highlights'>
        {highlights && Array.isArray(highlights) && highlights.map((data) => {
          if(data && data.length){
            return (
              <HorizontalFeature
                key={data}
                name = {data}
                // feature = {data}
                icon = {'amenitiesShield'}
              />
            )
          }
        })}
      </Card>}
      {aboutProject && <Card id="project-about" title={'About Project'} className = "divider">{aboutProject}</Card>}
      {floorPlanAndPrice && <Card id="project-plan-price" title={'Floor Plan & Price'} className = "divider">
        <PlanAndPrice floorPlanAndPrice = {floorPlanAndPrice}/>
      </Card>}
      {amenities && <Card id="project-amenities" title = {'Amenities'} className='divider project__detail-amenities'>
        {amenities && Array.isArray(amenities) && amenities.map((data) => {
          if(data && data.length){
            return (
              <HorizontalFeature
                key={data}
                name = {data}
                // feature = {data}
                icon = {'amenitiesRooms'}
              />
            )
          }
        })}
      </Card>}
      {localityMap && <Card id="project-locality" title={'Locality'} className='divider project_detail-locality' >
        <LocalMap/>
      </Card>}
      {aboutDevelopers && <Card id="project-developers" title={'About Developers'} className = "divider">{aboutDevelopers}</Card>}
    </div>
  )
}

export default LeftSection