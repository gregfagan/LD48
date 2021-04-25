var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(e,a)=>{for(var s in a||(a={}))t.call(a,s)&&n(e,s,a[s]);if(o)for(var s of o(a))r.call(a,s)&&n(e,s,a[s]);return e};import{l as s,a as i,p as c,e as l,G as p,T as d,n as u,S as m,P as f,s as v,b as h,c as b,R as y,h as w,d as g,_ as x,r as k,f as A}from"./vendor.6e2eb3b0.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){a(new Error(`Failed to import: ${e}`)),n(c)},onload(){o(self[t].moduleMap[s]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const O=s.stream.bind({});function $(e,t){const o=O.of();return e.addEventListener(t,o),o}function F(e){let t;return O.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}Object.assign(O,a(a({},s),{of:O}));const C=O.merge(O(document.hasFocus()),O.merge($(window,"focus"),$(window,"blur")).map(c("type")).map(l("focus"))),E=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,I=e=>"string"==typeof e&&E.test(e);function T(e){const t=e.match(E);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class j{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=O(o),!0}})}}class q extends p{constructor(e=new j){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const n=r[t];return n.controller=I(e)?this.addColor(this.store,t):this.add(this.store,t,...o),n}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,q.prototype),t.store=new j,t}}const B=new q;B.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const M=O.of(!0),_=function(e){const t=O.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=O(),o=O(),r=O.merge(O.of(e),O.immediate(O.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return O.on((()=>cancelAnimationFrame(t())),r.end),r}().pipe(F).map(Math.abs);t()&&t().end(!0)}),[e]),o=(r=t,O.combine(((e,t)=>{e().map(t)}),[r]));var r;return O.scan(i,0,o)}(M);F(_).map((e=>e/1e3)),O.on((e=>{e||M(!0)}),C);const L=(S=document,O.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},O.merge($(S,"keydown"),$(S,"keyup"))));var S;const R=(e,t,o=[0,0],r)=>e.map(((e,n)=>e.map(((e,a)=>{const s=t[n-o[0]]&&t[n-o[0]][a-o[1]];return s?void 0!==r?r:s:e})))),P=B.addFolder("audio").auto(120,"BPM",60,240),U=O.of(0);d.scheduleRepeat((()=>{U(U()+1)}),"4n"),O.on((e=>d.bpm.value=e),P),O.on((e=>{e?d.pause(u()):d.start(u())}),M);const z=(new m).toDestination();new f(((e,t)=>{z.triggerAttackRelease(t,"4n")}),["C5","C4","C4","C4","C4","C4","B3","G#3"]).start(0);const D="I",N="J",J="L",W="O",Z="S",G="T",H="Z",X=[D,N,J,W,Z,G,H],Y=new Array(16).fill(new Array(16).fill(0)),K=new Array(16).fill(new Array(16).fill(1)),Q={I:[[D,D,D,D]],T:[[G,G,G],[0,G,0]],J:[[0,N],[0,N],[N,N]],L:[[J,0],[J,0],[J,J]],S:[[0,Z,Z],[Z,Z,0]],Z:[[H,H,0],[0,H,H]],O:[[W,W],[W,W]]},V=e=>({height:Q[e].length,width:Q[e][0].length}),ee=e=>{const{height:t,width:o}=V(e),r=16-t,n=16-o;return[Math.floor(Math.random()*r),Math.floor(Math.random()*n)]};var te;const oe=(te=b,e=>(...t)=>e(te(),...t))(h),re=(e,t,o)=>{const[r,n]=o;return[r<0?0:r>e?e:r,n<0?0:n>t?t:n]},ne=[0,-1],ae=[0,1],se=[-1,0],ie=[1,0],ce={playerBoard:{tetronimoes:[{tetronimo:G,position:[0,0]}],holes:[],walls:[],boardType:0},stack:[...y.range(0,7).map((()=>({tetronimoes:[],holes:[],walls:[],boardType:0})))]},le=O.scan(((e,t)=>{const o=a(a({},e.stack[0]),{tetronimoes:[...e.playerBoard.tetronimoes,...e.stack[0].tetronimoes],holes:[...e.stack[0].holes],walls:[...e.stack[0].walls],boardType:e.stack[0].boardType});var r;return{playerBoard:o,stack:[...e.stack.slice(1),t%8==0?(r=o.tetronimoes,{tetronimoes:[],holes:r.map((e=>e.tetronimo)).map((e=>({tetronimo:e,position:ee(e)}))),walls:[],boardType:1}):{tetronimoes:[],holes:[],walls:[],boardType:0}]}}),ce,U),pe=e=>{let t=1===e.boardType?K:Y;return e.walls.forEach((e=>{t=R(t,Q[e.tetronimo],e.position,1)})),e.holes.forEach((e=>{t=R(t,Q[e.tetronimo],e.position,0)})),e.tetronimoes.forEach((e=>{t=R(t,Q[e.tetronimo],e.position,e.tetronimo)})),t},de=(e,t)=>{const o=e.playerBoard.tetronimoes.map((e=>{const o=oe(e.position,t),{width:r,height:n}=V(e.tetronimo);return a(a({},e),{position:re(16-n,16-r,o)})}));return a(a({},e),{playerBoard:a(a({},e.playerBoard),{tetronimoes:o})})};function ue(e,...t){const o=t.map(me),r=w,n=g,a=e.reduce(((e,t,n)=>{const a=o[n-1];return`${e}${r(a)}${t}`}));return[...o.map(n),{frag:a}].reduce(fe)}function me(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function fe(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}function ve(e,t=be(),o){const r="controller"in e?e.controller.property:we(t)?be():t;const n=I(e())?()=>T(e()):()=>e();return[r,{frag:`uniform ${null!=o?o:we(t)?t:ge(n())} ${r};`,uniforms:{[r]:n}}]}let he=1;const be=()=>"u_"+he++,ye=["float","int","bool","vec2","vec3","vec4"],we=e=>ye.includes(e);const ge=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},xe=ue`
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
`,ke=ue`
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
`,Ae=B.addFolder("graphics"),Oe=le.map((e=>{const t=[];return t.push(pe(e.playerBoard)),e.stack.forEach((e=>t.push(pe(e)))),t})),$e=[16,16],Fe=e=>e.map((e=>e.map((e=>{return t=e,X.indexOf(t)>-1?[...Ce[e](),1]:1===e?[1,1,1,1]:[0,0,0,0];var t})))),Ce={I:Ae.auto("#ff9b0d","I").map(T),J:Ae.auto("#497bff","J").map(T),L:Ae.auto("#ff5d5d","L").map(T),O:Ae.auto("#00f0ff","O").map(T),S:Ae.auto("#00ff86","S").map(T),T:Ae.auto("#ff74d1","T").map(T),Z:Ae.auto("#fffb51","Z").map(T)};let Ee=!1;L.map((e=>{e.a&&le(de(le(),ne)),e.s&&le(de(le(),ie)),e.d&&le(de(le(),ae)),e.w&&le(de(le(),se)),e[" "]&&(Ee||((async()=>{v()})(),Ee=!0),M(!M()))}));const Ie=k({extensions:["OES_texture_float"]}),Te=new A;Te.showPanel(0),document.body.appendChild(Te.dom);const je=(e=>{let t=y.range(0,8).map((()=>e.texture({min:"nearest",mag:"nearest",format:"rgba",type:"float32",shape:$e,wrap:"repeat"})));const o=x.flow((e=>e.map(Fe)),(e=>e.map(((e,o)=>t[o].subimage(e)))));O.on(o,Oe);const r=ue`
    ${xe}
    ${ke}
    ${{uniforms:t.reduce(((e,t,o)=>(e["boards["+o+"]"]=t,e)),{}),depth:{enable:!1}}}

    float crop(vec2 p) {
      vec2 crop = step(vec2(-1), p) * step(p, vec2(1));
      float c = crop.x * crop.y;
      return c;
    }

    uniform sampler2D boards[${9}];
  
    vec4 colorBoard(int i, sampler2D tex) {
      float scale = 1. + ${ve(Ae.auto(.3,"stackScale",.1,2))} * float(i);
      vec2 p = st();

      p *= scale;
      float alpha = crop(p);

      float d = sdBox(p,  vec2(1., 1));
      d = abs(d);
      d = step(d, 0.01);
      vec4 outline = vec4(d * vec3(1), d);

      p = p / 2. + 0.5; 
      p = p * vec2(1, -1);
      vec4 board = texture2D(tex, p);

      float shadow = texture2D(boards[0], p).w * 0.2;
      if (i != 0) board.xyz *= (1. - shadow);

      vec4 color = mix(vec4(board.xyz, board.w * alpha), outline, d);
      return color;
    }

    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (int i = (${9} - 1); i >= 0 ; i--) {
        vec4 boardColor = colorBoard(i, boards[i]);
        float iWeight = 1. - (float(i) / float(${8}));
        float stackFade = ${ve(Ae.auto(.8,"stackFade",0,1))};
        float stackOpacity = 1. - ((1. - iWeight) * stackFade);
        boardColor = vec4(boardColor.xyz * stackOpacity, boardColor.w);

        color = mix(color, boardColor, boardColor.w);
      }
      gl_FragColor = color;
    }
  `;return e(r)})(Ie);O.on((()=>{Ie.poll(),je(),Te.update()}),_);
