import "./OpenNewTabSection.css";

const OpenNewTabSection = () => {
  return (
    <section className="open-new-tab-section">
      <div className="bg2" />
      <img
        className="open-new-tab-section-child"
        loading="lazy"
        alt=""
        src="/arrow-4@2x.png"
      />
      <div className="you-just-need">You just need one tab now</div>
      <h1 className="open-new-tabs">{`Open new tabs is sh*t `}</h1>
      <div className="rectangle-parent">
        <div className="rectangle-div" />
        <div className="rectangle-group">
          <div className="frame-child16" />
          <img className="frame-child17" alt="" src="/group-16.svg" />
          <div className="findtrend-elon-musk-parent">
            <div className="findtrend-elon">Findtrend - Elon Musk</div>
            <div className="month">
              <div className="month-child" />
              <div className="rectangle-container">
                <div className="frame-child18" />
                <div className="frame-child19" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="a-solution-for">
        A solution for your browser tabs and don’t make your device get slower
        over time. Get ease and faster to discover a trend with just one tab.
      </div>
      <img
        className="open-new-tab-section-item"
        loading="lazy"
        alt=""
        src="/arrow-6@2x.png"
      />
      <div className="solution-for-discover">solution for discover a trend</div>
    </section>
  );
};

export default OpenNewTabSection;
