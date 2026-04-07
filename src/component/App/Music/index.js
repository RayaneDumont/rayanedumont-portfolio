import './styles.scss';
import React, { useState, useRef, useEffect } from 'react';
import audioFile1 from './../assets/lookin-for-some.mp3';
import audioFile2 from './../assets/glory.mp3';
import audioFile3 from './../assets/king-disease.mp3';
import audioFile4 from './../assets/vice-city.mp3';
import audioFile5 from './../assets/mystic-ruins.mp3';
import audioFile6 from './../assets/quantum-break.mp3';

const PLAYLIST = [
  { file: audioFile1, title: 'Berserk' },
  { file: audioFile2, title: 'Akira' },
  { file: audioFile3, title: 'King Disease' },
  { file: audioFile4, title: 'Vice City' },
  { file: audioFile5, title: 'Mystic Ruins' },
  { file: audioFile6, title: 'Quantum Break' },
];

function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentIndex]);

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

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const newTime = Number(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleTrackSelect = (index) => {
    setCurrentIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    handleTrackSelect((currentIndex - 1 + PLAYLIST.length) % PLAYLIST.length);
  };

  const handleNext = () => {
    handleTrackSelect((currentIndex + 1) % PLAYLIST.length);
  };

  const handleEnded = () => {
    handleNext();
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className='player-container'>
      <audio
        ref={audioRef}
        src={PLAYLIST[currentIndex].file}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
      <p className='player-title'>My music</p>
      <div className='player'>
        <p className='now-playing'>{PLAYLIST[currentIndex].title}</p>
        <div className='player-buttons'>
          <button onClick={handlePrev} className='prev-next'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
          </button>
          {isPlaying ? (
            <button onClick={handlePause} className='pause'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
            </button>
          ) : (
            <button onClick={handlePlay} className='play'>
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px">
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path>
              </svg>
            </button>
          )}
          <button onClick={handleStop} className='stop'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect></svg>
          </button>
          <button onClick={handleNext} className='prev-next'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
          </button>
        </div>
        <div className='progress-container'>
          <span className='current-time'>{formatTime(currentTime)}</span>
          <input
            type='range'
            className='progress-bar'
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
          />
          <span className='current-time'>{formatTime(duration)}</span>
        </div>
      </div>

      <div className='playlist-container'>
        <h3 className='playlist-title'>Select Audio</h3>
        <div className='playlist-songs'>
          {PLAYLIST.map((track, index) => (
            <button
              key={track.title}
              className={`card-title${index === currentIndex ? ' active' : ''}`}
              onClick={() => handleTrackSelect(index)}
            >
              {track.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Music;
