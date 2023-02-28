
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import { margin } from "@mui/system";
import "styles/style.css";
import Icon from "@mui/material/Icon";
import debitCardDp from "assets/images/curved-images/debit-card-dp.jpg";
import Footer from "layouts/Footer";
import { Link } from "react-router-dom";
function Debitcard() {
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
                <img src={debitCardDp} className="product-image" key="debit-card-image" />
                <br />
                <SoftTypography variant="body2" color="#343B5C">
                    They allow the card holder to transfer money electronically from their bank accounts and can also be used as ATM cards to withdraw cash using the Automated Teller Machine. Keep in mind that you’re not borrowing money using debit card, you are using the money deposited in the bank account linked to the card, whereas in credit cards, you borrow money to make payment.
                </SoftTypography>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Benefits:
                </SoftTypography>
                <ul id="list">
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Convenient to Use
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Works as an Emergency Fund
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Self Protected
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Easy to Obtain
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Sets a Budget
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
                    <li><SoftTypography variant="body2" color="#343B5C">
                        You should be 18 years and above
                    </SoftTypography>
                    </li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        In the case of minors, the parents or legal guardian of the minor can open the account on their behalf
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
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Application Process:
                </SoftTypography>
                <ol id="list">
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            Choose your Debit Card. Each bank offers dozens of Debit Card options.
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
export default Debitcard;