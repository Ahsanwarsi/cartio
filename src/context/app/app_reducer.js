export default (state, action) => {
  let { cart } = state;
  switch (action.type) {
    case "ADD_TO_CART":
      cart.products = [action.payload, ...cart.products];
      return { ...state, cart: cart };

    case "REMOVE_FROM_CART":
      cart.products = cart.products.filter(
        (product) => product.id !== action.payload
      );
      console.log(cart.products);
      return { ...state, cart: cart };

    case "UPDATE_CART":
      const index = cart.products.findIndex(
        (product) => product.id === action.payload.id
      );
      console.log(index);
      console.log(action.payload);
      cart.products[index] = action.payload;
      console.log(cart);
      return { ...state, cart: cart };

    default:
      return state;
  }
};
