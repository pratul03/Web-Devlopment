/**
3. Create a Map to store contact information (name, age, email, location) and implement a function to retrieve contact details by name.
 */

const contact = new Map();
contact.set("pratul", {
    age: 22,
    email: "pratulmakar02@gmail.com",
    location:"Baruipur",
})
contact.set("pritam", {
    age: 21,
    email: "pritamamandal1717@gmail.com",
    location:"Mednipur",
})
contact.set("aritra", {
  age: 21,
  email: "aritrabhattacharyya840@gmail.com",
  location: "Birbhum",
});

console.log(contact.get("pratul"));
console.log(contact.get("aritra"));