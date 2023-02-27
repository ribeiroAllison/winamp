import "../../Components/Global.css";
import "./Playlist.css";
import React from "react";

export default function Playlist (props) {


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
                        <ol>
                            {
                                props.playlistTracks.map(track => {
                                    return <li key={track.id}>{track.name} - {track.artist} - {track.album}</li>
                                })
                            }
                        </ol>
                        
                    </div>

                </div>
                    
            </div>
        </React.Fragment>
    )
}