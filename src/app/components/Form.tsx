"use client"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function Form(){
    const [inputVal, setInputVal] = useState("")
    const {push} = useRouter()
    const handleSubmit =(e : FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        push(`/data/${inputVal}`)
    }
    return(
        <div>
            <div className="text-center">
                <h1>Enter your Name</h1>
            </div>
            <form  onSubmit={handleSubmit}>
                <input type="text" className="border rounded mt-2 p-2"
                 value={inputVal}
                 onChange={(e)=>{setInputVal(e.target.value)}}
                 placeholder="Type your name.."/>
            <div className="flex items-center justify-center mt-2">
                <button className="ml-2 border-white rounded hover:text-blue-600 " type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}