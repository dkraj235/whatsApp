import React from 'react'
import "./singleuser.css"

function SingleUser() {
  return (
    <div>
      <div className="user pointer">
              <div className="userProfileImg">
               <img className="myImage" src="http://t0.gstatic.com/images?q=tbn:ANd9GcTrREPWL9aN6Vu-Ni69PalWdQMIfazpjjftaCnyB_X7v8rmv2xQmIBZGB6uxGYC1b1qQJrH" alt=""/>
              </div>
              <div className='bottomBorder'>
               <h4 className="userName">Shahru khan</h4>
               <p className="userStatus">content status</p>
              </div>
             </div>
    </div>
  )
}

export default SingleUser
