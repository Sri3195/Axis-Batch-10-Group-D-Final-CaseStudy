
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import { margin } from "@mui/system";
import "styles/style.css";
import Icon from "@mui/material/Icon";
import mutualFundsDp from "assets/images/curved-images/mutual-funds-dp.jfif";
import Footer from "layouts/Footer";
import { Link } from "react-router-dom";
function Mutualfunds() {
    return (
        <>
        <DashboardLayout>
                {/* <DashboardNavbar /> */}
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
                <img src={mutualFundsDp} className="product-image" key="mutual-funds-image" />
                <br />
                <SoftTypography variant="body2" color="#343B5C">
                Mutual funds are financial instruments that pool the money from various investors to invest in securities such as stocks (equities), bonds, money market instruments, etc. Returns on mutual fund investments are based on the market performance of the fund’s underlying assets. Investors can invest in mutual funds either via SIP (Systematic Investment Plan) or the lumpsum mode. 
                </SoftTypography>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Benefits:
                </SoftTypography>
                <ul id="list">
                    <li><SoftTypography variant="body2" color="#343B5C">
                    	Diversification. When you invest in mutual funds, your fund manager will invest your money in different securities including equity, stocks, debt funds and other money market instruments
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                    	Professional Management
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                    Liquidity
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                    	Smaller, Disciplined Investments
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                    Convenience And Simplicity
                    </SoftTypography></li>
                </ul>
                
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Eligibility Criteria:
                </SoftTypography>
                <ul id="list">
                    <li>
                    <SoftTypography variant="body2" color="#343B5C" >
                    The applicant needs to be an existing Bank account holder
                        </SoftTypography>
                    </li>
                    <li>
                    <SoftTypography variant="body2" color="#343B5C" >
                    The applicant needs to be KYC Compliant
                        </SoftTypography>
                    </li>
                    <li>
                    <SoftTypography variant="body2" color="#343B5C" >
                    The Savings Bank Account status has to be Single or Either/Survivor
                        </SoftTypography>
                    </li>
                    <li>
                    <SoftTypography variant="body2" color="#343B5C" >
                    The Account Opening Application Form has to be signed by the all the Bank Account Holders
                        </SoftTypography>
                    </li>
                </ul>
                
                
                
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Document Required:
                </SoftTypography>
                <table id="documents">
        
                    <tr className="document-row">
                        <td>
                            <ul id="list">
                            <li>PAN card along with latest (preferable) photograph. This document in compulsory in most scenarios.</li>
                            <li>Any one among Passport, Aadhar card, Driving license, Voter ID for Address Proof</li>
                            <li>Unique Identification Number (Aadhaar)</li>
                            <li>Passport</li>
                            <li>Driving License</li>
                            <li>Ration Card</li>
                            <li>Voters Identity Card</li>
                            <li>Utility bills like Gas bill, Telephone bill (only landline) or Electricity bill, maximum 3 months old</li>
                            <li>Bank Account Statement/Passbook maximum 3 months old</li>
                        </ul></td>
                    </tr>
                </table>
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Application Process:
                </SoftTypography>
                <ol id="list">
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                        Fill up the form.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                        Attach self-attested hard copies of identity and address proofs (see Documents). 
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                        Visit the branch of a fund house, RTA or investor service centre for an in-person verification.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                        Show the original documents for verification.
                        </SoftTypography>
                    </li>
                </ol>
                <br/>
                <br/>
                <br/>

                <Footer/>
            </DashboardLayout>
       
        </>
    )
}
export default Mutualfunds;