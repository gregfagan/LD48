var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,n=(e,n)=>{for(var s in n||(n={}))t.call(n,s)&&a(e,s,n[s]);if(o)for(var s of o(n))r.call(n,s)&&a(e,s,n[s]);return e};import{l as s,a as i,p as c,e as l,G as p,h as d,b as u,R as m,_ as f,d as v,T as h,n as b,S as y,P as w,s as g,c as x,f as k,r as A,g as O}from"./vendor.55cd2cb5.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,n)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){n(new Error(`Failed to import: ${e}`)),a(c)},onload(){o(self[t].moduleMap[s]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const $=s.stream.bind({});function F(e,t){const o=$.of();return e.addEventListener(t,o),o}function C(e){let t;return $.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}Object.assign($,n(n({},s),{of:$}));const E=$.merge($(document.hasFocus()),$.merge(F(window,"focus"),F(window,"blur")).map(c("type")).map(l("focus"))),I=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,M=e=>"string"==typeof e&&I.test(e);function T(e){const t=e.match(I);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class j{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=$(o),!0}})}}class q extends p{constructor(e=new j){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const a=r[t];return a.controller=M(e)?this.addColor(this.store,t):this.add(this.store,t,...o),a}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,q.prototype),t.store=new j,t}}const B=new q;B.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const _=$.of(!0),L=function(e){const t=$.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=$(),o=$(),r=$.merge($.of(e),$.immediate($.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return $.on((()=>cancelAnimationFrame(t())),r.end),r}().pipe(C).map(Math.abs);t()&&t().end(!0)}),[e]),o=(r=t,$.combine(((e,t)=>{e().map(t)}),[r]));var r;return $.scan(i,0,o)}(_),S=C(L).map((e=>e/1e3));$.on((e=>{e||_(!0)}),E);const P=(R=document,$.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},$.merge(F(R,"keydown"),F(R,"keyup"))));var R;const U=(e,t,o=[0,0],r)=>e.map(((e,a)=>e.map(((e,n)=>{const s=t[a-o[0]]&&t[a-o[0]][n-o[1]];return s?void 0!==r?r:s:e}))));function z(e,...t){const o=t.map(D),r=d,a=u,n=e.reduce(((e,t,a)=>{const n=o[a-1];return`${e}${r(n)}${t}`}));return[...o.map(a),{frag:n}].reduce(N)}function D(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function N(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?n(n({},e[t]),o):o,e}),n({},e))}function J(e,t=Z(),o){const r="controller"in e?e.controller.property:H(t)?Z():t;const a=M(e())?()=>T(e()):()=>e();return[r,{frag:`uniform ${null!=o?o:H(t)?t:X(a())} ${r};`,uniforms:{[r]:a}}]}let W=1;const Z=()=>"u_"+W++,G=["float","int","bool","vec2","vec3","vec4"],H=e=>G.includes(e);const X=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},Y=z`
${{depth:{enable:!1},primitive:"triangle strip",count:4,attributes:{position:[[-1,-1],[1,-1],[-1,1],[1,1]]},vert:"\nprecision highp float;\nattribute vec2 position;\nvarying vec2 uv;\nvoid main() {\n  uv = 0.5 * (position + 1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n",uniforms:{viewport:({viewportWidth:e,viewportHeight:t})=>[e,t]},scissor:{enable:!0,box:({viewportWidth:e,viewportHeight:t})=>{const o=Math.min(e,t),r=Math.max(e,t)-o;return n(n({},e>t?{x:r/2,y:0}:{x:0,y:r/2}),{width:o,height:o})}}}}

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
`,K=z`
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
`,Q="I",V="J",ee="L",te="O",oe="S",re="T",ae="Z",ne=[Q,V,ee,te,oe,re,ae],se=new Array(16).fill(new Array(16).fill(0)),ie=new Array(16).fill(new Array(16).fill(1)),ce=B.addFolder("graphics"),le=[16,16],pe=e=>e.map((e=>e.map((e=>{return t=e,ne.indexOf(t)>-1?[...de[e](),1]:1===e?[1,1,1,1]:[0,0,0,0];var t})))),de={I:ce.auto("#ff9b0d","I").map(T),J:ce.auto("#497bff","J").map(T),L:ce.auto("#ff5d5d","L").map(T),O:ce.auto("#00f0ff","O").map(T),S:ce.auto("#00ff86","S").map(T),T:ce.auto("#ff74d1","T").map(T),Z:ce.auto("#fffb51","Z").map(T)},ue=B.addFolder("audio").auto(120,"BPM",60,240),me=v($.scan(((e,t)=>e+t/60*ue()),0,S).map(Math.floor));$.on((e=>h.bpm.value=e),ue),$.on((e=>{e?h.pause(b()):h.start(b())}),_);const fe=(new y).toDestination();new w(((e,t)=>{fe.triggerAttackRelease(t,"4n")}),["C5","C4","C4","C4","C4","C4","B3","G#3"]).start(0);const ve={I:[[Q,Q,Q,Q]],T:[[re,re,re],[0,re,0]],J:[[0,V],[0,V],[V,V]],L:[[ee,0],[ee,0],[ee,ee]],S:[[0,oe,oe],[oe,oe,0]],Z:[[ae,ae,0],[0,ae,ae]],O:[[te,te],[te,te]]},he=e=>({height:ve[e].length,width:ve[e][0].length}),be=e=>{const{height:t,width:o}=he(e),r=16-t,a=16-o;return[Math.floor(Math.random()*r),Math.floor(Math.random()*a)]};var ye;const we=(ye=k,e=>(...t)=>e(ye(),...t))(x),ge=(e,t,o)=>{const[r,a]=o;return[r<0?0:r>e?e:r,a<0?0:a>t?t:a]},xe=[0,-1],ke=[0,1],Ae=[-1,0],Oe=[1,0],$e={playerBoard:{tetronimoes:[{tetronimo:re,position:[0,0]}],holes:[],walls:[],boardType:0},stack:[...m.range(0,7).map((()=>({tetronimoes:[],holes:[],walls:[],boardType:0})))]},Fe=e=>{let t=1===e.boardType?ie:se;return e.walls.forEach((e=>{t=U(t,ve[e.tetronimo],e.position,1)})),e.holes.forEach((e=>{t=U(t,ve[e.tetronimo],e.position,0)})),e.tetronimoes.forEach((e=>{t=U(t,ve[e.tetronimo],e.position,e.tetronimo)})),t},Ce=e=>{const t=[];return t.push(Fe(e.playerBoard)),e.stack.forEach((e=>t.push(Fe(e)))),t},Ee=(e,t)=>{const o=e.playerBoard.tetronimoes.map((e=>{const o=we(e.position,t),{width:r,height:a}=he(e.tetronimo);return n(n({},e),{position:ge(16-a,16-r,o)})}));return n(n({},e),{playerBoard:n(n({},e.playerBoard),{tetronimoes:o})})};let Ie=!1,Me=$e,Te=Ce(Me);const je=A({extensions:["OES_texture_float"]}),qe=new O;qe.showPanel(0),document.body.appendChild(qe.dom);const Be=(e=>{const t=(e=>{let t=m.range(0,8).map((()=>e.texture({min:"nearest",mag:"nearest",format:"rgba",type:"float32",shape:le,wrap:"repeat"})));return{update:f.flow((e=>e.map(pe)),(e=>e.map(((e,o)=>t[o].subimage(e))))),draw:z`
    ${Y}
    ${K}
    ${{uniforms:t.reduce(((e,t,o)=>(e["boards["+o+"]"]=t,e)),{}),depth:{enable:!1}}}

    float crop(vec2 p) {
      vec2 crop = step(vec2(-1), p) * step(p, vec2(1));
      float c = crop.x * crop.y;
      return c;
    }

    uniform sampler2D boards[${9}];
  
    vec4 colorBoard(int i, sampler2D tex) {
      float scale = 1. + ${J(ce.auto(.3,"stackScale",.1,2))} * float(i);
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
        float stackFade = ${J(ce.auto(.8,"stackFade",0,1))};
        float stackOpacity = 1. - ((1. - iWeight) * stackFade);
        boardColor = vec4(boardColor.xyz * stackOpacity, boardColor.w);

        color = mix(color, boardColor, boardColor.w);
      }
      gl_FragColor = color;
    }
  `}})(e);return $.on((()=>{t.update(Te)}),L),$.on((e=>{Me=((e,t)=>{const o=n(n({},e.stack[0]),{tetronimoes:[...e.playerBoard.tetronimoes,...e.stack[0].tetronimoes],holes:[...e.stack[0].holes],walls:[...e.stack[0].walls],boardType:e.stack[0].boardType});var r;return{playerBoard:o,stack:[...e.stack.slice(1),t%8==0?(r=o.tetronimoes,{tetronimoes:[],holes:r.map((e=>e.tetronimo)).map((e=>({tetronimo:e,position:be(e)}))),walls:[],boardType:1}):{tetronimoes:[],holes:[],walls:[],boardType:0}]}})(Me,e),Te=Ce(Me)}),me),P.map((e=>{e.a&&(Me=Ee(Me,xe)),e.s&&(Me=Ee(Me,Oe)),e.d&&(Me=Ee(Me,ke)),e.w&&(Me=Ee(Me,Ae)),e[" "]&&(Ie||((async()=>{g()})(),Ie=!0),_(!_()))})).map((()=>{Te=Ce(Me)})),e(t.draw)})(je);$.on((()=>{je.poll(),Be(),qe.update()}),L);
