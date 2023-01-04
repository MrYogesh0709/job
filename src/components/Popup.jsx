import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box, Button, Menu, MenuItem, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)({
  "&:hover": {
    color: "skyblue",
  },
  "&:active": {
    color: "greenyellow",
  },
});
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
        <StyledButton
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
            <Link
              to={"/jobsupportservices"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <MenuItem onClick={handleClose} className="sidebar-name">
                Job Support Services
              </MenuItem>
            </Link>
            <Link
              to={"/certification"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <MenuItem onClick={handleClose} className="sidebar-name">
                Certification
              </MenuItem>
            </Link>
          </Menu>
        </StyledButton>
      </Box>
    </Box>
  );
};

export default Popup;
