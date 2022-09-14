import Link from "next/link";
import { InitialSlide } from "@components/Animation";
export default function NotFound() {
  return (
    <main className="main-wrapper error-page">
      <InitialSlide>
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
        </div>
      </InitialSlide>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
