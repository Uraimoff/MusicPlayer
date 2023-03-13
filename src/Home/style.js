import styled from "styled-components";
import background from './../assets/img/background.png'


const Wrapper = styled.div`
    overflow-y: hidden;
    overflow: hidden;
    `
const IMG =styled.img`
overflow-y: hidden;
overflow: hidden;
background-image: url(${background});
opacity: 0.03;
overflow: hidden;
position: absolute;
top: -80px;
z-index: 0;
left: 0;
`
export {Wrapper, IMG}