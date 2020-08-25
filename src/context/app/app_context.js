import React, { createContext, useReducer } from "react";
import AppReducer from "./app_reducer";

const initialState = {
  cart: {
    products: [],
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
  return (
    <AppContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
