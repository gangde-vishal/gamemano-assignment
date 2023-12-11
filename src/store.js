import { configureStore } from "@reduxjs/toolkit";

import allProductSlice from "./features/allProducts/allProductSlice";
import productSlice from "./features/product/productSlice";
import categorySlice from "./features/category/categorySlice";

export const store = configureStore({
  reducer: {
    allProducts: allProductSlice,
    product: productSlice,
    categories: categorySlice,
  },
});
