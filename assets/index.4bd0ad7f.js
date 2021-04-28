var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(e,a)=>{for(var s in a||(a={}))t.call(a,s)&&r(e,s,a[s]);if(o)for(var s of o(a))n.call(a,s)&&r(e,s,a[s]);return e};import{l as s,t as i,p as c,a as l,b as p,e as d,f as m,G as u,n as f,T as h,D as b,V as v,M as y,c as g,d as w,g as x,z as k,h as B,m as S,i as E,j as C,s as A,k as R,R as $,o as I,P as T,q as M,r as F,u as O,v as q,S as j,N as _,L as N,w as P,x as L,y as U,A as z,B as D,C as G,E as H}from"./vendor.8434b459.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){a(new Error(`Failed to import: ${e}`)),r(c)},onload(){o(self[t].moduleMap[s]),r(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/tetronimo/assets/");const J=s.stream.bind({});Object.assign(J,a(a({},s),{of:J}));function Z(e,t){const o=J.of();return e.addEventListener(t,o),o}function W(e){let t;return J.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const X=J.merge(J(document.hasFocus()),J.merge(Z(window,"focus"),Z(window,"blur")).map(p("type")).map(d("focus"))),Y=e=>m((t=>t.key===e),Z(document,"keydown")),Q=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,V=e=>"string"==typeof e&&Q.test(e);function K(e){const t=e.match(Q);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class ee{constructor(){return new Proxy({},{get(e,t){var o,n;return"$"===t?e:null!=(n=null==(o=e[t])?void 0:o.call(e))?n:void 0},set(e,t,o){const n=e[t];return n?n(o):e[t]=J(o),!0}})}}class te extends u{constructor(e=new ee){super(),this.store=e}auto(e,t,...o){const n=this.store.$;if(n[t])return n[t];this.store[t]=e;const r=n[t];return r.controller=V(e)?this.addColor(this.store,t):this.add(this.store,t,...o),r}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,te.prototype),t.store=new ee,t}}const oe=new te;oe.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const ne=X.map(f).map(((...e)=>i(c(console.log,e)))("pause")),re=function(e){const t=J.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=J(),o=J(),n=J.merge(J.of(e),J.immediate(J.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return J.on((()=>cancelAnimationFrame(t())),n.end),n}().pipe(W).map(Math.abs);t()&&t().end(!0)}),[e]),o=(n=t,J.combine(((e,t)=>{e().map(t)}),[n]));var n;return J.scan(l,0,o)}(ne),ae=W(re).map((e=>e/1e3)),se=(ie=document,J.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},J.merge(Z(ie,"keydown"),Z(ie,"keyup"))));var ie;const ce=e=>e[Math.floor(Math.random()*e.length)],le=J.of(0);h.scheduleRepeat((e=>{b.schedule((()=>{le(h.ticks/h.PPQ%1)}),e)}),"64n");const pe=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],de={major:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2]},me=()=>{const e=ce(pe),t=pe.indexOf(e),o=ce(Object.values(de)),n=[e];let r=t;return o.forEach((e=>{r=(r+e)%pe.length,n.push(pe[r])})),n},ue=[[1]],fe=(e,t=3,o=4,n=16)=>{const r=[],a=ce(ue);for(let s=0;s<n;s++){const n=a[s%a.length]?`${ce(e)}${ce([t,o])}`:null;r.push(n)}return r},he=(e,t,o=-12)=>{const n=(new v).toDestination(),r=e.auto(o,t,-30,-3);return J.on((e=>n.set({volume:e})),r),n},be=()=>{const e=new y;return e.oscillator.type=ce(["pulse","pwm","sine","square","triangle","sawtooth","fatsawtooth","fattriangle","fmsawtooth","fmtriangle"]),e.envelope.set({attack:ce([.01,"8n"])}),e.filterEnvelope.set({attack:ce([.01,"8n"]),decay:ce([.01,"8n","4n"])}),e},ve=(ye=B,e=>(...t)=>e(ye(),...t));var ye;const ge=(e,t=e)=>g(e,t),we=ve(w),xe=ve(S),ke=ve(E),Be=ve(x),Se=ve(k),Ee=C,Ce=ve(A);R(Array);const Ae=["I","J","L","O","S","T","Z"],Re={I:[ge(-1,0),ge(0,0),ge(1,0),ge(2,0)],T:[ge(-1,0),ge(0,0),ge(1,0),ge(0,1)],J:[ge(0,-1),ge(0,0),ge(0,1),ge(-1,1)],L:[ge(0,-1),ge(0,0),ge(0,1),ge(1,1)],O:[ge(0,0),ge(1,0),ge(0,1),ge(1,1)],S:[ge(0,0),ge(1,0),ge(-1,1),ge(0,1)],Z:[ge(-1,0),ge(0,0),ge(0,1),ge(1,1)]},$e=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return ge(o,t)},Ie=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],Te=e=>Re[e.tetronimo].map((t=>we(Be(t,Ie[e.rotation]),e.position))),Me=e=>{const t=Te(e).reduce((([[e,t],[o,n]],[r,a])=>[[Math.min(e,r),Math.min(t,a)],[Math.max(o,r),Math.max(n,a)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=xe(Se(),Ce(Se(),t[0])),n=ke(xe(Se(),Ce(t[1],ge(15,15))));return a(a({},e),{position:we(e.position,we(o,n))})},Fe=(e,t)=>4===((e,t)=>{const o=Te(e),n=Te(t),r=[];for(const a of o)for(const e of n)Ee(a,e)&&r.push(a);return r})(e,t).length,Oe=e=>e%8==0,qe=ge(-1,0),je=ge(1,0),_e=ge(0,-1),Ne=ge(0,1),Pe=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((o=>"player"!==o.type||"O"===o.tetronimo||Oe(e.currentBeat)?o:Me(a(a({},o),{rotation:(o.rotation-t+4)%4}))))}),Le=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((o=>"player"!==o.type||Oe(e.currentBeat)?o:Me(a(a({},o),{position:we(o.position,t)}))))}),Ue=({beat:e=0,type:t="hole",tetronimo:o=ce(Ae),position:n=$e(),rotation:r=ce([0,1,2,3])})=>Me({tetronimo:o,position:n,rotation:r,type:t,beat:e}),ze=Ue({type:"player",beat:-1,tetronimo:ce(Ae.filter((e=>"O"!==e))),position:ge($.randomInt(3,12)(),$.randomInt(8,12)())}),De={tetronimoes:[ze],currentBeat:-1},Ge=ce([["a",Le(De,qe)],["d",Le(De,je)],["w",Le(De,_e)],["s",Le(De,Ne)],["e",Pe(De,1)],["q",Pe(De,-1)]]),He=Ge[1];De.tetronimoes.push(a(a(a({},ze),He.tetronimoes[0]),{type:"hole",beat:0}));const Je=Ge[0],Ze=J.of(De),We=J.of(!1),Xe=(e,t)=>a(a({},e),{tetronimoes:[...e.tetronimoes,Ue({type:"hole",beat:t+8})]}),Ye=m(Boolean,Ze.map((e=>{const t=e.tetronimoes[0],o=e.tetronimoes[1];return e.currentBeat>0&&Oe(e.currentBeat)&&t&&o&&!Fe(t,o)})));J.on((()=>We(!1)),Ye);const Qe=oe.addFolder("audio"),Ve=Qe.auto(100,"BPM",60,240);let Ke=me();const et=J.of(0);h.scheduleRepeat((()=>{et(et()+1)}),"4n");const tt=e=>e%32==0;m(Boolean,et.map((e=>e%8==0))),J.on((e=>h.bpm.value=e),Ve);const ot=J.combine(((e,t)=>e()||!t()),[ne,We]);J.on((e=>{e?h.pause(I()):h.start(I())}),ot);const nt=he(Qe,"effect",-12),rt=(new T).connect(nt);let at=fe(Ke,5,6,3).filter((e=>e));const st=()=>{rt.triggerAttackRelease(ce(at),"16n")},it=he(Qe,"good job",-13),ct=new M("32n",.7).connect(it);ct.set({wet:1});const lt=new T(y,{oscillator:{type:"sine"},envelope:{attack:0,release:.7},filterEnvelope:{attack:0},detune:3}).connect(ct);let pt=fe(Ke,5,6,3).filter((e=>e)),dt=fe(Ke,3,4,3).filter((e=>e));const mt=()=>{lt.triggerAttackRelease([ce(pt),ce(dt)],"8n")},ut=()=>{Ke=me(),at=fe(Ke,5,6,3).filter((e=>e)),pt=fe(Ke,5,6,3).filter((e=>e)),dt=fe(Ke,3,4,3).filter((e=>e));const e=he(Qe,"Drums",-14),t=new O(4.2).connect(e),o=(new q).connect(t),n=new j(((e,t)=>{o.triggerAttackRelease(t,"4n",e)}),["C1","C1","C1",["C1","C1"],"C1","C1","C1",["C1","C1","C1"]]);n.loop=!0,n.playbackRate=.5;const r=he(Qe,"Hats",-14),a=(new _).connect(r),s=new j(((e,t)=>{a.triggerAttackRelease("32n",e)}),["C3","C3","C3","C3","C3","C3",["C4","C4"],["C4","C4","C4"]]);s.loop=!0,h.scheduleRepeat((()=>{a.volume.set({value:ce([-60,-6])})}),"4m");const i=[fe(Ke,4,5),fe(Ke,4,4),fe(Ke,4,5),fe(Ke,3,5),fe(Ke,3,6)],c=he(Qe,"arp",-19),l=new M("16n").connect(c);new N("4m",.25,.5).connect(l.wet).start(0);const p=be().connect(l),d=new P(((e,t)=>{const o=ce(["8n","4n","16n"]);p.triggerAttackRelease(t,o,e)}),ce(i),ce(["up","upDown"]));d.playbackRate=ce([1,2,4]),h.scheduleRepeat((()=>{d.values=ce(i)}),"4m");const m=he(Qe,"bass",-15),u=be().connect(m),f=new P(((e,t)=>{u.triggerAttackRelease(t,"2n",e)}),fe(Ke,1,2,4),ce(["up","upDown"]));return f.playbackRate=ce([.25,.5,1]),n.start(0),f.start(0),d.start(0),s.start(0),()=>{n.stop(),f.stop(),d.stop(),s.stop(),e.dispose(),r.dispose(),c.dispose(),m.dispose()}},ft=Z(document,"keydown");function ht(e,...t){const o=t.map(bt),n=L,r=U,a=e.reduce(((e,t,r)=>{const a=o[r-1];return`${e}${n(a)}${t}`}));return[...o.map(r),{frag:a}].reduce(vt)}function bt(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function vt(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var n;return e[t]="string"==typeof o?((null!=(n=e[t])?n:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}function yt(e,t=wt(),o){const n="controller"in e?e.controller.property:kt(t)?wt():t;const r=V(e())?()=>K(e()):()=>e();return[n,{frag:`uniform ${null!=o?o:kt(t)?t:Bt(r())} ${n};`,uniforms:{[n]:r}}]}J.on((()=>{(async()=>{F()})(),ft.end(!0)}),ft);let gt=1;const wt=()=>"u_"+gt++,xt=["float","int","bool","vec2","vec3","vec4"],kt=e=>xt.includes(e);const Bt=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},St=ht`
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
`,Et=ht`
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
`,Ct=oe.addFolder("graphics"),At={I:Ct.auto("#ff9b0d","I").map(K),J:Ct.auto("#497bff","J").map(K),L:Ct.auto("#ff5d5d","L").map(K),O:Ct.auto("#00f0ff","O").map(K),S:Ct.auto("#00ff86","S").map(K),T:Ct.auto("#ff74d1","T").map(K),Z:Ct.auto("#fffb51","Z").map(K)},Rt={blocks:z.range(0,3).map((()=>Se())),beat:0,color:[0,0,0],active:!1,invert:!1},$t=Ze.map((e=>z.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,n=o?[1,1,1]:At[t.tetronimo]();return{blocks:Te(t),color:n,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=z.range(1,8-e.length).map((()=>Rt));return e.length<8?e.concat(t):e.slice(0,8)})),It=["a","b","c","d"],Tt=ht`
    ${St}
    ${Et}
    ${{uniforms:z.range(1,8).reduce(((e,t,o)=>{for(const n of Object.keys($t()[o]))"blocks"!==n&&(e[`shapes[${o}].${n}`]=()=>$t()[o][n]);return z.range(0,3).forEach((t=>{e[`shapes[${o}].${It[t]}`]=()=>$t()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
    #define beatRatio 1.
    #define beatTime ${yt((()=>h.ticks/h.PPQ))}
    #define phraseTime (floor(mod(beatTime - 1., 8.))/8.)

    #define board vec2(${16})
    #define halfBoard (board/2.)

    uniform Shape shapes[numShapes];

    vec2 scaleToBeat(vec2 p, float beat) {
      p -= halfBoard;
      p *= (1. + beat * ${yt(Ct.auto(.2,"beatScale",.1,1))});
      p += halfBoard;
      return p;
    }

    float fadeToBeat(float beat) {
      float myDistance = beat / (numBeats - 1.);
      return 1. - 0.8 * myDistance;
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
      if (s.invert) alpha *= 0.90;

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
      
      // float bt = mod(beatTime - 1., 8.) - 7.;
      // bt = normalized(bt);
      // float btAlpha = sdShape(p, s) - 1.;
      // bt *= btAlpha;
      // bt = normalized(bt);
      // if (s.invert) color = mix(color, shapes[0].color, bt);

      return vec4(color, alpha);
    }

    void main() {
      vec2 p = st();
      // p /= 1.+ fract(beatTime)* beatScale;
      p *= 1.2;             // global zoom out
      p *= vec2(1, -1);     // flip Y so 0 is top left
      p = p / 2. + 0.5;     // move origin to top left
      p = p * board;        // scale up to game board size

      vec4 color = vec4(0, 0, 0, 0);

      // beat borders
      for (float i = numBeats - 1.; i >= 0.; i--) {
        float bt = 1. - fract(beatTime);
        bt *= 7.;
        bt = i - bt;
        bt = abs(bt);
        bt = normalized(bt);
        bt = 1. - bt;
        
        if (i == 0.) bt = max(bt, phraseTime);

        vec2 pEdge = scaleToBeat(p, i);
        float edges = sdEdges(pEdge);
        edges = step(abs(edges), 0.15);

        vec3 edgeColor = vec3(fadeToBeat(i));
        edgeColor = mix(edgeColor, shapes[0].color, bt);

        color = mix(color, vec4(edgeColor, 1.), edges);
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
  `,Mt=document.getElementById("layout"),Ft=document.getElementById("ui"),Ot=document.querySelectorAll(".ui"),qt=document.getElementById("instructions");qt&&(qt.textContent=`press ${Je.toUpperCase()} to begin`);let jt;J.on((e=>{Mt&&(Mt.style.opacity=e?"0":"1",e&&Ot.forEach((e=>{e!==Ft&&(e.style.visibility="hidden")})))}),We),J.on((()=>{Ft&&(Ft.textContent=`tetronim${"o".repeat(Ze().currentBeat)}!`)}),Ye);const _t=J.of(!0);J.on((()=>{jt(),_t(!1),setTimeout((()=>_t(!0)),750)}),Ye);const Nt=e=>{Ze().currentBeat>0?(Ze(((e=0)=>{const t=Ue({type:"player",beat:e});return{tetronimoes:[t,Ue({tetronimo:t.tetronimo,beat:8})],currentBeat:e}})()),We(!0),jt=ut()):e===Je&&(We(!0),jt=ut(),Wt()),We()&&Ve(100)};[Y("a"),Y("s"),Y("d"),Y("q"),Y("w"),Y("e")].reduce(J.merge).map((({key:e})=>{We()||_t()&&Nt(e),!We()||"q"!==e&&"e"!==e||(st(),"e"===e&&Ze(Pe(Ze(),1)),"q"===e&&Ze(Pe(Ze(),-1)))}));const Pt=["a","s","d","w"].map((e=>m(Boolean,D(se.map((t=>t[e])))))).reduce(J.merge),Lt=D(se.map((e=>e.a||e.s||e.d||e.w)).map(f)),Ut=J.combine(((e,t,o,n)=>!!n.includes(e)||!n.includes(t)&&void 0),[Pt,Lt]);let zt=0;const Dt=J.combine((e=>{if(zt+=e(),zt>.06666666666666667)return zt-=.06666666666666667,!0}),[ae]),Gt=(Ht=se,Jt=Dt,J.combine((()=>Ht()),[Jt]));var Ht,Jt;const Zt=m((e=>e>1),J.scan((e=>Ut()?e+1:0),0,Gt)),Wt=()=>{if(!We())return;st();const e=se();e.a&&Ze(Le(Ze(),qe)),e.s&&Ze(Le(Ze(),Ne)),e.d&&Ze(Le(Ze(),je)),e.w&&Ze(Le(Ze(),_e))};J.on(Wt,Pt),J.on(Wt,Zt),J.on((()=>Ze(((e,t)=>{let o=a(a({},e),{currentBeat:t,tetronimoes:e.tetronimoes.map((o=>"player"===o.type?a(a({},o),{beat:t,tetronimo:e.tetronimoes[e.tetronimoes.length-1].tetronimo}):o)).filter((e=>e.beat>=t))});return Oe(t)&&(mt(),o=Xe(o,t)),tt(t)&&Ve(Ve()+20),o})(Ze(),Ze().currentBeat+1))),m((()=>We()),et));const Xt=G(),Yt=new H;Yt.showPanel(0),document.body.appendChild(Yt.dom),J.on((e=>{Yt.dom.style.visibility=e?"visible":"hidden",e?oe.show():oe.hide()}),J.scan((e=>!e),!1,Y("t")));const Qt=Xt(Tt);J.on((()=>{Xt.poll(),Qt(),Yt.update()}),re);new ResizeObserver((([e])=>{(({width:e,height:t})=>{if(!Mt)return;Mt.style.opacity="1";const o=Math.min(e,t),n=o/16,r=2.5*n,a=(e-o)/2+r,s=(t-o)/2+r;Mt.style.fontSize=n/2+"px",Mt.style.borderRadius=n/8+"px",Mt.style.left=`${a}px`,Mt.style.top=`${s}px`,Mt.style.maxWidth=o-2*r+"px",Mt.style.maxHeight=o-2*r+"px",Ot.forEach((e=>e.style.borderRadius=n/8+"px"))})(e.contentRect)})).observe(Xt._gl.canvas);
