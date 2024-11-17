import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import counterSlice from "./features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
