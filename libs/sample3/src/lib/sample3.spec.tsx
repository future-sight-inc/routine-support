import { render } from "@testing-library/react";

import Sample3 from "./sample3";

describe("Sample3", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Sample3 />);
    expect(baseElement).toBeTruthy();
  });
});
