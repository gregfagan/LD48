var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,n=(e,n)=>{for(var i in n||(n={}))t.call(n,i)&&a(e,i,n[i]);if(o)for(var i of o(n))r.call(n,i)&&a(e,i,n[i]);return e};import{l as i,t as s,p as c,a as l,b as p,e as d,G as u,n as m,h as f,c as v,R as h,_ as b,d as y,f as w,r as g,s as x}from"./vendor.f94c9e84.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,n)=>{const i=new URL(e,r);if(self[t].moduleMap[i])return o(self[t].moduleMap[i]);const s=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){n(new Error(`Failed to import: ${e}`)),a(c)},onload(){o(self[t].moduleMap[i]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const k=i.stream.bind({});Object.assign(k,n(n({},i),{of:k}));function A(e,t){const o=k.of();return e.addEventListener(t,o),o}function O(e){let t;return k.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const $=k.merge(k(document.hasFocus()),k.merge(A(window,"focus"),A(window,"blur")).map(p("type")).map(d("focus"))),F=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,E=e=>"string"==typeof e&&F.test(e);function I(e){const t=e.match(F);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class j{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=k(o),!0}})}}class q extends u{constructor(e=new j){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const a=r[t];return a.controller=E(e)?this.addColor(this.store,t):this.add(this.store,t,...o),a}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,q.prototype),t.store=new j,t}}const T=new q;T.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const B=function(e){const t=k.combine(((e,t)=>{if(!e())return function(){const e=k(),t=k(),o=k.merge(k.of(0),k.immediate(k.combine((t=>(e(requestAnimationFrame(t)),t())),[t])));return k.on((()=>cancelAnimationFrame(e())),o.end),o}().pipe(O);t()&&t().end(!0)}),[e]),o=(r=t,k.combine(((e,t)=>{e().map(t)}),[r]));var r;return k.scan(l,0,o)}($.map(m).map(((...e)=>s(c(console.log,e)))("pause"))),C=O(B).map((e=>e/1e3)),M=(_=document,k.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},k.merge(A(_,"keydown"),A(_,"keyup"))));var _;const L=(e,t,o=[0,0],r)=>e.map(((e,a)=>e.map(((e,n)=>{const i=t[a-o[0]]&&t[a-o[0]][n-o[1]];return i?void 0!==r?r:i:e}))));function S(e,...t){const o=t.map(P),r=f,a=v,n=e.reduce(((e,t,a)=>{const n=o[a-1];return`${e}${r(n)}${t}`}));return[...o.map(a),{frag:n}].reduce(R)}function P(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function R(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?n(n({},e[t]),o):o,e}),n({},e))}function U(e,t=D(),o){const r="controller"in e?e.controller.property:J(t)?D():t;const a=E(e())?()=>I(e()):()=>e();return[r,{frag:`uniform ${null!=o?o:J(t)?t:W(a())} ${r};`,uniforms:{[r]:a}}]}let z=1;const D=()=>"u_"+z++,N=["float","int","bool","vec2","vec3","vec4"],J=e=>N.includes(e);const W=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},Z=S`
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
`,G=S`
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
`,H="I",X="J",Y="L",K="O",Q="S",V="T",ee="Z",te=[H,X,Y,K,Q,V,ee],oe=new Array(16).fill(new Array(16).fill(0)),re=new Array(16).fill(new Array(16).fill(1)),ae=T.addFolder("graphics"),ne=[16,16],ie=e=>e.map((e=>e.map((e=>{return t=e,te.indexOf(t)>-1?[...se[e](),1]:1===e?[1,1,1,1]:[0,0,0,0];var t})))),se={I:ae.auto("#ff9b0d","I").map(I),J:ae.auto("#497bff","J").map(I),L:ae.auto("#ff5d5d","L").map(I),O:ae.auto("#00f0ff","O").map(I),S:ae.auto("#00ff86","S").map(I),T:ae.auto("#ff74d1","T").map(I),Z:ae.auto("#fffb51","Z").map(I)},ce=T.addFolder("audio").auto(60,"BPM"),le={I:[[H,H,H,H]],T:[[V,V,V],[0,V,0]],J:[[0,X],[0,X],[X,X]],L:[[Y,0],[Y,0],[Y,Y]],S:[[0,Q,Q],[Q,Q,0]],Z:[[ee,ee,0],[0,ee,ee]],O:[[K,K],[K,K]]},pe=e=>({height:le[e].length,width:le[e][0].length}),de=e=>{const{height:t,width:o}=pe(e),r=16-t,a=16-o;return[Math.floor(Math.random()*r),Math.floor(Math.random()*a)]};var ue;const me=(ue=w,e=>(...t)=>e(ue(),...t))(y),fe=(e,t,o)=>{const[r,a]=o;return[r<0?0:r>e?e:r,a<0?0:a>t?t:a]},ve=[0,-1],he=[0,1],be=[-1,0],ye=[1,0],we={playerBoard:{tetronimoes:[{tetronimo:V,position:[0,0]}],holes:[],walls:[],boardType:0},stack:[...h.range(0,7).map((()=>({tetronimoes:[],holes:[],walls:[],boardType:0})))]},ge=(e,t)=>{const o=n(n({},e.stack[0]),{tetronimoes:[...e.playerBoard.tetronimoes,...e.stack[0].tetronimoes],holes:[...e.stack[0].holes],walls:[...e.stack[0].walls],boardType:e.stack[0].boardType});var r;return{playerBoard:o,stack:[...e.stack.slice(1),t%8==0?(r=o.tetronimoes,{tetronimoes:[],holes:r.map((e=>e.tetronimo)).map((e=>({tetronimo:e,position:de(e)}))),walls:[],boardType:1}):{tetronimoes:[],holes:[],walls:[],boardType:0}]}},xe=e=>{let t=1===e.boardType?re:oe;return e.walls.forEach((e=>{t=L(t,le[e.tetronimo],e.position,1)})),e.holes.forEach((e=>{t=L(t,le[e.tetronimo],e.position,0)})),e.tetronimoes.forEach((e=>{t=L(t,le[e.tetronimo],e.position,e.tetronimo)})),t},ke=e=>{const t=[];return t.push(xe(e.playerBoard)),e.stack.forEach((e=>t.push(xe(e)))),t},Ae=(e,t)=>{const o=e.playerBoard.tetronimoes.map((e=>{const o=me(e.position,t),{width:r,height:a}=pe(e.tetronimo);return n(n({},e),{position:fe(16-a,16-r,o)})}));return n(n({},e),{playerBoard:n(n({},e.playerBoard),{tetronimoes:o})})};let Oe=-1,$e=we,Fe=ke($e),Ee=0;const Ie=g({extensions:["OES_texture_float"]}),je=new x;je.showPanel(0),document.body.appendChild(je.dom);const qe=(e=>{const t=(e=>{let t=h.range(0,8).map((()=>e.texture({min:"nearest",mag:"nearest",format:"rgba",type:"float32",shape:ne,wrap:"repeat"})));return{update:b.flow((e=>e.map(ie)),(e=>e.map(((e,o)=>t[o].subimage(e))))),draw:S`
    ${Z}
    ${G}
    ${{uniforms:t.reduce(((e,t,o)=>(e["boards["+o+"]"]=t,e)),{}),depth:{enable:!1}}}

    float crop(vec2 p) {
      vec2 crop = step(vec2(-1), p) * step(p, vec2(1));
      float c = crop.x * crop.y;
      return c;
    }

    uniform sampler2D boards[${9}];
  
    vec4 colorBoard(int i, sampler2D tex) {
      float scale = 1. + ${U(ae.auto(.3,"stackScale",.1,2))} * float(i);
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
        float stackFade = ${U(ae.auto(.8,"stackFade",0,1))};
        float stackOpacity = 1. - ((1. - iWeight) * stackFade);
        boardColor = vec4(boardColor.xyz * stackOpacity, boardColor.w);

        color = mix(color, boardColor, boardColor.w);
      }
      gl_FragColor = color;
    }
  `}})(e);return k.on((()=>{t.update(Fe)}),B),k.on((()=>{Ee+=C(),Ee>1/(ce()/60)&&(Oe++,Ee=0,$e=ge($e,Oe),Fe=ke($e))}),C),M.map((e=>{e.a&&($e=Ae($e,ve)),e.s&&($e=Ae($e,ye)),e.d&&($e=Ae($e,he)),e.w&&($e=Ae($e,be)),e.r&&(Oe++,$e=ge($e,Oe))})).map((()=>{Fe=ke($e)})),e(t.draw)})(Ie);k.on((()=>{Ie.poll(),qe(),je.update()}),B);
