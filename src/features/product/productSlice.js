import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";

const initialState = {
  isLoading: false,
  product: null,
};

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id, thunkAPI) => {
    let url = `/products/${id}`;
    try {
      const res = await customFetch.get(url, thunkAPI);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
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
      // get single product
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.product = payload;
      })
      .addCase(getProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { showLoading, hideLoading } = productSlice.actions;
export default productSlice.reducer;
