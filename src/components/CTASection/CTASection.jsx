import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
// import CtaImage from "../../images/cta-img.png"; // Make sure to import your image

const CtaSection = () => {
  return (
    <Box className="cta-section">
      <Container fluid>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={7} order={{ xs: 2, lg: 1 }} className="text-center text-lg-start pb-5 pb-lg-0">
            <Box className="cta-section-text">
              <Typography variant="h4" component="h4" sx={{ mb: 2 }}>
                <span>Connect WITH</span> other like-minded people from around the <span>globe</span>.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Join thousands of other people just like you who are on the path to joining <span>THE NEW RICH</span>.
              </Typography>
              <Button href="https://dev.newrich.com/register" variant="contained" color="primary">
                Join the 1% now
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} lg={5} order={{ xs: 1, lg: 2 }} className="text-center text-lg-end">
            <Box className="cta-section-img">
              <img src={CtaImage} alt="Cta img" className="img-fluid" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CtaSection;
