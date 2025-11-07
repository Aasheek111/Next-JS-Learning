import React from 'react'

type btnprop={
    data:string;
}
function Button({data}:btnprop) {
  return (
    <>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button
    </button>
    Hello  {data}
    </>

  )
}

export default Button