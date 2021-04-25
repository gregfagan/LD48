import { I, T, J, L, S, Z, O, Tetronimo } from './board';

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
