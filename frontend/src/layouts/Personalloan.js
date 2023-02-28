import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import { margin } from "@mui/system";
import "styles/style.css";
import Icon from "@mui/material/Icon";
import personalLoanDp from "assets/images/curved-images/personal-loan-dp.jpg";
import { Link } from "react-router-dom";

import Footer from "layouts/Footer";

function Personalloan() {
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
                <img src={personalLoanDp} className="product-image" key="personal-loan-image" />
                <br />
                <SoftTypography variant="body2" color="#343B5C">
                    Whenever there is a liquidity issue, you can go for a personal loan. The purpose of taking a personal loan can be anything from repaying an old debt, going on vacation, funding for the downpayment of a house/car, and medical emergency to purchasing big-ticket furniture or gadgets. Personal loans are offered based on the applicant’s past relationship with the lender and credit score.
                </SoftTypography>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Benefits:
                </SoftTypography>
                <ul id="list">
                    <li><SoftTypography variant="body2" color="#343B5C">
                        No limitation on end use. The first and the most important benefit of personal loan is that unlike home loan it can be used for any purpose.
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Quick disbursal.
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        No collateral required.
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Flexibility to choose the tenure.
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Fixed rate of interest.
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Tax benefit.
                    </SoftTypography></li>
                </ul>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Eligibility Criteria:
                </SoftTypography>

                <ul id="list">
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            You need to be a resident of India
                        </SoftTypography>
                    </li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Age: 21 - 60 years
                    </SoftTypography>
                    </li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Income: Minimum Rs 15,000/month for salaried applicants
                    </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            Credit Score: Preferably 750 and above as having higher credit scores increase the chances of your loan approval at lower interest rates
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
                            <li>Voter ID Card</li>
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
                        </ul></td>
                    </tr>
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
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Determine your requirement
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            You need to be between the ages of 21-60 years. You need to have a job for at least two years, with a minimum of 1 year with your current employer. You need to have a net income of 25,000 per month.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Check loan eligibility
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            Before applying for a personal loan, borrowers should find out how much personal loan they are eligible for.
                            The eligibility will typically depend on some specific criteria including their monthly salary or business income, their currently active loans and EMIs as well as the combined outstanding amount on all their credit cards.
                            Basically, it will depend on how creditworthy a person is as a borrower.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Calculate monthly instalments
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            Calculate monthly instalments
                            Use an online EMI tool to calculate your approximate loan repayments every month. You can modify the interest rate and tenure to match your monthly income, like on  Bank Personal Loan EMI calculator. Bank offers pocket friendly EMIs on all its Personal Loan starting at Rs. 1769 per lac * (T&C).
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Approach the bank
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            You can apply for a Personal Loan with Bank in a variety of ways: Via NetBanking, online on the  Bank website, at an ATM or by visiting a branch.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Submit documents
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            Next find out what documents are required for a Personal Loan. Usually, you will need income proof (bank statements, salary slips or IT returns), address proof and ID proof. Hand over copies of your Personal Loan documents at the bank.
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
export default Personalloan;