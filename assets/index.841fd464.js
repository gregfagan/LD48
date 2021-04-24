var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(e,a)=>{for(var i in a||(a={}))t.call(a,i)&&n(e,i,a[i]);if(o)for(var i of o(a))r.call(a,i)&&n(e,i,a[i]);return e};import{l as i,t as s,p as c,a as p,b as l,e as u,G as m,n as d,h as f,c as v,_ as b,r as h,s as w}from"./vendor.1d62bec9.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const i=new URL(e,r);if(self[t].moduleMap[i])return o(self[t].moduleMap[i]);const s=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),n(c)},onload(){o(self[t].moduleMap[i]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const y=i.stream.bind({});Object.assign(y,a(a({},i),{of:y}));function g(e,t){const o=y.of();return e.addEventListener(t,o),o}function x(e){let t;return y.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const O=y.merge(y(document.hasFocus()),y.merge(g(window,"focus"),g(window,"blur")).map(l("type")).map(u("focus"))),F=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i;function j(e){const t=e.match(F);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class q{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=y(o),!0}})}}class I extends m{constructor(e=new q){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const n=r[t];var a;return n.controller="string"==typeof(a=e)&&F.test(a)?this.addColor(this.store,t):this.add(this.store,t,...o),n}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,I.prototype),t.store=new q,t}}const $=new I;$.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const A=function(e){const t=y.combine(((e,t)=>{if(!e())return function(){const e=y(),t=y(),o=y.merge(y.of(0),y.immediate(y.combine((t=>(e(requestAnimationFrame(t)),t())),[t])));return y.on((()=>cancelAnimationFrame(e())),o.end),o}().pipe(x);t()&&t().end(!0)}),[e]),o=(r=t,y.combine(((e,t)=>{e().map(t)}),[r]));var r;return y.scan(p,0,o)}(O.map(d).map(((...e)=>s(c(console.log,e)))("pause")));x(A).map((e=>e/1e3));const E=(L=document,y.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},y.merge(g(L,"keydown"),g(L,"keyup"))));var L;function _(e,...t){const o=t.map(S),r=f,n=v,a=e.reduce(((e,t,n)=>{const a=o[n-1];return`${e}${r(a)}${t}`}));return[...o.map(n),{frag:a}].reduce(k)}function S(e){if("number"==typeof e)return[e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function k(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}const M=_`
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
`,P=_`
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
`,R="I",U="J",C="L",T="O",z="S",J="T",N="Z",Z=[R,U,C,T,z,J,N],B=new Array(16).fill(new Array(16).fill(0)),D=$.addFolder("colors"),G=[16,16],H=e=>e.map((e=>e.map((e=>{return t=e,Z.indexOf(t)>-1?[...W[e](),1]:[0,0,0,0];var t})))),W={I:D.auto("#ff9b0d","I").map(j),J:D.auto("#497bff","J").map(j),L:D.auto("#ff5d5d","L").map(j),O:D.auto("#00f0ff","O").map(j),S:D.auto("#00ff86","S").map(j),T:D.auto("#ff74d1","T").map(j),Z:D.auto("#fffb51","Z").map(j)},X={I:[[R,R,R,R]],T:[[J,J,J],[0,J,0]],J:[[0,U],[0,U],[U,U]],L:[[C,0],[C,0],[C,C]],S:[[0,z,z],[z,z,0]],Z:[[N,N,0],[0,N,N]],O:[[T,T],[T,T]]},Y=[0,-1],K=[0,1],Q=[-1,0],V=[1,0],ee=e=>{let t=B;return e.tetronimoes.forEach((e=>{t=((e,t,o)=>((e,t,o=[0,0])=>e.map(((e,r)=>e.map(((e,n)=>t[r-o[0]]&&t[r-o[0]][n-o[1]]||e)))))(e,X[t],o))(t,e.tetronimo,e.position)})),t},te=(e,t)=>{const o=e.tetronimoes.map((e=>{const o=e.position[0]+t[0],r=e.position[1]+t[1],{width:n,height:i}=(s=e.tetronimo,{height:X[s].length,width:X[s][0].length});var s;const c=r>=0&&r+n<=16,p=o>=0&&o+i<=16?o:e.position[0],l=c?r:e.position[1];return a(a({},e),{position:[p,l]})}));return a(a({},e),{tetronimoes:o})};let oe={tetronimoes:[{tetronimo:J,position:[0,0]}]},re=ee(oe);const ne=h({extensions:["OES_texture_float"]}),ae=new w;ae.showPanel(0),document.body.appendChild(ae.dom);const ie=(e=>{const t=(e=>{let t=e.texture({min:"nearest",mag:"nearest",format:"rgba",type:"float32",shape:G,wrap:"repeat"});return{update:b.flow(H,(e=>t.subimage(e))),draw:_`
    ${M}
    ${P}
    ${{uniforms:{board:t},depth:{enable:!1}}}

    uniform sampler2D board;
  
    vec4 colorBoard() {
      vec2 p = st() / 2. + 0.5;
      return vec4(texture2D(board, p * vec2(1, -1)).xyz, 1.);
    }

    void main() {
      gl_FragColor = colorBoard();
    }
  `}})(e);return y.on((()=>{t.update(re)}),A),E.map((e=>{e.a&&(oe=te(oe,Y)),e.s&&(oe=te(oe,V)),e.d&&(oe=te(oe,K)),e.w&&(oe=te(oe,Q))})).map((()=>{re=ee(oe)})),e(t.draw)})(ne);y.on((()=>{ne.poll(),ie(),ae.update()}),A);
