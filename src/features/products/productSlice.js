import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../services/httpService";

export const getAsyncproducts = createAsyncThunk(
  "products/getAsyncproducts",
  async (_, { rejectWithValue }) => {
    try {
      const respons = await http.get("/product");
      return respons.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addAsyncproducts = createAsyncThunk(
  "products/addAsyncproducts",
  async (payload, { rejectWithValue }) => {
    try {
      const respons = await http.post("/product", {
        id: Date.now,
        title: payload.title,
        completed: false,
      });
      return respons.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
export const completeAsyncproducts = createAsyncThunk(
  "products/completeAsyncproducts",
  async (payload, { rejectWithValue }) => {
    try {
      const respons = await http.put(`/product${payload.id}`, {
        title: payload.title,
        completed: !payload.completed,
      });
      return respons.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteAsyncproducts = createAsyncThunk(
  "products/deleteAsyncproducts",
  async (payload, { rejectWithValue }) => {
    try {
      const respons = await http.delete(`/product${payload.id}`);
      return { id: payload.id };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  products: [],
  error: null,
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,

  extraReducers: {
    [getAsyncproducts.fulfilled]: (state, action) => {
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    },
    [getAsyncproducts.rejected]: (state, action) => {
      return {
        ...state,
        products: [],
        loading: false,
        error: action.payload.message,
      };
    },
    [getAsyncproducts.pending]: (state, action) => {
      return { ...state, products: [], loading: true, error: null };
    },
  },
});

export default productsSlice.reducer;
