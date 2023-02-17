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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BuiltByDevelopers() {
  const bgImage = "assets/images/bg-sign-in-basic.jpeg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        // backgroundImage: `url(${bgImage})`, //  UNCOMMENT IF YOU WANT THE PICTURE
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={10} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h1" color="white" mb={5}>
            Contact Us and Let The Memories Begin
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={5}>
            Unleash the fun and capture life&apos;s most precious moments with our state-of-the-art
            photobooth services! At Ace Productions we are equipped with high-quality cameras,
            professional lighting, and a variety of props and backdrops to add that extra spark to
            your special event. Whether you&apos;re celebrating a wedding, throwing a birthday
            party, or hosting a corporate event, our photobooths provide a fun and interactive way
            for you and your guests to create memories that will last a lifetime. With our
            user-friendly touch screens and easy-to-use interfaces, you&apos;ll be able to capture
            and share memories instantly with family and friends.
          </MKTypography>
          <MKTypography
            component="a"
            href="/pages/landing-pages/contact-us"
            target="_blank"
            rel="noreferrer"
            variant="gradient"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            Book Now <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
