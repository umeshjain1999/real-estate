import React from 'react'
import ProjectCard from '@components/ProjectCard'

function NearYou() {
  return (
    <div className="home__near">
      <div className="container">
        <div className="home__near__wrap">
          <ProjectCard 
            projectInfo = {data}
            horizontal = {true}
          />
          <ProjectCard 
            projectInfo = {data}
            horizontal = {true}
          />
          <ProjectCard 
            projectInfo = {data}
            horizontal = {true}
          />
          <ProjectCard 
            projectInfo = {data}
            horizontal = {true}
          />
        </div>
      </div>
    </div>
  )
}

const data =   {
  id: 1,
  name : 'Shree Complex',
  price : '20000',
  picturePath: '/assets/images/sample.png',
  provider: 'By Kamdhenu Builders',
  address: 'Sector 3, Kharghar, Navi Mumbai 410210',
  rooms : '5',
  bathrooms : '3',
  parking : '3',
  area : '1000',
  saved : true,
}

export default NearYou