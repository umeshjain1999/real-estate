import Header from "@components/Header";
import Footer from "@components/Footer";
import {Banner,Feature,PartnerForm,Location} from '@components/Partners';
import Team from "@components/Team";
import Breadcrumb from "@components/Breadcrumb";

function Partners() {
  return (
    <>
    <Header/>
    <main className="main-wrapper partners">
      <div className="breadcrumb-wrap">
        <div className="container">
          <Breadcrumb linkArr={breadcrumb} />
        </div>
      </div>
      <Banner {...BannerInfo}/>
      <Feature/>
      <PartnerForm/>
      <Location/>
      <Team/>
    </main>
    <Footer></Footer>
    </>
  );
}

const breadcrumb = [
  {
    name : 'Home',
    link : '/'
  },
  {
    name : 'Projects',
  },
]
const BannerInfo = {
  largeTxt : 'Why Partner with Sqfthome',
  smallTxt : 'Best of Technology meets Best of Properties'
}

export default Partners;
