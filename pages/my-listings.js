import Header from '@components/Header'
import Layout from '@components/Layout'
import { useRouter } from 'next/router'
function MyListings() {
  const router = useRouter()
  const {pathname} = router
  
  return (
    <main className='main-wrapper interaction common-layout'>
      <div className='container'>
        <Layout currentMenu = {pathname}>
          <section className='profile__layout-right'>MyListings</section>
        </Layout>
      </div>
    </main>
  )
}

export default MyListings

MyListings.getLayout = function PageLayout(page){
  return(
    <>
      <Header/>
      {page}
    </>
  )
}