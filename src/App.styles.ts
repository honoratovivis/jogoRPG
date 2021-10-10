import styled from "styled-components";

export const Page = styled.body`
html, body {
  margin: 0;
  padding: 0;
}
`

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