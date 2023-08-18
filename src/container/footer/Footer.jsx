import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className=' gradient__bg py-8 my-4 '>
    <div className='flex justify-center mt-4 '>
    <p className='gradien font-medium text-3xl '>Do YOu Want to step in the future before others</p>
    </div>
    <div className='flex justify-center mt-6'>
    <button className='py-2 px-3 border border-2'>Request Early Access</button>
    </div>
  <div className='flex justify-around mt-10 flex-wrap flex-flow-2'>
    <div>
      <p>GPT3</p>
      <p>All right are reserved</p>
    </div>
    <div>
    <p>links</p>
    <p>links</p>
    <p>links</p>
    <p>links</p>
    <p>links</p>
    </div>
    <div>
      <p>Company</p>
      <p>Company</p>
      <p>Company</p>
      <p>Company</p>
      <p>Company</p>
    </div>
    <div>
      <p>Get in Touch</p>
      <p>Get in Touch</p>
      <p>Get in Touch</p>
      <p>Get in Touch</p>
    </div>
  </div>
  <div>
   <p className='text-white flex justify-center m-10'>
     2023-24 . All right are reserved
     </p>
  </div>
    </div>
  )
}

export default Footer
