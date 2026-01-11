import { useState } from "react";
import CounterButton from "./CounterButton";

export default function Counter3() {
  const [count, setCount] = useState(0);

  const changeCount = (value) => {
    setCount(count + value);
  };

  return (
    <>
      <div>Count: {count}</div>
      <CounterButton value={10} onClick={changeCount} />
      <CounterButton value={-100} onClick={changeCount} />
      <CounterButton value={25} onClick={changeCount} />
    </>
  );
}
