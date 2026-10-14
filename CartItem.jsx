
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (item, quantity) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity,
      })
    );
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">🛒 Cart ({totalItems})</Link>
      </nav>

      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <p>Discover beautiful plants for your home.</p>
          <Link to="/plants" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Unit Price: ₹{item.price.toFixed(2)}</p>
                  <p>
                    Item Total: ₹
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        handleQuantityChange(item, item.quantity - 1)
                      }
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        handleQuantityChange(item, item.quantity + 1)
                      }
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-button"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <p>Total Items: {totalItems}</p>
            <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>

            <button
              className="checkout-button"
              onClick={() => alert("Checkout Coming Soon!")}
            >
              Checkout
            </button>

            <Link to="/plants" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
