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
          <button onClick={handlePause}>Pause</button>
        ) : (
          <button onClick={handlePlay}>Play</button>
        )}
        <button onClick={handleStop}>Stop</button>
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