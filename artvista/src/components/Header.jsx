import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header >
            <nav className='flex justify-between items-center py-2 px-4 bg-black'>
                <ul>
                    <li>
                        <img src='/src/assets/AV.png' alt='Logo' className='h-12 w-14'/>
                    </li>
                </ul>
                <ul className='flex text-white space-x-4'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
