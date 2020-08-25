import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Routes } from "../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Cartio
        </Typography>

        <Button component={Link} to={Routes.root} color={"inherit"}>
          Home
        </Button>

        <Button component={Link} to={Routes.categories} color={"inherit"}>
          Categories
        </Button>

        <Button component={Link} to={Routes.login} color={"inherit"}>
          Login
        </Button>

        <Button component={Link} to={Routes.register} color={"inherit"}>
          Register
        </Button>

        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          //onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
