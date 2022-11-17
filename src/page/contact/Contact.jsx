import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormHelperText,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import contact from "../../images/contact.webp";
import MuiAlert from "@mui/material/Alert";
import { useForm, ValidationError } from "@formspree/react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [state, handleSubmit] = useForm("xgeqdlpb");
  if (state.succeeded) {
    return (
      <>
        <Contact />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your form is submitted successfully!
          </Alert>
        </Snackbar>
      </>
    );
  }
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
            xs: "230px",
            sm: "280px",
            md: "280px",
            lg: "300px",
          },
          width: "100%",
        }}
      />
      <Container>
        <Card sx={{ mt: "2rem", mb: "2rem", padding: "2rem" }}>
          <Typography variant="h5" textAlign={"center"} gutterBottom>
            GET IN TOUCH
          </Typography>
          <form
            action="https://formspree.io/f/xgeqdlpb"
            method="POST"
            className="form"
            onSubmit={handleSubmit}
          >
            <Stack spacing={2}>
              <FormControl>
                <TextField
                  id="outlined-basic"
                  required
                  label="Name"
                  name="Name"
                  type="text"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  helperText="Please enter your name"
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="outlined-basic"
                  required
                  label="Mail"
                  name="Email"
                  aria-describedby="my-helper-text"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
                <FormHelperText id="my-helper-text">
                  We'll never share your email.
                </FormHelperText>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="outlined-basic"
                  type="tel"
                  pattern="[0-9]{10}"
                  required
                  label="Phone"
                  name="Phone"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </FormControl>
              <FormControl>
                <TextField
                  label="Message"
                  type="text"
                  placeholder="Enter your message"
                  id="message"
                  name="Message"
                  multiline
                  rows={4}
                  sx={{ width: "100%" }}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </FormControl>
              <Button
                variant="contained"
                sx={{
                  maxWidth: "1rem",
                  margin: "0 auto",
                  padding: "0.5rem 4rem",
                }}
                disabled={state.submitting}
                type="submit"
                onClick={handleClick}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Card>
      </Container>
    </>
  );
};

export default Contact;
