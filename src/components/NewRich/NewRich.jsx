import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FourImages from "../../images/fourImgs.svg";

const useStyles = makeStyles((theme) => ({
  infoSection: {
    padding: theme.spacing(5, 0),
  },
  infoSectionImg: {
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      textAlign: "start",
    },
  },
  infoSectionText: {
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      textAlign: "start",
    },
  },
  imgFluid: {
    width: "100%",
    height: "auto",
  },
  whatisNewRich: {
    color: "#313131",
    // fontFamily: "Barlow",
    fontSize: 48,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  newRichSpan: {
    color: "#1E92FF",
    // fontFamily: 'Barlow',
    fontSize: 48,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    textTransform: "lowercase",
  },
  onlineNetworking: {
    color: "#5A5A5A",
    // fontFamily: Barlow,
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    marginTop: 20,
  },
  connnetWithInstructor: {
    color: "#5A5A5A",
    // fontFamily: "Barlow",
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    marginTop: 20,
  },
  joinBtn: {
    borderRadius: 6,
    background: "#198FFF",
    marginTop: 20,
    color: "#fff",
    fontWeight: 700,
    fontSize: 20,
  },
}));

const NewRich = () => {
  const classes = useStyles();

  return (
    <div className={classes.infoSection} style={{border: '1px solid red'}}>
      <Container style={{ minWidth: "80vw" }}>
        <Grid container spacing={10}>
          <Grid item xs={10} lg={6} order={{ xs: 1, lg: 1 }}>
            <div className={`${classes.infoSectionImg} pb-5 pb-lg-0`}>
              <img
                src={FourImages}
                alt="Info Section"
                className={classes.imgFluid}
              />
            </div>
          </Grid>
          <Grid item xs={12} lg={6} order={{ xs: 2, lg: 2 }}>
            <div className={`${classes.infoSectionText}`}>
              <Typography variant="h4" className={classes.whatisNewRich}>
                What is <span className={classes.newRichSpan}>newrich</span>
                .com?
              </Typography>
              <Typography className={classes.onlineNetworking}>
                Newrich.com is an online networking and learning platform that
                connects people who are passionate about building the life of
                their dreams.
              </Typography>
              <Typography className={classes.connnetWithInstructor}>
                Connect with instructors who can guide you along your path
              </Typography>
              <Button variant="contained" className={classes.joinBtn}>
                Join the 1% now
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NewRich;
