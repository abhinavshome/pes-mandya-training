import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decreaseCounter = () => {
    setCount(count - 1);
  };
  
  return (
    <div>
      {count}
      <button onClick={incrementCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
    </div>
  );
};

export default Counter;
