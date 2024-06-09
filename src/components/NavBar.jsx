import { useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Switch,
  Toolbar,
} from "@mui/material";

const pages = ["About", "Projects", "Contact"];

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = !!anchorEl;
  function handleClick(e) {
    setAnchorEl(e.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <IconButton onClick={handleClick}>
        <MenuIcon sx={{ display: { xs: "inital", sm: "none" } }} />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {pages.map((page, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              scrollToSection(page.toLowerCase());
              handleClose();
            }}
          >
            {page}
          </MenuItem>
        ))}
      </Menu>
      <Box sx={{ display: { xs: "none", sm: "initial" } }}>
        {pages.map((page, index) => (
          <Button
            color="inherit"
            key={index}
            onClick={() => scrollToSection(page.toLowerCase())}
          >
            {page}
          </Button>
        ))}
      </Box>
      {/* <Switch /> */}
    </Toolbar>
  );
}

export default NavBar;
