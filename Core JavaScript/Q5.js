/**You’re creating a basic login system. Make a login function
with two things: a username and a password. Check if the
username is “admin” and the password is “12345”. If
they’re both correct, show “Login successful”; If not , show
“Invalid credential”.
 */

function LogIn( username, password){
    if(username == "admin" && password == "12345"){
        console.log("login successfully🫵 💕.")
    }else{
        console.log("Invalid credential 👻")
    }
}

LogIn("admin","12345")
LogIn("admin","1234555")