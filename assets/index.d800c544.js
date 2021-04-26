var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(e,a)=>{for(var s in a||(a={}))t.call(a,s)&&r(e,s,a[s]);if(o)for(var s of o(a))n.call(a,s)&&r(e,s,a[s]);return e};import{l as s,t as c,p as i,a as p,b as l,e as d,m as u,_ as m,c as f,f as h,G as b,n as v,T as y,D as g,d as w,M as x,g as k,h as B,i as S,z as E,j as C,k as A,o as I,q as $,s as R,r as M,R as F,u as O,v as q,P as T,w as _,x as j,y as N,A as L,S as P,N as U,L as z,B as D,C as G,E as H,F as J,H as Z,I as W,J as X}from"./vendor.da125841.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){a(new Error(`Failed to import: ${e}`)),r(i)},onload(){o(self[t].moduleMap[s]),r(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/LD48/assets/");const Y=s.stream.bind({});Object.assign(Y,a(a({},s),{of:Y}));const Q=(e,t)=>Y.combine((()=>e()),[t]);function K(e,t){const o=Y.of();return e.addEventListener(t,o),o}function V(e){return Y.combine(((e,t)=>{e()&&t(e())}),[e])}function ee(e){let t;return Y.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const te=Y.merge(Y(document.hasFocus()),Y.merge(K(window,"focus"),K(window,"blur")).map(f("type")).map(d("focus"))),oe=e=>h((t=>t.key===e),K(document,"keydown")),ne=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,re=e=>"string"==typeof e&&ne.test(e);function ae(e){const t=e.match(ne);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class se{constructor(){return new Proxy({},{get(e,t){var o,n;return"$"===t?e:null!=(n=null==(o=e[t])?void 0:o.call(e))?n:void 0},set(e,t,o){const n=e[t];return n?n(o):e[t]=Y(o),!0}})}}class ce extends b{constructor(e=new se){super(),this.store=e}auto(e,t,...o){const n=this.store.$;if(n[t])return n[t];this.store[t]=e;const r=n[t];return r.controller=re(e)?this.addColor(this.store,t):this.add(this.store,t,...o),r}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,ce.prototype),t.store=new se,t}}const ie=new ce;ie.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const pe=te.map(v).map(((...e)=>c(i(console.log,e)))("pause")),le=function(e){const t=Y.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=Y(),o=Y(),n=Y.merge(Y.of(e),Y.immediate(Y.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return Y.on((()=>cancelAnimationFrame(t())),n.end),n}().pipe(ee).map(Math.abs);t()&&t().end(!0)}),[e]),o=(n=t,Y.combine(((e,t)=>{e().map(t)}),[n]));var n;return Y.scan(p,0,o)}(pe);ee(le).map((e=>e/1e3));const de=(ue=document,Y.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},Y.merge(K(ue,"keydown"),K(ue,"keyup"))));var ue;const me=e=>e[Math.floor(Math.random()*e.length)],fe=Y.of(0);y.scheduleRepeat((e=>{g.schedule((()=>{fe(y.ticks/y.PPQ%1)}),e)}),"64n");const he=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],be={major:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2]},ve=()=>{const e=me(he),t=he.indexOf(e),o=me(Object.values(be)),n=[e];let r=t;return o.forEach((e=>{r=(r+e)%he.length,n.push(he[r])})),n},ye=[[1]],ge=(e,t=3,o=4,n=16)=>{const r=[],a=me(ye);for(let s=0;s<n;s++){const n=a[s%a.length]?`${me(e)}${me([t,o])}`:null;r.push(n)}return r},we=(e,t,o=.2)=>{const n=(new w).toDestination(),r=e.auto(o,t,0,1);return Y.on((e=>n.set({gain:e})),r),n},xe=()=>{const e=new x;return e.oscillator.type=me(["pulse","pwm","sine","square","triangle","sawtooth","fatsawtooth","fattriangle","fmsawtooth","fmtriangle"]),e.envelope.set({attack:me([.01,"8n"])}),e.filterEnvelope.set({attack:me([.01,"8n"]),decay:me([.01,"8n","4n"])}),e},ke=(Be=C,e=>(...t)=>e(Be(),...t));var Be;const Se=(e,t=e)=>k(e,t),Ee=ke(B),Ce=ke(A),Ae=ke(I),Ie=ke(S),$e=ke(E),Re=$,Me=ke(R);M(Array);const Fe=["I","J","L","O","S","T","Z"],Oe={I:[Se(-1,0),Se(0,0),Se(1,0),Se(2,0)],T:[Se(-1,0),Se(0,0),Se(1,0),Se(0,1)],J:[Se(0,-1),Se(0,0),Se(0,1),Se(-1,1)],L:[Se(0,-1),Se(0,0),Se(0,1),Se(1,1)],O:[Se(0,0),Se(1,0),Se(0,1),Se(1,1)],S:[Se(0,0),Se(1,0),Se(-1,1),Se(0,1)],Z:[Se(-1,0),Se(0,0),Se(0,1),Se(1,1)]},qe=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return Se(o,t)},Te=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],_e=e=>Oe[e.tetronimo].map((t=>Ee(Ie(t,Te[e.rotation]),e.position))),je=e=>{const t=_e(e).reduce((([[e,t],[o,n]],[r,a])=>[[Math.min(e,r),Math.min(t,a)],[Math.max(o,r),Math.max(n,a)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=Ce($e(),Me($e(),t[0])),n=Ae(Ce($e(),Me(t[1],Se(15,15))));return a(a({},e),{position:Ee(e.position,Ee(o,n))})},Ne=(e,t)=>4===((e,t)=>{const o=_e(e),n=_e(t),r=[];for(const a of o)for(const e of n)Re(a,e)&&r.push(a);return r})(e,t).length,Le=e=>e%8==0,Pe=Se(-1,0),Ue=Se(1,0),ze=Se(0,-1),De=Se(0,1),Ge=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((o=>"player"!==o.type||"O"===o.tetronimo||Le(e.currentBeat)?o:je(a(a({},o),{rotation:(o.rotation-t+4)%4}))))}),He=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((o=>"player"!==o.type||Le(e.currentBeat)?o:je(a(a({},o),{position:Ee(o.position,t)}))))}),Je=({beat:e=0,type:t="hole",tetronimo:o=me(Fe),position:n=qe(),rotation:r=me([0,1,2,3])})=>je({tetronimo:o,position:n,rotation:r,type:t,beat:e}),Ze=Je({type:"player",beat:-1,tetronimo:me(Fe.filter((e=>"O"!==e))),position:Se(F.randomInt(3,12)(),F.randomInt(8,12)())}),We={tetronimoes:[Ze],currentBeat:-1},Xe=me([["a",He(We,Pe)],["d",He(We,Ue)],["w",He(We,ze)],["s",He(We,De)],["e",Ge(We,1)],["q",Ge(We,-1)]]),Ye=Xe[1];We.tetronimoes.push(a(a(a({},Ze),Ye.tetronimoes[0]),{type:"hole",beat:0}));const Qe=Xe[0],Ke=Y.of(We),Ve=Y.of(!1),et=(e,t)=>a(a({},e),{tetronimoes:[...e.tetronimoes,Je({type:"hole",beat:t+8})]}),tt=h(Boolean,Ke.map((e=>{const t=e.tetronimoes[0],o=e.tetronimoes[1];return e.currentBeat>0&&Le(e.currentBeat)&&t&&o&&!Ne(t,o)})));Y.on((()=>Ve(!1)),tt);const ot=ie.addFolder("audio"),nt=ot.auto(100,"BPM",60,240);let rt=ve();const at=Y.of(0);y.scheduleRepeat((()=>{at(at()+1)}),"4n");const st=e=>e%32==0;h(Boolean,at.map((e=>e%8==0))),Y.on((e=>y.bpm.value=e),nt);const ct=Y.combine(((e,t)=>e()||!t()),[pe,Ve]);Y.on((e=>{e?y.pause(O()):y.start(O())}),ct);const it=we(ot,"effect",.4),pt=new q(.5).connect(it);pt.set({wet:.5});const lt=new T("16n",.2).connect(pt);lt.set({wet:.5});const dt=(new _).connect(lt),ut=ge(rt,5,6,3).filter((e=>e)),mt=()=>{dt.triggerAttackRelease(me(ut),"16n")},ft=()=>{rt=ve();const e=we(ot,"Drums",.4),t=new N(4.2).connect(e),o=(new L).connect(t),n=new P(((e,t)=>{o.triggerAttackRelease(t,"4n",e)}),["C1","C1","C1",["C1","C1"],"C1","C1","C1",["C1","C1","C1"]]);n.loop=!0,n.playbackRate=.5;const r=we(ot,"Hats",.2),a=(new U).connect(r),s=new P(((e,t)=>{a.triggerAttackRelease("32n",e)}),["C3","C3","C3","C3","C3","C3",["C4","C4"],["C4","C4","C4"]]);s.loop=!0,y.scheduleRepeat((()=>{a.volume.set({value:me([-60,-6])})}),"4m");const c=[ge(rt,4,5),ge(rt,4,4),ge(rt,4,5),ge(rt,3,5),ge(rt,3,6)],i=we(ot,"arp"),p=new T("16n").connect(i);new z("4m",.25,.5).connect(p.wet).start(0);const l=xe().connect(p),d=new D(((e,t)=>{const o=me(["8n","4n","16n"]);l.triggerAttackRelease(t,o,e)}),me(c),me(["up","upDown"]));d.playbackRate=me([1,2,4]),y.scheduleRepeat((()=>{d.values=me(c)}),"4m");const u=we(ot,"bass",.5),m=xe().connect(u),f=new D(((e,t)=>{m.triggerAttackRelease(t,"2n",e)}),ge(rt,1,2,4),me(["up","upDown"]));return f.playbackRate=me([.25,.5,1]),n.start(0),f.start(0),d.start(0),s.start(0),()=>{n.stop(),f.stop(),d.stop(),s.stop(),e.dispose(),r.dispose(),i.dispose(),u.dispose()}},ht=K(document,"keydown");function bt(e,...t){const o=t.map(vt),n=G,r=H,a=e.reduce(((e,t,r)=>{const a=o[r-1];return`${e}${n(a)}${t}`}));return[...o.map(r),{frag:a}].reduce(yt)}function vt(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function yt(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var n;return e[t]="string"==typeof o?((null!=(n=e[t])?n:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}Y.on((()=>{(async()=>{j()})(),ht.end(!0)}),ht);let gt=1;const wt=()=>"u_"+gt++,xt=["float","int","bool","vec2","vec3","vec4"],kt=e=>xt.includes(e);const Bt=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},St=bt`
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
`,Et=bt`
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
`,Ct=ie.addFolder("graphics"),At={I:Ct.auto("#ff9b0d","I").map(ae),J:Ct.auto("#497bff","J").map(ae),L:Ct.auto("#ff5d5d","L").map(ae),O:Ct.auto("#00f0ff","O").map(ae),S:Ct.auto("#00ff86","S").map(ae),T:Ct.auto("#ff74d1","T").map(ae),Z:Ct.auto("#fffb51","Z").map(ae)},It={blocks:J.range(0,3).map((()=>$e())),beat:0,color:[0,0,0],active:!1,invert:!1},$t=Ke.map((e=>J.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,n=o?[1,1,1]:At[t.tetronimo]();return{blocks:_e(t),color:n,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=J.range(1,8-e.length).map((()=>It));return e.length<8?e.concat(t):e.slice(0,8)})),Rt=["a","b","c","d"],Mt=bt`
    ${St}
    ${Et}
    ${{uniforms:J.range(1,8).reduce(((e,t,o)=>{for(const n of Object.keys($t()[o]))"blocks"!==n&&(e[`shapes[${o}].${n}`]=()=>$t()[o][n]);return J.range(0,3).forEach((t=>{e[`shapes[${o}].${Rt[t]}`]=()=>$t()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
      p *= (1. + beat * ${function(e,t=wt(),o){const n="controller"in e?e.controller.property:kt(t)?wt():t,r=re(e())?()=>ae(e()):()=>e();return[n,{frag:`uniform ${null!=o?o:kt(t)?t:Bt(r())} ${n};`,uniforms:{[n]:r}}]}(Ct.auto(.2,"beatScale",.1,1))});
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
  `,Ft=document.getElementById("layout"),Ot=document.getElementById("ui"),qt=document.querySelectorAll(".ui"),Tt=document.getElementById("instructions");Tt&&(Tt.textContent=`press ${Qe.toUpperCase()} to begin`);let _t;Y.on((e=>{Ft&&(Ft.style.opacity=e?"0":"1",e&&qt.forEach((e=>{e!==Ot&&(e.style.visibility="hidden")})))}),Ve),Y.on((()=>{Ot&&(Ot.textContent=`tetronim${"o".repeat(Ke().currentBeat)}!`)}),tt);const jt=Y.of(!0);Y.on((()=>{_t(),jt(!1),setTimeout((()=>jt(!0)),750)}),tt);const Nt=e=>{Ke().currentBeat>0?(Ke(((e=0)=>{const t=Je({type:"player",beat:e});return{tetronimoes:[t,Je({tetronimo:t.tetronimo,beat:8})],currentBeat:e}})()),Ve(!0),_t=ft()):e===Qe&&(Ve(!0),_t=ft(),Ht()),Ve()&&nt(100)};[oe("a"),oe("s"),oe("d"),oe("q"),oe("w"),oe("e")].reduce(Y.merge).map((({key:e})=>{Ve()||jt()&&Nt(e),!Ve()||"q"!==e&&"e"!==e||(mt(),"e"===e&&Ke(Ge(Ke(),1)),"q"===e&&Ke(Ge(Ke(),-1)))}));const Lt=["a","s","d","w"].map((e=>h(Boolean,Z(de.map((t=>t[e])))))).reduce(Y.merge),Pt=Z(de.map((e=>e.a||e.s||e.d||e.w)).map(v)),Ut=Y.combine(((e,t,o,n)=>!!n.includes(e)||!n.includes(t)&&void 0),[Lt,Pt]),zt=Q(de,(Dt=4,e=>Q(e,Y.scan(p(1),0,e).map(l(u(m,Dt),d(0))).pipe(V)))(le));var Dt;const Gt=h((e=>e>1),Y.scan((e=>Ut()?e+1:0),0,zt)),Ht=()=>{if(!Ve())return;mt();const e=de();e.a&&Ke(He(Ke(),Pe)),e.s&&Ke(He(Ke(),De)),e.d&&Ke(He(Ke(),Ue)),e.w&&Ke(He(Ke(),ze))};Y.on(Ht,Lt),Y.on(Ht,Gt),Y.on((()=>Ke(((e,t)=>{let o=a(a({},e),{currentBeat:t,tetronimoes:e.tetronimoes.map((o=>"player"===o.type?a(a({},o),{beat:t,tetronimo:e.tetronimoes[e.tetronimoes.length-1].tetronimo}):o)).filter((e=>e.beat>=t))});return Le(t)&&(o=et(o,t)),st(t)&&nt(nt()+20),o})(Ke(),Ke().currentBeat+1))),h((()=>Ve()),at));const Jt=W(),Zt=new X;Zt.showPanel(0),document.body.appendChild(Zt.dom),Y.on((e=>{Zt.dom.style.visibility=e?"visible":"hidden",e?ie.show():ie.hide()}),Y.scan((e=>!e),!1,oe("t")));const Wt=Jt(Mt);Y.on((()=>{Jt.poll(),Wt(),Zt.update()}),le);new ResizeObserver((([e])=>{(({width:e,height:t})=>{if(!Ft)return;Ft.style.opacity="1";const o=Math.min(e,t),n=o/16,r=2.5*n,a=(e-o)/2+r,s=(t-o)/2+r;Ft.style.fontSize=n/2+"px",Ft.style.borderRadius=n/8+"px",Ft.style.left=`${a}px`,Ft.style.top=`${s}px`,Ft.style.maxWidth=o-2*r+"px",Ft.style.maxHeight=o-2*r+"px",qt.forEach((e=>e.style.borderRadius=n/8+"px"))})(e.contentRect)})).observe(Jt._gl.canvas);
