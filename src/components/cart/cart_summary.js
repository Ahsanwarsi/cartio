import React from "react";
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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#A0C5F7",
    height: "50%",
    borderRadius: 5,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
}));

export const CartSummary = ({ category }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.paper}>Summary</div>
    </div>
  );
};
