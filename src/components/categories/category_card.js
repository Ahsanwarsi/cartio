import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { useHistory } from "react-router-dom";

import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 140,
  },
});

export const CategoryCard = ({ category }) => {
  const classes = useStyles();
  const history = useHistory();
  const navigationHandler = (category) => {
    history.push({ pathname: "/products", state: { category: category } });
  };

  return (
    <Card className={classes.root} onClick={() => navigationHandler(category)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={category.image}
          title={category.name}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align={"center"}>
            {category.name}
          </Typography>
        </CardContent>
      </CardActionArea>

      {/*<CardActions>
        <Button size="small" color="primary">
          Add to Wishlist
        </Button>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>*/}
    </Card>
  );
};
