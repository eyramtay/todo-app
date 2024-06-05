import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addToDoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding Todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addTodos } = addToDoReducer.actions;
export const reducer = addToDoReducer.reducer;
