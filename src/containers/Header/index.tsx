import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
// import Drawer from "../Drawer";
import logo from "../../assets/unculture.png"
// import Drawer from "../Drawer";

import {TbShoppingCart} from "react-icons/tb"

const Header: React.FC = (): JSX.Element => {
  const navigate = useNavigate()

  
  const { cartQuantity, openCart, closeCart } = useShoppingCart()
  
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="Header">
      <div className="Container_Header">
        <div className="Logo_Header" onClick={() => navigate("/")}>
          <div>
            <img src={logo} alt="Unculture_Logo" />
          </div>
          <div className="StoreName_Header">UnculturE</div>
        </div>

        <nav className="Header__nav">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
        </nav>

        {/* <button className="drawer_test" onClick={() => setIsOpen(true)}>list</button> */}

        <div className="Cart_Login_Header">
          <div className="Cart_Header" onClick={() => navigate("/cart")}>
            <div className="cart_icon"> <TbShoppingCart/>
              <div className="cart_quantity">{cartQuantity}</div>
            </div>
          </div>
        </div>

        {/* {<Drawer isOpen={isOpen} setIsOpen={setIsOpen}/>} */}


      </div>
    </div>
  );
};

export { Header };
