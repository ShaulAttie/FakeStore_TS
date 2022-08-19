import React from 'react'
import "./CartProduct.css"
import { FormatCurrency } from "../../utilities/formatCurrency";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { ProductInterface } from '../../globalTypes';

interface CartProductProps {
  product: ProductInterface,
  qty: number
}

const CartProduct: React.FC<CartProductProps> = ({ product, qty }) => {

  const { removeFromCart } = useShoppingCart()

  return (
    <div className="cart__product">
      <div className='cart__img'>
        <img src={product.image} alt={product.title} />
      </div>
      <div className='cart__title'>
        <div>{product.title}</div>
        <div>{FormatCurrency(product.price)}</div>
      </div>
      <div className="cart__sub_total">
        <div className="cart__qty">
          x{qty}
        </div>
        {FormatCurrency(product.price * qty)}
        <div className="remove_button">
          <button onClick={() => removeFromCart(product.id)}>x</button>
        </div>
      </div>

    </div>
  )
}

export default CartProduct
