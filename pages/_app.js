import "../styles/globals.css";
import "../styles/styleguide.css";
import "../styles/main.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";

import "@fakeDb";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
