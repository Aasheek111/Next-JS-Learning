'use client'
import React from 'react'
import Image from 'next/image'
import Page from '../page'

function page() {
  return (
<>
<p>
    About Page
</p>
<Image src={"/vercel.svg"} height={100} width={100} alt='vercel' />
<Image
  src="https://images.unsplash.com/photo-1761165307483-8f293ad3f1e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900"
  alt="Man sitting by train window"
  width={500}
  height={400}
/>


</>
  )
}

export default page