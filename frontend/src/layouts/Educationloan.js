import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import { margin } from "@mui/system";
import "styles/style.css";
import educationLoanDp from "assets/images/curved-images/education-loan-dp.jpg";
import Footer from "layouts/Footer";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";
function Educationloan() {
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
                <img src={educationLoanDp} className="product-image" key="education-loan-image" />
                <br />
                <SoftTypography variant="body2" color="#343B5C">
                    Education loans are financing instruments that aid the borrower pursue education. The course can either be an undergraduate degree, a postgraduate degree, or any other diploma/certification course from a reputed institution/university. You must have the admission pass provided by the institution to get the financing. The financing is available both for domestic and international courses.
                </SoftTypography>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Benefits:
                </SoftTypography>
                <ul id="list">
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Financial benefits.
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Pay after education.
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Wide range of expenses covered.
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Easy repayment terms.
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        Build financial prudence.
                    </SoftTypography></li>
                </ul>
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Eligibility Criteria:
                </SoftTypography>
                <SoftTypography variant="body2" color="#343B5C" id="list">
                    The vital education loan eligibility criteria that the candidates need to fulfil to get approval for the loan are listed out here:
                </SoftTypography>
                <ul id="list">
                    <li><SoftTypography variant="body2" color="#343B5C">
                        The candidate applying for the loan must be a resident of India.
                    </SoftTypography>
                    </li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        He/she must have confirmed admission in recognised educational institutes in India or abroad.
                    </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            The age of the candidate must fall within the bracket of 18 to 35 years during loan application.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            He/she must be undergoing a graduate/postgraduate degree or a PG diploma.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            The applicant should have a secured admission in a college or university affiliated by University Grants Commission (UGC)/All India Council for Technical Education (AICTE)/Govt. etc.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            Students pursuing full-time courses need to have a co-applicant who can be either parent/guardian or spouse/parent-in-law (in case of married candidates).
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            The co-applicant must have a regular income source.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C">
                            A strong academic record facilitates speedy loan approval.
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
                        <td>Proof of Admission to course</td>
                        <td><ul>
                            <li>Marksheet of tenth</li>
                            <li>Marksheet of twelth</li>
                            <li>Graduation(if applicable)</li>
                            <li>Admission letter/Offer letter/Student Id</li>
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
                            Do your research and choose the lender
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">

                            Before you begin with the loan application procedure, you need to get the admission offer letter from the school you wish to attend, finalise the lender and then visit them online or in person.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Fill the loan application form
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            If you apply for the education loan online, you can find the loan application form on the lender’s website. As per the instructions of the Department of Financial Services, Ministry of Finance, Government of India, all education loan applications.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Appear for the interview round
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            The procedure to take education loan continues with the interview round. Whether you apply for the loan offline or online, the bank may call you to appear for a personal discussion.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Provide the documents
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            The bank also asks you to provide some documents as part of the Bank’s education loan procedure. You need to submit the admission offer letter provided by your chosen university. The bank will also do its due diligence and verify your enrolment.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            The bank approves the loan
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            After verifying your credentials, your student loan may be approved. The student’s one of the parents/guardians are listed as co-borrower or guarantors and the bank also checks the guarantor’s /co-borrower’s credit scores before approving the loan.
                        </SoftTypography>
                    </li>
                    <li>
                        <SoftTypography variant="body2" color="#343B5C" fontWeight="bold">
                            Loan disbursal
                        </SoftTypography>
                        <SoftTypography variant="body2" color="#343B5C">
                            The last step in the education loan procedure is loan disbursal. After all formalities are completed, the bank disburses the loan amount directly into the bank account of the university the student wishes to attend.
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
export default Educationloan;