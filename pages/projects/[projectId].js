/* library */
import React from 'react';

/* components */
import Breadcrumb from "@components/Breadcrumb";
import { LeftSection, Project, ProjectTab, RightSection } from "@components/ProjectDetail";
import ScrollUp from "@components/ScrollUp";

/* utils */
import { scrollToRef, stringToHtml } from "@utility/functions";

/* middleware */
import { getProjectDetail, getProjects } from 'middleware';

function ProjectDetail({
  projectDetail = {},
  floorPlanAndPrice,
  highlights,
  amenities,
  localityMap,
  overview,
  aboutProject,
  aboutDevelopers,
  breadcrumb,
  featuredProperties = [],
  projectTabs = []
}) {

  const projectDetailRef = React.useRef(null);

  const executeScroll = () => scrollToRef(projectDetailRef);
  return (
    <main className="main-wrapper project__detail" ref={projectDetailRef}>
      <div className="project__detail-top divider-lg">
        <div className="container">
          <div className="project__detail-top-wrap">
            <Breadcrumb linkArr={breadcrumb} />
            <Project {...projectDetail} />
            <ProjectTab projectTabs={projectTabs} />
          </div>
        </div>
      </div>
      <div className="project__detail-bottom">
        <div className="container">
          <div className="project__detail-bottom-wrap divider-lg">
            <LeftSection
              overview={stringToHtml(overview)}
              aboutProject={stringToHtml(aboutProject)}
              aboutDevelopers={stringToHtml(aboutDevelopers)}
              highlights={highlights}
              amenities={amenities}
              floorPlanAndPrice={floorPlanAndPrice}
              localityMap={localityMap}
            />
            <RightSection featuredProperties={featuredProperties} />
          </div>
          <ScrollUp onClick={executeScroll} />
        </div>
      </div>
    </main>
  )
}

export const getServerSideProps = async (ctx) => {

  const { query } = ctx
  const { projectId } = query

  const data = await getProjectDetail(projectId)
  const featuredProperties = await getProjects()

  const breadcrumb = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Projects',
      link: '/projects'
    },
    {
      name: data?.name || 'none',
    },
  ]

  const localityMap = true

  //! can include html in the text will be reflected as per html
  // const overview = "Why Arihant Enclave?<ul><li>Early Possession by Dec 2022 </li><li>Full CC Received </li><li>No of Towers: Standalone </li><li>Structure: Gr. + 18 Storeys </li><li>Configuration: 1Bhk, 2Bhk & 4.5Bhk (2Bhk Jodi) </li><li>Total Flats per Floor: 4 </li></ul>Godrej Horizon was envisioned as a great expression of an exclusive and higher living lifestyle. Situated in Dadar-Wadala west, covered in a lush green surrounding; a turn away from the pollution & noises of the town. Designed by reputed architects, the project comprises every luxury & suitability. This residential project is developed by the very well-known developer Godrej Properties at Dadar Wadala In Mumbai."
  //! can include html in the text will be reflected as per html
  // const aboutProject = "<p>Arihant Enclave is a project by Arihant Developers in Mumbai. It is a Under Construction project. Arihant Enclave offers some of the most conveniently designed Apartment. Located in Andheri East, it is a residential project. The project is spread over 0.31 Acres . It has 67 units. There is 1 building in this project. Arihant Enclave offers some of the most exclusive 1 BHK, 2 BHK. As per the area plan, units are in the size range of 443.0 - 655.0 sq.ft.. Launched in September 2021, Arihant Enclave is slated for possession in Dec, 2023. The address of Arihant Enclave is Old Nagardas Road, Andheri East.</p><p>Arihant Enclave ensures a coveted lifestyle and offers a convenient living. It offers facilities such as Gymnasium. The property has Fire Protection And Fire Safety Requirements. Some other provisions include access to Landscaping & Tree Planting, Storm Water Drains. There is provision for Closed Car Parking.</p><p>The project is RERA compliant and fulfils all necessities as required by the authorities. RERA ID of Arihant Enclave is P51800030594.</p><p>Till date, Arihant Developers has developed 1 projects with a focus on healthy and sustainable lifestyle.</p><p>Andheri East is well-connected to other parts of the city via an extensive road.</p>"
  //! can include html in the text will be reflected as per html
  // const aboutDevelopers = "<h3>Arihant Developrs</h3><p>Arihant Developers is a promising Real Estate Development company. They develop residential properties with an aim to provide the best in quality. They have impeccable efficiency and remarkable management which will take them a long way in Real Estate development. They have a dedicated and experienced team of architects and workers who slog day in and day out to deliver projects on time to their customers. Their aim is to see their customers happy by providing them with dream homes equipped with all the modern amenities and features.</p>"

  const projectTabs = [
    {
      title: "Overview",
      link: "#project-overview",
      data: data?.overview || false
    },
    {
      title: "Highlights",
      link: "#project-highlights",
      data: data?.highlights || false
    },
    {
      title: "About Project",
      link: "#project-about",
      data: data?.aboutProject || false
    },
    {
      title: "Floor Plan & Price",
      link: "#project-plan-price",
      data: data?.floorPlanAndPrice || false
    },
    {
      title: "Amenities",
      link: "#project-amenities",
      data: data?.amenities || false
    },
    {
      title: "Locality",
      link: "#project-locality",
      data: localityMap || false
    },
    {
      title: "About Developers",
      link: "#project-developers",
      data: data?.aboutDevelopers || false
    },
  ]

  return {
    props: {
      projectDetail: data,
      floorPlanAndPrice: data?.floorPlanAndPrice,
      highlights: data?.highlights,
      amenities: data?.amenities,
      localityMap: localityMap,
      overview: data?.overview,
      aboutProject: data?.aboutProject,
      aboutDevelopers: data?.aboutDevelopers,
      breadcrumb,
      featuredProperties: featuredProperties?.results?.slice(0, 3),
      projectTabs
    }
  }
}


export default ProjectDetail