import Breadcrumb from "@components/Breadcrumb";
import ProjectCard from "@components/ProjectCard";
import { RecommendedProjects } from "@components/Projects";
import Select from "@components/Select";
import Pagination from "@mui/material/Pagination";
import { GetAPI } from "@utility/apiCall";
import { useRouter } from "next/router";

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

  const handleSelectDropdown = (type,obj) => {
    
    const currentQuery = router.query
    
    if(type && obj?.value){
      router.push({
        query: {
          ...currentQuery,
          [type] : obj?.value
        }
      })
    }
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
          <Select selectOptions={category?.arr} title={category?.title} onChange = {handleSelectDropdown}/>
          <Select selectOptions={beds?.arr} title={beds?.title} onChange = {handleSelectDropdown}/>
          <Select selectOptions={pricing?.arr} title={pricing?.title} onChange = {handleSelectDropdown}/>
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
