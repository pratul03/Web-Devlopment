// fetch("https://jsonplaceholder.typicode.com/todos/5")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/3");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("ending....");
  }
}

// setTimeout(() => {
//   getData();
// }, 1000);

getData();
