import React, { useContext } from "react";
import { MyContext } from "../Context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcAmex,
  faCcMastercard,
  faCcDiscover,
  faPaypal,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faEnvelope,
  faAddressCard,
  faUniversity,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./buy.scss";

export default function Buy() {
  const { cart, countItem, totalPrice } = useContext(MyContext);

  return (
    <div className="buyItem">
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form action="/action_page.php">
              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label for="fname">
                    <FontAwesomeIcon icon={faUser} className="fa fa-user" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                  />
                  <label for="email">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="fa fa-envelope-buy"
                    />
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label for="adr">
                    <FontAwesomeIcon
                      icon={faAddressCard}
                      className="fa fa-address-card-o"
                    />
                    <span> Address</span>
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label for="city">
                    <FontAwesomeIcon
                      className="fa fa-institution"
                      icon={faUniversity}
                    />
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                  />

                  <div className="row">
                    <div className="col-50">
                      <label for="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="col-50">
                      <label for="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Payment</label>
                  <div className="icon-container">
                    <FontAwesomeIcon
                      icon={faCcVisa}
                      className="fa fa-cc-visa"
                      style={{ color: "navy" }}
                    />
                    <FontAwesomeIcon
                      icon={faCcAmex}
                      className="fa fa-cc-amex"
                      style={{ color: "blue" }}
                    />
                    <FontAwesomeIcon
                      icon={faCcMastercard}
                      className="fa fa-cc-mastercard"
                      style={{ color: "red" }}
                    />
                    <FontAwesomeIcon
                      icon={faCcDiscover}
                      className="fa fa-cc-discover"
                      style={{ color: "orange" }}
                    />
                    <FontAwesomeIcon
                      icon={faPaypal}
                      className="fa fa-cc-discover"
                      style={{ color: "blue" }}
                    />
                  </div>
                  <label for="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                  />
                  <label for="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label for="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />
                  <div className="row">
                    <div className="col-50">
                      <label for="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2021"
                      />
                    </div>
                    <div className="col-50">
                      <label for="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr" />
                Shipping address same as billing
              </label>
              <input type="submit" value="Continue to checkout" class="btn" />
            </form>
          </div>
        </div>
        <div className="col-25">
          <div className="container">
            <h4>
              Cart
              <span className="price" style={{ color: "black" }}>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="fa fa-shopping-cart"
                />
                <b>{countItem}</b>
              </span>
            </h4>
            {cart.map((item) => {
              return (
                <div className="itemPuy">
                  <h5>{item.title}</h5> <p> Quantity :{item.counter}</p>
                  <span className="price">${item.price}</span>
                </div>
              );
            })}

            <hr />
            <div className="total">
              <p>Total </p>
              <span style={{ color: "black" }}>${totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
