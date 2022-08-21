import React, { Fragment, useContext } from "react";
import { ctx } from "../../context";
import { StateInterface } from "../../globalTypes";
// import { Product } from "../../containers/Product";
import { useShoppingCart } from "../../context/ShoppingCartContext";

// import { useSpring, animated } from "react-spring";
import CartProduct from "../../components/CartProduct";
import { FormatCurrency } from "../../utilities/formatCurrency";


const Cart: React.FC = (): JSX.Element => {
  const state = useContext(ctx) as StateInterface;

  const { cartItems } = useShoppingCart()

  // console.log(cartItems);
  



  return (

    <>
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
    </>
  );
};

export { Cart };