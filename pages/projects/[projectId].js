import {useRouter} from "next/router"
import Header from "@components/Header";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";

function ProjectDetail() {
  const router = useRouter()
  const projectId = router.query.projectId; 
  return (
    <>
    <Header/>
    <Breadcrumb linkArr={breadcrumb}/>
    <main className="main-wrapper">ProjectDetail {projectId}</main>
    <Footer/>
    </>
  )
}

const breadcrumb = [
  {
    name : 'Home',
    link : '/'
  },
  {
    name : 'Projects',
    link :'/projects'
  },
  {
    name : 'Shree Complex',
  },
]

export default ProjectDetail