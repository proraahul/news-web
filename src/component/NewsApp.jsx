import React from 'react'

const NewsApp = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-teal-800 text-white h-[50vh]'>
      <h2 className='font-bold text-3xl'>NEWS WEBSITE</h2>
      <h4 className='text-black font-semibold mb-10'>THIS WEBSITE BUILD WITH NEWS API.</h4>


      <p className='w-full flex  justify-center items-center gap-3'>Developed By 
        <a href='https://www.linkedin.com/in/rahulsaini3113/' target='_blank' className='text-yellow-600 text-xl font-semibold flex items-center gap-3 tracking-wide'> 
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1024px-LinkedIn_icon_circle.svg.png' width='40px'  alt='Linkedin Icon'/>
           <u>RAHUL SAINI</u>
        </a>
      </p>
    </div>
  )
}

export default NewsApp