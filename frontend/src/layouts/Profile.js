import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Cube from "examples/Icons/Cube";
import Document from "examples/Icons/Document";
import Settings from "examples/Icons/Settings";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


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


function Profile() {
    const [tabsOrientation, setTabsOrientation] = useState("horizontal");
    const [tabValue, setTabValue] = useState(0);
    const [emp, setEmp] = useState({});
    const [emps, setEmps] = useState([]);
    const url = new URL('http://127.0.0.1:4000/employee/search');

    const url2 = new URL('http://127.0.0.1:4000/employee/collegues')

    const params = {
        email: localStorage.getItem('email'),
    }
    url.search = new URLSearchParams(params).toString();
    url2.search = new URLSearchParams(params).toString();

    useEffect(() => {
        axios.get(url).then(res => {
            //console.log(res)
            setEmp(res.data);
        })

    }, []);
    useEffect(() => {
        axios.get(url2).then(res => {
            //console.log(res)
            setEmps(res.data);
        })

    }, []);
    console.log(emps);
    const handleSetTabValue = (event, newValue) => setTabValue(newValue);

    useEffect(() => {
        // A function that sets the orientation state of the tabs.
        function handleTabsOrientation() {
            return window.innerWidth < breakpoints.values.sm
                ? setTabsOrientation("vertical")
                : setTabsOrientation("horizontal");
        }


        /** 
         The event listener that's calling the handleTabsOrientation function when resizing the window.
        */
        window.addEventListener("resize", handleTabsOrientation);

        // Call the handleTabsOrientation function to set the state with the initial value.
        handleTabsOrientation();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleTabsOrientation);
    }, [tabsOrientation]);

    return (
        <DashboardLayout>
            <Link to="/dashboard" color="#343B5C" >
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom mt={3} mb={3} >
                    <Icon>home</Icon>/Dashboard
                </SoftTypography></Link>

            <SoftBox mb={3} mt={7}>
                <Grid container spacing={3} >
                    <Grid item xs={12} md={6} xl={3} alignItems="center" >
                        <Card sx={{ height: "100%", backgroundColor: "#3399ff", borderColor: "black", borderWidth: "3px" }}  >

                            <center>

                                <SoftAvatar
                                    src="https://th.bing.com/th/id/OIP.rSpVo3eGAFrzurWzMnJ3MQHaHO?pid=ImgDet&w=207&h=202&c=7&dpr=1.3"
                                    alt="profile-image"
                                    key="profile-image"
                                    size="xxl"
                                    padding="100px"


                                    sx={({ borders: { borderWidth }, palette: { white } }) => ({
                                        border: `${borderWidth[2]} solid ${white.main}`,
                                        cursor: "pointer",
                                        position: "relative", width: 200, height: 200,

                                        mt: 7,

                                        "&:hover, &:focus": {
                                            zIndex: "10",
                                        },
                                    })}
                                />

                                <SoftBox mb={1} pb={5} >
                                    <SoftTypography variant="body2" mt={2} color="white" fontWeight="medium" gutterBottom textTransform="capitalize" >
                                        {emp.name}
                                    </SoftTypography>
                                    <SoftTypography variant="body2" color="white">
                                        {emp.designation}

                                    </SoftTypography>
                                </SoftBox>
                                {/*} <Grid item xs={12} lg={8}>
                                    <SoftBox display="flex" justifyContent="center" mb={1}>
                                        <SoftBox mr={3} color="white">
                                            <FacebookIcon fontSize="small" />
                                            
                                        </SoftBox>
                                        
                                        <SoftBox mr={3} color="white">
                                            <TwitterIcon fontSize="small" />
                                        </SoftBox>
                                        
                                        
                                        <SoftBox color="white">
                                            <LinkedInIcon fontSize="small" />
                                        </SoftBox>
                                        
                                    </SoftBox>
                                </Grid>*/}
                            </center>

                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} xl={8} >
                        <Card sx={{ height: "100%", backgroundColor: "#f2f2f2", borderColor: "black", borderWidth: "3px" }}>

                            <SoftTypography variant="h6" fontWeight="bold" pt={2} pl={2} textTransform="capitalize">
                                General Information
                            </SoftTypography>
                            <SoftBox component="form" role="form" display="flex" alignItems="center" pt={2} px={2} >

                                <SoftBox width="48%" >
                                    <SoftTypography component="label" variant="body2" fontWeight="medium">
                                        Full Name
                                    </SoftTypography>
                                    <SoftInput ml={2} type="text" value={emp.name} />
                                </SoftBox>

                                <SoftBox width="48%" pl={2}>
                                    <SoftTypography component="label" variant="body2" fontWeight="medium">
                                        Phone Number
                                    </SoftTypography>
                                    <SoftInput type="text" value={emp.phno} />
                                </SoftBox>
                            </SoftBox>

                            <SoftBox component="form" role="form" display="flex" alignItems="center" pt={2} px={2} >

                                <SoftBox width="48%" >
                                    <SoftTypography component="label" variant="body2" fontWeight="medium">
                                        DOB
                                    </SoftTypography>
                                    <SoftInput ml={2} type="text" value={emp.dob} />
                                </SoftBox>
                                <SoftBox width="48%" pl={2}>
                                    <SoftTypography component="label" variant="body2" fontWeight="medium">
                                        Gender
                                    </SoftTypography>
                                    <SoftInput type="text" value={emp.gender} />
                                </SoftBox>
                            </SoftBox>

                            <SoftBox component="form" role="form" mb={2} display="flex" alignItems="center" pt={2} px={2} >

                                <SoftBox width="48%" >
                                    <SoftTypography component="label" variant="body2" fontWeight="medium">
                                        Email
                                    </SoftTypography>
                                    <SoftInput mr={2} type="email" value={emp.email} />
                                </SoftBox>
                                <SoftBox width="48%" pl={2}>
                                    <SoftTypography component="label" variant="body2" fontWeight="medium">
                                        Skills
                                    </SoftTypography>
                                    <SoftInput type="text" value={emp.skills} />
                                </SoftBox>
                            </SoftBox>
                            <SoftBox component="form" role="form" mb={2} alignItems="center" px={2} >

                                <SoftBox width="96%" >
                                    <SoftTypography component="label" variant="body2" fontWeight="medium">
                                        Address
                                    </SoftTypography>
                                    <SoftInput type="text" value={emp.address} />
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
export default Profile;