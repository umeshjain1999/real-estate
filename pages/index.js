/* library */
import Head from "next/head";
/* components */
import {
  Banner,
  Brand,
  Intro, NearYou, NewlyProjects,
  Review,
  Search
} from "@components/Home";
/* helpers */
import { getRecomendationsProjects } from "helpers";
import { SITE_META_DATA } from "@constants/constant";

export default function Home({ nearByProjects, newlyProjects }) {
  return (
    <main className="main-wrapper home">
      <Head>
        <title>{SITE_META_DATA.HOME['title']}</title>
        <meta
          name={SITE_META_DATA.HOME['name']}
          content={SITE_META_DATA.HOME['description']}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner {...bannerInfo} />
      <Search />
      <Intro {...introInfo} />
      <Brand {...brandInfo} />
      {nearByProjects?.projectsArr?.length ? <NearYou {...nearByProjects} /> : ''}
      <Review {...reviewInfo} />
      {newlyProjects?.projectsArr?.length ? <NewlyProjects {...newlyProjects} /> : ''}
    </main>
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
  review: [
    {
      name: "Karan Jain",
      feature: "Service",
      review:
        "SqftHome have helped me in a good knowledge for buying property, made me feel comfortable in their work environment, helped me deal with my property financial goals and a lotmore which otherwise I wouldn’t have gained.",
      // profileImagePath : '/'
    },
    {
      name: "Dr. A.K. Singh",
      feature: "Doctor",
      review:
        "I visited the shortlisted project site 2 days before the lockdown and was really impressed with the customer service and transparent details. I booked my home even during the lockdown as I didn’t want to waste time to make the best decision of my life.",
      // profileImagePath : '/'
    },
    {
      name: "Vivek Yadav",
      feature: "Service",
      review:
        "Had good exp with SqftHome. The team were very informative . They suggest properties based on our requirement. They also provide end to end support in the process. They are professional and responsive.",
      // profileImagePath : '/'
    },
    {
      name: "Ms. Riddhi Jain",
      feature: "Service",
      review:
        "Good services good support , i m happy to have services and complete process of property visit to loan assitance. Good job done SqFt Home team.",
      // profileImagePath : '/'
    },
    {
      name: "Mr. Manav Mehta",
      feature: "Service",
      review:
        "Great support from Shrikant  and Complete team of  SqftHome in answering all our queries and concerns in choosing the flat in Navi Mumbai !",
      // profileImagePath : '/'
    },
  ],
};
