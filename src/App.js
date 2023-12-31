import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './App.css';

function App() {
  const webcamRef = useRef(null);
  const [videoClass, setVideoClass] = useState('');
  const [buttonContainerClass, setButtonContainerClass] = useState('');

  const handleButtonClick = (width, height) => {
    const cssClass = `
      video {
        width: ${width}px;
        height: ${height}px;
        object-fit: cover;
      }
    `;
    setVideoClass(cssClass);
    setButtonContainerClass('button-container-fullscreen');
  };

  return (
    <div>
      
      <div className={buttonContainerClass}>
        <button onClick={() => handleButtonClick(2160, 3840)}>Open Camera 3840x2160</button>
        <button onClick={() => handleButtonClick(2160, 1080)}>Open Camera 2160x1080</button>
        <button onClick={() => handleButtonClick(720, 720)}>Open Camera 720x720</button>
        <button onClick={() => handleButtonClick(1080, 2160)}>Open Camera 1080x2160</button>
        <button onClick={() => handleButtonClick(1080, 1920)}>Open Camera 1920 x 1080</button>

      </div>
      <style>{videoClass}</style>
      <Webcam ref={webcamRef} className="video" />
    </div>
  );
}

export default App;
