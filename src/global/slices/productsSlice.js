import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";
import { uniq, sortBy } from "lodash";
import { loremIpsum } from "lorem-ipsum";
import { stringSimilarity } from "string-similarity-js";

const DEFAULT_CATEGORY = "All";
data.forEach((d) => (d.description = loremIpsum()));

export const { actions, reducer } = createSlice({
  name: "products",
  initialState: {
    products: data,
    productsFromSearch: data,
    categories: [
      DEFAULT_CATEGORY,
      ...uniq(data.map((product) => product.category)).sort(),
    ],
    selectedCategory: DEFAULT_CATEGORY,
    single: data[0],
    singleSimilarProducts: data.slice(0, 4),
    searchTerm: "",
  },
  reducers: {
    setSearchTerm(state, { payload }) {
      // Reset nav bar
      state.productsFromSearch = state.products;
      state.selectedCategory = DEFAULT_CATEGORY;
      //
      state.searchTerm = payload;
      if (payload.length > 0) {
        // Search Operations using stringSimilarity to get the score that will be used to sort it
        state.productsFromSearch.forEach((p) => {
          p.simScore = stringSimilarity(`${p.name} ${p.category}`, payload);
        });
        // Rendering productsFromSearch according to score match using sortBy
        state.productsFromSearch = sortBy(
          state.productsFromSearch,
          "simScore"
        ).reverse();
      } else {
        state.productsFromSearch = state.products;
      }
    },
    setSelectedCategory(state, { payload }) {
      // Reset navbar
      state.searchTerm = "";
      //
      state.selectedCategory = payload;
      // First to reset productFromSearch because it can be reorganized
      state.productsFromSearch = state.products.filter((p) =>
        payload === DEFAULT_CATEGORY ? true : p.category === payload
      );
    },
    setSingle(state, { payload: id }) {
      const product = state.products.find((p) => p.id === +id);
      state.single = product;

      // Get the similar products
      state.singleSimilarProducts = state.products.filter(
        (p) => p.category === product.category && p.id !== product.id
      );
    },
  },
});
