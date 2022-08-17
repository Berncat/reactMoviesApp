import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useNavigate, NavLink } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appbar: {
    // background: 'none',
  },
  inactiveLink: {
    color: "white",
    padding: theme.spacing(1),
    fontSize: "1rem",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    borderRadius: "24px",
    background:"#3f30a5",
    textDecoration: "none",
    "&:hover": {
      background: "black",
      color: "white",
    },
  },
  activeLink: {
    color: "black",
    padding: theme.spacing(1),
    fontSize: "1rem",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    background: "white",
    borderRadius: "24px",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const SiteHeader = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const open = Boolean(anchorEl);
  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Upcoming", path: "/upcoming" },
    { label: "Favourites", path: "/movies/favourites" },
    { label: "Must Watch", path: "/movies/mustwatch" },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar
        className={classes.appbar}
        position="fixed"
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            <Box sx={{ fontWeight: "bold" }}>TMDB Client</Box>
            <Typography className={classes.title}>
              <Box sx={{ fontStyle: "italic" }}>
                All you ever wanted to know about Movies!
              </Box>
            </Typography>
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                <NavLink
                  key={opt.label}
                  to={opt.path}
                  className={({ isActive }) =>
                    isActive ? classes.activeLink : classes.inactiveLink
                  }
                  color="inherit"
                  // onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </NavLink>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SiteHeader;
