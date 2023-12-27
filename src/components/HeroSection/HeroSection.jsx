import React from "react";
import { withStyles, useTheme } from "@material-ui/core/styles";
import {
  Button,
  Typography,
  Container,
  Box,
  Grid,
  CardMedia,
} from "@material-ui/core";
import GrayWhiteCircle from "../../images/graywhite.svg";

const styles = (theme) => ({
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
    },
  },
  dreamers: {
    color: "#198fff",
    textAlign: "left",
    fontSize: "66.8px",
    fontStyle: "normal",
    // fontFamily:" Barlow",
    fontWeight: 800,
    margin: "10px 0px",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      fontSize: "26.8px",
    },
  },

  community1: {
    color: "#313131",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    [theme.breakpoints.down("xs")]: {
      fontSize: "22px !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
    },
  },
  joinNow: {
    color: "#198fff",
    fontSize: "42px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "26.8px",
    },
  },
  makeThings: {
    color: "#313131",
    marginTop: "20px",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      margin: "2px 0px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
  },
});

const HeroSection = ({ classes }) => {
  const theme = useTheme();

  return (
    <Box className={classes.heroContainer} style={{border: '1px solid red'}}>
      <Grid className="grid" container spacing={10}>
        <Grid item xs={12} md={7}>
          <Box className={classes.text_box}>
            <Typography
              className={classes.community1}
              variant="h4"
              component="h1"
              gutterBottom
            >
              We are the #1 Community For
            </Typography>
            <Typography
              className={classes.dreamers}
              component="span"
              gutterBottom
            >
              Dreamers
            </Typography>

            <Typography className={classes.makeThings} paragraph>
              THE <span style={{ color: "#198FFF" }}>1%</span> KNOW HOW TO MAKE
              THINGS HAPPEN
            </Typography>
            <Typography className={classes.joinNow} paragraph>
              Join the 1% Now
            </Typography>

            <Box>
              <button className="getStartedBtn">Get Started Now</button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} md={5}>
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
      {/* <Container>
      </Container> */}
    </Box>
  );
};

export default withStyles(styles)(HeroSection);
