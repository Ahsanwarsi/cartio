import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Badge,
} from "@material-ui/core";

import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ShoppingCart } from "@material-ui/icons";

import AccountCircle from "@material-ui/icons/AccountCircle";
import { Routes } from "../constants";
import { AppContext } from "../context/app/app_context";

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
  const history = useHistory();
  const { cart } = useContext(AppContext);

  return (
    <AppBar position="sticky" color="inherit">
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
          aria-label="Cart"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => history.push({ pathname: "/cart" })}
          color="inherit"
        >
          <Badge badgeContent={cart.products.length} color="primary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
