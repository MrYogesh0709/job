import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React from "react";
import { Link } from "react-router-dom";

const Popup = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };
  return (
    <Box>
      <Box>
        <Button
          sx={{
            my: 2,
            color: "white",
          }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onMouseOver={handleClick}
          component="button"
        >
          Services {open ? <ExpandLess /> : <ExpandMore />}
          <Menu
            sx={{ display: { xs: "none", md: "block" } }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Box display={"flex"} component="div">
                <Typography>
                  <Link
                    to={"/services/job-support-services"}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Job-Serivces
                  </Link>
                </Typography>
                <ArrowRightIcon />
              </Box>
            </MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Button>
      </Box>
    </Box>
  );
};

export default Popup;
