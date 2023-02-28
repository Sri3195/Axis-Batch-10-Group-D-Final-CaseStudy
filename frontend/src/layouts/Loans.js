import { height } from "@mui/system";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import homeLoan from "assets/images/curved-images/home-loan4.png";
import educationLoan from "assets/images/curved-images/education-loan.png";
import personalLoan from "assets/images/curved-images/personal-loan.png";
import debitCard from "assets/images/curved-images/debit-card.png";
import creditCard from "assets/images/curved-images/credit-card.png";
import forexCard from "assets/images/curved-images/forex-card.png";
import mutualFunds from "assets/images/curved-images/mutual-funds.png";
import fixedDeposits  from "assets/images/curved-images/fixed-deposits.jpg";
import { Link } from "react-router-dom";
import "styles/style.css";
import Footer from "layouts/Footer";


function Loans() {
  return (
    <>
      <DashboardLayout>
      <SoftBox display="flex" mb={3}>
                <Link to="/dashboard" color="#343B5C" >
                    <SoftTypography variant="body2" fontWeight="bold" gutterBottom mt={3} >
                        <Icon>home</Icon>Home
                    </SoftTypography></Link>
                <Link to="/products" color="#343B5C" >
                    <SoftTypography variant="body2" fontWeight="bold" gutterBottom mt={3} >
                        /Products
                    </SoftTypography></Link>
                    </SoftBox>
        <img src="https://securecdn.pymnts.com/wp-content/uploads/2019/07/shutterstock_1150180799.jpg" className="product-image" key="product-image" />
        <SoftBox py={3}>
          <SoftBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4}>
                <Card sx={{ height: "100%", border: "solid #343B5C" }}>
                  <SoftBox position="relative" height="100%" p={2}>
                    <SoftBox
                      display="flex"
                      flexDirection="column"
                      height="50%"
                      py={2}
                      px={2}
                      borderRadius="lg"
                    >
                      <center>
                        <Link to="/home-loan">
                          <SoftBox component="img" src={homeLoan} alt="home-loan" width="90px" height="100px" />
                        </Link>
                      </center>
                      <center>
                        <SoftBox mb={2}>
                          <SoftTypography variant="body2" color="black" position="center">
                            Home Loan
                          </SoftTypography>
                        </SoftBox>
                      </center>
                    </SoftBox>
                  </SoftBox>
                </Card>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Card sx={{ height: "100%", border: "solid #343B5C" }}>
                  <SoftBox position="relative" height="100%" p={2}>
                    <SoftBox
                      display="flex"
                      flexDirection="column"
                      height="50%"
                      py={2}
                      px={2}
                      borderRadius="lg"
                    >
                      <center>
                        <Link to="/education-loan">
                          <SoftBox component="img" src={educationLoan} alt="education-loan" width="90px" height="100px" />
                        </Link>
                      </center>
                      <center>
                        <SoftBox mb={2}>
                          <SoftTypography variant="body2" color="black" position="center">
                            Education Loan
                          </SoftTypography>
                        </SoftBox>
                      </center>
                    </SoftBox>
                  </SoftBox>
                </Card>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Card sx={{ height: "100%", border: "solid #343B5C" }}>
                  <SoftBox position="relative" height="100%" p={2}>
                    <SoftBox
                      display="flex"
                      flexDirection="column"
                      height="50%"
                      py={2}
                      px={2}
                      borderRadius="lg"
                    >
                      <center>
                        <Link to="/personal-loan">
                          <SoftBox component="img" src={personalLoan} alt="home-loan" width="90px" height="100px" />
                        </Link>
                      </center>
                      <center>
                        <SoftBox mb={2}>
                          <SoftTypography variant="body2" color="black" position="center">
                            Personal Loan
                          </SoftTypography>
                        </SoftBox>
                      </center>
                    </SoftBox>
                  </SoftBox>
                </Card>
              </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </DashboardLayout>

    </>

  );
}
export default Loans;