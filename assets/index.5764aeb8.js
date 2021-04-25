var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,n=(e,n)=>{for(var s in n||(n={}))t.call(n,s)&&a(e,s,n[s]);if(o)for(var s of o(n))r.call(n,s)&&a(e,s,n[s]);return e};import{l as s,t as i,p as c,a as l,b as p,e as d,G as u,n as m,h as f,c as v,R as h,_ as b,d as y,S as w,s as g,f as x,g as k,i as A,r as O,j as $}from"./vendor.bc2e7b04.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,n)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){n(new Error(`Failed to import: ${e}`)),a(c)},onload(){o(self[t].moduleMap[s]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const F=s.stream.bind({});Object.assign(F,n(n({},s),{of:F}));function E(e,t){const o=F.of();return e.addEventListener(t,o),o}function j(e){let t;return F.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const C=F.merge(F(document.hasFocus()),F.merge(E(window,"focus"),E(window,"blur")).map(p("type")).map(d("focus"))),I=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,M=e=>"string"==typeof e&&I.test(e);function q(e){const t=e.match(I);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class T{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=F(o),!0}})}}class B extends u{constructor(e=new T){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const a=r[t];return a.controller=M(e)?this.addColor(this.store,t):this.add(this.store,t,...o),a}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,B.prototype),t.store=new T,t}}const _=new B;_.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const L=function(e){const t=F.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=F(),o=F(),r=F.merge(F.of(e),F.immediate(F.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return F.on((()=>cancelAnimationFrame(t())),r.end),r}().pipe(j).map(Math.abs);t()&&t().end(!0)}),[e]),o=(r=t,F.combine(((e,t)=>{e().map(t)}),[r]));var r;return F.scan(l,0,o)}(C.map(m).map(((...e)=>i(c(console.log,e)))("pause"))),S=j(L).map((e=>e/1e3)),R=(P=document,F.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},F.merge(E(P,"keydown"),E(P,"keyup"))));var P;const U=(e,t,o=[0,0],r)=>e.map(((e,a)=>e.map(((e,n)=>{const s=t[a-o[0]]&&t[a-o[0]][n-o[1]];return s?void 0!==r?r:s:e}))));function z(e,...t){const o=t.map(D),r=f,a=v,n=e.reduce(((e,t,a)=>{const n=o[a-1];return`${e}${r(n)}${t}`}));return[...o.map(a),{frag:n}].reduce(N)}function D(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function N(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?n(n({},e[t]),o):o,e}),n({},e))}function J(e,t=Z(),o){const r="controller"in e?e.controller.property:H(t)?Z():t;const a=M(e())?()=>q(e()):()=>e();return[r,{frag:`uniform ${null!=o?o:H(t)?t:X(a())} ${r};`,uniforms:{[r]:a}}]}let W=1;const Z=()=>"u_"+W++,G=["float","int","bool","vec2","vec3","vec4"],H=e=>G.includes(e);const X=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},Y=z`
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
`,Q="I",V="J",ee="L",te="O",oe="S",re="T",ae="Z",ne=[Q,V,ee,te,oe,re,ae],se=new Array(16).fill(new Array(16).fill(0)),ie=new Array(16).fill(new Array(16).fill(1)),ce=_.addFolder("graphics"),le=[16,16],pe=e=>e.map((e=>e.map((e=>{return t=e,ne.indexOf(t)>-1?[...de[e](),1]:1===e?[1,1,1,1]:[0,0,0,0];var t})))),de={I:ce.auto("#ff9b0d","I").map(q),J:ce.auto("#497bff","J").map(q),L:ce.auto("#ff5d5d","L").map(q),O:ce.auto("#00f0ff","O").map(q),S:ce.auto("#00ff86","S").map(q),T:ce.auto("#ff74d1","T").map(q),Z:ce.auto("#fffb51","Z").map(q)},ue=_.addFolder("audio").auto(120,"BPM",60,240),me=y(F.scan(((e,t)=>e+t/60*ue()),0,S).map(Math.floor)),fe=(new w).toDestination(),ve={I:[[Q,Q,Q,Q]],T:[[re,re,re],[0,re,0]],J:[[0,V],[0,V],[V,V]],L:[[ee,0],[ee,0],[ee,ee]],S:[[0,oe,oe],[oe,oe,0]],Z:[[ae,ae,0],[0,ae,ae]],O:[[te,te],[te,te]]},he=e=>({height:ve[e].length,width:ve[e][0].length}),be=e=>{const{height:t,width:o}=he(e),r=16-t,a=16-o;return[Math.floor(Math.random()*r),Math.floor(Math.random()*a)]};var ye;const we=(ye=A,e=>(...t)=>e(ye(),...t))(k),ge=(e,t,o)=>{const[r,a]=o;return[r<0?0:r>e?e:r,a<0?0:a>t?t:a]},xe=[0,-1],ke=[0,1],Ae=[-1,0],Oe=[1,0],$e={playerBoard:{tetronimoes:[{tetronimo:re,position:[0,0]}],holes:[],walls:[],boardType:0},stack:[...h.range(0,7).map((()=>({tetronimoes:[],holes:[],walls:[],boardType:0})))]},Fe=e=>{let t=1===e.boardType?ie:se;return e.walls.forEach((e=>{t=U(t,ve[e.tetronimo],e.position,1)})),e.holes.forEach((e=>{t=U(t,ve[e.tetronimo],e.position,0)})),e.tetronimoes.forEach((e=>{t=U(t,ve[e.tetronimo],e.position,e.tetronimo)})),t},Ee=e=>{const t=[];return t.push(Fe(e.playerBoard)),e.stack.forEach((e=>t.push(Fe(e)))),t},je=(e,t)=>{const o=e.playerBoard.tetronimoes.map((e=>{const o=we(e.position,t),{width:r,height:a}=he(e.tetronimo);return n(n({},e),{position:ge(16-a,16-r,o)})}));return n(n({},e),{playerBoard:n(n({},e.playerBoard),{tetronimoes:o})})};let Ce=!1,Ie=$e,Me=Ee(Ie);const qe=O({extensions:["OES_texture_float"]}),Te=new $;Te.showPanel(0),document.body.appendChild(Te.dom);const Be=(e=>{const t=(e=>{let t=h.range(0,8).map((()=>e.texture({min:"nearest",mag:"nearest",format:"rgba",type:"float32",shape:le,wrap:"repeat"})));return{update:b.flow((e=>e.map(pe)),(e=>e.map(((e,o)=>t[o].subimage(e))))),draw:z`
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
  `}})(e);return F.on((()=>{t.update(Me)}),L),F.on((e=>{var t;Ie=((e,t)=>{const o=n(n({},e.stack[0]),{tetronimoes:[...e.playerBoard.tetronimoes,...e.stack[0].tetronimoes],holes:[...e.stack[0].holes],walls:[...e.stack[0].walls],boardType:e.stack[0].boardType});var r;return{playerBoard:o,stack:[...e.stack.slice(1),t%8==0?(r=o.tetronimoes,{tetronimoes:[],holes:r.map((e=>e.tetronimo)).map((e=>({tetronimo:e,position:be(e)}))),walls:[],boardType:1}):{tetronimoes:[],holes:[],walls:[],boardType:0}]}})(Ie,e),Me=Ee(Ie),Ce&&(t=e,x(),fe.triggerAttackRelease(t%8==0?"C5":"C4","8n"))}),me),R.map((e=>(e.a&&(Ie=je(Ie,xe)),e.s&&(Ie=je(Ie,Oe)),e.d&&(Ie=je(Ie,ke)),e.w&&(Ie=je(Ie,Ae)),e))).map((e=>{!Ce&&Object.keys(e).length&&(g(),Ce=!0),Me=Ee(Ie)})),e(t.draw)})(qe);F.on((()=>{qe.poll(),Be(),Te.update()}),L);
