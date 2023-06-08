import React from "react";
import { AppBar as MuiAppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddIconCustom from "../atoms/AddIconMenu";
import LogoutIconMenu from "../atoms/LogoutIconMenu";

const AppBar = () => {
  const handleLogout = () => {
    
  };

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/publisher" style={{ marginRight: "1rem", textDecoration: "none" }}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/publisher/add" style={{ marginRight: "1rem", textDecoration: "none" }}>
          <AddIconCustom/>
        </Button>
        <Button color="inherit" onClick={handleLogout}>
          <LogoutIconMenu/>
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;

