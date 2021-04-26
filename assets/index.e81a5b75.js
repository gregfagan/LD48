var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(e,a)=>{for(var s in a||(a={}))t.call(a,s)&&r(e,s,a[s]);if(o)for(var s of o(a))n.call(a,s)&&r(e,s,a[s]);return e};import{l as s,t as c,p as i,a as p,b as l,e as d,m as u,_ as m,c as f,f as h,G as b,n as v,T as y,D as g,d as w,M as x,g as k,h as B,i as E,z as S,j as C,k as A,o as I,q as $,s as R,r as M,R as F,u as O,v as q,P as T,w as _,x as j,y as N,S as L,N as P,L as U,A as z,B as D,C as G,E as H,F as J,H as Z,I as W}from"./vendor.4114547d.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){a(new Error(`Failed to import: ${e}`)),r(i)},onload(){o(self[t].moduleMap[s]),r(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/LD48/assets/");const X=s.stream.bind({});Object.assign(X,a(a({},s),{of:X}));const Y=(e,t)=>X.combine((()=>e()),[t]);function Q(e,t){const o=X.of();return e.addEventListener(t,o),o}function K(e){return X.combine(((e,t)=>{e()&&t(e())}),[e])}function V(e){let t;return X.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const ee=X.merge(X(document.hasFocus()),X.merge(Q(window,"focus"),Q(window,"blur")).map(f("type")).map(d("focus"))),te=e=>h((t=>t.key===e),Q(document,"keydown")),oe=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,ne=e=>"string"==typeof e&&oe.test(e);function re(e){const t=e.match(oe);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class ae{constructor(){return new Proxy({},{get(e,t){var o,n;return"$"===t?e:null!=(n=null==(o=e[t])?void 0:o.call(e))?n:void 0},set(e,t,o){const n=e[t];return n?n(o):e[t]=X(o),!0}})}}class se extends b{constructor(e=new ae){super(),this.store=e}auto(e,t,...o){const n=this.store.$;if(n[t])return n[t];this.store[t]=e;const r=n[t];return r.controller=ne(e)?this.addColor(this.store,t):this.add(this.store,t,...o),r}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,se.prototype),t.store=new ae,t}}const ce=new se;ce.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const ie=ee.map(v).map(((...e)=>c(i(console.log,e)))("pause")),pe=function(e){const t=X.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=X(),o=X(),n=X.merge(X.of(e),X.immediate(X.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return X.on((()=>cancelAnimationFrame(t())),n.end),n}().pipe(V).map(Math.abs);t()&&t().end(!0)}),[e]),o=(n=t,X.combine(((e,t)=>{e().map(t)}),[n]));var n;return X.scan(p,0,o)}(ie);V(pe).map((e=>e/1e3));const le=(de=document,X.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},X.merge(Q(de,"keydown"),Q(de,"keyup"))));var de;const ue=e=>e[Math.floor(Math.random()*e.length)],me=X.of(0);y.scheduleRepeat((e=>{g.schedule((()=>{me(y.ticks/y.PPQ%1)}),e)}),"64n");const fe=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],he={major:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2]},be=()=>{const e=ue(fe),t=fe.indexOf(e),o=ue(Object.values(he)),n=[e];let r=t;return o.forEach((e=>{r=(r+e)%fe.length,n.push(fe[r])})),n},ve=[[1]],ye=(e,t=3,o=4,n=16)=>{const r=[],a=ue(ve);for(let s=0;s<n;s++){const n=a[s%a.length]?`${ue(e)}${ue([t,o])}`:null;r.push(n)}return r},ge=(e,t,o=.2)=>{const n=(new w).toDestination(),r=e.auto(o,t,0,1);return X.on((e=>n.set({gain:e})),r),n},we=()=>{const e=new x;return e.oscillator.type=ue(["pulse","pwm","sine","square","triangle","sawtooth","fatsawtooth","fattriangle","fmsawtooth","fmtriangle"]),e.envelope.set({attack:ue([.01,"8n"])}),e.filterEnvelope.set({attack:ue([.01,"8n"]),decay:ue([.01,"8n","4n"])}),e},xe=(ke=C,e=>(...t)=>e(ke(),...t));var ke;const Be=(e,t=e)=>k(e,t),Ee=xe(B),Se=xe(A),Ce=xe(I),Ae=xe(E),Ie=xe(S),$e=$,Re=xe(R);M(Array);const Me=["I","J","L","O","S","T","Z"],Fe={I:[Be(-1,0),Be(0,0),Be(1,0),Be(2,0)],T:[Be(-1,0),Be(0,0),Be(1,0),Be(0,1)],J:[Be(0,-1),Be(0,0),Be(0,1),Be(-1,1)],L:[Be(0,-1),Be(0,0),Be(0,1),Be(1,1)],O:[Be(0,0),Be(1,0),Be(0,1),Be(1,1)],S:[Be(0,0),Be(1,0),Be(-1,1),Be(0,1)],Z:[Be(-1,0),Be(0,0),Be(0,1),Be(1,1)]},Oe=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return Be(o,t)},qe=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],Te=e=>Fe[e.tetronimo].map((t=>Ee(Ae(t,qe[e.rotation]),e.position))),_e=e=>{const t=Te(e).reduce((([[e,t],[o,n]],[r,a])=>[[Math.min(e,r),Math.min(t,a)],[Math.max(o,r),Math.max(n,a)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=Se(Ie(),Re(Ie(),t[0])),n=Ce(Se(Ie(),Re(t[1],Be(15,15))));return a(a({},e),{position:Ee(e.position,Ee(o,n))})},je=(e,t)=>4===((e,t)=>{const o=Te(e),n=Te(t),r=[];for(const a of o)for(const e of n)$e(a,e)&&r.push(a);return r})(e,t).length,Ne=e=>e%8==0,Le=Be(-1,0),Pe=Be(1,0),Ue=Be(0,-1),ze=Be(0,1),De=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((o=>"player"!==o.type||"O"===o.tetronimo||Ne(e.currentBeat)?o:_e(a(a({},o),{rotation:(o.rotation-t+4)%4}))))}),Ge=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((o=>"player"!==o.type||Ne(e.currentBeat)?o:_e(a(a({},o),{position:Ee(o.position,t)}))))}),He=({beat:e=0,type:t="hole",tetronimo:o=ue(Me),position:n=Oe(),rotation:r=ue([0,1,2,3])})=>_e({tetronimo:o,position:n,rotation:r,type:t,beat:e}),Je=He({type:"player",beat:-1,tetronimo:ue(Me.filter((e=>"O"!==e))),position:Be(F.randomInt(3,12)(),F.randomInt(8,12)())}),Ze={tetronimoes:[Je],currentBeat:-1},We=ue([["a",Ge(Ze,Le)],["d",Ge(Ze,Pe)],["w",Ge(Ze,Ue)],["s",Ge(Ze,ze)],["e",De(Ze,1)],["q",De(Ze,-1)]]),Xe=We[1];Ze.tetronimoes.push(a(a(a({},Je),Xe.tetronimoes[0]),{type:"hole",beat:0}));const Ye=We[0],Qe=X.of(Ze),Ke=X.of(!1),Ve=(e,t)=>a(a({},e),{tetronimoes:[...e.tetronimoes,He({type:"hole",beat:t+8})]}),et=h(Boolean,Qe.map((e=>{const t=e.tetronimoes[0],o=e.tetronimoes[1];return e.currentBeat>0&&Ne(e.currentBeat)&&t&&o&&!je(t,o)})));X.on((()=>Ke(!1)),et);const tt=ce.addFolder("audio"),ot=tt.auto(100,"BPM",60,240);let nt=be();const rt=X.of(0);y.scheduleRepeat((()=>{rt(rt()+1)}),"4n");const at=e=>e%32==0;h(Boolean,rt.map((e=>e%8==0))),X.on((e=>y.bpm.value=e),ot);const st=X.combine(((e,t)=>e()||!t()),[ie,Ke]);X.on((e=>{e?y.pause(O()):y.start(O())}),st);const ct=ge(tt,"effect",.4),it=new q(.5).connect(ct);it.set({wet:.5});const pt=new T("16n",.2).connect(it);pt.set({wet:.5});const lt=(new x).connect(pt);lt.oscillator.type="fmsine",lt.envelope.set({attack:.01,decay:.2}),lt.filterEnvelope.set({attack:.01,decay:.2});const dt=ye(nt,5,6).filter((e=>e)),ut=()=>{lt.triggerAttackRelease(ue(dt),"16n",O())},mt=()=>{nt=be();const e=ge(tt,"Drums",.4),t=new j(4.2).connect(e),o=(new N).connect(t),n=new L(((e,t)=>{o.triggerAttackRelease(t,"4n",e)}),["C1","C1","C1",["C1","C1"],"C1","C1","C1",["C1","C1","C1"]]);n.loop=!0,n.playbackRate=.5;const r=ge(tt,"Hats",.2),a=(new P).connect(r),s=new L(((e,t)=>{a.triggerAttackRelease("32n",e)}),["C3","C3","C3","C3","C3","C3",["C4","C4"],["C4","C4","C4"]]);s.loop=!0,y.scheduleRepeat((()=>{a.volume.set({value:ue([-60,-6])})}),"4m");const c=[ye(nt,4,5),ye(nt,4,4),ye(nt,4,5),ye(nt,3,5),ye(nt,3,6)],i=ge(tt,"arp"),p=new T("16n").connect(i);new U("4m",.25,.5).connect(p.wet).start(0);const l=we().connect(p),d=new z(((e,t)=>{const o=ue(["8n","4n","16n"]);l.triggerAttackRelease(t,o,e)}),ue(c),ue(["up","upDown"]));d.playbackRate=ue([1,2,4]),y.scheduleRepeat((()=>{d.values=ue(c)}),"4m");const u=ge(tt,"bass"),m=we().connect(u),f=new z(((e,t)=>{m.triggerAttackRelease(t,"2n",e)}),ye(nt,1,2,4),ue(["up","upDown"]));return f.playbackRate=ue([.25,.5,1]),n.start(0),f.start(0),d.start(0),s.start(0),()=>{n.stop(),f.stop(),d.stop(),s.stop(),e.dispose(),r.dispose(),i.dispose(),u.dispose()}},ft=Q(document,"keydown");function ht(e,...t){const o=t.map(bt),n=D,r=G,a=e.reduce(((e,t,r)=>{const a=o[r-1];return`${e}${n(a)}${t}`}));return[...o.map(r),{frag:a}].reduce(vt)}function bt(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function vt(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var n;return e[t]="string"==typeof o?((null!=(n=e[t])?n:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}X.on((()=>{(async()=>{_()})(),ft.end(!0)}),ft);let yt=1;const gt=()=>"u_"+yt++,wt=["float","int","bool","vec2","vec3","vec4"],xt=e=>wt.includes(e);const kt=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},Bt=ht`
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
`,St=ce.addFolder("graphics"),Ct={I:St.auto("#ff9b0d","I").map(re),J:St.auto("#497bff","J").map(re),L:St.auto("#ff5d5d","L").map(re),O:St.auto("#00f0ff","O").map(re),S:St.auto("#00ff86","S").map(re),T:St.auto("#ff74d1","T").map(re),Z:St.auto("#fffb51","Z").map(re)},At={blocks:H.range(0,3).map((()=>Ie())),beat:0,color:[0,0,0],active:!1,invert:!1},It=Qe.map((e=>H.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,n=o?[1,1,1]:Ct[t.tetronimo]();return{blocks:Te(t),color:n,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=H.range(1,8-e.length).map((()=>At));return e.length<8?e.concat(t):e.slice(0,8)})),$t=["a","b","c","d"],Rt=ht`
    ${Bt}
    ${Et}
    ${{uniforms:H.range(1,8).reduce(((e,t,o)=>{for(const n of Object.keys(It()[o]))"blocks"!==n&&(e[`shapes[${o}].${n}`]=()=>It()[o][n]);return H.range(0,3).forEach((t=>{e[`shapes[${o}].${$t[t]}`]=()=>It()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
      p *= (1. + beat * ${function(e,t=gt(),o){const n="controller"in e?e.controller.property:xt(t)?gt():t,r=ne(e())?()=>re(e()):()=>e();return[n,{frag:`uniform ${null!=o?o:xt(t)?t:kt(r())} ${n};`,uniforms:{[n]:r}}]}(St.auto(.2,"beatScale",.1,1))});
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
      if (s.invert) alpha *= 0.98;

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
  `,Mt=document.getElementById("layout"),Ft=document.getElementById("ui"),Ot=document.querySelectorAll(".ui"),qt=document.getElementById("instructions");qt&&(qt.textContent=`press ${Ye.toUpperCase()} to begin`);let Tt;X.on((e=>{Mt&&(Mt.style.opacity=e?"0":"1",e&&Ot.forEach((e=>{e!==Ft&&(e.style.visibility="hidden")})))}),Ke),X.on((()=>{Ft&&(Ft.textContent=`tetronim${"o".repeat(Qe().currentBeat)}!`)}),et);const _t=X.of(!0);X.on((()=>{Tt(),_t(!1),setTimeout((()=>_t(!0)),750)}),et);const jt=e=>{Qe().currentBeat>0?(Qe(((e=0)=>{const t=He({type:"player",beat:e});return{tetronimoes:[t,He({tetronimo:t.tetronimo,beat:8})],currentBeat:e}})()),Ke(!0),Tt=mt()):e===Ye&&(Ke(!0),Tt=mt(),Gt()),Ke()&&ot(100)};[te("a"),te("s"),te("d"),te("q"),te("w"),te("e")].reduce(X.merge).map((({key:e})=>{Ke()||_t()&&jt(e),!Ke()||"q"!==e&&"e"!==e||(ut(),"e"===e&&Qe(De(Qe(),1)),"q"===e&&Qe(De(Qe(),-1)))}));const Nt=["a","s","d","w"].map((e=>h(Boolean,J(le.map((t=>t[e])))))).reduce(X.merge),Lt=J(le.map((e=>e.a||e.s||e.d||e.w)).map(v)),Pt=X.combine(((e,t,o,n)=>!!n.includes(e)||!n.includes(t)&&void 0),[Nt,Lt]),Ut=Y(le,(zt=4,e=>Y(e,X.scan(p(1),0,e).map(l(u(m,zt),d(0))).pipe(K)))(pe));var zt;const Dt=h((e=>e>1),X.scan((e=>Pt()?e+1:0),0,Ut)),Gt=()=>{if(!Ke())return;ut();const e=le();e.a&&Qe(Ge(Qe(),Le)),e.s&&Qe(Ge(Qe(),ze)),e.d&&Qe(Ge(Qe(),Pe)),e.w&&Qe(Ge(Qe(),Ue))};X.on(Gt,Nt),X.on(Gt,Dt),X.on((()=>Qe(((e,t)=>{let o=a(a({},e),{currentBeat:t,tetronimoes:e.tetronimoes.map((o=>"player"===o.type?a(a({},o),{beat:t,tetronimo:e.tetronimoes[e.tetronimoes.length-1].tetronimo}):o)).filter((e=>e.beat>=t))});return Ne(t)&&(o=Ve(o,t)),at(t)&&ot(ot()+20),o})(Qe(),Qe().currentBeat+1))),h((()=>Ke()),rt));const Ht=Z(),Jt=new W;Jt.showPanel(0),document.body.appendChild(Jt.dom),X.on((e=>{Jt.dom.style.visibility=e?"visible":"hidden",e?ce.show():ce.hide()}),X.scan((e=>!e),!1,te("t")));const Zt=Ht(Rt);X.on((()=>{Ht.poll(),Zt(),Jt.update()}),pe);new ResizeObserver((([e])=>{(({width:e,height:t})=>{if(!Mt)return;Mt.style.opacity="1";const o=Math.min(e,t),n=o/16,r=2.5*n,a=(e-o)/2+r,s=(t-o)/2+r;Mt.style.fontSize=n/2+"px",Mt.style.borderRadius=n/8+"px",Mt.style.left=`${a}px`,Mt.style.top=`${s}px`,Mt.style.maxWidth=o-2*r+"px",Mt.style.maxHeight=o-2*r+"px",Ot.forEach((e=>e.style.borderRadius=n/8+"px"))})(e.contentRect)})).observe(Ht._gl.canvas);
