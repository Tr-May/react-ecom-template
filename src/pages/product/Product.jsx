import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Product = ({ product }) => {
  const { id, productName, productImage, price } = product;
  const { cartItems, addToCart } = useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={productImage} className="card-img-top" alt={productName} />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">${price}</p>
        <button
          className="btn btn-primary position-relative"
          onClick={() => addToCart(id)}
        >
          Add To Cart
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItem?.count}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Product;
