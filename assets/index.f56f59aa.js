var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,a=(e,a)=>{for(var i in a||(a={}))t.call(a,i)&&n(e,i,a[i]);if(r)for(var i of r(a))o.call(a,i)&&n(e,i,a[i]);return e};import{l as i,t as s,p as c,a as l,b as p,e as u,G as d,n as m,h as f,c as v,_ as b,r as y,s as h}from"./vendor.1d62bec9.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const o=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,a)=>{const i=new URL(e,o);if(self[t].moduleMap[i])return r(self[t].moduleMap[i]);const s=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),n(c)},onload(){r(self[t].moduleMap[i]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const w=i.stream.bind({});Object.assign(w,a(a({},i),{of:w}));function g(e,t){const r=w.of();return e.addEventListener(t,r),r}function x(e){let t;return w.combine(((e,r)=>{void 0!==t?(r(e()-t),t=e()):t=e()}),[e])}const O=w.merge(w(document.hasFocus()),w.merge(g(window,"focus"),g(window,"blur")).map(p("type")).map(u("focus"))),F=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i;function $(e){const t=e.match(F);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class j{constructor(){return new Proxy({},{get(e,t){var r,o;return"$"===t?e:null!=(o=null==(r=e[t])?void 0:r.call(e))?o:void 0},set(e,t,r){const o=e[t];return o?o(r):e[t]=w(r),!0}})}}class q extends d{constructor(e=new j){super(),this.store=e}auto(e,t,...r){const o=this.store.$;if(o[t])return o[t];this.store[t]=e;const n=o[t];var a;return n.controller="string"==typeof(a=e)&&F.test(a)?this.addColor(this.store,t):this.add(this.store,t,...r),n}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,q.prototype),t.store=new j,t}}const A=new q;A.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const I=function(e){const t=w.combine(((e,t)=>{if(!e())return function(){const e=w(),t=w(),r=w.merge(w.of(0),w.immediate(w.combine((t=>(e(requestAnimationFrame(t)),t())),[t])));return w.on((()=>cancelAnimationFrame(e())),r.end),r}().pipe(x);t()&&t().end(!0)}),[e]),r=(o=t,w.combine(((e,t)=>{e().map(t)}),[o]));var o;return w.scan(l,0,r)}(O.map(m).map(((...e)=>s(c(console.log,e)))("pause")));var E;function _(e,...t){const r=t.map(L),o=f,n=v,a=e.reduce(((e,t,n)=>{const a=r[n-1];return`${e}${o(a)}${t}`}));return[...r.map(n),{frag:a}].reduce(S)}function L(e){if("number"==typeof e)return[e.toString(),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function S(e,t){return Object.entries(t).reduce(((e,[t,r])=>{var o;return e[t]="string"==typeof r?((null!=(o=e[t])?o:"")+"\n"+r).trim():"object"==typeof r&&null!==r?a(a({},e[t]),r):r,e}),a({},e))}x(I).map((e=>e/1e3)),E=document,w.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},w.merge(g(E,"keydown"),g(E,"keyup")));const k=_`
${{depth:{enable:!1},primitive:"triangle strip",count:4,attributes:{position:[[-1,-1],[1,-1],[-1,1],[1,1]]},vert:"\nprecision highp float;\nattribute vec2 position;\nvarying vec2 uv;\nvoid main() {\n  uv = 0.5 * (position + 1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n",uniforms:{viewport:({viewportWidth:e,viewportHeight:t})=>[e,t]},scissor:{enable:!0,box:({viewportWidth:e,viewportHeight:t})=>{const r=Math.min(e,t),o=Math.max(e,t)-r;return a(a({},e>t?{x:o/2,y:0}:{x:0,y:o/2}),{width:r,height:r})}}}}

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
`,M=_`
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
`,P="I",R="J",U="L",C="O",T="S",z="T",D="Z",N=[P,R,U,C,T,z,D],B=[[z,P,P,P,P,R],[z,z,0,T,T,R],[z,D,T,T,R,R],[D,D,0,U,C,C],[D,U,U,U,C,C]],J=A.addFolder("colors"),Z={I:J.auto("#ffcc00","I").map($),J:J.auto("#ffcc00","J").map($),L:J.auto("#ffcc00","L").map($),O:J.auto("#ffcc00","O").map($),S:J.auto("#ffcc00","S").map($),T:J.auto("#ffcc00","T").map($),Z:J.auto("#ffcc00","Z").map($)},G=b.flow((e=>{const t=new Array(2).fill(0),r=new Array(3).fill(new Array(8).fill(0));return[...e.map((e=>[...e,...t])),...r]}),(e=>e.map((e=>e.map((e=>{var t,r;return r=e,N.indexOf(r)>-1?[...null==(t=Z[e])?void 0:t.call(Z),1]:[0,0,0,0]})))))),H=y({extensions:["OES_texture_float"]}),W=new h;W.showPanel(0),document.body.appendChild(W.dom);const X=(Y=H)(_`
${k}
${M}
${(e=>{const t=e.texture({min:"nearest",mag:"nearest",format:"rgba",type:"float32",width:8,height:8,data:G(B)});return _`
  ${{uniforms:{board:e.framebuffer({depth:!1,color:t})}}}
  uniform sampler2D board;
  vec4 colorBoard() {
    // texture is vertically flipped from the 2D array
    vec2 p = st() * vec2(1., -1.) / 2. + 0.5;
    return texture2D(board, p);
  }
`})(Y)}

void main() {
  gl_FragColor = vec4(colorBoard().xyz, 1.);
}
`);var Y;w.on((()=>{H.poll(),X(),W.update()}),I);
