import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 250;
const navItems = ["Home", "About", "Experience", "Projects"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src="/images/tangerine.png" alt="" width={40} />
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItemButton key={item} sx={{ textAlign: "center" }}>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#131419", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx ={{color: "#ccd6f6"}}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ display: { xs: "none", sm: "block" }, mr: 2 }}>
            <img src="/images/tangerine.png" alt="" width={40} />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center" }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#ccd6f6" }}>
                {item}
              </Button>
            ))}
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
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        {/* Removed Toolbar if not needed */}
      </Box>
    </Box>
  );
}

export default DrawerAppBar;