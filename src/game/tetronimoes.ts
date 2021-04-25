import { I, T, J, L, S, Z, O, width, height, Tetronimo } from './board';

export const tetronimoShapes = {
  I: [[I, I, I, I]],
  T: [
    [T, T, T],
    [0, T, 0],
  ],
  J: [
    [0, J],
    [0, J],
    [J, J],
  ],
  L: [
    [L, 0],
    [L, 0],
    [L, L],
  ],
  S: [
    [0, S, S],
    [S, S, 0],
  ],
  Z: [
    [Z, Z, 0],
    [0, Z, Z],
  ],
  O: [
    [O, O],
    [O, O],
  ],
};

export const tetronimoSize = (tetronimoId: Tetronimo) => {
  const height = tetronimoShapes[tetronimoId].length;
  const width = tetronimoShapes[tetronimoId][0].length;
  return { height, width };
};

export const randomTetronimoPosition = (tetronimoId: Tetronimo) => {
  const { height: tHeight, width: tWidth } = tetronimoSize(tetronimoId);
  const maxRow = height - tHeight;
  const maxWidth = width - tWidth;
  const row = Math.floor(Math.random() * maxRow);
  const col = Math.floor(Math.random() * maxWidth);

  return [row, col];
};
