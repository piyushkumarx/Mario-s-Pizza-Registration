import "./App.css";
import pizzaimage from "./assets/image.png";
import Registration from "./Components/Registration";
import Pizza from "./Components/Pizza";
import Account from "./Components/Account";
import Successful from "./Components/Successful";
import PizzaOrder from "./Components/PizzaOrder";
import { useContext } from "react";
import PizzaContext from "./Components/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faPizzaSlice,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const { accountForm, backToHome, BackToHome,fullName, orderPizza, successfulReg , successfulOrder} =
    useContext(PizzaContext);

    const isHome = !accountForm && !orderPizza;

  if (successfulReg) {
    return (
      <div className="main-container">
        <Successful heading={"Registration Successful!"} msg={`Welcome, ${fullName}! Your account has been created.`}/>
      </div>
    );
  }

  if (successfulOrder) {
    return (
      <div className="main-container">
        <Successful heading={"Order Confirmed!"} msg={"Your order has been placed! Estimated delivery: 30-45 minutes."}/>
      </div>
    );
  }


  return (
     <div className={`main-container ${isHome ? "home-layout" : "inner-layout"}`}>
      {!accountForm && !orderPizza && (
        <div className="main-header">
          <img src={pizzaimage} alt="pizza" />
          <h1>
            Mario's <span>Pizza</span> & Registration
          </h1>
        </div>
      )}

      {accountForm && (
        <div className="pizza-order-header">
          <FontAwesomeIcon icon={faUserPen} className="registration-icon" />
          <h1 className="registration-form-heading">Registration</h1>
        </div>
      )}

      {orderPizza && (
        <div className="pizza-order-header">
          <FontAwesomeIcon icon={faPizzaSlice} className="pizza-icon" />
          <h1 className="pizza-order-heading">Mario's Pizza</h1>
        </div>
      )}

      {backToHome && (
        <div className="back-to-home" onClick={BackToHome}>
          <FontAwesomeIcon icon={faArrowLeftLong} className="back-icon" />
        </div>
      )}

      <div className="split-container">
        {!accountForm && !orderPizza && (
          <>
            <Registration />
            <Pizza />
          </>
        )}

        {accountForm && <Account />}
        {orderPizza && <PizzaOrder />}
      </div>
    </div>
  );
}

export default App;
