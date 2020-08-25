import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { CategoryCard } from "./category_card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    //backgroundColor: "#b5b5b5",
    margin: "10px",
  },
}));

export const CategoriesGrid = ({ categories }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        alignItems={"center"}
        justify={"center"}
        container
        spacing={10}
        style={{ padding: "24px" }}
      >
        {categories.map((category) => (
          <Grid key={category.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <CategoryCard key={category.id} category={category} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
