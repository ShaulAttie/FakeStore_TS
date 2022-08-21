import React, { Dispatch, useContext, useState } from "react";
// import { useSpring, animated } from "react-spring";
import "./Drawer.css";

import { useShoppingCart } from "../../context/ShoppingCartContext";
import DrawerCard from "../../components/DrawerCard";
import { ctx } from "../../context";
import { StateInterface } from "../../globalTypes";

import { FormatCurrency } from "../../utilities/formatCurrency";
import CartProduct from "../../components/CartProduct";


interface DrawerProps {
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, setIsOpen }): JSX.Element => {
  const { cartItems, openCart, cartQuantity, closeCart, getItemQuantity, removeFromCart } = useShoppingCart()

  const state = useContext(ctx) as StateInterface
  
  // console.log(state);
  // console.log(cartItems);


  const styles = {
    drawerStyle: {
      left: isOpen ? window.innerWidth - 514 : window.innerWidth,
      // position: "absolute",
      // top: 100,
      // backgroundColor: "white",
      // minHeight: "85vh",
      // width: "510px",
      // zIndex: "5",
      
    }
  } as const


  return (

    <div className="drawer" style={styles.drawerStyle}>
      <div className="drawer__header">
        My Cart
        <button onClick={() => setIsOpen(false)}>X</button>
      </div>
      <div className="drawer__items">
      {cartItems.length !== 0 ? (
        <>
          {state?.products?.map(product => cartItems.map(item => item.id === product.id &&
            <CartProduct key={product.id} product={product} qty={item.quantity} />))}

          <div className="cart__total">

            <span>Total:</span>
            <div>
              {FormatCurrency(cartItems.reduce((total, cartItem) => {
                const item = state?.products.find((i) => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0))}
            </div>
          </div>
        </>
      ) : (
        <h2>Cart is empty</h2>
      )}
      </div>
    </div>
  );
};

export default Drawer;
