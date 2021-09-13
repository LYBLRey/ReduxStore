import { createStore } from "redux";

import allReducer from "./reducers";

const store = createStore(
  allReducer,
  {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  }
);

export default store;