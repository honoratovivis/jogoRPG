import styled from "styled-components";

export const Container = styled.div `
  background-color: #24282F;
  min-height: 100vh; //a altura mínima é todo tamanho disponível de tela
  color: #FFF;
`

export const Map = styled.div `
  height: 480px;
  width: 480px;
  background-image: url('/assets/map.png');
  background-position: left top;
  background-size: 100%;
`

/*export const Obstacle = styled.div `
  height: 30px;
  width: 30px;
  background-image: url('/assets/fire.gif');
  background-position: top right;
  background-size: 100%;
`*/