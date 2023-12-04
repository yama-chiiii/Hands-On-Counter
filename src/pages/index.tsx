import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);
    return (
        <div className="flex justify-center items-center w-full h-screen bg-blue-50">
            <div className="bg-white h-4/6 w-80 rounded-2xl shadow-xl">
                <div>React Counter</div>
                <div>{count}</div>

                <button onClick={() => setCount((prev) => prev + 1)}>+</button>

                <button onClick={() => setCount((prev) => prev - 1)}>-</button>
            </div>
        </div>
    );
}
