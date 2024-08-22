import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart";
import userReducer from "./slices/userSlice";
import productReducer from './slices/productsSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    product: productReducer,
  },
});

export default store;
