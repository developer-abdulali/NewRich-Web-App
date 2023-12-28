import React from "react";
import { withStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Box, Grid, CardMedia, Button } from "@material-ui/core";
import GrayWhiteCircle from "../../images/graywhite.svg";
import RoundedSvg from "../../images/RoundedSvg.svg";

const styles = (theme) => ({
  heroContainer: {
    maxWidth: "100%",
    overflow: "hidden",
    margin: "0 0 20px 0",
  },
  heroContent: {
    maxWidth: 600,
    textAlign: "center",
    margin: "0 auto",
  },
  heroButton: {
    marginTop: theme.spacing(4),
  },
  heroImage: {
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(4),
  },
  text_box: {
    marginTop: "10vh",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      textAlign: "center",
      margin: theme.spacing(0, 2),
    },
  },
});

const HeroSection = ({ classes }) => {
  const theme = useTheme();

  return (
    <Box className={classes.heroContainer} id="hero">
      <Grid className="grid" container spacing={10}>
        <div className="divForBG" />
        <div className="roundedIcon">
          <img src={RoundedSvg} alt="" />
        </div>
        <Grid item xs={12} md={7}>
          <Box className={classes.text_box}>
            <Typography
              className="community1"
              variant="h4"
              component="h1"
              gutterBottom
            >
              We are the #1 Community For
            </Typography>
            <Typography className="dreamers" component="span" gutterBottom>
              Dreamers
            </Typography>

            <Typography className="makeThings" paragraph>
              THE <span style={{ color: "#198FFF" }}>1%</span> KNOW HOW TO MAKE
              THINGS HAPPEN
            </Typography>
            <Typography className="joinNow" paragraph>
              Join the 1% Now
            </Typography>

            <Box>
              <button className="getStartedBtn">Get Started Now</button>
              {/* <Button variant="contained" className={classes.getStarteBtn}>
                Get Started Now
              </Button> */}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box>
            <CardMedia
              className={classes.heroImage}
              component="img"
              alt="Hero Image"
              image={GrayWhiteCircle}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withStyles(styles)(HeroSection);
