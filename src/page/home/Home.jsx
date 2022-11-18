import React from "react";
import {
  CardContent,
  Box,
  Button,
  Card,
  CardMedia,
  Typography,
  Container,
  Divider,
  styled,
  Paper,
  Stack,
} from "@mui/material";
import logo from "../../images/logo/sdfd.png";
import home1 from "../../images/home1.jpg";
import data from "../../images/home/data.jpg";
import Grid from "@mui/material/Unstable_Grid2";
import fullstack from "../../images/home/full-stack.png";
import google from "../../images/home/google.png";
import java from "../../images/home/java.webp";
import aws from "../../images/home/logoaws.png";
import azure from "../../images/home/azure.png";
import net from "../../images/home/net.avif";
import react from "../../images/home/reactlogo.png";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const dataStack = [
  {
    img: aws,
    heading: "AWS Job Support",
    para: "Developer Professionals available for Job Support and Interview Support Service",
  },
  {
    img: azure,
    heading: "azure Job Support",
    para: "AWS / Azure / acp with Professionals DevOps available for Job Support and Interview Support Service",
  },
  {
    img: fullstack,
    heading: "Full Stack JobSupport ",
    para: "Full Stack DevelopmentProfessionals available forJob Support and InterviewSupport Service",
  },
  {
    img: react,
    heading: "React Job Support",
    para: "AWS / Azure / acp with Professionals DevOps available for Job Support and Interview Support Service",
  },
  {
    img: google,
    heading: "GCP Job support",
    para: "AWS / Azure / acp with Professionals DevOps available for Job Support and Interview Support Service",
  },
  {
    img: java,
    heading: "Java Job support",
    para: "AWS / Azure / acp with Professionals DevOps available for Job Support and Interview Support Service",
  },
  {
    img: net,
    heading: "Dot net support",
    para: "AWS / Azure / acp with Professionals DevOps available for Job Support and Interview Support Service",
  },
  {
    img: data,
    heading: "Data enginerring support",
    para: "AWS / Azure / acp with Professionals DevOps available for Job Support and Interview Support Service",
  },
];
const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 300,
            width: "100%",
            maxHeight: { xs: 300, md: 300 },
            maxWidth: { xs: 350, md: 550 },
          }}
          alt="The house from the offer."
          src={logo}
        />
      </Box>
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
        <Typography variant="h5" textAlign={"center"}>
          Our Popular Job Support
          <Divider
            sx={{
              width: "20%",
              color: "red",
              margin: "0 auto",
              borderColor: "blue",
              borderBottomWidth: "medium",
              mb: "1rem",
              mt: "0.5rem",
            }}
          />
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 16 }}
          mt="1rem"
          mb="2rem"
        >
          {dataStack.map((item) => (
            <Grid xs={2} sm={4} key={item.img}>
              <Item>
                <Box>
                  <Stack direction="column" spacing={2}>
                    <img
                      src={`${item.img}`}
                      alt={"item.img"}
                      loading="lazy"
                      width="100%"
                      height="135px"
                    />
                    <Divider />
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      minHeight={90}
                      textTransform="capitalize"
                    >
                      {item.heading}
                    </Typography>
                    <Typography
                      variant="p"
                      fontWeight={500}
                      textAlign="justify"
                      minHeight={10}
                      sx={{ wordBreak: "break-word" }}
                    >
                      {item.para}
                    </Typography>
                  </Stack>
                </Box>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
