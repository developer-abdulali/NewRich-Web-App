import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import NewRich from "./components/NewRich/NewRich";
import ProcessSection from "./components/ProcessSection/ProcessSection";
import FeaturedSection from "./components/FeaturedSection/FeaturedSection";
// import CtaSection from "./components/CTASection/CTASection";

const App = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <NewRich />
      <ProcessSection />
      <FeaturedSection />
      {/* <CtaSection /> */}
    </div>
  );
};

export default App;
