import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
};

const filteredProductsSlice = createSlice({
  name: "filteredProducts",
  initialState: initialState,
  reducers: {
    search: (state, action) => {
        const {payload}=action;
        let filtered = [];
        if (!payload.isWith) {
          filtered = state.filter((p) =>
            p.name.toUpperCase().includes(payload.value.toUpperCase())
          );
        } else {
          filtered = payload.data.filter((p) =>
            p.name.toUpperCase().includes(payload.value.toUpperCase())
          );
        }
        return filtered;
    },
    deleteTodo: (state, action) => {
      const filtered = state.filteredProducts.filter(
        (item) => item.id !== action.payload.id
      );
      state.filteredProducts = filtered;
    },
    completeTodo: (state, action) => {
      const selectedTodo = state.filteredProducts.find(
        (item) => item.id === action.payload.id
      );
      selectedTodo.completed = !selectedTodo.completed;
    },
  },
});

export const { search, completeTodo, deleteTodo } =
  filteredProductsSlice.actions;
export default filteredProductsSlice.reducer;
