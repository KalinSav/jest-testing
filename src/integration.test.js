const additions = require("./integration");
const sumOfAges = require("./integration");

test("unit test - adding two numbers together", () => {
  expect(additions(3, 4)).toBe(7);
});

test("integration testing - adding ages together", () => {
  const theHanson = [
    { firstName: "Taylor", lastName: "Hanson", age: 37 },
    { firstName: "Isaac", lastName: "Hanson", age: 39 },
    { firstName: "Zac", lastName: "Hanson", age: 34 }
  ];
  expect(sumOfAges(theHanson)).toBe(110);
});
