import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: "Tausif",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    changeName: (state) => {
      state.name = "Tausif Ahmad";
    },
  },
});

export const { increment, decrement, changeName } = counterSlice.actions;
export default counterSlice.reducer;
