
import styled from "styled-components";


function About({ name, date }) {
  return (
    <div>
      <Menus>About us</Menus>
      <div>{name}</div>
      <div>{date}</div>
    </div>
  );
}

// const Puppy = dynamic(() => import("../components/Puppy"), {
//   loading: () => <p>Loading...</p>,
//   ssr: false,
// });

export async function getStaticProps(context) {
    console.log('[about.js]:getStaticProps:')
  return {
    props: {
      name: "kiran",
      date:Date.now()
    }, // will be passed to the page component as props
    revalidate:10
  };
}




const Menus = styled.div`
  background-color: red;
  height: 200 px;
`;

export default About;
