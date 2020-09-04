const additions = (num1, num2) => {
  return num1 + num2;
};

let addedNumber = additions(3, 4);
console.log(addedNumber);

const arrayReducer = (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((a, b) => a + b);
};

const theHanson = [
  { firstName: "Taylor", lastName: "Hanson", age: 37 },
  { firstName: "Isaac", lastName: "Hanson", age: 39 },
  { firstName: "Zac", lastName: "Hanson", age: 34 }
];

const sumOfAges = (asd) => {
  const ages = [];
  for (const member of asd) {
    ages.push(member.age);
  }
  let sum = arrayReducer(ages);
  return sum;
};

let hansonAges = sumOfAges(theHanson);
console.log(hansonAges);

module.exports = additions;
module.exports = theHanson;
module.exports = sumOfAges;
