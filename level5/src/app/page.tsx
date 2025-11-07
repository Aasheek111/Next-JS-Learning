import next from 'next'
import React from 'react'

async function page() {



//ssr
  // const response=await fetch("http://localhost:3000/api/user",{cache:'no-store'});
  // console.log(response)
  // const data=await response.json();
  // console.log(data)


  //ssg

  // const response=await fetch('http://localhost:3000/api/user',{cache:'force-cache'})
  // const data=await response.json();


  //isr

  const response=await fetch('http://localhost:3000/api/user',{next:{revalidate:5}})

  const data=await response.json()

  return (
    <div>Chuuuuu run

      {/* <h1>what {data.name}</h1> */}
      <h1>what {data.name}</h1>


    </div>

  )
}

export default page