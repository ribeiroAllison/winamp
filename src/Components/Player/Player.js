import "./Player.css";
import React from "react";
import { useState } from "react";

export default function Player () {

    return (
        <div>
           
            <main>
            <header className="headers">
                <img id="headerLeft" src={require("./img/left-header.jpg")} />
                <p>WINAMP</p>
                <img id="headerRight" src={require("./img/right-header.jpg")}/>
                <img id="headerX" src={require("./img/x.jpg")} />
            </header>
            <div id="timer">

            </div>
            </main>
            
        </div>
    )
}