/**
 * Assignment 1
Write a function sumAsync that takes two numbers as arguments and uses a callback to return their sum after
a delay of 1 second.
 */

function sumAsync(num1, num2) {
    setTimeout(() => {
        function sum() {
            return num1 + num2;
        }
        console.log(sum());
    }, 1000);
    
}

sumAsync(1, 6);