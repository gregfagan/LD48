var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(e,a)=>{for(var s in a||(a={}))t.call(a,s)&&n(e,s,a[s]);if(o)for(var s of o(a))r.call(a,s)&&n(e,s,a[s]);return e};import{l as s,t as i,p as c,a as l,b as p,e as d,G as u,n as m,h as f,c as v,R as h,_ as y,d as b,f as w,r as g,s as x}from"./vendor.f94c9e84.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){a(new Error(`Failed to import: ${e}`)),n(c)},onload(){o(self[t].moduleMap[s]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const k=s.stream.bind({});Object.assign(k,a(a({},s),{of:k}));function A(e,t){const o=k.of();return e.addEventListener(t,o),o}function O(e){let t;return k.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const $=k.merge(k(document.hasFocus()),k.merge(A(window,"focus"),A(window,"blur")).map(p("type")).map(d("focus"))),F=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,E=e=>"string"==typeof e&&F.test(e);function I(e){const t=e.match(F);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class T{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=k(o),!0}})}}class j extends u{constructor(e=new T){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const n=r[t];return n.controller=E(e)?this.addColor(this.store,t):this.add(this.store,t,...o),n}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,j.prototype),t.store=new T,t}}const q=new j;q.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const B=function(e){const t=k.combine(((e,t)=>{if(!e())return function(){const e=k(),t=k(),o=k.merge(k.of(0),k.immediate(k.combine((t=>(e(requestAnimationFrame(t)),t())),[t])));return k.on((()=>cancelAnimationFrame(e())),o.end),o}().pipe(O);t()&&t().end(!0)}),[e]),o=(r=t,k.combine(((e,t)=>{e().map(t)}),[r]));var r;return k.scan(l,0,o)}($.map(m).map(((...e)=>i(c(console.log,e)))("pause"))),M=O(B).map((e=>e/1e3)),_=(L=document,k.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},k.merge(A(L,"keydown"),A(L,"keyup"))));var L;const S=(e,t,o=[0,0],r)=>e.map(((e,n)=>e.map(((e,a)=>{const s=t[n-o[0]]&&t[n-o[0]][a-o[1]];return s?void 0!==r?r:s:e}))));function C(e,...t){const o=t.map(P),r=f,n=v,a=e.reduce(((e,t,n)=>{const a=o[n-1];return`${e}${r(a)}${t}`}));return[...o.map(n),{frag:a}].reduce(R)}function P(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function R(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}function U(e,t=D(),o){const r="controller"in e?e.controller.property:J(t)?D():t;const n=E(e())?()=>I(e()):()=>e();return[r,{frag:`uniform ${null!=o?o:J(t)?t:W(n())} ${r};`,uniforms:{[r]:n}}]}let z=1;const D=()=>"u_"+z++,N=["float","int","bool","vec2","vec3","vec4"],J=e=>N.includes(e);const W=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},Z=C`
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
`,G=C`
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
`,H="I",X="J",Y="L",K="O",Q="S",V="T",ee="Z",te=[H,X,Y,K,Q,V,ee],oe=new Array(16).fill(new Array(16).fill(0)),re=new Array(16).fill(new Array(16).fill(1)),ne=q.addFolder("colors"),ae=q,se=[16,16],ie=e=>e.map((e=>e.map((e=>{return t=e,te.indexOf(t)>-1?[...ce[e](),1]:1===e?[1,1,1,1]:[0,0,0,0];var t})))),ce={I:ne.auto("#ff9b0d","I").map(I),J:ne.auto("#497bff","J").map(I),L:ne.auto("#ff5d5d","L").map(I),O:ne.auto("#00f0ff","O").map(I),S:ne.auto("#00ff86","S").map(I),T:ne.auto("#ff74d1","T").map(I),Z:ne.auto("#fffb51","Z").map(I)},le=q.addFolder("Audio").auto(60,"BPM"),pe={I:[[H,H,H,H]],T:[[V,V,V],[0,V,0]],J:[[0,X],[0,X],[X,X]],L:[[Y,0],[Y,0],[Y,Y]],S:[[0,Q,Q],[Q,Q,0]],Z:[[ee,ee,0],[0,ee,ee]],O:[[K,K],[K,K]]},de=e=>({height:pe[e].length,width:pe[e][0].length}),ue=e=>{const{height:t,width:o}=de(e),r=16-t,n=16-o;return[Math.floor(Math.random()*r),Math.floor(Math.random()*n)]};var me;const fe=(me=w,e=>(...t)=>e(me(),...t))(b),ve=(e,t,o)=>{const[r,n]=o;return[r<0?0:r>e?e:r,n<0?0:n>t?t:n]},he=[0,-1],ye=[0,1],be=[-1,0],we=[1,0],ge={playerBoard:{tetronimoes:[{tetronimo:V,position:[0,0]}],holes:[],walls:[],boardType:0},stack:[...h.range(0,6).map((()=>({tetronimoes:[],holes:[],walls:[],boardType:0}))),{tetronimoes:[],holes:[{tetronimo:V,position:[3,2]}],walls:[],boardType:1}]},xe=(e,t)=>{const o=a(a({},e.stack[0]),{tetronimoes:[...e.playerBoard.tetronimoes,...e.stack[0].tetronimoes],holes:[...e.stack[0].holes],walls:[...e.stack[0].walls],boardType:e.stack[0].boardType});var r;return{playerBoard:o,stack:[...e.stack.slice(1),t%9==0?(r=o.tetronimoes,{tetronimoes:[],holes:r.map((e=>e.tetronimo)).map((e=>({tetronimo:e,position:ue(e)}))),walls:[],boardType:1}):{tetronimoes:[],holes:[],walls:[],boardType:0}]}},ke=e=>{let t=1===e.boardType?re:oe;return e.walls.forEach((e=>{t=S(t,pe[e.tetronimo],e.position,1)})),e.holes.forEach((e=>{t=S(t,pe[e.tetronimo],e.position,0)})),e.tetronimoes.forEach((e=>{t=S(t,pe[e.tetronimo],e.position,e.tetronimo)})),t},Ae=e=>{const t=[];return t.push(ke(e.playerBoard)),e.stack.forEach((e=>t.push(ke(e)))),t},Oe=(e,t)=>{const o=e.playerBoard.tetronimoes.map((e=>{const o=fe(e.position,t),{width:r,height:n}=de(e.tetronimo);return a(a({},e),{position:ve(16-n,16-r,o)})}));return a(a({},e),{playerBoard:a(a({},e.playerBoard),{tetronimoes:o})})};let $e=ge,Fe=Ae($e),Ee=0,Ie=0;const Te=g({extensions:["OES_texture_float"]}),je=new x;je.showPanel(0),document.body.appendChild(je.dom);const qe=(e=>{const t=(e=>{let t=h.range(0,8).map((()=>e.texture({min:"nearest",mag:"nearest",format:"rgba",type:"float32",shape:se,wrap:"repeat"})));return{update:y.flow((e=>e.map(ie)),(e=>e.map(((e,o)=>t[o].subimage(e))))),draw:C`
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
        color = mix(color, boardColor * stackOpacity, boardColor.w);
      }
      gl_FragColor = color;
    }
  `}})(e);return k.on((()=>{t.update(Fe)}),B),k.on((()=>{Ie+=M(),Ie>1/(le()/60)&&(Ee++,Ie=0,$e=xe($e,Ee),Fe=Ae($e))}),M),_.map((e=>{e.a&&($e=Oe($e,he)),e.s&&($e=Oe($e,we)),e.d&&($e=Oe($e,ye)),e.w&&($e=Oe($e,be)),e.r&&(Ee++,$e=xe($e,Ee))})).map((()=>{Fe=Ae($e)})),e(t.draw)})(Te);k.on((()=>{Te.poll(),qe(),je.update()}),B);
