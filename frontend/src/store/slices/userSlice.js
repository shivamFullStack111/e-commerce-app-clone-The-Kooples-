import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: true,
    loading: false,
    user: null,
  },
  reducers: {
    setisAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setuser: (state, action) => {
      state.user = action.payload;
    },
    setloading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default userSlice.reducer
export const {setisAuthenticated,setuser,setloading}=userSlice.actions