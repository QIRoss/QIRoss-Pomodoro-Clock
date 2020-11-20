import React, { useState } from 'react';

function Pomodoro() {
  const [breaker,setBreaker] = useState(5);
  const [session,setSession] = useState(25);
  const [secs, setSecs] = useState('0'+0);
  const [mins, setMins] = useState(session);
  const [start, setStart] = useState(0);
  const [label, setLabel] = useState("Start");

  const startStop=()=>{
    if(start === 0) {
      setStart(1);
    }
    else if(start === 1) {
      setStart(0);
    }
  }

  const decreaseMins=()=>{
    if(start===1){
      if(Number(mins) > 9){
        setMins(mins-1);
      } else {
        setMins('0'+(mins-1));
      }
    }
  }
  
  const decreaseSec=()=>{
    if(start === 1 && (Number(mins)>0 && Number(secs)>0)){
      if(secs === "00"){
        setSecs(59);
        decreaseMins();
      } else if(secs === 10){
        setSecs("0"+9);
        if(Number(mins)===1 && Number(secs)===1){
          setLabel('Break');
        }
      } else{
        setSecs(secs-1);
      }
    }
  }

  const incrementBreaker=()=>{
    if(breaker<60){
      setBreaker(breaker+1);
    }
  }
  const decreaseBreaker=()=>{
    if(breaker>1){
      setBreaker(breaker-1);
    }
  }
  const incrementSession=()=>{
    if(session<60){
      setMins(session+1);
      setSession(session+1);
    }
  }
  const decreaseSession=()=>{
    if(session>1){
      setMins(session-1);
      setSession(session-1);
    }
  }
  const resetToDefault=()=>{
    setBreaker(5);
    setSession(25);
    setMins(25);
    setSecs('0'+0);
  }

  setInterval(decreaseSec,1000);

  return (
    <div className="pomodoro">
      <h1>QIRoss Pomodoro Clock</h1>
      <div id="labels">
        <div>
          <p id="break-label">Break Length</p>
          <button id="break-increment" onClick={incrementBreaker}>More</button>
          <h1 id="break-length">{breaker}</h1>
          <button id="break-decrement" onClick={decreaseBreaker}>Less</button>
        </div>
        <div>
          <p id="session-label">Session</p>
          <button id="session-increment" onClick={incrementSession}>More</button>
          <h1 id="session-length">{session}</h1>
          <button id="session-decrement" onClick={decreaseSession}>Less</button>
        </div>
        <div>
          <p id="timer-label">{label}</p>
          <audio id="beep">
            <source src="" type="audio/mpeg"/>
          </audio>
          <h1 id="time-left">{mins}:{secs}</h1>
          <button id="start_stop" onClick={startStop}>Start/Stop</button>
          <button id="reset" onClick={resetToDefault}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
