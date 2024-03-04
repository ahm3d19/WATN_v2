import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-child" />
      <div className="footer-nav-bar">
        <div className="privacy-policy-terms1">
          <div className="tagline" />
          <img className="vector-arrow-icon" alt="" src="/vector-1.svg" />
        </div>
        <b className="findtrend1">Findtrend</b>
      </div>
      <div className="footer-links">
        <div className="privacy-link-group">
          <div className="privacy-policy">Privacy Policy</div>
          <div className="terms-and-conditions">Terms and Conditions</div>
          <div className="contact-us">Contact Us</div>
          <div className="careers">Careers</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
