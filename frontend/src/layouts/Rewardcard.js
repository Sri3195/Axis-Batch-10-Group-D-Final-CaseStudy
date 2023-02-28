
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images


function Rewardcard() {
  return (
      <SoftBox position="relative" height="95%" mt={3} p={2}>
        <SoftBox
          display="flex"
          flexDirection="column"
          height="100%"
          py={2}
          px={2}
          borderRadius="lg"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url("https://th.bing.com/th/id/OIP.IHLD2jG6e1e5CfRxvPvZygHaCx?w=322&h=131&c=7&r=0&o=5&dpr=1.3&pid=1.7")`,
            backgroundSize: "cover",
          }}
        >
          <SoftBox mb={3} pt={1}>
            <SoftTypography variant="h5" color="white" fontWeight="bold">
              Saral
            </SoftTypography>
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography variant="body2" color="white">
              Wealth creation is an evolutionarily recent positive-sum game. It is all about who
              take the opportunity first.
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </SoftBox>
  
  );
}

export default Rewardcard;
