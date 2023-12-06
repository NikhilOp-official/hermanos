import React from 'react'

const SectionNavigate = () => {
  return (
    <section className=" pb-0 md:pb-2">
      
            <ul className='cursor-pointer  flex justify-evenly text-lg font-semibold border-b-2 p-0 m-0 md:px-4 md:pt-2 '>
                <li className=' hover:border-b-4 hover:border-blue-500 h-full   p-4'>Overview</li>
                <li className=' hover:border-b-4 hover:border-blue-500 h-full p-4'>Eligibility</li>
                <li className=' hover:border-b-4 hover:border-blue-500 h-full p-4'>Preparation</li>
                <li className=' hover:border-b-4 hover:border-blue-500 h-full p-4'>About Treatment</li>
                <li className=' hover:border-b-4 hover:border-blue-500 h-full p-4'>Post-Treatment Care</li>
                <li className=' hover:border-b-4 hover:border-blue-500 h-full p-4'>Recovery Tips</li>
                <li className=' hover:border-b-4 hover:border-blue-500 h-full p-4'>FAQs</li>
                <li className=' hover:border-b-4 hover:border-blue-500 h-full p-4'>Patient Stories </li>
            </ul>
     
    </section>
  )
}

export default SectionNavigate