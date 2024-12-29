import React from "react";
import Product from "../data/Product";

const ProductList = ({ addToCart }) => {
  //displayed products
  const products = [
    { id: 1, name: "iPhone 14", price: 70000 },
    { id: 2, name: "MacBook Pro", price: 130000 },
    { id: 3, name: "Samsung Galaxy S21", price: 60000 },
    { id: 4, name: "Dell XPS 13", price: 120000 },
    { id: 5, name: "OnePlus 9", price: 45000 },
    { id: 6, name: "Nike Air Max", price: 8000 },
    { id: 7, name: "Adidas Running Shoes", price: 6000 },
    { id: 8, name: "Samsung Smartwatch", price: 12000 },
    { id: 9, name: "Sony Headphones", price: 15000 },
    { id: 10, name: "HP Pavilion Laptop", price: 55000 },
    { id: 11, name: "Canon EOS Camera", price: 40000 },
    { id: 12, name: "Bose Soundbar", price: 18000 },
    { id: 13, name: "iPad Air", price: 50000 },
    { id: 14, name: "MacBook Air", price: 85000 },
    { id: 15, name: "Samsung Galaxy Buds", price: 8000 },
    { id: 16, name: "Fossil Smartwatch", price: 10000 },
    { id: 17, name: "Ray-Ban Sunglasses", price: 12000 },
    { id: 18, name: "Fitbit Charge 5", price: 9000 },
    { id: 19, name: "Bose QuietComfort Headphones", price: 20000 },
    { id: 20, name: "Sony PlayStation 5", price: 50000 },
    { id: 21, name: "Nike Gym Bag", price: 2500 },
    { id: 22, name: "Adidas Backpack", price: 3000 },
    { id: 23, name: "Leather Wallet", price: 1500 },
    { id: 24, name: "Herschel Duffel Bag", price: 3500 },
    { id: 25, name: "Tommy Hilfiger Watch", price: 8000 },
    { id: 26, name: "Ray-Ban Wallet", price: 2500 },
    { id: 27, name: "Chanel Handbag", price: 45000 },
    { id: 28, name: "Gucci Sneakers", price: 25000 },
    { id: 29, name: "Apple Watch Series 7", price: 40000 },
    { id: 30, name: "Tumi Laptop Bag", price: 12000 },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
