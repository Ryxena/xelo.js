const bubbleSort = require("../algorithms/bubbleSort");
describe("bubbleSort", () => {
  test("can sort an array of positive numbers", () => {
    const input = [28, 21, 4, 83, 5, 46, 95, 81, 23, 8, 53, 24, 9, 82, 98];
    const output = [4, 5, 8, 9, 21, 23, 24, 28, 46, 53, 81, 82, 83, 95, 98];
    expect(bubbleSort(input)).toEqual(output);
  });

  test("can sort an array of negative numbers", () => {
    const input = [
      -28, -21, -4, -83, -5, -46, -95, -81, -23, -8, -53, -24, -9, -82, -98,
    ];
    const output = [
      -98, -95, -83, -82, -81, -53, -46, -28, -24, -23, -21, -9, -8, -5, -4,
    ];
    expect(bubbleSort(input)).toEqual(output);
  });
  test("can sort an array of mixed numbers", () => {
    const input = [
      28, -21, -4, -83, -5, -46, -95, -81, -23, -8, -53, -24, -9, -82, -98,
    ];
    const output = [
      -98, -95, -83, -82, -81, -53, -46, -24, -23, -21, -9, -8, -5, -4, 28,
    ];
    expect(bubbleSort(input)).toEqual(output);
  });
});
