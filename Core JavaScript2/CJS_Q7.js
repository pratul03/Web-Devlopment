/**
7. Tasks:
• Create an object named calculator with methods add, subtract, and multiply.
• Implement the calculate method in the calculator object, which takes an operation ('add', 'subtract', or 'multiply') and two numbers.
• Use call to perform an addition operation using the calculate method.
• Use apply to perform a multiplication operation using the calculate method with arguments as an array.
• Create another object named discountCalculator with a discount percentage property and a method
applyDiscount.
• Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and can be reused.
 */

const calculator = {
  add: function (a, b) {
    return `Addition of ${a} and ${b} is ${a + b}`;
  },
  subtract: function (a, b) {
    return `Subtraction of ${a} and ${b} is ${a - b}`;
  },
  multiply: function (a, b) {
    return `Multiplication of ${a} and ${b} is ${a * b}`;
  },
  calculate: function (operation, a, b) {
    switch (operation) {
      case "add":
        return this.add(a, b);
      case "subtract":
        return this.subtract(a, b);
      case "multiply":
        return this.multiply(a, b);
      default:
        return "Invalid operation";
    }
  },
};

console.log(calculator.calculate.call(calculator, "add", 6, 1));
console.log(calculator.calculate.apply(calculator, ["multiply", 7, 1]));

const discountCalculator = {
  discountPercent: 10,
  applyDiscount: function (price) {
    return `Total discount ${Math.floor(
      price - (price * this.discountPercent) / 100
    )} /-`;
  },
};

const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
console.log(calculateDiscount(999));