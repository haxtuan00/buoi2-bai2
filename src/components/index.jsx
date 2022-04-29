import React from 'react'
import './style.css'
const Bai2 = (props) => {
  return (
    <div className='question'>
         <input type="text" required/>
         <label>{props.text}</label>
    </div>
  )
}

export default Bai2