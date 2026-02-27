import React, { useContext } from "react";
import "./Successful.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import PizzaContext from "./Context";

const Successful = (props) => {
  const { goToDashboard } = useContext(PizzaContext)
  return (
    <div className="success-modal">
      
      <div className="modal-box">
        
        <div className="modal-top">
          <div className="icon-box-success">

            <FontAwesomeIcon icon={faCircleCheck}/>
          </div>
        </div>

    
        <div className="modal-content">
          <h2 className="modal-title">{props.heading}</h2>
          <p className="modal-bio">
            {props.msg}
          </p>

          <button className="dashboard-btn" onClick={()=>goToDashboard()}>
            Go to Dashboard
          </button>
        </div>

      </div>

    </div>
  );
};

export default Successful;