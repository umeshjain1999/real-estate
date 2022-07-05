import React from 'react'
import Icon from '@components/Icon';
import Link from 'next/link';
function ProjectCard(props) {
  const {projectInfo = {}} = props

  const filterData = {
    id : projectInfo?.id || '1',
    name : projectInfo?.name || 'none',
    price: projectInfo?.price || 'none',
    picturePath: projectInfo?.picturePath || '/assets/images/sample.png',
    provider: projectInfo?.provider || 'sqfthomes',
    address: projectInfo?.address || 'none',
    rooms : projectInfo?.rooms || false,
    bathrooms : projectInfo?.bathrooms || false,
    parking : projectInfo?.parking || false,
    area : projectInfo?.area || false,
    saved : projectInfo?.saved || false,
  }


  return (
    <div className="project-res">
      <Link href={`/projects/${filterData.id}`}>
        <a className="project-overlay"></a>
      </Link>
      <div className="project-card">
        <div className="project-img" style={{backgroundImage : `url(${filterData.picturePath})`}}></div>
        <div className="project-content">
          <div className="project-name-wrap">
            <div className="project-name">{filterData.name}</div>
            <div className="project-price">&#8377; {filterData.price}</div>
          </div>
          <div className="project-provider">{filterData.provider}</div>
          <div className="project-address horizontal-center"><Icon icon='projectDirection'/><span className='project-text'>{filterData.address}</span></div>
        </div>
        <div className="project-feat">
          <div className='project-feat-left'>
            {filterData.rooms && <span className='project-feat-icon horizontal-center'><Icon icon='projectBed'/> {filterData.rooms}</span>}
            {filterData.bathrooms && <span className='project-feat-icon horizontal-center'><Icon icon='projectShower'/> {filterData.bathrooms}</span>}
            {filterData.parking && <span className='project-feat-icon horizontal-center'><Icon icon='projectCar'/> {filterData.parking}</span>}
            {filterData.area && <span className='project-feat-icon horizontal-center'><Icon icon='projectArea'/> {filterData.area} Sqft</span>}
          </div>
          <span className={`horizontal-center project-save ${filterData.saved && 'saved'}`}><Icon icon='projectFav'/> {filterData.saved ? 'Saved!' : 'Save'}</span>
        </div>
      </div>
  </div>
  )
}

export default ProjectCard