import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const {getAllByText} = render(<App />);
  const linkElement = getAllByText(/Click me:/i);
  expect(linkElement.length).toBe(4);
});
