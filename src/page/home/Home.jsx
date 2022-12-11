import React from "react";
import Background from "../../components/Background";
import { Link } from "react-router-dom";
import home1 from "../../images/home1.jpg";
import Grid from "@mui/material/Unstable_Grid2";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SentimentSatisfiedAltRoundedIcon from "@mui/icons-material/SentimentSatisfiedAltRounded";

import {
  CardContent,
  Box,
  Button,
  Card,
  CardMedia,
  Typography,
  Container,
  Stack,
  Avatar,
  useTheme,
} from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const data = [
  {
    para: "I am completely satisfied with the services recieved by the Advika Technology Team. I will recommend it to my friends.",
    name: "Jagadeesh Reddy",
  },
  {
    para: "I got job as AWS Devops engineer and was very worried about the tasks assigned to me. Then i came to know about Advika Technology from my friends.",
    name: "Dhiraj",
  },
  {
    para: "Job Support provided by consultant Vignesh is really great. He explains the requirement in detail and then provide the best solution.",
    name: "Vaibhaw",
  },
  {
    para: "100% satisifed with the services recieved from the consultants of Advika Technology. Best of Luck for your future. Keep Rocking!",
    name: "Sameera Sen",
  },
  {
    para: "Great Work! Keep it Up!",
    name: "Sandeep",
  },
  {
    para: "services provided by consultant karthik is good. My tasks completed on time. Really Satisfied",
    name: "Vishal Reddy",
  },
];

let limiter = 500;
let Customers = 100;
let time = 24;

const Home = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const [clients, setClients] = React.useState(0);
  React.useEffect(() => {
    const incrementer = setInterval(() => {
      setClients((c) => {
        if (c < limiter) return c + 5;
        clearInterval(incrementer);
        return c;
      });
    }, 20);
  }, []);
  const [customer, setCustomer] = React.useState(0);
  React.useEffect(() => {
    const incrementer = setInterval(() => {
      setCustomer((c) => {
        if (c < Customers) return c + 2;
        clearInterval(incrementer);
        return c;
      });
    }, 50);
  }, []);
  const [support, setSupport] = React.useState(0);
  React.useEffect(() => {
    const incrementer = setInterval(() => {
      setSupport((c) => {
        if (c < time) return c + 1;
        clearInterval(incrementer);
        return c;
      });
    }, 80);
  }, []);

  return (
    <Box>
      <Background />
      <Container>
        <Card sx={{ margin: "2rem 0" }}>
          <Grid container spacing={2}>
            <Grid item xs={4} margin={"0 auto"}>
              <CardMedia component="img" image={home1} alt="green iguana" />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h5"
                component="div"
                textAlign={"center"}
                mt="1rem"
                sx={{
                  backgroundImage: "linear-gradient(90deg, blue, green)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Online Job Support
              </Typography>
              <Typography
                mt="1rem"
                variant="h5"
                component="div"
                textAlign={"center"}
                sx={{
                  backgroundImage: "linear-gradient(90deg, blue, green)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                From Experienced Professional
              </Typography>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="body2" color="text.primary">
                  At Advika Technology, our clients are our utmost priority and their
                  satisfaction is guaranteed. Once you have contacted us, we will make sure 
                  that you get the best possible solution for your problems and align our 
                  best available consultant with you.
                  If you are a fresher or experienced and facing challenges in completing 
                  your day to day tasks assigned to you by your seniors or scrum masters. 
                  Our team of experienced trainers will help you in completing your tasks
                  by taking remote of your laptop. 
                  We have already provided job support to more than 500 clients across 
                  countries like USA, UK, Australia and Canada.   
                </Typography>
                <Link
                  to="/about"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ mt: "1rem" }}
                  >
                    Read more
                  </Button>
                </Link>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid sx={{ xs: "16" }}>
              <Card
                sx={{
                  backgroundColor: "pink",
                  mt: "1rem",
                  mb: "1rem",
                  padding: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "24px 48px 24px 48px",
                }}
              >
                <Stack alignItems={"center"} gap="1rem">
                  <Avatar
                    sx={{
                      backgroundColor: "rgb(17, 105, 142)",
                      border: "1px solid rgb(17, 105, 142)",
                      height: "50px",
                      width: "50px",
                    }}
                  >
                    <SentimentSatisfiedAltRoundedIcon fontSize="large" />
                  </Avatar>
                  <Typography variant="h4">{clients}+</Typography>
                  <Typography variant="h5" textAlign={"center"}>
                    Happy Clients
                  </Typography>
                </Stack>
              </Card>
            </Grid>
            <Grid sx={{ xs: "16" }}>
              <Card
                sx={{
                  backgroundColor: "skyblue",
                  mt: "1rem",
                  mb: "1rem",
                  padding: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "24px 48px 24px 48px",
                }}
              >
                <Stack alignItems={"center"} gap="1rem">
                  <Avatar
                    sx={{
                      backgroundColor: "rgb(17, 105, 142)",
                      border: "1px solid rgb(17, 105, 142)",
                      height: "50px",
                      width: "50px",
                    }}
                  >
                    <AccessTimeIcon fontSize="large" />
                  </Avatar>

                  <Typography variant="h4">{support}/7</Typography>
                  <Typography variant="h5" textAlign={"center"}>
                    Support Availabilty
                  </Typography>
                </Stack>
              </Card>
            </Grid>
            <Grid sx={{ xs: "16" }}>
              <Card
                sx={{
                  backgroundColor: "pink",
                  mt: "1rem",
                  mb: "1rem",
                  padding: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "24px 48px 24px 48px",
                }}
              >
                <Stack alignItems={"center"} gap="1rem">
                  <Avatar
                    sx={{
                      backgroundColor: "rgb(17, 105, 142)",
                      border: "1px solid rgb(17, 105, 142)",
                      height: "50px",
                      width: "50px",
                    }}
                  >
                    <MoodRoundedIcon fontSize="large" />
                  </Avatar>

                  <Typography variant="h4">{customer}%</Typography>
                  <Typography variant="h5" textAlign={"center"}>
                    Satisfied Customers
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container
        sx={{
          mb: "2rem",
          mt: "5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card>
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Typography
              variant="h4"
              fontWeight={800}
              sx={{
                backgroundImage: "linear-gradient(360deg, green, blue)",
                backgroundClip: "text",
                color: "transparent",
                mt: "5rem",
                mb: "2rem",
              }}
              textAlign="center"
            >
              TESTIMONIALS
            </Typography>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {data.map((step, index) => (
                <div key={step.name}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Card sx={{ maxWidth: "sm", padding: "0 2rem" }}>
                      <Typography
                        variant="h6"
                        component={"p"}
                        textAlign={"center"}
                        mb={"2rem"}
                      >
                        {step.para}
                      </Typography>
                      <Box
                        display={"flex"}
                        alignItems="center"
                        justifyContent="center"
                        marginBottom="5rem"
                      >
                        <Typography
                          variant="h6"
                          component={"p"}
                          sx={{
                            backgroundImage:
                              "linear-gradient(360deg, green, blue)",
                            backgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          {step.name}
                        </Typography>
                      </Box>
                    </Card>
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>

            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default Home;
