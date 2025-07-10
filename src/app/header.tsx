"use client";

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      // elevation={3}
      sx={{
        width: "97.5%",
        m: 2,
        borderRadius: 4,
        boxSizing: "border-box",
        overflow: "visible",
        backgroundColor: "background.header",
        color: "text.primary",
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, sm: 4 },
        }}
      >
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Sam Reep
        </Typography>
        <Button
          id="basic-button"
          color="inherit"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
          <Typography
            variant="button"
            sx={{ display: { xs: "none", sm: "inline" }, ml: 1 }}
          >
            Menu
          </Typography>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
