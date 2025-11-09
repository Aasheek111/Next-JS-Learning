"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { MdModeEditOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { userContext } from "./context/UserContext";
function page() {

  const data=useContext(userContext);
  console.log(data) 
  const router = useRouter();


  async function handelSignout() {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-black flex justify-center text-3xl items-center h-screen flex-col  ">
      <div className="border border-white  rounded-2xl p-10 flex  relative flex-col gap-2 justify-center items-center">
        <MdModeEditOutline className="absolute top-2 right-2 cursor-pointer hover:text-gray-300" 

        onClick={()=>router.push('/edit')}/>

        {data?.user?.image && (
          <Image
            src={data.user.image}
            alt="loading.."
            height={100}
            width={100}
            className=" rounded-4xl"
          />
        )}
        {data && <p className="text-white">Welcome {data?.user?.username}</p>}
        {!data && <p className="text-white">Lauding......</p>}

        {data && (
          <button
            className="bg-white text-black  text-xl p-2 mt-4 rounded-2xl hover:bg-gray-200"
            onClick={handelSignout}
          >
            {" "}
            Sign Out{" "}
          </button>
        )}
      </div>
    </div>
  );
}

export default page;
