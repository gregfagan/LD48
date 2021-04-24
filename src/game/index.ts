import { quad } from '../lib/gl/config/quad';
import { sdf } from '../lib/gl/config/sdf';
import { glsl } from '../lib/gl/regl';

export const draw = glsl`
${quad}
${sdf}

void main() {
  vec2 p = st();
  vec3 color = vec3(0.);
  gl_FragColor = vec4(color, 1.);
}
`;
