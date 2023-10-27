import React from "react";
import "./App.css"
// import TopBar from "./components/topbar/TopBar";
// import LeftSideBar from "./components/leftsidebar/LeftSideBar";
import UserNavSec from "./components/usernavsec/UserNavSec";
import UserChats from "./components/userchats/UserChats";


// how to show text while hovering
function App() {
  return (
    <div className="App">
     {/* <TopBar/> */}
     <div className="front-flex-section">
     {/* <LeftSideBar/> */}
     <UserNavSec/>
     <UserChats/>
     
     </div>
    </div>
  );
}

export default App;
