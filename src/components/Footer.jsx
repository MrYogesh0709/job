import * as React from "react";
import Box from "@mui/material/Box";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Container, Divider, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Footer = () => {
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
    marginBottom: "1rem",
  }));
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#424242",
      }}
      component={"footer"}
    >
      <Container
        width={"95vw"}
        margin="0 auto"
        pt="1rem"
        pb="1rem"
        component={"div"}
        sx={{
          display: {
            xs: "grid",
            md: "flex",
            justifyContent: "space-evenly",
            gap: "1rem",
          },
        }}
      >
        <UserBox mt={"1rem"}>
          <Box
            component={"a"}
            href="mailto:advikatechnology.1207@gmail.com"
            target={"_blank"}
          >
            <EmailOutlinedIcon
              color="primary"
              fontSize="large"
              className="logo"
            />
          </Box>

          <Typography
            variant="h6"
            component="a"
            color={"skyblue"}
            href="mailto:advikatechnology.1207@gmail.com"
            sx={{ textDecoration: "none" }}
            target="_blank"
          >
            advikatechnology.1207@gmail.com
          </Typography>
        </UserBox>
        <Divider
          sx={{ borderColor: "white", display: { xs: "block", md: "none" } }}
        />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "white" }}
        ></Divider>
        <UserBox mt={"1rem"}>
          <Box
            component={"a"}
            href="https://api.whatsapp.com/send?phone=+916280811923"
            target={"_blank"}
          >
            <WhatsAppIcon fontSize="large" color="success" className="logo" />
          </Box>
          <Typography
            variant="h6"
            color={"skyblue"}
            textAlign={"center"}
            component="a"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=+916280811923"
            sx={{ textDecoration: "none" }}
          >
            +91 6280811923
          </Typography>
        </UserBox>
        <Divider
          sx={{ borderColor: "white", display: { xs: "block", md: "none" } }}
        />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "white" }}
        ></Divider>
        <UserBox mt={"1rem"}>
          <Box display={"flex"} gap="1rem">
            <Box
              component={"a"}
              href="https://www.facebook.com/profile.php?id=100071928532135&mibextid=LQQJ4d"
              target="_blank"
              color="#1DA1F2"
            >
              <FacebookIcon className="logo" />
            </Box>
            <Box
              component={"a"}
              href="https://www.instagram.com/invites/contact/?i=9w4xyd67maqe&utm_content=pwb8n3k"
              target="_blank"
            >
              <InstagramIcon color={"primary"} className="logo" />
            </Box>
            <Box component={"a"} href="" target="_blank" color="#229ED9">
              <TwitterIcon className="logo" />
            </Box>
            <Box
              component={"a"}
              href="https://t.me/advika_technology"
              target="_blank"
              color="#1DA1F2"
            >
              <TelegramIcon className="logo" />
            </Box>
          </Box>
          <Box display={"flex"} gap="1rem" alignItems={"center"}>
            <Box component={"a"} href="tel: +91 6280811923">
              <CallOutlinedIcon className="logo" />
            </Box>

            <Typography
              variant="h6"
              color={"skyblue"}
              textAlign={"center"}
              component="a"
              target="_blank"
              href="tel: +91 6280811923"
              sx={{ textDecoration: "none" }}
            >
              +91 6280811923
            </Typography>
          </Box>
          <Typography variant="h7" color={"white"} textAlign="center">
            Copyright © 2022 All rights reserved for &nbsp;
            <Link to={"/"} style={{ color: "skyblue", textDecoration: "none" }}>
              Advika Technology
            </Link>
          </Typography>
        </UserBox>
      </Container>
    </Box>
  );
};

export default Footer;
