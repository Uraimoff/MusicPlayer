import React, { useState } from 'react';

const MusiPlayer = () => {
    // https://aviyel.com/post/1193/building-a-music-player-application-in-react-js
  // const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio("./../../assets/music/Aaron-Dancin.mp3"));

  const handlePlay = () => {
    setIsPlaying(true);
    audio.play();
  };
  const handlePause = () => {
    setIsPlaying(false);
    audio.pause();
  };

  return (
    <div>
      <h2>Music Player</h2>
      <button onClick={isPlaying ? handlePause : handlePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default MusiPlayer;