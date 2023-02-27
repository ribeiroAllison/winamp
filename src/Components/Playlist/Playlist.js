import "../../Components/Global.css";
import "./Playlist.css";
import React from "react";
import Track from "../Track/Track";

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
                    
                    <div className="searchBoxData green"  id="playlistOutput">
                        {
                            props.playlistTracks.map(track => {
                                return <Track track={track} key={track.id} onAdd={props.onAdd} onRemove={props.onRemove} playlistTracks={props.playlistTracks}/>
                            })
                        }
                        
                    </div>

                </div>
                    
            </div>
        </React.Fragment>
    )
}