import React from "react";
import { Box, Button, Typography } from "@mui/material";
import hero from "../../images/home.jpg";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${hero})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
          height: { xs: "400px", sm: "600px" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "40%" },
            margin: "0 auto",
            paddingTop: "4rem",
          }}
        >
          <Box sx={{ opacity: "0.8" }}>
            <Typography
              variant="h5"
              lineHeight={1.2}
              fontWeight="600"
              padding={"10px"}
              display={"inline-block"}
              color={"#ffffff"}
              alignItems="center"
              backgroundColor="rgba(0,0,0,.6)"
              marginBottom={"1rem"}
            >
              Job Support From India
            </Typography>
            <br />
            <Typography
              variant="h5"
              lineHeight={1.2}
              fontWeight="600"
              padding={"10px"}
              display={"inline-block"}
              color={"white"}
              alignItems="center"
              backgroundColor="#9e9e9e"
              marginBottom={"1rem"}
            >
              By Experinced IT Proffessionals
            </Typography>
            <br />
            <Typography
              variant="h5"
              fontWeight="600"
              padding={"10px"}
              display={"inline-block"}
              lineHeight={1.2}
              color={"white"}
              alignItems="center"
              backgroundColor="rgba(0,0,0,.6)"
              marginBottom={"1rem"}
            >
              Get Job Support by Real time Experts
            </Typography>
            <br />
            <Button variant="contained">More Details</Button>

            <Button
              variant="contained"
              color="success"
              sx={{ marginLeft: "20px" }}
            >
              Whatsapp
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
