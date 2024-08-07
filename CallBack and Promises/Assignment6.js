/**
 * 
Assignment 6
Create a function fetchUserDataAndPosts that takes a user ID and fetches the user details and their posts
using separate API calls. Use promise chaining to ensure the posts are retrieved only after the user details are
fetched. Return an object with user details and posts.
 */

async function fetchUserDataAndPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      return fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      )
        .then((response) => response.json())
        .then((posts) => {
          return { user, posts };
        });
    });
}

fetchUserDataAndPosts(1).then((data) => {
  console.log(data);
});
