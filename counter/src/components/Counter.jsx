import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    if (count === 0) return;
    setCount((prev) => {
      return prev - 1;
    });
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Counter</h1>
      <div className="counter">
        <button onClick={decrease}>-</button>
        {count}
        <button onClick={increase}>+</button>
      </div>
    </>
  );
};

export default Counter;
