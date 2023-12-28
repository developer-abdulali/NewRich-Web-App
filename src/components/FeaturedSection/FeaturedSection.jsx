import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import SepratingLine from "../../images/sepratingLine.svg";

const features = [
  {
    title: "Discover your purpose",
    iconSrc: require("../../images/targetingGoal.svg").default,
  },
  {
    title: "Get into Shape",
    iconSrc: require("../../images/getintoShape.svg").default,
  },
  {
    title: "Build online businesses",
    iconSrc: require("../../images/buildBusiness.svg").default,
  },
  {
    title: "Create better relationships",
    iconSrc: require("../../images/relationship.svg").default,
  },
  {
    title: "Feed your soul",
    iconSrc: require("../../images/feedYousoul.svg").default,
  },
  {
    title: "Express yourself creatively",
    iconSrc: require("../../images/creativity.svg").default,
  },
  {
    title: "Learn more about who you are",
    iconSrc: require("../../images/book.svg").default,
  },
  {
    title: "Rebuild your mindset",
    iconSrc: require("../../images/mindset.svg").default,
  },
];

const FeatureItem = ({ iconSrc, title }) => (
  <div className="featureContainer">
    <img src={iconSrc} alt={`${title} Icon`} style={{ marginBottom: "10px" }} />
    <img src={SepratingLine} alt="Border Img" style={{ marginBottom: "5px" }} />
    <Typography className="title" variant="h6">
      {title}
    </Typography>
  </div>
);

const FeaturesSection = () => (
  <div className="features-section">
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} className="features-section-heading">
          <div>
            <Typography className="learnFrom" variant="h4">
              Learn from thousands of instructors who are{" "}
              <span className="provenExperts">proven experts</span> in various
              fields
              <span className="OflifeStyle"> of lifestyle enhancement</span>
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={12} md={6} lg={3} key={index}>
            <FeatureItem {...feature} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </div>
);

export default FeaturesSection;
