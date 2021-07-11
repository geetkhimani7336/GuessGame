import React, { useState, useEffect, useRef } from 'react';
import "./Working.css";
import { useHistory } from "react-router-dom";
import TotalScore from "./TotalScore.js";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
function Working() {

  const history = useHistory();
  var count = 0;
  var Answer;
  var sum;
  var interval = 0;
  const value = 0;
  const [seconds, setSeconds] = useState();
  const Value = useRef(null);
  const [show, setShow] = useState(0);
  const [flag, setflag] = useState(0);
  const [ques, setQues] = useState(1);
  const [summ, setsumm] = useState(0);
  const [hide, sethide] = useState(false);
  useEffect(() => {
    setSeconds("clear");
    sum = 0;
    interval = setInterval(() => {
      var num = Math.floor(Math.random() * 18) + 1;
      num *= Math.round(Math.random()) ? 1 : -1;
      count += 1;
      if (count < 5) {
        sum += num;
      }

      if (count === 5) {
        clearInterval(interval);
        setSeconds("?");
      }

      else {
        setSeconds(num);
      }
      console.log(sum + ":" + count);
      setsumm(sum);
    }, 1000)
  }, [ques])

  const Check = (e) => {
    e.preventDefault()
    Answer = Value.current.value;
    setShow(Answer);
    console.log("you typed");
    console.log(typeof (Answer));
    console.log("setsum is");
    console.log(typeof (summ));
    if (ques != 10) {
      if (parseInt(Answer) === parseInt(summ)) {
        setflag(flag + 1)
        // sum = 0;
        count = 0;
        console.log("hello you are inside");
      }
      setQues(ques + 1)
    }
    else {
      setSeconds("End")
      toast.success("Game Completed see Your Score Card")
    }
  }
  const Restart = () => {
    setQues(1);
    setflag(0);
  }
  const ScoreCheck = () => {
    if (ques === 10) {
      sethide(true);
      if (flag >= 7) {
        toast.success("Congo Buddy");
      }
      else {
        toast.error("Your Score is Low, You can do better")
      }
    }
    else {
      toast.warning("Warning : Complete All 10 Questions")
    }

  }
  return (
    <div className="process_container">
      <ArrowBackIcon onClick={e => history.push('/')} className="Arrows1" />
      <div className="sectionn">
        <div className="process">
          <h1 className="heading_tag"> Ques no {ques}</h1>
          <div className="app_baground">
            <h1>{seconds}</h1>
          </div>
          <input ref={Value} type="text" id="mytext" placeholder="Your Answer" />
          <div className="test">
            <button className="button_inside" onClick={ScoreCheck}>View Score Card</button>
            <button className="button_inside" onClick={Check}>Proceed to Next</button>
          </div>
          {/* <p>Answer:</p>
        <p>{flag}</p> */}
        </div>
        {
          hide ?
            <div className="score__result">
              <div>
                <TotalScore score={flag} />
              </div>
              <div className="button_section">
                <button className="button_inside score_btn" onClick={Restart}>Restart</button>
                <button className="button_inside score_btn" onClick={() => sethide(false)}>Hide</button>
              </div>
            </div>
            : null
        }
      </div>
      <ToastContainer />
    </div>

  )
}

export default Working;