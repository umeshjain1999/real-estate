/* library */
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";

/* compnents */
import Breadcrumb from "@components/Breadcrumb";
import ProjectCard from "@components/ProjectCard";
import { Filter, RecommendedProjects } from "@components/Projects";

/* middleware */
import { getProjects, getFilteredProjects } from "middleware";

/* hooks */

function Projects({ projects, info, currentPage }) {

  const router = useRouter();

  const handlePaginationChange = (e, value) => {

    const currentQuery = router.query

    router.push({
      query: {
        ...currentQuery,
        page: value,
      },
    });
  }

  let CONTENT

  CONTENT = (
    projects && projects.map((data) => {
      return <ProjectCard projectInfo={data} key={data.id} />;
    })
  )

  const recommendedProjects = {
    title: "Recommended Properties",
    //! later this will be change
    projectsArr: projects && projects.slice(0, 6),
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
        <div className="projects__wrapper">
          {CONTENT}
        </div>
        <div className="projects__pagination divider center-flex">
          {projects && <Pagination
            count={info?.pages}
            className="pagination"
            page={currentPage}
            onChange={handlePaginationChange}
          />}
        </div>
      </div>
      <RecommendedProjects {...recommendedProjects} />
    </main>
  );
}

export async function getServerSideProps({ query }) {
  const { page, status = null, locality = null, rooms = null, priceMin = null, priceMax = null } = query

  let localityArr = []
  let roomsArr = []
  if (locality) {
    localityArr = locality.split(',')
  }
  if (rooms) {
    roomsArr = rooms.split(',')
  }

  const tagsArr = [...localityArr, ...roomsArr]

  tagsArr.map((data, index) => {
    query[`tags[${index}]`] = data
  })

  console.log('query serversideprops', query);
  let data = {}

  if (page || status || locality || rooms || (priceMin && priceMax)) {
    data = await getFilteredProjects({ ...query })
  } else {
    data = await getProjects()
  }

  return {
    props: {
      projects: data?.results || [],
      info: data?.info,
      currentPage: parseInt(page) || 1
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
