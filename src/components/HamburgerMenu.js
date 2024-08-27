import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Logo from "../assets/logo.jfif"; // Adjust the path as needed
import "../styles/HamburgerMenu.css";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-menu">
      <IconButton onClick={() => setOpen(true)} color="primary">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div style={{ display: "flex", alignItems: "center", padding: "16px" }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "20px" }}
          />
        </div>
        <List>
          {["Home", "About", "Services", "Contact"].map((text) => (
            <ListItem button key={text} onClick={() => setOpen(false)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
