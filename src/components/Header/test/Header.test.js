import Header from "../Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("should render a header with the title pass in props", () => {
  render(<Header title="todo" />);

  const titlElement = screen.getByRole("heading", { level: 1 });
  expect(titlElement).toBeInTheDocument();

  const titleText = screen.getByText(/Todo/i);
  expect(titleText).toBeInTheDocument();
});
