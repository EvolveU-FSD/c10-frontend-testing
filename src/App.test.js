import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  let count = screen.getByTestId("count");
  expect(count).toHaveTextContent("Count is 0");
  const button = screen.getByText("Click me");
  act(() => {
    button.click();
  });

  expect(count).toHaveTextContent("Count is 1");
});

test("renders item#1", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ id: 1, title: "delectus aut autem" }]),
    })
  );
  render(<App />);

  let text = await screen.findByTestId("todo1");
  expect(text).toHaveTextContent("delectus aut autem");
  expect(text).toBeInTheDocument();
});
