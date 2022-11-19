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
} from "@mui/material";
let limiter = 500;
let Customers = 100;
let time = 24;
const Home = () => {
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
        if (c < Customers) return c + 5;
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
    </Box>
  );
};

export default Home;
