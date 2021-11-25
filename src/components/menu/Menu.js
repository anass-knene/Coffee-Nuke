import React, { useContext, useEffect } from "react";

import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactCardFlip from "react-card-flip";

import "./menu.scss";
import { MyContext } from "../Context/context";
export default function Menu() {
  let timeOut;
  const { cart, setCart, products, setProducts, setClassesNameIcon } =
    useContext(MyContext);
  // ---------------------- is flipped function start here -----------------------------------
  const handleClick = (id) => {
    console.log(id);
    const updateProducts = products.map((currentValue) => {
      if (id === currentValue.id) {
        currentValue.isFlipped = !currentValue.isFlipped;
      }
      return currentValue;
    });
    setProducts(updateProducts);
  };
  // ---------------------- is flipped function end here -----------------------------------

  // ------------------add item (plus) start here ------------------------------------
  let addItems = /* async */ (product) => {
    let updatedProducts = products.map((productItem) =>
      productItem.id === product.id
        ? { ...product, counter: productItem.counter + 1 }
        : productItem
    );

    /* await */ setProducts(updatedProducts);

    //  add item finish -------------------------------------
  };
  // ------------------remove item (minus) start here ------------------------------------
  let removeItems = /* async */ (product) => {
    let updatedProducts = products.map((productItem) =>
      productItem.id === product.id
        ? {
            ...product,
            counter:
              productItem.counter === 0
                ? (productItem.counter = 0)
                : productItem.counter - 1,
          }
        : productItem
    );

    /* await */ setProducts(updatedProducts);
  };
  // ------------------remove item (minus) end here ------------------------------------

  // ------------------add to basket start here ------------------------------------
  let addBasket = /* async */ (product) => {
    let itemInProduct = products.find(
      (productItem) => productItem.id === product.id
    );

    //1 check the cart wither the product is there
    let findProduct = cart.find((cartItem) => cartItem.id === product.id);
    //2 if product is already in cart : replace item with updated quantity

    if (findProduct) {
      let updatedCart = cart.map((item) =>
        item.id !== product.id ? item : itemInProduct
      );
      // setClassesNameIcon("");
      /* await */ setCart(updatedCart);
      /* await */ setClassesNameIcon("jello-horizontal");
      timeOut = setTimeout(() => {
        setClassesNameIcon("");
      }, 1000);

      // await setCountItem(counter);
    } else {
      setCart([...cart, itemInProduct]);
      // setClassesNameIcon("jello-horizontal");
    }
  };
  useEffect(() => {
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  // ------------------add to basket end here ------------------------------------
  return (
    <div className="MenuDiv">
      {products.map((product) => {
        const { title, id, image, description, counter, price } = product;
        return (
          <div key={id} className="Menu">
            <div className="PlusMinusButtons">
              <ReactCardFlip
                isFlipped={product.isFlipped}
                flipDirection="horizontal"
              >
                <img
                  src={image}
                  onClick={() => handleClick(id)}
                  alt="img"
                  className="Active"
                />
                <div className="Para">
                  <p onClick={() => handleClick(id)}>{description}</p>
                </div>
              </ReactCardFlip>
              <div className="ButtonMinusPlus">
                <button className="Btn" onClick={() => removeItems(product)}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <button
                  key={id}
                  className="Btn"
                  onClick={() => addItems(product)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>

                <p>{counter}</p>
              </div>
            </div>
            <div className="Add-Item">
              <h2>{title}</h2>
              <h4>{price} $</h4>
              <button
                className="Btn-checkout"
                onClick={() => {
                  addBasket(product);
                }}
              >
                Add to
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
