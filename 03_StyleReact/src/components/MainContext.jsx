import { useState } from 'react'
export const UserButton = (amount) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount((count) => count + amount)}>
                {amount}
            </button>
        </div>
    );
}
 