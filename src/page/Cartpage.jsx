import axios from "axios";
import React, { useEffect, useState } from "react";
import Paymentpage from "./Paymentpage";
import PrivateRoute from "./PrivateRoute";

function Cartpage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [check, setcheck] = useState(false);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await axios.get("http://localhost:3000/cartdata");
        setCart(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchCartItems();
  }, []);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const decrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const incrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };



  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row text-center">
            <h3>Cart Page</h3>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="row">
                <div className="col-3">
                  <p>Items</p>
                </div>
                <div className="col-3">
                  <p>Details</p>
                </div>
                <div className="col-3">
                  <p>Quantity</p>
                </div>
                <div className="col-3">
                  <p>Total</p>
                </div>
              </div>
              <div className="row">
                <hr />
              </div>
              {cart.map((item) => (
                <section key={item.id}>
                  <div className="container d-flex mb-3">
                    <div
                      className="col-3"
                      style={{
                        width: "150px",
                        height: "150px",
                        marginRight: "15px",
                      }}
                    >
                      <img src={item.image} alt="" className="img-fluid" />
                    </div>
                    <div className="col-3" style={{ width: "340px" }}>
                      <div>{item.title}</div>
                      <div>${item.price}</div>
                    </div>
                    <div className="col-3">
                      <div className="cart-value mt-0">
                        <button
                          className="w-25"
                          onClick={() => decrementQuantity(item.id)}
                        >
                          -
                        </button>
                        <button className="w-25">{item.quantity}</button>
                        <button
                          className="w-25"
                          onClick={() => incrementQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <div className="mt-3"></div>
                      <div className="mt-3">
                        <span>
                          <i className="bi bi-trash3"></i>
                        </span>
                        <button
                          className="border-0 bg-light ps-3"
                          onClick={() => removeItem(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="col-3">${item.price * item.quantity}</div>
                  </div>
                  <div>
                    <hr />
                  </div>
                </section>
              ))}
            </div>
            <div className="col-3">
              <div className="card p-3">
                <h5>Total: ${calculateTotal()}</h5>

                <button onClick={() => setcheck(!check)}>
                  {check ? (
                    <PrivateRoute>
                      <Paymentpage totalpaymentprice={calculateTotal()} />
                    </PrivateRoute>
                  ) : (
                    <button className="btn btn-primary">
                      Proceed to Checkout
                    </button>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cartpage;
