import Footer from "@components/Footer";
import Header from "@components/Header";
function Careers() {
  return (
    <>
    <Header/>
    <main className="main-wrapper static">
      <div className="container">
        <div className="static__title">{title}</div>
      </div>
    </main>
    <Footer></Footer>
    </>
  );
}

const title = 'Careers'

export default Careers;
