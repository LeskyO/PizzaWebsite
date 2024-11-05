// Menu.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuList } from "../Components/Menulist";
import MenuItem from "../Components/Menuitem";
import "../Styles/Menu.css";

function Menu() {
  const navigate = useNavigate();
 // const [cartItems, setCartItems] = useState([]);

 /* const handleAddToCart = (menuItem) => {
    navigate("/cart", { state: { cartItems } });
    setCartItems((prevCartItems) => [...prevCartItems, menuItem]);
    alert("Order has been placed!");
    
  };*/

  const handleOrderNow = (menuItem) => {
    navigate(`/menu/${menuItem.id}`);
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <div key={key}>
            <MenuItem
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
            <button className="orderBTN" onClick={() => handleOrderNow(menuItem)}>
              Order Now
            </button>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
