const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "John" };
    user["lastName"] = "Doe";
    return user;
  },
  lessThan: (a, b) => {
    const firstNumber = Number(a);
    const secondNumber = Number(b);
    if (typeof firstNumber === "number" && typeof secondNumber === "number") {
      return firstNumber + secondNumber;
    } else {
      return null;
    }
  },
  email: () => "example@example.com",
  arrayOfUsers: () => {
    const users = ["John", "Maria", "Anne"];
    const usersLowercase = users.map((user) => user.toLowerCase());
    return usersLowercase;
  }
};

module.exports = functions;
