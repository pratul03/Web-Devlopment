/**
3. You are given an array of expense objects representing monthly expenses. Each object has properties, amount and category. Use the map method to create a new array that includes the calculated tax for each expense. Assume a tax rate of 10%.
 */

const expenses = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

const tax = 0.1;
const taxExpenses = expenses.map((expense) => {
  return {
    ...expense,
    tax: expense.amount * tax,
  };
});

console.log(
    "New array including tax for each expenses:",
    taxExpenses
);