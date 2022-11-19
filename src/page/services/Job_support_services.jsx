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
import react from "../../images/home/reactlogo.png";
import data from "../../images/home/data.jpg";
import Background from "../../components/Background";

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
      {/* <Box
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
      /> */}
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
