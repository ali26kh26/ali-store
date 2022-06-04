import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice";
import filteredProductsReducer from "./filteredProducts/filteredProductsSlice";
import cartReducer from "./cart/cartSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    filteredProducts: filteredProductsReducer,
    cart: cartReducer,
  },
});
