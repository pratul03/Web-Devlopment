// const firstName = "ABC";

// const object = {
//   firstName: "Pratul",
//   lastName: "Makar",
// };

// const { firstName: fn, lastName } = object;
// console.log(fn, lastName);

// const person = {
//   name: "Pratul",
//   address: { village: "Sitarampur", country: "India" },
// };

// const getInformation = ({ name, address }) => {
//   const { village, country } = address;
//   return `${name} live in ${village} of ,${country}`;
// };

// console.log(getInformation(person));

// const company = {
//   name: "TechCo",
//   CEO: {
//     name: "John CEO",
//     age: 45,
//     address: {
//       city: "Silicon Valley",
//       country: "USA",
//     },
//   },
// };

// const getCEOInfo = ({ CEO }) => {
//   const {
//     name,
//     age,
//     address: { city },
//   } = CEO;
//   return { name, age, city };
// };

// const ceoInfo = getCEOInfo(company);

// console.log(ceoInfo.name);
// console.log(ceoInfo.age);
// console.log(ceoInfo.city);

const person = {
  name: "john",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const modifyPerson = (person) => {
  const {
    name,
    age,
    address: { city },
  } = person;
  return {
    fullName: name,
    age: age * 2,
    currentCity: city,
  };
};

const modifiedPerson = modifyPerson(person);

console.log(modifiedPerson.fullName);
console.log(modifiedPerson.age);
console.log(modifiedPerson.currentCity);
console.log(person.name);
console.log(person.age);
console.log(person.address.city);
