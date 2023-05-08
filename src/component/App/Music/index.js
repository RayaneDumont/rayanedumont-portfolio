import './styles.scss';
import React, { useState } from 'react';
import audioFile1 from './../assets/lookin-for-some.mp3';
import audioFile2 from './../assets/glory.mp3';

function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState(audioFile1);

  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const handleStop = () => {
    setIsPlaying(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const handleAudioSelect = (audio) => {
    setSelectedAudio(audio);
    handleStop(); // Stop playback when a new audio is selected
  };

  const audioRef = React.createRef();

  return (
    <div className='player-container'>
      <audio ref={audioRef} src={selectedAudio} />
      <div className='player-buttons'>
        {isPlaying ? (
          <button onClick={handlePause} className='pause'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
          </button>
        ) : (
          <button onClick={handlePlay} className='play'>
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor">
                </path>
            </svg>
          </button>
        )}
        <button onClick={handleStop} className='stop'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect></svg>
        </button>
      </div>

      <div className='playlist-container'>
        <h3 className='playlist-title'>Select Audio:</h3>
        <button className='card-title' onClick={() => handleAudioSelect(audioFile1)}>Berserk</button>
        <button className='card-title' onClick={() => handleAudioSelect(audioFile2)}>Akira</button>
      </div>
    </div>
  );
}

export default Music;