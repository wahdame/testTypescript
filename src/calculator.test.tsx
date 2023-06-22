import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import Todos from "./calculator";

jest.mock("axios");

const dummyTodos = [
  {
    userId: 1,
    id: 1,
    title: "todo 1",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "todo 2",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "todo 3",
    completed: false,
  },
];

test("todos list", async () => {
  //   axios.get = jest.fn().mockResolvedValue({ data: dummyTodos });
  (axios.get as jest.Mock).mockResolvedValue({ data: dummyTodos });

  // axios.get.mockResolvedValue({ data: dummyTodos });
  render(<Todos />);

  const todoList = await waitFor(() => screen.findAllByTestId("todo"));

  expect(todoList).toHaveLength(3);
});

test("todos data", async () => {
  //   axios.get = jest.fn().mockResolvedValue({ data: dummyTodos });

  (axios.get as jest.Mock).mockResolvedValue({ data: dummyTodos });
  render(<Todos />);

  const todoList = await waitFor(() => screen.findAllByTestId("todo"));

  expect(todoList).toMatchSnapshot('<li data-testid="todo">todo 2</li>');
});

test("todos object", async () => {
  const elements = { id: 1, name: "A" }; // should throw assertion error

  expect(elements).toHaveProperty("name");
});

test("a must be either number or String always", () => {
  let response = [{ a: "asdasd", y: 2 }, { a: true }];
  expect(response).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        a: expect.any(String) || expect.any(Boolean),
        y: expect.any(Number) || expect.any(null),
      }),
    ])
  );
});

test("should contain important value in object", () => {
  const object = {
    important: "important",
    ignore: "ignore",
  };

  expect(object).toEqual(
    expect.objectContaining({
      important: "important",
    })
  );
});
