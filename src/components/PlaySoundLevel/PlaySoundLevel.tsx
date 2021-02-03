/* eslint-disable no-console */
import React, { useRef } from 'react';
import sound from '../../assets/audio/city.mp3'; 
import { soundsArr } from '../data/audio';


function PlaySoundLevel() {  
  /* const ref = useRef(new Audio(sound));  */
  const activeLevel: number = 2;

  /* if (ref.current.id === 2) ref.current.play(); */

  return (  
 
  /*   <div>
      {soundsArr.map((item) => {        
        <audio id={item.name} loop className="audio" key={item.id} ref={ref}>
          <source src={item.src} />
          <track kind="captions" />
          Ваш браузер не поддерживает воспроизведение аудио
        </audio>;    
        console.log(ref.current);
        console.log(ref.current.id);
      
      })}
    </div>  */ 

    <div>
      {soundsArr.map((item) => {
        if (item.id === activeLevel) {
          <audio id={item.name} loop className="audio" autoPlay key={item.id}>
            <source src={item.src} />
            <track kind="captions" />
            Ваш браузер не поддерживает воспроизведение аудио
          </audio>; 
          console.log(item);
          const Sound = new Audio(item.src);
          console.log(Sound);
          /* Sound.play(); */
          /* setTimeout(() => {
            Sound.play();
          }, 0); */
        }        
      })}
    </div>  



  /*  <div>
      <audio id="audio-city" loop className="audio" autoPlay>
        <source src={sound} />
        <track kind="captions" />
        Ваш браузер не поддерживает воспроизведение аудио
      </audio>
    </div>   */
  );
}

export default PlaySoundLevel;