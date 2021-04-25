var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(e,a)=>{for(var i in a||(a={}))t.call(a,i)&&n(e,i,a[i]);if(o)for(var i of o(a))r.call(a,i)&&n(e,i,a[i]);return e};import{l as i,a as s,p as c,e as l,G as p,T as u,n as d,S as f,P as m,s as v,f as b,b as y,c as h,d as w,h as g,g as x,R as A,_ as O,r as $,i as F}from"./vendor.44ec80ce.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const i=new URL(e,r);if(self[t].moduleMap[i])return o(self[t].moduleMap[i]);const s=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),n(c)},onload(){o(self[t].moduleMap[i]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const C=i.stream.bind({});function k(e,t){const o=C.of();return e.addEventListener(t,o),o}function I(e){let t;return C.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}Object.assign(C,a(a({},i),{of:C}));const j=C.merge(C(document.hasFocus()),C.merge(k(window,"focus"),k(window,"blur")).map(c("type")).map(l("focus"))),q=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,E=e=>"string"==typeof e&&q.test(e);function M(e){const t=e.match(q);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class _{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=C(o),!0}})}}class L extends p{constructor(e=new _){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const n=r[t];return n.controller=E(e)?this.addColor(this.store,t):this.add(this.store,t,...o),n}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,L.prototype),t.store=new _,t}}const R=new L;R.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const S=C.of(!0),B=function(e){const t=C.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=C(),o=C(),r=C.merge(C.of(e),C.immediate(C.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return C.on((()=>cancelAnimationFrame(t())),r.end),r}().pipe(I).map(Math.abs);t()&&t().end(!0)}),[e]),o=(r=t,C.combine(((e,t)=>{e().map(t)}),[r]));var r;return C.scan(s,0,o)}(S);I(B).map((e=>e/1e3)),C.on((e=>{e||S(!0)}),j);const P=(T=document,C.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},C.merge(k(T,"keydown"),k(T,"keyup"))));var T;const U=R.addFolder("audio").auto(120,"BPM",60,240),z=C.of(0);u.scheduleRepeat((()=>{z(z()+1)}),"4n"),C.on((e=>u.bpm.value=e),U),C.on((e=>{e?u.pause(d()):u.start(d())}),S);const D=(new f).toDestination();new m(((e,t)=>{D.triggerAttackRelease(t,"4n")}),["C5","C4","C4","C4","C4","C4","B3","G#3"]).start(0);const Z=["I","J","L","O","S","T","Z"],N=new Array(16).fill(new Array(16).fill(0)),J=new Array(16).fill(new Array(16).fill(1)),W=(G=h,e=>(...t)=>e(G(),...t));var G;const H=(e,t=e)=>b(e,t),X=W(y),Y=w,K={I:[H(-1,0),H(0,0),H(1,0),H(2,0)],T:[H(-1,0),H(0,0),H(1,0),H(0,1)],J:[H(0,-1),H(0,0),H(0,1),H(-1,1)],L:[H(0,-1),H(0,0),H(0,1),H(1,1)],O:[H(0,0),H(1,0),H(0,1),H(1,1)],S:[H(0,0),H(1,0),H(-1,1),H(0,1)],Z:[H(-1,0),H(0,0),H(0,1),H(1,1)]},Q=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return H(o,t)},V=(e,t)=>{const o=e.position,r=K[e.tetronimo].map((e=>X(e,o)));return t.map(((t,o)=>t.map(((t,n)=>r.some((e=>Y(e,H(n,o))))?"hole"===e.type?0:e.tetronimo:"hole"===e.type?1:0))))},ee=H(-1,0),te=H(1,0),oe=H(0,-1),re=H(0,1),ne={tetronimoes:[{tetronimo:"Z",position:Q(),type:"player",rotation:0,beat:z()}],currentBeat:z()},ae=C.of(ne),ie=(e,t)=>{const o=e.tetronimoes.map((e=>{if("player"===e.type){const n=X(e.position,t),i=(o=e.tetronimo,r=n,K[o].map((e=>X(r,e))));return n[0]=i.some((([e])=>e<0||e>=16))?e.position[0]:n[0],n[1]=i.some((([,e])=>e<0||e>=16))?e.position[1]:n[1],a(a({},e),{position:n})}var o,r;return e}));return a(a({},e),{tetronimoes:o})};function se(e,...t){const o=t.map(ce),r=g,n=x,a=e.reduce(((e,t,n)=>{const a=o[n-1];return`${e}${r(a)}${t}`}));return[...o.map(n),{frag:a}].reduce(le)}function ce(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function le(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}function pe(e,t=de(),o){const r="controller"in e?e.controller.property:me(t)?de():t;const n=E(e())?()=>M(e()):()=>e();return[r,{frag:`uniform ${null!=o?o:me(t)?t:ve(n())} ${r};`,uniforms:{[r]:n}}]}let ue=1;const de=()=>"u_"+ue++,fe=["float","int","bool","vec2","vec3","vec4"],me=e=>fe.includes(e);const ve=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},be=se`
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
`,ye=se`
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
`,he=R.addFolder("graphics"),we=ae.map((e=>{let t=[];for(let o=0;o<8;o++){const r=e.tetronimoes.filter((t=>t.beat===e.currentBeat+o));let n;n=0===r.length?N:r.some((e=>"hole"===e.type))?J:N,t.push(r.reduce(((e,t)=>V(t,n)),n))}return t})),ge=[16,16],xe=e=>e.map((e=>e.map((e=>{return t=e,Z.indexOf(t)>-1?[...Ae[e](),1]:1===e?[1,1,1,1]:[0,0,0,0];var t})))),Ae={I:he.auto("#ff9b0d","I").map(M),J:he.auto("#497bff","J").map(M),L:he.auto("#ff5d5d","L").map(M),O:he.auto("#00f0ff","O").map(M),S:he.auto("#00ff86","S").map(M),T:he.auto("#ff74d1","T").map(M),Z:he.auto("#fffb51","Z").map(M)};let Oe=!1,$e=0;u.scheduleRepeat((()=>{ae(((e,t)=>{const o=[];return e.tetronimoes.forEach((e=>{"player"!==e.type?e.beat>=t&&o.push(e):o.push(a(a({},e),{beat:t}))})),t%8==0&&o.push({tetronimo:"Z",position:Q(),type:"hole",rotation:0,beat:t+7}),{tetronimoes:o,currentBeat:t}})(ae(),$e)),$e+=1}),"4n"),P.map((e=>{e.a&&ae(ie(ae(),ee)),e.s&&ae(ie(ae(),re)),e.d&&ae(ie(ae(),te)),e.w&&ae(ie(ae(),oe)),e[" "]&&(Oe||((async()=>{v()})(),Oe=!0),S(!S()))}));const Fe=$({extensions:["OES_texture_float"]}),Ce=new F;Ce.showPanel(0),document.body.appendChild(Ce.dom);const ke=(e=>{let t=A.range(0,8).map((()=>e.texture({min:"nearest",mag:"nearest",format:"rgba",type:"float32",shape:ge,wrap:"repeat"})));const o=O.flow((e=>e.map(xe)),(e=>e.map(((e,o)=>t[o].subimage(e)))));C.on(o,we);const r=se`
    ${be}
    ${ye}
    ${{uniforms:t.reduce(((e,t,o)=>(e["boards["+o+"]"]=t,e)),{}),depth:{enable:!1}}}

    float crop(vec2 p) {
      vec2 crop = step(vec2(-1), p) * step(p, vec2(1));
      float c = crop.x * crop.y;
      return c;
    }

    uniform sampler2D boards[${9}];
  
    vec4 colorBoard(int i, sampler2D tex) {
      float scale = 1. + ${pe(he.auto(.3,"stackScale",.1,2))} * float(i);
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
        float stackFade = ${pe(he.auto(.8,"stackFade",0,1))};
        float stackOpacity = 1. - ((1. - iWeight) * stackFade);
        boardColor = vec4(boardColor.xyz * stackOpacity, boardColor.w);

        color = mix(color, boardColor, boardColor.w);
      }
      gl_FragColor = color;
    }
  `;return e(r)})(Fe);C.on((()=>{Fe.poll(),ke(),Ce.update()}),B);
