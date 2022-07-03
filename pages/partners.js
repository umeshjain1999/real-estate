import Header from "@components/Header";
import Footer from "@components/Footer";
import {Banner,Feature,PartnerForm,Location} from '@components/Partners';
import Team from "@components/Team";

function Partners() {
  return (
    <>
    <Header/>
    <main className="main-wrapper partners">
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
const BannerInfo = {
  largeTxt : 'Why Partner with Sqfthome',
  smallTxt : 'Best of Technology meets Best of Properties'
}

export default Partners;
