import { useState, Fragment } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Logo from "@/assets/logo.svg?react";

const drawerWidth = 240;
const navItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Menu",
    url: "/menu",
  },
  {
    label: "Reservations",
    url: "/reservations",
  },
  {
    label: "Order",
    url: "/order",
  },
  {
    label: "Login",
    url: "/login",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const renderDrawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography py={2} variant="h6">
        Little Lemon
      </Typography>
      <Divider />
      <List disablePadding>
        {navItems.map(({ label, url }) => (
          <Fragment key={label}>
            <ListItem>
              <Link underline="hover" href={url}>
                <Typography variant="subtitle1">{label}</Typography>
              </Link>
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar color="default" elevation={0} component="nav">
      <Container sx={{ px: { xs: 3, md: "70px" } }} maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            height: { xs: "72px", md: "80px" },
          }}
        >
          <IconButton
            color="black"
            aria-label="open navigation menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link mr="40px" href="/">
            <Logo />
          </Link>
          <List
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            {navItems.map(({ label, url }) => (
              <ListItem sx={{ px: { sm: 1, md: 2 } }} key={label}>
                <Link underline="hover" href={url}>
                  <Typography color="textPrimary" variant="subtitle1">
                    {label}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: { sm: "none" } }} />
        </Toolbar>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
        >
          {renderDrawer}
        </Drawer>
      </Container>
    </AppBar>
  );
};

export default Navbar;
