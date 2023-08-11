import Logo from "@components/Logo";
import Navigation from '@components/Navigation';
import FooterProperty from "./FooterProperty";
import { MOBILE_NUMBER, EMAIL } from '@constants/constant';
function Footer() {
  return (
    <footer>
      <FooterProperty />
      <div className="footer">
        <div className="container">
          <div>
            <div className="footer__wrapper">
              <div className="footer__nav__wrap">
                <span className="footer__wrapper__title">{footerNavigation.title}</span>
                <Navigation navigation={footerNavigation.links} navChildClassName={'link-text'} />
              </div>
              <div className="footer__nav__wrap">
                <span className="footer__wrapper__title">{footerNavigation2.title}</span>
                <Navigation navigation={footerNavigation2.links} navChildClassName={'link-text'} />
              </div>
              <div className="footer__nav__wrap">
                <span className="footer__wrapper__title">{footerNavigation3.title}</span>
                <Navigation navigation={footerNavigation3.links} navChildClassName={'link-text'} />
              </div>
              <div className="footer__nav__wrap">
                <span className="footer__wrapper__title">{footerNavigation4.title}</span>
                <Navigation navigation={footerNavigation4.links} navChildClassName={'link-text'} />
              </div>
            </div>
            <div className="footer__wrapper">
              <div className="footer__nav__wrap footer-meta-desc">
                <span className="footer__wrapper__title">{about.title}</span>
                <p className="">{about.desc}</p>
              </div>
              <div className="footer__nav__wrap footer__nav__address">
                <span className="footer__wrapper__title">{contactInfo.title}</span>
                <address>
                  <div className="footer__addr-txt normal-text">
                    {contactInfo.mail}
                  </div>
                  <div className="footer__addr-txt normal-text">
                    {contactInfo.tel}
                  </div>
                  <div className="footer__addr-txt normal-text">
                    {contactInfo.address}
                  </div>
                </address>
              </div>
              <Logo variant='secondary' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
//* Company
const footerNavigation = {
  title: 'Company',
  links: [
    { name: 'about us', link: '/about' },
    { name: 'careers', link: '/careers' },
    { name: 'projects', link: '/projects' },
    { name: 'contact us', link: '/contact' },
    { name: 'terms & conditions', link: '/terms' },
    { name: 'privacy policy', link: '/privacy' },
    { name: 'sitemap', link: '/sitemap' },
    { name: 'blog', link: '/blog' },
  ]
}
//* Sites
const footerNavigation2 = {
  title: 'Sites',
  links: [
    { name: 'company_name Navi Mumbai', link: '/projects' },
    { name: 'company_name UAE', link: '/projects' },
    { name: 'company_name Dubai', link: '/projects' },
  ]
}

//* Solutions
const footerNavigation3 = {
  title: 'Solutions',
  links: [
    { name: 'Prop Finder', link: '/prop-finder' },
    { name: 'My Agent', link: '/my-agents' },
    { name: ' Rent Agreement', link: '/rent-agreement' },
    { name: ' Pay Rent', link: '/pay-rent' },
    { name: ' Property online', link: '/book-online' },
  ]
}

//* Resources
const footerNavigation4 = {
  title: 'resources',
  links: [
    { name: 'Check your Credit Score', link: '/credit-score' },
    { name: 'Calculator', link: '/loan-calculator' },
    { name: 'Cities Real Estate', link: '/city' },
    { name: 'Media & News', link: '/news' },
  ]
}

const contactInfo = {
  title: 'Contact us',
  mail: EMAIL,
  tel: MOBILE_NUMBER,
  address: 'Fort, Mumbai'
}

const about = {
  title: 'about us',
  desc: "company_name is one of the fastest-growing Proptech platforms in Navi Mumbai and is India's biggest integrated platform for real estate and mortgages.The company_name platform connects buyers to a vast network of 80+ partner real estate developers, 10,000+ Agents, 50+ banks & NBFCs, and covers the entire real estate journey from search & discovery, transactions, home loans, rentals, property management, and post-sales support."
}

export default Footer;
