// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptedPass() {
//     return `${this.password}+@chaiAurCode`;
//   }
//   userNameCaps() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const user = new User("chai", "chai@gmail.com", "1234");
// console.log(user.encryptedPass());
// console.log(user.userNameCaps());


// using function instead of class

function UserOne(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    return this;
}

UserOne.prototype.encryptedPassword = function () {
    return `${this.password}@chai`;
}

const newUser = new UserOne("chai", "chai@gmail.com", "1234");
console.log(newUser.encryptedPassword());
