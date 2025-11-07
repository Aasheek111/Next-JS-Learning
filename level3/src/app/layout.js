import { Roboto } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { Bitcount_Grid_Single } from 'next/font/google'
 
const bit=Bitcount_Grid_Single({
  subsets:['latin'],
  weight:'500'
})
const poppins=Poppins({
  subsets:['latin'],
  weight:['700','700']
})
const roboto = Roboto({
  subsets: ['latin'],
  weight:['400']
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bit.className}>
      <body>{children}</body>
    </html>
  )
}