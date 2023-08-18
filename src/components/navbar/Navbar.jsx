import { Fragment, useRef } from "react";
import "./navbar.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import WhatGPT3 from "../../container/whatGPT3/WhatGPT3";
import Brand from "../brand/Brand";
import Header from "../../container/header/Header";
import Features from "../../container/features/Features";
import Feature from "../feature/Feature";
import Possibility from "../../container/possibility/Possibility";
import Footer from "../../container/footer/Footer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const WhatGPT = useRef(null);
  const future = useRef(null);
  const possibity = useRef(null);
  const contact = useRef(null);
  const scrollToService = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Popover className="relative gradient__bg h-13">
        <div className="px-3">
          <div className="flex items-center py-6 justify-between md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-34">
              <Link to="#">
                <span className="sr-only">Your Company</span>
                <p className="text-white text-3xl text-bold ic font-medium ">
                  GPT-3
                </p>
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Link
                to="#"
                className="text-base font-medium text-white tex"
              >
                Home
              </Link>
              <a
                href="#"
                onClick={() => scrollToService(WhatGPT)}
                className="text-base font-medium text-white tex"
              >
                What is GPT?
              </a>
              <Link to="#"
               onClick={() => scrollToService(future)}
              className="text-base font-medium text-white tex ">
                Open AI
              </Link>
              <Link to="#" onClick={() => scrollToService(possibity)} className="text-base font-medium text-white tex">
                Case Studies
              </Link>
              <Link to="#"  onClick={() => scrollToService(contact)}className="text-base font-medium text-white tex">
                Contact
              </Link>
            </Popover.Group>
            <div
            
              className="hidden items-center justify-end md:flex md:flex-1 lg:w-0"
            >
              <Link
                to="#"
                className="whitespace-nowrap text-base font-medium text-white hover:text-white tex"
              >
                Sign in
              </Link>
              <Link
                to="#"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 
              md:px-3 py-1  text-base font-medium text-white shadow-sm hover:bg-red-700"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="flex absolute justify-end m-3 inset-x-0 md:static  top-4  origin-top-right transform  transition md:hidden"
          >
            <div className="divide-x-2 divide-gray-50 rounded-lg gradient__bg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-10 pt-0 pb-6">
                <div className="flex items-center space-x-20 justify-end">
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md  my-3 py-2 px-2 text-white-400 hover:bg-gray-100 hover:text-white-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="m-3 space-y-2">
                  <Link
                    to="#"
                    className="flex justify-end text-base font-medium text-white  "
                  >
                    Home
                  </Link>
                  <Link
                    to="#"
                    className="flex justify-end  text-base font-medium  text-white"
                    onClick={() => scrollToService(WhatGPT)}
                  >
                    What is GPT?
                  </Link>
                  <Link
                    to="#"
                    className="flex justify-end text-base font-medium  text-white"
                    onClick={() => scrollToService(future)}
                  >
                    Open AI
                  </Link>
                  <Link
                    to="#"
                    className="flex justify-end text-base font-medium  text-white"
                    onClick={() => scrollToService(possibity)}
                  >
                    Case Studie
                  </Link>
                  <Link
                    to="#"
                    onClick={() => scrollToService(contact)}
                    className="flex justify-end text-base font-medium  text-white"
                  >
                    Contact
                  </Link>
                </div>
                <div className="grid ">
                  <Link
                    to="#"
                    className="grid w-24 justify-self-end justify-center rounded-md border border-transparent bg-red-600 px-2 py-1 font-medium text-white shadow-sm hover:bg-red-900"
                  >
                    sign in
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <Header></Header>
      <div ref={WhatGPT}>
        <Brand></Brand>
        <WhatGPT3 />
      </div>
      <div ref={future}>
        <Features />
        <Feature />
      </div>
      <div ref={possibity}>
        <Possibility />
        <div ref={contact}>

        <Footer ></Footer>
        </div>
      </div>
    </div>
  );
}
