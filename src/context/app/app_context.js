import React, { createContext, useReducer } from "react";
import AppReducer from "./app_reducer";

const initialState = {
  cart: {
    products: [
      {
        description: "est",
        id: "1NjQzOTcwOTY3OQ==",
        image: "https://source.unsplash.com/random/",
        name: "Pizza",
        price: 300,
        stock: 5,
      },
      {
        description: "est",
        id: "2NjQzOTcwOTY3OQ==",
        image: "https://source.unsplash.com/random/",
        name: "Handcrafted Metal",
        price: 400,
        stock: 10,
      },
      {
        description: "est",
        id: "3NjQzOTcwOTY3OQ==",
        image: "https://source.unsplash.com/random/",
        name: "Water Bottle",
        price: 60,
        stock: 15,
      },
    ],
  },
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addToCart(product) {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  }

  function removeFromCart(id) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  }

  function updateCart(product) {
    dispatch({
      type: "UPDATE_CART",
      payload: product,
    });
  }

  return (
    <AppContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
        updateCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
