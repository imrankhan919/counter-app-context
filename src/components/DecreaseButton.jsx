import React, { useContext } from "react";
import NumberContext from "../context/NumberContext";

const DecreaseButton = () => {
  const { dispatch } = useContext(NumberContext);

  const handleClick = () => {
    const data = decreaseNumber();
    dispatch({
      type: data,
    });
  };

  return (
    <button className="btn btn-danger rounded-0 w-100" onClick={handleClick}>
      Decrease
    </button>
  );
};

export default DecreaseButton;
