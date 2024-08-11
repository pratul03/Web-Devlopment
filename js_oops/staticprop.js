class User {
  constructor(username) {
    this.username = username;
  }

  LogMe() {
    console.log(`Username is ${this.username}`);
  }

  static createId() {
    return `chai@123`;
  }
}
// static keyword can be used for both the property and method of the declared class and only accessible for the class.
console.log(User.createId());

const chai = new User("Mr. Chai");
// console.log(chai.createId());

class teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const newUser = new teacher("Mr. Chai", "chai@#gmail.com");
//console.log(newUser);
//newUser.LogMe()
console.log(newUser.createId());
