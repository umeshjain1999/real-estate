//! Secure Page
/* library */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
/* components */
import Activity from '@components/Activity'
import Header from '@components/Header'
import Layout from '@components/Layout'
import Loader from '@components/Loader'
/* hooks */
import { useAuthContext } from 'hooks'
import { getCartProjects } from 'helpers'
function MyActivity() {
  const router = useRouter()
  const { cartId, isUserAuthenticated } = useAuthContext()
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    let isSubscribed = true
    const fetchCart = async () => {
      const res = await getCartProjects({
        cartId: cartId
      })
      if (isSubscribed) {
        setCartItems(res)
      }
    }

    fetchCart()

    return () => isSubscribed = false
  }, [cartId])

  useEffect(() => {
    isUserAuthenticated() ? router.push("/activity") : router.push("/")
  }, [])

  if (isUserAuthenticated()) {
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
                    enquired: userSpecificListings?.enquired,
                    searches: userSpecificListings?.searches
                  }}
                />
              </div>
            </div>
          </Layout>
        </div>
      </main>
    )
  } else {
    return <Loader />
  }
}

export default MyActivity

const title = 'My Activity'

const userSpecificListings = {
  saved: [
    {
      id: 1,
      name: 'White Spurs',
      price: '20000',
      picturePath: '/assets/images/garbage/sample-2.png',
      provider: 'By Kamdhenu Builders',
      address: 'Sector 3, Kharghar, Navi Mumbai 410210',
      rooms: '5',
      bathrooms: '3',
      parking: '3',
      area: '1000',
      saved: true,
    },
    {
      id: 2,
      name: 'Old Lady',
      price: '20000',
      picturePath: '/assets/images/garbage/sample-3.png',
      provider: 'By Kamdhenu Builders',
      address: 'Sector 3, Kharghar, Navi Mumbai 410210',
      rooms: '5',
      bathrooms: '3',
      parking: '3',
      area: '1000',
      saved: true,
    },
  ],
  enquired: [
    {
      id: 1,
      name: 'White Spurs',
      price: '20000',
      picturePath: '/assets/images/garbage/sample-2.png',
      provider: 'By Kamdhenu Builders',
      address: 'Sector 3, Kharghar, Navi Mumbai 410210',
      rooms: '5',
      bathrooms: '3',
      parking: '3',
      area: '1000',
      saved: true,
    },
  ],
  searches: []
}

export const getServerSideProps = async (ctx) => {
  //? API fetch user specific listings

  return {
    props: {
      data: null
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