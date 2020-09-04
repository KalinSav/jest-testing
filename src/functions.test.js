const functions = require("./functions");

test("check that 3 + 4 is equal to 7", () => {
  expect(functions.add(3, 4)).toBe(7);
});

test("check that it is not equal to 7", () => {
  expect(functions.add(3, 5)).not.toBe(7);
});

test("check that it is null", () => {
  expect(functions.isNull()).toBeNull();
});

test("check that it is falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

test("user should be John Doe", () => {
  expect(functions.createUser()).toEqual({
    firstName: "John",
    lastName: "Doe"
  });
});

test("should be less than 10", () => {
  const a = "3";
  const b = 4;
  expect(functions.lessThan(a, b)).toBeLessThan(10);
});

test("does email match regex pattern", () => {
  const regexEmailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  expect(functions.email()).toMatch(regexEmailFormat);
});

test("does user name exist in array", () => {
  expect(functions.arrayOfUsers()).toContain("maria");
});
