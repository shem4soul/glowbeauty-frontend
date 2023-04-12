import React from "react";

const ProductCard = ({ product }) => (
  <div
    style={{
      border: "1px solid #ddd",
      padding: "1rem",
      borderRadius: "8px",
      textAlign: "center",
      width: "200px",
    }}
  >
    <img
      src={product.image}
      alt={product.name}
      style={{ width: "100%", borderRadius: "8px" }}
    />
    <h3>{product.name}</h3>
    <p>${product.price.toFixed(2)}</p>
    <button
      style={{
        padding: "0.5rem 1rem",
        background: "#f2c0c0",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
