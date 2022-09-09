//! Secure Page
/* library */
import { getCookie } from 'cookies-next'
/* components */
import Header from '@components/Header'
import HorizontalFeature from '@components/HorizontalFeature'
import Layout from '@components/Layout'
import { ProfileForm } from '@components/Profile'
/* constants */
import { USER_LOCAL_STORAGE_KEY } from '@constants/constant'
function Profile() {

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
                name={user?.first_name}
                feature={user?.city}
              />
              <ProfileForm {...user} />
            </div>
          </div>
        </Layout>
      </div>
    </main>
  )
}

export default Profile

const title = 'My Profile'

export const getServerSideProps = async ({ req, res }) => {
  const cookie = getCookie(USER_LOCAL_STORAGE_KEY, { req, res })
  const user = cookie ? JSON.parse(cookie) : false
  console.log('profile router user', user);
  if (user) {
    return {
      props: {
        user: user
      }
    }
  }
  return {
    notFound: true
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