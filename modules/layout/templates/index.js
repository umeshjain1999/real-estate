import Footer from "@components/Footer";
import Header from "@components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
