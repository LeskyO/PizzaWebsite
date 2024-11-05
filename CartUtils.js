// cartUtils.js

// Placeholder cart data
let cartItems = [];

export const addToCart = (item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    // If item already exists in the cart, update its quantity
    existingItem.quantity += 1;
  } else {
    // If item doesn't exist in the cart, add it
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    };
    cartItems.push(newItem);
  }
};

export const getCartItems = () => {
  return cartItems;
};

export const clearCart = () => {
  cartItems = [];
};
