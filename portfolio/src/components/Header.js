import React from "react";
import "./../css/components.css";
import { useState } from "react";
function Header(props) {
  const [tab, settab] = useState("home");
  const onclick = (e) => {
    props.settab(e.target.innerHTML);
  };
  return (
    <div className="headercontainer">
      <div className="headertitle">
        <h1 className="Reacttimes">The React Times</h1>
        <li className="headerul">
          <ul>
            <a className="headerbutton" onClick={onclick}>
              arts
            </a>
          </ul>
          <ul>
            <a className="headerbutton" onClick={onclick}>
              automobiles
            </a>
          </ul>
          
          <ul>
            <a className="headerbutton" onClick={onclick}>
              business
            </a>
          </ul>
          <ul>
            <a className="headerbutton" onClick={onclick}>
              Fashion
            </a>
          </ul>
          <ul>
            <a className="headerbutton" onClick={onclick}>
              Food
            </a>
          </ul>
          
          <ul>
            <a className="headerbutton" onClick={onclick}>
              Home
            </a>
          </ul>
          <ul>
            <a className="headerbutton" onClick={onclick}>
              Insider
            </a>
          </ul>
          
            <ul>
              <a className="headerbutton" onClick={onclick}>
                Magazine
              </a>
            </ul>
            <ul>
              <a className="headerbutton" onClick={onclick}>
                Movies
              </a>
                  </ul>
            <ul>
            <a className="headerbutton" onClick={onclick}>
              technology
            </a>
          </ul>
        </li>
      </div>
    </div>
  );
}

export default Header;
