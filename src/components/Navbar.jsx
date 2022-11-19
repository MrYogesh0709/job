import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import Sidebar from "./Sidebar";
import Popup from "./Popup";

import logo from "../images/logo/logo2.png";

const StyledButton = styled(Button)({
  "&:hover": {
    color: "skyblue",
  },
  "&:active": {
    color: "greenyellow",
  },
});

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container>
        <Toolbar disableGutters>
          <Sidebar />
          <Link to="/">
            <Box display="flex" justifyContent={"center"} alignItems="center">
              <img src={`${logo}`} alt="aobut_us" loading="lazy" size="cover" />
            </Box>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
              <StyledButton sx={{ my: 2, color: "white", display: "block" }}>
                Home
              </StyledButton>
            </Link>
            <Link
              to={"/about"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <StyledButton sx={{ my: 2, color: "white", display: "block" }}>
                About Us
              </StyledButton>
            </Link>
            <Popup />
            <Link
              to={"/contact"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <StyledButton sx={{ my: 2, color: "white", display: "block" }}>
                Contact Us
              </StyledButton>
            </Link>
            <Link
              to={"/workwithus"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <StyledButton sx={{ my: 2, color: "white", display: "block" }}>
                Work With Us
              </StyledButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
