import React, { useRef, useState, useEffect } from 'react';
import song1 from '../assets/audio/lofi.mp3';


const AudioPlayer = () => {
  const audioRef = useRef(null); 
  const [volume, setVolume] = useState(0);
  const [Button, SetButton] = useState('Play');

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const changeButton = () => {
    if (Button === 'Play') {
      SetButton('Pause')
      audioRef.current.play();
    }
    else {
      SetButton('Play')
      audioRef.current.pause();
    }
  };


  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };


  return (
    <div className="absolute bottom-0 left-0 text-white text-3xl p-3">
      <h2>Now Playing: Lofi music</h2>
      
      <audio ref={audioRef} src = {song1} loop />
      <button onClick={changeButton}>{Button}</button>
      <div className="volume-control">
        <label htmlFor="volume">Volume</label>
        <input
          type="range"
          id="volume"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className='h-2 bg-gray-300 rounded-lg appearance-none ml-3'
        />
      </div>

      <h1>credits: https://www.youtube.com/watch?v=kSNH-18gjQY&t=1019s</h1>
    </div>
  );
};


export default AudioPlayer;

