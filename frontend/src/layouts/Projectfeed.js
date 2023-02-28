const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");
const { default: DashboardNavbar } = require("examples/Navbars/DashboardNavbar");
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Footer from "layouts/Footer";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import Card from "@mui/material/Card";
import { useLocation } from "react-router-dom";
import "styles/style.css";
import Tooltip from "@mui/material/Tooltip";
import SoftAvatar from "components/SoftAvatar";

import Grid from "@mui/material/Grid";

import team1 from "assets/images/team-1.jpg";
import team4 from "assets/images/team-5.jpg";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";


function Projectfeed() {

  const [project, setProject] = useState({});
  const url = new URL('http://127.0.0.1:4000/projects/getproject');

  const location = useLocation();
  const projecttitle = location.state;
  console.log(projecttitle);


  const params = {
    title: projecttitle
  }
  url.search = new URLSearchParams(params).toString();

  useEffect(() => {
    axios.get(url).then(res => {
      //console.log(res)
      setProject(res.data);
    })

  }, []);

  const [stakeholders, setStakeholders] = useState([]);

  const url1 = new URL('http://127.0.0.1:4000/stakeholders/getStakeholders')
  const params1 = {
    project: projecttitle
  }
  url1.search = new URLSearchParams(params1).toString();

  useEffect(() => {
    axios.get(url1).then(res => {
      //console.log(res)
      setStakeholders(res.data);
    })

  }, []);

  console.log(stakeholders)

  const [supporters, setSupporters] = useState([]);

  const url2 = new URL('http://127.0.0.1:4000/supporters/getSupporters')
  const params2 = {
    project: projecttitle
  }
  url2.search = new URLSearchParams(params2).toString();

  useEffect(() => {
    axios.get(url2).then(res => {
      //console.log(res)
      setSupporters(res.data);
    })

  }, []);

  console.log(supporters)
  const [jobs, setJobs] = useState([]);

  const url3 = new URL('http://127.0.0.1:4000/jobs/getJobs')
  const params3 = {
    project: projecttitle
  }
  url3.search = new URLSearchParams(params3).toString();

  useEffect(() => {
    axios.get(url3).then(res => {
      //console.log(res)
      setJobs(res.data);
    })

  }, []);

  console.log(jobs)
  var number=1;
  return (
    <DashboardLayout>
       <SoftBox display="flex" mb={3}>
                <Link to="/dashboard" color="#343B5C" >
                    <SoftTypography variant="body2" fontWeight="bold" gutterBottom mt={3} >
                        <Icon>home</Icon>Home
                    </SoftTypography></Link>
                <Link to="/projects" color="#343B5C" >
                    <SoftTypography variant="body2" fontWeight="bold" gutterBottom mt={3} >
                        /Projects
                    </SoftTypography></Link>
                    </SoftBox>

      <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
        <h2>{project.title}</h2>
      </SoftTypography>
      <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
        <p>{project.subtitle}</p>
      </SoftTypography>
      <SoftTypography variant="body2" gutterBottom >
        <p>{project.intro}</p>
        <br />
        <p>{project.description}</p>
      </SoftTypography>
      <br />
      <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
        <h2>Flowchart</h2>
      </SoftTypography>
      <center>
        <img src={project.flowchart} style={{ width: "60%", height: "30%" }} key="forex-card-image" />
      </center>
      {/* )} */}

      <br />
      <br />
      <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
        <h2>Owner of the Application</h2>
      </SoftTypography>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={3} key="owner-grid">
            <SoftBox>
              <Tooltip key={project.ownerName} title={project.ownerName} placement="bottom">
                <SoftAvatar
                  src={project.ownerImage}
                  alt={"owner-of-the-application"}
                  size="xxl"
                  padding="100px"
                  sx={({ borders: { borderWidth }, palette: { white } }) => ({
                    border: `${borderWidth[2]} solid ${white.main}`,
                    cursor: "pointer",
                    position: "relative",
                    ml: 3,

                    "&:hover, &:focus": {
                      zIndex: "10",
                    },
                  })}
                />
              </Tooltip>
              <SoftTypography variant="body2" fontWeight="bold" gutterBottom ml={3}>
                {project.ownerName}
              </SoftTypography>
              <SoftTypography variant="body2" gutterBottom ml={2}>
                <p>{project.ownerDesignation}</p>
              </SoftTypography>
              <SoftTypography variant="body2" gutterBottom ml={2}>
                <p>{project.email}</p>
              </SoftTypography>
              <SoftTypography variant="body2" gutterBottom ml={2}>
                <p>{project.phNo}</p>
              </SoftTypography>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
        <h2>Stakeholders</h2>
      </SoftTypography>
      <br />
      <SoftBox p={2}>
        <Grid container spacing={3}>
          {stakeholders.map(s =>
            <Grid item xs={12} md={6} xl={3} key="project-grid">
              <SoftBox>
                <Tooltip key={s.name} title={s.name} placement="bottom">
                  <SoftAvatar
                    src={s.image}
                    alt={"stake-holder"}
                    size="xxl"
                    padding="100px"
                    sx={({ borders: { borderWidth }, palette: { white } }) => ({
                      border: `${borderWidth[2]} solid ${white.main}`,
                      cursor: "pointer",
                      position: "relative",
                      ml: 3,

                      "&:hover, &:focus": {
                        zIndex: "10",
                      },
                    })}
                  />
                </Tooltip>
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom ml={3}>
                  {s.name}
                </SoftTypography>
                <SoftTypography variant="body2" gutterBottom ml={2}>
                  <p>{s.designation}</p>
                </SoftTypography>
              </SoftBox>
            </Grid>
          )}
        </Grid>
      </SoftBox>
      <br />
      <br />
      <br />

      <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
        <h2>Supporting Team</h2>
      </SoftTypography>
      <br />
      <SoftBox p={2}>
        <Grid container spacing={3}>
          {supporters.map(sup =>
            <Grid item xs={12} md={6} xl={3} key="project-grid">
              <SoftBox>
                <Tooltip key={sup.name} title={sup.name} placement="bottom">
                  <SoftAvatar
                    src={sup.image}
                    alt={"supporting-team"}
                    size="xxl"
                    padding="100px"
                    sx={({ borders: { borderWidth }, palette: { white } }) => ({
                      border: `${borderWidth[2]} solid ${white.main}`,
                      cursor: "pointer",
                      position: "relative",
                      ml: 3,

                      "&:hover, &:focus": {
                        zIndex: "10",
                      },
                    })}
                  />
                </Tooltip>
                <SoftTypography variant="body2" fontWeight="bold" gutterBottom ml={3}>
                  {sup.name}
                </SoftTypography>
                <SoftTypography variant="body2" gutterBottom ml={2}>
                  <p>{sup.designation}</p>
                </SoftTypography>
              </SoftBox>
            </Grid>
          )}
        </Grid>
      </SoftBox>
      <br />
      <br />
      <br />

      <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
        <h2>Job Opportunities</h2>
      </SoftTypography>
      <SoftBox p={2}>
        <Grid container spacing={3}>
        {jobs.map(j=>
            <Grid item xs={12} md={6} xl={6} key="project-grid">
            <Card sx={{ height: "100%" }}>
                            <SoftBox display="flex" pt={2} px={2}>
                                <SoftTypography variant="h6" fontWeight="bold" textTransform="capitalize">
                                    Job Title #{number++}:&nbsp;
                                </SoftTypography>
                                <SoftTypography variant="body2" color="#343B5C">
                                   {j.title}
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" pt={2} px={2}>
                                <SoftTypography variant="body2" fontWeight="medium" textTransform="capitalize">
                                    Description:&nbsp;
                                </SoftTypography>
                                <SoftTypography variant="body2" color="#343B5C">
                                   {j.description}
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" pt={2} px={2}>
                                <SoftTypography variant="body2" fontWeight="medium" textTransform="capitalize">
                                    Required Skills:&nbsp;
                                </SoftTypography>
                                <SoftTypography variant="body2" color="#343B5C">
                                    {j.skills}
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" pt={2} px={2}>
                                <SoftTypography variant="body2" fontWeight="medium" gutterBottom textTransform="capitalize">
                                    Experience:&nbsp;
                                </SoftTypography>
                                <SoftTypography variant="body2" color="#343B5C">
                                    {j.experience}
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox display="flex" pt={2} px={2}>
                                <SoftTypography variant="body2" fontWeight="medium" gutterBottom textTransform="capitalize">
                                    Salary:&nbsp;
                                </SoftTypography>
                                <SoftTypography variant="body2" color="#343B5C">
                                    {j.salary}
                                </SoftTypography>
                            </SoftBox>
                        </Card>
            </Grid>
            )}
        </Grid>
        </SoftBox>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </DashboardLayout>
  )
}
export default Projectfeed;