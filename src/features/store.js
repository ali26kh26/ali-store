import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice";
import filteredProductsReducer from "./filteredProducts/filteredProductsSlice";
import cartReducer from "./cart/cartSlice";
import filterValuesReducer from "./filterValues/filterValuesSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    filteredProducts: filteredProductsReducer,
    cart: cartReducer,
    filterValues: filterValuesReducer,
  },
});
