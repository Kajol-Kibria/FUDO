
import cartReducer from "@/app/features/addtocart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        cart : cartReducer,
    }
    
});
export default store;