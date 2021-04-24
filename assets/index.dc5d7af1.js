var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(e,a)=>{for(var i in a||(a={}))t.call(a,i)&&n(e,i,a[i]);if(o)for(var i of o(a))r.call(a,i)&&n(e,i,a[i]);return e};import{l as i,t as s,p as c,a as l,b as p,e as u,G as m,n as d,h as f,c as v,_ as g,r as h,s as w}from"./vendor.1d62bec9.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const i=new URL(e,r);if(self[t].moduleMap[i])return o(self[t].moduleMap[i]);const s=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),n(c)},onload(){o(self[t].moduleMap[i]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const b=i.stream.bind({});Object.assign(b,a(a({},i),{of:b}));function y(e,t){const o=b.of();return e.addEventListener(t,o),o}function x(e){let t;return b.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const O=b.merge(b(document.hasFocus()),b.merge(y(window,"focus"),y(window,"blur")).map(p("type")).map(u("focus"))),F=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i;function j(e){const t=e.match(F);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class q{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=b(o),!0}})}}class I extends m{constructor(e=new q){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const n=r[t];var a;return n.controller="string"==typeof(a=e)&&F.test(a)?this.addColor(this.store,t):this.add(this.store,t,...o),n}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,I.prototype),t.store=new q,t}}const $=new I;$.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const A=function(e){const t=b.combine(((e,t)=>{if(!e())return function(){const e=b(),t=b(),o=b.merge(b.of(0),b.immediate(b.combine((t=>(e(requestAnimationFrame(t)),t())),[t])));return b.on((()=>cancelAnimationFrame(e())),o.end),o}().pipe(x);t()&&t().end(!0)}),[e]),o=(r=t,b.combine(((e,t)=>{e().map(t)}),[r]));var r;return b.scan(l,0,o)}(O.map(d).map(((...e)=>s(c(console.log,e)))("pause")));x(A).map((e=>e/1e3));const E=(R=document,b.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},b.merge(y(R,"keydown"),y(R,"keyup"))));var R;function C(e,...t){const o=t.map(L),r=f,n=v,a=e.reduce(((e,t,n)=>{const a=o[n-1];return`${e}${r(a)}${t}`}));return[...o.map(n),{frag:a}].reduce(_)}function L(e){if("number"==typeof e)return[e.toString(),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function _(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}const S=C`
${{depth:{enable:!1},primitive:"triangle strip",count:4,attributes:{position:[[-1,-1],[1,-1],[-1,1],[1,1]]},vert:"\nprecision highp float;\nattribute vec2 position;\nvarying vec2 uv;\nvoid main() {\n  uv = 0.5 * (position + 1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n",uniforms:{viewport:({viewportWidth:e,viewportHeight:t})=>[e,t]},scissor:{enable:!0,box:({viewportWidth:e,viewportHeight:t})=>{const o=Math.min(e,t),r=Math.max(e,t)-o;return a(a({},e>t?{x:r/2,y:0}:{x:0,y:r/2}),{width:o,height:o})}}}}

precision highp float;

uniform vec2 viewport;
varying vec2 uv;

vec2 coord(vec2 p) {
  return 2. * (p - 0.5 * viewport) / min(viewport.x, viewport.y);
}

vec2 st() {
  return coord(gl_FragCoord.xy);
}

float aastep(float edge, float x) {
  float e = 1./max(viewport.x, viewport.y);
  return smoothstep(edge - e, edge + e, x);
}
`,k=C`
#define INFINITY 3.4028237e37
#define normalized(x) clamp(x, 0., 1.)

float sdCircle(vec2 p, float r) {
  return length(p) - r;
}

float sdRing(float d, float r) {
 return abs(d) - r;
}

float sdTriangleIsosceles( in vec2 p, in vec2 q ) {
    p.x = abs(p.x);
    vec2 a = p - q*clamp( dot(p,q)/dot(q,q), 0.0, 1.0 );
    vec2 b = p - q*vec2( clamp( p.x/q.x, 0.0, 1.0 ), 1.0 );
    float s = -sign( q.y );
    vec2 d = min( vec2( dot(a,a), s*(p.x*q.y-p.y*q.x) ),
                  vec2( dot(b,b), s*(p.y-q.y)  ));
    return -sqrt(d.x)*sign(d.y);
}

