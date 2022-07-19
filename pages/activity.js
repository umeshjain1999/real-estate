//! Secure Page
import Header from '@components/Header'
import Layout from '@components/Layout'
import ProjectCard from '@components/ProjectCard'
function MyActivity() {
  return (
    <main className='main-wrapper activity common-layout'>
      <div className='container'>
        <Layout>
          <div className='activity__wrap animation-fade-in-top'>
            <div className='sub-title divider'>
              {title}
            </div>
            <div className='activity__saved'>
              {savedListings && savedListings.map((data) => {
                return(
                  <ProjectCard
                    projectInfo = {data}
                    key = {data.id}
                    horizontal = {true}
                    feature = {false}
                    provider = {false}
                  />
                )
              })}
            </div>
          </div>
        </Layout>
      </div>
    </main>
  )
}

export default MyActivity

const title = 'My Activity'

const savedListings = [
  {
    id: 1,
    name : 'White Spurs',
    price : '20000',
    picturePath: '/assets/images/garbage/sample-2.png',
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
    name : 'Old Lady',
    price : '20000',
    picturePath: '/assets/images/garbage/sample-3.png',
    provider: 'By Kamdhenu Builders',
    address: 'Sector 3, Kharghar, Navi Mumbai 410210',
    rooms : '5',
    bathrooms : '3',
    parking : '3',
    area : '1000',
    saved : true,
  },
]

MyActivity.getLayout = function PageLayout(page){
  return(
    <>
      <Header/>
      {page}
    </>
  )
}