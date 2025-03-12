"use client"
import { useState } from "react"

export const Counter = ()=>{
    const [count, setCount] = useState(0)

    const handleCount = ()=>{
        setCount(
            count+1
        )
    }
    const decreaseCount= ()=>{
        setCount(
            count-1
        )
    }

    return (
        <>
        <div className="flex flex-col"> 

        <div >
            <h1 className="w-full flex items-center justify-center">Counter: {count} </h1>
        </div>
        <div className="flex justify-center gap-2">
            <button onClick={handleCount} className="mt-2 border p-3 border-2 rounded">+</button> 
            <button onClick={decreaseCount}className="mt-2 border p-3 border-2 rounded">-</button>   
        </div>
        </div>
        </>
    )
}