import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);
    return (
        <div className="flex justify-center items-center w-full h-screen bg-blue-50">
            <div className="bg-white h-4/6 w-80 rounded-2xl shadow-xl">
                <div className="flex justify-center font-mono mt-12 text-3xl text-gray-400">React Counter</div>
                <div className="flex justify-center mt-20 text-8xl text-blue-800">{count}</div>

                <button onClick={() => setCount((prev) => prev + 1)}>+</button>

                <button onClick={() => setCount((prev) => prev - 1)}>-</button>
            </div>
        </div>
    );
}
