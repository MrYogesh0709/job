import React from "react";
import {
  CardContent,
  Box,
  Button,
  Card,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import hero from "../../images/home.jpg";
import home1 from "../../images/home1.jpg";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${hero})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
          height: { xs: "400px", sm: "500px" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "40%" },
            margin: "0 auto",
            paddingTop: "4rem",
          }}
        >
          <Box sx={{ opacity: "0.8" }}>
            <Typography
              variant="h5"
              lineHeight={1.2}
              fontWeight="600"
              padding={"10px"}
              display={"inline-block"}
              color={"#ffffff"}
              alignItems="center"
              backgroundColor="rgba(0,0,0,.6)"
              marginBottom={"1rem"}
            >
              Job Support From India
            </Typography>
            <br />
            <Typography
              variant="h5"
              lineHeight={1.2}
              fontWeight="600"
              padding={"10px"}
              display={"inline-block"}
              color={"white"}
              alignItems="center"
              backgroundColor="#9e9e9e"
              marginBottom={"1rem"}
            >
              By Experinced IT Proffessionals
            </Typography>
            <br />
            <Typography
              variant="h5"
              fontWeight="600"
              padding={"10px"}
              display={"inline-block"}
              lineHeight={1.2}
              color={"white"}
              alignItems="center"
              backgroundColor="rgba(0,0,0,.6)"
              marginBottom={"1rem"}
            >
              Get Job Support by Real time Experts
            </Typography>
            <br />
            <Button variant="contained">More Details</Button>

            <Button
              variant="contained"
              color="success"
              sx={{ marginLeft: "20px" }}
            >
              Whatsapp
            </Button>
          </Box>
        </Box>
      </Box>
      <Box maxWidth={"95vw"} width="100%" margin={"2rem auto"}>
        <Card>
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
              >
                Get Online Job Support
              </Typography>
              <Typography
                mt="1rem"
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                From Real Time Professional
              </Typography>
              <CardContent>
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
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
