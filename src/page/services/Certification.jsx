import { Box, Card, Container, Divider, Typography } from "@mui/material";
import React from "react";
import Background from "../../components/Background";
import service from "../../images/certification/services.png";
import comptia from "../../images/certification/comptia.png";
import aws from "../../images/certification/aws.png";
import kubernets from "../../images/certification/kubernets.png";
import teraform from "../../images/certification/teraform.png";
import pmp from "../../images/certification/pmp.png";
import itil from "../../images/certification/itil.png";
import csm from "../../images/certification/csm.png";
import salesfor from "../../images/certification/salesfor.png";
import azure from "../../images/certification/azure.png";
import cisco from "../../images/certification/cisco.png";
import oracle from "../../images/certification/oracle.png";
import cloud from "../../images/certification/cloud.png";
import snowflake from "../../images/certification/snowflake.png";
import Grid from "@mui/material/Unstable_Grid2";

const dataImage = [
  {
    img: service,
    name: "service",
  },
  {
    img: comptia,
    name: "comptia",
  },
  {
    img: aws,
    name: "aws",
  },
  {
    img: kubernets,
    name: "kubernets",
  },
  {
    img: teraform,
    name: "teraform",
  },
  {
    img: pmp,
    name: "pmp",
  },
  {
    img: itil,
    name: "itil",
  },
  {
    img: csm,
    name: "csm",
  },
  {
    img: salesfor,
    name: "salesfor",
  },
  {
    img: azure,
    name: "azure",
  },
  {
    img: cisco,
    name: "cisco",
  },
  {
    img: oracle,
    name: "oracle",
  },
  {
    img: cloud,
    name: "cloud",
  },
  {
    img: snowflake,
    name: "snowflake",
  },
];

const Certification = () => {
  return (
    <>
      <Background />
      <Container>
        <Box display={"flex"} justifyContent="center">
          <Box
            component={"img"}
            src="https://media.istockphoto.com/id/1136599028/vector/approved-accept-or-certified-icon-medal-with-ribbons-and-check-mark.jpg?s=612x612&w=0&k=20&c=IC-nXrym1xLky-27vFgBIgSR2QBg_-KMCAua9y2c7qs="
            height="200px"
            maxWidth="300px"
          />
        </Box>

        <Typography textAlign={"center"}>
          We provide all IT certifications help/ dumps/ vouchers.
          <br /> If you are planning to give any certification and worried about
          the results.
          <br /> Feel free to contact us:
          <Typography
            component="a"
            color={"blue"}
            href="mailto:advikatechnology.1207@gmail.com"
            sx={{ textDecoration: "none" }}
            target="_blank"
          >
            advikatechnology.1207@gmail.com
          </Typography>
        </Typography>
        <Typography
          mt={"1rem"}
          mb="1rem"
          textAlign={"center"}
          variant="h4"
          textTransform={"capitalize"}
        >
          “100% passing is guaranteed”
        </Typography>

        <Card sx={{ pt: "1rem", pb: "1rem", mb: "2rem", mt: "2rem" }}>
          <Typography variant="h5" textAlign={"center"}>
            All IT Exams Dumps
          </Typography>
          <Divider sx={{ mb: "2rem" }} />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid
              xs={12}
              display="flex"
              justifyContent={"center"}
              gap="2rem"
              flexWrap={"wrap"}
            >
              {dataImage.map((index) => (
                <Box
                  component={"img"}
                  sx={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                  alt={index.name}
                  src={index.img}
                  key={index.img}
                />
              ))}
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default Certification;
