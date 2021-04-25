var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,n=(e,n)=>{for(var s in n||(n={}))t.call(n,s)&&a(e,s,n[s]);if(o)for(var s of o(n))r.call(n,s)&&a(e,s,n[s]);return e};import{l as s,a as i,p as c,e as p,f as l,G as d,T as u,n as m,R as f,S as h,D as b,M as v,P as g,b as y,L as w,c as x,d as E,s as S,g as k,h as B,t as A,z as M,i as I,m as $,j as F,k as R,o as T,q as O,r as G,u as _,v as j,w as q}from"./vendor.9a150194.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,n)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){n(new Error(`Failed to import: ${e}`)),a(c)},onload(){o(self[t].moduleMap[s]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const N=s.stream.bind({});function C(e,t){const o=N.of();return e.addEventListener(t,o),o}function L(e){let t;return N.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}Object.assign(N,n(n({},s),{of:N}));const P=N.merge(N(document.hasFocus()),N.merge(C(window,"focus"),C(window,"blur")).map(c("type")).map(p("focus"))),U=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,D=e=>"string"==typeof e&&U.test(e);function z(e){const t=e.match(U);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class J{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=N(o),!0}})}}class Z extends d{constructor(e=new J){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const a=r[t];return a.controller=D(e)?this.addColor(this.store,t):this.add(this.store,t,...o),a}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,Z.prototype),t.store=new J,t}}const X=new Z;X.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const Y=N.of(!0),H=function(e){const t=N.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=N(),o=N(),r=N.merge(N.of(e),N.immediate(N.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return N.on((()=>cancelAnimationFrame(t())),r.end),r}().pipe(L).map(Math.abs);t()&&t().end(!0)}),[e]),o=(r=t,N.combine(((e,t)=>{e().map(t)}),[r]));var r;return N.scan(i,0,o)}(Y);L(H).map((e=>e/1e3)),N.on((e=>{e||Y(!0)}),P);const W=(K=document,N.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},N.merge(C(K,"keydown"),C(K,"keyup"))));var K;const Q=e=>e[Math.floor(Math.random()*e.length)],V=X.addFolder("audio").auto(120,"BPM",60,240),ee=N.of(0);u.scheduleRepeat((()=>{ee(ee()+1)}),"4n"),N.on((e=>u.bpm.value=e),V),N.on((e=>{e?u.pause(m()):u.start(m())}),Y);const te=new f(.8).toDestination();new h(.5).connect(te.wet);const oe=new b(1.2).toDestination(),re=(new v).connect(oe),ae=new g(((e,t)=>{re.triggerAttackRelease(t,"4n")}),[[0,"A1"],["0:1:0","C1"],["0:2:0","C1"],["0:3:0","C1"],["1:0:0","C1"],["1:1:0","C1"],["1:2:0","C1"],["1:3:0","C1"]]);ae.loop=!0,ae.loopEnd="2m",ae.start(0);const ne=new y("16n").toDestination();new w("3m").connect(ne.wet);const se=(new x).connect(ne),ie=new E(((e,t)=>{se.triggerAttackRelease(t,"8n")}),["E3","Gb3","A4","Gb4","A4","Gb3","B4","B3","E3","Gb3","A4","Gb4","A4","Gb3","B4","B3","E3","G#3","B4","G#4","B4","E3","Db4","B3","E3","Gb3","A4","Gb4","A4","B4","E3","Db4"],"up");ie.playbackRate=2,ie.start(0);const ce=(new x).connect(oe),pe=new E(((e,t)=>{ce.triggerAttackRelease(t,"2n")}),["E2","Gb1","A2","Gb2"],"upDown");pe.playbackRate=.5,pe.start(0);const le=(de=I,e=>(...t)=>e(de(),...t));var de;const ue=(e,t=e)=>k(e,t),me=le(B),fe=le($),he=le(F),be=le(A),ve=le(M),ge=le(R);T(Array);const ye=["I","J","L","O","S","T","Z"],we={I:[ue(-1,0),ue(0,0),ue(1,0),ue(2,0)],T:[ue(-1,0),ue(0,0),ue(1,0),ue(0,1)],J:[ue(0,-1),ue(0,0),ue(0,1),ue(-1,1)],L:[ue(0,-1),ue(0,0),ue(0,1),ue(1,1)],O:[ue(0,0),ue(1,0),ue(0,1),ue(1,1)],S:[ue(0,0),ue(1,0),ue(-1,1),ue(0,1)],Z:[ue(-1,0),ue(0,0),ue(0,1),ue(1,1)]},xe=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return ue(o,t)},Ee=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],Se=e=>we[e.tetronimo].map((t=>me(be(t,Ee[e.rotation]),e.position))),ke=e=>{const t=Se(e).reduce((([[e,t],[o,r]],[a,n])=>[[Math.min(e,a),Math.min(t,n)],[Math.max(o,a),Math.max(r,n)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=fe(ve(),ge(ve(),t[0])),r=he(fe(ve(),ge(t[1],ue(15,15))));return n(n({},e),{position:me(e.position,me(o,r))})},Be=ue(-1,0),Ae=ue(1,0),Me=ue(0,-1),Ie=ue(0,1),$e=()=>Q(ye),Fe=({beat:e=0,type:t="hole",tetronimo:o=$e(),position:r=xe(),rotation:a=Q([0,1,2,3])})=>ke({tetronimo:o,position:r,rotation:a,type:t,beat:e}),Re=Fe({type:"player",beat:ee()}),Te={tetronimoes:[Re,Fe({tetronimo:Re.tetronimo,beat:7})],currentBeat:ee()},Oe=N.of(Te),Ge=(e,t)=>n(n({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type&&"O"!==e.tetronimo?ke(n(n({},e),{rotation:(e.rotation-t+4)%4})):e))}),_e=(e,t)=>n(n({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type?ke(n(n({},e),{position:me(e.position,t)})):e))});function je(e,...t){const o=t.map(qe),r=O,a=G,n=e.reduce(((e,t,a)=>{const n=o[a-1];return`${e}${r(n)}${t}`}));return[...o.map(a),{frag:n}].reduce(Ne)}function qe(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function Ne(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?n(n({},e[t]),o):o,e}),n({},e))}let Ce=1;const Le=()=>"u_"+Ce++,Pe=["float","int","bool","vec2","vec3","vec4"],Ue=e=>Pe.includes(e);const De=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},ze=je`
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
`,Je=je`
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
`,Ze=X.addFolder("graphics"),Xe={I:Ze.auto("#ff9b0d","I").map(z),J:Ze.auto("#497bff","J").map(z),L:Ze.auto("#ff5d5d","L").map(z),O:Ze.auto("#00f0ff","O").map(z),S:Ze.auto("#00ff86","S").map(z),T:Ze.auto("#ff74d1","T").map(z),Z:Ze.auto("#fffb51","Z").map(z)},Ye={blocks:_.range(0,3).map((()=>ve())),beat:0,color:[0,0,0],active:!1,invert:!1},He=Oe.map((e=>_.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,r=o?[1,1,1]:Xe[t.tetronimo]();return{blocks:Se(t),color:r,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=_.range(1,8-e.length).map((()=>Ye));return e.length<8?e.concat(t):e.slice(0,8)})),We=["a","b","c","d"],Ke=je`
    ${ze}
    ${Je}
    ${{uniforms:_.range(1,8).reduce(((e,t,o)=>{for(const r of Object.keys(He()[o]))"blocks"!==r&&(e[`shapes[${o}].${r}`]=()=>He()[o][r]);return _.range(0,3).forEach((t=>{e[`shapes[${o}].${We[t]}`]=()=>He()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
      p *= (1. + beat * ${function(e,t=Le(),o){const r="controller"in e?e.controller.property:Ue(t)?Le():t,a=D(e())?()=>z(e()):()=>e();return[r,{frag:`uniform ${null!=o?o:Ue(t)?t:De(a())} ${r};`,uniforms:{[r]:a}}]}(Ze.auto(.2,"beatScale",.1,1))});
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
  `;let Qe=!1,Ve=0;u.scheduleRepeat((()=>{Oe(((e,t)=>{const o=t>0&&t%8==0&&Fe({type:"hole",beat:t+7}),r=[...e.tetronimoes].map((e=>"player"===e.type?n(n({},e),{beat:t,tetronimo:o?o.tetronimo:e.tetronimo}):e)).filter((e=>e.beat>=t));return{tetronimoes:o?[...r,o]:r,currentBeat:t}})(Oe(),Ve)),Ve+=1}),"4n"),W.map((e=>{e.a&&Oe(_e(Oe(),Be)),e.s&&Oe(_e(Oe(),Ie)),e.d&&Oe(_e(Oe(),Ae)),e.w&&Oe(_e(Oe(),Me)),e.e&&Oe(Ge(Oe(),1)),e.q&&Oe(Ge(Oe(),-1)),e[" "]&&(Qe||((async()=>{S()})(),Qe=!0),Y(!Y()))}));const et=j(),tt=new q;var ot;tt.showPanel(0),document.body.appendChild(tt.dom),N.on((e=>{tt.dom.style.visibility=e?"visible":"hidden",e?X.show():X.hide()}),N.scan((e=>!e),!1,(ot="t",l((e=>e.key===ot),C(document,"keydown")))));const rt=et(Ke);N.on((()=>{et.poll(),rt(),tt.update()}),H);
