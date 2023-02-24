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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
// import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
// import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes"; // edit for contact us
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/ace.png"; // UNCOMMENT IF YOU WANT THE PICTURE
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} backgroundColor="dark" sticky dark />
      <MKBox
        height="125vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`, //  UNCOMMENT IF YOU WANT THE PICTURE
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={30} lg={40} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="dark"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {" "}
              {/* Ace Productions{" "} */}
            </MKTypography>
            {/* <MKTypography
              variant="body1"
              color="dark"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={3}
              mb={0}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("sm")]: {
                  fontSize: size["1xl"],
                },
              })}
            >
              Unleash the fun and capture life&apos;s most precious moments with our
              state-of-the-art photobooth services! At Ace Productions we are equipped with
              high-quality cameras, professional lighting, and a variety of props and backdrops to
              add that extra spark to your special event. Whether you&apos;re celebrating a wedding,
              throwing a birthday party, or hosting a corporate event, our photobooths provide a fun
              and interactive way for you and your guests to create memories that will last a
              lifetime. With our user-friendly touch screens and easy-to-use interfaces, you&apos;ll
              be able to capture and share memories instantly with family and friends. Book now and
              let the memories begin!
            </MKTypography> */}
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          // backgroundColor: ({ palette: { black }, functions: { rgba } }) => rgba(black.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* <Counters /> */}
        <Information />
        {/* <DesignBlocks /> */}
        {/* <Pages /> */}
        <Container sx={{ mt: 0 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="dark"
                icon="collections"
                title="Everlasting Memories"
                description="Get high-quality prints instantly with our fast and reliable photobooths. Social Media Integration, share your photos with all of your friends and family on social media instantly. You can also create custom hashtags for your event to help organize and share photos more easily."
                // action={{
                // type: "external",
                // route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                // label: "Let's start",
                // }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="dark"
                icon="precision_manufacturing"
                title="Customize to your liking"
                description="Customizable Photo Templates: Customized photo templates with your event's theme, logo, or message can provide an extra level of personalization to your photobooth experience. Customizable Props which can make for fun, personalized photos that will be cherished for years to come."
                // action={{
                //   type: "external",
                //   route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                //   label: "Read more",
                // }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="dark"
                icon="camera"
                title="Special Features"
                description="Green Screen Technology this feature allows you to change the photo booth background to any image, which gives your guests the ability to travel to any location they want. Animated GIFs to take your photobooth experience to the next level with animated GIFs. These are perfect for sharing on social media or adding to digital invitations and event websites.

                "
                // action={{
                //   type: "external",
                //   route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                //   label: "Read more",
                // }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        {/* <Download /> */}
        <MKBox pt={4} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  If you enjoyed our services feel free to give us a follow or shoutout:
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text= Thank you Ace Productions for making our event extra special! I highly recommend their services, check them out @aceproductionsinc on Instagram #photoboothfun #aceproductions #evententertainment #memoriesmade"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/profile.php?id=100090203545590"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Follow
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.instagram.com/aceproductionsinc/"
                  target="_blank"
                  color="instagram"
                >
                  <i className="fab fa-instagram" />
                  &nbsp;Follow
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} sx={{ textAlign: "left", justifyContent: "left" }} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
