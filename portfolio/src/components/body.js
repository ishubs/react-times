import React from 'react'
import "./../css/components.css";
import Articles from "./articles"
function body(props) {

    return (
        <div className="body">
            <h1>Displaying : {props.section}</h1>
            <Articles section={props.section}/>
        </div>
    )
}

export default body
