import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import "./styles/App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showPaymentAlert, setShowPaymentAlert] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setIsItemAdded(true);
    setTimeout(() => setIsItemAdded(false), 2000);
  };

  const deleteFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getCartTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayNow = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items to the cart.");
    } else {
      setShowPaymentAlert(true);
      setTimeout(() => setShowPaymentAlert(false), 4000);
    }
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} setShowCart={setShowCart} />
      {isItemAdded && !showCart && (
        <div className="notification">
          <p>Item Added to Cart!</p>
        </div>
      )}
      {showPaymentAlert && (
        <div className="payment-alert">
          <p>Payment Successful!</p>
        </div>
      )}

      <div className="welcome-message">
        <h2>Welcome to QuickMart!</h2>
      </div>

      <div className="content">
        {!showCart ? (
          <ProductList addToCart={addToCart} />
        ) : (
          <Cart
            cart={cart}
            deleteFromCart={deleteFromCart}
            handlePayNow={handlePayNow}
            cartTotal={getCartTotal()}
          />
        )}
      </div>
    </div>
  );
};

export default App;
