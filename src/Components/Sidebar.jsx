import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ Info1, Info2, parentPath }) {
  const location = useLocation();
  // console.log(parentPath);
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
              // to={`${parentPath}/${key}`}
              to={`${key}`}
              className={`options option ${
                // location.pathname === `${parentPath}/${key}` ? "activeLink" : ""
                location.pathname === `${parentPath}/${key}` ? "activeLink" : ""
              }`}
            >
              {value}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
