import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ Info1, Info2 }) {
  const location = useLocation();

  return (
    <div>
      <div>
        <center>
          <img src={Info1.imgURL} alt="ImageMissing" className="ReceptionImage" />
        </center>
      </div>
      <br />
      <center className="receptionWord">{Info1.Title}</center>
      <div>
        {Object.entries(Info2).map(([key, value]) => (
          <div key={key} className='optt'>
            <Link
              to={`/${key}`}
              className={`options option ${location.pathname === `/${key}` ? 'activeLink' : ''}`}
            >
              {value}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
