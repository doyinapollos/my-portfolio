import React from 'react'

function Blog() {
  return (
    <div className='blog'>
      <div className="blog--div">
        <div className='blog--div--1'>
          <div className='blog--div--pic'>
              <img className='blog--pic' src='https://durhamcollege.ca/wp-content/uploads/Computer-Programmer.jpg' alt='' />
          </div>
          <div className='blog--div--text'>
            <h3>Web Development</h3>
            <p>An inspirational world</p>
            <h1>#liveTheGoodLife!</h1>

          </div>

        </div>

        <div className='blog--div--2'>
           <div className='blog--div--2a'>
             
             <div className='blog--div--2a--1'>
               <img className='blog--gallery' src='https://www.edx.org/static/ebde2a531bce94d2fc1ba075d1f19e57/learn_computer_programming.jpg' alt='' />
               <span>Clean code</span><br />
               <span>Elegant code</span>

             </div>
             <div className='blog--div--2a--1'>
               <img className='blog--gallery' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWTYtftku6nmVtqs0LO1-M3A_BQw4z8-FLskusSVtJToekxfHkG1VUsmRrgMTYzmzBXI&usqp=CAU' alt='' />
               <span>Clean code</span><br />
               <span>Elegant code</span>

             </div>

           </div>

           <div className='blog--div--2b'>

             <div className='blog--div--2a--1'>
               <img className='blog--gallery' src='https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1631898424/ComputerScience.org/GettyImages-1169539468/GettyImages-1169539468.jpg?_i=AA' alt='' />
               <span>Clean code</span><br />
               <span>Elegant code</span>

             </div>
             <div className='blog--div--2a--1'>
               <img className='blog--gallery' src='https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/computer-programming.jpg' alt='' />
               <span>Clean code</span><br />
               <span>Elegant code</span>

             </div>

           </div>

        </div>

      </div>

    </div>
  )
}

export default Blog