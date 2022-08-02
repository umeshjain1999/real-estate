/* library */
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";

/* compnents */
import Breadcrumb from "@components/Breadcrumb";
import ProjectCard from "@components/ProjectCard";
import { RecommendedProjects } from "@components/Projects";
import { CustomMultiSelect,CustomSelect } from "@components/Select";

/* utils */
import { GetAPI } from "@utility/apiCall";

/* middleware */
import { getProjects } from "middleware";

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

    let typeValue = obj.join(',');
    
    const currentQuery = router.query
    if(type && typeValue && typeValue?.length){
      router.push({
        query: {
          ...currentQuery,
          [type] : typeValue
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
    projectsArr: projects && projects.slice(0, 6),
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
          <CustomMultiSelect selectOptions={category?.arr} title={category?.title} onChange = {handleSelectDropdown}/>
          <CustomMultiSelect selectOptions={beds?.arr} title={beds?.title} onChange = {handleSelectDropdown}/>
          <CustomSelect selectOptions={pricing?.arr} title={pricing?.title} onChange = {handleSelectDropdown}/>
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
  

  data = await getProjects()

  // if  (page)  {
  //   data = await GetAPI(`character?page=${page}`)
  // } else {
  //   data = await GetAPI('character')
  // }


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
    { label: "Frodo", value: "Hobbit" },
    { label: "Sam", value: "Jos" },
    { label: "Merry", value: "Dan" },
    { label: "Gandalf", value: "Maia" },
    { label: "Gimli", value: "Dwarf" },
  ],
};

const beds = {
  title: "Rooms",
  arr: [
    { label: "1BHK", value: 1 },
    { label: "2BHK", value: 2 },
    { label: "3BHK", value: 3 },
    { label: "4BHK", value: 4 },
  ],
};

const pricing = {
  title: "Price",
  arr: [
    { label: "10000 - 20000", value: "10to20" },
    { label: "20000 - 30000", value: "20to30" },
    { label: "30000 - 40000", value: "30to40" },
    { label: "40000 and more", value: "40tomore" },
  ],
};

export default Projects;
