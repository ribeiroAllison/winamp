import "../../Components/Global.css"
import "./Search.css"
import React from "react"
import Track from "../Track/Track"

export default function Search (props) {


    

    return(
        <React.Fragment>
            <div className="main-ctn">
                <div id="header">
                    <img className="headerImg" id="leftBar" alt="" src={require("../img/left-header.jpg")} />
                    <p>WINAMP SEARCH</p>
                    <img className="headerImg" id="rightBar" alt="" src={require("../img/right-header.jpg")}/>
                    <img className="button" id="headerX" alt="" src={require("../img/x.jpg")} />
                </div>
                
                <div className="main">
                    <div className="search" id="searchInputs">
                        <input className="green" type="text" id="searchBar"/>
                        <button className="button">Search</button>
                    </div>
                    <div className="green"  id="searchOutput">
                        {
                            props.tracks.map(track => {
                                return <Track track={track} key={track.id} onAdd={props.onAdd} onRemove={props.onRemove}/>
                            })
                        }
                    </div>
                    

                </div>
                    
            </div>
            
            
        </React.Fragment>
    )
}