import React from "react";
import "../static/style.css";

const SideBar = function(props) {


    return(
        <div className="side-bar">
            <h2>{props.title}</h2>
            <h2>{props.date}</h2>
        </div>
    )
}

export default SideBar;