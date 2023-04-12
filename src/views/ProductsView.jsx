import React from "react";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../controllers/productController";

const ProductsView = () => {
  const products = getAllProducts();

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Our Products</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsView;
