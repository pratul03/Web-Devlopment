/**
5. You are developing a program to manage a list of unique items. Write a JavaScript program that uses a Set to store a collection of unique numbers. Use the Map object to associate each number with its square. Finally, print both the unique numbers and their corresponding squares
 */

const uniqueItems = new Set([1,2,3,4,5,6,7]);
const squareMap = new Map();

uniqueItems.forEach(num => {
squareMap.set(num, num*num);
})

squareMap.forEach((square, num) => {
    console.log(`${num} : ${square}`);
})

