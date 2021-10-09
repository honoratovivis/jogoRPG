import styled from "styled-components";

export const Container = styled.div<{size: number, left:number, top: number, sidePosicao: number}> `
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  background-image: url('/assets/char.png');
  background-position: 0px ${props => props.sidePosicao}px;
`

