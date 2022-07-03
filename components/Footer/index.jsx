import Logo from "@components/Logo";
import Navigation from '@components/Navigation';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <Logo variant='secondary'/>
          <div className="footer__wrapper__right">
            <div className="footer__nav__wrap">
              <span className="footer__wrapper__title">{footerNavigation.title}</span>
              <Navigation navigation = {footerNavigation.links} navChildClassName={'link-text'}/>
            </div>
            <div className="footer__nav__wrap">
              <span className="footer__wrapper__title">{footerNavigation2.title}</span>
              <Navigation navigation = {footerNavigation2.links} navChildClassName={'link-text'}/>
            </div>
            <div className="footer__nav__address">
              <span className="footer__wrapper__title">{contactInfo.title}</span>
              <address>
                <div className="normal-text">
                  {contactInfo.mail}
                </div>
                <div className="normal-text">
                  {contactInfo.tel}
                </div>
                <div className="normal-text">
                  {contactInfo.address}
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
//* Product
const footerNavigation = {
  title: 'Product',
  links: [
    {name:'home',link:'/'},
    {name:'about',link:'/about'},
    {name:'projects',link:'/projects'},
    {name:'contact',link:'/contact'},
  ]
}
//* Company
const footerNavigation2 = {
  title: 'Company',
  links: [
    {name:'careers',link:'/careers'},
    {name:'for partners',link:'/partners'},
    {name:'terms',link:'/terms'},
    {name:'privacy policy',link:'/privacy'},
  ]
}

const contactInfo = {
  title: 'Contact Us',
  mail : 'abc@xyz.com',
  tel: '+91 10000 50002',
  address: 'Fort, Mumbai'
}

export default Footer;
