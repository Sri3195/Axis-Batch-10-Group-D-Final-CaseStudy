import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SoftBox from "components/SoftBox";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import Grid from "@mui/material/Grid";

import SoftTypography from "components/SoftTypography";
import Mainnews from "./Mainnews";
import Rewardcard from "./Rewardcard";
import Footer from "./Footer";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import homeLoan from "assets/images/curved-images/home-loan4.png";
import SoftButton from "components/SoftButton";
import loan from "assets/images/curved-images/loan.png";
import cards from "assets/images/curved-images/cards.png";
import investments from "assets/images/curved-images/investments.png";
import { Icon } from "@mui/material";

function Dashboard() {

    return (

        <>
            <DashboardLayout>
                {/* <DashboardNavbar /> */}
                
                              <Link to="/dashboard" color="#343B5C" >
                              <SoftTypography variant="body2" fontWeight="bold" gutterBottom mt={3} >
                                <Icon>home</Icon>/Dashboard
                                </SoftTypography></Link>
                            
                <SoftBox py={3}>
                    <SoftBox mb={3}>
                        <SoftBox mb={3} mt={3}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} lg={7}>
                                    <Mainnews />
                                </Grid>
                                <Grid item xs={12} lg={5}>
                                    <Rewardcard />
                                </Grid>
                            </Grid>
                        </SoftBox>
                        <SoftTypography variant="h5" mt={5} fontWeight="bold" gutterBottom id="news" mb={2}>
                            Products
                        </SoftTypography>
                        <SoftBox mb={3} mt={2}>
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
                                                    <Link to="/loans">
                                                        <SoftBox component="img" src={loan} alt="home-loan" width="90px" height="100px" />
                                                    </Link>
                                                </center>
                                                <center>
                                                    <SoftBox mb={2}>
                                                        <SoftTypography variant="body2" color="black" position="center">
                                                            Loans
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
                                                    <Link to="/cards">
                                                        <SoftBox component="img" src={cards} alt="home-loan" width="90px" height="100px" />
                                                    </Link>
                                                </center>
                                                <center>
                                                    <SoftBox mb={2}>
                                                        <SoftTypography variant="body2" color="black" position="center">
                                                            Cards
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
                                                    <Link to="/investments">
                                                        <SoftBox component="img" src={investments} alt="home-loan" width="90px" height="100px" />
                                                    </Link>
                                                </center>
                                                <center>
                                                    <SoftBox mb={2}>
                                                        <SoftTypography variant="body2" color="black" position="center">
                                                            Investments
                                                        </SoftTypography>
                                                    </SoftBox>
                                                </center>
                                            </SoftBox>
                                        </SoftBox>
                                    </Card>
                                </Grid>
                            </Grid>
                        </SoftBox>
                        <SoftBox>

                            <center>
                                <SoftButton variant="gradient" color="info">
                                    <Link to="/products" style={{ color: "white" }}>View More</Link>
                                </SoftButton>
                            </center>

                        </SoftBox>
                    </SoftBox>
                </SoftBox>
                <br />
                <br />
                <br />
                <Footer />

            </DashboardLayout>
        </>
    );
}
export default Dashboard;