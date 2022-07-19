import ProjectCard from '@components/ProjectCard';
import { CustomSlider } from '@components/Slider';

function NearYou({
  title = '',
  subTitle = '',
  projectsArr = [],
}) {
  

  return (
    <div className="home__near divider-lg text-center">
      <div className="container">
        <div className="sub-title home__near__title divider-sm">{title}</div>
        <div className="home__near__sub-title divider-lg">{subTitle}</div>
        <div className="home__near__card-wrap">
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

export default NearYou