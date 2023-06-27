import { createSlice } from "@reduxjs/toolkit";

interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoProp {
  value: todo[];
  success: boolean;
  feetching: boolean;
  error: boolean;
  item: todo;
}

export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
    success: false,
    feetching: false,
    error: false,
    item: {},
  },
  reducers: {
    TodoRequest: (state) => {
      return {
        ...state,
        success: false,
        error: false,
        feetching: false,
      };
    },
    TodoSuccess: (state, action) => {
      return {
        ...state,
        success: true,
        error: false,
        feetching: false,
        value: action.payload,
      };
    },
    TodoError: (state, action) => {
      return {
        ...state,
        success: false,
        error: true,
        feetching: false,
        value: action.payload,
      };
    },
    TodoSelect: (state, action) => {
      return {
        ...state,
        item: action.payload,
        success: false,
        error: false,
        feetching: false,
      };
    },
    TodoDelete: (state, action) => {
      let deleteTodo = state.value?.filter(
        (item: todo) => item.title !== action.payload.title
      );
      return {
        ...state,
        value: deleteTodo,
      };
    },
    TodoAdd: (state, action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  TodoRequest,
  TodoSuccess,
  TodoError,
  TodoSelect,
  TodoDelete,
  TodoAdd,
} = TodoSlice.actions;

export default TodoSlice.reducer;
