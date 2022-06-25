export const isInArea = (
  area: {
    x: number;
    y: number;
    width: number;
    height: number;
  },
  barcode: {
    x: number;
    y: number;
    width: number;
    height: number;
  }
): boolean => {
  return (
    barcode.x >= area.x &&
    barcode.x + barcode.width <= area.x + area.width &&
    barcode.y >= area.y &&
    barcode.y + barcode.height <= area.y + area.height
  );
};
