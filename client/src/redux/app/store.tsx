import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice.tsx";

// create store
export const store = configureStore({
    reducer:{
        allCart:cartSlice
    }
})