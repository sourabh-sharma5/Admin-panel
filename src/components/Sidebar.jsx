import {
  Box, List, ListItem, ListItemIcon, ListItemText, Typography, Drawer, IconButton
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LogoutIcon from "@mui/icons-material/Logout";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GroupOffIcon from "@mui/icons-material/GroupOff";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useState } from "react";

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 240;

  const menuItems = [
    { text: "General", path: "/dashboard", icon: <DashboardIcon /> },
    { text: "Users", path: "/users", icon: <PeopleIcon /> },
    { text: "Billing", path: "/billing", icon: <CreditCardIcon /> },
    { text: "Statistic", path: "/statistic", icon: <AssessmentIcon /> },
    { text: "Inactive", path: "/inactive", icon: <GroupOffIcon /> },
    { text: "Sign out", path: "/signout", icon: <LogoutIcon /> },
  ];

  const drawer = (
    <Box sx={{ bgcolor: 'darkseagreen' , height: "100%", color: "white", p: 2 }}>
      <Typography variant="h6" sx={{ mb: 3, textAlign: "center", fontWeight: "bold" }}>
        🧿 Admin Panel
      </Typography>
      <List>
        {menuItems.map(({ text, path, icon }) => (
          <ListItem button key={text} component={NavLink} to={path} activeclassname="active-link">
            <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Toggle button for mobile */}
      <Box sx={{ position: "fixed", top: 10, left: 10, zIndex: 1201, display: { sm: "none" } }}>
        <IconButton onClick={() => setMobileOpen(!mobileOpen)} sx={{ color: "#1A1B2F" }}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Sidebar for desktop */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
