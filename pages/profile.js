//! Secure Page
import Header from '@components/Header'
import Layout from '@components/Layout'
function Profile() {
  return (
    <main className='main-wrapper profile common-layout'>
      <div className='container'>
        <Layout>
          <section className='profile__layout-right'>Profile</section>
        </Layout>
      </div>
    </main>
  )
}

export default Profile

Profile.getLayout = function PageLayout(page){
  return(
    <>
      <Header/>
      {page}
    </>
  )
}