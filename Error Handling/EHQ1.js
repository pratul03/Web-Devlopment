/**
 You are developing the error handling mechanism for an online shopping cart application The
application allows users to add products to their cart and proceed to checkout Implement error
handling to address different types of errors that might occur during the shopping process.

Task 1: Add Product to Cart Function
Create a function addToCart that simulates adding a product to the shopping cart. The function should take the product details (name, price, quantity) as parameters and throw errors under certain conditions.

I. If the product name is not provided, throw an error indicating Product name is required.

II. If the product price is not a positive number, throw an error indicating Invalid product price.

III. If the quantity is not a positive integer, throw an error indicating Invalid quantity.

Task 2: Checkout Function

Create a function checkout that simulates the checkout process. This function should throw an error if the cart is empty, indicating Cart is empty. Add items before checkout.

####
try {
    addToCart ("Laptop", 1200, 2);
    addToCart("", 30, 1); // Should throw an error: "Product name is required."
    addToCart("Mouse", -15, 3); // Should throw an error: "Invalid product price."
    addToCart("Keyboard", 50, "abc"); // Should throw an error: "Invalid quantity."
    checkout(); // Should throw an error: "Cart is empty. Add items before checkout." 
}
 catch (error) { 
 console.error(error.message);
}
####
 */

function addToCart(name, price, quantity) {
  if (!name) {
    throw new Error("Product name is required.");
  }
  if (typeof price !== "number" || price <= 0) {
    throw new Error("Invalid product price.");
  }
  if (
    typeof quantity !== "number" ||
    quantity <= 0 ||
    !Number.isInteger(quantity)
  ) {
    throw new Error("Invalid quantity.");
  }
}


let cart = [];// shopping cart
function checkout() {
    
  if (!cart || cart.length === 0) {
    throw new Error("Cart is empty. Add items before checkout.");
  }
}

try {
  addToCart("Laptop", 1200, 2);
  addToCart("", 30, 1); // Should throw an error: "Product name is required."
} catch (error) {
  console.error(error.message);
}

try {
  addToCart("Mouse", -15, 3); // Should throw an error: "Invalid product price."
} catch (error) {
  console.error(error.message);
}

try {
  addToCart("Keyboard", 50, "abc"); // Should throw an error: "Invalid quantity."
} catch (error) {
  console.log(error.message);
}

try {
  checkout(); // Should throw an error: "Cart is empty. Add items before checkout."
} catch (error) {
  console.log(error.message);
}
