import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import contact from "../../images/contact.webp";

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${contact})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
          height: {
            xs: "200px",
            sm: "350px",
            md: "500px",
            lg: "550px",
            xl: "650px",
          },
          width: "100%",
        }}
      />
      <Container>
        <Card sx={{ mt: "2rem", mb: "2rem", padding: "2rem" }}>
          <Stack spacing={2}>
            <Typography variant="h6" textAlign={"center"}>
              GET IN TOUCH
            </Typography>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{ width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Mail"
              variant="outlined"
              sx={{ width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Mobile"
              variant="outlined"
              sx={{ width: "100%" }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              sx={{ width: "100%" }}
            />
            <Button
              variant="contained"
              sx={{
                maxWidth: "1rem",
                margin: "0 auto",
                padding: "0.5rem 4rem",
              }}
            >
              Submit
            </Button>
          </Stack>
        </Card>
      </Container>
    </>
  );
};

export default Contact;
