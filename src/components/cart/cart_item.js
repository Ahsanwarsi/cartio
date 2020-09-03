import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Grid,
  Card,
  Button,
  Box,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { AppContext } from "../../context/app/app_context";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 200,
    width: "100%",
    flexDirection: "row",
    marginBottom: 20,
  },
  media: {
    height: 200,
    width: 200,
  },
  delete_button: {
    marginLeft: 10,
    color: "#ec0101",
  },
}));

export const CartItem = ({ product }) => {
  const classes = useStyles();
  const { removeFromCart, updateCart } = useContext(AppContext);
  //const hasInCart = cart.products.some((p) => p.id == product.id);

  if (!product.quantity) product = { ...product, quantity: 1 };
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    updateCart({ ...product, quantity: quantity });
  }, [quantity]);

  function increase() {
    if (product.stock > quantity) setQuantity(quantity + 1);
  }

  function decrease() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  return (
    <Grid item xs={12} md={12}>
      <Card onClick={null} className={classes.root}>
        <CardActionArea>
          <div style={{ display: "flex", flex: 1 }}>
            <CardMedia
              className={classes.media}
              image={product.image}
              title={product.name}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="h4">
                {"$" + product.price}
              </Typography>

              <Box display="flex" alignItems="center">
                <Button variant="contained" color="primary" onClick={increase}>
                  <Typography variant="h5">+</Typography>
                </Button>
                <Typography
                  gutterBottom
                  variant="h4"
                  style={{ padding: 10, marginTop: 15 }}
                >
                  {quantity}
                </Typography>
                <Button variant="contained" color="primary" onClick={decrease}>
                  <Typography variant="h5">-</Typography>
                </Button>

                <IconButton
                  className={classes.delete_button}
                  onClick={() => removeFromCart(product.id)}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
