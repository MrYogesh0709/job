import {
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  styled,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Link } from "react-router-dom";
import logo from "../images/logo/logo1.png";
import { Box } from "@mui/system";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import React from "react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const StyledListItemText = styled(ListItemText)({
  "&:hover": {
    color: "skyblue",
  },
  "&:active": {
    color: "greenyellow",
  },
});

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const toggleSlider = () => {
    setOpen(!open);
  };

  const [openSub, setOpenSub] = React.useState(true);
  const handleClick = () => {
    setOpenSub(!openSub);
  };
  return (
    <>
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
          >
            <Box sx={{ width: "100%" }}>
              <Link to="/">
                <img
                  src={`${logo}`}
                  alt="aobut_us"
                  loading="lazy"
                  size="cover"
                  width={"100%"}
                />
              </Link>
            </Box>
            <Box>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "none" }}
                  onClick={toggleSlider}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <StyledListItemText
                      primary="Home"
                      className="sidebar-name"
                    />
                  </ListItemButton>
                </Link>

                <Link
                  to="/about"
                  style={{ color: "inherit", textDecoration: "none" }}
                  onClick={toggleSlider}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <StyledListItemText
                      primary="About Us"
                      className="sidebar-name"
                    />
                  </ListItemButton>
                </Link>

                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <DesignServicesIcon />
                  </ListItemIcon>
                  <ListItemText primary="Services" />
                  {openSub ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openSub} timeout="auto" unmountOnExit>
                  <Link
                    to="/jobsupportservices"
                    style={{ color: "inherit", textDecoration: "none" }}
                    onClick={toggleSlider}
                  >
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <SupportAgentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Job Support" />
                      </ListItemButton>
                    </List>
                  </Link>
                  <Link
                    to="/jobsupportservices"
                    style={{ color: "inherit", textDecoration: "none" }}
                    onClick={toggleSlider}
                  >
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <WorkspacePremiumIcon />
                        </ListItemIcon>
                        <ListItemText primary="certification" />
                      </ListItemButton>
                    </List>
                  </Link>
                </Collapse>

                <Link
                  to="/contact"
                  style={{ color: "inherit", textDecoration: "none" }}
                  onClick={toggleSlider}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <ContactPageIcon />
                    </ListItemIcon>
                    <StyledListItemText
                      primary="Contact Us"
                      className="sidebar-name"
                    />
                  </ListItemButton>
                </Link>
                <Link
                  to="/workwithus"
                  style={{ color: "inherit", textDecoration: "none" }}
                  onClick={toggleSlider}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <Diversity3Icon />
                    </ListItemIcon>
                    <StyledListItemText
                      primary="Work With Us"
                      className="sidebar-name"
                    />
                  </ListItemButton>
                </Link>
              </List>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
