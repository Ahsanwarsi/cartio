import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Query } from "react-apollo";
import { ALL_USERS } from "../../apollo/queries";

import { ProductsGrid } from "../../components/product/products_grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <div className={classes.paper}>
        <Query query={ALL_USERS}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) {
              console.log("###########> " + error);
              return <p>Error :(</p>;
            }
            return <ProductsGrid users={data.users.data} />;
          }}
        </Query>
      </div>
    </Container>
  );
}
//<ProductsGrid />
