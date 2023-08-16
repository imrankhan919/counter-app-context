import React, { useContext } from "react";
import NumberContext from "../context/NumberContext";

const Number = () => {
  const { number } = useContext(NumberContext);

  return <h1 className="display-1 text-center">{number}</h1>;
};

export default Number;
