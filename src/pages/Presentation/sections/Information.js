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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
// import RotatingCard from "examples/Cards/RotatingCard";
// import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
// import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
// import bgFront from "assets/images/rotating-card-bg-front.jpeg";
// import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={15} spacing={1} alignItems="center" sx={{ mx: "auto" }}>
          <MKTypography
            sx={{ alignItems: "center" }}
            fontWeight="bold"
            display="block"
            color="dark"
          >
            Services
          </MKTypography>

          <br />
          <Grid item xs={12} lg={12} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="dark"
                  icon="camera_alt"
                  title="Standard Boot (Digital + Physical)"
                  description="Equipped with state of the art lighting, plethora of features including GIF's, boomerangs, greenscreen and much more... (Props and backdrops included)"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="dark"
                  icon="party_mode"
                  title="360 Booth (Digital Only)"
                  description="Rotating arm with the ability to capture slow motion 360 videos.(Props included)"
                />
              </Grid>
            </Grid>
            {/* <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="dark"
                  icon="video_camera_front_icon"
                  title="Backdrops + Props"
                  description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="dark"
                  icon="video_camera_back_icon"
                  title="Fully Responsive"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
