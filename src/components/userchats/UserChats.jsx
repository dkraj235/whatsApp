
import React from 'react'
import "./userchats.css"

function UserChats() {
  return (
    <div className='userchats'>
      
      <div className="chatTopSec"> 

        <div className="leftSec">
          <img className="myImage" src="http://t0.gstatic.com/images?q=tbn:ANd9GcTrREPWL9aN6Vu-Ni69PalWdQMIfazpjjftaCnyB_X7v8rmv2xQmIBZGB6uxGYC1b1qQJrH" alt=""/>
          <h2 className='chatUserName'>Shahrukh Khan</h2>
        </div>

        <div className="rightSec">
        <i className="fa-solid fa-video"></i>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
 
      </div>

      <div className="chatSec">
        
 
      </div>

      <div className="sendMessage">
    
         <i className="fa-regular fa-face-smile"></i>
         <i className="fa-solid fa-plus"></i>
         <input className='typeMessage' type="text" placeholder='type a message'/> 
         <i className="fa-solid fa-microphone"></i>
         <i  class="fa-solid fa-forward sendNow"></i>

      </div>

    </div>

    


  )
}

export default UserChats
