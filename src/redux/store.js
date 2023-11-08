import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slice/homeSlice";
import { ecApi } from "../services/ecApi";
import authSlice from "./slice/authSlice";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
    reducer: {
        //homeSlice,
        cartSlice,
        [ecApi.reducerPath]: ecApi.reducer,
        authSlice
    
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(ecApi.middleware),
});