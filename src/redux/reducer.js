import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addToDoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducers
    //Adding Todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //Removing Todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //Update Todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    // completed
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } =
  addToDoReducer.actions;
export const reducer = addToDoReducer.reducer;
