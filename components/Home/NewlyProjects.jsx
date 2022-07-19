import React from 'react'
import ProjectCard from '@components/ProjectCard'
import Button from '@components/Button';

function NewlyProjects({
  title = '',
  subTitle = '',
  projectsArr = [],
  bottomButtonLink = '/projects'
}) {
  return (
    <div className="home__newly divider-lg text-center">
      <div className="container">
        <div className="sub-title home__newly__title divider-sm">{title}</div>
        <div className="home__newly__sub-title divider-lg">{subTitle}</div>
        <div className="home__newly__card-wrap">
          {
            projectsArr && projectsArr.map((data) => {
              return (
                <ProjectCard 
                  projectInfo = {data}
                  key = {data.id}
                  horizontal = {true}
                />
              )
            })
          }
        </div>
        <Button text="see more" className = 'home__newly_btn animation-wobble' link = {true} href = {bottomButtonLink} />
          
      </div>
    </div>
  )
}

export default NewlyProjects