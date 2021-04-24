import { flow } from 'fp-ts/lib/function';
import { DefaultContext, Regl, Vec2, Vec3, Vec4 } from 'regl';
import { toGLColor } from '../lib/gl/color';
import { quad } from '../lib/gl/config/quad';
import { sdf } from '../lib/gl/config/sdf';
import { glsl, uniform } from '../lib/gl/regl';
import { vec2 } from '../lib/math';
import { Stream } from '../lib/stream';
import {
  GameBoard,
  Grid,
  height,
  isTetronimo,
  Tetronimo,
  width,
} from './board';
import { gui as baseGui } from './util';

const gui = baseGui.addFolder('colors');

const size: Vec2 = [width, height];
const textureSize: Vec2 = [16, 16];
const aspect = width / height;
const textureRatio: Vec2 = vec2.div(size, textureSize);

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
      scissor: { enable: false },
    }}

    uniform sampler2D board;
    #define aspect ${aspect}
    #define minTR min(u_textureRatio.x, u_textureRatio.y)

    vec2 texST() {
      vec2 size = ${uniform(() => size)};
      vec2 vr = viewport / min(viewport.x, viewport.y);

      float offset = (1. - min(u_textureRatio.x, u_textureRatio.y)) / 2.;

      vec2 p = uv;
      p = p * vr;

      offset = max(vr.x, vr.y) - 1./aspect;
      p = p - ((viewport.x > viewport.y)
        ? vec2((vr.x - aspect) / 2., 0)
        : vec2(0, (vr.y - 1./aspect)/2.));

      return p;
    }

    vec2 pBoard() {
      vec2 tr = ${uniform(() => textureRatio, 'u_textureRatio')};
      vec2 p = texST();
      p = p * ((viewport.x < viewport.y) ? u_textureRatio.x : u_textureRatio.y);
      return p;
    }


    float inBounds() {
      vec2 p = pBoard();
      vec2 bounds = vec2(1);
      bounds = step(vec2(0), p) * step(p, u_textureRatio);
      return bounds.x * bounds.y;
    }

    vec4 colorBoard() {
      return vec4(texture2D(board, pBoard()).xyz, inBounds());
    }

    void main() {
      gl_FragColor = vec4(mix(colorBoard().xyz, vec3(0.5), 1.-inBounds()), 1);
    }
  `;

  return { update, draw };
};
