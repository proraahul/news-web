import React from 'react'

const Footer = () => {
    return (
        <div className='text-center p-5'>
            Copyright By <a className='bg-teal-800 p-2 font-bold border rounded' href='https://www.linkedin.com/in/rahulsaini3113/' target='_blank'>
               &copy;{new Date().getFullYear()} Rahul saini
                </a></div>
    )
}

export default Footer;