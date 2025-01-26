import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isLoading: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsAuth, setIsLoading } = todoSlice.actions;

export default todoSlice.reducer;
