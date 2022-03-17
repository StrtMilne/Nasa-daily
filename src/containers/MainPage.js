import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import "../static/style.css"

const MainPage = function () {

    const [backgroundPic, setBackgroundPic] = useState();
    const [pageTitle, setPageTitle] = useState();
    const [pageDate, setPageDate] = useState();
    const [pageBlurb, setPageBlurb] = useState();
    const [clicked, setClicked] = useState(false);
    const [infoStyle, setInfoStyle] = useState("unclicked")

    const getMainPageItems = function () {
        fetch('https://api.nasa.gov/planetary/apod?api_key=>>>>>API-Key<<<<<')
        .then(res => res.json())
        .then(data => {
            setBackgroundPic(data.hdurl);
            setPageBlurb(data.explanation);
            setPageTitle(data.title);
            setPageDate(data.date);
        })
    }
    

    useEffect(() => {
        getMainPageItems();
    }, [])

    const onClick = function() {
        setClicked(!clicked);
        if(!clicked){
            setInfoStyle("clicked");
        } else {
            setInfoStyle("unclicked")
        }

    }
 
    return (
        <div className="overall-container">
            <img src={backgroundPic} className="daily-container"/>
            <div className={`info-bar`}>
                <button onClick={onClick}>>></button>
                <h4 className={`${infoStyle}`}>{pageBlurb}</h4>
            </div>
            <SideBar title={pageTitle} date={pageDate}/>
        </div>
    )
}

export default MainPage;