function Privacy() {
  return (
    <main className="main-wrapper static">
      <div className="container">
        <div className="static__title">{title}</div>
        <div className="static__desc">
          sqfthomes.in the website is owned and operated by Sqfthomes Property
          Solutions Pvt Ltd Sqfthomes Property Solutions Pvt Ltd has created
          this privacy statement in order to demonstrate our commitment to our
          user's privacy We may use an IP address to help diagnose problems with
          our server and to administer our Web site. Your IP address may be also
          used to gather broad demographic information Neat layout without
          clutter and unnecessary advertisements Sqfthomesl.com contains links
          to other Websites. Sqfthomes Property Solutions Pvt Ltd. is not
          responsible for the privacy practices or the content of such Web
          sites. We may use a third-party ad company to display ads on
          sqfthomes.in (e.g. Google AdSense). These ads may contain cookies.
          While we may use cookies in other parts of our Web sites, cookies
          received with banner ads are collected by our ad company, and we do
          not have access to this information. Certifiable information is
          collected from users and/or registered members of sqfthomes.in which
          includes, but may not be limited to Email address Contact person name
          User-created password Mailing address Pin code Telephone number or
          another contact number Except where you are explicitly informed,
          Sqfthomes Property Solutions Pvt Ltd does not sell or trade any of
          your personal information sqfthomes.in may tie-up with pre-verified
          and qualified partners to bring you related services. We will
          selectively share your personal information to ensure high-quality
          services. We encourage you to review the privacy policy of the partner
          for questions about their use, any personally identifiable information
          that you may separately submit to such partner If we change our
          privacy policy, we will prominently post a link to those changes on
          our website. If at any point we decide to use personally identifiable
          information in a manner materially different from that stated at the
          time it was collected, we will notify you by way of an email. We will
          give you a choice as to whether or not we can use information in this
          different manner and act accordingly.
        </div>
      </div>
    </main>
  );
}

const title = "Privacy Policy";

export default Privacy;
export async function getStaticProps() {
  return {
    props: {},
  };
}
