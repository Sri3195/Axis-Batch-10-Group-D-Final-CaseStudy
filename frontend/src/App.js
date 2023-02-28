
import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation, BrowserRouter } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Soft UI Dashboard React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Soft UI Dashboard React routes
import routes from "routes";


// Soft UI Dashboard React contexts
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brand from "assets/images/saral-image.jpg";
import Homeloan from "layouts/Homeloan";

import Educationloan from "layouts/Educationloan";
import Personalloan from "layouts/Personalloan";
import Debitcard from "layouts/Debitcard";
import Creditcard from "layouts/Creditcard";
import Forexcard from "layouts/Forexcard";
import Mutualfunds from "layouts/Mutualfunds";
import Fixeddeposits from "layouts/Fixeddeposits";
import Newsfeed from "layouts/Newsfeed";
import Projectfeed from "layouts/Projectfeed";
import Loans from "layouts/Loans";
import Cards from "layouts/Cards";
import Investments from "layouts/Investments";
import Documents from "layouts/Documents";
import AppointmentLetter from "layouts/Appointmentletter";
import Joiningletter from "layouts/Joiningletter";
import Incrementletter from "layouts/Incrementletter";
import Salaryslip from "layouts/Salaryslip";

export default function App() {

  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

    

  const configsButton = (
    <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SoftBox>
  );

  return  (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={brand}
            brandName="Saral Dashboard"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(routes)}
        <Route path="" element={<Navigate to="/authentication/sign-in" />} />
        <Route path="/home-loan" element={<Homeloan/>}/>
        <Route path="/education-loan" element={<Educationloan/>}/>
        <Route path="/personal-loan" element={<Personalloan/>}/>
        <Route path="/debit-card" element={<Debitcard/>}/>
        <Route path="/credit-card" element={<Creditcard/>}/>
        <Route path="/forex-card" element={<Forexcard/>}/>
        <Route path="/mutual-funds" element={<Mutualfunds/>}/>
        <Route path="/fixed-deposits" element={<Fixeddeposits/>}/>
        <Route path="/news-feed" element={<Newsfeed/>}/>
        <Route path="/project-feed" element={<Projectfeed/>}/>
        <Route path="/loans" element={<Loans/>}/>
        <Route path="/cards" element={<Cards/>}/>
        <Route path="/investments" element={<Investments/>}/>
        <Route path="/documents" element={<Documents/>}/>
        <Route path="/appointment-letter" element={<AppointmentLetter/>}/>
        <Route path="/joining-letter" element={<Joiningletter/>}/>
        <Route path="/increment-letter" element={<Incrementletter/>}/>
        <Route path="/salaryslip" element={<Salaryslip/>}/>
      </Routes>
    </ThemeProvider>
   </> 
  );
}
