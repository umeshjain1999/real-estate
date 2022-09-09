//! Secure Page
/* library */
import { getCookie } from 'cookies-next'
/* components */
import Activity from '@components/Activity'
import Header from '@components/Header'
import Layout from '@components/Layout'
/* hooks */
import { getCartProjects } from 'helpers'
/* constants */
import { USER_LOCAL_STORAGE_KEY } from '@constants/constant'
function MyActivity({ cartItems }) {

  return (
    <main className='main-wrapper activity common-layout'>
      <div className='container'>
        <Layout>
          <div className='activity__wrap animation-fade-in-top'>
            <div className='sub-title divider'>
              {title}
            </div>
            <div className='activity__listings'>
              <Activity
                listings={{
                  saved: cartItems,
                }}
              />
            </div>
          </div>
        </Layout>
      </div>
    </main>
  )
}

export default MyActivity

const title = 'My Activity'

/*
? structure for different type of listings
const userSpecificListings = {
  saved: [
  ],
  enquired: [
  ],
  searches: []
}
*/
export const getServerSideProps = async ({ req, res }) => {
  try {
    const cookie = getCookie(USER_LOCAL_STORAGE_KEY, { req, res })
    const user = cookie ? JSON.parse(cookie) : false
    if (user && user?.metadata) {
      const res = await getCartProjects({
        cartId: user?.metadata
      })
      return {
        props: {
          cartItems: res
        }
      }
    }
    return {
      notFound: true
    }
  } catch (error) {
    return {
      notFound: true
    }
  }

}
MyActivity.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  )
}