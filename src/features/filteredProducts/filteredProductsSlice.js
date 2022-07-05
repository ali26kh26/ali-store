import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const filteredProductsSlice = createSlice({
  name: "filteredProducts",
  initialState: initialState,
  reducers: {
    search: (state, action) => {
      const { payload } = action;
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
    price: (state, action) => {
      const { payload } = action;
      let filtered = [];
      if (!payload.isWith) {
        filtered = state.filter(
          (p) => p.price >= payload.value[0] && p.price <= payload.value[1]
        );
      } else {
        filtered = payload.data.filter(
          (p) => p.price >= payload.value[0] && p.price <= payload.value[1]
        );
      }

      return filtered;
    },
    sort: (state, action) => {
      const { payload } = action;
      let filtered = [];

      if (state) filtered = [...state];
      else filtered = [...payload.data];

      switch (payload.value) {
        case "AZ": {
          filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
          return filtered;
        }
        case "ZA": {
          filtered = filtered.sort(function (a, b) {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          });
          return filtered;
        }
        case "HTL": {
          filtered = filtered.sort(function (a, b) {
            if (a.price > b.price) {
              return -1;
            }
            if (a.price < b.price) {
              return 1;
            }
            return 0;
          });
          return filtered;
        }
        case "LTH": {
          filtered = filtered.sort(function (a, b) {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            return 0;
          });
          return filtered;
        }
        default:
          return state;
      }
    },
  },
});

export const { search, price, sort } = filteredProductsSlice.actions;
export default filteredProductsSlice.reducer;
