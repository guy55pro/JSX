import React from 'react'
import "./Main.css"
import mainPic from "./imageInSrc.jpg"

export default function Main() {
    return (
        <div className="mi">
        <h1 className="title ; red">Your name here</h1>
        <br/>
        <img src={mainPic}/>
        <br/>
        <img src="/imageInPublic.jpg"/>
        <video width="320" height="240" controls/>
        <source src="myVideo.mp4" type="video/mp4"/>
        </div>
    );
}
