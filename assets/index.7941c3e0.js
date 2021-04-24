var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(e,a)=>{for(var i in a||(a={}))t.call(a,i)&&n(e,i,a[i]);if(o)for(var i of o(a))r.call(a,i)&&n(e,i,a[i]);return e};import{l as i,t as s,p as c,a as l,b as p,e as u,G as d,n as m,h as f,c as v,r as b,s as y}from"./vendor.70350cc5.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const i=new URL(e,r);if(self[t].moduleMap[i])return o(self[t].moduleMap[i]);const s=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),n(c)},onload(){o(self[t].moduleMap[i]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const g=i.stream.bind({});Object.assign(g,a(a({},i),{of:g}));function h(e,t){const o=g.of();return e.addEventListener(t,o),o}function w(e){let t;return g.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const x=g.merge(g(document.hasFocus()),g.merge(h(window,"focus"),h(window,"blur")).map(p("type")).map(u("focus"))),j=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i;class q{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=g(o),!0}})}}class F extends d{constructor(e=new q){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const n=r[t];var a;return n.controller="string"==typeof(a=e)&&j.test(a)?this.addColor(this.store,t):this.add(this.store,t,...o),n}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,F.prototype),t.store=new q,t}}(new F).domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const O=function(e){const t=g.combine(((e,t)=>{if(!e())return function(){const e=g(),t=g(),o=g.merge(g.of(0),g.immediate(g.combine((t=>(e(requestAnimationFrame(t)),t())),[t])));return g.on((()=>cancelAnimationFrame(e())),o.end),o}().pipe(w);t()&&t().end(!0)}),[e]),o=(r=t,g.combine(((e,t)=>{e().map(t)}),[r]));var r;return g.scan(l,0,o)}(x.map(m).map(((...e)=>s(c(console.log,e)))("pause")));var $;function A(e,...t){const o=t.map(E),r=f,n=v,a=e.reduce(((e,t,n)=>{const a=o[n-1];return`${e}${r(a)}${t}`}));return[...o.map(n),{frag:a}].reduce(_)}function E(e){if("number"==typeof e)return[e.toString(),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function _(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}w(O).map((e=>e/1e3)),$=document,g.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},g.merge(h($,"keydown"),h($,"keyup")));const k=A`
${A`
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
`}
${A`
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
`}

void main() {
  vec2 p = st();
  vec3 color = vec3(0.);
  gl_FragColor = vec4(color, 1.);
}
`,L=b(),M=new y;M.showPanel(0),document.body.appendChild(M.dom);const P=L(k);g.on((()=>{L.poll(),P(),M.update()}),O);
