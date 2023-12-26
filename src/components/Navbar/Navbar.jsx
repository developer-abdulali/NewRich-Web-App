// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Logo from "../../images/loggo.png";
// import { Avatar } from "@mui/material";

// const drawerWidth = 240;
// const navItems = [
//   "What is Newrich.com?",
//   "Careers",
//   "The Life Style",
//   "Join the Community",
// ];

// const Navbar = (props) => {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         NewRich
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <div className="box">
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <AppBar
//           component="nav"
//           sx={{
//             backgroundColor: "transparent",
//             boxShadow: "none",
//           }}
//         >
//           <Toolbar>
//             {/* <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ color: "blue", mr: 2, display: { md: "none" }}}
//             >
//               <MenuIcon />
//             </IconButton> */}
//             <Avatar alt="logo" src={Logo} />
//             <Typography
//               variant="h6"
//               component="div"
//               sx={{
//                 flexGrow: 1,
//                 display: { xs: "none", sm: "block" },
//                 color: "#198FFF",
//                 fontSize: "22px",
//                 marginLeft: "10px",
//                 fontStyle: "normal",
//                 fontWeight: 600,
//                 lineHeight: "37.552px",
//               }}
//             >
//               NewRich
//             </Typography>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ color: "blue", display: { md: "none" } }}
//             >
//               <MenuIcon />
//             </IconButton>

//             <Box sx={{ display: { xs: "none", md: "block" } }}>
//               {navItems.map((item) => (
//                 <Button id="links" key={item} sx={{ textTransform: "none" }}>
//                   {item}
//                 </Button>
//               ))}

//               <button id="btn">Login</button>
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <nav>
//           <Drawer
//             container={container}
//             variant="temporary"
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             ModalProps={{
//               keepMounted: true,
//             }}
//             sx={{
//               display: { xs: "none", sm: "block" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </nav>
//       </Box>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Logo from "../../images/loggo.png";
// import { Avatar, useMediaQuery } from "@mui/material";

// const drawerWidth = 240;
// const navItems = [
//   "What is Newrich.com?",
//   "Careers",
//   "The Life Style",
//   "Join the Community",
// ];

// const Navbar = (props) => {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         NewRich
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <div className="box">
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <AppBar
//           component="nav"
//           sx={{
//             backgroundColor: "transparent",
//             boxShadow: "none",
//           }}
//         >
//           <Toolbar>

//             <Avatar alt="logo" src={Logo} />
//             <Typography
//               variant="h6"
//               component="div"
//               sx={{
//                 flexGrow: 1,
//                 display: { xs: "none", sm: "block" },
//                 color: "#198FFF",
//                 fontSize: "22px",
//                 marginLeft: "10px",
//                 fontStyle: "normal",
//                 fontWeight: 600,
//                 lineHeight: "37.552px",
//               }}
//             >
//               NewRich
//             </Typography>
//             {isMobile && (
//   <IconButton
//     color="inherit"
//     aria-label="open drawer"
//     edge="start"
//     onClick={handleDrawerToggle}
//     sx={{
//       color: "blue",
//       display: { xs: "block", sm: "block", md: "none", lg: "none", xl: "none" },
//     }}
//   >
//     <MenuIcon />
//   </IconButton>
// )}

//             <Box sx={{ display: { xs: "none", md: "block" } }}>
//               {navItems.map((item) => (
//                 <Button id="links" key={item} sx={{ textTransform: "none" }}>
//                   {item}
//                 </Button>
//               ))}

//               <button id="btn">Login</button>
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <nav>
//           <Drawer
//             container={container}
//             variant={isMobile ? "temporary" : "permanent"}
//             open={isMobile ? mobileOpen : true}
//             onClose={handleDrawerToggle}
//             ModalProps={{
//               keepMounted: true,
//             }}
//             sx={{
//               display: { xs: "none", sm: "block", lg: "none", xl: "none" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </nav>
//       </Box>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../../images/loggo.png";
import { Avatar, useMediaQuery, useTheme } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  "What is Newrich.com?",
  "Careers",
  "The Life Style",
  "Join the Community",
];

const Navbar = (props) => {
  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h2" sx={{ my: 2 }}>
        NewRich
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="box">
      <Box id="boxx" sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            paddingX: 20,
            [theme.breakpoints.down("sm")]: {
              paddingX: 1,
            },
            [theme.breakpoints.down("md")]: {
              paddingX: 1,
            },
            [theme.breakpoints.down("lg")]: {
              paddingX: 0,
            },
            [theme.breakpoints.down("xl")]: {
              paddingX: 5,
            },
            [theme.breakpoints.down("2xl")]: {
              paddingX: 5,
            },
          }}
        >
          <Toolbar>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  color: "blue",
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "block",
                    lg: "block",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Avatar className="logo" src={Logo} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "#198FFF",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "37.552px",
              }}
            >
              NewRich
            </Typography>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item) => (
                <Button
                  id="links"
                  key={item}
                  sx={{ textTransform: "none", mx: 1 }}
                >
                  {item}
                </Button>
              ))}

              <Button id="btn" sx={{ textTransform: "none", mx: 1 }}>
                Login
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "block", lg: "none", xl: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
};

export default Navbar;
