// Button.test.js (or Button.test.tsx)
const React = require("react");
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "components/Button";

test("it renders a button with the given label", () => {
  render(<Button label="Click Me" onClick={() => ({})} />);
  const button = screen.getByText("Click Me");
  expect(button).toBeInTheDocument();
});

test("it calls the onClick function when clicked", () => {
  const onClickMock = jest.fn();
  render(<Button label="Click Me" onClick={onClickMock} />);
  const button = screen.getByText("Click Me");
  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
