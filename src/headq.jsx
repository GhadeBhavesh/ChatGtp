import {React, forwardRef} from 'react'

 function Headq({text},ref) {
  return (
    <div ref={ref} >{text}</div>
  )
}

export default forwardRef(Headq)