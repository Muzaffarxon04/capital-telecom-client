import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name: "status-control",
   initialState: {
      status: null,
   },

   reducers: {
      changeLanguage(state, action) {
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

export const { changeLanguage } = cartSlice.actions;
export default cartSlice.reducer;

///My Code
