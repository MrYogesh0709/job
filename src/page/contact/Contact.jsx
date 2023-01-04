import React, { useState } from "react";
import {
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
import MuiAlert from "@mui/material/Alert";
import { useForm, ValidationError } from "@formspree/react";
import Background from "../../components/Background";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
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
  const [value, setValue] = useState();
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
      <Background />
      <Container maxWidth="md">
        <Card sx={{ mt: "2rem", mb: "2rem", padding: "2rem" }}>
          <Typography
            variant="h5"
            textAlign={"center"}
            gutterBottom
            sx={{
              backgroundImage: "linear-gradient(90deg, blue, green)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
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
                <PhoneInput
                  defaultCountry="IN"
                  placeholder="Enter phone number"
                  value={value}
                  required
                  name="Phone"
                  limitMaxLength
                  onChange={setValue}
                  isfocused="true"
                />
              </FormControl>
              <FormControl>
                <TextField
                  label="Requirement"
                  type="text"
                  placeholder="Share Your Requirement Here"
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
