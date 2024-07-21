/**
2. You have an object representing a customer order with properties orderId, productName, and quantity. Use destructuring to extract and print these properties.
    
    let order = {
        orderId: "123456",
        productName: "Laptop",
        quantity: 2,
    };

 */

const order = {
  orderId: "123456",
  productName: "Laptop",
  quantity: 2,
};

const { orderId : Id, productName: name , quantity } = order;

console.log(`OrderId of the order is : ${Id}`);
console.log(`productName of the order is : ${name}`);
console.log(`quantity of the order is : ${quantity}`);
