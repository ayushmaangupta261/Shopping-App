import { CartSlice } from "./slice/CartSlice";
import { configureStore } from "@reduxjs/toolkit";
import {descSlice} from "./slice/descSlice";
// import { useReducer } from "./slice/CartSlice";


export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        desc: descSlice.reducer
    }
});