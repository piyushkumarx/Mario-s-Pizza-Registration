import React, { useContext } from "react";
import "./Pizza.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import PizzaContext from "./Context";

export default function Pizza() {
  const{OrderPizzaBtn}=useContext(PizzaContext)
  return (
    <div className="pizza-container-box">
      <div className="pizza-box">
        <span className="pizza-icon-box">
          <FontAwesomeIcon className="pizza-icon" icon={faPizzaSlice} />
        </span>
        <h1>Mario's Pizza</h1>
        <p>
          Craft your perfect pizza with our fresh ingredients and signature
          crusts. Hot, fast, and delicious.
        </p>
        <button className="order-btn" onClick={()=>OrderPizzaBtn()}>Order a Pizza</button>
      </div>
    </div>
  );
}
