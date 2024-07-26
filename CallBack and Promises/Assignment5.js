/**
 * 
Assignment 5
Implement a function multiplyWithCallback that takes an array of numbers and a callback function. The function should multiply each element of the array by 2 and pass the result to the callback.
*/

function multiplyWithCallback(arr, callback) {
  let result = arr.map((element) => element * 2);
    callback(result);
}

multiplyWithCallback([1, 2, 3, 4, 5], (result) => {
  console.log(result);
});
