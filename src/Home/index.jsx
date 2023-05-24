import React from "react";
import MusicPLayer from "../components/MusicPLayer";
import { IMG, Wrapper } from "./style";
import background from './../assets/img/background.png'
// import MusiPlayer from "../components/exampleOfMusicPlayer";

const Home = () => {
  return (
    <Wrapper>
      <MusicPLayer />
      {/* <MusiPlayer/> */}
      <IMG src={background} alt="bg" />
    </Wrapper>
  );
};

export default Home;
