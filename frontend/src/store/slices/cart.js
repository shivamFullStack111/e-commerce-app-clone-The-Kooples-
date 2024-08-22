import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    cart:[],
  },
  reducers:{
    additem:(state,action)=>{
       state.cart=[...state.cart,action.payload]
    },
    setCart:(state,action)=>{
      state.cart=action.payload
    }
  }
})

export default cartSlice.reducer
export const {additem,setCart}=cartSlice.actions