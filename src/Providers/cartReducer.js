const cartReducer = (state, action) => {
  const { cart, total } = state;
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART": {
      let cartClone = [...cart];
      const index = cart.findIndex((item) => item._id === payload._id);
      if (index >= 0) {
        let selected = { ...cartClone[index] };
        selected.quantity += 1;
        cartClone[index] = selected;
      } else {
        cartClone = [...cartClone, { ...payload, quantity: 1 }];
      }
      return { cart: cartClone, total: state.total + payload.price };
    }
    case "DECREAMENT": {
      let cartClone = [...cart];
      const index = cart.findIndex((item) => item._id === payload._id);
      let selected = { ...cartClone[index] };
      if (selected.quantity > 1) {
        selected.quantity -= 1;
        cartClone[index] = selected;
      } else {
        cartClone = cartClone.filter((item) => item._id !== payload._id);
      }
      return { cart: cartClone, total: state.total - payload.price };
    }

    case "INCREAMENT": {
      let cartClone = [...cart];
      const index = cart.findIndex((item) => item._id === payload._id);
      let selected = { ...cartClone[index] };
      selected.quantity += 1;
      cartClone[index] = selected;
      return { cart: cartClone, total: state.total + payload.price };
    }
    default:
      return state;
  }
};
export default cartReducer;
