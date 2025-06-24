import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#ffffff", color: "#333" }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          Home Page
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
