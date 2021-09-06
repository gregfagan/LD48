import REGL from 'regl';
import { quad } from './config/quad';
import { glsl } from './regl';

import { setControllerVisible } from '../gui';
import { AutoGUI } from '../gui';
import { stream } from '../stream';

export const createRenderScale = (
  regl: REGL.Regl,
  parentGui: AutoGUI,
  config: REGL.DrawConfig
) => {
  const gui = parentGui.addFolder('render scale');

  const mode = gui.auto<REGL.TextureMagFilterType | 'none'>('nearest', 'mode', [
    'none',
    'linear',
    'nearest',
  ]);
  const scale = gui.auto(0.5, 'scale', 0, 1);
  const renderer = stream.combine(
    (mode, size) => {
      const currentMode = mode();
      setControllerVisible(scale.controller, currentMode !== 'none');
      return currentMode === 'none'
        ? regl(config)
        : renderScale(config, size(), currentMode)(regl).render;
    },
    [mode, scale]
  );

  return { renderer, mode, scale };
};

export const renderScale =
  (
    config: REGL.DrawConfig,
    scale: number = 0.5,
    filter: REGL.TextureMagFilterType = 'nearest'
  ) =>
  (regl: REGL.Regl) => {
    // allocate a texture big enough to hold the drawing buffer
    const screenSize = {
      width: regl._gl.drawingBufferWidth,
      height: regl._gl.drawingBufferHeight,
    };

    const texSize = {
      width: 2 ** smallestPowerOf2(screenSize.width),
      height: 2 ** smallestPowerOf2(screenSize.height),
    };

    const scaledSize = {
      width: screenSize.width * scale,
      height: screenSize.height * scale,
    };

    // console.log('screen ', screenSize);
    // console.log('tex    ', texSize);
    // console.log('scaled ', scaledSize);

    const tex = regl.texture({
      ...texSize,
      min: 'linear',
      mag: filter,
      wrap: 'repeat',
    });

    const fbo = regl.framebuffer({
      depth: false,
      color: tex,
    });

    const renderToTexture = regl({
      ...config,
      framebuffer: fbo,
      scissor: {
        enable: true,
        box: ({ viewportWidth, viewportHeight }) => {
          // console.log('box', viewportWidth, viewportHeight);
          // box: {
          return {
            x: 0,
            y: 0,
            ...scaledSize,
          };
        },
      },
      uniforms: {
        ...config.uniforms,
        viewport: [scaledSize.width, scaledSize.height],
      },
    });
    const renderToScreen = regl(glsl`
    ${quad}
    ${{
      uniforms: {
        source: fbo,
        viewport: [texSize.width, texSize.height],
      },
    }}
    uniform sampler2D source;
    void main() {
      gl_FragColor = vec4(
        texture2D(
          source,
          (gl_FragCoord.xy * ${scale.toFixed(4)}) / min(viewport.x, viewport.y)
        ).xyz,
        1.
      );
    }
  `);

    return {
      renderToTexture,
      renderToScreen,
      texture: fbo,
      render: () => {
        renderToTexture();
        renderToScreen();
      },
    };
  };

const smallestPowerOf2 = (length: number): number =>
  Math.ceil(Math.log2(length));
