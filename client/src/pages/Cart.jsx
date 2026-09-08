import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);

  const FREE_DELIVERY_LIMIT = 999;

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item._id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    updateCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item._id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (item) => item._id !== id
    );

    updateCart(updatedCart);
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const remaining = Math.max(
    FREE_DELIVERY_LIMIT - total,
    0
  );

  const progress = Math.min(
    (total / FREE_DELIVERY_LIMIT) * 100,
    100
  );

  return (
    <div className="cart-page">

      {/* Header */}
      <div className="cart-header">

        <span>🛒 SHOPPING CART</span>

        <h1>Your Cart</h1>

        <p>
          Review your selected products before checkout.
        </p>

      </div>


      {cart.length === 0 ? (

        /* Empty Cart */
        <div className="empty-cart">

          <div className="empty-cart-icon">
            🛒
          </div>

          <h2>Your cart is empty</h2>

          <p>
            Discover delicious traditional products
            and add your favorites to your cart.
          </p>

          <Link to="/">
            <button>
              Explore Products →
            </button>
          </Link>

        </div>

      ) : (

        <>

          {/* Free Delivery Progress */}
          <div className="delivery-box">

            {remaining > 0 ? (
              <>
                <div className="delivery-message">
                  🚚 Add{" "}
                  <strong>₹{remaining}</strong>{" "}
                  more to unlock free delivery!
                </div>

                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${progress}%`,
                    }}
                  ></div>
                </div>

                <small>
                  Free delivery on orders above ₹999
                </small>
              </>
            ) : (
              <>
                <div className="delivery-success">
                  🎉 You've unlocked free delivery!
                </div>

                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{
                      width: "100%",
                    }}
                  ></div>
                </div>
              </>
            )}

          </div>


          {/* Main Cart Layout */}
          <div className="cart-layout">

            {/* Items */}
            <div className="cart-items-section">

              <div className="cart-items-header">
                <h2>
                  Your Items
                </h2>

                <span>
                  {cart.reduce(
                    (count, item) =>
                      count + item.quantity,
                    0
                  )}{" "}
                  items
                </span>
              </div>


              {cart.map((item) => (

                <div
                  className="cart-item"
                  key={item._id}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />


                  <div className="cart-item-info">

                    <span className="cart-item-category">
                      {item.category}
                    </span>

                    <h3>
                      {item.name}
                    </h3>

                    <p className="cart-item-price">
                      ₹{item.price} per item
                    </p>


                    <div className="cart-item-bottom">

                      {/* Quantity */}
                      <div className="quantity-controls">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(
                              item._id
                            )
                          }
                        >
                          −
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(
                              item._id
                            )
                          }
                        >
                          +
                        </button>

                      </div>


                      <strong className="item-subtotal">
                        ₹
                        {item.price *
                          item.quantity}
                      </strong>

                    </div>


                    <button
                      className="remove-button"
                      onClick={() =>
                        removeFromCart(
                          item._id
                        )
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>


            {/* Order Summary */}
            <div className="cart-summary">

              <h2>
                Order Summary
              </h2>


              <div className="summary-row">
                <span>
                  Subtotal
                </span>

                <span>
                  ₹{total}
                </span>
              </div>


              <div className="summary-row">
                <span>
                  Delivery
                </span>

                <span>
                  {total >=
                  FREE_DELIVERY_LIMIT
                    ? "FREE"
                    : "Calculated at checkout"}
                </span>
              </div>


              <hr />


              <div className="summary-total">

                <span>
                  Total
                </span>

                <strong>
                  ₹{total}
                </strong>

              </div>


              <button
                className="checkout-button"
                onClick={() =>
                  alert(
                    "Checkout prototype coming soon!"
                  )
                }
              >
                Proceed to Checkout →
              </button>


              <Link to="/">
                <button className="continue-button">
                  ← Continue Shopping
                </button>
              </Link>


              <div className="secure-checkout">
                🔒 Secure checkout
              </div>

            </div>

          </div>

        </>
      )}

    </div>
  );
}

export default Cart;