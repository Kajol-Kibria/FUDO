
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const data = global?.window?.localStorage.getItem('Item') ? JSON.parse(localStorage.getItem('Item'))
: [];

const initialState = {
    cartItem : data
   
}

const cart = createSlice(
    {
        name:'cart',
        initialState,
        reducers: {
            addToCart(state, action){
                const itemIndex = state.cartItem.findIndex((item)=>item.id === action.payload.id)
                if (itemIndex >= 0) {
                    state.cartItem[itemIndex].count += 1;
                    toast('increased product quantity' ,{
                        position: "bottom-right", })
                    } else{
                        
                        state.cartItem.push({...action.payload, count : 1});
                        toast.success('product added successfully' ,{
                            position: "bottom-right", })
                }
    
    
                localStorage.setItem('Item', JSON.stringify(state.cartItem));
            
        },
        
        decrease(state, action){
            const itemIndex = state.cartItem.findIndex((item)=>item.id === action.payload.id)
            if (action.payload.count === 1) {
                state.cartItem = state.cartItem.filter((item)=>item.id !== action.payload.id);
                toast('product removed successfully' ,{
                    position: "bottom-right", })
                } else{
                    
                    state.cartItem[itemIndex].count -= 1;
                    toast('decreased product quantity' ,{
                        position: "bottom-right", })
            }
            localStorage.setItem('Item', JSON.stringify(state.cartItem));
            },
        clear(state, action){
            state.cartItem = [];
            localStorage.setItem('Item', JSON.stringify(state.cartItem));
        },
        remove(state,action){
            state.cartItem  = state.cartItem.filter((item) => 
                item.id !== action.payload.id);
            localStorage.setItem('Item', JSON.stringify(state.cartItem));
        
            
        }
           
            
            
        }
    }
)

export default cart.reducer;
export const {addToCart, remove, clear, decrease}  = cart.actions;