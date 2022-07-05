import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortValue: "",
  priceValue: [99, 260],
  searchValue: "",
};

const filteredProductsSlice = createSlice({
  name: "filtereValues",
  initialState: initialState,
  reducers: {
    setSearch: (state, action) => {
      return { ...state, searchValue: action.payload };
    },
    setPrice: (state, action) => {
      return { ...state, priceValue: action.payload };
    },
    setSort: (state, action) => {
      return { ...state, sortValue: action.payload };
    },
  },
});

export const { setSearch, setPrice, setSort } = filteredProductsSlice.actions;
export default filteredProductsSlice.reducer;
