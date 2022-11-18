import {
  Card,
  Divider,
  Grid,
  Stack,
  Typography,
  Container,
  Button,
  Box,
} from "@mui/material";
import about_us from "../../images/about/about_us.avif";
import { Link } from "react-router-dom";
import hero from "../../images/home.jpg";
import why from "../../images/about/why.avif";
import work from "../../images/about/work.avif";

const About = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${hero})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
          height: { xs: "230px", sm: "280px", md: "280px", lg: "300px" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            height: { xs: "230px", sm: "280px", md: "280px", lg: "300px" },
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
              fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
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
              marginBottom={"0.5rem"}
              fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
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
              marginBottom={"0.5rem"}
              fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
            >
              Get Job Support by Real time Experts
            </Typography>
            <br />
            <Link
              to="/services"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Button variant="contained">More Details</Button>
            </Link>

            <Button
              variant="contained"
              color="success"
              sx={{
                marginLeft: "20px",
                textDecoration: "none",
              }}
              component="a"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+916280811923"
            >
              Whatsapp
            </Button>
          </Box>
        </Box>
      </Box>
      <Container sx={{ mt: "2rem", mb: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Stack gap={2}>
              <Typography
                variant="h3"
                textTransform="capitalize"
                textAlign={"center"}
              >
                about us
              </Typography>
              <Divider />
              <Typography variant="p" textTransform="capitalize">
                At Advika Technology, we take care of all your problems. 100%
                satisfaction is guaranteed, else we will refund your money, no
                question asked. Now you can sit back and relax, we will provide
                you best possible solutions in most reasonable prices. Once you
                make bond with us, we will make sure you don't have to look
                anywhere else for anything.
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Card
              sx={{ borderRadius: "24px 48px 24px 48px", boxShadow: "none" }}
            >
              <img
                src={`${about_us}`}
                alt="aobut_us"
                loading="lazy"
                width={"100%"}
                size="cover"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mt: "2rem", mb: "2rem" }}>
        <Grid container spacing={2}>
          <Grid
            item
            md={4}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Card
              sx={{ borderRadius: "24px 48px 24px 48px", boxShadow: "none" }}
            >
              <img
                src={`${why}`}
                alt="aobut_us"
                loading="lazy"
                width={"100%"}
                size="cover"
              />
            </Card>
          </Grid>
          <Grid item md={8}>
            <Stack gap={2}>
              <Typography
                variant="h3"
                textTransform="capitalize"
                textAlign={"center"}
              >
                why us?
              </Typography>
              <Divider />
              <Typography variant="p" textTransform="capitalize">
                At Advika Technology, we take care of all your problems. 100%
                satisfaction is guaranteed, else we will refund your money, no
                question asked. Now you can sit back and relax, we will provide
                you best possible solutions in most reasonable prices. Once you
                make bond with us, we will make sure you don't have to look
                anywhere else for anything.
              </Typography>
              <Grid
                item
                md={4}
                display="flex"
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <Card
                  sx={{
                    borderRadius: "24px 48px 24px 48px",
                    boxShadow: "none",
                  }}
                >
                  <img
                    src={`${why}`}
                    alt="aobut_us"
                    loading="lazy"
                    width={"100%"}
                    size="cover"
                  />
                </Card>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mt: "2rem", mb: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Stack gap={2}>
              <Typography
                variant="h3"
                textTransform="capitalize"
                textAlign={"center"}
              >
                How We Work ?
              </Typography>
              <Divider />
              <Typography variant="p" textTransform="capitalize">
                At Advika Technology, we take care of all your problems. 100%
                satisfaction is guaranteed, else we will refund your money, no
                question asked. Now you can sit back and relax, we will provide
                you best possible solutions in most reasonable prices. Once you
                make bond with us, we will make sure you don't have to look
                anywhere else for anything.
                <br />
                <br />
                Send us mail on :
                <Typography
                  variant="p"
                  component="a"
                  href="mailto:advikatechnology.1207@gmail.com"
                  sx={{ textDecoration: "none" }}
                  target="_blank"
                >
                  advikatechnology.1207@gmail.com
                </Typography>
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Card
              sx={{ borderRadius: "24px 48px 24px 48px", boxShadow: "none" }}
            >
              <img
                src={`${work}`}
                alt="aobut_us"
                loading="lazy"
                width={"100%"}
                size="cover"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
