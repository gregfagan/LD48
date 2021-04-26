var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(e,a)=>{for(var s in a||(a={}))t.call(a,s)&&n(e,s,a[s]);if(o)for(var s of o(a))r.call(a,s)&&n(e,s,a[s]);return e};import{l as s,t as i,p as c,a as p,b as l,e as d,f as u,G as m,c as f,M as h,T as b,n as v,D as g,d as y,S as w,P as x,L as k,g as S,s as E,h as B,i as A,j as $,z as M,k as F,m as I,o as O,q as R,r as T,u as j,v as C,w as q,R as _,x as N,y as L}from"./vendor.69c72b93.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){a(new Error(`Failed to import: ${e}`)),n(c)},onload(){o(self[t].moduleMap[s]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const P=s.stream.bind({});Object.assign(P,a(a({},s),{of:P}));function U(e,t){const o=P.of();return e.addEventListener(t,o),o}function G(e){let t;return P.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const D=P.merge(P(document.hasFocus()),P.merge(U(window,"focus"),U(window,"blur")).map(l("type")).map(d("focus"))),z=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,J=e=>"string"==typeof e&&z.test(e);function Z(e){const t=e.match(z);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class X{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=P(o),!0}})}}class Y extends m{constructor(e=new X){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const n=r[t];return n.controller=J(e)?this.addColor(this.store,t):this.add(this.store,t,...o),n}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,Y.prototype),t.store=new X,t}}const H=new Y;H.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const W=P.of(!0),K=function(e){const t=P.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=P(),o=P(),r=P.merge(P.of(e),P.immediate(P.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return P.on((()=>cancelAnimationFrame(t())),r.end),r}().pipe(G).map(Math.abs);t()&&t().end(!0)}),[e]),o=(r=t,P.combine(((e,t)=>{e().map(t)}),[r]));var r;return P.scan(p,0,o)}(W);G(K).map((e=>e/1e3)),P.on((e=>{e||W(!0)}),D);const Q=(V=document,P.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},P.merge(U(V,"keydown"),U(V,"keyup"))));var V;const ee=e=>e[Math.floor(Math.random()*e.length)],te=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],oe={major:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2]},re=(e,t=3,o=4,r=16)=>{const n=[];for(let a=0;a<r;a++)n.push(`${ee(e)}${ee([t,o])}`);return n},ne=(e,t,o=.2)=>{const r=(new f).toDestination(),n=e.auto(o,t,0,1);return P.on((e=>r.set({gain:e})),n),r},ae=()=>{const e=ne(H,"bass"),t=(()=>{const e=new h;return e.oscillator.type=ee(["pulse","pwm","sine","square","triangle","sawtooth"]),e.envelope.set({attack:ee([.01,"8n"])}),e.filterEnvelope.set({attack:ee([.01,"8n"]),decay:ee([.01,"8n","4n"])}),e})();return t.connect(e),t},se=H.addFolder("audio"),ie=se.auto(120,"BPM",60,240),ce=(()=>{const e=ee(te),t=te.indexOf(e),o=ee(Object.values(oe)),r=[e];let n=t;return o.forEach((e=>{n=(n+e)%te.length,r.push(te[n])})),r})(),pe=P.of(0);b.scheduleRepeat((()=>{pe(pe()+1)}),"4n");const le=u(Boolean,pe.map((e=>e%8==0)));P.on((e=>b.bpm.value=e),ie),P.on((e=>{e?b.pause(v()):b.start(v())}),W);const de=ne(se,"Drums",.4),ue=new g(4.2).connect(de),me=(new y).connect(ue),fe=new w(((e,t)=>{me.triggerAttackRelease(t,"4n")}),["C1","C1","C1","C1","C1","C1","C1",["C1","C1","C1"]]);fe.loop=!0,fe.playbackRate=.5,fe.start(0);const he=[re(ce),re(ce),re(ce),re(ce),re(ce)],be=ne(se,"arp"),ve=new x("16n").connect(be);new k("4m",0,1).connect(ve.wet);const ge=ae().connect(ve),ye=new S(((e,t)=>{ge.triggerAttackRelease(t,"8n")}),ee(he),"up");ye.playbackRate=2,ye.start(0),b.scheduleRepeat((()=>{ye.values=ee(he)}),"4m");const we=ae(),xe=new S(((e,t)=>{we.triggerAttackRelease(t,"2n")}),re(ce,1,2,4),"upDown");xe.playbackRate=.5,xe.start(0);const ke=(Se=F,e=>(...t)=>e(Se(),...t));var Se;const Ee=(e,t=e)=>B(e,t),Be=ke(A),Ae=ke(I),$e=ke(O),Me=ke($),Fe=ke(M),Ie=R,Oe=ke(T);j(Array);const Re=["I","J","L","O","S","T","Z"],Te={I:[Ee(-1,0),Ee(0,0),Ee(1,0),Ee(2,0)],T:[Ee(-1,0),Ee(0,0),Ee(1,0),Ee(0,1)],J:[Ee(0,-1),Ee(0,0),Ee(0,1),Ee(-1,1)],L:[Ee(0,-1),Ee(0,0),Ee(0,1),Ee(1,1)],O:[Ee(0,0),Ee(1,0),Ee(0,1),Ee(1,1)],S:[Ee(0,0),Ee(1,0),Ee(-1,1),Ee(0,1)],Z:[Ee(-1,0),Ee(0,0),Ee(0,1),Ee(1,1)]},je=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return Ee(o,t)},Ce=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],qe=e=>Te[e.tetronimo].map((t=>Be(Me(t,Ce[e.rotation]),e.position))),_e=e=>{const t=qe(e).reduce((([[e,t],[o,r]],[n,a])=>[[Math.min(e,n),Math.min(t,a)],[Math.max(o,n),Math.max(r,a)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=Ae(Fe(),Oe(Fe(),t[0])),r=$e(Ae(Fe(),Oe(t[1],Ee(15,15))));return a(a({},e),{position:Be(e.position,Be(o,r))})},Ne=(e,t)=>4===((e,t)=>{const o=qe(e),r=qe(t),n=[];for(const a of o)for(const e of r)Ie(a,e)&&n.push(a);return n})(e,t).length,Le=Ee(-1,0),Pe=Ee(1,0),Ue=Ee(0,-1),Ge=Ee(0,1),De=({beat:e=0,type:t="hole",tetronimo:o=ee(Re),position:r=je(),rotation:n=ee([0,1,2,3])})=>_e({tetronimo:o,position:r,rotation:n,type:t,beat:e}),ze=De({type:"player",beat:pe()}),Je={tetronimoes:[ze,De({tetronimo:ze.tetronimo,beat:8})],currentBeat:pe()},Ze=P.of(Je);var Xe,Ye;P.on((e=>{const t=Ze();Ze(a(a({},t),{currentBeat:e,tetronimoes:t.tetronimoes.map((o=>"player"===o.type?a(a({},o),{beat:e,tetronimo:t.tetronimoes[t.tetronimoes.length-1].tetronimo}):o)).filter((t=>t.beat>=e))}))}),pe),P.on((()=>{if(0===pe())return;const e=Ze();Ze(a(a({},e),{tetronimoes:[...e.tetronimoes,De({type:"hole",beat:pe()+8})]}))}),le),u(Boolean,(Xe=Ze.map((e=>{const t=e.tetronimoes[0],o=e.tetronimoes[1];return pe()>0&&t&&o&&!Ne(t,o)})),Ye=le,P.combine((()=>Xe()),[Ye]))).map(((...e)=>i(c(console.log,e)))("collision"));const He=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type&&"O"!==e.tetronimo?_e(a(a({},e),{rotation:(e.rotation-t+4)%4})):e))}),We=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type?_e(a(a({},e),{position:Be(e.position,t)})):e))});function Ke(e,...t){const o=t.map(Qe),r=C,n=q,a=e.reduce(((e,t,n)=>{const a=o[n-1];return`${e}${r(a)}${t}`}));return[...o.map(n),{frag:a}].reduce(Ve)}function Qe(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function Ve(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}let et=1;const tt=()=>"u_"+et++,ot=["float","int","bool","vec2","vec3","vec4"],rt=e=>ot.includes(e);const nt=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},at=Ke`
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
`,st=Ke`
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
`,it=H.addFolder("graphics"),ct={I:it.auto("#ff9b0d","I").map(Z),J:it.auto("#497bff","J").map(Z),L:it.auto("#ff5d5d","L").map(Z),O:it.auto("#00f0ff","O").map(Z),S:it.auto("#00ff86","S").map(Z),T:it.auto("#ff74d1","T").map(Z),Z:it.auto("#fffb51","Z").map(Z)},pt={blocks:_.range(0,3).map((()=>Fe())),beat:0,color:[0,0,0],active:!1,invert:!1},lt=Ze.map((e=>_.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,r=o?[1,1,1]:ct[t.tetronimo]();return{blocks:qe(t),color:r,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=_.range(1,8-e.length).map((()=>pt));return e.length<8?e.concat(t):e.slice(0,8)})),dt=["a","b","c","d"],ut=Ke`
    ${at}
    ${st}
    ${{uniforms:_.range(1,8).reduce(((e,t,o)=>{for(const r of Object.keys(lt()[o]))"blocks"!==r&&(e[`shapes[${o}].${r}`]=()=>lt()[o][r]);return _.range(0,3).forEach((t=>{e[`shapes[${o}].${dt[t]}`]=()=>lt()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
      p *= (1. + beat * ${function(e,t=tt(),o){const r="controller"in e?e.controller.property:rt(t)?tt():t,n=J(e())?()=>Z(e()):()=>e();return[r,{frag:`uniform ${null!=o?o:rt(t)?t:nt(n())} ${r};`,uniforms:{[r]:n}}]}(it.auto(.2,"beatScale",.1,1))});
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
  `;let mt=!1;Q.map((e=>{e.a&&Ze(We(Ze(),Le)),e.s&&Ze(We(Ze(),Ge)),e.d&&Ze(We(Ze(),Pe)),e.w&&Ze(We(Ze(),Ue)),e.e&&Ze(He(Ze(),1)),e.q&&Ze(He(Ze(),-1)),e[" "]&&(mt||((async()=>{E()})(),mt=!0),W(!W()))}));const ft=N(),ht=new L;var bt;ht.showPanel(0),document.body.appendChild(ht.dom),P.on((e=>{ht.dom.style.visibility=e?"visible":"hidden",e?H.show():H.hide()}),P.scan((e=>!e),!1,(bt="t",u((e=>e.key===bt),U(document,"keydown")))));const vt=ft(ut);P.on((()=>{ft.poll(),vt(),ht.update()}),K);
