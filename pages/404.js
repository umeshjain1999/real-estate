import Footer from '@components/Footer';
import Header from '@components/Header';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Header/>
      <main className='main-wrapper error-page'>
        <div><span className='error-404'>404,</span> Page Not Found.</div>
        <div>
          <Link href='/' >
            <a>
              visit home
            </a>
          </Link>
        </div>
      </main>
      <Footer/>
    </>
  );
}
