"use client";
import React, { useState } from "react";
import Button from "../components/button";
function Page() {
  function increase() {
    setCount(count + 1);
  }

  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button onClick={increase}>Click</button> <br />
      The value of count is {count}
      <br />
      <Button data="aashik" />
    </div>
  );
}

export default Page;
