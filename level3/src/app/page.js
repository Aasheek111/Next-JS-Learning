'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Page() {
const router = useRouter()
  return (
    <div>
      <ul className='flex justify-evenly'>
         <Link href="/">
         <li>Home</li>
         </Link>
         <Link href="/about">
         <li>About</li>
         </Link>
         <Link href="/contact">
         <li>Contact</li>
         </Link>
      </ul>
      <button onClick={()=>router.push('/about')} >
TO ABOUT
      </button>

    </div>
  )
}

export default Page