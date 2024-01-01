import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (<header>
    <Link href={"/"}>
        <h5 className='text-purple text-xl font-semibold'>S Abhiram.</h5>
    </Link>
    </header>);
  
}

export default Header