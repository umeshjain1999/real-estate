//! Secure Page
/* library */
import { useEffect } from 'react'
import { useRouter } from 'next/router'
/* components */
import Header from '@components/Header'
import HorizontalFeature from '@components/HorizontalFeature'
import Layout from '@components/Layout'
import { ProfileForm } from '@components/Profile'
import Loader from '@components/Loader'
/* hooks */
import { useAuthContext } from 'hooks'
function Profile() {
  const router = useRouter()
  const { user, isUserAuthenticated } = useAuthContext()

  useEffect(() => {
    isUserAuthenticated() ? router.push("/profile") : router.push("/")
  }, [])

  if (isUserAuthenticated()) {
    return (
      <main className='main-wrapper profile common-layout'>
        <div className='container'>
          <Layout>
            <div className='profile__wrap animation-fade-in-top'>
              <div className='sub-title divider'>
                {title}
              </div>
              <div>
                <HorizontalFeature
                  name={user?.name}
                  feature={user?.city}
                />
                <ProfileForm {...user} />
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

export default Profile

const title = 'My Profile'

export const getServerSideProps = async (ctx) => {
  //? API fetch user info
  return {
    props: {
      data: null
    }
  }
}

Profile.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  )
}