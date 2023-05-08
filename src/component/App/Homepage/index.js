import './styles.scss';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Homepage() {
  const [words] = useState([
    'My name is Rayane Dumont',
    "I'm a web developer from France",
    "I'm also a music producer",
    'You can check out my work below',
  ]);
  const [part, setPart] = useState('');
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const wordFlickInterval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI(i + 1);
          setOffset(0);
          if (i + 1 >= words.length) {
            setI(0);
          }
        }
      }
      const newPart = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          setOffset(offset + 1);
        } else {
          setOffset(offset - 1);
        }
      }
      setPart(newPart);
    }, speed);

    return () => {
      clearInterval(wordFlickInterval);
    };
  }, [forwards, i, offset, skipCount, words]);

  return (
    <div className='homepage-container'>
      <div className='homepage-content'>
        <p className='homepage-title'>Welcome !</p>
        <div className="word">{part}</div>
        <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>
      </div>
      </div>
      <div className='homepage-buttons'>
        <NavLink to='/projects'><button>Projects</button></NavLink>
        <NavLink to='/music'><button>Music</button></NavLink>
        <NavLink to='/about-me'><button>About Me</button></NavLink>
      </div>
    </div>
  );
}

export default Homepage;