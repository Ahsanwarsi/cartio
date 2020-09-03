import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "../components/header";
import { ApolloProvider } from "react-apollo";
import client from "../apollo";
import { AppProvider } from "../context/app/app_context";
import "./App.css";

//Pages
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Home } from "../pages/home";
import { Categories } from "../pages/categories";
import { Products } from "../pages/product";
import { Cart } from "../pages/cart";

function App() {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
          <Switch>
            <Route path="/categories" exact component={Categories} />
            <Route path="/products" exact component={Products} />
          </Switch>

          <Switch>
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </Router>
      </AppProvider>
    </ApolloProvider>
  );
}

export default App;
