import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TodoAdd,
  TodoDelete,
  TodoRequest,
  TodoSelect,
} from "./store/Reducers/Todo";
import { RootState } from "./store";

interface TodoProp {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todos = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");
  const todoList: TodoProp[] = useSelector(
    (state: RootState) => state.todo.value
  );
  const isLoading: boolean = useSelector(
    (state: RootState) => state.todo.feetching
  );
  const filtredTodo: TodoProp[] = useMemo(() => {
    return todoList.filter((el) => el?.completed);
  }, [todoList]);

  useEffect(() => {
    dispatch(TodoRequest());
  }, []);

  return !isLoading ? (
    <ul style={{ listStyle: "none" }}>
      <li>
        <input value={text} onChange={(e) => setText(e.target.value)} />{" "}
        <button
          onClick={() => {
            let newObj = {
              id: Math.floor(Math.random() * 999),
              userId: Math.floor(Math.random() * 999),
              title: text,
              completed: true,
            };
            let newTodo = [newObj].concat(filtredTodo);
            dispatch(TodoAdd(newTodo));
            setText("");
          }}
        >
          ADD
        </button>
      </li>
      {filtredTodo?.map((todo: TodoProp, index) => (
        <li
          key={`todo${index}${todo.id}`}
          data-testid="todo"
          onClick={() => dispatch(TodoSelect(todo))}
        >
          {todo.title}
          <button onClick={() => dispatch(TodoDelete(todo))}>x</button>
        </li>
      ))}
    </ul>
  ) : (
    <p>Loading....</p>
  );
};

export default Todos;
