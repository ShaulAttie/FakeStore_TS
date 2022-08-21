import React, { useContext } from "react";
import { ctx } from "../../context";
import { useParams } from "react-router-dom";
import { ProductInterface } from "../../globalTypes";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { FormatCurrency } from "../../utilities/formatCurrency";
import "./ProductDetail.css"


const ProductDetail: React.FC = (): JSX.Element => {
  const state = useContext(ctx);
  const { title } = useParams();
  

  const product: ProductInterface = state?.products.find(
    (product) => product.title.replace("/","").trim() === title?.replace("/","").trim()
  ) as ProductInterface;
  // console.log(product);

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()

  const quantity = getItemQuantity(product?.id)

  return (
    <div className="Prod_Detail_Container">
      <div className="Prod_Detail_img">
        <img src={product.image} alt="product.title" />
      </div>
      <div className="Prod_Detail_info">

        <h1>{product?.title}</h1>
        <div>
          <p>
            {product?.description}
          </p>
        </div>
        <div className="Prod_rateprice">
          <h2>⭐{product?.rating.rate}</h2>
          <h4>{FormatCurrency(product?.price)}</h4>
        </div>
        {quantity === 0
          ? <div><button onClick={() => increaseCartQuantity(product.id)}>+ Add to Cart</button></div>
          : <>
            <div>
              <button onClick={() => decreaseCartQuantity(product.id)}>-</button>{quantity}<span>in cart</span><button onClick={() => increaseCartQuantity(product.id)}>+</button>
            </div>
            <div>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export { ProductDetail };
