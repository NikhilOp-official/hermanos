import React from 'react'

const Footer = () => {
  return (
   <footer className='w-full bg-blue-500 h-80'>
    <div className='flex flex-col  items-center   h-full'>
    <div className='text-white mt-14 '>
        <span className='flex flex-col justify-center items-center text-2xl font-semibold m-7'>
            Stay healthy and strong to enjoy  life
            </span>
            <span className='text-5xl font-bold'>
            We have team of healthcare experts
            </span>
    </div>
    <div className='m-8 flex justify-center items-center'>
   <button className='mr-16 bg-blue-600 p-2 py-4 px-11 text-white font-bold text-xl hover:shadow-2xl hover:bg-blue-600'>Get In Touch</button><span className='border-l-2 text-white text-4xl py-6 font-bold'>+91 8987779999</span>
    </div></div>

   </footer>
  )
}

export default Footer