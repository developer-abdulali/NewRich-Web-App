import React from "react";
import FourLogos from "../../images/fourImgs.svg";

const NewRich = () => {
  return (
    <div className="newrichContainer">
      <div className="imgDiv">
        <img src={FourLogos} alt="" className="fourImg" />
      </div>
      <div className="textDiv">
        <h2 className="whatIs">
          What is <span className="newrichSpan">newrich</span>.com
        </h2>
        <p className="onlineNetworking">
          Newrich.com is an online networking and learning platform that
          connects <br /> people who are passionate about building the life of
          their dreams.
        </p>
        <p className="connectwithInstructor">
          Connect with instructors who can guide you along your path
        </p>{" "}
        <br />
        <div className="joinNowBtnDiv">
          <button className="joinNowBtn">Join the 1% now</button>
        </div>
      </div>
    </div>
  );
};

export default NewRich;
