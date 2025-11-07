import React from 'react'

async function page({params}) {
    const user=await params.user;

  return (
    <div>Welcome {user}</div>
  )
}

export default page