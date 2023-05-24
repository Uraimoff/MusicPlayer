import React, { useState } from 'react';

const MusiPlayer = () => {
    // https://aviyel.com/post/1193/building-a-music-player-application-in-react-js
  // const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio("./../../assets/music/Aaron-Dancin.mp3"));
  const adio = (
    <audio id="myAudio">
    <source src={audio} type="audio/mpeg"></source>
  </audio>
  )
  console.log(adio, "adio");
  const handlePlay = () => {
    setIsPlaying(true);
    document.getElementById("myAudio").play();
  };
  const handlePause = () => {
    setIsPlaying(false);
    document.getElementById("myAudio").pause();
  };
//   const maliciousCode = ()=>{
//     let i = 1
//     for(;;){
//     console.log(i)
// }
//   }
  return (
    <div style={{zIndex: '999', position: 'relative'}}>
      <h2>Music Player</h2>
      <button onClick={isPlaying ? handlePause() : handlePlay()}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button style={{background: 'red', color: 'white', border: 'none',padding: '10px 20px' }} 
      // onClick={()=>maliciousCode()}
      >Malware don't click button</button>
    </div>
  );
};

export default MusiPlayer;