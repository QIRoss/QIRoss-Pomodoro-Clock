import React, { useState } from 'react';

function Pomodoro() {
  const [breaker,setBreaker] = useState(5);
  const [session,setSession] = useState(25);
  const [secs, setSecs] = useState('0'+0);
  const [mins, setMins] = useState(session);
  const [start, setStart] = useState(0);

  const startStop=()=>{
    if(!start) {
      setStart(1);
      decreaseSec();
    }
    else {
      setStart(0);

    }
  }
  
  const decreaseSec=()=>{
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
      setSession(session+1);
    }
  }
  const decreaseSession=()=>{
    if(session>1){
      setSession(session-1);
    }
  }
  const resetToDefault=()=>{
    setBreaker(5);
    setSession(25);
    setMins(25);
    setSecs('0'+0);
  }

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
          <p id="timer-label">Break!</p>
          <audio id="beep">
            <source src="ta-saindo-da-jaula-o-monstro_1.mp3" type="audio/mpeg"/>
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
