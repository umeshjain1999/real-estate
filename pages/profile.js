import Header from '@components/Header'
import Layout from '@components/Layout'
import { useRouter } from 'next/router'
function Profile() {
  const router = useRouter()
  const {pathname} = router
  
  return (
    <main className='main-wrapper profile common-layout'>
      <div className='container'>
        <Layout currentMenu = {pathname}>
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