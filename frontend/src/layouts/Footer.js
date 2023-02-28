
import {Link } from 'react-router-dom'

import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftBox from "components/SoftBox";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import "styles/footer.css";
import { FormatUnderlined } from '@mui/icons-material';


function Footer() {
    return (
        <Card sx={{ height: "100%", backgroundColor: "#e9ecef", borderRadius: "0px", float: "left" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={3}>
              <SoftBox
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center">
                <ul id="footer-list">
                    <li><SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                        Contact Us
                    </SoftTypography>
                    </li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Call: 1800-214-2345 <br/>
                        Missed Call to 2587961 or +918142147885
                        to get instant personal Loan.
                    </SoftTypography></li>
                    <br/>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Call: 1800-215-2345 <br/>
                        Missed Call to 2587961 or +918142147885
                        to get credit limit in 2 Min..
                    </SoftTypography></li>
                </ul>
                </SoftBox>
              </Grid>
              <Grid item xs={12} lg={3}>
              <SoftBox
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center">
                <ul id="footer-list">
                <li><SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    About Us
                </SoftTypography>
                </li>
                <li><SoftTypography variant="body2" color="#343B5C">
                    
                Core Values
                </SoftTypography></li>
                <li><SoftTypography variant="body2" color="#343B5C">
                   Customer Centricity
                </SoftTypography></li>
                <li><SoftTypography variant="body2" color="#343B5C">
                   Ethics
                </SoftTypography></li>
                <li><SoftTypography variant="body2" color="#343B5C">
                    Transparency
                </SoftTypography></li>
                <li><SoftTypography variant="body2" color="#343B5C">
                    Teamwork
                </SoftTypography></li>
                <li><SoftTypography variant="body2" color="#343B5C">
                    Ownership
                </SoftTypography></li>
            </ul>
            </SoftBox>
              </Grid>
              <Grid item xs={12} lg={3}>
              <SoftBox
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center">
            <ul id="footer-list">
                <li><SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Help & FAQ
                </SoftTypography>
                </li>
                <li><SoftTypography variant="body2" color="#343B5C">
                    Help Center
                </SoftTypography></li>
                <li><SoftTypography variant="body2" color="#343B5C">
                    Chat with Soni
                </SoftTypography></li>
                <li><SoftTypography variant="body2" color="#343B5C">
                    Raise A Query
                </SoftTypography></li>
                
            </ul>
            </SoftBox>
              </Grid>
              <Grid item xs={12} lg={3}>
              <SoftBox
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center">
            <ul id="footer-list">
                <li><SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Other Links
                </SoftTypography>
                </li>
                <li><SoftTypography variant="body2" color="#343B5C">
                    <a style={{color:"#343B5C"}} href="/personal-loan">Personal Loan</a>
                </SoftTypography></li>
                <li><SoftTypography variant="body2" color="#343B5C">
                    <a style={{color:"#343B5C"}} href="/credit-card">Apply for Credit card</a> 
                </SoftTypography></li>
                <li><SoftTypography variant="body2" color="#343B5C">
                    <a style={{color:"#343B5C"}} href="/home-loan">Home loan</a> 
                </SoftTypography></li>
                <li><SoftTypography variant="body2" color="#343B5C">
                    <a style={{color:"#343B5C"}} href="/education-loan"> Education Loan</a> 
                </SoftTypography></li>
                <li><SoftTypography variant="body2" color="#343B5C">
                    <a style={{color:"#343B5C"}} href="/fixed-deposits">Fixed Deposit</a>  
                </SoftTypography></li>
            </ul>
            </SoftBox>
              </Grid>
              </Grid>
            <br />
        </Card>

    )
}

export default Footer;