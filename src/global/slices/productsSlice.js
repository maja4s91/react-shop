import { createSlice } from "@reduxjs/toolkit";

export const { actions, reducer } = createSlice({
  name: "products",
  initialState: {
    products: ["socks", "shoes"],
  },
  reducers: {
    addProduct(state, { payload }) {
      state.products.push(payload);
    },
    clearProducts(state) {
      state.products = [];
    },
  },
});
