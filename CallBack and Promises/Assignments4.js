/**Assignment 4
Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL (https://jsonplaceholder.typicode.com/todos/1) and returns the parsed JSON response. */

async function fetchData() {
  const uri = `https://jsonplaceholder.typicode.com/todos/1`;
  try {
    const response = await fetch(uri);
    if (!response) {
      throw new Error(`Response status: ${response.status}`);
    } else {
      const json = await response.json();
      console.log(json);
    }
  } catch (error) {
    console.log(error);
  }
}
fetchData();