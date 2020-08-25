import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Query } from "react-apollo";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function ProductDetail() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
      <div className={classes.paper}>Product Detail</div>
    </Container>
  );
}
