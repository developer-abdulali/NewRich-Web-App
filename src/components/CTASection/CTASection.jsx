import React from "react";
import CTAImg from "../../images/ctaimg.svg";

const CTASection = () => {
  return (
    <>
      <div className="ctaContainer">
        <div className="ctaDiv1">
          <h4 className="likeMinded">
            <span className="connectWith">CONNECT WITH </span> other like-minded
            people from around the <span className="globeSpan">GLOBE</span>.
          </h4>

          <p className="thousandPeople">
            Join thousands of other people just like who you are on thepath to
            joining <span className="ThenewRich">THE NEW RICH</span>.
          </p>

          <button className="SecondJoinBtn">Join the 1% now</button>
        </div>
        <div className="ctaDiv2">
          <img src={CTAImg} alt="cta" />
        </div>
      </div>
    </>
  );
};

export default CTASection;
