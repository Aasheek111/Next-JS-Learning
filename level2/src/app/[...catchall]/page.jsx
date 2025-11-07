import React from 'react'

async function page({params}) {
const pars=await params;
    console.log(pars.catchall[1])
  return ( 
    <div>Catch Me</div>
  )
}

export default page