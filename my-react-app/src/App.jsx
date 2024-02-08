import { useState } from 'react'
import './App.css'
import QRModal from './QRModal';


function App() {
  const [showQR, setShowQR] = useState(false);
  
  // Example data - replace with your own logic
  const qrData = "Sean is bad at Mario Kart";
  const qrTitle = "Example QR Code";

  function nextPage1() {
    //save stuff to localStorage
  }

  async function assignRobot(){
    
  }

  return (
    <div className="app">
      <div class="page page1">
        {/* event, role, name, match, robot */}
        <h1>AEMScout</h1>
        <form>
          <div class="question">
            <label for="event">Event: </label>
            <select name="role" required>
                <option value="Clackamas">Clackamas</option>
                <option value="SunDome">SunDome</option>
                <option value="Wilsonville">Wilsonville</option>
                <option value="DCMP">DCMP</option>
                <option value="Worlds">Worlds</option>
            </select>
          </div>
          <div class="question">
            <label for="role">Role: </label>
              <select name="role" required>
                <option value="blue1">Blue 1</option>
                <option value="blue2">Blue 2</option>
                <option value="blue3">Blue 3</option>
                <option value="red1">Red 1</option>
                <option value="red2">Red 2</option>
                <option value="red3">Red 3</option>
              </select>
          </div>
          <div class="question">
            <label for="initials">Scouter Initials: </label>
            <input type="text" id="initials" required></input>
          </div>
          <div class="question">
            <label for="event">Match: </label>
            <input type="text" id="event" required></input>
          </div>
          <div class="question">
            <label for="robot">Robot: </label>
            <input type="text" id="robot" required></input>
          </div>
        </form>
        <button onClick={() => nextPage1()}>next page</button>
      </div>
      <div class="page page2">
        {/* auto (map) */}
        <h1>Ready to scout?</h1>
      </div>
      <div class="page page3">
        {/* teleop (speaker, amp, pickup, drop, trap, climb) */}
        <h1>Ready to scout?</h1>
      </div>
      <div class="page page4">
        {/* fouls, fail(climb), CFL (common fail list), Other, Pickup? */}
        <h1>Ready to scout?</h1>
      </div>
      <div class="page page5">
        <button onClick={() => setShowQR(true)}>Generate QR Code</button>
        <QRModal
          show={showQR}
          title={qrTitle}
          data={qrData}
          onDismiss={() => setShowQR(false)}
        />
      </div>
    </div>
  );
}

export default App;

