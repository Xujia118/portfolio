import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Box, Button, Menu, MenuItem, MenuList, Switch, Toolbar, Typography } from "@mui/material";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>Xu Jia</Typography>
        <Box>
          <Switch />
          <Button color="inherit">About</Button>
          <Button color="inherit">Skills</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
