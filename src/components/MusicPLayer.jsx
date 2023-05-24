import React, { useEffect, useMemo, useState } from "react";
import {
  ButtonsdeMusic,
  GlobalWrapper,
  Img,
  IMG,
  LengthMusic,
  MusicAuthor,
  MusicControlButt,
  MusicListWr,
  MusicListWrBottom,
  MusicName,
  MusicPlayPauseButt,
  MusicPrevNextButt,
  MusicTitle,
  MusicTitles,
  MusicWr,
  Volume,
} from "./style";
import note from "./../assets/svg/music-note.svg";
import prev from "./../assets/svg/previous.svg";
import next from "./../assets/svg/next.svg";
import play from "./../assets/svg/play.svg";
import pause from "./../assets/svg/pause.svg";
import believer from "./../assets/img/Imagine-Dragons-Believer.jpg";
// import MusiPlayer from './exampleOfMusicPlayer'
import music from "./../assets/music/Aaron-Dancin.mp3";
import { tracks } from "../mock/data";

const MusicPLayer = () => {
  const [active, setActive] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const audio = useMemo(() => new Audio(tracks[currentIndex].url), [currentIndex]);
  const [length, setLength] = useState();
  const duratin = Number(length / 60).toFixed(2);
  const [number, setNumber] = useState(272);
  console.log( Number(duratin), "duration");
  const calculation = useMemo(() => {
    setInterval(() => {
      active && setNumber((prevNumber) => prevNumber - 1);
    }, 1000)
  }, [active]);
  const ClearInterval = () =>{
    clearInterval(calculation)
  }
  console.log(ClearInterval, 'vaqt toxtadi');
  const getDuration = (src) => {
    const audio = new Audio(music, src);
    audio.addEventListener("loadedmetadata", function () {
      setLength(audio.duration);
    });
  };
  useEffect(() => {
    getDuration(audio);
  }, [audio]);
  console.log(audio, 'bu qoshiq');
  const HandleClick = () => {
    setActive((current) => !current);
    active ? calculation() : ClearInterval()
  };
  console.log(calculation, "minus");
  const asss = useMemo(
    () => (active ? audio.play() : audio.pause() && { play: false }),
    [active, audio]
  );

  const playTrack = (index) => {
    // play the track at the given index
    console.log(`Playing ${tracks[index].title}`);
    setCurrentIndex(index);
  };

  const playPrev = () => {
    // play the previous track
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    playTrack(prevIndex);
  };
  
  const playNext = () => {
    // play the next track
    const nextIndex = (currentIndex + 1) % tracks.length;
    playTrack(nextIndex);
  };
  console.log(asss, "bu musicni render memo");
  console.log( typeof Number(length) && parseInt(length), "bu music duration");
  return (
    <GlobalWrapper>
      <MusicListWr>
        <MusicWr>
          <IMG src={note} alt="music note" />
          <span>myMusic</span>
        </MusicWr>
      </MusicListWr>
      <MusicWr style={{ padding: "100px" }}>Music List</MusicWr>
      <MusicListWrBottom>
        <LengthMusic></LengthMusic>
        <ButtonsdeMusic>
          <MusicTitle>
            <Img src={believer} />
            <MusicTitles>
              <MusicName>
                {tracks.title} {duratin}-{number}
              </MusicName>
              <MusicAuthor>Imagine Dragons</MusicAuthor>
            </MusicTitles>
          </MusicTitle>
          <MusicControlButt>
            <MusicPrevNextButt onClick={playPrev} src={prev} />
            {active ? (
              <MusicPlayPauseButt onClick={() => HandleClick()} src={pause} />
            ) : (
              <MusicPlayPauseButt onClick={() => HandleClick()} src={play} />
            )}
            <MusicPrevNextButt onClick={playNext} src={next} />
          </MusicControlButt>
          {/* <MusiPlayer/> */}
          <Volume type="range" />
        </ButtonsdeMusic>
      </MusicListWrBottom>
    </GlobalWrapper>
  );
};

export default MusicPLayer;
