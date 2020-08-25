import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CircularProgress } from "@material-ui/core";
import { Query } from "react-apollo";
import { ALL_USERS, CATEGORIES } from "../../apollo/queries";

import { CategoriesGrid } from "../../components/categories/categories_grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Categories() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
      <div className={classes.paper}>
        <CssBaseline />
        <Typography
          variant="h3"
          styles={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          Categories
        </Typography>
        <div className={classes.paper}>
          <Query query={CATEGORIES}>
            {({ loading, error, data }) => {
              if (loading) return <CircularProgress />;
              if (error) return <p>Error :(</p>;
              return <CategoriesGrid categories={data.allCategories} />;
            }}
          </Query>
        </div>
      </div>
    </Container>
  );
}
//<ProductsGrid />
