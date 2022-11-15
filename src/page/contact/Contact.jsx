import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import contact from "../../images/contact.webp";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [state, handleSubmit] = useForm("maykaoqj");
  if (state.succeeded) {
    return (
      <section className="error-page section">
        <div className="error-container">
          <h1>Thanks</h1>
          <p>The Form submitted successfully</p>
          <div className="error">
            <Link to="/" className="btn btn-primary">
              back home
            </Link>
          </div>
        </div>
      </section>
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
          <Typography variant="h6" textAlign={"center"}>
            GET IN TOUCH
          </Typography>
          <form
            action="https://formspree.io/f/maykaoqj"
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
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="outlined-basic"
                  required
                  label="Mail"
                  name="email"
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
                  placeholder="Enter your message"
                  id="message"
                  name="message"
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
