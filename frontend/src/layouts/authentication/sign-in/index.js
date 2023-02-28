
import { useEffect, useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/signin.jpg";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const navigate = useNavigate();


  const [uname, setuname] = useState('');
  const [pwd, setpassword] = useState('');

  const url = new URL('http://127.0.0.1:4000/login/search');

  const params = {
    email: uname,
    password: pwd
  }
  url.search = new URLSearchParams(params).toString();

  //const navigate=useNavigate()
  const validate = () => {
    //alert(uname + " " + pwd + " " + pwd);
    if (uname === "" || pwd === "") {
      window.alert("Please enter the crendentials ..");
    } else {
      fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      }).then(response => response.text())
        .then((text) => {


          if (text === "Valid") {
            localStorage.setItem('email', uname);
            //console.log(localStorage.getItem('email'));
            window.alert("Login Successfully !");
            navigate("/dashboard");
            //window.open("/dashboard","_self");
            //history.push("home");

            //<Redirect  to="/home"/>
            // <Dashboard/>

            //window.open("/dashboard","_self");

          }
          else {

            window.alert("Login Failed. please check your credentials!");
            //navigate("/example")
          }
        });
    }

  }

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" placeholder="Email" id="username" onChange={(e) => setuname(e.target.value)} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label"   variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" placeholder="Password" id="password" onChange={(e) => setpassword(e.target.value)} />
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth onClick={validate}>
            sign in
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
