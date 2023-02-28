import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Cube from "examples/Icons/Cube";
import Document from "examples/Icons/Document";
import Settings from "examples/Icons/Settings";


import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import debitCard from "assets/images/curved-images/debit-card.png";



import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import { useState, useEffect } from "react";
import axios from "axios";

import curved0 from "assets/images/curved-images/curved0.jpg";

import breakpoints from "assets/theme/base/breakpoints";
import Footer from "layouts/Footer";


function Documents() {

    return (
        <DashboardLayout>
            <Link to="/dashboard" color="#343B5C" >
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom mt={3} >
                    <Icon>home</Icon>/Dashboard
                </SoftTypography></Link>

            <SoftTypography variant="h5" mt={5} fontWeight="bold" gutterBottom id="news" mb={2}>
                Your Important Documents
            </SoftTypography>
            <br />
            <SoftBox mb={3} mt={2}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={3}>
                        <Card sx={{ height: "100%", width: "75%", border: "solid #343B5C" }}>
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
                                        <Link to="/appointment-letter">
                                            <SoftBox component="img" src={"https://cdn-icons-png.flaticon.com/512/1350/1350335.png"} alt="home-loan" width="90px" height="100px" />
                                        </Link>
                                    </center>
                                    <center>
                                        <SoftBox mb={2} mt={2}>
                                            <SoftTypography variant="body2" color="black" position="center">
                                                AppointmentLetter
                                            </SoftTypography>
                                        </SoftBox>
                                    </center>
                                </SoftBox>
                            </SoftBox>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card sx={{ height: "100%", width: "75%", border: "solid #343B5C" }}>
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
                                        <Link to="/joining-letter">
                                            <SoftBox component="img" src={"https://cdn3.iconfinder.com/data/icons/interview-5/128/a-14-512.png"} alt="home-loan" width="90px" height="100px" />
                                        </Link>
                                    </center>
                                    <center>
                                        <SoftBox mb={2} mt={2}>
                                            <SoftTypography variant="body2" color="black" position="center">
                                                JoiningLetter
                                            </SoftTypography>
                                        </SoftBox>
                                    </center>
                                </SoftBox>
                            </SoftBox>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card sx={{ height: "100%", width: "75%", border: "solid #343B5C" }}>
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
                                        <Link to="/increment-letter">
                                            <SoftBox component="img" src={"https://icons-for-free.com/iconfiles/png/512/graph+increase-131983800381684484.png"} width="90px" height="100px" />
                                        </Link>
                                    </center>
                                    <center>
                                        <SoftBox mb={2} mt={2}>
                                            <SoftTypography variant="body2" color="black" position="center">
                                                IncrementLetter
                                            </SoftTypography>
                                        </SoftBox>
                                    </center>
                                </SoftBox>
                            </SoftBox>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card sx={{ height: "100%", width: "75%", border: "solid #343B5C" }}>
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
                                        <Link to="/salaryslip" >
                                            <SoftBox component="img" src={"https://static.thenounproject.com/png/719070-200.png"} alt="home-loan" width="90px" height="100px" />
                                        </Link>
                                    </center>
                                    <center>
                                        <SoftBox mb={2} mt={2}>
                                            <SoftTypography variant="body2" color="black" position="center">
                                                SalarySlip
                                            </SoftTypography>
                                        </SoftBox>
                                    </center>
                                </SoftBox>
                            </SoftBox>
                        </Card>
                    </Grid>
                </Grid>
            </SoftBox>


            <br />
            <br />
            <br />
            <Footer />
        </DashboardLayout>
    )
}
export default Documents;