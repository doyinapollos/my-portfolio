import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='header'>

<div className="nav--bar">
            <div className="nav--bar--logo--div">
                <h3 className='logo'><Link to="/">@ebiapollos </Link> </h3>
            </div>

            <div className="nav--bar--ul--div">
                <ul className='nav--bar--ul'>
                <li className='list'><Link to="/"> Home </Link></li>
                    <li className='list'><Link to="/projects"> Projects </Link></li>
                    <li className='list'><Link to="/blog"> Blog </Link></li>
                    <li className='list'><Link to="/about"> About </Link></li>
                    <li className='list'><Link to="/hobby"> Hobby </Link></li>
                    <li className='list'><Link to="/contact"> Contact</Link> </li>

                </ul>
            </div>
        
        </div>

    
    </div>
  )
}

export default Header



/*
 
*/