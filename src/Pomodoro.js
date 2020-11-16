function Pomodoro() {
  return (
    <div className="pomodoro">
      <h1>QIRoss Pomodoro Clock</h1>
      <div id="labels">
        <div>
          <p id="break-label">Break Length</p>
          <button id="break-increment">More</button>
          <h1 id="break-length">5</h1>
          <button id="break-decrement">Less</button>
        </div>
        <div>
          <p id="session-label">Session Length</p>
          <button id="session-increment">More</button>
          <h1 id="session-length">25</h1>
          <button id="session-decrement">Less</button>
        </div>
        <div>
          <p id="timer-label">Break!</p>
          <audio id="beep">
            <source src="ta-saindo-da-jaula-o-monstro_1.mp3" type="audio/mpeg"/>
          </audio>
          <h1 id="time-left">00:00</h1>
          <button id="start_stop">Start/Stop</button>
          <button id="reset">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
