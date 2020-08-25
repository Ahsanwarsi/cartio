import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CircularProgress } from "@material-ui/core";
import { useLocation } from "react-router-dom";

import { Query } from "react-apollo";
import { CATEGORY } from "../../apollo/queries";
import { ProductsGrid } from "../../components/product/products_grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Products() {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  const variables = { id: location.state.category.id };
  return (
    <Container component="main" maxWidth="xl">
      <div className={classes.paper}>
        <CssBaseline />
        <Typography
          variant="h3"
          styles={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {location.state.category.name}
        </Typography>
        <div className={classes.paper}>
          <Query query={CATEGORY} variables={variables}>
            {({ loading, error, data }) => {
              if (loading) return <CircularProgress />;
              if (error) return <p>Error :(</p>;

              return <ProductsGrid products={data.category.products} />;
            }}
          </Query>
        </div>
      </div>
    </Container>
  );
}
