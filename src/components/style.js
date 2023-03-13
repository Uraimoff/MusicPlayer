import styled from "styled-components";

const GlobalWrapper=styled.div`
    z-index: 1;
`
const MusicWr=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
span{
    font-family: 'Josefin Sans' sans-serif;
    font-size: 30px;
    font-weight: 600;

}
`
const MusicListWr = styled.div`
position: fixed;
z-index: 3;
`
const MusicListWrBottom = styled.div`
position: fixed;
bottom: 0;
z-index: 3;
width: 100%;

`
const IMG= styled.img`
    width: 40px;

`
const ButtonsdeMusic= styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 20px;
`
const LengthMusic = styled.div`
`
const MusicTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const MusicTitles = styled.div`

`
const Img = styled.img`
width: 60px;
`
const MusicPrevNextButt = styled.img`
width: 35px;
`
const MusicPlayPauseButt = styled.img`
width: 60px;
`
const MusicName = styled.div`
font-size: 20px;
font-weight: 800;
`
const MusicAuthor = styled.div`

`
const MusicControlButt = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
`
const Volume = styled.input`
::-webkit-slider-runnable-track{

    background: #000;
    color: red;
}
::-webkit-slider-thumb{
    background: red;
    color: red;

}
`
export {MusicWr, IMG,Img, Volume, MusicListWr,MusicPlayPauseButt,MusicPrevNextButt,MusicAuthor,MusicControlButt,MusicTitle,MusicName,MusicTitles, LengthMusic, GlobalWrapper, MusicListWrBottom, ButtonsdeMusic}