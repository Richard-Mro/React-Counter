import React, { useState } from "react";
import useCounter from "../Custom Hook/useCounter";
import Navbar from "../Components/NavBar";
import "../styles/index.css";
import Header from "../Components/Header";

const CounterPage = () => {
  const { count, increment, decrement, reset, setValue } = useCounter();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSetValue = () => {
    const parsedValue = parseInt(inputValue);
    if (!isNaN(parsedValue)) {
      setValue(parsedValue);
      setInputValue("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="heading">Counter</h1>
        <h3>Count: {count}</h3>
        <div className="som">
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter Counter Value"
            className="input"
            name="input"
          />
          <div className="der">
            <button onClick={handleSetValue} className="setValue">
              Set Value
            </button>
          </div>
        </div>
        <div className="change">
          <button onClick={increment}>Increment</button>
          <button onClick={reset}> Reset </button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
      <Header />
    </>
  );
};

export default CounterPage;
