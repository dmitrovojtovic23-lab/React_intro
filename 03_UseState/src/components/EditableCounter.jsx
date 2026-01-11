import { useState } from "react";

export default function EditableCounter() {
  const [count, setCount] = useState(0);
  const [editValue, setEditValue] = useState(count);

  const saveValue = () => {
    setCount(Number(editValue));
  };

  return (
    <>
      <div>Count: {count}</div>
      <input
        type="number"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
      />
      <button onClick={saveValue}>Save</button>
    </>
  );
}
