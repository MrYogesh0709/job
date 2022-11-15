import React from "react";
import { Box } from "@mui/system";
import about from "../../images/about.jpg";

const About = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${about})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
          height: { xs: "380px", sm: "560px", md: "430px" },
          width: "100%",
        }}
      ></Box>
    </>
  );
};

export default About;
