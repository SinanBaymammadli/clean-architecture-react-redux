import React from "react";
import { shallow } from "enzyme";
import App from "./main";

it("renders without crashing", () => {
  shallow(<App />);
});
