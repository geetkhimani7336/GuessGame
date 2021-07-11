import React from 'react'
import './FrontPagee.css'
import { useHistory } from "react-router-dom";
import guess_pic from "./Pics/guess_pic.gif";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
function FrontPagee() {
    const history = useHistory();
    return (
        <div className="Front_page">
            <div className="heading_section">
                <img className="image_img" src={guess_pic} />
                <span className="heading_part">Guess sum game</span>
                <SportsEsportsIcon className="icon_part" style={{ fontSize: "60px", marginBottom: "-15px" }} />
            </div>
            <button className="btnn button_1" onClick={e => history.push('/process')}>Start Game</button>
            <button className="btnn button_1" onClick={e => history.push('/playhow')}>How to Play?</button>
        </div>
    )
}

export default FrontPagee