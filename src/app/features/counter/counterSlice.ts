import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  text: string;
}

const initialState: CounterState = {
  value: 0,
  text: "Increase Counter",
};

const counterSlice = createSlice({
  name: "counter", // ** Attached with Store
  initialState,
  reducers: {
    // ** Actions (function(num))
    increaseAction: (state, actionPayload: PayloadAction<number>) => {
      state.value += actionPayload.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increaseAction } = counterSlice.actions;
export default counterSlice.reducer;
