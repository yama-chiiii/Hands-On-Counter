import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>React Counter</div>
            <div>{count}</div>

            <button onClick={() => setCount((prev) => prev + 1)}>+</button>

            <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        </div>
    );
}
