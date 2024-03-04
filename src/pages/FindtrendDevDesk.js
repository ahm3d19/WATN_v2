import BgHero from "../components/BgHero";
import OpenNewTabSection from "../components/OpenNewTabSection";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./FindtrendDevDesk.css";

const FindtrendDevDesk = () => {
  return (
    <div className="findtrend-dev-desk">
      <BgHero />
      <OpenNewTabSection />
      <section className="uptopageeachgroup">
        <div className="bg3" />
        <h1 className="findtrend-helps-you">{`Findtrend helps you to increase your `}</h1>
        <h1 className="productivity-and-reduce">
          productivity and reduce your computer's
        </h1>
        <h1 className="memory-load-an-container">
          <span>{`memory load, `}</span>
          <span className="an-application-that">{`an application that can `}</span>
        </h1>
        <h1 className="fulfill-your-daily">
          fulfill your daily browsing needs.
        </h1>
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <section className="bg6-parent">
        <div className="bg6" />
        <div className="email-join-form">
          <h1 className="join-us-on">Join us on email for</h1>
          <h1 className="more-trending-topics">more trending topics</h1>
        </div>
        <div className="email-join-now">
          <b className="join-now">{`Join Now `}</b>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FindtrendDevDesk;
