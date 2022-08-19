import React, { useContext } from "react";
import { ctx } from "../../context";
import { useParams } from "react-router-dom";
import { ActionInterface, ProductInterface } from "../../globalTypes";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { FormatCurrency } from "../../utilities/formatCurrency";
import "./ProductDetail.css"

interface ProductDetailProps {
  dispatch: React.Dispatch<ActionInterface>;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  dispatch,
}): JSX.Element => {
  const state = useContext(ctx);
  const { title } = useParams();

  const product: ProductInterface = state?.products.find(
    (product) => product.title.trim() === title?.trim()
  ) as ProductInterface;
  console.log(product);

  // const handleClick = () => {
  //   dispatch({ type: "ADD_TO_CART", payload: product });
  // };

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()

  const quantity = getItemQuantity(product?.id)

  return (
    <div className="Prod_Detail_Container">
      <div className="Prod_Detail_img">
        <img src={product.image} alt="product.title"/>
      </div>
      <div className="Prod_Detail_info">


        <h1>{product?.title}</h1>
        <hr />
        <h3>Category: {product?.category}</h3>
        <p>
          <strong>Description:</strong> {product?.description}
        </p>
        <h2>Rate:{product?.rating.rate}</h2>
        {/* <h2>"count: "{product.rating.count}</h2> */}
        <h4>Price: {FormatCurrency(product?.price)}</h4>
        {/* <button onClick={handleClick}>Add to cart</button> */}
        {quantity === 0
          ? <button onClick={() => increaseCartQuantity(product.id)}>+ Add to Cart</button>
          : <>
            <div>
              <button onClick={() => decreaseCartQuantity(product.id)}>-</button>{quantity}<span>in cart</span><button onClick={() => increaseCartQuantity(product.id)}>+</button>
            </div>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </>
        }
      </div>
    </div>
  );
};

export { ProductDetail };
