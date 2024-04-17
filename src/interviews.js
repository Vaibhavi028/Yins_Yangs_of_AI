import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import Lottie from 'react-lottie';
import './page.css';
import audio1 from './img/audio1.mp3'; 
import audio2 from './img/audio2.mp3';
import audio3 from './img/audio3.mp3'; 
import audio4 from './img/audio4.mp3';
import audio5 from './img/audio5.mp3'; 
import audio6 from './img/audio6.mp3';
import audio7 from './img/audio7.mp3'; 
import audio8 from './img/audio8.mp3';
import freqAnimationData from './img/freq.json'; 

const Interviews = () => {
  const [playing, setPlaying] = useState(null); 
  const [audioElement, setAudioElement] = useState(null);

  const playAudio = (audio) => {
    if (playing === audio) {
      if (audioElement.paused) {
        audioElement.play();
        setPlaying(audio);
      } else {
        audioElement.pause();
        setPlaying(null);
      }
    } else {
      if (audioElement) {
        audioElement.pause();
      }
      const newAudioElement = new Audio(audio);
      setAudioElement(newAudioElement);
      newAudioElement.play();
      setPlaying(audio);
    }
  };

  return (
    <div className="cont1">
      <h1 className="pg-title">Interviews</h1>
      <div className="boxes">
        <div className="box" onClick={() => playAudio(audio1)}>
          {playing === audio1 ? (
            <Lottie options={{ animationData: freqAnimationData }} height={100} width={100} /> 
          ) : (
            <FaPlay style={{ width: '30%', height: 'auto' }} /> 
          )}
        </div>
        <div className="box" onClick={() => playAudio(audio2)}>
          {playing === audio2 ? (
            <Lottie options={{ animationData: freqAnimationData }} height={100} width={100} /> 
          ) : (
            <FaPlay style={{ width: '30%', height: 'auto' }} /> 
          )}
        </div>
        <div className="box" onClick={() => playAudio(audio3)}>
          {playing === audio3 ? (
            <Lottie options={{ animationData: freqAnimationData }} height={100} width={100} /> 
          ) : (
            <FaPlay style={{ width: '30%', height: 'auto' }} /> 
          )}
        </div>
        <div className="box" onClick={() => playAudio(audio4)}>
          {playing === audio4 ? (
            <Lottie options={{ animationData: freqAnimationData }} height={100} width={100} /> 
          ) : (
            <FaPlay style={{ width: '30%', height: 'auto' }} /> 
          )}
        </div>
        <div className="box" onClick={() => playAudio(audio5)}>
          {playing === audio5 ? (
            <Lottie options={{ animationData: freqAnimationData }} height={100} width={100} /> 
          ) : (
            <FaPlay style={{ width: '30%', height: 'auto' }} /> 
          )}
        </div>
        <div className="box" onClick={() => playAudio(audio6)}>
          {playing === audio6 ? (
            <Lottie options={{ animationData: freqAnimationData }} height={100} width={100} /> 
          ) : (
            <FaPlay style={{ width: '30%', height: 'auto' }} /> 
          )}
        </div>
        <div className="box" onClick={() => playAudio(audio7)}>
          {playing === audio7 ? (
            <Lottie options={{ animationData: freqAnimationData }} height={100} width={100} /> 
          ) : (
            <FaPlay style={{ width: '30%', height: 'auto' }} /> 
          )}
        </div>
        <div className="box" onClick={() => playAudio(audio8)}>
          {playing === audio8 ? (
            <Lottie options={{ animationData: freqAnimationData }} height={100} width={100} /> 
          ) : (
            <FaPlay style={{ width: '30%', height: 'auto' }} /> 
          )}
        </div>
      </div>
    </div>
  );
};

export default Interviews;
