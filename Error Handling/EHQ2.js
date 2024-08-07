/**
 * 
 2. You are working on a user authentication module for a web application. Implement error handling for the login process.Create a function login that simulates the user login process. The function should take the username and password as parameters and throw errors under certain conditions:
If the username is not provided, throw an error indicating "Username is required."
If the password is not provided, throw an error indicating "Password is required."
If the username and password do not match any valid credentials, throw an error indicating "Invalid username or password."
try {
login ("user123", "password123");
login("", "password456"); // Should throw an error: "Username is required."
login ("user456", ""); // Should throw an error: "Password is required."
login("invalidUser", "invalidPassword"); // Should throw an error: "Invalid username or password."
} catch (error) {
console.error(error.message);
}
 */

function login(username, password) {
  if (username === "username123" && password === "password123") {
    return "Login successful";
  }
  if (!username) {
    throw new Error("Username is required.");
  }
  if (!password) {
    throw new Error("Password is required.");
  }
  if (username !== "user123" && password !== "password123") {
    throw new Error("Invalid username or password.");
  }
}

try {
  login("user123", "password123");
} catch (error) {
  console.error(error.message);
}
try {
  login("", "password456"); // Should throw an error: "Username is required."
} catch (error) {
  console.error(error.message);
}
try {
  login("user456", ""); // Should throw an error: "Password is required."
} catch (error) {
  console.error(error.message);
}
try {
  login("invalidUser", "invalidPassword"); // Should throw an error: "Invalid username or password."
} catch (error) {
  console.error(error.message);
}
