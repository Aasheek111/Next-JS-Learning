"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";


export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const router = useRouter();
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });

      console.log(result);
      router.push('/login')

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm text-black"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
          required
        />

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
          Register
        </button>

<div className="flex items-center gap-1 my-5">

        <hr className="flex-grow "/>
        <span>OR</span>
        <hr className="flex-grow" />
</div>
        <button
          type="submit"
          onClick={async()=>{
            await signIn('google',{
              callbackUrl:'/'
            })

          }
          }
          className="w-full bg-blue-500 text-white py-2  flex  justify-center gap-1 mt-1 rounded hover:bg-blue-600"
        >
          Sign up with Google
          <FaGoogle className="h-6 " />
        </button>

        <div className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <p onClick={()=>router.push('/login')} className="text-blue-500 underline cursor-pointer">
            Login
          </p>
        </div>
      </form>
    </div>
  );
}
