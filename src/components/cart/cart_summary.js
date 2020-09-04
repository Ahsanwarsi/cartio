import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import { Typography, Button, Box, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EDEDED",
    borderRadius: 5,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
    flex: 1,
    padding: theme.spacing(5),
  },
  title: {
    alignSelf: "center",
    marginBottom: 20,
  },
  product: {
    alignSelf: "center",
    marginBottom: 5,
    marginTop: 5,
  },
  separator: {
    marginLeft: 10,
    marginRight: 10,
  },
}));

export const CartSummary = ({ cart }) => {
  const classes = useStyles();
  const { products } = cart;

  function renderSummaryItem(title, value, key, isTotal) {
    return (
      <div>
        <Box className={classes.product} key={key} display="flex">
          <Box flexGrow={1}>
            <Typography variant={isTotal ? "h6" : "inherit"}>
              {title}
            </Typography>
          </Box>
          <Box>
            <Typography variant={isTotal ? "h6" : "inherit"}>
              {value}
            </Typography>
          </Box>
        </Box>
        {!isTotal && <Divider light={false} />}
      </div>
    );
  }

  function renderProductItem(product) {
    return renderSummaryItem(
      product.name,
      `${product.price} x ${product.quantity} = ${
        product.price * product.quantity
      }`,
      product.id,
      false
    );
  }

  function renderTotal() {
    const total = products.reduce(
      (sum, curr) => sum + curr.price * curr.quantity,
      0
    );
    return renderSummaryItem("Total", "$ " + total, null, true);
  }

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <Typography className={classes.title} variant="h5" component="h2">
          Order Detail
        </Typography>
        {products.map((product) => renderProductItem(product))}
        <Box p={2} />
        {renderTotal()}
      </div>
    </div>
  );
};
