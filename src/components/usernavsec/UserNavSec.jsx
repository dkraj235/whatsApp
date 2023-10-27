import React from 'react'
import "./usernavsec.css" 
import AllUsers from '../allusers/AllUsers'; 

function UserNavSec() {
  return (
    <div className='userNavSec'> 

     <div className="nav-section">

        <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle pointer"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }} 
            /> 

        <div className="navItem">
        <i className="fa-solid fa-user-group pointer"></i>
        <i className="fa-regular fa-circle-dot pointer"></i>
        <i className="fa-solid fa-comment-dots pointer"></i>
        <i className="fa-solid fa-square-plus pointer"></i>
        <i className="fa-solid fa-ellipsis-vertical pointer"></i>
        </div>

      </div>

        <div className="searchBarSec">
         <input className='searchBar' type="text"placeholder='search or start a new chat' />
         <i  className="fa-solid fa-magnifying-glass searchIcon pointer"></i>
         <i className="fa-solid fa-filter font-color pointer"></i>
       </div>
     
       <AllUsers/>
    

    </div>
  )
}

export default UserNavSec;
