import React, { useContext, useState } from "react";
// import { useSpring, animated } from "react-spring";
import "./Drawer.css";

import { useShoppingCart } from "../../context/ShoppingCartContext";
import DrawerCard from "../../components/DrawerCard";
import { ctx } from "../../context";
import { StateInterface } from "../../globalTypes";

interface DrawerProps {
  isOpen: boolean
}

const Drawer: React.FC<DrawerProps> = ({ isOpen }): JSX.Element => {
  const { cartItems, openCart, cartQuantity, closeCart, getItemQuantity, removeFromCart } = useShoppingCart()

  const state = useContext(ctx) as StateInterface
  console.log(state);

  // const props = useSpring({
  //   left: isOpen ? window.innerWidth - 300 : window.innerWidth,
  //   position: "absolute",
  //   top: 70,
  //   backgroundColor: "#806290",
  //   minHeight: "85vh",
  //   width: "300px"
  // });



  return (
    // <animated.div style={{
    //   left: isOpen ? window.innerWidth - 300 : window.innerWidth,
    //   position: "absolute",
    //   top: 70,
    //   backgroundColor: "#806290",
    //   minHeight: "85vh",
    //   width: "300px"
    // }}>

      <div className="drawer">
        <div className="drawer__header">
          CART
          <button onClick={closeCart}>X</button>
        </div>
        <div className="drawer__items">
          {/* {state?.products?.map(product => cartItems.map(item=> item.id === product.id && <DrawerCard key={item.id} {...item} />))} */}
          {cartItems.map(item => <DrawerCard key={item.id} {...item} />)}

        </div>
      </div>
    // </animated.div>
  );
};

export default Drawer;
