import "./Track.css";
import React, {useState} from 'react';


export default function Track (props) {

    let [isRemoval, setIsRemoval] = useState(false);

    function toggleAction () {
        isRemoval? setIsRemoval(false) : setIsRemoval(true);
        
    };

    function pressPlusButton () {
        toggleAction();
        props.onAdd(props.track);
    };

    function pressMinusButton () {
        toggleAction();
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