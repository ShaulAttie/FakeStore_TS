import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
// import Drawer from "../Drawer";
import logo from "../../assets/unculture.png"

const Header: React.FC = (): JSX.Element => {
  const navigate = useNavigate()

  const { cartQuantity } = useShoppingCart()

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

        <div className="Cart_Login_Header">
          {/* <div className="Signin_Header" onClick={() => navigate("/signin")}>😊<span>Sign In</span></div>
          <div className="Login_Header" onClick={() => navigate("/login")}>😊<span>Log In</span></div> */}
          <div className="Cart_Header" onClick={() => navigate("/cart")}>
            <div className="cart_icon"> 🛒
              <div className="cart_quantity">{cartQuantity}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
