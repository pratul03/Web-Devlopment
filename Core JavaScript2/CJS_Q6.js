/**
6.  Create a simple JavaScript function named display-info that takes two parameters (name and role) and logs a message.
    Use call to invoke the display-info function with specific arguments.
    Use apply to invoke the displayInfo function with arguments passed as an array.
    Create another function named greet that logs a greeting with this context.
    Use bind to create a new function boundGreet with a specific context and log the greeting.
 */

// display function
function displayInfo(name, role) {
  console.log(`Hello everyone I'm ${name} I'm a ${role}.`);
}

// displayInfo using call
displayInfo.call(null, "Pratul", "developer");

// displayInfo using apply
displayInfo.apply(null, ["Pritam", "developer"]);

// greet function
function greet() {
  console.log(`Hello everyone I'm ${this.name}!`);
}

// boundGreet function using bind
const user = { name: "Aritra" };
const boundGreet = greet.bind(user);
boundGreet();
