import "../../Components/Global.css"
import "./Search.css"
import React from "react"

export default function Search () {

    return(
        <React.Fragment>
             <div className="main-ctn">
                <div id="header">
                    <img className="headerImg" id="leftBar" alt="" src={require("../img/left-header.jpg")} />
                    <p>WINAMP SEARCH</p>
                    <img className="headerImg" id="rightBar" alt="" src={require("../img/right-header.jpg")}/>
                    <img id="headerX" alt="" src={require("../img/x.jpg")} />
                </div>
                
                <div id="main">
                    <div className="searchBoxData" id="inputs">
                        <input className="green" type="text" id="searchBar"/>
                        <button className="button">Search</button>
                    </div>
                    <div className="searchBoxData green"  id="output">
                        {/* <input className="green textarea" type="textarea" id="textarea"/> */}
                        <img className="textarea" id="mockImg" alt="" src={require("./img/search-result.jpg")}/>
                    </div>
                    <div className="searchBoxData"  id="buttons">
                        <img className="button" alt="Add button" id="add" src={require("./img/ADD.jpg")}/>
                        <img className="button" alt="Remove button" id="remove" src={require("./img/REM.jpg")}/>
                    </div>

                </div>
                    
            </div>
            
            
        </React.Fragment>
    )
}