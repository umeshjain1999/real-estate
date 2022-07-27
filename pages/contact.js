import { mobileNumber,email } from '@constants/constant';
function Contact() {
  return (
    <main className="main-wrapper static">
      <div className="container">
        <div className="static__title">{title}</div>
        <div className='static__desc contact-wrap'>
          <div className='contact-card'>
            <a href={`tel:${mobileNumber}`}>{mobileNumber}</a>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
    </main>
  );
}

const title = "Contact Us";

export default Contact;
export async function getStaticProps() {
  return {
    props: {},
  };
}
