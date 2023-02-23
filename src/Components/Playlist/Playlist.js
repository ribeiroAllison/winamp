import "../../Components/Global.css";
import "./Playlist.css";
import React from "react";

export default function Playlist () {

    return(
        <React.Fragment>
            <div className="main-ctn">
                <div id="header">
                    <img className="headerImg" id="leftBar" alt="" src={require("../img/left-header.jpg")} />
                    <p>WINAMP PLAYLIST</p>
                    <img className="headerImg" id="rightBar" alt="" src={require("../img/right-header.jpg")}/>
                    <img id="headerX" alt="" src={require("../img/x.jpg")} />
                </div>
                
                <div className="main" id="main-playlist">
                    
                    <div className="searchBoxData green"  id="output">
                        <ol id="playlist">
                            <li className="playing">Even Flow - Pearl Jam - 10 album (1990)</li>
                            <li>Oceans - Live MTV Unplugged</li>
                        </ol>
                        
                    </div>

                </div>
                    
            </div>
        </React.Fragment>
    )
}