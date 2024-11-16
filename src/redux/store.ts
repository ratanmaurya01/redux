
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './feature/cardSlice'
import authSlice from "./feature/authSlice";


export const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
    auth : authSlice

  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;