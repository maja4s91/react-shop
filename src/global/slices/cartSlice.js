import { createSlice } from "@reduxjs/toolkit";

export const { actions, reducer } = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartNumbers: {
      subtotal: 1,
      shippig: 2,
      tax: 3,
      total: 4,
    },
  },
  reducers: {
    addToCart(state, { payload }) {
      // Push to cart
      console.log("Product added");
    },
    removeFromCart(state, { payload }) {
      // remove this item(payload) from cart array
    },
  },
});
