import React from 'react'
import "./TotalScore.css"

function TotalScore(props) {
    return (
        <div className="score_section">
            <div className="tts">
                <div className="scored_title">
                    <span> Your score</span>
                    <span> Score</span>
                </div >
                <div className="scored_value">
                    <span className="valuee"> {props.score}/10</span>
                    <span> 10</span>
                </div>
            </div>
        </div>
    )
}
export default TotalScore;


// {/* <h5 onClick={e => history.push('/variety')} > See more </h5> */ }
