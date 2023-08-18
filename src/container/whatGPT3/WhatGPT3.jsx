import {React, forwardRef} from 'react'
import './whatGPT3.css'
function WhatGPT3(ref) {
  return (
    <div className='gradient__bg ' >
      <div className='mt-4 h-4'></div>
    <div className='bar ml-12'>
    </div>
     <div className='block  justify-between  px-12 md:flex'>
      <div className='pt-2 text-white font-medium basis-1/2' >
        What is GPT3
      </div>
    <div className='basis-1/2'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptatibus, sint, laboriosam dignissimos quis delectus cumque eius minus libero qui recusandae officia earum alias molestiae reiciendis dolorum vitae obcaecati a ullam necessitatibus iusto neque?
    </div>
    </div>
    <div className='inline-block justify-between grid-cols-2 md:grid'>
      <p className='gradien m-12 font-medium text-3xl '>
        The possibilities are beyond your imagination
      </p>
      <p className='gradien m-12 font-medium text-lg  justify-self-end '>
       Explore the library
      </p>
    </div>
    </div>
  )
}

export default forwardRef(WhatGPT3)
