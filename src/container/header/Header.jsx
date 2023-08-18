import React from 'react'
import './header.css'
import people from "../../assets/people.png";
import ai from "../../assets/ai.png"
function Header() {
  return (
    <div className='gradient__bg w-full h-full'>
    <div className='flex items-center justify-around dis'>

    <div className='container'>
    <p className='p-5 gradient text-3xl text-bold font-medium '>
      Let's Build Something amazing with GPT-3 OpenAi
    </p>
    <p className='pl-12 container text-white'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorum nam temporibus expedita nobis dolorem commodi, fugiat quas ex inventore soluta. Fuga dignissimos quos et expedita delectus voluptatibus, maxime ducimus ipsa quibusdam, nobis unde?
    </p>
    <div className='block grid-cols-2 my-2 pl-10 mt-4
    md:grid '>
    <input
          type="e-mail"
          className="flex w-full rounded-md pl-3  px-1 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-md bg-black active: text-white active:bg-black"
          placeholder="Enter your E-mail"
        />
    <a
                href="#"
                className="flex rounded-md border border-transparent bg-red-600 w-44 h-7 justify-center text-center font-medium text-white hover:bg-red-700 butto"
                >
                Get Started
              </a>
                  </div>
                  <div className='block items-center md:flex'>

    <img src={people} alt="" className='pl-8 my-2 mt-3' />
  <span></span>
    <p className='pl-8 my-1 mt-3 text-white '>1,0000 people requested access a visit in last 24 hours</p>
    </div>
                  </div>
    <img src={ai} alt="" className='h-2/3 w-1/3 ai' />
                </div>
          </div>
  )
}

export default Header
