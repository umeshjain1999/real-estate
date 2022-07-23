import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
import {useState,useEffect} from 'react'
import Select from "@components/Select";
import Breadcrumb from "@components/Breadcrumb";
import Loader from "@components/Loader";
import ProjectCard from "@components/ProjectCard";
import { RecommendedProjects } from "@components/Projects";
import { GetAPI } from "@utility/apiCall";

function Projects({ projects, info, currentPage }) {

  const [isLoading,setLoading] = useState(false)
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', stopLoading);
    router.events.on('routeChangeError', stopLoading)

    return () => {
        router.events.off('routeChangeStart', startLoading);
        router.events.off('routeChangeComplete', stopLoading);
        router.events.on('routeChangeError', stopLoading)
    }
}, [])

  function handlePaginationChange(e, value) {
    router.push({
      query: {
        page: value,
      },
    });
  }
  
  let CONTENT

  if(isLoading){
    CONTENT = (
      <><Loader/></>
    )
  } else {
    CONTENT = (
      projects && projects.map((data) => {
        return <ProjectCard projectInfo={data} key={data.id} />;
      })
    )
  }

  const recommendedProjects = {
    title: "Recommended Properties",
    //! later this will be change
    projectsArr: projects.slice(0, 6),
  };
  return (
    <main className="main-wrapper projects">
      <div className="container">
        <Breadcrumb linkArr={breadcrumb} />
        <div className="projects__title divider">
          <div className="sub-title projects__title-left">Projects</div>
          <div className="projects__title-right">
            <div className="projects__title-search-count">
              {info?.count ? `${info?.count} Matches` : '' }
            </div>
          </div>
        </div>
        <div className="projects__filter divider">
          <Select selectOptions={category?.arr} title={category?.title} />
          <Select selectOptions={beds?.arr} title={beds?.title} />
          <Select selectOptions={pricing?.arr} title={pricing?.title} />
        </div>
        <div className="projects__wrapper">
          {CONTENT}
        </div>
        <div className="projects__pagination divider center-flex">
          <Pagination
            count={info?.pages}
            className="pagination"
            page={currentPage}
            onChange={handlePaginationChange}
          />
        </div>
      </div>
      <RecommendedProjects {...recommendedProjects} />
    </main>
  );
}

export async function getServerSideProps({query}) {
  const {page} = query
  let data = {}
  
  if  (page)  {
    data = await GetAPI(`character?page=${page}`)
  } else {
    data = await GetAPI('character')
  }

  return {
    props: {
      projects: data?.results,
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

const category = {
  title: "Category",
  arr: [
    { name: "Frodo", value: "Hobbit" },
    { name: "Sam", value: "Hobbit" },
    { name: "Merry", value: "Hobbit" },
    { name: "Gandalf", value: "Maia" },
    { name: "Gimli", value: "Dwarf" },
  ],
};

const beds = {
  title: "Beds",
  arr: [
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
  ],
};

const pricing = {
  title: "Price",
  arr: [
    { name: "10000 - 20000", value: "10to20" },
    { name: "20000 - 30000", value: "20to30" },
    { name: "30000 - 40000", value: "30to40" },
    { name: "40000 and more", value: "40tomore" },
  ],
};

export default Projects;
