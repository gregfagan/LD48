var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(e,a)=>{for(var i in a||(a={}))t.call(a,i)&&n(e,i,a[i]);if(o)for(var i of o(a))r.call(a,i)&&n(e,i,a[i]);return e};import{l as i,t as s,p as c,a as l,b as p,e as u,G as d,n as f,h as m,c as v,R as b,_ as y,d as h,f as g,r as w,s as x}from"./vendor.f94c9e84.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const i=new URL(e,r);if(self[t].moduleMap[i])return o(self[t].moduleMap[i]);const s=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),n(c)},onload(){o(self[t].moduleMap[i]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const O=i.stream.bind({});Object.assign(O,a(a({},i),{of:O}));function A(e,t){const o=O.of();return e.addEventListener(t,o),o}function $(e){let t;return O.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const F=O.merge(O(document.hasFocus()),O.merge(A(window,"focus"),A(window,"blur")).map(p("type")).map(u("focus"))),E=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,I=e=>"string"==typeof e&&E.test(e);function j(e){const t=e.match(E);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class k{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=O(o),!0}})}}class q extends d{constructor(e=new k){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const n=r[t];return n.controller=I(e)?this.addColor(this.store,t):this.add(this.store,t,...o),n}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,q.prototype),t.store=new k,t}}const _=new q;_.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const C=function(e){const t=O.combine(((e,t)=>{if(!e())return function(){const e=O(),t=O(),o=O.merge(O.of(0),O.immediate(O.combine((t=>(e(requestAnimationFrame(t)),t())),[t])));return O.on((()=>cancelAnimationFrame(e())),o.end),o}().pipe($);t()&&t().end(!0)}),[e]),o=(r=t,O.combine(((e,t)=>{e().map(t)}),[r]));var r;return O.scan(l,0,o)}(F.map(f).map(((...e)=>s(c(console.log,e)))("pause")));$(C).map((e=>e/1e3));const L=(R=document,O.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},O.merge(A(R,"keydown"),A(R,"keyup"))));var R;function S(e,...t){const o=t.map(B),r=m,n=v,a=e.reduce(((e,t,n)=>{const a=o[n-1];return`${e}${r(a)}${t}`}));return[...o.map(n),{frag:a}].reduce(M)}function B(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function M(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}function P(e,t=T(),o){const r="controller"in e?e.controller.property:z(t)?T():t;const n=I(e())?()=>j(e()):()=>e();return[r,{frag:`uniform ${null!=o?o:z(t)?t:D(n())} ${r};`,uniforms:{[r]:n}}]}let U=1;const T=()=>"u_"+U++,N=["float","int","bool","vec2","vec3","vec4"],z=e=>N.includes(e);const D=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},J=S`
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
`,W=S`
#define INFINITY 3.4028237e37
#define normalized(x) clamp(x, 0., 1.)

float sdCircle(vec2 p, float r) {
  return length(p) - r;
}

float sdRing(float d, float r) {
 return abs(d) - r;
}

