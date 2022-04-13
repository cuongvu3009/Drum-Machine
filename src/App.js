import './App.css';
import React, { useState } from 'react';
import bankOne from './data';
import bankTwo from './data2';
import Pad from './Pad';
import PadScreen from './PadScreen';
import './toolbox.css';

function App() {
  const [isSwitchBank, setIsSwitchBank] = useState(false);
  const [keys, setKeys] = useState(bankOne);
  const [powerOn, setPowerOn] = useState(true);

  const handleClickBank = () => {
    setIsSwitchBank(!isSwitchBank);
    if (isSwitchBank === true) {
      setKeys(bankOne);
    } else {
      setKeys(bankTwo);
    }
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='note-container'>
          <div className='key-container'>
            {keys.map((note) => (
              <Pad note={note} key={note.id} powerOn={powerOn} />
            ))}
          </div>

          <div className='toolbox'>
            <button onClick={() => setPowerOn(!powerOn)}>
              {powerOn ? 'Power On' : 'Power Off'}
            </button>

            <button onClick={() => handleClickBank()}>Change bank</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
