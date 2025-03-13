"use client"
import {useState, useEffect} from 'react'

type User ={
    name: string , 
    id: number, 
    age: number, 
    username: string
}
export default function UserClient(){
    const [user, setUser]  = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function fetchUsers(){

            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if(!response.ok) throw new Error("faileeed to fetch user")
                const data = await response.json()
                setUser(data)
            }
            catch(err){
                if (err instanceof Error) {
                    console.log(err.message); // Safe to access message now
                  } else {
                    console.log('Unexpected error:', err);
                  }
            }
            finally{
                setLoading(false)
            }
            
        }

        fetchUsers()
        
    },[])
    
    return(
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='m-3'>Below is the list of users that is being fetched from &nbsp;
            <code>
       <span className='hover:to-blue-300'><a className="text-inherit no-underline hover:no-underline focus:no-underline" href="https://jsonplaceholder.typicode.com/users">jsonplaceholder.typicode.com/users</a></span>
            </code>
            </h1>
            {loading}? <h1>Couldn&apos;t fetch data</h1>
            :<table>
            <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Username</th>
          </tr>
        </thead>
        <tbody >

            
                {
                    user.map((user)=>{
                        return (
                            
                            <tr key={user.id} className="hover:bg-amber-500">
              <td className="border border-gray-400 p-2">{user.name}</td>
              <td className="border border-gray-400 p-2">{user.username}</td>
            </tr>
                        )
                        
                    })
                }
            
        </tbody>
            </table>
        </div>
    )


}


