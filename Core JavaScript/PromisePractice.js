// const promise = new Promise(function (resolve, reject) {
//   console.log("starting☕☕");
//   if (Math.random() > 0.5) {
//     resolve({ city: "Delhi", temperature: "42" });
//   } else {
//     reject({ code: 402, message: "data not found" });
//   }
// });

// promise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.log("Ending here⚽⚽");
//   });

// const promise1 = new Promise(function (resolve) {
//   resolve("First");
// });
// const promise2 = new Promise(function (resolve) {
//   resolve("second");
// });
// const promise3 = new Promise(function (resolve) {
//   resolve("Third");
// });

// const allPromises = [promise1, promise2, promise3];
// Promise.all(allPromises).then((res) => {
//   console.log(res);
// });

const promise1 = Promise.resolve(8);
const promise2 = Promise.resolve(10);

const promise = new Promise((resolve) => {
  let num1, num2;

  promise1.then((res) => {
    num1 = res;
    if (num1 && num2) {
      resolve(num1 + num2);
    }
  });
  promise2.then((res) => {
    num2 = res;
    if (num1 && num2) {
      resolve(num1 + num2);
    }
  });
});

promise.then((res) => {
  console.log(res);
});