float opUnion(float a, float b) {
  return min(a, b);
}

// https://www.iquilezles.org/www/articles/smin/smin.htm 
float opSmoothUnion(float a, float b, float k) {
  float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );
  return mix( b, a, h ) - k*h*(1.0-h);
}

vec3 sdColor(float d) {
  vec3 col = vec3(1.0) - sign(d)*vec3(0.1,0.4,0.7);
  col *= 1.0 - exp(-3.0*abs(d));
  col *= 0.8 + 0.2*cos(150.0*d);
  col = mix( col, vec3(1.0), 1.0-smoothstep(0.0,0.01,abs(d)) );
  return col;
}
`,M="I",P="J",U="L",T="O",z="S",D="T",J="Z",N=[M,P,U,T,z,D,J],Z=new Array(16).fill(new Array(16).fill(0)),B=$.addFolder("colors"),G=e=>e.map((e=>e.map((e=>{var t,o;return o=e,N.indexOf(o)>-1?[...null==(t=H[e])?void 0:t.call(H),1]:[0,0,0,0]})))),H={I:B.auto("#ff9b0d","I").map(j),J:B.auto("#497bff","J").map(j),L:B.auto("#ff5d5d","L").map(j),O:B.auto("#00f0ff","O").map(j),S:B.auto("#00ff86","S").map(j),T:B.auto("#ff74d1","T").map(j),Z:B.auto("#fffb51","Z").map(j)},W={I:[[M,M,M,M]],T:[[D,D,D],[0,D,0]],J:[[0,P],[0,P],[P,P]],L:[[U,0],[U,0],[U,U]],S:[[0,z,z],[z,z,0]],Z:[[J,J,0],[0,J,J]],O:[[T,T],[T,T]]},X=[0,-1],Y=[0,1],K=[-1,0],Q=[1,0],V=(e,t,o,r)=>e.map(((n,a)=>e[o].map(((e,n)=>((e,t,o)=>{const r=W[e];return r[t]&&r[t][o]})(t,a-o,n-r)?t:e)))),ee=e=>{let t=Z;return e.tetronimoes.forEach((e=>{t=V(t,e.tetronimo,e.originRow,e.originColumn)})),t},te=(e,t)=>{const o=e.tetronimoes.map((e=>{const o=e.originRow+t[0],r=e.originColumn+t[1],{width:n,height:i}=(s=e.tetronimo,{height:W[s].length,width:W[s][0].length});var s;const c=o>=0&&o+i<=16,l=r>=0&&r+n<=16;return a(a({},e),{originRow:c?o:e.originRow,originColumn:l?r:e.originColumn})}));return a(a({},e),{tetronimoes:o})};let oe={tetronimoes:[{tetronimo:D,originRow:0,originColumn:0}]},re=ee(oe);const ne=h({extensions:["OES_texture_float"]}),ae=new w;ae.showPanel(0),document.body.appendChild(ae.dom);const ie=(e=>{const t=(e=>{let t=e.texture({min:"nearest",mag:"nearest",format:"rgba",type:"float32",width:16,height:16});return{update:g.flow(G,(e=>t.subimage(e))),draw:C`
    ${S}
    ${k}

    ${{uniforms:{board:t},depth:{enable:!1}}}
    uniform sampler2D board;

    vec4 colorBoard() {
      // texture is vertically flipped from the 2D array
      vec2 p = st() * vec2(1., -1.) / 2. + 0.5;
      return texture2D(board, p);
    }

    void main() {
      gl_FragColor = vec4(colorBoard().xyz, 1.);
    }
  `}})(e);return b.on((()=>{t.update(re)}),A),E.map((e=>{e.a&&(oe=te(oe,X)),e.s&&(oe=te(oe,Q)),e.d&&(oe=te(oe,Y)),e.w&&(oe=te(oe,K))})).map((()=>{re=ee(oe)})),e(t.draw)})(ne);b.on((()=>{ne.poll(),ie(),ae.update()}),A);
