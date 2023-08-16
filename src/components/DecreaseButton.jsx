import React, { useContext } from "react";
import NumberContext from "../context/NumberContext";

const DecreaseButton = () => {
  const { decreaseNumber } = useContext(NumberContext);

  return (
    <button className="btn btn-danger rounded-0 w-100" onClick={decreaseNumber}>
      Decrease
    </button>
  );
};

export default DecreaseButton;
