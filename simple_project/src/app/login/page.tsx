"use client"
import { useState } from "react";
import { signIn} from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";


function Loginpage() {
  const router=useRouter();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin=async(e:React.FormEvent)=>{

    e.preventDefault();
    try{
      const result= await signIn('credentials',{
        email,password,redirect:false
      })

      if(result?.ok){

        router.push('/')
      }

      console.log(result)

    }

    catch(error:any){
      setError(error.message)
      console.error(error)
    }

  }

  
  return (
    <div>
         <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm text-black"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 rounded mb-3 text-center">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
          required
        />

        <button
          type="submit"

          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign In
        </button>


<div className="flex  items-center gap-1 my-4">

  <hr className="flex-grow"/>
<span>OR</span>
  <hr className="flex-grow"/>
</div>

        <button
          type="submit"
          onClick={async ()=>{
            await signIn('google',{
              callbackUrl:'/'
            })
          
          }}
          className="w-full bg-blue-500 text-white py-2 flex justify-center mt-2  gap-1 rounded hover:bg-blue-600"
        >
          Sign in with Google
          <FaGoogle className="h-6" />
          
        </button>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 underline ">
            Register
          </a>
        </p>
      </form>
    </div>
    </div>
  )
}

export default Loginpage