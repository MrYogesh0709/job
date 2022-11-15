import * as React from "react";
import Box from "@mui/material/Box";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Divider, Typography } from "@mui/material";
import styled from "@emotion/styled";

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
      <Box
        width={"95vw"}
        margin="0 auto"
        pt="1rem"
        pb="1rem"
        component={"div"}
        sx={{
          display: { xs: "grid", md: "flex", justifyContent: "space-around" },
        }}
        gap="1rem"
      >
        <UserBox>
          <EmailOutlinedIcon color="white" fontSize="large" />
          <Typography
            variant="h6"
            component="a"
            color="white"
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
        <UserBox>
          <WhatsAppIcon fontSize="large" />
          <Typography
            variant="h6"
            color={"white"}
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
        <UserBox>
          <Box display={"flex"} gap="1rem">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <TelegramIcon />
          </Box>
          <Box display={"flex"} gap="1rem" alignItems={"center"}>
            <CallOutlinedIcon />
            <Typography
              variant="h6"
              color={"white"}
              textAlign={"center"}
              component="a"
              target="_blank"
              href="tel: +91 9993889052"
              sx={{ textDecoration: "none" }}
            >
              +91 9993889052
            </Typography>
          </Box>
          <Typography variant="h7" color={"white"} textAlign="center">
            Copyright © 2022 All rights reserved for Advika Technology
          </Typography>
        </UserBox>
      </Box>
    </Box>
  );
};

export default Footer;
