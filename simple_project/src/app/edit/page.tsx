'use client'
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";


import React, { useEffect, useRef, useState } from "react";
import { useUser } from "../context/UserContext";

function page() {

  const  data  = useUser();
  const [user, setUser] = useState("");
  const [imag, setImg] = useState("");
  const [backendImage, setBackendImage] = useState<File>();
  const imageInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (data) {
      setUser(data?.user?.name as string);
      setImg(data?.user?.image as string);
    }
  }, [data]);

  function handleImage(e: React.ChangeEvent <HTMLInputElement>) {
    const file = e.target.files;

    if (!file || file.length == 0) return;

    const actual = file[0];
    setBackendImage(actual);
    setImg(URL.createObjectURL(actual));
  }

  async function handleEdit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", user);

      if (backendImage) {
        formData.append("file", backendImage);
      }
      const result =await  axios.post('/api/edit',formData);
      console.log(result);
      data.setUser(result.data.user)

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="bg-black flex justify-center text-3xl items-center h-screen flex-col  ">
      <div className="border border-white  rounded-2xl p-10 flex min-w-100 relative flex-col gap-7 justify-center items-center">
        <h1>Edit Profile</h1>
        <form action="" className="flex gap-5">
          <div className="border-2 border-white rounded-[100%] h-30 w-30 overflow-hidden hover:border-blue-400 ">
            <input
              type="file"
              accept="image/*"
              hidden
              ref={imageInput}
              onChange={handleImage}
            />
            {imag && (
              <Image
                src={imag}
                alt="img"
                height={30}
                width={30}
                className="h-30 w-30"
                onClick={() => imageInput.current?.click()}
              />
            )}
          </div>
        </form>

        <input
          type="text"
          value={user}
          contentEditable='true'
          className="text-center border-white  border-b  outline-none "
          onChange={(e) => setUser(e.target.value)}
        />
        <button
          className="bg-white text-black  text-xl p-2 w-35 mt-4 rounded-xl hover:bg-gray-200"
          onClick={handleEdit}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default page;
