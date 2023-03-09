/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useState } from "react";

// react-router components
// import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
// import PropTypes from "prop-types";

// @mui material components
// import Collapse from "@mui/material/Collapse";
// import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// Material Kit 2 React example components
// import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";

function DefaultNavbarMobile() {
  // const [collapse, setCollapse] = useState("");

  // const handleSetCollapse = (name) => (collapse === name ? setCollapse(false) : setCollapse(name));

  return (
    // <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
    <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2}>
      {/* {renderNavbarItems} */}
    </MKBox>
    // </Collapse>
  );
}

// Typechecking props for the DefaultNavbarMobile
DefaultNavbarMobile.propTypes = {
  // routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  // open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
