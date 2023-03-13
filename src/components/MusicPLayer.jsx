import React, { useState } from 'react'
import { ButtonsdeMusic, GlobalWrapper, Img, IMG, LengthMusic, MusicAuthor, MusicControlButt, MusicListWr, MusicListWrBottom, MusicName, MusicPlayPauseButt, MusicPrevNextButt, MusicTitle, MusicTitles, MusicWr, Volume } from './style'
import note from './../assets/svg/music-note.svg'
import prev from './../assets/svg/previous.svg'
import next from './../assets/svg/next.svg'
import play from './../assets/svg/play.svg'
import pause from './../assets/svg/pause.svg'
import believer from './../assets/img/Imagine-Dragons-Believer.jpg'
import MusiPlayer from './exampleOfMusicPlayer'

const MusicPLayer = () => {
  const [active, setActive]=useState()

  const handleClick = () => {
    setActive((current) => !current);
  };
  return (
    <GlobalWrapper>
        <MusicListWr>

        <MusicWr>
            <IMG src={note} alt='music note'/><span>myMusic</span>
        </MusicWr>
        </MusicListWr>
        <MusicWr style={{padding: '100px'}}>Music List</MusicWr>
        <MusicListWrBottom>
          <LengthMusic></LengthMusic>
          <ButtonsdeMusic>
            <MusicTitle>
              <Img src={believer}/>
              <MusicTitles>
                <MusicName>Believer</MusicName>
                <MusicAuthor>Imagine Dragons</MusicAuthor>
              </MusicTitles>
            </MusicTitle>
              <MusicControlButt>
                <MusicPrevNextButt src={prev}/>
                { active ?
                <MusicPlayPauseButt onClick={() => handleClick()} src={pause}/>
                :
                <MusicPlayPauseButt onClick={() => handleClick()} src={play}/>
                }
                <MusicPrevNextButt src={next}/>
              </MusicControlButt>
              <MusiPlayer/>
              <Volume type='range'/>
          </ButtonsdeMusic>
        </MusicListWrBottom>
    </GlobalWrapper>
  )
}

export default MusicPLayer;