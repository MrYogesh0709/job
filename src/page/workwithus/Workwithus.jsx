import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import Background from "../../components/Background";
import CircularProgress from "@mui/material/CircularProgress";

const Workwithus = () => {
  return (
    <Box>
      <Background />

      <Typography
        variant="h4"
        textAlign={"center"}
        gutterBottom
        mt={"2rem"}
        sx={{
          backgroundImage: "linear-gradient(90deg, blue, green)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Work With Us
      </Typography>
      <Divider />
      <Typography mt={"1rem"} mb={"2rem"} p={"0 1rem"} textAlign="center">
        Are you a top professional in your field, with a passion to teach and
        share your knowledge and industry experience? We're looking for
        qualified trainers with expertise, passion, and teaching experience. If
        you are interested in being part of our team apply now!
      </Typography>
      <Divider />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSclKU96F_uPH0bkxij7OCqHJHDipk-ZzpOENpZPB0ViQn9ZwQ/viewform?embedded=true"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="google"
        width={"100%"}
        height="2670px"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </iframe>
    </Box>
  );
};

export default Workwithus;
