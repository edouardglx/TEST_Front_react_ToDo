import TodoFooter from "../TodoFooter";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("sould render a todo footer with the text Followers", () => {
  render(
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks="3" />
    </BrowserRouter>
  );
  const textElement = screen.getByText(/Followers/i);
  expect(textElement).toBeInTheDocument();
});

test("sould render a todo footer with the props passings", () => {
  render(
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks="3" />
    </BrowserRouter>
  );

  const numberOfTask = screen.getByText(/3 tasks left/i);
  expect(numberOfTask).toBeInTheDocument();
});
