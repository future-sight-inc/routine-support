import { BARCODE_FRAME_WIDTH } from "./constants";
import { isInArea } from "./utils";

const area = {
  x: 70,
  y: 280,
  width: BARCODE_FRAME_WIDTH,
  height: BARCODE_FRAME_WIDTH,
};

describe("isInArea", () => {
  it("Whole barcode above area", () => {
    const barcode = {
      x: 80,
      y: 0,
      width: 50,
      height: 50,
    };

    expect(isInArea(area, barcode)).toBeFalsy();
  });

  it("Whole barcode under area", () => {
    const barcode = {
      x: 80,
      y: 550,
      width: 50,
      height: 50,
    };

    expect(isInArea(area, barcode)).toBeFalsy();
  });

  it("Top border above the area, bottom border in the area", () => {
    const barcode = {
      x: 80,
      y: 60,
      width: 50,
      height: 50,
    };

    expect(isInArea(area, barcode)).toBeFalsy();
  });

  it("Top border in the area, bottom border under the area", () => {
    const barcode = {
      x: 80,
      y: 500,
      width: 50,
      height: 50,
    };

    expect(isInArea(area, barcode)).toBeFalsy();
  });

  it("Whole barcode on the left of the area", () => {
    const barcode = {
      x: 0,
      y: 300,
      width: 50,
      height: 50,
    };

    expect(isInArea(area, barcode)).toBeFalsy();
  });

  it("Whole barcode on the right of the area", () => {
    const barcode = {
      x: 350,
      y: 300,
      width: 50,
      height: 50,
    };

    expect(isInArea(area, barcode)).toBeFalsy();
  });

  it("Left border on the left of the area, right border in the area", () => {
    const barcode = {
      x: 60,
      y: 300,
      width: 50,
      height: 50,
    };

    expect(isInArea(area, barcode)).toBeFalsy();
  });

  it("Left border in the area, right border on the right of the area, ", () => {
    const barcode = {
      x: 300,
      y: 300,
      width: 50,
      height: 50,
    };

    expect(isInArea(area, barcode)).toBeFalsy();
  });

  it("Barcode overflows area", () => {
    const barcode = {
      x: 50,
      y: 250,
      width: 300,
      height: 300,
    };

    expect(isInArea(area, barcode)).toBeFalsy();
  });

  it("Barcode is exact same as the area", () => {
    const barcode = area;

    expect(isInArea(area, barcode)).toBeTruthy();
  });

  it("Small barcode is inside the area", () => {
    const barcode = {
      x: 80,
      y: 300,
      width: 50,
      height: 50,
    };

    expect(isInArea(area, barcode)).toBeTruthy();
  });
});
