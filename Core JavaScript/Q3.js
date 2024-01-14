/**
Use a nested ternary operator to check that a number is
positive, negative or zero. You have to print “positive” if
the number is positive and similarly for negative and zero
also.

 */

function checker(num){
let x = (num==0)?"Zero":(num<0)?"Negative":"Positive";
console.log(x)
}
checker(0)
checker(-7)
checker(7)//Siuuuuu