var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(e,a)=>{for(var s in a||(a={}))t.call(a,s)&&r(e,s,a[s]);if(o)for(var s of o(a))n.call(a,s)&&r(e,s,a[s]);return e};import{l as s,t as i,p as c,a as p,b as l,e as d,f as m,G as u,T as f,n as h,R as b,S as v,D as g,M as y,P as w,c as x,L as B,d as E,g as S,s as k,h as A,i as M,j as I,z as $,k as F,m as T,o as O,q as R,r as G,u as _,v as j,w as q,x as N,y as C,A as L}from"./vendor.b4e0e669.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){a(new Error(`Failed to import: ${e}`)),r(c)},onload(){o(self[t].moduleMap[s]),r(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const P=s.stream.bind({});Object.assign(P,a(a({},s),{of:P}));function U(e,t){const o=P.of();return e.addEventListener(t,o),o}function D(e){let t;return P.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const z=P.merge(P(document.hasFocus()),P.merge(U(window,"focus"),U(window,"blur")).map(l("type")).map(d("focus"))),J=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,Z=e=>"string"==typeof e&&J.test(e);function X(e){const t=e.match(J);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class Y{constructor(){return new Proxy({},{get(e,t){var o,n;return"$"===t?e:null!=(n=null==(o=e[t])?void 0:o.call(e))?n:void 0},set(e,t,o){const n=e[t];return n?n(o):e[t]=P(o),!0}})}}class H extends u{constructor(e=new Y){super(),this.store=e}auto(e,t,...o){const n=this.store.$;if(n[t])return n[t];this.store[t]=e;const r=n[t];return r.controller=Z(e)?this.addColor(this.store,t):this.add(this.store,t,...o),r}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,H.prototype),t.store=new Y,t}}const W=new H;W.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const K=P.of(!0),Q=function(e){const t=P.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=P(),o=P(),n=P.merge(P.of(e),P.immediate(P.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return P.on((()=>cancelAnimationFrame(t())),n.end),n}().pipe(D).map(Math.abs);t()&&t().end(!0)}),[e]),o=(n=t,P.combine(((e,t)=>{e().map(t)}),[n]));var n;return P.scan(p,0,o)}(K);D(Q).map((e=>e/1e3)),P.on((e=>{e||K(!0)}),z);const V=(ee=document,P.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},P.merge(U(ee,"keydown"),U(ee,"keyup"))));var ee;const te=e=>e[Math.floor(Math.random()*e.length)],oe=W.addFolder("audio").auto(120,"BPM",60,240),ne=P.of(0);f.scheduleRepeat((()=>{ne(ne()+1)}),"4n");const re=m(Boolean,ne.map((e=>e%8==0)));P.on((e=>f.bpm.value=e),oe),P.on((e=>{e?f.pause(h()):f.start(h())}),K);const ae=new b(.8).toDestination();new v(.5).connect(ae.wet);const se=new g(1.2).toDestination(),ie=(new y).connect(se),ce=new w(((e,t)=>{ie.triggerAttackRelease(t,"4n")}),[[0,"A1"],["0:1:0","C1"],["0:2:0","C1"],["0:3:0","C1"],["1:0:0","C1"],["1:1:0","C1"],["1:2:0","C1"],["1:3:0","C1"]]);ce.loop=!0,ce.loopEnd="2m",ce.start(0);const pe=new x("16n").toDestination();new B("3m").connect(pe.wet);const le=(new E).connect(pe),de=new S(((e,t)=>{le.triggerAttackRelease(t,"8n")}),["E3","Gb3","A4","Gb4","A4","Gb3","B4","B3","E3","Gb3","A4","Gb4","A4","Gb3","B4","B3","E3","G#3","B4","G#4","B4","E3","Db4","B3","E3","Gb3","A4","Gb4","A4","B4","E3","Db4"],"up");de.playbackRate=2,de.start(0);const me=(new E).connect(se),ue=new S(((e,t)=>{me.triggerAttackRelease(t,"2n")}),["E2","Gb1","A2","Gb2"],"upDown");ue.playbackRate=.5,ue.start(0);const fe=(he=F,e=>(...t)=>e(he(),...t));var he;const be=(e,t=e)=>A(e,t),ve=fe(M),ge=fe(T),ye=fe(O),we=fe(I),xe=fe($),Be=R,Ee=fe(G);_(Array);const Se=["I","J","L","O","S","T","Z"],ke={I:[be(-1,0),be(0,0),be(1,0),be(2,0)],T:[be(-1,0),be(0,0),be(1,0),be(0,1)],J:[be(0,-1),be(0,0),be(0,1),be(-1,1)],L:[be(0,-1),be(0,0),be(0,1),be(1,1)],O:[be(0,0),be(1,0),be(0,1),be(1,1)],S:[be(0,0),be(1,0),be(-1,1),be(0,1)],Z:[be(-1,0),be(0,0),be(0,1),be(1,1)]},Ae=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return be(o,t)},Me=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],Ie=e=>ke[e.tetronimo].map((t=>ve(we(t,Me[e.rotation]),e.position))),$e=e=>{const t=Ie(e).reduce((([[e,t],[o,n]],[r,a])=>[[Math.min(e,r),Math.min(t,a)],[Math.max(o,r),Math.max(n,a)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=ge(xe(),Ee(xe(),t[0])),n=ye(ge(xe(),Ee(t[1],be(15,15))));return a(a({},e),{position:ve(e.position,ve(o,n))})},Fe=(e,t)=>4===((e,t)=>{const o=Ie(e),n=Ie(t),r=[];for(const a of o)for(const e of n)Be(a,e)&&r.push(a);return r})(e,t).length,Te=be(-1,0),Oe=be(1,0),Re=be(0,-1),Ge=be(0,1),_e=({beat:e=0,type:t="hole",tetronimo:o=te(Se),position:n=Ae(),rotation:r=te([0,1,2,3])})=>$e({tetronimo:o,position:n,rotation:r,type:t,beat:e}),je=_e({type:"player",beat:ne()}),qe={tetronimoes:[je,_e({tetronimo:je.tetronimo,beat:8})],currentBeat:ne()},Ne=P.of(qe);var Ce,Le;P.on((e=>{const t=Ne();Ne(a(a({},t),{currentBeat:e,tetronimoes:t.tetronimoes.map((o=>"player"===o.type?a(a({},o),{beat:e,tetronimo:t.tetronimoes[t.tetronimoes.length-1].tetronimo}):o)).filter((t=>t.beat>=e))}))}),ne),P.on((()=>{if(0===ne())return;const e=Ne();Ne(a(a({},e),{tetronimoes:[...e.tetronimoes,_e({type:"hole",beat:ne()+8})]}))}),re),m(Boolean,(Ce=Ne.map((e=>{const t=e.tetronimoes[0],o=e.tetronimoes[1];return ne()>0&&t&&o&&!Fe(t,o)})),Le=re,P.combine((()=>Ce()),[Le]))).map(((...e)=>i(c(console.log,e)))("collision"));const Pe=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type&&"O"!==e.tetronimo?$e(a(a({},e),{rotation:(e.rotation-t+4)%4})):e))}),Ue=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type?$e(a(a({},e),{position:ve(e.position,t)})):e))});function De(e,...t){const o=t.map(ze),n=j,r=q,a=e.reduce(((e,t,r)=>{const a=o[r-1];return`${e}${n(a)}${t}`}));return[...o.map(r),{frag:a}].reduce(Je)}function ze(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function Je(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var n;return e[t]="string"==typeof o?((null!=(n=e[t])?n:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}let Ze=1;const Xe=()=>"u_"+Ze++,Ye=["float","int","bool","vec2","vec3","vec4"],He=e=>Ye.includes(e);const We=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},Ke=De`
${{depth:{enable:!1},primitive:"triangle strip",count:4,attributes:{position:[[-1,-1],[1,-1],[-1,1],[1,1]]},vert:"\nprecision highp float;\nattribute vec2 position;\nvarying vec2 uv;\nvoid main() {\n  uv = 0.5 * (position + 1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n",uniforms:{viewport:({viewportWidth:e,viewportHeight:t})=>[e,t]},scissor:{enable:!0,box:({viewportWidth:e,viewportHeight:t})=>{const o=Math.min(e,t),n=Math.max(e,t)-o;return a(a({},e>t?{x:n/2,y:0}:{x:0,y:n/2}),{width:o,height:o})}}}}

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
`,Qe=De`
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
`,Ve=W.addFolder("graphics"),et={I:Ve.auto("#ff9b0d","I").map(X),J:Ve.auto("#497bff","J").map(X),L:Ve.auto("#ff5d5d","L").map(X),O:Ve.auto("#00f0ff","O").map(X),S:Ve.auto("#00ff86","S").map(X),T:Ve.auto("#ff74d1","T").map(X),Z:Ve.auto("#fffb51","Z").map(X)},tt={blocks:N.range(0,3).map((()=>xe())),beat:0,color:[0,0,0],active:!1,invert:!1},ot=Ne.map((e=>N.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,n=o?[1,1,1]:et[t.tetronimo]();return{blocks:Ie(t),color:n,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=N.range(1,8-e.length).map((()=>tt));return e.length<8?e.concat(t):e.slice(0,8)})),nt=["a","b","c","d"],rt=De`
    ${Ke}
    ${Qe}
    ${{uniforms:N.range(1,8).reduce(((e,t,o)=>{for(const n of Object.keys(ot()[o]))"blocks"!==n&&(e[`shapes[${o}].${n}`]=()=>ot()[o][n]);return N.range(0,3).forEach((t=>{e[`shapes[${o}].${nt[t]}`]=()=>ot()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
      p *= (1. + beat * ${function(e,t=Xe(),o){const n="controller"in e?e.controller.property:He(t)?Xe():t,r=Z(e())?()=>X(e()):()=>e();return[n,{frag:`uniform ${null!=o?o:He(t)?t:We(r())} ${n};`,uniforms:{[n]:r}}]}(Ve.auto(.2,"beatScale",.1,1))});
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
  `;let at=!1;V.map((e=>{e.a&&Ne(Ue(Ne(),Te)),e.s&&Ne(Ue(Ne(),Ge)),e.d&&Ne(Ue(Ne(),Oe)),e.w&&Ne(Ue(Ne(),Re)),e.e&&Ne(Pe(Ne(),1)),e.q&&Ne(Pe(Ne(),-1)),e[" "]&&(at||((async()=>{k()})(),at=!0),K(!K()))}));const st=C(),it=new L;var ct;it.showPanel(0),document.body.appendChild(it.dom),P.on((e=>{it.dom.style.visibility=e?"visible":"hidden",e?W.show():W.hide()}),P.scan((e=>!e),!1,(ct="t",m((e=>e.key===ct),U(document,"keydown")))));const pt=st(rt);P.on((()=>{st.poll(),pt(),it.update()}),Q);
