/* components */
import Breadcrumb from "@components/Breadcrumb";
import { Banner, Feature, Location, PartnerForm } from "@components/Partners";

function Partners() {
  return (
    <main className="main-wrapper partners">
      <div className="breadcrumb-wrap">
        <div className="container">
          <Breadcrumb linkArr={breadcrumb} />
        </div>
      </div>
      <Banner {...bannerInfo} />
      <Feature {...featureInfo} />
      <PartnerForm {...partnerForm} />
      <Location {...locationInfo} />
    </main>
  );
}

const breadcrumb = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
  },
];
const bannerInfo = {
  largeTxt: "Why Partner with Sqfthome",
  smallTxt: "Best of Technology meets Best of Properties",
};
const locationInfo = {
  title: "Cities we are present in",
  arr: [
    {
      url: "/assets/images/locations/location1.png",
      location: "mumbai",
    },
    {
      url: "/assets/images/locations/location2.png",
      location: "goa",
    },
    {
      url: "/assets/images/locations/location3.png",
      location: "hyderabad",
    },
  ],
};
const featureInfo = {
  title: "Why choose Sqfthome?",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac ut enim mauris laoreet commodo adipiscing fringilla sollicitudin. Nunc blandit a facilisis elementum. Consequat amet venenatis ornare sed at euismod est. Velit etiam enim sed cursus. Id adipiscing nibh eu sem. Sapien orci dui quis nisl faucibus nulla augue nisi. Amet dui viverra at ut quis eros amet. Porttitor tellus lorem ultrices lectus sit pharetra faucibus at. Aenean placerat a tempor cras felis gravida a, quis nisl.In pretium convallis blandit cras risus cursus. Malesuada amet aliquet pharetra, nec bibendum. Tristique maecenas sit nisl sollicitudin placerat. Pellentesque cursus netus pharetra vitae risus diam tristique lorem molestie. Volutpat ultricies sollicitudin commodo viverra neque duis in. Risus nascetur tincidunt at dui egestas mattis faucibus nulla nisl. Senectus arcu eget diam ipsum eu et amet hendrerit in.",
  arr: [
    {
      icon: "partnersThumbsUp",
      title: "Transparent deal",
    },
    {
      icon: "partnersIndustry",
      title: "Industry Vetreans",
    },
    {
      icon: "partnersCurrency",
      title: "Best deals to offer",
    },
    {
      icon: "partners247services",
      title: "24*7 Services",
    },
  ],
};
const partnerForm = {
  title: "Join the Sqfthome family",
  formTitle: "Fill the Form to Be a Partner",
};

export default Partners;
export async function getStaticProps() {
  return {
    props: {},
  };
}
