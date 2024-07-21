/**
1. You are building a counter application that tracks the number of times a button is clicked. Implement the counter using closure.
 */

function counter() {
  let count = 0;
  return function () {
    console.log(`times clicked ${count}`);
    count++;
  };
}

const click = counter();
click();
click();
click();
click();
click();
