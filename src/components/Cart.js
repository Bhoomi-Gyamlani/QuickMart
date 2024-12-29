import React from "react";
const Cart = ({ cart, deleteFromCart, handlePayNow, cartTotal }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => deleteFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ₹{cartTotal}</h3>
            <button onClick={handlePayNow}>Pay Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
