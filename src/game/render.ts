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
      return {
        blocks: transform(shape),
        color,
        beat: shape.beat - s.currentBeat,
        active: true,
        invert: isHole,
      };
    });

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

    #define MAX_STEPS 100
    #define MAX_DIST 100.
    #define SURFACE_DIST 0.01

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

    // distance from a point to the scene
    float scene(vec3 point) {
      vec3 spherePos = vec3(0, 1, 6);
      float sphereDist = length(point - spherePos) - 1.;
      float floorDist = point.y;
      return min(sphereDist, floorDist);
    }

    float rayMarch(vec3 origin, vec3 direction) {
      float distanceFromOrigin = 0.;

      for (int i = 0; i < MAX_STEPS; i++) {
        vec3 point = origin + distanceFromOrigin * direction;
        float distanceToScene = scene(point);
        distanceFromOrigin += distanceToScene;
        if (distanceToScene < SURFACE_DIST || distanceFromOrigin > MAX_DIST)
          break;
      }

      return distanceFromOrigin;
    }

    vec3 sceneNormal(vec3 point) {
      float dist = scene(point);
      vec2 epsilon = vec2(0.001, 0);
      vec3 normal = dist - vec3(
        scene(point - epsilon.xyy),
        scene(point - epsilon.yxy),
        scene(point - epsilon.yyx)
      );

      return normalize(normal);
    }

    void main() {
      vec2 p = st();
      vec3 color = vec3(0, 0, 0);

      vec3 ro = vec3(0, 1, 0);
      vec3 rd = normalize(vec3(p.x, p.y, 1));

      vec3 light = vec3(-6, 6, 0);

      float d = rayMarch(ro, rd);
      if (d < MAX_DIST) {
        vec3 p = ro + d * rd;
        vec3 n = sceneNormal(p);
        float dif = dot(n, normalize(light - p));
        color = vec3(dif);
      }

      color = pow(color, vec3(.4545)); // gamma correction

      gl_FragColor = vec4(color, 1);
    }
  `;
