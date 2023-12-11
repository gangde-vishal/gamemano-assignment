import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";

const initialState = {
  isLoading: false,
  products: [],
  totalProducts: 0,
};

export const getAllProducts = createAsyncThunk(
  "allProducts/getProducts",
  async (_, thunkAPI) => {
    let url = `/products`;
    try {
      const res = await customFetch.get(url, thunkAPI);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // get all products
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products = payload.products;
      })
      .addCase(getAllProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { showLoading, hideLoading } = allProductsSlice.actions;
export default allProductsSlice.reducer;
