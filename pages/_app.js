/* styles */
import "../styles/globals.css";
import "../styles/styleguide.css";
import "../styles/main.scss";

/* library */
import NProgress from 'nprogress';
import { useRouter } from "next/router";
import { useEffect } from "react";

/* components */
import Header from "@components/Header";
import Footer from "@components/Footer";

/* context */
import { AuthContextProvider,LoginModalContextProvider } from "context";

import "@fakeDb";

function MyApp({ Component, pageProps }) {


  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  const mainComponent = () => {
    if (Component.getLayout) {
      return Component.getLayout(<Component {...pageProps} />);
    }
    return (
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }



  return (
    <AuthContextProvider>
      <LoginModalContextProvider>
        {mainComponent()}
      </LoginModalContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
