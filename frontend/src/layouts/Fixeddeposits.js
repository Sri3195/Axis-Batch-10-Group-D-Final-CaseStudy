
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import { margin } from "@mui/system";
import "styles/style.css";
import fixedDepositsDp from "assets/images/curved-images/fixed-deposits-dp.jpg";
import Footer from "layouts/Footer";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";
function Fixeddeposits() {
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

                <img src={fixedDepositsDp} className="product-image" key="fixed-deposits-image" />
                <br />
                <SoftTypography variant="body2" color="#343B5C">
                Fixed Deposits are one of the most popular ways to save money. They are a safe investment, offer good returns, and are easy to open.
A Fixed Deposit offers guaranteed returns. Unlike market-led investments where returns fluctuate over time, the returns on an FD are fixed when you open the account. Even if interest rates fall after you open a Fixed Deposit, you will continue to receive the interest decided at the start. FDs are considered much safer than investments in other assets like equity.
                </SoftTypography>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Benefits:
                </SoftTypography>
                <ul id="list">
                    <li><SoftTypography variant="body2" color="#343B5C">
                    Zero-Risk Saving + Investment Plan.
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                    Easy Liquidity
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                    Better Interest Rate than Savings Account
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                    Build Relationship with your Bank
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                    Tax-saving Option
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                    Opening a FD Account
                    </SoftTypography></li>
                </ul>
                
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Eligibility Criteria:
                </SoftTypography>
                <ul id="list">
                    <li>
                    <SoftTypography variant="body2" color="#343B5C" >
                    Hindu Undivided Families
                        </SoftTypography>
                    </li>
                    <li>
                    <SoftTypography variant="body2" color="#343B5C" >
                    Sole Proprietorship Firms
                        </SoftTypography>
                    </li>
                    <li>
                    <SoftTypography variant="body2" color="#343B5C" >
                    Partnership Firms
                        </SoftTypography>
                    </li>
                </ul>
                
                
                
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Application Process:
                </SoftTypography>
                <ol id="list">
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                        Visit the nearest branch of the institution.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                        Enquire about the fixed deposit application form.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                        Fill out the form with the required details.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                       You will also have to submit some documents like identity proof, address proof, etc along with the application form for KYC verification.
                        </SoftTypography>
                    </li>
                </ol>
                <br/>
                <br/><br/>

            <Footer/>
            </DashboardLayout>
       
        </>
    )
}
export default Fixeddeposits;