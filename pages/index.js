/* library */
import Head from "next/head";

/* components */
import {
  Banner,
  Brand,
  Intro,
  NewlyProjects,
  Review,
  Search,
  NearYou
} from "@components/Home";
import Team from "@components/Team";

/* middleware */
import { getRecomendationsProjects } from "middleware";


export default function Home({ nearByProjects, newlyProjects }) {
  return (
    <>
      <Head>
        <title>Sqfthome.in - Home</title>
        <meta
          name="Sqfthomes.in"
          content="Find A Perfect Home To Live With Your Family"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main-wrapper home">
        <Banner {...bannerInfo} />
        <Search />
        <Intro {...introInfo} />
        <Brand {...brandInfo} />
        {nearByProjects?.projectsArr?.length ? <NearYou {...nearByProjects} /> : ''}
        <Review {...reviewInfo} />
        {newlyProjects?.projectsArr?.length ? <NewlyProjects {...newlyProjects} /> : ''}
        <Team />
      </main>
    </>
  );
}

// server side rendering
export async function getServerSideProps() {

  let nearByData = {}
  let newlyAddedData = {}
  nearByData = await getRecomendationsProjects({
    skip: 0,
    limit: 6,
  })
  newlyAddedData = await getRecomendationsProjects({
    skip: 0,
    limit: 4,
  })

  return {
    props: {
      nearByProjects: {
        title: "Homes for Sale Near you",
        subTitle: "Check out some of our latest properties",
        projectsArr: nearByData?.results || [],
      },
      newlyProjects: {
        title: "Newly added Resale property",
        subTitle: "Find the hot spot resale properties",
        projectsArr: newlyAddedData?.results || [],
      }
    },
  };
}

const bannerInfo = {
  largeTxt: "Find your dream home",
  smallTxt:
    "Explore new apartments, land estates, house and land, home designs, builders and more.",
};

const introInfo = {
  mainTitle: "How Sqfthome can help",
  mainDesc: "Sqfthome provides an awesome solution!",
  buyTitle: "Buy a home",
  rentTitle: "Rent a home",
  buyDesc:
    "With over 1 million+ homes for sale available on the website, Sqfthome can match you with a house you will want to call home.",
  rentDesc:
    "With over 1 million+ homes for sale available on the website, Sqfthome can match you with a house you will want to call home.",
};

const brandInfo = {
  title: "We Provide Buy and Sell Property with Trusted Developers",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tristique bibendum tellus ut arcu. Lacus lorem turpis sed felis urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tristique bibendum tellus ut arcu. Lacus lorem turpis sed felis urna.",
};

const reviewInfo = {
  title: "What people say",
  subTitle:
    "We are committed to making our customers happy with our 12+ years of experience in the industry",
  user_1: {
    name: "Karan Jain",
    feature: "Zoro Steels & Co",
    review:
      "SqftHome have helped me in a good knowledge for buying property, made me feel comfortable in their work environment, helped me deal with my property financial goals and a lotmore which otherwise I wouldn’t have gained.",
    // profileImagePath : '/'
  },
  user_2: {
    name: "Dr. A.K. Singh",
    feature: "Doctor",
    review:
      "I visited the shortlisted project site 2 days before the lockdown and was really impressed with the customer service and transparent details. I booked my home even during the lockdown as I didn’t want to waste time to make the best decision of my life.",
    // profileImagePath : '/'
  },
};
