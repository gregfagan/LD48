var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,a=(e,a)=>{for(var i in a||(a={}))t.call(a,i)&&n(e,i,a[i]);if(r)for(var i of r(a))o.call(a,i)&&n(e,i,a[i]);return e};import{l as i,t as s,p as l,a as c,b as p,e as u,G as d,n as m,h as f,c as v,r as b,s as y}from"./vendor.70350cc5.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const o=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,a)=>{const i=new URL(e,o);if(self[t].moduleMap[i])return r(self[t].moduleMap[i]);const s=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),n(l)},onload(){r(self[t].moduleMap[i]),n(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/LD48/assets/");const g=i.stream.bind({});Object.assign(g,a(a({},i),{of:g}));function h(e,t){const r=g.of();return e.addEventListener(t,r),r}function w(e){let t;return g.combine(((e,r)=>{void 0!==t?(r(e()-t),t=e()):t=e()}),[e])}const x=g.merge(g(document.hasFocus()),g.merge(h(window,"focus"),h(window,"blur")).map(p("type")).map(u("focus"))),$=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i;class j{constructor(){return new Proxy({},{get(e,t){var r,o;return"$"===t?e:null!=(o=null==(r=e[t])?void 0:r.call(e))?o:void 0},set(e,t,r){const o=e[t];return o?o(r):e[t]=g(r),!0}})}}class q extends d{constructor(e=new j){super(),this.store=e}auto(e,t,...r){const o=this.store.$;if(o[t])return o[t];this.store[t]=e;const n=o[t];var a;return n.controller="string"==typeof(a=e)&&$.test(a)?this.addColor(this.store,t):this.add(this.store,t,...r),n}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,q.prototype),t.store=new j,t}}(new q).domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const F=function(e){const t=g.combine(((e,t)=>{if(!e())return function(){const e=g(),t=g(),r=g.merge(g.of(0),g.immediate(g.combine((t=>(e(requestAnimationFrame(t)),t())),[t])));return g.on((()=>cancelAnimationFrame(e())),r.end),r}().pipe(w);t()&&t().end(!0)}),[e]),r=(o=t,g.combine(((e,t)=>{e().map(t)}),[o]));var o;return g.scan(c,0,r)}(x.map(m).map(((...e)=>s(l(console.log,e)))("pause")));var O;function A(e,...t){const r=t.map(E),o=f,n=v,a=e.reduce(((e,t,n)=>{const a=r[n-1];return`${e}${o(a)}${t}`}));return[...r.map(n),{frag:a}].reduce(_)}function E(e){if("number"==typeof e)return[e.toString(),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function _(e,t){return Object.entries(t).reduce(((e,[t,r])=>{var o;return e[t]="string"==typeof r?((null!=(o=e[t])?o:"")+"\n"+r).trim():"object"==typeof r&&null!==r?a(a({},e[t]),r):r,e}),a({},e))}w(F).map((e=>e/1e3)),O=document,g.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},g.merge(h(O,"keydown"),h(O,"keyup")));const k=A`
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
`,L=A`
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
`,M=[[null,null,null,null],["T","T","T",null],[null,"T",null,null],[null,null,null,null]],P=b({extensions:["OES_texture_float"]}),R=new y;R.showPanel(0),document.body.appendChild(R.dom);const U=(C=P)(A`
${k}
${L}
${(e=>{const t=e.texture({min:"nearest",mag:"nearest",format:"rgba",type:"float32",radius:4,data:(r=M,r.map((e=>e.map((e=>null===e?[0,0,0,0]:[1,1,1,1])))))});var r;return A`
  ${{uniforms:{board:e.framebuffer({depth:!1,color:t})}}}
  uniform sampler2D board;
  vec4 colorBoard() {
    // texture is vertically flipped from the 2D array
    vec2 p = st() * vec2(1., -1.) / 2. + 0.5;
    return texture2D(board, p);
  }
`})(C)}

void main() {
  gl_FragColor = vec4(colorBoard().xyz, 1.);
}
`);var C;g.on((()=>{P.poll(),U(),R.update()}),F);
