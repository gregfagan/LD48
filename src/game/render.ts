import { flow } from 'fp-ts/lib/function';
import { range } from 'fp-ts/lib/ReadonlyArray';
import { Regl, Texture2D, Vec2, Vec3, Vec4 } from 'regl';
import { toGLColor } from '../lib/gl/color';
import { quad } from '../lib/gl/config/quad';
import { sdf } from '../lib/gl/config/sdf';
import { glsl, uniform } from '../lib/gl/regl';
import { stream, Stream } from '../lib/stream';
import { GameBoard, Grid, isTetronimo, stackSize, Tetronimo } from './board';
import { gui as baseGui } from './util';

const gui = baseGui.addFolder('graphics');

const textureSize: Vec2 = [16, 16];
const numBoards = stackSize + 1;

type RenderBoard = Grid<Vec4, typeof textureSize[0], typeof textureSize[1]>;

const colorize = (board: GameBoard): RenderBoard =>
  board.map(row =>
    row.map(cell =>
      isTetronimo(cell)
        ? [...colors[cell](), 1]
        : cell === 1
        ? [1, 1, 1, 1]
        : [0, 0, 0, 0]
    )
  ) as RenderBoard;

const colors: Record<Tetronimo, Stream<Vec3>> = {
  I: gui.auto('#ff9b0d', 'I').map(toGLColor),
  J: gui.auto('#497bff', 'J').map(toGLColor),
  L: gui.auto('#ff5d5d', 'L').map(toGLColor),
  O: gui.auto('#00f0ff', 'O').map(toGLColor),
  S: gui.auto('#00ff86', 'S').map(toGLColor),
  T: gui.auto('#ff74d1', 'T').map(toGLColor),
  Z: gui.auto('#fffb51', 'Z').map(toGLColor),
};

export const render = (regl: Regl) => {
  let textures = range(0, numBoards - 1).map(() =>
    regl.texture({
      min: 'nearest',
      mag: 'nearest',
      format: 'rgba',
      type: 'float32',
      shape: textureSize,
      wrap: 'repeat',
    })
  );

  const update = flow(
    (boards: GameBoard[]) => boards.map(colorize),
    data => data.map((board, index) => textures[index].subimage(board))
  );

  const draw = glsl`
    ${quad}
    ${sdf}
    ${{
      uniforms: textures.reduce((result, texture, i) => {
        result['boards[' + i + ']'] = texture;
        return result;
      }, {} as Record<string, Texture2D>),
      depth: { enable: false },
    }}

    float crop(vec2 p) {
      vec2 crop = step(vec2(-1), p) * step(p, vec2(1));
      float c = crop.x * crop.y;
      return c;
    }

    uniform sampler2D boards[${numBoards}];
  
    vec4 colorBoard(int i, sampler2D tex) {
      float scale = 1. + ${uniform(
        gui.auto(0.3, 'stackScale', 0.1, 2)
      )} * float(i);
      vec2 p = st();

      p *= scale;
      float alpha = crop(p);

      float d = sdBox(p,  vec2(1., 1));
      d = abs(d);
      d = step(d, 0.01);
      vec4 outline = vec4(d * vec3(1), d);

      p = p / 2. + 0.5; 
      p = p * vec2(1, -1);
      vec4 board = texture2D(tex, p);

      float shadow = texture2D(boards[0], p).w * 0.2;
      if (i != 0) board.xyz *= (1. - shadow);

      vec4 color = mix(vec4(board.xyz, board.w * alpha), outline, d);
      return color;
    }

    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (int i = (${numBoards} - 1); i >= 0 ; i--) {
        vec4 boardColor = colorBoard(i, boards[i]);
        float iWeight = 1. - (float(i) / float(${numBoards - 1}));
        float stackFade = ${uniform(gui.auto(0.8, 'stackFade', 0, 1))};
        float stackOpacity = 1. - ((1. - iWeight) * stackFade);
        boardColor = vec4(boardColor.xyz * stackOpacity, boardColor.w);

        color = mix(color, boardColor, boardColor.w);
      }
      gl_FragColor = color;
    }
  `;

  return { update, draw };
};
