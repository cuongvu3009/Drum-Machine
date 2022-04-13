import React, { useState } from 'react';
import './pad.css';

const Pad = ({ note, powerOn }) => {
  const [currentKey, setCurrentKey] = useState('');
  const { id, keyCode, keyTrigger, url } = note;

  const audio = new Audio(url);

  const start = () => {
    audio.play();
  };

  const handleClick = () => {
    if (powerOn) {
      start();
    }
    setCurrentKey(id);
  };

  return (
    <div className='key' key={id}>
      <button onClick={() => handleClick()} className='key-btn'>
        {keyTrigger}
      </button>
    </div>
  );
};

export default Pad;
