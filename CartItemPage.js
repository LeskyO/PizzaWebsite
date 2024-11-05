import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MenuList } from "../Components/Menulist";
import "../Styles/CartItemPage.css";

function MenuItemPage({ cartItems, setCartItems }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const menuItem = MenuList.find((item) => item.id === parseInt(id));
  const [selectedQuantity, setSelectedQuantity] = useState(1); // Track the selected quantity separately
  const [selectedSize, setSelectedSize] = useState("medium"); // Track the selected size separately
  const [selectedCrust, setSelectedCrust] = useState("thin"); // Track the selected crust separately

  const handleAddToCart = () => {
    const itemToAdd = {
      ...menuItem,
      quantity: selectedQuantity, // Use the selected quantity
      size: selectedSize, // Use the selected size
      crust: selectedCrust // Use the selected crust
    };
    setCartItems((prevCartItems) => [...prevCartItems, itemToAdd]);
    alert("Order has been placed!");
  };

  const handleBack = () => {
    navigate("/menu");
  };

  const handleOrderNow = () => {
    navigate("/cart", { state: { cartItems } });
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleCrustChange = (e) => {
    setSelectedCrust(e.target.value);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity >= 1 && newQuantity <= 20) {
      setSelectedQuantity(newQuantity);
    } else {
      // Display an error message or handle the exceeding quantity limit as needed
      alert("Invalid quantity. Please enter a value between 1 and 20.");
    }
  };

  return (
    <div>
      {menuItem ? (
        <div className="menu-item-page">
          <div className="item-image">
            <img src={menuItem.image} alt={menuItem.name} />
          </div>
          <div className="item-details">
            <h2>{menuItem.name}</h2>
            <p><b>Price:</b>N{menuItem.price}</p>
           <p> <b>Description: </b> {menuItem.description}</p> 

            <div>
              <label>Select Crust:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="crust"
                    value="thin"
                    checked={selectedCrust === "thin"}
                    onChange={handleCrustChange}
                  />
                  Thin
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="crust"
                    value="thick"
                    checked={selectedCrust === "thick"}
                    onChange={handleCrustChange}
                  />
                  Thick
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="crust"
                    value="stuffed"
                    checked={selectedCrust === "stuffed"}
                    onChange={handleCrustChange}
                  />
                  Stuffed
                </label>
              </div>
            </div>
            <br></br>
            <div>
              <label>Select Size:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="small"
                    checked={selectedSize === "small"}
                    onChange={handleSizeChange}
                  />
                  Small
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="medium"
                    checked={selectedSize === "medium"}
                    onChange={handleSizeChange}
                  />
                  Medium
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="large"
                    checked={selectedSize === "large"}
                    onChange={handleSizeChange}
                  />
                  Large
                </label>
              </div>
            </div>
            <br></br>
            <div>
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={selectedQuantity}
                min="1"
                max="20"
                onChange={handleQuantityChange}
              />
            </div>

            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleBack}>Back to Menu</button>
            <button className="cartBTN" onClick={handleOrderNow}>
              Go to Cart
            </button>
          </div>
        </div>
      ) : (
        <p>Menu item not found.</p>
      )}
    </div>
  );
}

export default MenuItemPage;