import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {
  // Collapse,
  Drawer,
  styled,
  // List,
  // ListItemButton,
  // ListItemIcon,
  // ListItemText,
} from "@mui/material";
import Sidebar from "./Sidebar";
// import Popup from "./Popup";
// import StarBorder from "@mui/icons-material/StarBorder";
// import DesignServicesIcon from "@mui/icons-material/DesignServices";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import ExpandLess from "@mui/icons-material/ExpandLess";
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
  const [open, setOpen] = React.useState(false);
  // const [openSub, setOpenSub] = React.useState(true);

  const toggleSlider = () => {
    setOpen(!open);
  };
  // const handleClick = () => {
  //   setOpenSub(!openSub);
  // };
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={toggleSlider}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={open} anchor="left" onClose={toggleSlider}>
              <Box
                component="div"
                sx={{
                  width: 250,
                }}
                role="presentation"
                onClick={toggleSlider}
              >
                <Sidebar />
              </Box>
              {/* <Link
                to="/services"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <DesignServicesIcon />
                  </ListItemIcon>
                  <ListItemText primary="Services" />
                  {openSub ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </Link> */}
              {/* <Collapse in={openSub} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={toggleSlider}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse> */}
            </Drawer>
          </Box>

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
            <Link
              to={"/services"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <StyledButton sx={{ my: 2, color: "white", display: "block" }}>
                Services
              </StyledButton>
              {/* <Popup /> */}
            </Link>

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
