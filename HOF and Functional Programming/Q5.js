/**
5. Using the same array of expense objects, use the reduce method to calculate the total amount of all expenses.
 */

const expenses = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

const totalAmount = expenses.reduce((acc, amount) => acc + amount.amount, 0);
console.log(`Total amount of all expenses: ${totalAmount}`);
