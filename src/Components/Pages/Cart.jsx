import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Cart</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      {/* Cart Section */}
      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center">
                          Cart is empty
                        </td>
                      </tr>
                    ) : (
                      cart.map((item, index) => (
                        <tr key={index}>
                          <td className="product-thumbnail">
                            <img
                              src={item.path}
                              alt={item.name}
                              className="img-fluid"
                              style={{ width: "80px" }}
                            />
                          </td>
                          <td className="product-name">
                            <h2 className="h5 text-black">{item.name}</h2>
                          </td>
                          <td>${item.price.toFixed(2)}</td>
                          <td>
                            <div
                              className="input-group mb-3 d-flex align-items-center quantity-container"
                              style={{ maxWidth: "120px" }}
                            >
                              <div className="input-group-prepend">
                                <button
                                  type="button"
                                  className="btn btn-outline-black decrease"
                                  onClick={() =>
                                    updateQuantity(
                                      item.name,
                                      Math.max(1, item.quantity - 1)
                                    )
                                  }
                                >
                                  -
                                </button>
                              </div>
                              <input
                                  type="text"
                                  className="form-control text-center quantity-amount"
                                  value={item.quantity}
                                  onChange={(e) => {
                                    const value = e.target.value.replace(/[^0-9]/g, ""); // sirf digits allow
                                  updateQuantity(item.name, Number(value || 1)); // empty ho to 1
                                  }}
                               />

                              <div className="input-group-append">
                                <button
                                  type="button"
                                  className="btn btn-outline-black increase"
                                  onClick={() =>
                                    updateQuantity(item.name, item.quantity + 1)
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </td>
                          <td>${(item.price * item.quantity).toFixed(2)}</td>
                          <td>
                            <button
                              onClick={() => removeFromCart(item.name)}
                              className="btn btn-black btn-sm"
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          {/* Bottom Section */}
          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button className="btn btn-black btn-sm btn-block">
                    Update Cart
                  </button>
                </div>
                <div className="col-md-6">
                  <Link to="/shop">
                    <button className="btn btn-outline-black btn-sm btn-block">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Cart Totals */}
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        ${subtotal.toFixed(2)}
                      </strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        ${subtotal.toFixed(2)}
                      </strong>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Link to="/checkout">
                        <button className="btn btn-black btn-lg py-3 btn-block">
                          Proceed To Checkout
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Cart;
