import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex justify-between p-5 items-center border-b-2 bg-teal-800 text-white'>
            <div>
                <Link to='/' className='font-bold text-lg text-black'>React News App</Link>
            </div>
            <ul className='flex gap-10 text-md font-semibold'>
                <Link to='/general' className='hover:text-black hover:underline hover:underline-offset-4'>General</Link>
                <Link to='/business' className='hover:text-black hover:underline hover:underline-offset-4'>Business</Link>
                <Link to='/entertainment' className='hover:text-black hover:underline hover:underline-offset-4'>Entertainment</Link>
                <Link to='/health' className='hover:text-black hover:underline hover:underline-offset-4'>Health</Link>
                <Link to='/science' className='hover:text-black hover:underline hover:underline-offset-4'>Science</Link>
                <Link to='/sports' className='hover:text-black hover:underline hover:underline-offset-4'>Sports</Link>
                <Link to='/technology' className='hover:text-black hover:underline hover:underline-offset-4'>Technology</Link>
            </ul>
        </nav>
    )
}

export default Navbar