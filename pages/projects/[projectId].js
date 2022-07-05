import {useRouter} from "next/router"
import Header from "@components/Header";
import Footer from "@components/Footer";

function ProjectDetail() {
  const router = useRouter()
  const projectId = router.query.projectId; 
  return (
    <>
    <Header/>
    <main className="main-wrapper">ProjectDetail {projectId}</main>
    <Footer/>
    </>
  )
}

export default ProjectDetail