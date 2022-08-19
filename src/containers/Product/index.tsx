import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { FormatCurrency } from "../../utilities/formatCurrency";
import "./Product.css";


interface ProductProps {
  title: string;
  image: string;
  key: number;
  pid: number;
  // description: string;
  price: number;
  rate: number;
  // count: number;
}

const Product: React.FC<ProductProps> = ({ title, image, pid, price, rate }): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${title.trim()}`);
  };


  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()

  const quantity = getItemQuantity(pid)

  return (
    <div className="Product">
      <div className="Product__thumbnail">
        <img src={image} alt={title} onClick={handleClick} />
      </div>
      <h2 className="Product__title">{title}</h2>
      <div className="Product__price">
        <div>⭐{rate}</div>
        <div>{FormatCurrency(price)}</div>
      </div>
      <div className="Product__cartbuttons">
        {quantity === 0
          ? <button onClick={() => increaseCartQuantity(pid)}>+ Add to Cart</button>
          : <>
            <div>
              <button onClick={() => decreaseCartQuantity(pid)}>-</button>{quantity}<span>in cart</span><button onClick={() => increaseCartQuantity(pid)}>+</button>
            </div>
            <button onClick={() => removeFromCart(pid)}>Remove</button>
          </>
        }
      </div>
    </div>
  );
};

export { Product };

// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"