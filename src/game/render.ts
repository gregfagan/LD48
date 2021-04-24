import { flow } from 'fp-ts/lib/function';
import { Regl, Vec2, Vec3, Vec4 } from 'regl';
import { toGLColor } from '../lib/gl/color';
import { quad } from '../lib/gl/config/quad';
import { sdf } from '../lib/gl/config/sdf';
import { glsl } from '../lib/gl/regl';
import { Stream } from '../lib/stream';
import { GameBoard, Grid, isTetronimo, Tetronimo } from './board';
import { gui as baseGui } from './util';

const gui = baseGui.addFolder('colors');

const textureSize: Vec2 = [16, 16];

type RenderBoard = Grid<Vec4, typeof textureSize[0], typeof textureSize[1]>;

const colorize = (board: GameBoard): RenderBoard =>
  board.map(row =>
    row.map(cell => (isTetronimo(cell) ? [...colors[cell](), 1] : [0, 0, 0, 0]))
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
  let texture = regl.texture({
    min: 'nearest',
    mag: 'nearest',
    format: 'rgba',
    type: 'float32',
    shape: textureSize,
    wrap: 'repeat',
  });

  const update = flow(colorize, data => texture.subimage(data));

  const draw = glsl`
    ${quad}
    ${sdf}
    ${{
      uniforms: { board: texture },
      depth: { enable: false },
    }}

    float crop(vec2 p) {
      vec2 crop = step(vec2(-1), p) * step(p, vec2(1));
      float c = crop.x * crop.y;
      return c;
    }

    uniform sampler2D board;
  
    vec4 colorBoard() {
      float scale = 1.5;
      vec2 p = st();

      p *= scale;
      float alpha = crop(p);

      float d = sdBox(p,  vec2(1., 1));
      d = abs(d);
      d = aastep(d, 0.01);
      vec4 outline = vec4(d * vec3(1), d);

      p = p / 2. + 0.5; 
      p = p * vec2(1, -1);
      vec4 board = texture2D(board, p); 

      vec4 color = mix(vec4(board.xyz, board.w * alpha), outline, d);
      return color;
    }

    void main() {
      gl_FragColor = colorBoard();
    }
  `;

  return { update, draw };
};
