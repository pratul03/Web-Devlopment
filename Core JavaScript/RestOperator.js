// const person = {
//   name: "john",
//   age: 30,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// const { name, ...remaining} = person;

// console.log(remaining);

const getFirstTwo = ([first, second, ...rest]) => {
  return [first, second];
};

console.log(getFirstTwo([1, 2, 3, 4]));
console.log(getFirstTwo([5, 6, 7]));
