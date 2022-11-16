import React from "react";
import { Box } from "@mui/system";
import about from "../../images/about.jpg";
import Container from "@mui/material/Container";
import { Card, Divider, Grid, Stack, Typography } from "@mui/material";
import about_us from "../../images/about2.avif";

const About = () => {
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
          height: { xs: "380px", sm: "560px", md: "430px" },
          width: "100%",
        }}
      />
      <Container sx={{ mt: "2rem", mb: "2rem" }}>
        <Card sx={{ padding: "0.5rem 1rem" }}>
          <Grid container spacing={2}>
            <Grid item md={8}>
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
                  question asked. Now you can sit back and relax, we will
                  provide you best possible solutions in most reasonable prices.
                  Once you make bond with us, we will make sure you don't have
                  to look anywhere else for anything.
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              md={4}
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
        </Card>
      </Container>
    </>
  );
};

export default About;
