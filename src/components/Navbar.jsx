import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import {
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Sidebar from "./Sidebar";
import Popup from "./Popup";
import StarBorder from "@mui/icons-material/StarBorder";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import logo from "../images/logo/logo2.png";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [openSub, setOpenSub] = React.useState(true);

  const toggleSlider = () => {
    setOpen(!open);
  };
  const handleClick = () => {
    setOpenSub(!openSub);
  };
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <img src={`${logo}`} alt="aobut_us" loading="lazy" size="cover" />
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}

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
              <Link
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
              </Link>
              <Collapse in={openSub} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={toggleSlider}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse>
            </Drawer>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Home
              </Button>
            </Link>
            <Link
              to={"/about"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                About Us
              </Button>
            </Link>
            <Link
              to={"/services"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Popup />
            </Link>

            <Link
              to={"/contact"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Contact Us
              </Button>
            </Link>
            <Link
              to={"/workwithus"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Work With Us
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
