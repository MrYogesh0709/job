// import React from "react";
// import { Box, Button, Fade, Menu, MenuItem } from "@mui/material";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// const Jobpop = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <Box>
//       <Button
//         id="fade-button"
//         aria-controls={open ? "fade-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//         sx={{ color: "black" }}
//       >
//         job support services
//         <ArrowRightIcon />
//       </Button>
//       <Menu
//         id="fade-menu"
//         MenuListProps={{
//           "aria-labelledby": "fade-button",
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Fade}
//         sx={{ position: "fixed", top: -50, left: -200 }}
//       >
//         <MenuItem onClick={handleClose}>aws-job-support</MenuItem>
//         <MenuItem onClick={handleClose}>azure-job-support</MenuItem>
//         <MenuItem onClick={handleClose}>Devops-job-support</MenuItem>
//       </Menu>
//     </Box>
//   );
// };

// export default Jobpop;
