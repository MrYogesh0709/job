import { Box } from "@mui/system";
import about from "../../images/about/about.jpg";

const Services = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${about})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundSize: "cover",
        height: { xs: "230px", sm: "280px", md: "280px", lg: "300px" },
        width: "100%",
      }}
    />
  );
};

export default Services;
