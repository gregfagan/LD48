var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,n=(e,n)=>{for(var s in n||(n={}))t.call(n,s)&&a(e,s,n[s]);if(o)for(var s of o(n))r.call(n,s)&&a(e,s,n[s]);return e};import{l as s,t as i,p as c,a as l,b as p,e as d,G as u,n as m,h as f,c as v,R as h,_ as b,s as y,S as w,d as g,f as x,g as k,r as A,i as O}from"./vendor.35e90329.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,n)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){n(new Error(`Failed to import: ${e}`)),a(c)},onload(){o(self[t].moduleMap[s]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const $=s.stream.bind({});Object.assign($,n(n({},s),{of:$}));function F(e,t){const o=$.of();return e.addEventListener(t,o),o}function E(e){let t;return $.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const j=$.merge($(document.hasFocus()),$.merge(F(window,"focus"),F(window,"blur")).map(p("type")).map(d("focus"))),C=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,I=e=>"string"==typeof e&&C.test(e);function q(e){const t=e.match(C);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class T{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=$(o),!0}})}}class B extends u{constructor(e=new T){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const a=r[t];return a.controller=I(e)?this.addColor(this.store,t):this.add(this.store,t,...o),a}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,B.prototype),t.store=new T,t}}const M=new B;M.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const _=function(e){const t=$.combine(((e,t)=>{if(!e())return function(){const e=$(),t=$(),o=$.merge($.of(0),$.immediate($.combine((t=>(e(requestAnimationFrame(t)),t())),[t])));return $.on((()=>cancelAnimationFrame(e())),o.end),o}().pipe(E);t()&&t().end(!0)}),[e]),o=(r=t,$.combine(((e,t)=>{e().map(t)}),[r]));var r;return $.scan(l,0,o)}(j.map(m).map(((...e)=>i(c(console.log,e)))("pause"))),L=E(_).map((e=>e/1e3)),S=(R=document,$.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},$.merge(F(R,"keydown"),F(R,"keyup"))));var R;const P=(e,t,o=[0,0],r)=>e.map(((e,a)=>e.map(((e,n)=>{const s=t[a-o[0]]&&t[a-o[0]][n-o[1]];return s?void 0!==r?r:s:e}))));function U(e,...t){const o=t.map(z),r=f,a=v,n=e.reduce(((e,t,a)=>{const n=o[a-1];return`${e}${r(n)}${t}`}));return[...o.map(a),{frag:n}].reduce(D)}function z(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function D(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?n(n({},e[t]),o):o,e}),n({},e))}function N(e,t=W(),o){const r="controller"in e?e.controller.property:G(t)?W():t;const a=I(e())?()=>q(e()):()=>e();return[r,{frag:`uniform ${null!=o?o:G(t)?t:H(a())} ${r};`,uniforms:{[r]:a}}]}let J=1;const W=()=>"u_"+J++,Z=["float","int","bool","vec2","vec3","vec4"],G=e=>Z.includes(e);const H=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},X=U`
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
`,Y=U`
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
`,K="I",Q="J",V="L",ee="O",te="S",oe="T",re="Z",ae=[K,Q,V,ee,te,oe,re],ne=new Array(16).fill(new Array(16).fill(0)),se=new Array(16).fill(new Array(16).fill(1)),ie=M.addFolder("graphics"),ce=[16,16],le=e=>e.map((e=>e.map((e=>{return t=e,ae.indexOf(t)>-1?[...pe[e](),1]:1===e?[1,1,1,1]:[0,0,0,0];var t})))),pe={I:ie.auto("#ff9b0d","I").map(q),J:ie.auto("#497bff","J").map(q),L:ie.auto("#ff5d5d","L").map(q),O:ie.auto("#00f0ff","O").map(q),S:ie.auto("#00ff86","S").map(q),T:ie.auto("#ff74d1","T").map(q),Z:ie.auto("#fffb51","Z").map(q)},de=M.addFolder("audio").auto(60,"BPM"),ue={I:[[K,K,K,K]],T:[[oe,oe,oe],[0,oe,0]],J:[[0,Q],[0,Q],[Q,Q]],L:[[V,0],[V,0],[V,V]],S:[[0,te,te],[te,te,0]],Z:[[re,re,0],[0,re,re]],O:[[ee,ee],[ee,ee]]},me=e=>({height:ue[e].length,width:ue[e][0].length}),fe=e=>{const{height:t,width:o}=me(e),r=16-t,a=16-o;return[Math.floor(Math.random()*r),Math.floor(Math.random()*a)]};var ve;const he=(ve=k,e=>(...t)=>e(ve(),...t))(x),be=(e,t,o)=>{const[r,a]=o;return[r<0?0:r>e?e:r,a<0?0:a>t?t:a]},ye=[0,-1],we=[0,1],ge=[-1,0],xe=[1,0],ke={playerBoard:{tetronimoes:[{tetronimo:oe,position:[0,0]}],holes:[],walls:[],boardType:0},stack:[...h.range(0,7).map((()=>({tetronimoes:[],holes:[],walls:[],boardType:0})))]},Ae=(e,t)=>{const o=n(n({},e.stack[0]),{tetronimoes:[...e.playerBoard.tetronimoes,...e.stack[0].tetronimoes],holes:[...e.stack[0].holes],walls:[...e.stack[0].walls],boardType:e.stack[0].boardType});var r;return{playerBoard:o,stack:[...e.stack.slice(1),t%8==0?(r=o.tetronimoes,{tetronimoes:[],holes:r.map((e=>e.tetronimo)).map((e=>({tetronimo:e,position:fe(e)}))),walls:[],boardType:1}):{tetronimoes:[],holes:[],walls:[],boardType:0}]}},Oe=e=>{let t=1===e.boardType?se:ne;return e.walls.forEach((e=>{t=P(t,ue[e.tetronimo],e.position,1)})),e.holes.forEach((e=>{t=P(t,ue[e.tetronimo],e.position,0)})),e.tetronimoes.forEach((e=>{t=P(t,ue[e.tetronimo],e.position,e.tetronimo)})),t},$e=e=>{const t=[];return t.push(Oe(e.playerBoard)),e.stack.forEach((e=>t.push(Oe(e)))),t},Fe=(e,t)=>{const o=e.playerBoard.tetronimoes.map((e=>{const o=he(e.position,t),{width:r,height:a}=me(e.tetronimo);return n(n({},e),{position:be(16-a,16-r,o)})}));return n(n({},e),{playerBoard:n(n({},e.playerBoard),{tetronimoes:o})})};let Ee=!1;let je=-1,Ce=ke,Ie=$e(Ce),qe=0;const Te=A({extensions:["OES_texture_float"]}),Be=new O;Be.showPanel(0),document.body.appendChild(Be.dom);const Me=(e=>{const t=(e=>{let t=h.range(0,8).map((()=>e.texture({min:"nearest",mag:"nearest",format:"rgba",type:"float32",shape:ce,wrap:"repeat"})));return{update:b.flow((e=>e.map(le)),(e=>e.map(((e,o)=>t[o].subimage(e))))),draw:U`
    ${X}
    ${Y}
    ${{uniforms:t.reduce(((e,t,o)=>(e["boards["+o+"]"]=t,e)),{}),depth:{enable:!1}}}

    float crop(vec2 p) {
      vec2 crop = step(vec2(-1), p) * step(p, vec2(1));
      float c = crop.x * crop.y;
      return c;
    }

    uniform sampler2D boards[${9}];
  
    vec4 colorBoard(int i, sampler2D tex) {
      float scale = 1. + ${N(ie.auto(.3,"stackScale",.1,2))} * float(i);
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
        float stackFade = ${N(ie.auto(.8,"stackFade",0,1))};
        float stackOpacity = 1. - ((1. - iWeight) * stackFade);
        boardColor = vec4(boardColor.xyz * stackOpacity, boardColor.w);

        color = mix(color, boardColor, boardColor.w);
      }
      gl_FragColor = color;
    }
  `}})(e);return $.on((()=>{t.update(Ie)}),_),$.on((()=>{qe+=L(),qe>1/(de()/60)&&(je++,qe=0,Ce=Ae(Ce,je),Ie=$e(Ce),Ee&&(e=>{const t=(new w).toDestination();g(),t.triggerAttackRelease(e%8==0?"C5":"C4","8n")})(je))}),L),S.map((e=>(e.a&&(Ce=Fe(Ce,ye)),e.s&&(Ce=Fe(Ce,xe)),e.d&&(Ce=Fe(Ce,we)),e.w&&(Ce=Fe(Ce,ge)),e.r&&(je++,Ce=Ae(Ce,je)),e))).map((e=>{!Ee&&Object.keys(e).length&&(y(),Ee=!0),Ie=$e(Ce)})),e(t.draw)})(Te);$.on((()=>{Te.poll(),Me(),Be.update()}),_);
