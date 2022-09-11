import ProjectCard from '@components/ProjectCard';
import { CustomSlider } from '@components/Slider';
import { InitialSlide } from '@components/Animation';

function NearYou({
  title = '',
  subTitle = '',
  projectsArr = [],
}) {


  return (
    <div className="home__near text-center">
      <div className="container">
        <div className="sub-title home__near__title divider-sm">{title}</div>
        <div className="home__near__sub-title divider-lg">{subTitle}</div>
        <InitialSlide>
          <div className="home__near__card-wrap">
            <CustomSlider>
              {
                projectsArr && projectsArr.map((data) => {
                  return (
                    <div key={data.id}>
                      <ProjectCard
                        projectInfo={data}
                      />
                    </div>
                  )
                })
              }
            </CustomSlider>
          </div>
        </InitialSlide>
      </div>
    </div>
  )
}

export default NearYou