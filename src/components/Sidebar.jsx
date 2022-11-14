import {
  Avatar,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
      </List>
    </>
  );
};

export default Sidebar;