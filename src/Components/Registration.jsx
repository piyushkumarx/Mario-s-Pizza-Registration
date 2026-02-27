import React, { useContext } from "react";
import "./Registration.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import PizzaContext from "./Context";

export default function Registration() {
  
  const{RegistrationBtn}=useContext(PizzaContext)

  return (
    <div className="registration-container">
      <div className="registration-box">
        <span className="icon-box"> 
          <FontAwesomeIcon className="icon-user" icon={faUserPlus} />
        </span>
        <h1>Registration</h1>
        <p>
          Create an account to unlock exclusive benefits, fast checkout, and
          personalized experiences.
        </p>
        <button className="register-btn" onClick={()=>RegistrationBtn()}>Register Now</button>
      </div>
    </div>
  );
}
