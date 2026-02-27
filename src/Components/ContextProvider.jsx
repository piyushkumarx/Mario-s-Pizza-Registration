import React, { useEffect, useState } from "react";
import PizzaContext from "./Context";

const ContextProvider = ({ children }) => {
  const [homePage, setHomePage] = useState(true);

  const [accountForm, setAccountForm] = useState(false);
  const [orderPizza, setOrderPizza] = useState(false);

  const [backToHome, setBackToHome] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const [pizzaSize, setPizzaSize] = useState("Medium");

  const [crust, setCrust] = useState("Regular");

  const [toppings, setToppings] = useState([]);

  const [extra, setExtra] = useState("");

  const[PizzaAndCrustPrice , setPizzaAndCrustPrice] = useState();

  const [toppingsPrice , setToppingsPrice] = useState();

  const[extraPrice , setExtraPrice] = useState();

 

  const[successfulReg , setSuccessfulReg] = useState(false);
  const[successfulOrder , setSuccessfulOrder] = useState(false);


  const[fullName , setFullName] = useState("");




  function successfulOrderFnc(){
    setSuccessfulOrder(true);
  }

function successfulRegFnc(){
  setSuccessfulReg(true);
}

function goToDashboard(){
  setSuccessfulReg(false);
  setSuccessfulOrder(false);
  BackToHome();
}



  const pizzaPrice = {
    Small: 10,
    Medium: 14,
    Large: 18,
  };

  const crustPrice = {
    Thin: 0,
    Regular: 0,
    Stuffed: 2,
  };

  const extrasPrice = {
    Dip: 1,
    Soda: 2,
    Bread: 5,
  };
 
  const [price, setPrice] = useState(0);

  function priceFnc() {
    const PizzaPriceAmount = pizzaPrice[pizzaSize] || 0;
    const CrustPriceAmount = crustPrice[crust] || 0;
    const ExtrasPriceAmount = extrasPrice[extra] || 0;
    const toppingsPriceAmount = toppings.length * 1.5;

    const total =
      PizzaPriceAmount +
      CrustPriceAmount +
      ExtrasPriceAmount +
      toppingsPriceAmount;

     
setExtraPrice(Number(ExtrasPriceAmount))
     setPizzaAndCrustPrice (PizzaPriceAmount + CrustPriceAmount);
setToppingsPrice(toppingsPriceAmount);
    setPrice(total);
  }

  useEffect(() => {
    priceFnc();
  }, [pizzaSize, crust, extra, toppings]);

  function toppingsFnc(item) {
    if (toppings.includes(item)) {
      setToppings(toppings.filter((i) => i != item));
    } else {
      setToppings([...toppings, item]);
    }
  }

  function quantityFncPlus() {
    setQuantity(quantity + 1);
  }

  function quantityFncMinus() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function RegistrationBtn() {
    setAccountForm(true);
    setBackToHome(true);
  }

  function OrderPizzaBtn() {
    setOrderPizza(true);
    setBackToHome(true);
  }

  function BackToHome() {
    setBackToHome(false);
    setAccountForm(false);
    setOrderPizza(false);
  }

  return (
    <PizzaContext.Provider
      value={{
        homePage,
        setHomePage,
        accountForm,
        RegistrationBtn,
        backToHome,
        setBackToHome,
        BackToHome,
        orderPizza,
        OrderPizzaBtn,
        quantity,
        setQuantity,
        quantityFncPlus,
        quantityFncMinus,
        pizzaSize,
        setPizzaSize,
        crust,
        setCrust,
        toppingsFnc,
        toppings,
        extra,
        setExtra,
        price,
        PizzaAndCrustPrice,
        toppingsPrice,
      extraPrice,
      successfulRegFnc,
        successfulReg,
        goToDashboard,
        successfulOrder,
        successfulOrderFnc,
        fullName,
        setFullName,
        
        
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default ContextProvider;
