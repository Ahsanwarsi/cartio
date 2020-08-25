export default (state, action) => {
  let { cart } = state;
  console.log("====================================");
  console.log(cart);
  console.log("====================================");
  switch (action.type) {
    case "ADD_TO_CART":
      cart.products = [action.payload, ...cart.products];
      return { ...state, cart: cart };

    case "REMOVE_FROM_CART":
      cart.products = cart.products.filters(
        (product) => product.id !== action.payload
      );
      return { ...state, cart: cart };

    default:
      return state;
  }
};
