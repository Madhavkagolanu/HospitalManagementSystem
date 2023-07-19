import React from "react";
import { Link, useLocation } from "react-router-dom";
import {useState} from 'react';
function Sidebar({ Info1, Info2, parentPath }) {
  const location = useLocation();
  const [toggle,setToggle]=useState(false);
  const TOG=()=>{
    setToggle(!toggle)
    console.log(toggle);
  }
  return (
    <>
      <div>
        <img src={Info1.imgURL} alt="ImageMissing" className="ReceptionImage" />
        <br />
        <div className="receptionWord">{Info1.Title}</div>
      </div>
      <div className="SidebarOptions">
        {Object.entries(Info2).map(([key, value]) => (
          <div key={key} className="optt">
            <Link
              to={`${key}`}
              className={`options option ${
                location.pathname === `${parentPath}/${key}`  ? "activeLink" : ""
              }`}
            >
            {value}</Link>
          </div>
        ))}
        <div className="optt">
        <Link onClick={TOG} to='/reception/createvisit/OP' className={`options option ${
              location.pathname==='/reception/createvisit' ||  location.pathname==='/reception/createvisit/OP' || location.pathname==='/reception/createvisit/IP' ? "activeLink" : ""
              }`}>Create Visit</Link>
        </div>
        
     
         {(location.pathname==='/reception/createvisit' || location.pathname==='/reception/createvisit/OP' || location.pathname==='/reception/createvisit/IP') && <div className="optt"><Link className='options option' to='createvisit/OP'>Create Visit OP</Link><br/><Link className='options option' to='createvisit/IP'>Create Visit IP</Link></div>}
      </div>
     
    </>
  );
}

export default Sidebar;
