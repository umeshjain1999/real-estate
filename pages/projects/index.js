import Breadcrumb from "@components/Breadcrumb";
import ProjectCard from "@components/ProjectCard";
import { RecommendedProjects } from "@components/Projects";
import Select from "@components/Select";
import { useState, useEffect } from "react";
import axios from "axios";

const getData = async (tData) => {
  try {
    const {} = tData;
    const resp = await axios.get("/projects", {});
    console.log(
      "[index.js]:resp.data:",
      typeof resp.data,
      JSON.stringify(resp.data)
    );
    return resp.data;
  } catch (error) {
    console.error("error at function getData :", error);
    return false;
  }
};

function Projects() {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      console.log("[index.js]:data:", typeof data, JSON.stringify(data));
      setProjectsData(data);
    });
  }, []);

  const recommendedProjects = {
    title: "Recommended Properties",
    projectsArr: projectsData.slice(0, 6),
  };

  return (
    <main className="main-wrapper projects">
      <div className="container">
        <Breadcrumb linkArr={breadcrumb} />
        <div className="sub-title projects__title divider">Projects</div>
        <div className="projects__filter divider">
          <Select selectOptions={category?.arr} title={category?.title} />
          <Select selectOptions={beds?.arr} title={beds?.title} />
          <Select selectOptions={pricing?.arr} title={pricing?.title} />
        </div>
        <div className="projects__wrapper">
          {projectsData &&
            projectsData.map((data) => {
              return <ProjectCard projectInfo={data} key={data.id} />;
            })}
        </div>
      </div>
      <RecommendedProjects {...recommendedProjects} />
    </main>
  );
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

// const projects = [
//   {
//     id: 1,
//     name: "Cosmos",
//     price: "20000",
//     picturePath: "/assets/images/garbage/sample-2.png",
//     provider: "By Kamdhenu Builders",
//     address: "Sector 3, Kharghar, Navi Mumbai 410210",
//     rooms: "5",
//     bathrooms: "3",
//     parking: "3",
//     area: "1000",
//     saved: true,
//   },
//   {
//     id: 2,
//     name: "Milky Way",
//     price: "20000",
//     picturePath: "/assets/images/garbage/sample-3.png",
//     provider: "By Kamdhenu Builders",
//     address: "Sector 3, Kharghar, Navi Mumbai 410210",
//     rooms: "5",
//     bathrooms: "3",
//     parking: "3",
//     area: "1000",
//     saved: false,
//   },
//   {
//     id: 3,
//     name: "Black Eye",
//     price: "20000",
//     picturePath: "/assets/images/garbage/sample.png",
//     provider: "By Kamdhenu Builders",
//     address: "Sector 3, Kharghar, Navi Mumbai 410210",
//     rooms: "5",
//     bathrooms: "3",
//     parking: "3",
//     area: "1000",
//     saved: false,
//   },
//   {
//     id: 4,
//     name: "Sculptor Galaxy",
//     price: "20000",
//     picturePath: "",
//     provider: "By Kamdhenu Builders",
//     address: "Sector 3, Kharghar, Navi Mumbai 410210",
//     rooms: "5",
//     bathrooms: "3",
//     parking: "3",
//     area: "1000",
//     saved: false,
//   },
//   {
//     id: 5,
//     name: "Shree Complex",
//     price: "20000",
//     picturePath: "/assets/images/garbage/sample.png",
//     provider: "By Kamdhenu Builders",
//     address: "Sector 3, Kharghar, Navi Mumbai 410210",
//     rooms: "5",
//     bathrooms: "3",
//     parking: "3",
//     area: "1000",
//     saved: false,
//   },
//   {
//     id: 6,
//     name: "Shree Complex",
//     price: "20000",
//     picturePath: "/assets/images/garbage/sample.png",
//     provider: "By Kamdhenu Builders",
//     address: "Sector 3, Kharghar, Navi Mumbai 410210",
//     rooms: "5",
//     bathrooms: "3",
//     parking: "3",
//     area: "1000",
//     saved: true,
//   },
// ];

// const recommendedProjects = {
//   title: "Recommended Properties",
//   projectsArr: projects.slice(0, 6),
// };

export default Projects;
