import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Content from "./components/Content";

test("renders content", () => {
  const component = render(<Content />);
  console.log(component);
});
