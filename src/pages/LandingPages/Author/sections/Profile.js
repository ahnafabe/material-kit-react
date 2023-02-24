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
// import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/ace.png";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -30 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Terms and Conditions</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                The person(s) whose signature(s) appear on this contract, known as “Client,” agree
                that Ace Productions will provide photo booth services to the best of its abilities,
                in the manner described in this Agreement. This is a binding contract, which
                incorporates the entire understanding of the parties, and any modifications must be
                in writing, signed by both parties, and physically attached to the original
                agreement. <br />
                <br />
              </MKTypography>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Service Period</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                Pursuant to the responsibilities of the Client, the Company agrees to have a photo
                booth operational for a minimum of 90% during this period; occasionally, operations
                may need to be interrupted for maintenance of the photo booth.
                <br /> <br />
              </MKTypography>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Retainer and Payment</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                A non-refundable retainer in the amount of $50 CAD is due upon signing of the
                contract. The remaining amount is due once the contract has been signed. The client
                is liable for any overage in time at the cost of $150/hr CAD.
                <br /> <br />
              </MKTypography>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Charges and Cancellations</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                Any request for a date, time, or location change must be made in writing at least
                thirty (15) days in advance of the original event date. Change is subject to photo
                booth availability and receipt of a new Service Contract. If there is no
                availability for the alternate date, time, or location, the deposit shall be
                forfeited and no photo booth services will be provided. Any cancellation occurring
                less than 15 days prior to the event date shall forfeit all payments received.
                <br /> <br />
              </MKTypography>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Parking</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                Client shall provide parking for Company&apos;s vehicle while at Client&apos;s
                Event. The parking space shall be somewhat within close proximity to the venue, and
                the Client shall provide any necessary parking permit or pass prior to the event
                date.
                <br /> <br />
              </MKTypography>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Photobooth Access, Space and Power</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                Client shall arrange for an appropriate space for the photobooth at Client&apos;s
                venue. Space must be level, solid, and at least 6&apos; by 9&apos;. It is the
                Client&apos;s responsibility to ensure access is possible. Photobooth may be placed
                in an exterior location, provided it is protected from the weather. The client is
                responsible for providing power to the photo booth (110V, 10 amps, 3-prong outlet).
                <br /> <br />
              </MKTypography>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Online Gallery </MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                Upon receiving the downloadable links for high-resolution files, the Client accepts
                all responsibility for archiving and protecting the photographs. The company is not
                responsible for the lifespan of any digital media provided for any future changes in
                digital technology or media readers that might result in an inability to read the
                discs provided. It is the Client&apos;s responsibility to make sure that digital
                files are copied to new media as required.
                <br /> <br />
              </MKTypography>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Printout Design </MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                The company will design a printout based on material supplied by the Client,
                including logos, fonts, monograms, and ideas. The company will provide a draft and
                will allow additional revisions up to 10 days prior to the event.
                <br /> <br />
              </MKTypography>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Model Release </MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                Company reserves the right to use images produced with its photobooth under this
                Agreement to transfer to a third-party, host, store, cache, reproduce, publish,
                display (publicly or otherwise), perform (publicly or otherwise), distribute,
                transmit, modify, adapt, and create derivative works, and to reproduce the same
                images, in each case for the purpose of promoting the Company, its services, and
                other good faith business purposes. CLIENT WARRANTS THAT IT HAS ACTUAL AUTHORITY TO
                AGREE TO THE USE OF THE LIKENESS OF ALL PERSONS INCLUDED IN THE IMAGES IN THIS
                MANNER AND SHALL INDEMNIFY THE COMPANY IN ACCORDANCE WITH THE INDEMNIFICATION CLAUSE
                PROVIDED IN THIS AGREEMENT BELOW.
                <br /> <br />
              </MKTypography>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Limitation of Liability; Waiver </MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                UNDER NO CIRCUMSTANCES, EXCEPT AS OTHERWISE STATED IN THIS AGREEMENT, WILL THE
                COMPANY, ITS PARENT COMPANY, NOR ANY OF THEIR EMPLOYEES, MANAGERS, OFFICERS OR
                AGENTS BE LIABLE TO THE CLIENT FOR ANY LOSS OR DAMAGES OF ANY KIND (INCLUDING,
                WITHOUT LIMITATION, FOR ANY DIRECT, INDIRECT, ECONOMIC, EXEMPLARY, SPECIAL,
                PUNITIVE, INCIDENTAL OR CONSEQUENTIAL LOSSES OR DAMAGES) THAT ARE DIRECTLY OR
                INDIRECTLY RELATED TO: (A) THE PHOTOBOOTH SERVICE; (B) ANY ACTION TAKEN IN
                CONNECTION WITH COPYRIGHT OR OTHER INTELLECTUAL PROPERTY OWNERS, INCLUDING WITHOUT
                LIMITATION, ANY INTELLECTUAL PROPERTY RIGHT, PUBLICITY, CONFIDENTIALITY, PROPERTY OR
                PRIVACY RIGHT; (C) ANY ERRORS OR OMISSIONS IN THE SERVICE&apos;S OPERATION; OR (D)
                ANY DAMAGE TO ANY USER&apos;S COMPUTER, MOBILE DEVICE, OR OTHER EQUIPMENT OR
                TECHNOLOGY. IN NO EVENT WILL THE COMPANY BE LIABLE TO THE CLIENT OR ANYONE ELSE FOR
                LOSS, DAMAGE, OR INJURY, INCLUDING, WITHOUT LIMITATION, DEATH OR PERSONAL INJURY.
                CLIENT AGREES TO DEFEND (AT COMPANY&apos;S REQUEST), INDEMNIFY, AND HOLD THE
                COMPANY, ITS PARENT COMPANY, EMPLOYEES, MANAGERS, OFFICERS, AND AGENTS, HARMLESS
                FROM AND AGAINST ANY CLAIMS, LIABILITY, DAMAGES, LOSES, AND EXPENSES, INCLUDING
                WITHOUT LIMITATION, REASONABLE ATTORNEY&apos;S FEES AND COSTS, ARISING OUT OF OR IN
                ANYWAY CONNECTED WITH ANY OF THE LIABILITY STATED ABOVE, INCLUDING BUT NOT LIMITED
                TO ANY ACTION TAKEN IN CONNECTION WITH THE MODEL RELEASE PROVIDED IN THIS AGREEMENT,
                COPYRIGHT OR OTHER INTELLECTUAL PROPERTY OWNERS, INCLUDING WITHOUT LIMITATION, ANY
                INTELLECTUAL PROPERTY RIGHT, PUBLICITY, CONFIDENTIALITY, PROPERTY OR PRIVACY RIGHT.
                <br /> <br />
              </MKTypography>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Miscellaneous Terms </MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                In the event Company is unable to supply a working photo booth for at least 90% of
                the Service period, the Client shall be refunded a prorated amount based on the
                amount of service received. If no service is received, Company&apos;s maximum
                liability will be the return of all payments received from the Client. Prior to any
                party commencing an action, each party shall meet in a good-faith attempt to resolve
                their differences. Should both parties be unable to resolve their dispute, both
                parties agree to submit their dispute to a neutral mediator. Both parties agree to
                the jurisdiction, venue, and choice of law of the Company&apos;s principal place of
                business at the time of the execution of this Agreement.
                <br /> <br />
              </MKTypography>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">All Sales are Final </MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                The client understands and agrees that all sales and service fees are final.
                <br /> <br />
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
