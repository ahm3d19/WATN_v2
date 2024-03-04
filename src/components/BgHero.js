import "./BgHero.css";

const BgHero = () => {
  return (
    <section className="bg-hero">
      <div className="bg-hero-child" />
      <div className="bg-hero-item" />
      <img
        className="bg-hero-inner"
        loading="lazy"
        alt=""
        src="/arrow-03@2x.png"
      />
      <div className="all-research-start">All research start from here</div>
      <div className="dont-let-your-container">
        <p className="dont-let-your">{`Don’t let your computer memories consumes all of those browser tabs. `}</p>
        <p className="findtrend-let">
          Findtrend let you gathers all of your favorite website into one place.
        </p>
      </div>
      <h1 className="find-the-trends">Find the trends!</h1>
      <h1 className="minimize-your-tabs">Minimize your tabs.</h1>
      <b className="findtrend">Findtrend</b>
      <div className="frame-div">
        <div className="bg1-parent">
          <div className="bg1" />
          <div className="line-parent">
            <div className="frame-child" />
            <div className="frame-item" />
            <div className="frame-inner" />
            <div className="line-div" />
            <div className="frame-child1" />
            <div className="frame-child2" />
            <div className="frame-child3" />
            <div className="frame-child4" />
            <div className="frame-child5" />
            <div className="frame-child6" />
            <div className="frame-child7" />
            <div className="frame-child8" />
            <div className="frame-child9" />
            <div className="frame-child10" />
          </div>
          <div className="frame-child11" />
          <div className="frame-child12" />
          <div className="btn-hero-socmed">
            <div className="frame-parent">
              <img
                className="group-icon"
                loading="lazy"
                alt=""
                src="/group-7@2x.png"
              />
              <img className="frame-child13" alt="" src="/group-8@2x.png" />
              <img className="frame-child14" alt="" src="/group-10@2x.png" />
              <img className="frame-child15" alt="" src="/group-9@2x.png" />
            </div>
          </div>
          <div>
            <button className="get-started get-started1">Get Started 🔥</button>
          </div>
          <div className="privacy-policy-terms">
            <div className="privacy-policy-terms-child" />
            <img
              className="vector-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className="about">About</div>
      <div className="how-it-work">How it work</div>
      <div className="pricing">Pricing</div>
      <div className="solution">Solution</div>
      <div className="features">Features</div>
      <div>
        <button className=" register register1">Register</button>
        {/* <div className="register1">Register</div> */}
      </div>
      <div className="login">Login</div>
    </section>
  );
};

export default BgHero;
