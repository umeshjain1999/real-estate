import Link from "next/link";

export default function NotFound() {
  return (
    <main className="main-wrapper error-page">
      {/* <div className='container'> */}
      <div className="error-page">
        <div>
          Oops! You are in the wrong <span className="error-404">area.</span>
        </div>
        <div className="error-small">
          (<span className="error-404">404,</span> Page Not Found.)
        </div>
        <Link href="/projects">
          <a className="common-btn animation-dum-dum">looking for property ?</a>
        </Link>
        {/* </div> */}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
