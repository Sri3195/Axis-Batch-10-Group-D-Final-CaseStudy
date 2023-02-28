import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import { margin } from "@mui/system";
import "styles/style.css";
import Icon from "@mui/material/Icon";
import homeLoanDp from "assets/images/curved-images/home-loan-dp.jpg";
import Footer from "layouts/Footer";
import { Link } from "react-router-dom";

function Homeloan() {
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
                <img src={homeLoanDp} className="product-image" key="home-loan-image" />

                <br />
                <SoftTypography variant="body2" color="#343B5C">
                    Home loans are dedicated to receiving funds in order to purchase a house/flat, construct a  house, renovate/repair an existing house, or purchase a plot for the construction of a  house/flats. In this case, the property will be held by the lender and the ownership will be transferred to the rightful owner upon completion of repayments.
                </SoftTypography>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Benefits:
                </SoftTypography>
                <ul id="list">
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Tax benefits on home loan
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Tax benefits on second house
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        No prepayment charges
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Balance Transfer Facility
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        High repayment Tenure
                    </SoftTypography></li>
                </ul>
                <br />
                <br/>
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Eligibility Criteria:
                </SoftTypography>
                <ul id="list">
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Salaried individuals eligible for home loan
                    </SoftTypography>
                        <ul id="sub-list">
                            <li>
                                <SoftTypography variant="body2" color="#343B5C">
                                    Individuals in permanent service in the Government or reputed companies fall under the home loan eligibility criteria.
                                </SoftTypography>
                            </li>
                            <li>
                                <SoftTypography variant="body2" color="#343B5C">
                                    Applicants should be above 21 years of age at the time of loan commencement and up to the age of 60 or superannuation, whichever is earlier at the time of loan maturity. You can check the amount you need to pay as EMI with the Home Loan EMI Calculator.
                                </SoftTypography>
                            </li>
                        </ul>
                    </li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Professionals eligible for home loan
                    </SoftTypography>
                        <ul id="sub-list">
                            <li>
                                <SoftTypography variant="body2" color="#343B5C">
                                    Professionals (i.e., doctors, engineers, dentists, architects, chartered accountants, cost accountants, company secretary, and management consultants only) meet the Home Loan eligibility criteria.
                                    \                    </SoftTypography>
                            </li>
                            <li>
                                <SoftTypography variant="body2" color="#343B5C">
                                    Applicants above 21 years of age at the time of home loan commencement and up to 65 years or less at the time of home loan maturity meet our home loan eligibility criteria.
                                </SoftTypography>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            Self-employed individuals eligible for home loan
                        </SoftTypography>
                        <ul id="sub-list">
                            <li>
                                <SoftTypography variant="body2" color="#343B5C">
                                    Any individual filing income tax returns can apply
                                </SoftTypography>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            Applicants should be above 21 years of age at the time of the commencement of the home loan and up to 65 years or less at the time of maturity of the home loan
                        </SoftTypography>
                    </li>
                </ul>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Document Required:
                </SoftTypography>
                <table id="documents">
                    <tr className="document-row">
                        <td >Photo Id Proof (Any One Required)</td>
                        <td><ul>
                            <li>Passport</li>
                            <li>PAN Card</li>
                            <li>Driving License</li>
                            <li>Voters ID Card</li>
                        </ul></td>
                    </tr>
                    <tr className="document-row">
                        <td>Residence Proof (Any One Required)</td>
                        <td><ul>
                            <li>Electricity Bill</li>
                            <li>Ration Card</li>
                            <li>Telephone Bill</li>
                            <li>Employement Letter</li>
                        </ul></td>
                    </tr>
                    <tr className="document-row">
                        <td>Proof of Age</td>
                        <td><ul>
                            <li>PAN Card</li>
                            <li>Passport</li>
                            <li>Birth Certificate</li>
                            <li>Pass Book</li>
                            <li>Mark Sheet from tenth class</li>
                        </ul></td>
                    </tr>
                </table>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Application Process:
                </SoftTypography>
                <ol id="list">
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Fill up the Home Loan Application Form
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            After you finalise the home loan lender, the first step to avail of a Home Loan is filling out the loan application form.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Pay the Processing Fee
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            When you apply for a Home Loan, the banks  charge you a processing fee to do the preliminary work like verification of your documents and property, which plays a significant role in the loan approval process.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Eligibility Check
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            Once you pay the processing fee, the lender starts with your eligibility check for the loan. The lender may ask you to visit the branch or arrange a meeting at your home or work to discuss the loan process.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Verification of Documents
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            Document verification is another crucial step in the Home Loan application process. The banks  do a verification of all the documents you have submitted.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Loan Approval Process
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            Depending upon your eligibility check, document verification, and the lender`s credit policy, the lender decides whether or not to accept your loan application, and the same will be communicated to you.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Verification of the Property
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            Once your loan is approved, the lender will verify the property you are buying. The legal check on the property will ensure that the property is clear, without any dispute or conflict.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Receive the Sanction Letter
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            After all the remaining paperwork is cleared, you have to sign a loan agreement with the lender. At this stage, you have to submit all the property-related original documents to the lender. These documents are mortgaged with the lender until the entire loan amount is repaid.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Loan disbursal
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            The lender will disburse the loan upon signing the loan agreement and submitting all the pending documents. You will receive the cheque in favour of the builder if you are purchasing the property from a builder.
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
export default Homeloan;