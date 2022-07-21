function About() {
  return (
    <>
      <main className="main-wrapper static">
        <div className="container">
          <div className="static__title">{title}</div>
          <div className="static__desc">
            <p>
              We are a notable real estate marketing company with skilled
              expertise in curating the best of Commercial & Residential
              properties that suit your requirements. We screen Commercial &
              Residential properties and filter out the best ones that match the
              requirements.
            </p>
            <br />
            <p>
              We also offer right fit investment options which have good
              appreciation potential and High Returns on Investment (ROI), for
              the discerning investor. We deliver that align with the needs of
              the customer.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

const title = "About Us";
export default About;
export async function getStaticProps() {
  return {
    props: {},
  };
}
