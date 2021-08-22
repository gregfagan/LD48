import { flow } from 'fp-ts/lib/function';
import { range, takeLeft } from 'fp-ts/lib/ReadonlyArray';
import { Regl, Texture2D, Vec2, Vec3, Vec4 } from 'regl';
import { toGLColor } from '../lib/gl/color';
import { quad } from '../lib/gl/config/quad';
import { sdf } from '../lib/gl/config/sdf';
import { glsl, uniform } from '../lib/gl/regl';
import { vec2 } from '../lib/math';
import { log, stream, Stream } from '../lib/stream';
import { beatTime, currentBeatTime } from './audio/util';
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
    const shapes = takeLeft(8)(s.tetronimoes).map((shape): Shape => {
      const isHole = shape.type === 'hole';
      const color: Vec3 = isHole ? [1, 1, 1] : colors[shape.tetronimo]();
      const result = {
        blocks: transform(shape),
        color,
        beat: shape.beat - s.currentBeat,
        active: true,
        invert: isHole,
      };
      return result;
    });

    return shapes;
  })
  .map(constantLength);

stream.on(console.log, state);

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

    #define MAX_STEPS 100
    #define MAX_DIST 100.
    #define SURFACE_DIST .001
    #define board vec2(${width})
    #define halfBoard (board/2.)

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
    
    uniform Shape shapes[${numShapesToRender}];

    struct RayHit {
      float d;
      vec3 color;
    };

    float sdBlock(vec3 p, vec3 b) {
      return sdBox(p - (b - vec3(halfBoard + vec2(0.5), 0)), vec3(0.5));
    }
    
    float sdTetronimo(vec3 point, Shape s) {
      // offset point to line up with camera
      point -= vec3(vec2(1), 0);
      float d = INFINITY;
      d = min(d, sdBlock(point, vec3(s.a, s.beat)));
      d = min(d, sdBlock(point, vec3(s.b, s.beat)));
      d = min(d, sdBlock(point, vec3(s.c, s.beat)));
      d = min(d, sdBlock(point, vec3(s.d, s.beat)));

      // Expand the shape just slightly so that the edges between
      // the boxes will overlap nicely.
      d -= 0.01;

      return d;
    }

    float sdHole(vec3 point, Shape s) {
      float wall = sdBox(
        point - vec3(0, 0, s.beat),
        vec3(halfBoard, 0.5)
      );
      float tetronimo = sdTetronimo(point, s);
      return max(-tetronimo, wall);
    }

    RayHit scene(vec3 point) {
      RayHit rh = RayHit(INFINITY, vec3(0));
      for (int i = 0; i < ${numShapesToRender}; i++) {
        float dS = INFINITY;
        vec3 color = vec3(0);
        Shape shape = shapes[i];
        if (!shape.active) break;
        if (shape.invert) {
          dS = sdHole(point, shape);
          // when rendering a hole, show an outline of the player's
          // position above, to help them line it up.
          float dPlayer = sdTetronimo(vec3(point.xy, 0), shapes[0]);
          color = abs(dPlayer) < 0.1 ? shapes[0].color : vec3(1);
        } else {
          dS = sdTetronimo(point, shape);
          color = shape.color;
        }
        if (dS < rh.d) {
          rh = RayHit(dS, color);
        }
      }
      return rh;
    }

    RayHit rayMarch(vec3 origin, vec3 direction) {
      RayHit rh = RayHit(0., vec3(0));

      for (int i = 0; i < MAX_STEPS; i++) {
        vec3 point = origin + rh.d * direction;
        RayHit sceneHit = scene(point);
        rh.d += sceneHit.d;
        if (sceneHit.d < SURFACE_DIST) {
          rh.color = sceneHit.color;
          break;
        }
        if (rh.d > MAX_DIST)
          break;
      }

      return rh;
    }

    vec3 sceneNormal(vec3 point) {
      RayHit rh = scene(point);
      vec2 epsilon = vec2(0.001, 0);
      vec3 normal = rh.d - vec3(
        scene(point - epsilon.xyy).d,
        scene(point - epsilon.yxy).d,
        scene(point - epsilon.yyx).d
      );

      return normalize(normal);
    }

    void main() {
      vec2 p = st();
      p *= vec2(1, -1);     // flip Y so 0 is top left

      vec3 color = vec3(0, 0, 0);

      vec3 ro = vec3(0, 0, -10);
      vec3 rd = normalize(vec3(p.x, p.y, 1));

      vec3 light = vec3(0, 0, -2);

      RayHit rh = rayMarch(ro, rd);
      if (rh.d < MAX_DIST) {
        vec3 p = ro + rh.d * rd;
        vec3 n = sceneNormal(p);
        float dif = dot(n, normalize(light - p));
        color = vec3(dif);
        color *= rh.color;
      }

      color = pow(color, vec3(.4545)); // gamma correction

      gl_FragColor = vec4(color, 1);
    }
  `;
