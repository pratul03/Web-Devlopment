/**
4. Continuing the previous coding challenge, now let's implement the add to cart feature. On calling add to cart closure function, the object of productId, name, quantity and price should be added to the cartitem. Note that if duplicate items with same productId is added, the product quantity must be incremented. Use javascript closures to achieve the output.

    const cart shoppingCart();
    console.log('Cart Items:', cart.getCartItems());

    // OUTPUT: Cart Items: []

    const product1 { id: 1, name: 'Product 1', price: 10 };
    const product2 { id: 2, name: 'Product 2, price: 20};
    cart.addItem(product1);
    cart.addItem(product2);
    cart.addItem(product1);
    console.log('Cart Items:', cart.getCartItems());
    
    // OUTPUT:
    // Cart Items: [
    //    (id: 1, name: 'Product 1', price: 10, quantity: 2},
    //    (id: 2, name: 'Product 2', price: 20, quantity: 1 }
    // ]
 */

const shoppingCart = () => {
  const cart = new Array();

  const addItem = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  };

  const getCartItems = () => {
    return cart.slice();
  };

  return { addItem, getCartItems };
};

const cart = shoppingCart();
console.log("Cart Items:", cart.getCartItems());

const product1 = { id: 1, name: "Product 1", price: 10 };
const product2 = { id: 2, name: "Product 2", price: 20 };
cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);
console.log("Cart Items:", cart.getCartItems());
