//! Secure Page
/* components */
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
                feature = {userInfo?.city}
              />
              <ProfileForm {...userInfo}/>
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
  city : 'Navi Mumbai',
  imagePath : '',
  pincode : '410210',
  phoneNumber : '8048214888',
  email : 'support@sqfthome.in',
  dob : -723706200000,
}

export const getServerSideProps = async (ctx) => {
  //? API fetch user info
  return {
    props:{
      data:null
    }
  }
}

Profile.getLayout = function PageLayout(page){
  return(
    <>
      <Header/>
      {page}
    </>
  )
}