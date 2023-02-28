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

function Joiningletter() {
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
    const generatePdf = () => {
        const element = document.getElementById("joining-letter");
        const doc = new jsPDF({
            format: 'a1',
            unit: 'px',
            orientation: "portrait"
        });
        doc.setFont('Inter-Regular', 'normal');
        doc.html(element, {
            async callback(doc) {
                await doc.save('Joiningletter');
            },
        });
    };
    return (
        <>
            <DashboardLayout>
            <SoftBox display="flex" mb={1}>
                <Link to="/dashboard" color="#343B5C" >
                    <SoftTypography variant="body2" fontWeight="bold" gutterBottom mt={3} >
                        <Icon>home</Icon>Home
                    </SoftTypography></Link>
                <Link to="/documents" color="#343B5C" >
                    <SoftTypography variant="body2" fontWeight="bold" gutterBottom mt={3} >
                        /Documents
                    </SoftTypography></Link>
                    </SoftBox>
                <SoftBox display="flex" justifyContent='flex-end' mt={2} >

                    {/* <SoftInput type="text" placeholder="Comment here..." onChange={(e) => setComment(e.target.value)} /> */}
                    <SoftButton variant="gradient" color="info" onClick={generatePdf}>
                        Download
                    </SoftButton>
                </SoftBox>
                <div id="joining-letter">
                    <SoftBox mt={4} ml={5} mr={12}>
                    <center>
                            <SoftTypography variant="body2" fontWeight="medium" gutterBottom color="black" >
                                <h2>Joining Letter</h2>
                            </SoftTypography>
                        </center>
                        <SoftTypography variant="body1"  color="black" >
                            To,
                    </SoftTypography>
                    <SoftTypography variant="body2"   color="black" >
                            Tazia,
                    </SoftTypography>
                    <SoftTypography variant="body2"  color="black" >
                            Manager,
                    </SoftTypography>
                    <SoftTypography variant="body2" color="black" >
                            Saral Company.
                    </SoftTypography>
                    <br/>
                    <SoftTypography variant="body1"  color="black" >
                            Subject : Joining Letter
                    </SoftTypography>
                    <br/>
                    <SoftTypography variant="body1"  color="black" >
                        Dear Madam,
                    </SoftTypography>
                    <br/>
                    <SoftTypography variant="body2"  color="black" >
                    I am writing to you about the offer letter you have sent. With pleasure, I accept your job offer for the position of Content Writer, and I will be able to start working on the {emp.startDate}.
                    </SoftTypography>
                    
                    <SoftTypography variant="body2"  color="black" >
                      I am thankful for this wonderful opportunity and accept the terms and conditions mentioned in the offer letter. I cannot wait to join your esteemed organization.
                    </SoftTypography>
                    
                    <SoftTypography variant="body2"  color="black" >
                    If you need further information, please contact me at the contact details I have provided.
                    </SoftTypography>
                    <br/>
                    <SoftTypography variant="body1"  color="black" >
                        Yours Sincerely,
                    </SoftTypography>
                    <SoftTypography variant="body2"  color="black" >
                        {emp.name}
                    </SoftTypography>
                    <SoftTypography variant="body2"  color="black" >
                        Email: {emp.email}
                    </SoftTypography>
                    <SoftTypography variant="body2"  color="black" >
                        Mobile: {emp.phno}
                    </SoftTypography>
                    </SoftBox>

                    
                </div>
            </DashboardLayout>

        </>
    )
}
export default Joiningletter;