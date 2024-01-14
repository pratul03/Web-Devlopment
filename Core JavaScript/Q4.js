/**
 * 
Describe the usage of the comma operator in JavaScript
and provide an example.
 */

/**Comma Operator (,) mainly evaluates its operands from left to right sequentially and returns the value of the rightmost operand. A comma operator is used as a separator for multiple expressions at a place that requires a single expression. When a comma operator is placed in an expression, it executes each expression and returns the rightmost expression. */

function countDown1(){
    console.log("This is First function---><><----")
    return "This is First function---><><----"
}
function countDown2(){
    console.log("This is Second function---><><----")
    return "This is Second function---><><----"
}
function countDown3(){
    console.log("This is Third function---><><----")
    return "This is Third function---><><----"
}

let x = (countDown1(),countDown2(),countDown3())
console.log(x)