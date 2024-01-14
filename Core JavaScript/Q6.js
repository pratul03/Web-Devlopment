/**You are working on an e-commerce platform. Write a
JavaScript program that takes payment
method(“credit”,”debit”,or”paypal”)as input and uses a
switch state statement to determine and print the
processing fee associated with each payment method. For
example, “credit” may have a processing fee of 2%, “debit”
1.5%, and “paypal” 3%. */

function paymentMethod(method) {
    console.log("The payment method is :"+method);
}

function calculateProcessingFees(totalAmount, method) {
    let processingFees = 0;
    
    switch (method) {
        case "credit":
            processingFees = Math.floor(totalAmount * 0.02);
            console.log("Total processing fees for credit card payment will be: " + processingFees+"₹\-");
            break;
        case "debit":
            processingFees = Math.floor(totalAmount * 0.015);
            console.log("Total processing fees for debit card payment will be: " + processingFees+"₹\-");
            break;
        case "paypal":
            processingFees = Math.floor(totalAmount * 0.03);
            console.log("Total processing fees for PayPal payment will be: " + processingFees+"₹\-");
            break;
        default:
            console.log("Invalid payment method");
    }
    
    return processingFees;
}

let totalAmount = 10000;
let paymentMethodType = "credit";

paymentMethod(paymentMethodType);
calculateProcessingFees(totalAmount,paymentMethodType);

totalAmount = 20000;
paymentMethodType = "debit"
paymentMethod(paymentMethodType);
calculateProcessingFees(totalAmount,paymentMethodType);

totalAmount = 7000;
paymentMethodType = "paypal"
paymentMethod(paymentMethodType);
calculateProcessingFees(totalAmount,paymentMethodType);