float sdBox(in vec2 p, in vec2 b)
{
    vec2 d = abs(p)-b;
    return length(max(d,0.0)) + min(max(d.x,d.y),0.0);
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
`,Z="I",G="J",H="L",X="O",Y="S",K="T",Q="Z",V=[Z,G,H,X,Y,K,Q],ee=new Array(16).fill(new Array(16).fill(0)),te=new Array(16).fill(new Array(16).fill(1)),oe=_.addFolder("colors"),re=_,ne=[16,16],ae=e=>e.map((e=>e.map((e=>{return t=e,V.indexOf(t)>-1?[...ie[e](),1]:1===e?[1,1,1,1]:[0,0,0,0];var t})))),ie={I:oe.auto("#ff9b0d","I").map(j),J:oe.auto("#497bff","J").map(j),L:oe.auto("#ff5d5d","L").map(j),O:oe.auto("#00f0ff","O").map(j),S:oe.auto("#00ff86","S").map(j),T:oe.auto("#ff74d1","T").map(j),Z:oe.auto("#fffb51","Z").map(j)},se={I:[[Z,Z,Z,Z]],T:[[K,K,K],[0,K,0]],J:[[0,G],[0,G],[G,G]],L:[[H,0],[H,0],[H,H]],S:[[0,Y,Y],[Y,Y,0]],Z:[[Q,Q,0],[0,Q,Q]],O:[[X,X],[X,X]]};var ce;const le=(ce=g,e=>(...t)=>e(ce(),...t))(h),pe=(e,t,o)=>{const[r,n]=o;return[r<0?0:r>e?e:r,n<0?0:n>t?t:n]},ue=[0,-1],de=[0,1],fe=[-1,0],me=[1,0],ve=(e,t=0)=>{let o=0===t?ee:te;return e.tetronimoes.forEach((e=>{o=((e,t,o=[0,0])=>e.map(((e,r)=>e.map(((e,n)=>t[r-o[0]]&&t[r-o[0]][n-o[1]]||e)))))(o,se[e.tetronimo],e.position)})),o},be=e=>{const t=[];return t.push(ve(e.primaryBoard)),e.boards.forEach(((o,r)=>t.push(ve(o,r===e.boards.length-1?1:0)))),t},ye=(e,t)=>{const o=e.primaryBoard.tetronimoes.map((e=>{const o=le(e.position,t),{width:r,height:n}=(i=e.tetronimo,{height:se[i].length,width:se[i][0].length});var i;return a(a({},e),{position:pe(16-n,16-r,o)})}));return a(a({},e),{primaryBoard:{tetronimoes:o}})};let he={primaryBoard:{tetronimoes:[{tetronimo:K,position:[0,0]}]},boards:[{tetronimoes:[]},{tetronimoes:[]},{tetronimoes:[]}]},ge=be(he);console.log(ge);const we=w({extensions:["OES_texture_float"]}),xe=new x;xe.showPanel(0),document.body.appendChild(xe.dom);const Oe=(e=>{const t=(e=>{let t=b.range(0,3).map((()=>e.texture({min:"nearest",mag:"nearest",format:"rgba",type:"float32",shape:ne,wrap:"repeat"})));return{update:y.flow((e=>e.map(ae)),(e=>e.map(((e,o)=>t[o].subimage(e))))),draw:S`
    ${J}
    ${W}
    ${{uniforms:t.reduce(((e,t,o)=>(e["boards["+o+"]"]=t,e)),{}),depth:{enable:!1}}}

    float crop(vec2 p) {
      vec2 crop = step(vec2(-1), p) * step(p, vec2(1));
      float c = crop.x * crop.y;
      return c;
    }

    uniform sampler2D boards[${4}];
  
    vec4 colorBoard(int i, sampler2D tex) {
      float scale = 1. + ${P(re.auto(.3,"stackScale",.1,2))} * float(i);
      vec2 p = st();

      p *= scale;
      float alpha = crop(p);

      float d = sdBox(p,  vec2(1., 1));
      d = abs(d);
      d = aastep(d, 0.01);
      vec4 outline = vec4(d * vec3(1), d);

      p = p / 2. + 0.5; 
      p = p * vec2(1, -1);
      vec4 board = texture2D(tex, p); 

      vec4 color = mix(vec4(board.xyz, board.w * alpha), outline, d);
      return color;
    }

    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (int i = (${4} - 1); i >= 0 ; i--) {
        vec4 boardColor = colorBoard(i, boards[i]);
        float iWeight = 1. - (float(i) / float(${3}));
        float stackColorRatio = ${P(re.auto(.3,"stackOpacity",0,1))};
        float stackOpacity = 1. - ((1. - iWeight) * stackColorRatio);
        color = mix(color, boardColor * stackOpacity, boardColor.w);
      }
      gl_FragColor = color;
    }
  `}})(e);return O.on((()=>{t.update(ge)}),C),L.map((e=>{e.a&&(he=ye(he,ue)),e.s&&(he=ye(he,me)),e.d&&(he=ye(he,de)),e.w&&(he=ye(he,fe))})).map((()=>{ge=be(he)})),e(t.draw)})(we);O.on((()=>{we.poll(),Oe(),xe.update()}),C);
