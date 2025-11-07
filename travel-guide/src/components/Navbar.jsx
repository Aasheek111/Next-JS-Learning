'use client'
import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
    const pathname=usePathname();
  return (
    <div className='w-screen  flex text-black bg-gray-300 justify-between p-3 '>
        <div>
            🌏 Travel Guide
        </div>
        <div>
            <ul className='flex gap-5'>
                <Link href={'/'}>
                <li className={pathname=="/"? "text-green-900":""}>Home</li>
                </Link>
                 <Link href={'/places'}>
                <li className={pathname=="/places"? "text-green-900":""}>Places</li>
                </Link>
                <Link href={'/about'}>
                <li className={pathname=="/about"? "text-green-900":""} >About</li>
                </Link>
                <Link href={'/contact'}>
                <li className={pathname=="/contact"? "text-green-900":""}>Contact</li>
                </Link>
            </ul>
        </div>

    </div>
  )
}

export default Navbar