import { Avatar, Card, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import about from "../../images/about/about.jpg";
import SentimentSatisfiedAltRoundedIcon from "@mui/icons-material/SentimentSatisfiedAltRounded";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Grid from "@mui/material/Unstable_Grid2";
const Services = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${about})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
          height: { xs: "230px", sm: "280px", md: "280px", lg: "300px" },
          width: "100%",
        }}
      />
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
                  <Typography variant="h4">500+</Typography>
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

                  <Typography variant="h4">24/7</Typography>
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

                  <Typography variant="h4">100%</Typography>
                  <Typography variant="h5" textAlign={"center"}>
                    Satisfied Customers
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Services;
