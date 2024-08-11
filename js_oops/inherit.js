class User{
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, pass) {
        super(username)
        this.email = email;
        this.pass = pass;
    }

    addCourse() {
        console.log(`A new course was added by teacher Mr.${this.username} `);
    }
}

const chai = new Teacher("Chai", "chai@gmail.com", "123");
chai.addCourse();

const MashalaTea = new User("Chaska Chai");
MashalaTea.logMe();

console.log(chai instanceof User);
