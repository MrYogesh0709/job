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
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus ex maiores, blanditiis obcaecati, officia debitis deserunt quam aspernatur perspiciatis error. Perspiciatis, ab.",
    name: "kfajlkfj",
  },
  {
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus ex maiores, blanditiis obcaecati, officia debitis deserunt quam aspernatur perspiciatis error. Perspiciatis, ab.",
    name: "kfajlkfy",
  },
  {
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus ex maiores, blanditiis obcaecati, officia debitis deserunt quam aspernatur perspiciatis error. Perspiciatis, ab.",
    name: "kfajlkfb",
  },
  {
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus ex maiores, blanditiis obcaecati, officia debitis deserunt quam aspernatur perspiciatis error. Perspiciatis, ab.",
    name: "kfajlkfq",
  },
  {
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus ex maiores, blanditiis obcaecati, officia debitis deserunt quam aspernatur perspiciatis error. Perspiciatis, ab.",
    name: "kfajlkfp",
  },
  {
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus ex maiores, blanditiis obcaecati, officia debitis deserunt quam aspernatur perspiciatis error. Perspiciatis, ab.",
    name: "kfajlkfa",
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
                Get Online Job Support
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
                From Real Time Professional
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
                  If you are a fresher or experienced candidate who is new to a
                  technology or struggling to complete work alone, we have a
                  team of experienced professionals who can help you to complete
                  assigned task in time and also train you to handle future
                  requirement on your own. Based in India, we provide proxy
                  online job support through net meeting, skype or team viewer
                  from India in the USA, UK, Canada, Australia, and other
                  countries at quite affordable prices.
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
