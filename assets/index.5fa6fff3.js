var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(e,a)=>{for(var s in a||(a={}))t.call(a,s)&&n(e,s,a[s]);if(o)for(var s of o(a))r.call(a,s)&&n(e,s,a[s]);return e};import{l as s,a as i,p as c,e as l,G as p,d,T as u,n as m,S as f,P as v,s as h,b,c as y,R as w,h as g,f as x,_ as k,r as A,g as O}from"./vendor.d7e138a3.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){a(new Error(`Failed to import: ${e}`)),n(c)},onload(){o(self[t].moduleMap[s]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const $=s.stream.bind({});function F(e,t){const o=$.of();return e.addEventListener(t,o),o}function C(e){let t;return $.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}Object.assign($,a(a({},s),{of:$}));const E=$.merge($(document.hasFocus()),$.merge(F(window,"focus"),F(window,"blur")).map(c("type")).map(l("focus"))),I=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,M=e=>"string"==typeof e&&I.test(e);function T(e){const t=e.match(I);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class j{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=$(o),!0}})}}class q extends p{constructor(e=new j){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const n=r[t];return n.controller=M(e)?this.addColor(this.store,t):this.add(this.store,t,...o),n}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,q.prototype),t.store=new j,t}}const B=new q;B.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const _=$.of(!0),L=function(e){const t=$.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=$(),o=$(),r=$.merge($.of(e),$.immediate($.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return $.on((()=>cancelAnimationFrame(t())),r.end),r}().pipe(C).map(Math.abs);t()&&t().end(!0)}),[e]),o=(r=t,$.combine(((e,t)=>{e().map(t)}),[r]));var r;return $.scan(i,0,o)}(_),S=C(L).map((e=>e/1e3));$.on((e=>{e||_(!0)}),E);const P=(R=document,$.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},$.merge(F(R,"keydown"),F(R,"keyup"))));var R;const U=(e,t,o=[0,0],r)=>e.map(((e,n)=>e.map(((e,a)=>{const s=t[n-o[0]]&&t[n-o[0]][a-o[1]];return s?void 0!==r?r:s:e})))),z=B.addFolder("audio").auto(120,"BPM",60,240),D=d($.scan(((e,t)=>e+t/60*z()),0,S).map(Math.floor));$.on((e=>u.bpm.value=e),z),$.on((e=>{e?u.pause(m()):u.start(m())}),_);const N=(new f).toDestination();new v(((e,t)=>{N.triggerAttackRelease(t,"4n")}),["C5","C4","C4","C4","C4","C4","B3","G#3"]).start(0);const J="I",W="J",Z="L",G="O",H="S",X="T",Y="Z",K=[J,W,Z,G,H,X,Y],Q=new Array(16).fill(new Array(16).fill(0)),V=new Array(16).fill(new Array(16).fill(1)),ee={I:[[J,J,J,J]],T:[[X,X,X],[0,X,0]],J:[[0,W],[0,W],[W,W]],L:[[Z,0],[Z,0],[Z,Z]],S:[[0,H,H],[H,H,0]],Z:[[Y,Y,0],[0,Y,Y]],O:[[G,G],[G,G]]},te=e=>({height:ee[e].length,width:ee[e][0].length}),oe=e=>{const{height:t,width:o}=te(e),r=16-t,n=16-o;return[Math.floor(Math.random()*r),Math.floor(Math.random()*n)]};var re;const ne=(re=y,e=>(...t)=>e(re(),...t))(b),ae=(e,t,o)=>{const[r,n]=o;return[r<0?0:r>e?e:r,n<0?0:n>t?t:n]},se=[0,-1],ie=[0,1],ce=[-1,0],le=[1,0],pe={playerBoard:{tetronimoes:[{tetronimo:X,position:[0,0]}],holes:[],walls:[],boardType:0},stack:[...w.range(0,7).map((()=>({tetronimoes:[],holes:[],walls:[],boardType:0})))]},de=$.of(pe),ue=e=>{let t=1===e.boardType?V:Q;return e.walls.forEach((e=>{t=U(t,ee[e.tetronimo],e.position,1)})),e.holes.forEach((e=>{t=U(t,ee[e.tetronimo],e.position,0)})),e.tetronimoes.forEach((e=>{t=U(t,ee[e.tetronimo],e.position,e.tetronimo)})),t},me=(e,t)=>{const o=e.playerBoard.tetronimoes.map((e=>{const o=ne(e.position,t),{width:r,height:n}=te(e.tetronimo);return a(a({},e),{position:ae(16-n,16-r,o)})}));return a(a({},e),{playerBoard:a(a({},e.playerBoard),{tetronimoes:o})})};function fe(e,...t){const o=t.map(ve),r=g,n=x,a=e.reduce(((e,t,n)=>{const a=o[n-1];return`${e}${r(a)}${t}`}));return[...o.map(n),{frag:a}].reduce(he)}function ve(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function he(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}function be(e,t=we(),o){const r="controller"in e?e.controller.property:xe(t)?we():t;const n=M(e())?()=>T(e()):()=>e();return[r,{frag:`uniform ${null!=o?o:xe(t)?t:ke(n())} ${r};`,uniforms:{[r]:n}}]}let ye=1;const we=()=>"u_"+ye++,ge=["float","int","bool","vec2","vec3","vec4"],xe=e=>ge.includes(e);const ke=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},Ae=fe`
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
`,Oe=fe`
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
`,$e=B.addFolder("graphics"),Fe=de.map((e=>{const t=[];return t.push(ue(e.playerBoard)),e.stack.forEach((e=>t.push(ue(e)))),t})),Ce=[16,16],Ee=e=>e.map((e=>e.map((e=>{return t=e,K.indexOf(t)>-1?[...Ie[e](),1]:1===e?[1,1,1,1]:[0,0,0,0];var t})))),Ie={I:$e.auto("#ff9b0d","I").map(T),J:$e.auto("#497bff","J").map(T),L:$e.auto("#ff5d5d","L").map(T),O:$e.auto("#00f0ff","O").map(T),S:$e.auto("#00ff86","S").map(T),T:$e.auto("#ff74d1","T").map(T),Z:$e.auto("#fffb51","Z").map(T)};let Me=!1;$.on((e=>de(((e,t)=>{const o=a(a({},e.stack[0]),{tetronimoes:[...e.playerBoard.tetronimoes,...e.stack[0].tetronimoes],holes:[...e.stack[0].holes],walls:[...e.stack[0].walls],boardType:e.stack[0].boardType});var r;return{playerBoard:o,stack:[...e.stack.slice(1),t%8==0?(r=o.tetronimoes,{tetronimoes:[],holes:r.map((e=>e.tetronimo)).map((e=>({tetronimo:e,position:oe(e)}))),walls:[],boardType:1}):{tetronimoes:[],holes:[],walls:[],boardType:0}]}})(de(),e))),D),P.map((e=>{e.a&&de(me(de(),se)),e.s&&de(me(de(),le)),e.d&&de(me(de(),ie)),e.w&&de(me(de(),ce)),e[" "]&&(Me||((async()=>{h()})(),Me=!0),_(!_()))}));const Te=A({extensions:["OES_texture_float"]}),je=new O;je.showPanel(0),document.body.appendChild(je.dom);const qe=(e=>{let t=w.range(0,8).map((()=>e.texture({min:"nearest",mag:"nearest",format:"rgba",type:"float32",shape:Ce,wrap:"repeat"})));const o=k.flow((e=>e.map(Ee)),(e=>e.map(((e,o)=>t[o].subimage(e)))));$.on(o,Fe);const r=fe`
    ${Ae}
    ${Oe}
    ${{uniforms:t.reduce(((e,t,o)=>(e["boards["+o+"]"]=t,e)),{}),depth:{enable:!1}}}

    float crop(vec2 p) {
      vec2 crop = step(vec2(-1), p) * step(p, vec2(1));
      float c = crop.x * crop.y;
      return c;
    }

    uniform sampler2D boards[${9}];
  
    vec4 colorBoard(int i, sampler2D tex) {
      float scale = 1. + ${be($e.auto(.3,"stackScale",.1,2))} * float(i);
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
        float stackFade = ${be($e.auto(.8,"stackFade",0,1))};
        float stackOpacity = 1. - ((1. - iWeight) * stackFade);
        boardColor = vec4(boardColor.xyz * stackOpacity, boardColor.w);

        color = mix(color, boardColor, boardColor.w);
      }
      gl_FragColor = color;
    }
  `;return e(r)})(Te);$.on((()=>{Te.poll(),qe(),je.update()}),L);
