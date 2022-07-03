import Footer from "@components/Footer";
import Header from "@components/Header";
function About() {
  return (
    <>
    <Header/>
    <main className="main-wrapper static">
      <div className="container">
        <div className="static__title">{title}</div>
        <div className="static__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. Vitae morbi ac proin blandit nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. Vitae morbi ac proin blandit nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. Vitae morbi ac proin blandit nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. Vitae morbi ac proin blandit nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. Vitae morbi ac proin blandit nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. Vitae morbi ac proin blandit nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus.
        </div>
      </div>
    </main>
    <Footer></Footer>
    </>
  );
}

const title = 'About Us'
export default About;
