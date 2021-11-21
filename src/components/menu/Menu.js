import React, { useState } from "react";
import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactCardFlip from "react-card-flip";

import { data } from "../data";
import "./menu.scss";
export default function Menu() {
  // const [isFlipped, setIsFlipped] = useState(false);
  const [countItem, setCountItem] = useState(0);
  const [products, setProducts] = useState(data);
  const handleClick = (id) => {
    // setIsFlipped((value) => !value);
    console.log(id);
    const updateProducts = products.map((currentValue) => {
      if (id === currentValue.id) {
        currentValue.isFlipped = !currentValue.isFlipped;
      }
      return currentValue;
    });
    setProducts(updateProducts);
  };
  let addItems = (id) => {
    let updateCounter = products.map((value) => {
      if (id === value.id) {
        return value.counter++;
      }
      return value;
    });
    setCountItem(updateCounter);
  };
  let removeItems = (id) => {
    let decreaseCounter = products.map((value) => {
      if (id === value.id) {
        if (value.counter === 0) {
          return value.counter === 0;
        }
        return value.counter--;
      }

      return value;
    });
    setCountItem(decreaseCounter);
  };

  return (
    <div className="menuDiv">
      {products.map((item) => {
        const { title, id, image, description, counter } = item;
        return (
          <div key={id} className="menu">
            <div className="plusMinusButtons">
              <ReactCardFlip
                isFlipped={item.isFlipped}
                flipDirection="horizontal"
              >
                <img
                  src={image}
                  onClick={() => handleClick(id)}
                  alt="img"
                  className="active"
                />
                <div className="para">
                  <p onClick={() => handleClick(id)}>{description}</p>
                </div>
              </ReactCardFlip>
              <div className="buttonMinusPlus">
                <button key={id} className="btn" onClick={() => addItems(id)}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button className="btn" onClick={() => removeItems(id)}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <p>{counter}</p>
                <button className="btn-checkout">
                  Add to <FontAwesomeIcon icon={faShoppingCart} />
                </button>
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <h1>{title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* 
import React, { useState } from "react";
import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactCardFlip from "react-card-flip";
import { NavLink } from "react-router-dom";
import { data } from "../data";
import "./menu.scss";
export default function Menu() {
  // const [isFlipped, setIsFlipped] = useState(false);
  const [countItem, setCountItem] = useState(0);
  const [products, setProducts] = useState(data);
  const handleClick = (id) => {
    // setIsFlipped((value) => !value);
    console.log(id);
    const updateProducts = products.map((currentValue) => {
      if (id === currentValue.id) {
        currentValue.isFleepd = !currentValue.isFleepd;
      }
      return currentValue;
    });
    setProducts(updateProducts);
    // products.map
  };
  let addItems = () => {
    setCountItem(countItem + 1);
  };
  let removeItems = () => {
    if (countItem === 0) {
      setCountItem(0);
    } else {
      setCountItem(countItem - 1);
    }
  };

  return (
    <div className="menuDiv">
      {products.map((item) => {
        console.log(data);
        const { title, id, image, description } = item;
        return (
          <div key={id} className="menu">
            <div className="plusMinusButtons">
              <ReactCardFlip
                isFlipped={item.isFleepd}
                flipDirection="horizontal"
              >
                <img
                  src={image}
                  onClick={() => handleClick(id)}
                  alt="img"
                  className="active"
                />
                <div className="para">
                  <p onClick={() => handleClick(id)}>{description}</p>
                </div>
              </ReactCardFlip>
              <div className="buttonMinusPlus">
                <button className="btn" onClick={addItems}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button className="btn" onClick={removeItems}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <p>{countItem}</p>
                <button /* onClick={}  className="btn-checkout">
                  Add to <FontAwesomeIcon icon={faShoppingCart} />
                </button>
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <h1>{title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}
*/
