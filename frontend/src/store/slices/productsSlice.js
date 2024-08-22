import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allproducts: [],
  },
  reducers: {
    setallproducts:(state,action)=>{
      state.allproducts=action.payload;
    }
  },
});

export const {setallproducts}=productSlice.actions
export default productSlice.reducer
