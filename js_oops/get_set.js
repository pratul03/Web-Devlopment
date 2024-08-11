class User{
    constructor(username, pass) {
        this.username = username;
        this.pass = pass;
    }

    get pass() {
        return this._pass.toUpperCase();
    }

    set pass(value) {
        this._pass = value; 
    }
}

const one = new User("Pratul", "Password");
console.log(one);
console.log(one.pass);
