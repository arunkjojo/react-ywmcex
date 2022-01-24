import { createSlice } from '@reduxjs/toolkit';
export const countSlice = createSlice({
  name: 'count',
  initialState: {
    value: 1,
  },
  reducers: {
    increase_count: (state) => {
      state.value += 1;
    },
    decrease_count: (state) => {
      if (state.value > 0) state.value -= 1;
    },
  },
});
export const { increase_count, decrease_count } = countSlice.actions;
export default countSlice.reducer;
