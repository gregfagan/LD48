var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(e,a)=>{for(var i in a||(a={}))t.call(a,i)&&n(e,i,a[i]);if(o)for(var i of o(a))r.call(a,i)&&n(e,i,a[i]);return e};import{l as i,a as s,p as c,e as l,G as p,T as u,n as d,S as f,P as m,s as v,f as b,b as y,c as h,d as w,h as g,g as x,R as A,_ as O,r as $,i as F}from"./vendor.44ec80ce.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const i=new URL(e,r);if(self[t].moduleMap[i])return o(self[t].moduleMap[i]);const s=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),n(c)},onload(){o(self[t].moduleMap[i]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const C=i.stream.bind({});function k(e,t){const o=C.of();return e.addEventListener(t,o),o}function I(e){let t;return C.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}Object.assign(C,a(a({},i),{of:C}));const j=C.merge(C(document.hasFocus()),C.merge(k(window,"focus"),k(window,"blur")).map(c("type")).map(l("focus"))),q=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,E=e=>"string"==typeof e&&q.test(e);function M(e){const t=e.match(q);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class _{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=C(o),!0}})}}class L extends p{constructor(e=new _){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const n=r[t];return n.controller=E(e)?this.addColor(this.store,t):this.add(this.store,t,...o),n}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,L.prototype),t.store=new _,t}}const R=new L;R.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const S=C.of(!0),B=function(e){const t=C.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=C(),o=C(),r=C.merge(C.of(e),C.immediate(C.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return C.on((()=>cancelAnimationFrame(t())),r.end),r}().pipe(I).map(Math.abs);t()&&t().end(!0)}),[e]),o=(r=t,C.combine(((e,t)=>{e().map(t)}),[r]));var r;return C.scan(s,0,o)}(S);I(B).map((e=>e/1e3)),C.on((e=>{e||S(!0)}),j);const P=(T=document,C.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},C.merge(k(T,"keydown"),k(T,"keyup"))));var T;const U=R.addFolder("audio").auto(120,"BPM",60,240),z=C.of(0);u.scheduleRepeat((()=>{z(z()+1)}),"4n"),C.on((e=>u.bpm.value=e),U),C.on((e=>{e?u.pause(d()):u.start(d())}),S);const D=(new f).toDestination();new m(((e,t)=>{D.triggerAttackRelease(t,"4n")}),["C5","C4","C4","C4","C4","C4","B3","G#3"]).start(0);const N="T",J=["I","J","L","O","S",N,"Z"],W=new Array(16).fill(new Array(16).fill(0)),G=new Array(16).fill(new Array(16).fill(1)),Z=(H=h,e=>(...t)=>e(H(),...t));var H;const X=(e,t=e)=>b(e,t),Y=Z(y),K=w,Q={I:[X(-1,0),X(0,0),X(1,0),X(2,0)],T:[X(-1,0),X(0,0),X(1,0),X(0,1)],J:[X(0,1),X(0,0),X(-1,-1),X(0,-1)],L:[X(1,0),X(0,0),X(0,-1),X(1,-1)],O:[X(0,0),X(1,0),X(0,1),X(1,1)]},V=e=>{const{left:t,right:o,top:r,bottom:n}=(e=>{const t=Q[e];return{left:t.reduce(((e,t)=>t[0]<0?e+t[0]:e),0),right:t.reduce(((e,t)=>t[0]>0?e+t[0]:e),0),top:t.reduce(((e,t)=>t[1]<0?e+t[1]:e),0),bottom:t.reduce(((e,t)=>t[1]>0?e+t[1]:e),0)}})(e),a=0-r,i=16-n,s=0-t,c=16-o,l=Math.floor(Math.random()*i)+a,p=Math.floor(Math.random()*c)+s;return X(p,l)},ee=(e,t)=>{const o=e.position,r=Q[e.tetronimo].map((e=>Y(e,o)));return t.map(((t,o)=>t.map(((t,n)=>r.some((e=>K(e,X(n,o))))?"hole"===e.type?0:e.tetronimo:"hole"===e.type?1:0))))},te=X(-1,0),oe=X(1,0),re=X(0,-1),ne=X(0,1),ae={tetronimoes:[{tetronimo:N,position:V(N),type:"player",rotation:0,beat:z()},{tetronimo:N,position:V(N),type:"hole",rotation:0,beat:z()+7}],currentBeat:z()},ie=C.of(ae),se=(e,t)=>{const o=e.tetronimoes.map((e=>{if("player"===e.type){const o=Y(e.position,t);return a(a({},e),{position:o})}return e}));return a(a({},e),{tetronimoes:o})};function ce(e,...t){const o=t.map(le),r=g,n=x,a=e.reduce(((e,t,n)=>{const a=o[n-1];return`${e}${r(a)}${t}`}));return[...o.map(n),{frag:a}].reduce(pe)}function le(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function pe(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}function ue(e,t=fe(),o){const r="controller"in e?e.controller.property:ve(t)?fe():t;const n=E(e())?()=>M(e()):()=>e();return[r,{frag:`uniform ${null!=o?o:ve(t)?t:be(n())} ${r};`,uniforms:{[r]:n}}]}let de=1;const fe=()=>"u_"+de++,me=["float","int","bool","vec2","vec3","vec4"],ve=e=>me.includes(e);const be=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},ye=ce`
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
`,he=ce`
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
`,we=R.addFolder("graphics"),ge=ie.map((e=>{let t=[];for(let o=0;o<8;o++){const r=e.tetronimoes.filter((t=>t.beat===e.currentBeat+o));let n;n=0===r.length?W:r.some((e=>"hole"===e.type))?G:W,t.push(r.reduce(((e,t)=>ee(t,n)),n))}return t})),xe=[16,16],Ae=e=>e.map((e=>e.map((e=>{return t=e,J.indexOf(t)>-1?[...Oe[e](),1]:1===e?[1,1,1,1]:[0,0,0,0];var t})))),Oe={I:we.auto("#ff9b0d","I").map(M),J:we.auto("#497bff","J").map(M),L:we.auto("#ff5d5d","L").map(M),O:we.auto("#00f0ff","O").map(M),S:we.auto("#00ff86","S").map(M),T:we.auto("#ff74d1","T").map(M),Z:we.auto("#fffb51","Z").map(M)};let $e=!1,Fe=0;u.scheduleRepeat((()=>{ie(((e,t)=>{const o=[];return e.tetronimoes.forEach((e=>{"player"!==e.type?e.beat>=t&&o.push(e):o.push(a(a({},e),{beat:t}))})),t%8==0&&o.push({tetronimo:N,position:V(N),type:"hole",rotation:0,beat:t+7}),{tetronimoes:o,currentBeat:t}})(ie(),Fe)),Fe+=1}),"4n"),P.map((e=>{e.a&&ie(se(ie(),te)),e.s&&ie(se(ie(),ne)),e.d&&ie(se(ie(),oe)),e.w&&ie(se(ie(),re)),e[" "]&&($e||((async()=>{v()})(),$e=!0),S(!S()))}));const Ce=$({extensions:["OES_texture_float"]}),ke=new F;ke.showPanel(0),document.body.appendChild(ke.dom);const Ie=(e=>{let t=A.range(0,8).map((()=>e.texture({min:"nearest",mag:"nearest",format:"rgba",type:"float32",shape:xe,wrap:"repeat"})));const o=O.flow((e=>e.map(Ae)),(e=>e.map(((e,o)=>t[o].subimage(e)))));C.on(o,ge);const r=ce`
    ${ye}
    ${he}
    ${{uniforms:t.reduce(((e,t,o)=>(e["boards["+o+"]"]=t,e)),{}),depth:{enable:!1}}}

    float crop(vec2 p) {
      vec2 crop = step(vec2(-1), p) * step(p, vec2(1));
      float c = crop.x * crop.y;
      return c;
    }

    uniform sampler2D boards[${9}];
  
    vec4 colorBoard(int i, sampler2D tex) {
      float scale = 1. + ${ue(we.auto(.3,"stackScale",.1,2))} * float(i);
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
        float stackFade = ${ue(we.auto(.8,"stackFade",0,1))};
        float stackOpacity = 1. - ((1. - iWeight) * stackFade);
        boardColor = vec4(boardColor.xyz * stackOpacity, boardColor.w);

        color = mix(color, boardColor, boardColor.w);
      }
      gl_FragColor = color;
    }
  `;return e(r)})(Ce);C.on((()=>{Ce.poll(),Ie(),ke.update()}),B);
