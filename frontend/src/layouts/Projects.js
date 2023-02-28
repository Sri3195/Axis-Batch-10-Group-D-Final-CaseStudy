import ivancik from "assets/images/ivancik.jpg";
import "styles/style.css";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "layouts/Footer";


import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


import SoftBox from "components/SoftBox";
import SoftProgress from "components/SoftProgress";
import team1 from "assets/images/team-1.jpg";
import team4 from "assets/images/team-5.jpg";
import projectimg from "assets/images/projectimg1.jpg";

import Tooltip from "@mui/material/Tooltip";
import SoftAvatar from "components/SoftAvatar";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import SoftButton from "components/SoftButton";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Icon } from "@mui/material";

function Projects() {
  const authors = [
    { image: team1, name: "Sri Lakshmi" },
    { image: team4, name: "Supriya" },
    { image: team1, name: "Revathi" },
    { image: team4, name: "Bhargavi" },
  ]
  const renderAuthors = authors.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <SoftAvatar
        src={media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
          ml: -1.25,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));
  const [projects, setProjects] = useState([])

  const url1 = new URL('http://127.0.0.1:4000/projects/getAll');



  useEffect(() => {

    axios.get(url1).then(res => {
      //console.log(res)
      setProjects(res.data);
    })
  }, []);
  console.log(projects)
  var number = 1;
  return (
    <>
      <DashboardLayout>
        {/* <DashboardNavbar /> */}
        <Link to="/dashboard" color="#343B5C" >
          <SoftTypography variant="body2" fontWeight="bold" gutterBottom mt={3} >
            <Icon>home</Icon>/Dashboard
          </SoftTypography></Link>

        <img src={projectimg} className="project-image" key="project-image" />
        <SoftBox mb={3}>
          <Card>
            <SoftBox pt={2} px={2}>
              <SoftBox mb={0.5}>
                <SoftTypography variant="h6" fontWeight="medium">
                  Projects
                </SoftTypography>
              </SoftBox>

            </SoftBox>
            <SoftBox p={2}>
              <Grid container spacing={3}>
                {projects.map(p =>
                  <Grid item xs={12} md={6} xl={3} key="project-grid">

                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        overflow: "visible",
                      }}
                      key="project-card"
                    >
                      <SoftBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
                        <CardMedia
                          src={p.image}
                          component="img"
                          title={p.title}
                          sx={{
                            maxWidth: "100%",
                            margin: 0,
                            boxShadow: ({ boxShadows: { md } }) => md,
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </SoftBox>
                      <SoftBox pt={3} px={0.5}>
                        <SoftBox mb={1}>
                          <SoftTypography
                            variant="button"
                            fontWeight="regular"
                            textTransform="capitalize"
                            textGradient
                          >
                            project #{number++}
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={1}>

                          <SoftTypography
                            variant="h5"
                            textTransform="capitalize"
                          >
                            {p.title}
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={3} lineHeight={0}>
                          <SoftTypography variant="button" fontWeight="regular" color="text">
                            {p.subtitle}
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox display="flex" justifyContent="space-between" alignItems="center">

                          <SoftButton
                            variant="gradient"
                            size="small"
                            color="info"
                          >
                            <Link to="/project-feed" state={p.title} style={{ color: "white" }}>view project</Link>
                          </SoftButton>
                          <SoftBox display="flex">{renderAuthors}</SoftBox>
                        </SoftBox>
                      </SoftBox>
                      <SoftTypography variant="body2" mt={2} fontWeight="medium" gutterBottom >
                        completion:
                      </SoftTypography>
                      <SoftBox width="10rem" textAlign="right">
                        <SoftProgress value={60} color="success" variant="gradient" label={false} />
                      </SoftBox>
                    </Card>

                  </Grid>
                )}


              </Grid>
            </SoftBox>
          </Card>
        </SoftBox>
        <br />
        <br />
        <br />
        <Footer />

      </DashboardLayout>
    </>
  );
}
export default Projects;