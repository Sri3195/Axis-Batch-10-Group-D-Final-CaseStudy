/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Table from "examples/Tables/Table";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// Data
import "styles/employee.css"
import Footer from "layouts/Footer";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";
import SoftInput from "components/SoftInput";

function Employee() {
  //const { columns, rows } = authorsTableData;
  //const { columns: prCols, rows: prRows } = projectsTableData;
  const [employee, setEmployees] = useState([])

  const url1 = new URL('http://127.0.0.1:4000/employee/fetch');



  useEffect(() => {

    axios.get(url1).then(res => {
      //console.log(res)
      setEmployees(res.data);
    })
  }, []);

  const[employeeSearch,setEmployeeSearch]=useState('');
  const [employeeData,setEmployeeData]=useState([]);
  const empsearch = (event) => {
    setEmployeeSearch(event.target.value);
      let newEmployeeData = employee.filter((e) => {
        return (
          e.name.substring(0, employeeSearch.length).toLowerCase() ==
          employeeSearch.toLowerCase()
        );
      });
      setEmployees(newEmployeeData);

      setTimeout(() => {
        document.location.reload();
      }, 3000);
      
  };

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <SoftBox display="flex" justifyContent="space-between">
      <Link to="/dashboard" color="#343B5C" >
        <SoftTypography variant="body2" fontWeight="bold" gutterBottom mt={3} mb={3}>
          <Icon>home</Icon>/Dashboard
        </SoftTypography></Link>
        <SoftBox mt={2} width="20%">
          <SoftInput type="text" placeholder="search" onChange={empsearch}></SoftInput>
        </SoftBox>
        </SoftBox>
      <div id="employee-div" className="employee-table-card">

        <table id="table-response" className="ant-border-space">
          <tr id="employee" key="row-1">
            <td><th >NAME</th></td>
            <td><th >ID</th></td>
            <td><th >CONTACT</th></td>
            <td><th >DEPARTMENT</th></td>
            <td><th >SUPERVISOR</th></td>
            <td><th >DESIGNATION</th></td>
            <td><th >PROJECT</th></td>

          </tr>
          {employee.map(e => <tr key="row-2">
            <td id="name-info">
              <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
                <SoftBox mr={2}>
                  <SoftAvatar src={e.img} alt="no" size="sm" variant="rounded" />
                </SoftBox>
                <SoftBox display="flex" flexDirection="column">
                  <SoftTypography variant="button" fontWeight="medium">
                    {e.name}
                  </SoftTypography>
                  <SoftTypography variant="caption" color="secondary">
                    {e.email}
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </td>
            <td id="font-color">
              <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                {e.empId}
              </SoftTypography>
            </td>
            <td id="font-color">
              <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                {e.phno}
              </SoftTypography>
            </td>
            <td id="font-color">
              <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                {e.dept}
              </SoftTypography>
            </td>
            <td id="font-color">
              <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                {e.deptHead}
              </SoftTypography>
            </td>
            <td id="font-color">
              <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                {e.designation}
              </SoftTypography>
            </td>
            <td id="font-color">
              <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                {e.project}
              </SoftTypography></td>
          </tr>)}
        </table>

      </div>
      <br />
      <br />
      <br />
      <Footer />
    </DashboardLayout>
  );
}

export default Employee;
