import { flow } from 'fp-ts/lib/function';
import { range, takeLeft } from 'fp-ts/lib/ReadonlyArray';
import { Regl, Texture2D, Vec2, Vec3, Vec4 } from 'regl';
import { toGLColor } from '../lib/gl/color';
import { quad } from '../lib/gl/config/quad';
import { sdf } from '../lib/gl/config/sdf';
import { glsl, uniform } from '../lib/gl/regl';
import { vec2 } from '../lib/math';
import { log, stream, Stream } from '../lib/stream';
import { width } from './board';
import { state } from './state';
import { BlockPositions, Tetronimo, transform } from './tetronimoes';
import { gui as baseGui } from './util';

const gui = baseGui.addFolder('graphics');

const colors: Record<Tetronimo, Stream<Vec3>> = {
  I: gui.auto('#ff9b0d', 'I').map(toGLColor),
  J: gui.auto('#497bff', 'J').map(toGLColor),
  L: gui.auto('#ff5d5d', 'L').map(toGLColor),
  O: gui.auto('#00f0ff', 'O').map(toGLColor),
  S: gui.auto('#00ff86', 'S').map(toGLColor),
  T: gui.auto('#ff74d1', 'T').map(toGLColor),
  Z: gui.auto('#fffb51', 'Z').map(toGLColor),
};

type Shape = {
  blocks: BlockPositions;
  beat: number;
  color: Vec3;
  active: boolean;
  invert: boolean;
};

const numShapesToRender = 8;

const emptyShape: Shape = {
  blocks: range(0, 3).map(() => vec2.zero()) as BlockPositions,
  beat: 0,
  color: [0, 0, 0],
  active: false,
  invert: false,
};

const constantLength = (shapes: Shape[]) => {
  const extraShapes = range(1, numShapesToRender - shapes.length).map(
    () => emptyShape
  );

  return shapes.length < numShapesToRender
    ? shapes.concat(extraShapes)
    : shapes.slice(0, numShapesToRender);
};
const u = state
  .map(s => {
    const shapes = takeLeft(8)(s.tetronimoes).map(
      (shape): Shape => {
        const isHole = shape.type === 'hole';
        const color: Vec3 = isHole ? [1, 1, 1] : colors[shape.tetronimo]();
        return {
          blocks: transform(shape),
          color,
          beat: shape.beat - s.currentBeat,
          active: true,
          invert: isHole,
        };
      }
    );

    return shapes;
  })
  .map(constantLength);

const points = ['a', 'b', 'c', 'd'];
const uniforms = range(1, numShapesToRender).reduce((result, _, index) => {
  for (const key of Object.keys(u()[index])) {
    if (key === 'blocks') continue;
    result[`shapes[${index}].${key}`] = () => u()[index][key as keyof Shape];
  }
  range(0, 3).forEach(j => {
    result[`shapes[${index}].${points[j]}`] = () => u()[index].blocks[j];
  });
  return result;
}, {} as Record<string, unknown>);

export const draw = glsl`
    ${quad}
    ${sdf}
    ${{ uniforms, depth: { enable: false } }}
    struct Shape {
      vec2 a;
      vec2 b;
      vec2 c;
      vec2 d;
      float beat;
      vec3 color;
      bool active;
      bool invert;
    };

    #define numShapes ${numShapesToRender}
    #define numBeats ${numShapesToRender}.

    #define board vec2(${width})
    #define halfBoard (board/2.)

    uniform Shape shapes[numShapes];

    vec2 scaleToBeat(vec2 p, float beat) {
      p -= halfBoard;
      p *= (1. + beat * ${uniform(gui.auto(0.2, 'beatScale', 0.1, 1))});
      p += halfBoard;
      return p;
    }

    float fadeToBeat(float beat) {
      return 1. - 0.8 * (beat / numBeats);
    }

    float sdEdges(vec2 p) {
      // centered box with half edge of 8
      return sdBox(p - halfBoard, halfBoard) - 0.15;
    }

    float sdBlock(vec2 p, vec2 b) {
      vec2 blockP = b + vec2(0.5);
      return sdBox(p - blockP, vec2(0.5));
    }

    float sdShape(vec2 p, Shape s) {
      float d = INFINITY;
      
      float k = 0.01;
      d = opSmoothUnion(d, sdBlock(p, s.a), k);
      d = opSmoothUnion(d, sdBlock(p, s.b), k);
      d = opSmoothUnion(d, sdBlock(p, s.c), k);
      d = opSmoothUnion(d, sdBlock(p, s.d), k);

      d = s.invert ? -d : d;

      // crop to board
      d = max(sdEdges(p), d);

      return d;
    }

    vec4 colorShape(vec2 p, Shape s) {
      // first, get the opacity of this shape
      float alpha = step(sdShape(scaleToBeat(p, s.beat), s), 0.);
      if (s.invert) alpha *= 0.98;

      // next, loop through all the shapes to see if there is another one
      // closer to the camera which is also opaque at this location.
      float shadow = 0.;
      for (int i = 0; i < numShapes; i++) {
        Shape otherShape = shapes[i];
        if (otherShape.active && otherShape.beat < s.beat) {
          // when checking the other shape, project it onto this shape's beat
          float d = step(sdShape(scaleToBeat(p, s.beat), otherShape), 0.);
          if (d > 0.) { shadow = 0.1; break; }
        }
      }

      vec3 color = vec3(s.color) * fadeToBeat(s.beat) - shadow;
      return vec4(color, alpha);
    }

    void main() {
      vec2 p = st();
      p *= 1.2;             // global zoom out
      p *= vec2(1, -1);     // flip Y so 0 is top left
      p = p / 2. + 0.5;     // move origin to top left
      p = p * board;        // scale up to game board size

      vec4 color = vec4(0, 0, 0, 0);

      for (float i = numBeats - 1.; i >= 0.; i--) {
        vec2 pEdge = scaleToBeat(p, i);
        float edges = sdEdges(pEdge);
        edges = step(abs(edges), 0.15);
        color = mix(color, vec4(fadeToBeat(i)), edges);
      }

      for (int i = numShapes - 1; i >= 0; i--) {
        Shape s = shapes[i];
        if (s.active) {
          vec4 shape = colorShape(p, s);
          color = mix(color, shape, shape.w);
        }
      }

      gl_FragColor = color;
    }
  `;
