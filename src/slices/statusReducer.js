import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name: "status-control",
   initialState: {
      status: null,
   },

   reducers: {
      changeStatus(state, action) {
         switch (action.payload.type) {
            case "home":
               return { ...state, status: "home" };
            case "ofice":
               return { ...state, status: "ofice" };
            default:
               return state;
         }
      },
   },
});

export const { changeStatus } = cartSlice.actions;
export default cartSlice.reducer;

///My Code
