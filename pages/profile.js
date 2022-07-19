//! Secure Page
import Header from '@components/Header'
import HorizontalFeature from '@components/HorizontalFeature'
import Layout from '@components/Layout'
import { ProfileForm } from '@components/Profile'
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
                name = {userInfo?.name}
                feature = {userInfo?.location}
              />
              <ProfileForm/>
            </div>
          </div>
        </Layout>
      </div>
    </main>
  )
}

export default Profile

const title = 'My Profile'

const userInfo = {
  name : 'Umesh Jain',
  location : 'Mumbai,India',
  profilePath : '',

}

Profile.getLayout = function PageLayout(page){
  return(
    <>
      <Header/>
      {page}
    </>
  )
}