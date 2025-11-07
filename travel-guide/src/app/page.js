import React from 'react'
import Image from 'next/image'
function page() {
  return (
    <div className='realative'>

<h1 className='absolute text-center w-full  h-[92vh] items-center  flex justify-center text-4xl font-bold z-1'>
  Welcome to the Tourist Guide Website
</h1>
      <Image 
      className='w-screen h-[92vh] object-cover opacity-30'
      src={'https://images.unsplash.com/photo-1682695795557-17447f921f79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070'}
      height={900}
      width={900}
      alt='image'
      
      />


    </div>
  )
}

export default page