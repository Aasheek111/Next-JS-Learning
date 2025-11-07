"use client";
import { useParams } from "next/navigation";
import React from "react";
import Pkr from "@/assets/pkr.jpg"
import Image from "next/image";
import Tok from "@/assets/tokyo.webp"
import Par from "@/assets/paris.jpeg"

function page({ info }) {
  const { city } = useParams();

  return (
    <div className="flex w-full">
      <div>
        <h1>Welcome to {city}</h1>
        {
        city ==="Pokhara" &&  <Image
          src={Pkr}
          height={200}
          width={200}
          alt="Picture"
          className="rounded-full mt-10"
        />

        }
          {
        city ==="Tokyo" &&  <Image
          src={Tok}
          height={200}
          width={200}
          alt="Picture"
          className="rounded-full mt-10"
        />

        }
          {
        city ==="Paris" &&  <Image
          src={Par}
          height={200}
          width={200}
          alt="Picture"
          className="rounded-full mt-10"
        />

        }

      </div>

      <div>{info}</div>
    </div>
  );
}

export default page;
