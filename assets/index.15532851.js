var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(e,a)=>{for(var i in a||(a={}))t.call(a,i)&&n(e,i,a[i]);if(o)for(var i of o(a))r.call(a,i)&&n(e,i,a[i]);return e};import{l as i,t as s,p as c,a as p,b as l,e as d,G as m,n as u,h as f,c as v,_ as b,d as h,f as w,r as y,s as g}from"./vendor.683521c9.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const i=new URL(e,r);if(self[t].moduleMap[i])return o(self[t].moduleMap[i]);const s=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),n(c)},onload(){o(self[t].moduleMap[i]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const x=i.stream.bind({});Object.assign(x,a(a({},i),{of:x}));function O(e,t){const o=x.of();return e.addEventListener(t,o),o}function F(e){let t;return x.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const j=x.merge(x(document.hasFocus()),x.merge(O(window,"focus"),O(window,"blur")).map(l("type")).map(d("focus"))),q=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i;function I(e){const t=e.match(q);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class ${constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=x(o),!0}})}}class A extends m{constructor(e=new $){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const n=r[t];var a;return n.controller="string"==typeof(a=e)&&q.test(a)?this.addColor(this.store,t):this.add(this.store,t,...o),n}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,A.prototype),t.store=new $,t}}const E=new A;E.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const L=function(e){const t=x.combine(((e,t)=>{if(!e())return function(){const e=x(),t=x(),o=x.merge(x.of(0),x.immediate(x.combine((t=>(e(requestAnimationFrame(t)),t())),[t])));return x.on((()=>cancelAnimationFrame(e())),o.end),o}().pipe(F);t()&&t().end(!0)}),[e]),o=(r=t,x.combine(((e,t)=>{e().map(t)}),[r]));var r;return x.scan(p,0,o)}(j.map(u).map(((...e)=>s(c(console.log,e)))("pause")));F(L).map((e=>e/1e3));const _=(S=document,x.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},x.merge(O(S,"keydown"),O(S,"keyup"))));var S;function k(e,...t){const o=t.map(M),r=f,n=v,a=e.reduce(((e,t,n)=>{const a=o[n-1];return`${e}${r(a)}${t}`}));return[...o.map(n),{frag:a}].reduce(P)}function M(e){if("number"==typeof e)return[e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function P(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}const R=k`
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
`,U=k`
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
`,B="I",C="J",T="L",z="O",J="S",N="T",Z="Z",D=[B,C,T,z,J,N,Z],G=new Array(16).fill(new Array(16).fill(0)),H=E.addFolder("colors"),W=[16,16],X=e=>e.map((e=>e.map((e=>{return t=e,D.indexOf(t)>-1?[...Y[e](),1]:[0,0,0,0];var t})))),Y={I:H.auto("#ff9b0d","I").map(I),J:H.auto("#497bff","J").map(I),L:H.auto("#ff5d5d","L").map(I),O:H.auto("#00f0ff","O").map(I),S:H.auto("#00ff86","S").map(I),T:H.auto("#ff74d1","T").map(I),Z:H.auto("#fffb51","Z").map(I)},K={I:[[B,B,B,B]],T:[[N,N,N],[0,N,0]],J:[[0,C],[0,C],[C,C]],L:[[T,0],[T,0],[T,T]],S:[[0,J,J],[J,J,0]],Z:[[Z,Z,0],[0,Z,Z]],O:[[z,z],[z,z]]};var Q;const V=(Q=w,e=>(...t)=>e(Q(),...t))(h),ee=(e,t,o)=>{const[r,n]=o;return[r<0?0:r>e?e:r,n<0?0:n>t?t:n]},te=[0,-1],oe=[0,1],re=[-1,0],ne=[1,0],ae=e=>{let t=G;return e.primaryBoard.tetronimoes.forEach((e=>{t=((e,t,o=[0,0])=>e.map(((e,r)=>e.map(((e,n)=>t[r-o[0]]&&t[r-o[0]][n-o[1]]||e)))))(t,K[e.tetronimo],e.position)})),t},ie=(e,t)=>{const o=e.primaryBoard.tetronimoes.map((e=>{const o=V(e.position,t),{width:r,height:n}=(i=e.tetronimo,{height:K[i].length,width:K[i][0].length});var i;return a(a({},e),{position:ee(16-n,16-r,o)})}));return a(a({},e),{primaryBoard:{tetronimoes:o}})};let se={primaryBoard:{tetronimoes:[{tetronimo:N,position:[0,0]}]},boards:[]},ce=ae(se);const pe=y({extensions:["OES_texture_float"]}),le=new g;le.showPanel(0),document.body.appendChild(le.dom);const de=(e=>{const t=(e=>{let t=e.texture({min:"nearest",mag:"nearest",format:"rgba",type:"float32",shape:W,wrap:"repeat"});return{update:b.flow(X,(e=>t.subimage(e))),draw:k`
    ${R}
    ${U}
    ${{uniforms:{board:t},depth:{enable:!1}}}

    uniform sampler2D board;
  
    vec4 colorBoard() {
      vec2 p = st() / 2. + 0.5;
      return vec4(texture2D(board, p * vec2(1, -1)).xyz, 1.);
    }

    void main() {
      gl_FragColor = colorBoard();
    }
  `}})(e);return x.on((()=>{t.update(ce)}),L),_.map((e=>{e.a&&(se=ie(se,te)),e.s&&(se=ie(se,ne)),e.d&&(se=ie(se,oe)),e.w&&(se=ie(se,re))})).map((()=>{ce=ae(se)})),e(t.draw)})(pe);x.on((()=>{pe.poll(),de(),le.update()}),L);
