/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
// import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
// import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
// import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
// import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
// import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Testimonials</MKTypography>
          {/* <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679,477+ web developers
          </MKTypography> */}
          {/* <MKTypography variant="body1" color="text" mb={2}>
            Many Fortune 500 companies, startups, universities and governmental institutions love
            Creative Tim&apos;s products.
          </MKTypography> */}
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="dark"
              name="Wedding"
              date="1 day ago"
              review="I recently used this photobooth company for my wedding, and it was one of the highlights of the night! The booth was top-quality and produced clear, high-resolution prints. My guests loved the variety of props provided and had a blast taking photos all night. The company was professional, responsive, and helped make my special day even more memorable."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="dark"
              name="Sweet 16 Birthday Party"
              date="1 week ago"
              review="I hired this photobooth company for my daughter's sweet 16 party, and it was a hit! The booth was easy to use, and the attendant was professional, friendly, and kept the line moving smoothly. The prints were high-quality, and the ability to instantly share the photos to social media was a huge hit with the teens. I would highly recommend this company to anyone looking to add an extra layer of fun to their event!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="dark"
              name="Corporate Holiday Party"
              date="3 weeks ago"
              review="I cannot recommend this photobooth company enough! We recently used them for our corporate event, and they exceeded our expectations. The team was responsive and easy to work with, and the photobooth itself was a huge hit with our employees. The customizable templates and props helped to create a cohesive brand experience, and the prints were of exceptional quality. If you're looking for a fun and interactive way to engage your guests at your next event, this is the way to go!"
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />

        <Grid container spacing={3} justifyContent="center">
          {/* <Grid item xs={6} md={4} lg={2}> IF WE EVER GET DAMON LOGO OR ANY OTHER BIG CONTRACT PUT IT HERE
            <MKBox component="img" src={appleLogo} alt="Apple" width="100%" opacity={0.6} />
          </Grid> */}
          {/* <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasaLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid> */}
          {/* <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
