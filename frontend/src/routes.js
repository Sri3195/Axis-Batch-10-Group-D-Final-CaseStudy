
import Profile from "layouts/Profile";
import SignIn from "layouts/authentication/sign-in";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Document from "examples/Icons/Document";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Employee from "layouts/Employee";
import Products from "layouts/Products";
import Policies from "layouts/Policies";
import Basket from "examples/Icons/Basket";
import Dashboard from "layouts/Dashboard";
import Projects from "layouts/Projects"
import Documents from "layouts/Documents";


const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Products",
    key: "products",
    route: "/products",
    icon: <Basket size="12px" />,
    component: <Products/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Employee",
    key: "employee",
    route: "/employee",
    icon: <CustomerSupport size="12px" />,
    component: <Employee />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Projects",
    key: "projects",
    route: "/projects",
    icon: <Basket size="12px" />,
    component: <Projects />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Policies",
    key: "policies",
    route: "/policies",
    icon: <Document size="12px" />,
    component: <Policies />,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Documents",
    key: "documents",
    route: "/documents",
    icon: <Document size="12px"/>,
    component: <Documents />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: "account_circle",
    component: <SignIn />,
    noCollapse: true,
  },
];

export default routes;
