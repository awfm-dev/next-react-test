import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link href="/">home</Link>
            <Link href="../pages/projects">projects</Link>
            <Link href="../pages/contact">contact</Link>
        </div>
    </div>
  )
}

export default Navbar