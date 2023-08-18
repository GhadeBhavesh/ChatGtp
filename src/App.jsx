import {React, useRef} from "react";
import Header from "./container/header/Header";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import Brand from "./components/brand/Brand";
import WhatGPT3 from "./container/whatGPT3/WhatGPT3";
import Features from "./container/features/Features";
import Feature from "./components/feature/Feature";
import Possibility from "./container/possibility/Possibility";
import Footer from "./container/footer/Footer";
import Headq from "./headq";
function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    </BrowserRouter>
   );
}

export default App;