import React, { useContext, useEffect, useState } from "react";
import "./PizzaOrder.css";
import tenslicepizza from "../assets/tenslicepizza.png";
import eightslicepizza from "../assets/eightslicepizza.png";
import sixslicepizza from "../assets/sixslicepizza.png";

import masroom from "../assets/masroom.png";
import onion from "../assets/onion.png";
import chesse from "../assets/chesse.png";
import pepperoni from "../assets/Pepperoni.png";
import sausage from "../assets/Sausage.png";
import bacon from "../assets/Bacon.png";

import soda from "../assets/soda.png";
import dip from "../assets/GarlicDip.png";
import garlicbread from "../assets/GarlicBread.png";
import PizzaContext from "./Context";

export default function PizzaOrder() {
  const {
    quantity,
    setQuantity,
    quantityFncPlus,
    quantityFncMinus,
    setPizzaSize,
    pizzaSize,
    setCrust,
    crust,
    toppingsFnc,
    toppings,
    extra,
    setExtra,
    price,
    PizzaAndCrustPrice,
    toppingsPrice,
    extraPrice,
    successfulOrderFnc,
  } = useContext(PizzaContext);

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (quantity === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [quantity]);

  return (
    <div className="pizza-container order-a-pizza">
      <div className="pizza-left">
        <div className="section">
          <h2>Choose Size</h2>

          <div className="pizza-size">
            <div
              className={`pizza-card-size ${pizzaSize === "Small" ? "active" : null}`}
              onClick={() => setPizzaSize("Small")}
            >
              <div className="img-heading">
                <img className="pizza-img" src={sixslicepizza} alt="" />
                <h3>Small</h3>
              </div>
              <div className="price-size">
                <p>10" - 6 Slices</p>
                <span>$10</span>
              </div>
            </div>

            <div
              className={`pizza-card-size ${pizzaSize === "Medium" ? "active" : null}`}
              onClick={() => setPizzaSize("Medium")}
            >
              <div className="img-heading">
                <img className="pizza-img" src={eightslicepizza} alt="" />
                <h3>Medium</h3>
              </div>
              <div className="price-size">
                <p>12" - 8 Slices</p>
                <span>$14</span>
              </div>
            </div>

            <div
              className={`pizza-card-size ${pizzaSize === "Large" ? "active" : null}`}
              onClick={() => setPizzaSize("Large")}
            >
              <div className="img-heading">
                <img className="pizza-img" src={tenslicepizza} alt="" />
                <h3>Large</h3>
              </div>
              <div className="price-size">
                <p>14" - 10 Slices</p>
                <span>$18</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Select Crust</h2>
          <div className="pizza-crust">
            <div
              className={`pizza-crust-card ${crust === "Thin" ? "active" : null}`}
              onClick={() => setCrust("Thin")}
            >
              <h3>Thin</h3>
              <p>Crispy & light</p>
              <span className="extra">Free</span>
            </div>

            <div
              className={`pizza-crust-card ${crust === "Regular" ? "active" : null}`}
              onClick={() => setCrust("Regular")}
            >
              <h3>Regular</h3>
              <p>Classic hand-tossed</p>
              <span className="extra">Free</span>
            </div>

            <div
              className={`pizza-crust-card ${crust === "Stuffed" ? "active" : null}`}
              onClick={() => setCrust("Stuffed")}
            >
              <h3>Stuffed</h3>
              <p>Cheese-filled crust</p>
              <span className="extra">+$2</span>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Add Toppings ($1.50 each)</h2>
          <div className="toppings">
            <span
              className={`topping ${toppings.includes("Mushroom") ? "topping-active" : ""}`}
              onClick={() => toppingsFnc("Mushroom")}
            >
              <img className="toppings-img" src={masroom} alt="" />
              Mushrooms
            </span>

            <span
              className={`topping ${toppings.includes("Onions") ? "topping-active" : ""}`}
              onClick={() => toppingsFnc("Onions")}
            >
              <img className="toppings-img" src={onion} alt="" />
              Onions
            </span>
            <span
              className={`topping ${toppings.includes("Sausage") ? "topping-active" : ""}`}
              onClick={() => toppingsFnc("Sausage")}
            >
              <img className="toppings-img" src={sausage} alt="" />
              Sausage
            </span>

            <span
              className={`topping ${toppings.includes("Pepperoni") ? "topping-active" : ""}`}
              onClick={() => toppingsFnc("Pepperoni")}
            >
              <img className="toppings-img" src={pepperoni} alt="" />
              <span>Pepperoni</span>
            </span>

            <span
              className={`topping ${toppings.includes("Bacon") ? "topping-active" : ""}`}
              onClick={() => toppingsFnc("Bacon")}
            >
              <img className="toppings-img" src={bacon} alt="" />
              Bacon
            </span>

            <span
              className={`topping ${toppings.includes("Cheese") ? "topping-active" : ""}`}
              onClick={() => toppingsFnc("Cheese")}
            >
              <img className="toppings-img" src={chesse} alt="" />
              Extra Cheese
            </span>
          </div>
        </div>

        <div className="section">
          <h2>Extras & Sides</h2>
          <div className="pizza-extras">
            <div
              className={`pizza-extras-card ${extra === "Dip" ? "extra-active" : ""}`}
              onClick={() => setExtra("Dip")}
            >
              <div className="extras-img-name">
                <img className="extras-img" src={dip} alt="" />
                <span>Garlic Dip</span>
              </div>{" "}
              <span>+$1</span>
            </div>

            <div
              className={`pizza-extras-card ${extra === "Soda" ? "extra-active" : ""}`}
              onClick={() => setExtra("Soda")}
            >
              <div className="extras-img-name">
                <img className="extras-img" src={soda} alt="" />
                <span>Soda (Coca-Cola)</span>
              </div>
              <span>+$2</span>
            </div>

            <div
              className={`pizza-extras-card ${extra === "Bread" ? "extra-active" : ""}`}
              onClick={() => setExtra("Bread")}
            >
              <div className="extras-img-name">
                <img className="extras-img" src={garlicbread} alt="" />
                <span>Garlic Bread</span>
              </div>
              <span>+$5</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pizza-summary">
        <h2>Order Summary</h2>

        <div className="summary-item">
          <div className="summary-item-boxes">
            <h4>{pizzaSize ? `${pizzaSize} Pizza` : null}</h4>
            <p>{crust ? `${crust} Crust` : null}</p>
          </div>
          <span>$ {PizzaAndCrustPrice}</span>
        </div>
        <div>
          <div className="divider"></div>
        </div>

        {toppings.length > 0 && (
          <>
            <div className="summary-item">
              <div className="summary-item-boxes">
                {toppings.map((item) => (
                  <ul className="toppingInSummary">
                    <li>{item}</li>
                  </ul>
                ))}
              </div>

              <span>$ {toppings.length * 1.5}</span>
            </div>

            <div className="divider"></div>
          </>
        )}
        {extra.length > 0 && (
          <>
            <div className="summary-item">
              <div className="summary-item-boxes">
                <h4>{extra}</h4>
              </div>
              <span>$ {extraPrice}</span>
            </div>
            <div>
              <div className="divider"></div>
            </div>
          </>
        )}

        <div className="quantity">
          <p>Quantity</p>
          <div className="qty-box">
            <button onClick={() => quantityFncMinus()}>-</button>
            <span>{quantity}</span>
            <button onClick={() => quantityFncPlus()}>+</button>
          </div>
        </div>

        <div className="total">
          <p>Total</p>
          <h1>$ {price * quantity}</h1>
        </div>

        <button
          className="order-place-btn"
          disabled={isDisabled}
          onClick={() => successfulOrderFnc()}
        >
          Place Order Now
        </button>
      </div>
    </div>
  );
}
