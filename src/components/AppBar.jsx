import React, { useState, useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from '@mui/icons-material/Settings';
import logo from '../assets/logo.png';

export default function ButtonAppBar() {
  const [isBasePage, setIsBasePage] = useState(false);
  const [button, setButton] = useState(null);
  const [height, setHeight] = useState({height: 100});

  useEffect(() => {
    setIsBasePage(window.location.pathname === '/');
  }, []);

  useEffect(() => {
    if(isBasePage) {
      setButton(settingsButton);
      setHeight({height: 250});
    } else {
      setButton(menuButton);
      setHeight({height: 100});
    }
  }, [isBasePage]);

  const settingsButton = (
    <IconButton size="large"
    color="inherit"
    edge="end"
    aria-label="settings">
      <SettingsIcon />
    </IconButton>
  );

  const menuButton = (
    <IconButton size="large"
    color="inherit"
    edge="end"
    aria-label="menu">
      <MenuIcon />
    </IconButton>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={height}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="SickChip" className="logo" />
          </Typography>
          {button}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
