import React from "react";
import {
  // Alert,
  Box,
  // Button,
  // Card,
  // Container,
  // Divider,
  // FormControl,
  // FormHelperText,
  // Snackbar,
  // Stack,
  // TextField,
  // Typography,
} from "@mui/material";
// import { useForm, ValidationError } from "@formspree/react";
import Background from "../../components/Background";

const Workwithus = () => {
  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // const [state, handleSubmit] = useForm("xgeqdlpb");
  // if (state.succeeded) {
  //   return (
  //     <>
  //       <Workwithus />
  //       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  //         <Alert
  //           onClose={handleClose}
  //           severity="success"
  //           sx={{ width: "100%" }}
  //         >
  //           Your form is submitted successfully!
  //         </Alert>
  //       </Snackbar>
  //     </>
  //   );
  // }
  return (
    <Box>
      <Background />
      {/* <Container>
        <Typography variant="h4" textAlign={"center"} gutterBottom mt={"2rem"}>
          Work With Us
        </Typography>
        <Divider />
        <Typography mt={"1rem"} p={"0 1rem"} textAlign="center">
          Are you a top professional in your field, with a passion to teach and
          share your knowledge and industry experience? We're looking for
          qualified trainers with expertise, passion, and teaching experience.
          If you are interested in being part of our team apply now!
        </Typography>
        <Card
          sx={{
            mt: "2rem",
            mb: "1rem",
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
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
                  helperText="Please enter your name"
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
                  label="Whatsapp Number"
                  name="Whatsapp Number"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </FormControl>
              <Typography>Location :</Typography>
              <Stack direction="row" spacing={2}>
                <FormControl>
                  <TextField
                    id="outlined-basic"
                    type="text"
                    required
                    label="Country"
                    name="Location:Country"
                    defaultValue="India"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    id="outlined-basic"
                    type="text"
                    required
                    label="State"
                    name="Location:state"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    id="outlined-basic"
                    type="text"
                    label="City"
                    name="Location:City"
                    required
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </FormControl>
              </Stack>
              <FormControl>
                <TextField
                  label="Key Skills"
                  type="text"
                  id="message"
                  name="Key Skills"
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
      </Container> */}

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSclKU96F_uPH0bkxij7OCqHJHDipk-ZzpOENpZPB0ViQn9ZwQ/viewform?embedded=true"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="google"
        width={"100%"}
        height="2670px"
      >
        Loading…
      </iframe>
    </Box>
  );
};

export default Workwithus;
