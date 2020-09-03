import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { AppContext } from "../../context/app/app_context";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    height: 350,
  },
  media: {
    height: 140,
  },
  actions: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export const ProductCard = ({ product }) => {
  const classes = useStyles();
  const { addToCart, cart } = useContext(AppContext);
  const hasInCart = cart.products.some((p) => p.id === product.id);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h3">
            {"$" + product.price}
          </Typography>
          {/*<Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>*/}
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.actions}>
        {hasInCart ? (
          <Typography color={"secondary"}>Added to Cart</Typography>
        ) : (
          <Button
            size="small"
            color="primary"
            onClick={() => !hasInCart && addToCart(product)}
          >
            Add to Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
