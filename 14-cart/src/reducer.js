const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") return { ...state, cart: [] };
  if (action.type === "REMOVE")
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((item) =>
      item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
    );
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount - 1 } : item
      )
      .filter((item) => item.amount !== 0);
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, item) => {
        cartTotal.total += item.price * item.amount;
        cartTotal.amount += item.amount;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === "LOADING") return { ...state, loading: true };
  if (action.type === "DISPLAY_ITEMS")
    return { ...state, cart: action.payload, loading: false };
};

export default reducer;
