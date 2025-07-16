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
import NextLink from "next/link";
import { useState } from "react";

const MENU_OPTIONS = [
  { label: "Home", href: "/" },
  // { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

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
      position="fixed"
      sx={{
        width: "90%",
        left: "5%",
        right: "5%",
        m: 2,
        borderRadius: 4,
        boxSizing: "border-box",
        backgroundColor: "background.header",
        color: "text.header",
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
          {MENU_OPTIONS.map((option) => (
            <NextLink key={option.label} href={option.href} passHref>
              <MenuItem onClick={handleClose}>{option.label}</MenuItem>
            </NextLink>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
