/**
Assignment 7
Write a function fetchMultipleData that takes an array of URLs and uses Promise.all() to fetch data from all the
URLs concurrently. Return an array of responses.
 */

async function fetchMultipleData(urls) {
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    return Promise.all(promises);
}

const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5',
];

fetchMultipleData(urls)
    .then(responses => {
        console.log(responses);
    })
    .catch(error => {
        console.error(error);
    });
