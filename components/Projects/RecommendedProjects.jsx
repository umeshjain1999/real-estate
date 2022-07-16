import ProjectCard from '@components/ProjectCard';
import { CustomSlider } from '@components/Slider';

function RecommendedProjects({
  title = '',
  projectsArr = [],
}) {
  

  return (
    <div className="projects__recommended divider-lg">
      <div className="container">
        <div className="sub-title-sm projects__recommended__title divider-sm">{title}</div>
        <div className="projects__recommended__card-wrap">
          <CustomSlider>
            {
              projectsArr && projectsArr.map((data) => {
                return (
                  <div key = {data.id}>
                    <ProjectCard
                      projectInfo = {data}
                    />
                  </div>
                )
              })
            }
          </CustomSlider>
        </div>
      </div>
    </div>
  )
}

export default RecommendedProjects