import React from 'react'
import {Link} from "react-router-dom"

function Main() {
  return (
    <div className='main'>
        <div className="content--div">

            <div className='content--div--a'>
        
            </div>
            
            <div className='content--div--b'>
              <img className='passport' src='' alt='' />
                <div className='text'><h1>Hello, I am APOLLOS</h1></div>
                <div className='text'><span className='span'>Web Developer</span></div>
                <div className='text'><span className='span'>Front end developer</span></div>
                <div className='text'><span>I write clean, elegant and efficient code</span></div>
                <button><Link to="/contact">Contact Me </Link> </button>
            </div>
            
        </div>
        
    </div>
  )
}

export default Main