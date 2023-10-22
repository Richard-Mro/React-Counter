import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  const setValue = (value) => {
    setCount(value);
  };

  return { count, increment, decrement, reset, setValue };
}

export default useCounter;
