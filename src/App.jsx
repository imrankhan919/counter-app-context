import React from "react";
import Number from "./components/Number";
import IncreaseButton from "./components/IncreaseButton";
import DecreaseButton from "./components/DecreaseButton";
import { NumberProvider } from "./context/NumberContext";
import EvenNumber from "./components/EvenNumber";

const App = () => {
  return (
    <NumberProvider>
      <div className="container p-5">
        <Number />
        <IncreaseButton />
        <DecreaseButton />
        <EvenNumber />
      </div>
    </NumberProvider>
  );
};

export default App;
