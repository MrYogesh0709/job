import React from "react";
import { Box } from "@mui/material";
import logo from "../images/logo/sdfd.png";

const Background = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 300,
          width: "100%",
          maxHeight: { xs: 300, md: 300 },
          maxWidth: { xs: 350, md: 550 },
        }}
        alt="The house from the offer."
        src={logo}
      />
    </Box>
  );
};

export default Background;
