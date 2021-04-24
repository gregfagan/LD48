import { Regl, Vec4 } from 'regl';
import { glsl } from '../lib/gl/regl';
import { example, GameBoard, Grid } from './board';

type RenderBoard = Grid<Vec4, 4, 4>;
const colorize = (board: GameBoard): RenderBoard =>
  board.map(row =>
    row.map(cell => (cell === null ? [0, 0, 0, 0] : [1, 1, 1, 1]))
  ) as RenderBoard;

export const board = (regl: Regl) => {
  const texture = regl.texture({
    min: 'nearest',
    mag: 'nearest',
    format: 'rgba',
    type: 'float32',
    radius: 4,
    data: colorize(example),
  });

  const fbo = regl.framebuffer({
    depth: false,
    color: texture,
  });

  return glsl`
  ${{ uniforms: { board: fbo } }}
  uniform sampler2D board;
  vec4 colorBoard() {
    // texture is vertically flipped from the 2D array
    vec2 p = st() * vec2(1., -1.) / 2. + 0.5;
    return texture2D(board, p);
  }
`;
};
