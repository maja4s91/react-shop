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

      state.items.push({ ...payload, quantity: 1 });
    },
    removeFromCart(state, { payload }) {
      // remove this item(payload) from cart array

      // find index of payload that will be removed
      const index = state.items.findIndex((i) => i.id === payload.id);
      //remove payload from array that has specific index
      state.items.splice(index, 1);
    },
  },
});
