
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import { margin } from "@mui/system";
import "styles/style.css";
import Icon from "@mui/material/Icon";
import creditCardDp from "assets/images/curved-images/credit-card-dp.jpg";
import Footer from "layouts/Footer";
import { Link } from "react-router-dom";


function Creditcard() {
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
                <img src={creditCardDp} className="product-image" key="credit-card-image" />
                <br />
                <SoftTypography variant="body2" color="#343B5C">
                    Credit cards allow the user to borrow money from the bank and make purchases. Bank or companies issuing the credit card creates a revolving account and grants a line of credit to the cardholder,and then the user borrows money for payments or can also withdraw cash at times.Companies issuing credit cards also set a minimum repayment amount for the amount borrowed and also charge interest on delayed payments.
                </SoftTypography>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Benefits:
                </SoftTypography>
                <ul id="list">
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Earn rewards such as cash back or miles points
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Protection against credit card fraud
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Credit score information for free
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        No foreign transaction fees
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Increased purchasing power
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Not linked to checking or savings account
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Putting a hold on a rental car or hotel room
                    </SoftTypography></li>
                </ul>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Eligibility Criteria:
                </SoftTypography>

                <ul id="list">
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            You should be a citizen of India
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            Applicant must have a minimum age of 18 years
                        </SoftTypography>
                    </li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        The minimum income salary must be between Rs.1 lakh and Rs.3 lakh
                    </SoftTypography>
                    </li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Applicant should either be salaried or self-employed
                    </SoftTypography>
                    </li>
                </ul>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Document Required:
                </SoftTypography>
                <table id="documents">

                    <tr className="document-row">
                        <td>Proof of Income</td>
                        <td><ul>
                            <li>Bank Account</li>
                            <li>Bank Transaction Statements</li>
                            <li>PAN Card</li>
                        </ul></td>
                    </tr>
                </table>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Application Process:
                </SoftTypography>
                <ol id="list">
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            Choose your Credit Card. Each bank offers dozens of Credit Card options.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            Apply for your card.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            Activate your card.
                        </SoftTypography>
                    </li>
                </ol>
                <br />
                <br />
                <br />

                <Footer />
            </DashboardLayout>

        </>
    )
}
export default Creditcard;