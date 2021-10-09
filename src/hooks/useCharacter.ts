import { useState } from 'react';
import { CharacterSides } from '../types/CharacterSides';
import { mapSpots } from '../data/mapSpots';

export const useCharacter = () => {
  const [posicao, setPosicao] = useState({x: 3, y: 5});
  const [side, setSide] = useState<CharacterSides>('down');

const moveLeft = () => {
  setPosicao(posicao  => ({
    x: canMove(posicao.x - 1, posicao.y) ? posicao.x - 1 : posicao.x,
    y: posicao.y
  }));
  setSide('left');
}

const moveRight = () => {
  setPosicao(posicao  => ({
    x: canMove(posicao.x + 1, posicao.y) ? posicao.x + 1 : posicao.x,
    y: posicao.y
  }));
  setSide('right');
}

const moveDown = () => {
  setPosicao(posicao  => ({
    x: posicao.x,
    y: canMove(posicao.x, posicao.y + 1) ? posicao.y + 1 : posicao.y
  }));
  setSide('down');
}

const moveTop = () => {
  setPosicao(posicao  => ({
    x: posicao.x,
    y: canMove(posicao.x, posicao.y - 1) ? posicao.y - 1 : posicao.y,
  }));
  setSide('up');
}

const canMove = (x: number, y: number) => {
  if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined){
    if (mapSpots[y][x] === 1) {
      return true;
    }  
  }
    return false;
}

  return {
    x: posicao.x,
    y: posicao.y,
    side,
    moveDown,
    moveLeft,
    moveRight,
    moveTop
  };
}
