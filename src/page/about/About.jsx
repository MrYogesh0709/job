import {
  Card,
  Divider,
  Grid,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import about_us from "../../images/about/about_us.avif";
import why from "../../images/about/why.avif";
import work from "../../images/about/work.avif";
import Background from "../../components/Background";

const About = () => {
  return (
    <>
      <Background />
      <Container sx={{ mt: "2rem", mb: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Stack gap={2}>
              <Typography
                variant="h3"
                textTransform="capitalize"
                textAlign={"center"}
                sx={{
                  backgroundImage: "linear-gradient(90deg, blue, green)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
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
                sx={{
                  backgroundImage: "linear-gradient(90deg, blue, green)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                why us?
              </Typography>
              <Divider />
              <Typography variant="p" textTransform="capitalize">
                If you are new to your field and face challenges in completing
                your tasks. Don't worry, our consultants having vast expereince
                in handling any complex projects and scenerios. We have already 
                provided job support to more than 500 clients with 100% satisfaction. 
                We will schedule demo with the support person on first day. 
                If you are satisfied with the suppport person, then we will start the 
                job support from next day after taking initial payment from you.
                The fees charged by us is very nominal as compared to the market.
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
                sx={{
                  backgroundImage: "linear-gradient(90deg, blue, green)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                How We Work ?
              </Typography>
              <Divider />
              <Typography variant="p" textTransform="capitalize">
                Our trainers are full time experienced Professionals working with big MNCs
                having vast experience in their fields. They will take your requirements in
                great details and then will start working on your project after going
                the architecture. They will work on your tasks and explain you the steps 
                performed in completing your tasks.  
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
