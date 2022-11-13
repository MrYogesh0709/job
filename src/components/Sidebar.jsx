import {
  Avatar,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import HomeIcon from "@mui/icons-material/Home";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{
          width: 56,
          height: 56,
          margin: "0.5rem auto",
          padding: "1rem",
        }}
      />
      <Divider />
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
          to="/services"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Services" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </Link>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default Sidebar;
