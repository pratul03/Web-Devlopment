// const user = (username, age, height) => {
//     this.username = username;
//     this.age = age;
//     this.height = height;

//     return this;
// }

//const user1 = new user("Pratul", 22, 5.11);
//console.log(user1); new keyword doesn't work with arrow functions.

function user(username, age, height) {
  this.username = username;
  this.age = age;
  this.height = height;

  return this;
}

const user1 = new user("Pratul", 22, 5.11);
console.log(user1);
