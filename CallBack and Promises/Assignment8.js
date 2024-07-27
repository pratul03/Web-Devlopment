/**
 Assignment 8
Create a function racePromises that takes an array of promises and returns the result of the first promise that
resolves or rejects. Use Promise.race() to implement this.
 */

function racePromises(promises) {
  return Promise.race(promises);
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "promise1 here");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 800, "promise2 here");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "promise3 here");
});

racePromises([promise1, promise2, promise3]).then((result) => {
  console.log(result);
});
