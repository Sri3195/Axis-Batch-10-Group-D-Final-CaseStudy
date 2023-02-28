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


function Incrementletter() {
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
        const element = document.getElementById("increment-letter");
        const doc = new jsPDF({
            format: 'a1',
            unit: 'px',
            orientation: "portrait"
        });
        doc.setFont('Inter-Regular', 'normal');
        doc.html(element, {
            async callback(doc) {
                await doc.save('Incrementletter');
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
                <SoftBox display="flex" justifyContent='flex-end' >

                    {/* <SoftInput type="text" placeholder="Comment here..." onChange={(e) => setComment(e.target.value)} /> */}
                    <SoftButton variant="gradient" color="info" onClick={generatePdf}>
                        Download
                    </SoftButton>
                </SoftBox>
                <div id="increment-letter">
                    <SoftBox mt={2} ml={5} mr={12}>
                    <center>
                            <SoftTypography variant="body2" fontWeight="medium" gutterBottom color="black" >
                                <h2>Increment Letter</h2>
                            </SoftTypography>
                        </center>
                      
                    <SoftTypography variant="body2"  color="black" >
                        Dear {emp.name},
                    </SoftTypography>
                    <br/>
                    <SoftTypography variant="body2"  color="black" >
                    This letter confirms that upon review, your salary has been increased from ₹60.000 to ₹64,000 per month. Your salary increase is effective as of March 01, 2023 and the increased pay will appear in your paycheck starting 1 April, 2023.
                    </SoftTypography>
                    <br/>
                    <SoftTypography variant="body2"  color="black" >
                    As discussed during Friday’s meeting, we are granting this salary increment due to your success in exceeding all of your department goals for the last one year. Additionally, your dedication to teamwork has led to several noticeable improvements in our workplace processes, allowing our department to expand its services since you joined our team last year.
                    </SoftTypography>
                    <br/>
                    <SoftTypography variant="body2"  color="black" >
                    Your work on our current development project shows great promise, and we are thankful to have someone with your knowledge and level of dedication while working for our company. The reports you submit for each project milestone are among the most thorough on your team.
                    </SoftTypography>
                    <SoftTypography variant="body2"  color="black" >
                    Congratulations on your well-deserved salary increase. We are pleased to award you this salary raise in gratitude for your continued hard work on behalf of our company. Thank you for your loyalty and professional excellence.

                    </SoftTypography>
                    <br/>
                    <SoftTypography variant="body2"  color="black" >
                        Best Wishes
                    </SoftTypography>
                    <SoftTypography variant="body2"  color="black" >
                        Tazia
                    </SoftTypography>
                    <SoftTypography variant="body2"  color="black" >
                        HR Manager
                    </SoftTypography>
                    </SoftBox>

                    
                </div>
            </DashboardLayout>

        </>
    )
}
export default Incrementletter;