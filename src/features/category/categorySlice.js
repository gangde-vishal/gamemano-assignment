import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";

const initialState = {
  categories: [],
  categoryFilter: "all",
  categorizedProducts: [],
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    let url = `/products/categories`;
    try {
      const res = await customFetch.get(url, thunkAPI);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCategorizedProducts = createAsyncThunk(
  "categorizedProducts/getCategorizedProducts",
  async (category, thunkAPI) => {
    let url = `/products/category/${category}`;
    try {
      const res = await customFetch.get(url, thunkAPI);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      // get all categories
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categories = payload;
      })
      .addCase(getCategories.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      // get filtered products
      .addCase(getCategorizedProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategorizedProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categorizedProducts = payload.products;
      })
      .addCase(getCategorizedProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { showLoading, hideLoading, handleChange } = categorySlice.actions;
export default categorySlice.reducer;
