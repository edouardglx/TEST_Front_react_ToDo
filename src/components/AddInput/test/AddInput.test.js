import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodo = jest.fn();

test("should render Addcomponent", () => {
  render(<AddInput />);
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  expect(inputElement).toBeInTheDocument();
});

test("add someting in the input", () => {
  render(<AddInput />);

  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  expect(inputElement).toBeInTheDocument();
  fireEvent.change(inputElement, { target: { value: "Faire du shopping" } });
  expect(inputElement.value).toBe("Faire du shopping");
});

test("should be able to call the function when click on the add button", () => {
  render(<AddInput todos={[]} setTodos={mockSetTodo} />);

  const buttonElement = screen.getByText(/Add/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(mockSetTodo).toBeCalled();
});
