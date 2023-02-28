import "./Track.css";
import React, {useState, useEffect} from 'react';


export default function Track (props) {

    let [isRemoval, setIsRemoval] = useState(false);
    

    function pressPlusButton () {
        props.onAdd(props.track);
    };

    useEffect(() =>{
        !props.playlistTracks ? setIsRemoval(false) : setIsRemoval(true);
    }, [props])

    function pressMinusButton () {
        props.onRemove(props.track);

    };

    

    
    function renderAction () {
        if(isRemoval) {
            return <button className="searchButton green" onClick={pressMinusButton}>-</button>
        } else{
            return <button className="searchButton green" onClick={pressPlusButton} >+</button>
        }
    }


    return(
        <div className="Track">
            <ul className="list">
                <li>{props.track.name} - {props.track.artist} - {props.track.album} </li> {renderAction()}
            </ul>
        
        </div>
    )
}