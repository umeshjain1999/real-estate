import React from 'react'
import Link from 'next/link'
function FooterProperty() {
  return (
    <div className='footer-property'>
      <div className="container">
        <div className="footer-property-heading divider-sm">
          {footerPropTitle}
        </div>
        <div className='divider-sm'>
          <b>Property Type</b>{footerPropDesc}
        </div>
        {footerPropSaleLinks?.length ? <div className='divider-sm'>
          <b>BHK in Navi Mumbai</b>{
            footerPropSaleLinks.map((data, index) => {
              return (
                <Link href={data?.link} key={index}>
                  <a className='footer-property-link'>{data?.title}</a>
                </Link>
              )
            })
          }
        </div> : ''}
        {footerPropSocitiesLinks?.length ? <div>
          <b>Top Socities in Navi Mumbai</b>{
            footerPropSocitiesLinks.map((data, index) => {
              return (
                <Link href={data?.link} key={index}>
                  <a className='footer-property-link'>{data?.title}</a>
                </Link>
              )
            })
          }
        </div> : ''}
      </div>
    </div>
  )
}

export default FooterProperty

const footerPropTitle = 'Popular Search in Navi Mumbai'

const footerPropDesc = "in Navi Mumbai Flat for Sale in Navi Mumbai Shops for Sale in Navi Mumbai Builder Floors for Sale in Navi Mumbai Office Spaces for Sale in Navi Mumbai Independent Houses for Sale in Navi Mumbai"

const footerPropSaleLinks = [
  {
    title: '1 BHK for Sale in Navi Mumbai',
    link: '/projects?rooms=1BHK'
  },
  {
    title: '2 BHK for Sale in Navi Mumbai',
    link: '/projects?rooms=2BHK'
  },
  {
    title: 'Studio for Sale in Navi Mumbai',
    link: '/projects?rooms=Studio'
  },
  {
    title: '3 BHK for Sale in Navi Mumbai',
    link: '/projects?rooms=3BHK'
  },
]
const footerPropSocitiesLinks = [
  {
    title: 'Property for Sale in Rashmi complex',
    link: '/projects'
  },
  {
    title: 'Navi Mumbai Property for Sale in Pooja Apartment',
    link: '/projects'
  },
  {
    title: 'Navi Mumbai Property for Sale in Vrindavan Apartment',
    link: '/projects'
  },
  {
    title: 'Navi Mumbai Property for Sale in Kailash Tower',
    link: '/projects'
  },
  {
    title: 'Navi Mumbai Property for Sale in Shanti Lifespaces',
    link: '/projects'
  },
  {
    title: 'Mumbai Property for Sale in AV Crystal',
    link: '/projects'
  },
]