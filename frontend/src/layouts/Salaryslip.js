import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Table from "examples/Tables/Table";
import "styles/salary.css"
import SoftInput from "components/SoftInput";
// Data

import Footer from "layouts/Footer";
import { Form } from "reactstrap";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import SoftButton from "components/SoftButton";
import { height, width } from "@mui/system";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";

function Salaryslip() {
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
    const empDate = emp.startDate;
    const [month, setMonth] = useState('');
    const handlemonth = (event) => {
        const month1 = event.target.value;
        setMonth(month1);
    }

    const [year, setYear] = useState('');
    const handleYear = (event) => {
        const year1 = event.target.value;
        setYear(year1);
    }
    var date = new Date();
  var localmonth = (date.getMonth() + 1)  
  var localyear= date.getFullYear();
  console.log(localmonth,localyear);
   var monthchoosed;
   {
    if(month=== "January")
    {
        monthchoosed= 1;
    }
    else if(month =="February"){
        rmonthchoosed= 2;
    }
    else if(month =="March"){
        monthchoosed=3;
    }
    else if(month =="April"){
        monthchoosed= 4;
    }
    else if(month =="May"){
        monthchoosed= 5;
    }
    else if(month =="June"){
        monthchoosed= 6;
    }
    else if(month =="July"){
        monthchoosed= 7;
    }
    else if(month =="August"){
        monthchoosed= 8;
    }
    else if(month =="September"){
        monthchoosed= 9;
    }
    else if(month =="October"){
        monthchoosed= 10;
    }
    else if(month =="November"){
        monthchoosed=11;
    }
    else {
        monthchoosed= 12;
    }
   };

   var yearchoosed;
   {
    if(year === "2022"){
        yearchoosed=2022;
    }
    else{
        yearchoosed=2023;
    }
   }
   console.log(yearchoosed);
   console.log(monthchoosed);
    const generatePdf = () => {
        if (month === "" || year === "") {
            window.alert("Please select month and year !")
        }
        else {
            if (monthchoosed > localmonth && yearchoosed === localyear)
            {
                window.alert("Choose correct moth to generate salart slip")
            }

            else{
            const element = document.getElementById("salary-slip");
            const doc = new jsPDF({
                format: 'a1',
                unit: 'px',
                orientation: "portrait"
            });
            doc.setFont('Inter-Regular', 'normal');
            doc.html(element, {
                async callback(doc) {
                    await doc.save('Salaryslip');
                },
            });
        }
        }

    };
    

    return (

        <div>
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
                    <SoftTypography ml={16} variant="body2" color="black" fontWeight="bold" pr={3}>
                        Enter month and year to download the salary slip:
                    </SoftTypography>
                    {/* <SoftInput type="text" placeholder="Comment here..." onChange={(e) => setComment(e.target.value)} /> */}
                    <SoftBox pr={3}>
                        <select onChange={handlemonth} style={{ width: "150px", height: "40px" }}>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </SoftBox>
                    <SoftBox pr={3}>
                        <select onChange={handleYear} style={{ width: "150px", height: "40px" }}>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                        </select>
                    </SoftBox>
                    <SoftButton variant="gradient" color="info" onClick={generatePdf}>
                        Download
                    </SoftButton>
                </SoftBox>
                <div id="salary-slip">
                    <center>
                        <SoftTypography variant="body2" fontWeight="bold" mb={7} mt={2} gutterBottom color="black" >
                            <h2>SalarySlip </h2>
                        </SoftTypography>
                    </center>
                    <Form>
                        <SoftBox display="flex">
                            <SoftTypography ml={16} variant="body2" color="black" fontWeight="bold" pt={1}>
                                Employee Name:
                            </SoftTypography>
                            <SoftTypography ml={3} variant="body2" color="black" pt={1}>
                                {emp.name}
                                <hr style={{ width: "300px", borderColor: "#c7c3c3" }} />
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox display="flex">
                            <SoftTypography ml={16} variant="body2" color="black" fontWeight="bold" pt={1}>
                                Designation:
                            </SoftTypography>
                            <SoftTypography ml={3} variant="body2" color="black" pt={1}>
                                {emp.designation}
                                <hr style={{ width: "300px", borderColor: "#c7c3c3" }} />
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox display="flex">
                            <SoftTypography ml={16} variant="body2" color="black" fontWeight="bold" pt={1}>
                                Month & Year:
                            </SoftTypography>
                            <SoftTypography ml={3} variant="body2" color="black" pt={1}>
                                {month} {year}
                                <hr style={{ width: "300px", borderColor: "#c7c3c3" }} />
                            </SoftTypography>
                        </SoftBox>
                    </Form>
                    <br />
                    <table id="boarderstyle" >
                        <tr key="row-1" >
                            <td id="datastyle"><th >Earnings</th></td>
                            <td id="datastyle"><th >Amount</th></td>
                            <td id="datastyle"><th >Deductions</th></td>
                            <td id="datastyle"><th >Amuont (In Rs.)</th></td>

                        </tr>
                        <tr key="row-2">
                            <td id="datastyle" >
                                <SoftTypography variant="body2" color="black" >
                                    Basic Salary
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    30,000
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    EPF
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    1800
                                </SoftTypography>
                            </td>
                        </tr>
                        <tr key="row-3">
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    HRA
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >

                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    PT
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    200
                                </SoftTypography>
                            </td>
                        </tr>
                        <tr key="row-4">
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    Medical Allowance
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >

                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    ESI
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    200
                                </SoftTypography>
                            </td>
                        </tr>
                        <tr key="row-3">
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    HRA
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >

                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    PT
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >

                                </SoftTypography>
                            </td>
                        </tr>
                        <tr key="row-5">
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    Superannuation Allowance
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >

                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    TDS
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >

                                </SoftTypography>
                            </td>
                        </tr>
                        <tr key="row-5">
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    Conveyance Allowance
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >

                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    Loss Of Pay
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    0
                                </SoftTypography>
                            </td>
                        </tr>

                        <tr key="row-6" >
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    Other Allowance/Salary Arrears
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >

                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" >
                                    Total Deductions
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" fontWeight="bold" >
                                    2,000
                                </SoftTypography>
                            </td>
                        </tr>

                        <tr key="row-7">
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" fontWeight="bold">
                                    Total Earnings
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" fontWeight="bold">
                                    30,000
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" fontWeight="bold" >
                                    Net Amount
                                </SoftTypography>
                            </td>
                            <td id="datastyle">
                                <SoftTypography variant="body2" color="black" fontWeight="bold" >
                                    28,000
                                </SoftTypography>
                            </td>
                        </tr>

                    </table>

                    <SoftBox display="flex">

                        <SoftTypography ml={16} variant="body2" color="black" fontWeight="bold" pt={1}>
                            Signature Of the Employee:
                        </SoftTypography>
                        <SoftTypography ml={3} variant="body2" color="black" pt={3}>
                            {emp.name}
                            <hr style={{ width: "200px", borderColor: "#c7c3c3" }} />
                        </SoftTypography>


                    </SoftBox>
                    <SoftBox display="flex">

                        <SoftTypography ml={16} variant="body2" color="black" fontWeight="bold" pt={1}>
                            Signature Of the Manager:
                        </SoftTypography>
                        <SoftTypography ml={3} variant="body2" color="black" pt={3}>
                            Tazia
                            <hr style={{ width: "200px", borderColor: "#c7c3c3" }} />
                        </SoftTypography>


                    </SoftBox>
                </div>
            </DashboardLayout>

        </div>

    );

}
export default Salaryslip;