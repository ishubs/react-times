import React from 'react'
import './../css/components.css'
import {useState} from 'react'
function Header(props) {
    const [tab, settab] = useState('home')
    const onclick = (e) => {
        
        props.settab(e.target.innerHTML);
    }
    return (
      <div className="headercontainer">
        <div className="headertitle">
          <h1>React times</h1>
          <li className="headerul">
            <ul>
              <button onClick={onclick}>arts</button>
            </ul>
            <ul>
              <button onClick={onclick}>automobiles</button>
            </ul>
            <ul>
              <button onClick={onclick}>books</button>
            </ul>
            <ul>
              <button onClick={onclick}>business</button>
            </ul>
            <ul>
              <button onClick={onclick}>technology</button>
            </ul>
          </li>
        </div>
      </div>
    );
}

export default Header
