import { useState } from "react";
import CounterValue from "./CounterValue";

export default function Counter2() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <CounterValue value={count} />
    </>
  );
}
