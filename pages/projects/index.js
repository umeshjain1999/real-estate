import Footer from "@components/Footer";
import Header from "@components/Header";
import ProjectCard from "@components/ProjectCard";

function Projects() {
  return (
    <>
    <Header/>
    <main className="main-wrapper projects">
      <div className="container">
        <div className="sub-title projects__title">Projects</div>
        <div className="projects__wrapper">
          {projects && projects.map((data,index) => {
            return(
              <ProjectCard projectInfo = {data} key={index} />
            )
          })}
        </div>
      </div>
    </main>
    <Footer></Footer>
    </>
  );
}

const projects = [
  {
    id: 1,
    name : 'Shree Complex',
    price : '20000',
    picturePath: '',
    provider: 'By Kamdhenu Builders',
    address: 'Sector 3, Kharghar, Navi Mumbai 410210',
    rooms : '5',
    bathrooms : '3',
    parking : '3',
    area : '1000',
    saved : true,
  },
  {
    id: 2,
    name : 'Shree Complex',
    price : '20000',
    picturePath: '',
    provider: 'By Kamdhenu Builders',
    address: 'Sector 3, Kharghar, Navi Mumbai 410210',
    rooms : '5',
    bathrooms : '3',
    parking : '3',
    area : '1000',
    saved : true,
  },
  {
    id: 3,
    name : 'Shree Complex',
    price : '20000',
    picturePath: '',
    provider: 'By Kamdhenu Builders',
    address: 'Sector 3, Kharghar, Navi Mumbai 410210',
    rooms : '5',
    bathrooms : '3',
    parking : '3',
    area : '1000',
    saved : true,
  },
  {
    id: 4,
    name : 'Shree Complex',
    price : '20000',
    picturePath: '',
    provider: 'By Kamdhenu Builders',
    address: 'Sector 3, Kharghar, Navi Mumbai 410210',
    rooms : '5',
    bathrooms : '3',
    parking : '3',
    area : '1000',
    saved : true,
  },
  {
    id: 5,
    name : 'Shree Complex',
    price : '20000',
    picturePath: '',
    provider: 'By Kamdhenu Builders',
    address: 'Sector 3, Kharghar, Navi Mumbai 410210',
    rooms : '5',
    bathrooms : '3',
    parking : '3',
    area : '1000',
    saved : true,
  },
  {
    id: 6,
    name : 'Shree Complex',
    price : '20000',
    picturePath: '',
    provider: 'By Kamdhenu Builders',
    address: 'Sector 3, Kharghar, Navi Mumbai 410210',
    rooms : '5',
    bathrooms : '3',
    parking : '3',
    area : '1000',
    saved : true,
  },
]

export default Projects;
