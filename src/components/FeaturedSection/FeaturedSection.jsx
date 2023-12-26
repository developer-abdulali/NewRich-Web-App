// import React from "react";
// import { Container, Grid, Typography, Box } from "@mui/material";
// import SapratingLine from "../../images/sepratingLine.svg";

// const FeaturedSection = () => {
//   const featuresData = [
//     {
//       title: "Discover your purpose",
//       icon: require("../../images/targetingGoal.svg").default,
//     },
//     {
//       title: "Get into Shape",
//       icon: require("../../images/getintoShape.svg").default,
//     },
//     {
//       title: "Build online businesses",
//       icon: require("../../images/buildBusiness.svg").default,
//     },
//     {
//       title: "Create better relationships",
//       icon: require("../../images/relationship.svg").default,
//     },
//     {
//       title: "Feed your soul",
//       icon: require("../../images/feedYousoul.svg").default,
//     },
//     {
//       title: "Express yourself creatively",
//       icon: require("../../images/creativity.svg").default,
//     },
//     {
//       title: "Learn more about who you are",
//       icon: require("../../images/book.svg").default,
//     },
//     {
//       title: "Rebuild your mindset",
//       icon: require("../../images/mindset.svg").default,
//     },
//   ];
//   return (
//     <Box className="features-section">
//       <Container>
//         <Grid container spacing={5}>
//           <Grid item xs={12}>
//             <Box className="features-section-heading">
//               <Typography variant="h4">
//                 Learn from thousands of instructors who are{" "}
//                 <span>proven experts</span> in various fields{" "}
//                 <span>of lifestyle enhancement</span>
//               </Typography>
//             </Box>
//           </Grid>

//           {/* Features Items */}
//           {featuresData.map((feature, index) => (
//             <Grid key={index} item xs={12} sm={12} md={6} lg={3}>
//               <Box className="features-item d-flex flex-column align-items-center text-center">
//                 <img
//                   src={feature.icon}
//                   alt={`${feature.title} Icon`}
//                   className="mb-4"
//                 />
//                 <img src={SapratingLine} alt="Border Img" className="mb-3" />
//                 <Typography variant="h6">{feature.title}</Typography>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default FeaturedSection;






import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import SapratingLine from "../../images/sepratingLine.svg";

const FeaturedSection = () => {
  const featuresData = [
    {
      title: "Discover your purpose",
      icon: require("../../images/targetingGoal.svg").default,
    },
    {
      title: "Get into Shape",
      icon: require("../../images/getintoShape.svg").default,
    },
    {
      title: "Build online businesses",
      icon: require("../../images/buildBusiness.svg").default,
    },
    {
      title: "Create better relationships",
      icon: require("../../images/relationship.svg").default,
    },
    {
      title: "Feed your soul",
      icon: require("../../images/feedYousoul.svg").default,
    },
    {
      title: "Express yourself creatively",
      icon: require("../../images/creativity.svg").default,
    },
    {
      title: "Learn more about who you are",
      icon: require("../../images/book.svg").default,
    },
    {
      title: "Rebuild your mindset",
      icon: require("../../images/mindset.svg").default,
    },
  ];

  return (
    <Box className="features-section" sx={{ py: 5 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box className="features-section-heading" sx={{ textAlign: "center" }}>
              <Typography variant="h4">
                Learn from thousands of instructors who are{" "}
                <span>proven experts</span> in various fields{" "}
                <span>of lifestyle enhancement</span>
              </Typography>
            </Box>
          </Grid>

          {/* Features Items */}
          {featuresData.map((feature, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Box className="features-item d-flex flex-column align-items-center text-center" sx={{ mb: 3 }}>
                <img
                  src={feature.icon}
                  alt={`${feature.title} Icon`}
                  className="mb-2"
                  sx={{ width: "80%", maxWidth: 120 }}
                />
                <img src={SapratingLine} alt="Border Img" className="mb-2" sx={{ width: "40%" }} />
                <Typography variant="h6">{feature.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedSection;
