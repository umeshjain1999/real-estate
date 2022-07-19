//! Secure Page
import Header from '@components/Header'
import Layout from '@components/Layout'
function Profile() {
  return (
    <main className='main-wrapper profile common-layout'>
      <div className='container'>
        <Layout>
          <div className='profile__wrap animation-fade-in-top'>
            <div className='sub-title'>
              {title}
            </div>
          </div>
        </Layout>
      </div>
    </main>
  )
}

export default Profile

const title = 'My Profile'

Profile.getLayout = function PageLayout(page){
  return(
    <>
      <Header/>
      {page}
    </>
  )
}