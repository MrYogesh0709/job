import { List, ListItemButton, ListItemIcon } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Link } from "react-router-dom";
import logo from "../images/logo/logo1.png";
import { Box } from "@mui/system";

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
            <ListItemText primary="Home" />
          </ListItemButton>
        </Link>
        <Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" color="black" />
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
            <ListItemText primary="Contact Us" color="black" />
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
            <ListItemText primary="Work With Us" color="black" />
          </ListItemButton>
        </Link>
      </List>
    </>
  );
};

export default Sidebar;
