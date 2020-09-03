import React, { useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CircularProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import { CartList } from "../../components/cart/cart_list";
import { CartSummary } from "../../components/cart/cart_summary";
import { AppContext } from "../../context/app/app_context";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default function Cart() {
  const classes = useStyles();
  const { cart } = useContext(AppContext);

  return (
    <Container component="main" maxWidth="xl" className={classes.container}>
      <div className={classes.paper}>
        <CssBaseline />
        <Typography
          variant="h3"
          styles={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          Cart
        </Typography>
      </div>

      {cart.products.length > 0 ? (
        <Grid container>
          <Grid item xs={6}>
            <div className={classes.paper}>
              {cart.products.length > 0 && (
                <CartList products={cart.products} />
              )}

              {/*<Query query={CATEGORIES}>
            {({ loading, error, data }) => {
              if (loading) return <CircularProgress />;
              if (error) return <p>Error :(</p>;
              return <CategoriesGrid categories={data.allCategories} />;
            }}
          </Query>*/}
            </div>
          </Grid>
          <Grid item xs={6}>
            <CartSummary />
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h6" className={classes.paper}>
          Your cart is currently empty.
        </Typography>
      )}
    </Container>
  );
}
