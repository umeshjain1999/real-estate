/* library */
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";

/* components */
import Breadcrumb from "@components/Breadcrumb";
import ProjectCard from "@components/ProjectCard";
import { Filter, RecommendedProjects } from "@components/Projects";

/* helpers */
import { getFilteredProjects, getRecomendationsProjects } from "helpers";

function Projects({ projects, info, currentPage, recommendedProjects }) {

  const router = useRouter();

  const handlePaginationChange = (value) => {

    const currentQuery = router.query

    router.push({
      query: {
        ...currentQuery,
        page: value,
      },
    });
  }

  const recommendedSection = {
    title: "Recommended Properties",
    projectsArr: recommendedProjects,
  };

  return (
    <main className="main-wrapper projects">
      <div className="container">
        <Breadcrumb linkArr={breadcrumb} />
        <div className="projects__title divider-sm">
          <div className="sub-title projects__title-left">Projects</div>
          <div className="projects__title-right">
            <div className="projects__title-search-count">
              {info?.count ? `${info?.count} Matches` : ''}
            </div>
          </div>
        </div>
        <Filter
          beds={beds}
          locality={locality}
          status={status}
        />
        {projects?.length ?
          <div className="projects__wrapper">
            {projects.map((data) => {
              return <ProjectCard projectInfo={data} key={data.id} />;
            })}
          </div>
          : <div className="divider horizontal-center">Sorry, No results found!</div>
        }
        {projects?.length ? <div className="projects__pagination divider center-flex">
          <Pagination
            count={info?.pages}
            className="pagination"
            page={currentPage}
            onChange={handlePaginationChange}
          />
        </div> : ''}
      </div>
      {recommendedProjects?.length ? <RecommendedProjects {...recommendedSection} /> : ''}
    </main>
  );
}

export async function getServerSideProps({ query }) {
  const { page = null, locality = null, rooms = null } = query
  let localityArr = []
  let roomsArr = []
  let offset = 0
  let limit = 10

  /*
  ?combine locality and rooms
  */
  if (locality) {
    localityArr = locality.split(',')
  }
  if (rooms) {
    roomsArr = rooms.split(',')
  }

  const tagsArr = [...localityArr, ...roomsArr]
  let updatedTagsArr = {}

  if (tagsArr?.length) {
    tagsArr.map((data, index) => {
      updatedTagsArr[`tags[${index}]`] = data
    })
  } else {
    updatedTagsArr['tags'] = '[]'
  }

  /* pagination logic */
  if (page) {
    offset = (limit * offset) - limit
  }

  let data = {}

  data = await getFilteredProjects({ ...query, ...updatedTagsArr, 'offset': offset, 'limit': limit })

  let recomData = await getRecomendationsProjects({
    skip: 0,
    limit: 6,
  })

  return {
    props: {
      projects: data?.results || [],
      info: data?.info,
      currentPage: parseInt(page) || 1,
      recommendedProjects: recomData?.results || []
    },
  }
}

const breadcrumb = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
  },
];

const beds = {
  title: "Rooms",
  queryName: "rooms",
  arr: [
    { name: "1BHK", value: "1BHK" },
    { name: "2BHK", value: "2BHK" },
    { name: "3BHK", value: "3BHK" },
    { name: "4BHK", value: "4BHK" },
    { name: "5BHK", value: "5BHK" },
    { name: "6BHK", value: "6BHK" },
    { name: "Studio", value: "Studio" },
  ],
};

const locality = {
  title: "Locality",
  queryName: "locality",
  arr: [
    {
      name: 'Ulwe',
      value: 'Ulwe'
    },
    {
      name: 'Vashi',
      value: 'Vashi'
    },
    {
      name: 'Gansoli',
      value: 'Gansoli'
    },
  ],
};

const status = {
  title: "Status",
  queryName: "status",
  arr: [
    { name: "Ready to Move In", value: "ready" },
    { name: "Ongoing Project", value: "ongoing" },
  ],
};

export default Projects;
