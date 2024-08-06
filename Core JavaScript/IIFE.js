// Normal Functions using IIFE (Immediate Invoke Function Expression) is used to reduce global scope pollution through function calls. 
(function chai() {
    console.log(`Chai pio ❤️  Code karo`);
})(); // " ; " is required to end the program know when to end execution of the current IIFE

// using arrow function

( func = () => {
    return console.log(`Chai ho sath toh fir kya baat..❤️`);   
})();

// with params
((input) => {
    return console.log(`${input} pilo guys❤️`);
})(`chai`);
