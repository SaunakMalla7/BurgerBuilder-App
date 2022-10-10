import React from "react";
import Button from "../../UI/Button/Button";
import "./OrderSummary.css";

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <>
      <div>
        OrderSummary
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientsSummary}</ul>
        <p>Continue for checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>
          CONTINUE
        </Button>
      </div>
    </>
  );
};

export default OrderSummary;
