import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount((prev) => prev + 1);
    };

    const subtract = () => {
        setCount((prev) => prev - 1);
    };

    return (
        <div className="flex justify-center items-center w-full h-screen bg-blue-50">
            <div className="bg-white h-4/6 w-80 rounded-2xl shadow-xl">
                <div className="flex justify-center font-mono mt-12 text-3xl text-gray-400">React Counter</div>
                <div className="flex justify-center mt-20 text-8xl text-blue-800">{count}</div>
                <div className="flex justify-around mt-20">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-full">
                        <button onClick={add} className="w-12 h-12 mb-2 text-4xl">
                            +
                        </button>
                    </div>
                    <div className="flex items-center justify-center w-16 h-16 text-blue-800 rounded-full border-blue-800 border-2">
                        <button onClick={subtract} className="w-12 h-12 mb-2 text-5xl">
                            -
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
