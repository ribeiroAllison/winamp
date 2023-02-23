import "./Player.css";
import React from "react";
import "../../Components/Global.css"

export default function Player () {

    return (
        <React.Fragment>
            <div className="main-ctn">
                <div id="header">
                    <img className="headerImg" alt="" src={require("./img/left-header.jpg")} />
                    <p>WINAMP</p>
                    <img className="headerImg" alt=""  src={require("./img/right-header.jpg")}/>
                    <img className="button" alt=""  id="headerX" src={require("../img/x.jpg")} />
                </div>
                <div id="main">
                    <div id="infoCtn">
                        <div id="timer">
                            <h2 className="green">01:32</h2>
                        </div>
                        <div id='info'>
                            <div id='musicName'>
                                <p className="green">1. Even Flow - Pearl Jam - 10 album (1990)</p>
                            </div>
                            <div id="musicData">
                                <div className="numSquare"><p className="green">56</p></div>
                                <p>kbps</p>
                                <div className="numSquare" id="numSquareLeft"><p className="green">100</p></div>
                                <p>khz</p>
                                <div id="soundType">
                                    <p>mono</p>
                                    <p className="green textBlur">stereo</p>    
                                </div>
                            </div>
                            <div id="infoInputs">
                                <input type="range" className="inputRange" id="orange"/>
                                <input type="range" className="inputRange" id="green"/>
                                <img className="inputImg" alt="" src={require("./img/EQ.jpg")}/>
                                <img className="inputImg" alt="" src={require("./img/PL.jpg")}/>
                            </div>
                            
                        </div>
                    </div>
                    <div id="musicTimeSelector">
                        <input type="range" className="inputRange" id="timeSelector"/>

                    </div>
                    <div id="buttons">
                        <img className="button" alt="" src={require("./img/back-btn.jpg")}/>
                        <img className="button" alt="" src={require("./img/play-btn.jpg")}/>
                        <img className="button" alt="" src={require("./img/pause-btn.jpg")}/>
                        <img className="button" alt="" src={require("./img/stop-btn.jpg")}/>
                        <img className="button" alt="" src={require("./img/forward-btn.jpg")}/>
                        <img className="marginImg button" alt="" src={require("./img/eject-btn.jpg")}/>
                        <img className="marginImg button" alt="" src={require("./img/shuffle-btn.jpg")}/>
                        <img className="marginImg button" alt="" src={require("./img/repeat-btn.jpg")}/>
                        <img className="marginImg" alt="" src={require("./img/logo.png")}/>
                        

                    </div>
                    
                </div>
            
            </div>
            
        </React.Fragment>
    )
}