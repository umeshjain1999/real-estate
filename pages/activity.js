//! Secure Page
import Header from '@components/Header'
import Layout from '@components/Layout'
function MyActivity() {
  return (
    <main className='main-wrapper interaction common-layout'>
      <div className='container'>
        <Layout>
          <section className='profile__layout-right'>MyActivity</section>
        </Layout>
      </div>
    </main>
  )
}

export default MyActivity

MyActivity.getLayout = function PageLayout(page){
  return(
    <>
      <Header/>
      {page}
    </>
  )
}