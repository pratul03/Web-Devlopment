/**
Assignment 2
Create a function getData that returns a Promise. The Promise should resolve after 2 seconds with a message
"Data fetched successfully."
 */

function getData() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully.");
    }, 2000);
  }).then((res) => {
    console.log(res);
  });
}

getData();