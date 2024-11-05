import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cartpizza from "../Pictures/cartpizza.jpg";
import "../Styles/Cart.css";

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = location.state || [];

  const handleRemoveItem = (itemId) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      navigate("/cart", { state: { cartItems: updatedCartItems } });
    }
  };

  const handlePlaceOrder = () => {
    alert("Placing order:", cartItems);
    navigate("/cart", { state: { cartItems: [] } });
    window.location.reload();
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <div>
      <div className="cart">
        <div
          className="cartTop"
          style={{ backgroundImage: `url(${Cartpizza})` }}
        ></div>
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <div>
            <p className="emptyCart">Your cart is empty.</p>
            <button onClick={() => navigate("/menu")}>Back to Menu</button>
          </div>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="cartItem">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>N{item.price}</p>
                    <p><b>Description:</b> {item.description}</p>
                    <p><b>Quantity:</b> {item.quantity}</p>
                  </div>
                </div>
                <button onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {cartItems.length > 0 && (
          <div className="order">
            <h4>Total Price: N{calculateTotalPrice()}</h4>
            <button onClick={handlePlaceOrder}>Place Order</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
