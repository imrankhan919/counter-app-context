import React, { useContext } from "react";
import NumberContext from "../context/NumberContext";
import { increaseNumber } from "../context/NumberAction";

const IncreaseButton = () => {
  const { dispatch } = useContext(NumberContext);

  const handleClick = () => {
    const data = increaseNumber();
    dispatch({
      type: data,
    });
  };

  return (
    <button
      className="btn btn-success rounded-0 w-100 my-5"
      onClick={handleClick}
    >
      Increase
    </button>
  );
};

export default IncreaseButton;
