const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import "styles/style.css";
import jsPDF from "jspdf";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";

function AppointmentLetter() {

    const [emp, setEmp] = useState({});
    const url = new URL('http://127.0.0.1:4000/employee/search');
    const params = {
        email: localStorage.getItem('email'),
    }
    url.search = new URLSearchParams(params).toString();
    useEffect(() => {
        axios.get(url).then(res => {
            //console.log(res)
            setEmp(res.data);
        })

    }, []);
    const generatePdf =()=>{
        const element = document.getElementById("appointment-letter");
        const doc=new jsPDF({
            format:'a1',
            unit:'px',
            orientation:"portrait"
        });
        doc.setFont('Inter-Regular','normal');
        doc.html(element,{
            async callback(doc){
                await doc.save('Appointmentletter');
            },
        });
    };
    return (
        <>
            <DashboardLayout>
            <SoftBox display="flex" >
                <Link to="/dashboard"  >
                    <SoftTypography variant="body2" fontWeight="bold" gutterBottom mt={3} >
                        <Icon>home</Icon>Home
                    </SoftTypography></Link>
                <Link to="/documents" >
                    <SoftTypography variant="body2" fontWeight="bold" gutterBottom mt={3} >
                        /Documents
                    </SoftTypography></Link>
                    </SoftBox>
            
                <SoftBox display="flex" justifyContent= 'flex-end' mt={1} >

                    {/* <SoftInput type="text" placeholder="Comment here..." onChange={(e) => setComment(e.target.value)} /> */}
                    <SoftButton variant="gradient" color="info" onClick={generatePdf}>
                        Download
                    </SoftButton>
                </SoftBox>
                <div id="appointment-letter">
                    <SoftBox mt={3} ml={3}>
                        <center>
                            <SoftTypography variant="body2" fontWeight="bold" gutterBottom color="black" >
                                <h2>Appointment Letter</h2>
                            </SoftTypography>
                        </center>
                        <SoftTypography variant="body2" fontWeight="medium" gutterBottom color="black" >
                            <h3>Saral</h3>
                        </SoftTypography>
                        <SoftTypography variant="body2" fontWeight="medium" gutterBottom color="black" >
                            <h3>Mumbai, Maharashtra, 085</h3>
                        </SoftTypography>
                        <br />
                        <SoftTypography variant="body2" fontWeight="medium" gutterBottom color="black" >
                            <h4>Dear {emp.name}</h4>
                        </SoftTypography>
                        <SoftTypography variant="body2" color="black">
                        We Saral Company are pleased to appoint you as Deputy IT Manager  as per the following terms of appointment :
                        </SoftTypography>
                        <ol id="appointment-list">
                            <li><SoftTypography variant="body2" fontWeight="medium" gutterBottom color="black" >
                            Appointment
                        </SoftTypography>
                         <ul id="appointment-sub-list">
                            <li>
                        <SoftTypography variant="body2" color="black">
                        	The place of employment shall be Delhi. However, depending on the time constraint within which the firm may have to provide services to its clients, the employee undertakes to make himself/herself available in respect of the business of the firm during such timesThe firm hereby appoints the employee as an (mention job role) w.e.f. (mention date of joining) and the employee agrees to undertake and execute such responsibilities as may be delegated to him/her by the firm from time to time. The appointment shall be subject to a period of probation of six months from the date hereof. The period of probation shall be subject to reduction of extension at the sole discretion of the management. Employee’s retention beyond probation period will be strictly based on merit and performance. Probation shall be deemed complete only after the issuance of “confirmation letter” by the management.
                        </SoftTypography>
                        </li>
                        <li>
                        <SoftTypography variant="body2" color="black">
                        The place of employment shall be Delhi. However, depending on the time constraint within which the firm may have to provide services to its clients, the employee undertakes to make himself/herself available in respect of the business of the firm during such times
                        </SoftTypography>
                        </li>
                        </ul>
                        </li>
                        <li><SoftTypography variant="body2" fontWeight="medium" gutterBottom color="black" >
                        	Compensation and Remuneration
                        </SoftTypography>
                        <ul id="appointment-sub-list">
                            <li>
                        <SoftTypography variant="body2" color="black">
                        The employee shall be paid a monthly remuneration and reimbursed for the expenses incurred in relation to official work subject to the prevailing tax laws.
                        </SoftTypography>
                        </li>
                        </ul>
                        </li>
                        <li><SoftTypography variant="body2" fontWeight="medium" gutterBottom color="black" >
                    	Employee Undertakings, Commitments and Covenants
                        </SoftTypography>
                        <ul id="appointment-sub-list">
                            <li>
                        <SoftTypography variant="body2" color="black">
                        	The employee agrees that he/she shall perform his/her duties and undertake responsibilities within the mandate of work place and office policies of the Firm, as modified from time to time, at the discretion of the Firm, and shall use his/her sincere and dedicated efforts to effectively carry out all duties and responsibilities assigned to him/her by the manager/supervisor and others authorized by the Firm to assign such duties and responsibilities.
                        </SoftTypography>
                        </li>
                        <li>
                        <SoftTypography variant="body2" color="black">
                        Waiver. The rights of the Parties as under this agreement shall not be prejudiced or restricted by any indulgence or forbearance extended to another party. No waiver by any party in respect to breach shall operate as a waiver in respect of any subsequent breach
                        </SoftTypography>
                        </li>
                        <li>
                        <SoftTypography variant="body2" color="black">
                        	Survival. The Employee hereby agrees that all terms relating to Confidentiality, Intellectual Property Rights, Non-Compete and Consequences of termination shall survive termination of this agreement
                        </SoftTypography>
                        </li>
                        <li>
                        <SoftTypography variant="body2" color="black">
                    	Entire Agreement. This Agreement together with other writings signed by the Parties expressly stated to be supplemental hereto and together with any instruments to be executed and delivered pursuant to this agreement, constitutes the agreement between the Parties and supersedes all prior understandings and writings, and may be amended or changed only by a writing signed by the Parties hereof.
                        </SoftTypography>
                        </li>
                        <li>
                        <SoftTypography variant="body2" color="black">
                        	Governing Law and Jurisdiction. This agreement shall be construed, interpreted and applied in accordance with, and shall be governed by the laws applicable in India. The courts at Delhi shall have the exclusive jurisdiction to entertain any dispute or suit arising out of or in relation to this Agreement.
                        </SoftTypography>
                        </li>
                        </ul>
                        </li>
                        </ol>
                        <br />
                        <SoftTypography variant="body2" fontWeight="medium" gutterBottom color="black" >
                            <h4>Signature</h4>
                        </SoftTypography>
                        <SoftTypography variant="body2" fontWeight="medium" gutterBottom color="black" >
                            <h4>Authorized Signatory</h4>
                        </SoftTypography>
                        <SoftTypography variant="body2" fontWeight="medium" gutterBottom color="black" >
                            <h4>{emp.name}-{emp.designation}</h4>
                        </SoftTypography>
                        <SoftTypography variant="body2" color="black">
                        I have read and understood the above emoluments and hereby confirm my acceptance of the same.
                        </SoftTypography>
                        <SoftBox display="flex" justifyContent= 'flex-end' mr={6}>
                        <SoftTypography variant="body2" fontWeight="medium" gutterBottom color="black" >
                            <h4>Name with Signature</h4>
                        </SoftTypography>
                        </SoftBox>
                        <SoftBox display="flex" justifyContent= 'flex-end' mr={8}>
                        <SoftTypography variant="body2" fontWeight="medium" gutterBottom color="black" >
                            <h4>Date:15-1-2023</h4>
                        </SoftTypography>
                        </SoftBox>
                    </SoftBox>
                </div>
            </DashboardLayout>
        </>
    )
}
export default AppointmentLetter;