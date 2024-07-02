import Link from 'next/link'
import React from 'react'
import Avatar from './Avatar'

const Header = () => {
  return (
    <header>
        <Link href='/'>
        <Avatar seed='PAPAFAM Support Agent'/>
        <div>
            <h1>Assistify</h1>
            <h2 className='text-sm'>Your custom chat agent</h2>
        </div>
        </Link>
    </header>
  )
}

export default Header;
