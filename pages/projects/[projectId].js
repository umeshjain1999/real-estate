/* library */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
/* components */
import Breadcrumb from "@components/Breadcrumb";
import { LeftSection, Project, ProjectTab, RightSection } from "@components/ProjectDetail";
import ScrollUp from "@components/ScrollUp";
/* utils */
import { scrollToRef } from "@utility/functions";
/* helpers */
import { getProjectDetail, getRecomendationsProjects } from 'helpers';
/* constants */
import { SITE_META_DATA } from '@constants/constant';

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
  projectTabs = []
}) {
  const [featuredProperties, setFeaturedProperties] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      const rData = await getRecomendationsProjects({
        tags: projectDetail?.tags || [],
        skip: 0,
        limit: 4,
      })
      setFeaturedProperties(rData?.results || [])
    }
    fetchAPI()
  }, [])

  const projectDetailRef = React.useRef(null);

  const executeScroll = () => scrollToRef(projectDetailRef);
  return (
    <main className="main-wrapper project__detail" ref={projectDetailRef}>
      <Head>
        <title>{SITE_META_DATA.PROJECT_DETAIL['title']}{projectDetail?.name || 'none'}</title>
        <meta
          name={SITE_META_DATA.PROJECT_DETAIL['name']}
          content={`${SITE_META_DATA.PROJECT_DETAIL['description']}${projectDetail?.name || 'none'}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
              overview={overview}
              aboutProject={aboutProject}
              aboutDevelopers={aboutDevelopers}
              highlights={highlights}
              amenities={amenities}
              floorPlanAndPrice={floorPlanAndPrice}
              localityMap={localityMap}
            />
            <RightSection featuredProperties={featuredProperties} projectDetail={projectDetail} />
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

  if (!data) {
    return {
      notFound: true,
    }
  }

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
      projectTabs
    }
  }
}


export default ProjectDetail