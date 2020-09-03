import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { CartItem } from "./cart_item";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 100,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    //backgroundColor: "#b5b5b5",
    margin: "10px",
  },
}));

export const CartList = ({ products }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};
