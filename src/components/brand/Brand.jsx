import React from 'react'
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import shopify from "../../assets/shopify.png";
import dropbox from "../../assets/dropbox.png";
import atlassian from "../../assets/atlassian.png";
function Brand() {
  return ( 
    <div className='flex flex-wrap space-x-10  justify-center my-3 mx-3 p-2
    md: h-auto w-auto'>
     <img src={google} alt="" />
     <img src={slack} alt="" />
     <img src={shopify} alt="" />
     <img src={dropbox} alt="" />
     <img src={atlassian} alt=""  />
    </div>
  )
}

export default Brand
