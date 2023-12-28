import React from "react";
import { Container, Grid, Accordion, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FooterLogo from "../../images/footerLogo.svg";
import LinkedinLogo from "../../images/linkedin.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#10284F",
    color: "#fff",
    padding: theme.spacing(4),
    textAlign: "center",
  },
  logo: {
    marginBottom: theme.spacing(2),
  },
  section: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  accordion: {
    marginBottom: theme.spacing(2),
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  reachUs: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  socialIcon: {
    marginRight: theme.spacing(1),
  },
  infoLinks: {
    borderTop: "1px solid #555",
    paddingTop: theme.spacing(2),
  },
  blueLinks: {
    color: "#198FFF",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        {/* Footer Logo */}
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.logo}>
          <img src={FooterLogo} alt="Footer Logo Img" />
        </Grid>

        {/* Sections */}
        <Grid container spacing={3} className={classes.section}>
          {/* Who We Are Section */}
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            style={{ textAlign: "left" }}
          >
            <Typography
              variant="h6"
              style={{
                color: "#198FFF",
                fontSize: 20,
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "26px",
                textAlign: "left",
              }}
            >
              Who We Are
            </Typography>
            <Typography
              style={{
                color: "#FFF",
                fontSize: 20,
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "26px",
                textAlign: "left",
              }}
            >
              We are a passionate team dedicated to making a positive impact on
              the world through our innovative products and platforms.
            </Typography>
          </Grid>

          {/* Company Links Section */}
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            style={{ textAlign: "left" }}
          >
            <Typography
              variant="h6"
              style={{
                color: "#198FFF",
                fontSize: 22,
                fontStyle: "normal",
                textAlign: "left",
              }}
            >
              Company
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                {/* Use Link for navigation */}
                <Link
                  href="/"
                  className={classes.blueLinks}
                  style={{
                    color: "#FFF",
                    fontSize: 20,
                    textDecoration: "none",
                    fontStyle: "normal",
                    textAlign: "left",
                    fontWeight: 500,
                    lineHeight: "26px",
                  }}
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className={classes.blueLinks}
                  style={{
                    color: "#FFF",
                    fontSize: 20,
                    textAlign: "left",
                    textDecoration: "none",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "26px",
                  }}
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className={classes.blueLinks}
                  style={{
                    color: "#FFF",
                    fontSize: 20,
                    textDecoration: "none",
                    fontStyle: "normal",
                    fontWeight: 500,
                    textAlign: "left",
                    lineHeight: "26px",
                  }}
                >
                  Influencer Network
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className={classes.blueLinks}
                  style={{
                    color: "#FFF",
                    fontSize: 20,
                    fontStyle: "normal",
                    textAlign: "left",
                    textDecoration: "none",
                    fontWeight: 500,
                    lineHeight: "26px",
                  }}
                >
                  Browse Jobs
                </Link>
              </li>
            </ul>
          </Grid>
          {/* What We're About Section */}
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            style={{ textAlign: "left" }}
          >
            <Typography
              variant="h6"
              style={{ color: "#198FFF", fontSize: 22, fontStyle: "normal" }}
            >
              What We're About
            </Typography>
            <Accordion className={classes.accordion}>
              <Typography
                style={{
                  color: "white",
                  fontSize: 20,
                  fontStyle: "normal",
                }}
              >
                Happy Individuals = A Happy Planet. We believe that the solution
                to a better world starts with the individual. We believe in
                empowering individuals to find the solutions that work for them
                and the lifestyle that they wish to experience.
              </Typography>
            </Accordion>
          </Grid>
        </Grid>

        {/* Reach Us */}
        <div className={`reachus text-center ${classes.reachUs}`}>
          <Link
            href="#"
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Barlow",
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: 500,
              textDecoration: "none",
              lineHeight: "28px",
            }}
          >
            <span>Reach Us</span>
          </Link>
        </div>

        {/* Info Links */}
        <div className={classes.infoLinks}>
          <Grid container justifyContent="flex-end">
            {/* Social Media Icon */}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              align="center"
              md-align="start"
              lg-align="center"
              mb={3}
              mb-md={0}
            >
              <Link href="#" target="_blank">
                <img
                  src={LinkedinLogo}
                  alt="Linkedin loog"
                  className={classes.socialIcon}
                  style={{ fontSize: "large" }}
                />
              </Link>
            </Grid>
            {/* Privacy and Terms Links */}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              align="center"
              md-align="end"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li
                  style={{
                    marginRight: "20px",
                  }}
                >
                  <Link
                    href="#"
                    className={classes.blueLinks}
                    style={{
                      color: "#FFF",
                      // fontFamily: "Ubuntu",
                      fontSize: 18,
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "26px",
                      textDecoration: "none",
                    }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={classes.blueLinks}
                    style={{
                      color: "#FFF",
                      // fontFamily: "Ubuntu",
                      fontSize: 18,
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "26px",
                      textDecoration: "none",
                    }}
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
