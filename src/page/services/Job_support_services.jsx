import {
  Container,
  Divider,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import Grid from "@mui/material/Unstable_Grid2";
import fullstack from "../../images/home/full-stack.png";
import google from "../../images/home/google.png";
import java from "../../images/home/java.webp";
import aws from "../../images/home/logoaws.png";
import azure from "../../images/home/azure.png";
import net from "../../images/home/net.avif";
import testing from "../../images/home/Testing.png";
import data from "../../images/home/data.jpg";
import Background from "../../components/Background";

const dataStack = [
  {
    img: aws,
    heading: "AWS Job Support",
    para: "We provide support for AWS services like S3, EC2, Load balancers, CFT, CloudWatch, IAM,Code Build, Code Pipeline, other devops tools like Terraform, Docker, Kubernetes, Git, Jenkins, Maven and monitoring tools like Grafana, Prometheus and ELK.",
  },
  {
    img: azure,
    heading: "Azure Job Support",
    para: "We provide support for Azure services like Virtual machines, Blob Storage, Load balancers, ARM Templates, Container service, other devops tools like Terraform, Docker, Kubernetes, Git, Jenkins, Maven and monitoring tools like Grafana, Prometheus and ELK.",
  },
  {
    img: fullstack,
    heading: "Full Stack Job Support ",
    para: "We provide job support for Full Stack developer in Languages like NodeJS, AngularJS and ReactJS",
  },
  {
    img: testing,
    heading: "Testing Job Support",
    para: "We provide job support for both (manual/automation) testing profiles in tools/technologies like Selenium, JIRA, testNG, Cucumber and python",
  },
  {
    img: google,
    heading: "GCP Job Support",
    para: "We provide support for GCP services like Compute Engine,Cloud Storage, Cloud Load balancers, CDM, Container Engine, other devops tools like Terraform, Docker, Kubernetes, Git, Jenkins, Maven and monitoring tools like Grafana, Prometheus and ELK.",
  },
  {
    img: java,
    heading: "Java Job Support",
    para: "We provide job support for core Java, SpringBoot, JS, Swings, JSF, JSP, HTML and Struts",
  },
  {
    img: net,
    heading: "Dotnet Job Support",
    para: "We provide job support for Dotnet core, C# and other related databases",
  },
  {
    img: data,
    heading: "Data Engineering Support",
    para: "We provide data engineering job support for PySpark, Airflow, Hadoop, Hive and Scala",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Job_suopport_services = () => {
  return (
    <>
      <Background />
      <Container sx={{ mt: "2rem" }}>
        <Typography
          variant="h5"
          textAlign={"center"}
          sx={{
            backgroundImage: "linear-gradient(90deg, blue, green)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
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
    </>
  );
};

export default Job_suopport_services;
