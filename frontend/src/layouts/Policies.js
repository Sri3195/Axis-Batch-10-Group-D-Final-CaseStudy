import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ourPoliciesDp from "assets/images/curved-images/our-policies-dp.jpg";
import SoftTypography from "components/SoftTypography";
import pdf from "docs/cyber-security-policy-for-saral.pdf";
import pdf1 from "docs/bcp-for-saral.pdf";
import pdf2 from "docs/dress-code-for-saral.pdf";
import pdf3 from "docs/code-of-conduct-for-saral.pdf";
import pdf4 from "docs/corporate-governance-for saral.pdf";
import pdf5 from "docs/gifting-policy-for-saral.pdf";
import pdf6 from "docs/sop-database-for-saral.pdf";
import pdf7 from "docs/sop-middleware-for-saral.pdf";
import pdf8 from "docs/sop-incident-management-for-saral.pdf";
import pdf9 from "docs/sop-project-management-for-saral.pdf";
import pdf10 from "docs/scd-operating-systems-for-saral.pdf";
import pdf11 from "docs/scd-network-devices-for-saral.pdf";
import Footer from "layouts/Footer";
import "styles/style.css";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";

function Policies() {
    return (

        <>
            <DashboardLayout>
                {/* <DashboardNavbar /> */}
                <Link to="/dashboard" color="#343B5C" >
                    <SoftTypography variant="body2" fontWeight="bold" gutterBottom mt={3} mb={3} >
                        <Icon>home</Icon>/Dashboard
                    </SoftTypography></Link>

                <img src={ourPoliciesDp} className="product-image" key="our-policies-image" />
                <br />
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
                    Our Policies:
                </SoftTypography>
                <br />
                <ul id="list1">
                    <li><SoftTypography variant="body2" color="#343B5C">
                        <a href={pdf} id="policy-link" target={"_blank"} rel="noreferrer" ><u>Cyber Security Policy</u></a>
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        <a href={pdf1} id="policy-link" target="_blank" rel="noreferrer"><u>BCP</u></a>
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        <a href={pdf2} id="policy-link" target="_blank" rel="noreferrer"><u>Dress Codes</u></a>
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        <a href={pdf3} id="policy-link" target="_blank" rel="noreferrer" ><u>Codes of Conduct & Ethics</u></a>
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        <a href={pdf4} id="policy-link" target="_blank" rel="noreferrer"><u>Corporate Governance</u></a>
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        <a href={pdf5} id="policy-link" target="_blank" rel="noreferrer" ><u>Gifting Policy</u></a>
                    </SoftTypography></li>
                </ul>

                <ul id="list1">
                    <li><SoftTypography variant="body2" color="#343B5C">
                        <a href={pdf6} id="policy-link" target={"_blank"} rel="noreferrer" ><u>SOP about Database</u></a>
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        <a href={pdf7} id="policy-link" target="_blank" rel="noreferrer"><u>SOP about Middleware</u></a>
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        <a href={pdf8} id="policy-link" target="_blank" rel="noreferrer" ><u>SOP about Incident Management</u></a>
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        <a href={pdf9} id="policy-link" target="_blank" rel="noreferrer"><u>SOP about Project Management Team</u></a>
                    </SoftTypography></li>
                </ul>


                <ul id="list1">
                    <li><SoftTypography variant="body2" color="#343B5C">
                        <a href={pdf10} id="policy-link" target={"_blank"} rel="noreferrer" ><u>SCD about Operating Systems</u></a>
                    </SoftTypography></li>
                    <li><SoftTypography variant="body2" color="#343B5C">
                        <a href={pdf11} id="policy-link" target="_blank" rel="noreferrer"><u>SCD about Network Devices</u></a>
                    </SoftTypography></li>
                </ul>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /><br />
                <br />
                <br />
                <Footer />

            </DashboardLayout>
        </>
    )
}
export default Policies;