import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

test("render all the compenent", () => {
  render(<MockTodo />);
  const blocElement = screen.getByRole("render-component");
  expect(blocElement).toBeInTheDocument();
});

test("sould able to add a value in the input and delete the value after the click", () => {
  render(<MockTodo />);
  //GET INPUT
  const InputElement = screen.getByPlaceholderText("Add a new task here...");
  expect(InputElement).toBeInTheDocument();

  //PUT VALUE IN THE INPUT
  userEvent.type(InputElement, "faire les courses");
  expect(InputElement.value).toBe("faire les courses");

  //GET BUTTON
  const buttonElement = screen.getByText("Add");
  expect(buttonElement).toBeInTheDocument();

  //CHECK IF THE INPUT IS EMPTY AFTER THE CLICK
  userEvent.click(buttonElement, "");
  expect(InputElement.value).toBe("");
});

test("sould render a list of component", () => {
  render(<MockTodo />);

  //GET INPUT
  const InputElement = screen.getByPlaceholderText("Add a new task here...");
  expect(InputElement).toBeInTheDocument();

  //GET BUTTON
  const buttonElement = screen.getByText("Add");
  expect(buttonElement).toBeInTheDocument();

  //DATA TO RENDER
  const data = [
    "Go Grocery Shopping",
    "Go Grocery Shopping",
    "Go Grocery Shopping",
  ];
  //POUR CHAQUE DATA
  data.forEach((el) => {
    fireEvent.change(InputElement, { target: { value: el } });
    fireEvent.click(buttonElement);
    //CONNAITRE LA DIFFERENCE
    // userEvent.type(InputElement, { target: { value: el } });
    // userEvent.click(buttonElement);
  });

  const divElement = screen.queryAllByText(/Go Grocery Shopping/i);
  expect(divElement.length).toBe(3);
});
