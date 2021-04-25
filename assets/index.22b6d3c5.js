var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,n=(e,n)=>{for(var s in n||(n={}))t.call(n,s)&&a(e,s,n[s]);if(o)for(var s of o(n))r.call(n,s)&&a(e,s,n[s]);return e};import{l as s,a as i,p as c,e as p,G as l,T as d,n as u,R as f,S as m,D as h,M as b,P as v,b as g,L as y,c as w,d as x,s as E,f as S,g as B,t as A,z as k,h as M,m as I,i as $,j as F,k as O,o as R,q as T,r as _,u as G,v as j}from"./vendor.8f1a0df4.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,n)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){n(new Error(`Failed to import: ${e}`)),a(c)},onload(){o(self[t].moduleMap[s]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const q=s.stream.bind({});function N(e,t){const o=q.of();return e.addEventListener(t,o),o}function C(e){let t;return q.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}Object.assign(q,n(n({},s),{of:q}));const L=q.merge(q(document.hasFocus()),q.merge(N(window,"focus"),N(window,"blur")).map(c("type")).map(p("focus"))),P=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,U=e=>"string"==typeof e&&P.test(e);function D(e){const t=e.match(P);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class z{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=q(o),!0}})}}class J extends l{constructor(e=new z){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const a=r[t];return a.controller=U(e)?this.addColor(this.store,t):this.add(this.store,t,...o),a}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,J.prototype),t.store=new z,t}}const Z=new J;Z.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const X=q.of(!0),Y=function(e){const t=q.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=q(),o=q(),r=q.merge(q.of(e),q.immediate(q.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return q.on((()=>cancelAnimationFrame(t())),r.end),r}().pipe(C).map(Math.abs);t()&&t().end(!0)}),[e]),o=(r=t,q.combine(((e,t)=>{e().map(t)}),[r]));var r;return q.scan(i,0,o)}(X);C(Y).map((e=>e/1e3)),q.on((e=>{e||X(!0)}),L);const H=(W=document,q.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},q.merge(N(W,"keydown"),N(W,"keyup"))));var W;const K=e=>e[Math.floor(Math.random()*e.length)],Q=Z.addFolder("audio").auto(120,"BPM",60,240),V=q.of(0);d.scheduleRepeat((()=>{V(V()+1)}),"4n"),q.on((e=>d.bpm.value=e),Q),q.on((e=>{e?d.pause(u()):d.start(u())}),X);const ee=new f(.8).toDestination();new m(.5).connect(ee.wet);const te=new h(4.2).toDestination(),oe=(new b).connect(te),re=new v(((e,t)=>{oe.triggerAttackRelease(t,"4n")}),[[0,"A1"],["0:1:0","C1"],["0:2:0","C1"],["0:3:0","C1"],["1:0:0","C1"],["1:1:0","C1"],["1:2:0","C1"],["1:3:0","C1"]]);re.loop=!0,re.loopEnd="2m",re.start(0);const ae=new g("16n").toDestination();new y("3m").connect(ae.wet);const ne=(new w).connect(ae),se=new x(((e,t)=>{ne.triggerAttackRelease(t,"8n")}),["E3","Gb3","A4","Gb4","A4","Gb3","B4","B3","E3","Gb3","A4","Gb4","A4","Gb3","B4","B3","E3","G#3","B4","G#4","B4","E3","Db4","B3","E3","Gb3","A4","Gb4","A4","B4","E3","Db4"],"up");se.playbackRate=2,se.start(0);const ie=(new w).connect(te),ce=new x(((e,t)=>{ie.triggerAttackRelease(t,"2n")}),["E2","Gb1","A2","Gb2"],"upDown");ce.playbackRate=.5,ce.start(0);const pe=(le=M,e=>(...t)=>e(le(),...t));var le;const de=(e,t=e)=>S(e,t),ue=pe(B),fe=pe(I),me=pe($),he=pe(A),be=pe(k),ve=pe(F);O(Array);const ge=["I","J","L","O","S","T","Z"],ye={I:[de(-1,0),de(0,0),de(1,0),de(2,0)],T:[de(-1,0),de(0,0),de(1,0),de(0,1)],J:[de(0,-1),de(0,0),de(0,1),de(-1,1)],L:[de(0,-1),de(0,0),de(0,1),de(1,1)],O:[de(0,0),de(1,0),de(0,1),de(1,1)],S:[de(0,0),de(1,0),de(-1,1),de(0,1)],Z:[de(-1,0),de(0,0),de(0,1),de(1,1)]},we=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return de(o,t)},xe=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],Ee=e=>ye[e.tetronimo].map((t=>ue(he(t,xe[e.rotation]),e.position))),Se=e=>{const t=Ee(e).reduce((([[e,t],[o,r]],[a,n])=>[[Math.min(e,a),Math.min(t,n)],[Math.max(o,a),Math.max(r,n)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=fe(be(),ve(be(),t[0])),r=me(fe(be(),ve(t[1],de(15,15))));return n(n({},e),{position:ue(e.position,ue(o,r))})},Be=de(-1,0),Ae=de(1,0),ke=de(0,-1),Me=de(0,1),Ie=()=>K(ge),$e=({beat:e=0,type:t="hole",tetronimo:o=Ie(),position:r=we(),rotation:a=K([0,1,2,3])})=>Se({tetronimo:o,position:r,rotation:a,type:t,beat:e}),Fe=$e({type:"player",beat:V()}),Oe={tetronimoes:[Fe,$e({tetronimo:Fe.tetronimo,beat:7})],currentBeat:V()},Re=q.of(Oe),Te=(e,t)=>n(n({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type&&"O"!==e.tetronimo?Se(n(n({},e),{rotation:(e.rotation-t+4)%4})):e))}),_e=(e,t)=>n(n({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type?Se(n(n({},e),{position:ue(e.position,t)})):e))});function Ge(e,...t){const o=t.map(je),r=R,a=T,n=e.reduce(((e,t,a)=>{const n=o[a-1];return`${e}${r(n)}${t}`}));return[...o.map(a),{frag:n}].reduce(qe)}function je(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function qe(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?n(n({},e[t]),o):o,e}),n({},e))}let Ne=1;const Ce=()=>"u_"+Ne++,Le=["float","int","bool","vec2","vec3","vec4"],Pe=e=>Le.includes(e);const Ue=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},De=Ge`
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
`,ze=Ge`
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
`,Je=Z.addFolder("graphics"),Ze={I:Je.auto("#ff9b0d","I").map(D),J:Je.auto("#497bff","J").map(D),L:Je.auto("#ff5d5d","L").map(D),O:Je.auto("#00f0ff","O").map(D),S:Je.auto("#00ff86","S").map(D),T:Je.auto("#ff74d1","T").map(D),Z:Je.auto("#fffb51","Z").map(D)},Xe={blocks:_.range(0,3).map((()=>be())),beat:0,color:[0,0,0],active:!1,invert:!1},Ye=Re.map((e=>_.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,r=o?[1,1,1]:Ze[t.tetronimo]();return{blocks:Ee(t),color:r,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=_.range(1,8-e.length).map((()=>Xe));return e.length<8?e.concat(t):e.slice(0,8)})),He=["a","b","c","d"],We=Ge`
    ${De}
    ${ze}
    ${{uniforms:_.range(1,8).reduce(((e,t,o)=>{for(const r of Object.keys(Ye()[o]))"blocks"!==r&&(e[`shapes[${o}].${r}`]=()=>Ye()[o][r]);return _.range(0,3).forEach((t=>{e[`shapes[${o}].${He[t]}`]=()=>Ye()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
    struct Shape {
      vec2 a;
      vec2 b;
      vec2 c;
      vec2 d;
      float beat;
      vec3 color;
      bool active;
      bool invert;
    };

    #define numShapes ${8}
    #define numBeats ${8}.

    #define board vec2(${16})
    #define halfBoard (board/2.)

    uniform Shape shapes[numShapes];

    vec2 scaleToBeat(vec2 p, float beat) {
      p -= halfBoard;
      p *= (1. + beat * ${function(e,t=Ce(),o){const r="controller"in e?e.controller.property:Pe(t)?Ce():t,a=U(e())?()=>D(e()):()=>e();return[r,{frag:`uniform ${null!=o?o:Pe(t)?t:Ue(a())} ${r};`,uniforms:{[r]:a}}]}(Je.auto(.2,"beatScale",.1,1))});
      p += halfBoard;
      return p;
    }

    float fadeToBeat(float beat) {
      return 1. - 0.8 * (beat / numBeats);
    }

    float sdEdges(vec2 p) {
      // centered box with half edge of 8
      return sdBox(p - halfBoard, halfBoard) - 0.15;
    }

    float sdBlock(vec2 p, vec2 b) {
      vec2 blockP = b + vec2(0.5);
      return sdBox(p - blockP, vec2(0.5));
    }

    float sdShape(vec2 p, Shape s) {
      float d = INFINITY;
      
      float k = 0.01;
      d = opSmoothUnion(d, sdBlock(p, s.a), k);
      d = opSmoothUnion(d, sdBlock(p, s.b), k);
      d = opSmoothUnion(d, sdBlock(p, s.c), k);
      d = opSmoothUnion(d, sdBlock(p, s.d), k);

      d = s.invert ? -d : d;

      // crop to board
      d = max(sdEdges(p), d);

      return d;
    }

    vec4 colorShape(vec2 p, Shape s) {
      // first, get the opacity of this shape
      float alpha = step(sdShape(scaleToBeat(p, s.beat), s), 0.);

      // next, loop through all the shapes to see if there is another one
      // closer to the camera which is also opaque at this location.
      float shadow = 0.;
      for (int i = 0; i < numShapes; i++) {
        Shape otherShape = shapes[i];
        if (otherShape.active && otherShape.beat < s.beat) {
          // when checking the other shape, project it onto this shape's beat
          float d = step(sdShape(scaleToBeat(p, s.beat), otherShape), 0.);
          if (d > 0.) { shadow = 0.1; break; }
        }
      }

      vec3 color = vec3(s.color) * fadeToBeat(s.beat) - shadow;
      return vec4(color, alpha);
    }

    void main() {
      vec2 p = st();
      p *= 1.2;             // global zoom out
      p *= vec2(1, -1);     // flip Y so 0 is top left
      p = p / 2. + 0.5;     // move origin to top left
      p = p * board;        // scale up to game board size

      vec4 color = vec4(0, 0, 0, 0);

      for (float i = numBeats - 1.; i >= 0.; i--) {
        vec2 pEdge = scaleToBeat(p, i);
        float edges = sdEdges(pEdge);
        edges = step(abs(edges), 0.15);
        color = mix(color, vec4(fadeToBeat(i)), edges);
      }

      for (int i = numShapes - 1; i >= 0; i--) {
        Shape s = shapes[i];
        if (s.active) {
          vec4 shape = colorShape(p, s);
          color = mix(color, shape, shape.w);
        }
      }

      gl_FragColor = color;
    }
  `;let Ke=!1,Qe=0;d.scheduleRepeat((()=>{Re(((e,t)=>{const o=t>0&&t%8==0&&$e({type:"hole",beat:t+7}),r=[...e.tetronimoes].map((e=>"player"===e.type?n(n({},e),{beat:t,tetronimo:o?o.tetronimo:e.tetronimo}):e)).filter((e=>e.beat>=t));return{tetronimoes:o?[...r,o]:r,currentBeat:t}})(Re(),Qe)),Qe+=1}),"4n"),H.map((e=>{e.a&&Re(_e(Re(),Be)),e.s&&Re(_e(Re(),Me)),e.d&&Re(_e(Re(),Ae)),e.w&&Re(_e(Re(),ke)),e.e&&Re(Te(Re(),1)),e.q&&Re(Te(Re(),-1)),e[" "]&&(Ke||((async()=>{E()})(),Ke=!0),X(!X()))}));const Ve=G({extensions:["OES_texture_float"]}),et=new j;et.showPanel(0),document.body.appendChild(et.dom);const tt=Ve(We);q.on((()=>{Ve.poll(),tt(),et.update()}),Y);
