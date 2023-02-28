
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import { margin } from "@mui/system";
import "styles/style.css";
import Icon from "@mui/material/Icon";
import forexCardDp from "assets/images/curved-images/forex-card-dp.jpg";
import Footer from "layouts/Footer";
import { Link } from "react-router-dom";

function Forexcard() {
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
                <img src={forexCardDp} className="product-image" key="forex-card-image" />
                <br />
                <SoftTypography variant="body2" color="#343B5C">
                Forex Cards stands for Foreign Exchange Cards and are used for international travels to hold foreign currency. There are two main variants- single currency cards and mlti-currency forex cards. Forex cards can also be used to withdraw the currency abroad.
                </SoftTypography>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Benefits:
                </SoftTypography>
                <SoftTypography variant="body2" color="#343B5C">
                A forex card comes with several benefits. It`s the cheapest way of carrying and paying in foreign currency internationally; it`s safer than cash; cheaper than other cards and convenient as credit or debit cards; you can use it for multiple trips; and you get to enjoy special privileges and discounts wherever you go.
                </SoftTypography>
                
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Eligibility Criteria:
                </SoftTypography>
                
                <ul id="list">
                <li>
                        <SoftTypography variant="body2" color="#343B5C">
                        Aadhaar number is mandatory 
                        </SoftTypography>
                    </li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                	A self-attested photocopy of your passport
                    </SoftTypography>
                    </li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                	A self-attested photocopy of visa or ticket (for non-customers)
                    </SoftTypography>
                    </li>
                </ul>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Document Required:
                </SoftTypography>
                <table id="documents">
        
                    <tr className="document-row">
                        <td>Required proofs</td>
                        <td><ul>
                            <li>Application form</li>
                            <li>Copy of passport (self-attested)</li>
                            <li>Copy of visa (visas if the trip involves multiple countries)</li>
                            <li>Airline ticket copy</li>
                            <li>PAN card</li>
                        </ul></td>
                    </tr>
                </table>
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Application Process:
                </SoftTypography>
                <ol id="list">
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                        To apply for a Forex card, you need to submit an Application-cum-Declaration form along with a copy of your passport, tickets and visa.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                        You have to remit an amount in Indian Rupees (equivalent to the amount you want in foreign currency) to the bank.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                        Once the transaction is done, your card is activated.
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
export default Forexcard;