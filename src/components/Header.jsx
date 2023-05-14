import React from 'react'
import { logo } from '../assets'

const Header = () => {

  return (
    <nav className='py-4 d-flex justify-content-between align-items-center'>
        <div>
            <img height={45} src={logo} />
        </div>
    </nav>
  )
}

export default Header;