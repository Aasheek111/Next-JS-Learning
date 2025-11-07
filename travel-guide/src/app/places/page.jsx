"use client";
import React from "react";
import { useRouter } from "next/navigation";

function page() {
  const route = useRouter();

  const dest = ["Paris", "Pokhara", "New York", "Tokyo", "Kathmandu"];
  return (
    <div className="flex justify-center flex-col w-full items-center h-full text-4xl p-4 ">
      <h1 className="font-bold p-5">Choose Your Destination</h1>
      <ul className="flex flex-col gap-5  text-2xl">
        {dest.map((item, ind) => (
          <li
            key={ind}
            className="bg-white p-3 cursor-pointer rounded text-black transition-transform duration-300 hover:bg-gray-300  hover:scale-105"
            onClick={() => {
              route.push(`/places/${item}`);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
