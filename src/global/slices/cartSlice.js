import { createSlice } from "@reduxjs/toolkit";

export const { actions, reducer } = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartNumbers: {
      subtotal: 0,
      shipping: 0,
      tax: 0,
      total: 0,
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
    incrementItemQuantity(state, { payload }) {
      state.items = state.items
        .map((i) =>
          i.id === payload.item.id
            ? { ...i, quantity: i.quantity + payload.amount }
            : i
        )
        .filter((i) => i.quantity > 0);
    },
    calculateCartNumbers(state) {
      // state.cartNumbers=

      let subtotal = 0,
        shipping = 0,
        tax = 0,
        total = 0;

      for (const item of state.items) {
        subtotal += item.price * item.quantity;
        shipping += item.quantity * 2;
      }
      tax = subtotal * 0.1;
      total = subtotal + shipping + tax;

      // here reseting object to new object with variables that are coming from this scope
      state.cartNumbers = {
        subtotal,
        shipping,
        tax,
        total,
      };
    },
  },
});
