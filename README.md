# Mini Jogo RPG feito com TypeScript e React JS.



​Nesse projeto foram instalados:
​		• Styled-Components.
​		• @types/styled-components.



​Esse projeto tem como objetivo fazer um mini mapa de Jogo de RPG, onde o personagem principal não pode andar por todo mapa. Existindo pontos que serão tratados como obstáculos, como na imagem abaixo:

![jogo-RPG](https://user-images.githubusercontent.com/83321496/137221757-607d6ed4-f4ea-4583-aadd-83ea147dda95.png)


​A Fonte de Água, o Cercado, as Plantas, além de não poder sair para fora do mapa, são considerados obstáculos. Sendo esses especificados na Matriz abaixo, através de 0 e 1:

![matriz-jogo-RPG](https://user-images.githubusercontent.com/83321496/137221775-99fb2481-1ee7-480b-8c10-feeae37324f2.png)


​A figura do mapa tem 480px e a matriz foi feita justamente para essa imagem. Onde nos 0(s) o personagem não pode transitar, já nos elementos 1(s) o Character pode sim transitar.



​No código existiu constante utilização de Arrow Functions, além de trabalho com Hook Personalizado e tipagem em vários elementos ao longo do código.



​Meu próximo objetivo por aqui para esse projeto é adicionar obstáculos do tipo 'fire' no jogo, ou seja, ainda está em construção.


> Esse projeto foi feito através de uma vídeo aula do canal Bonieky Lacerda, do vídeo Jogo RPG em React - Projeto 4 - Desafio 5em5 (React).
