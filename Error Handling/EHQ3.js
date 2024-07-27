/**
 * 
 *3. You are developing a payment processing module for an e-commerce platform. Implement error handling for the payment transaction process.Create a function processPayment that simulates processing a payment transaction. The function should take payment details (amount, card number, expiration date) as parameters and throw errors under certain conditions:
• If the payment amount is not a positive number, throw an error indicating "Invalid payment amount."
If the card number is not provided or is not a valid credit card number, throw an error indicating "Invalid card number."
If the expiration date is not provided or is in the past, throw an error indicating "Invalid expiration date."
try {
processPayment(50.25, "1234-5678-9012-3456", "12/25");
processPayment(-10, "invalidCardNumber", "05/22"); // Should throw an error: "Invalid payment amount." and "Invalid card number. processPayment(100.75, "9876-5432-1098-7654", "01/20"); // Should throw an error: "Invalid expiration date."
} catch (error) {
console.error(error.message);
}
 */

function processPayment(amount, cardNumber, expirationDate) {
  const errors = [];

  // Validate the payment amount
  if (typeof amount !== "number" || amount <= 0) {
    errors.push("Invalid payment amount.");
  }

  // Function to validate the credit card number
  function validateCreditCard(number) {
    // Remove spaces and dashes
    const cleanedNumber = number.replace(/[^0-9]/g, "");
    // Regular expression for validating credit card numbers
    return /^[0-9]{13,19}$/.test(cleanedNumber);
  }

  // Checking if card number is valid
  if (!cardNumber || !validateCreditCard(cardNumber)) {
    errors.push("Invalid card number.");
  }

  // Validate the expiration date
  if (!expirationDate || !/^\d{2}\/\d{2}$/.test(expirationDate)) {
    errors.push("Invalid expiration date format. Use MM/YY.");
  } else {
    // Parsing expiration date
    const [expiryMonth, expiryYear] = expirationDate.split("/").map(Number);

    if (isNaN(expiryMonth) || isNaN(expiryYear) || expiryMonth < 1 || expiryMonth > 12) {
      errors.push("Invalid expiration date.");
    } else {
      // Checking if the expiration date is in the past
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear() % 100; // Last two digits of the year

      if (
        expiryYear < currentYear ||
        (expiryYear === currentYear && expiryMonth < currentMonth)
      ) {
        errors.push("Invalid expiration date.");
      }
    }
  }

  // If there are multiple errors, throwing them as a single error message
  if (errors.length > 0) {
    throw new Error(errors.join(" "));
  }

  // If everything is valid
  console.log("Payment processed successfully.");
};

// Example usage
try {
  processPayment(50.25, "1234-5678-9012-3456", "12/25");
} catch (error) {
  console.error(error.message);
}

try {
  processPayment(-10, "invalidCardNumber", "08/25");
} catch (error) {
  console.error(error.message);
}
try {
  processPayment(-10, "invalidCardNumber", "08/22");
} catch (error) {
  console.error(error.message);
}

try {
  processPayment(100.75, "9876-5432-1098-7654", "01/20");
} catch (error) {
  console.error(error.message);
}