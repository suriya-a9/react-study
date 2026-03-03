import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const hanldeIncrement = () => {
        setCount(count + 1);
    }

    const hanldeDecrement = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div>

            <h1>Count: {count}</h1>
            <button onClick={hanldeIncrement}>Increase</button>
            <button onClick={hanldeDecrement}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    )
}