import Head from 'next/head'
import React from "react"
import Header from '@components/Header';
import Footer from '@components/Footer';
import Team from '@components/Team';
import { Banner,Intro, Brand, NearYou } from '@components/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sqfthome.in - Home</title>
        <meta name="Sqfthomes.in" content="Find A Perfect Home To Live With Your Family" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='main-wrapper home'>
        <Banner {...bannerInfo}/>
        <Intro {...introInfo}/>
        <Brand {...brandInfo}/>
        <NearYou/>
        <Team/>
      </main>
      <Footer/>
    </>
  );
}

const bannerInfo = {
  largeTxt : 'Find your dream home',
  smallTxt : 'Explore new apartments, land estates, house and land, home designs, builders and more.'
}

const introInfo = {
  mainTitle : 'How Sqfthome can help',
  mainDesc : 'Sqfthome provides an awesome solution!',
  buyTitle : 'Buy a home',
  rentTitle : 'Rent a home',
  buyDesc : 'With over 1 million+ homes for sale available on the website, Sqfthome can match you with a house you will want to call home.',
  rentDesc : 'With over 1 million+ homes for sale available on the website, Sqfthome can match you with a house you will want to call home.'
}

const brandInfo = {
  title : 'We Provide Buy and Sell Property with Trusted Developers',
  desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tristique bibendum tellus ut arcu. Lacus lorem turpis sed felis urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tristique bibendum tellus ut arcu. Lacus lorem turpis sed felis urna.',
}

