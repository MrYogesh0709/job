import { List, ListItemButton, ListItemIcon, styled } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Link } from "react-router-dom";
import logo from "../images/logo/logo1.png";
import { Box } from "@mui/system";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const StyledListItemText = styled(ListItemText)({
  "&:hover": {
    color: "skyblue",
  },
  "&:active": {
    color: "greenyellow",
  },
});

const Sidebar = () => {
  return (
    <>
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

      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <StyledListItemText primary="Home" />
          </ListItemButton>
        </Link>

        <Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <StyledListItemText primary="About Us" color="black" />
          </ListItemButton>
        </Link>

        <Link
          to="/services"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <StyledListItemText primary="Services" />
          </ListItemButton>
        </Link>

        <Link
          to="/contact"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <ContactPageIcon />
            </ListItemIcon>
            <StyledListItemText primary="Contact Us" color="black" />
          </ListItemButton>
        </Link>
        <Link
          to="/workwithus"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <Diversity3Icon />
            </ListItemIcon>
            <StyledListItemText primary="Work With Us" color="black" />
          </ListItemButton>
        </Link>
      </List>
    </>
  );
};

export default Sidebar;
