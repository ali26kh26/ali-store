import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      state.cart = [...state.cart, { ...action.payload.product, quantity: 1 }];
      state.total += action.payload.product.price;
    },
    DECREAMENT: (state, action) => {
      if (action.payload.product.quantity === 1) {
        console.log("1");
        state.cart = state.cart.filter(
          (item) => item._id !== action.payload.product._id
        );
      } else {
        const index = state.cart.findIndex(
          (item) => item._id === action.payload.product._id
        );
        state.cart[index].quantity--;
      }
      state.total -= action.payload.product.price;
    },
    INCREAMENT: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item._id === action.payload.product._id
      );
      state.cart[index].quantity++;
      state.total += action.payload.product.price;
    },
  },
});

export const { ADD_TO_CART, DECREAMENT, INCREAMENT } = cartSlice.actions;
export default cartSlice.reducer;
