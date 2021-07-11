import React from 'react';
import "./HowPlay.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";
function HowPlay() {
    const history = useHistory();
    return (
        <div>
            <ArrowBackIcon onClick={e => history.push('/')} className="Arrows" />
            <div className="sectionss">
                <h1 className="headerr_section"> - How To play This Game ?</h1>
                <p className="paragraphh_section"> On Starting the game You will get some numbers. You have to sum all the numbers and then you have to insert your Answer in input field, if correct you will get 1 point for each Questions. you have two options first is View Score Card (To get your Total score at the end of Game) and Second is Proceed to Next(go to Next Question). </p>
                <h1 className="headerr_section"> - How many Questions are in the Game?</h1>
                <p className="paragraphh_section">There are 10 Questions, each Question if Correct You will get 1 point for each.</p>
                <h1 className="headerr_section"> - Example?</h1>
                <p className="paragraphh_section">On Starting the Game you will Get the numbers Like :</p>
                <p className="example_section">5  -12  4  23</p>
                <p className="paragraphh_section">Where as we know that,</p>
                <p className="example_section_1">5 is +ve number i.e +5 </p>
                <p className="example_section_1">-12 is -ve number i.e -12 </p>
                <p className="paragraphh_section"> So The Sum of all the number is :</p>
                <p className="example_section_1">+5-12+4+23 = 20</p>
                <p className="paragraphh_section"> Put that Answer in input field if correct you will get 1 point else 0 point</p>
                <p className="paragraphh_section">then proceed to next Question.</p>
            </div>
        </div>
    )
}

export default HowPlay
