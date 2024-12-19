'use client'
import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, setCustom} from "@/redux/state/counter/counterSlice";

const CounterComponent = () => {
    const customValue = useRef();
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div className=" h-screen flex flex-col justify-center items-center">
                <div className=" lg:w-[40%] md:w-[50%] rounded-[10px] bg-white shadow">
                    <div className="bg-gray-500 rounded-t-[10px] p-5">
                        <h1 className="text-[34px] text-gray-300">My Counter App</h1>
                    </div>
                    <div className="p-5">
                        <h2 className="text-center text-[24px] font-bold">Count : {count}</h2>
                        <div className="text-center mt-4">
                            <button className="me-5 px-10 py-2 rounded bg-green-500"
                                    onClick={() => dispatch(increment())}
                            >Increment
                            </button>
                            <button className="px-10 py-2 rounded bg-red-500"
                                    onClick={() => dispatch(decrement())}
                            >Decrement
                            </button>
                        </div>
                        <div className="text-center mt-4">
                            <input
                                className="w-full rounded px-5 py-2 border border-gray-700 focus:outline-green-500 focus:border-gray-700 duration-150"
                                placeholder="custom number"
                                type="number"
                                ref={customValue}
                            />
                            <button className="px-10 py-2 mt-4 rounded bg-blue-500"
                                    onClick={() => {
                                        const value = Number(customValue.current.value);
                                        if (!isNaN(value)) {
                                            dispatch(setCustom(value));
                                        }
                                    }}
                            >Set Custom
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterComponent;