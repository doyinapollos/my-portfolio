import React from 'react'

function Header() {
  return (
    <div className='header'>

        <div className="nav--bar">
            <div className="nav--bar--logo--div">
                <h3 className='logo'>@ebiapollos</h3>
            </div>

            <div className="nav--bar--ul--div">
                <ul className='nav--bar--ul'>
                    <li className='list'>Projects</li>
                    <li className='list'>Blog</li>
                    <li className='list'>About</li>
                    <li className='list'>Hobby</li>
                    <li className='list'>Contact</li>

                </ul>
            </div>
        
        </div>
    
    </div>
  )
}

export default Header