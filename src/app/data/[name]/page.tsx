'use client'
import { useRouter } from "next/navigation"
export default async function ShowName({params}: {params : {name:string}}){
    const {name} = params
    const {push} = useRouter()
    const handleClick = ()=>{
        push(`/`)
    }
    return(
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="text-center p-8 bg-white rounded-2xl shadow-2xl max-w-md">
          <h1 className="text-4xl font-bold text-gray-800 animate-pulse">
            Hi {name}!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            What would you like to do today?
          </p>
          <button onClick={handleClick} className="mt-6 px-6 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-700 transition-all duration-300">
            Go to home page
          </button>
        </div>
      </div>
    )
}