var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,a=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,r=(e,r)=>{for(var s in r||(r={}))t.call(r,s)&&a(e,s,r[s]);if(o)for(var s of o(r))n.call(r,s)&&a(e,s,r[s]);return e};import{l as s,t as i,p as c,a as l,b as p,e as d,f as m,G as u,n as f,V as h,T as b,D as v,M as y,c as g,d as w,g as x,z as k,h as B,m as S,i as E,j as C,s as A,k as R,R as $,o as I,q as T,P as M,r as F,u as O,v as q,w as j,S as _,N,F as P,L,x as U,y as z,A as D,B as G,C as H,E as J,H as Z}from"./vendor.56989192.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,r)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),a(c)},onload(){o(self[t].moduleMap[s]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/tetronimo/assets/");const W=s.stream.bind({});Object.assign(W,r(r({},s),{of:W}));function X(e,t){const o=W.of();return e.addEventListener(t,o),o}function Y(e){let t;return W.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const Q=W.merge(W(document.hasFocus()),W.merge(X(window,"focus"),X(window,"blur")).map(p("type")).map(d("focus"))),V=e=>m((t=>t.key===e),X(document,"keydown")),K=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,ee=e=>"string"==typeof e&&K.test(e);function te(e){const t=e.match(K);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class oe{constructor(){return new Proxy({},{get(e,t){var o,n;return"$"===t?e:null!=(n=null==(o=e[t])?void 0:o.call(e))?n:void 0},set(e,t,o){const n=e[t];return n?n(o):e[t]=W(o),!0}})}}class ne extends u{constructor(e=new oe){super(),this.store=e}auto(e,t,...o){const n=this.store.$;if(n[t])return n[t];this.store[t]=e;const a=n[t];return a.controller=ee(e)?this.addColor(this.store,t):this.add(this.store,t,...o),a}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,ne.prototype),t.store=new oe,t}}const ae=new ne;ae.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const re=Q.map(f).map(((...e)=>i(c(console.log,e)))("pause")),se=function(e){const t=W.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=W(),o=W(),n=W.merge(W.of(e),W.immediate(W.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return W.on((()=>cancelAnimationFrame(t())),n.end),n}().pipe(Y).map(Math.abs);t()&&t().end(!0)}),[e]),o=(n=t,W.combine(((e,t)=>{e().map(t)}),[n]));var n;return W.scan(l,0,o)}(re),ie=Y(se).map((e=>e/1e3)),ce=(le=document,W.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},W.merge(X(le,"keydown"),X(le,"keyup"))));var le;const pe=e=>e[Math.floor(Math.random()*e.length)],de=W.of(0),me=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],ue={major:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2]},fe=()=>{const e=pe(me),t=me.indexOf(e),o=pe(Object.values(ue)),n=[e];let a=t;return o.forEach((e=>{a=(a+e)%me.length,n.push(me[a])})),n},he=[[1]],be=(e,t=3,o=4,n=16)=>{const a=[],r=pe(he);for(let s=0;s<n;s++){const n=r[s%r.length]?`${pe(e)}${pe([t,o])}`:null;a.push(n)}return a},ve=(e,t,o=-12)=>{const n=(new h).toDestination(),a=e.auto(o,t,-30,-3);return W.on((e=>n.set({volume:e})),a),n},ye=()=>{const e=new y;return e.oscillator.type=pe(["pulse","pwm","sine","square","triangle","sawtooth","fatsawtooth","fattriangle","fmsawtooth","fmtriangle"]),e.envelope.set({attack:pe([.01,"8n"])}),e.filterEnvelope.set({attack:pe([.01,"8n"]),decay:pe([.01,"8n","4n"])}),e},ge=(we=B,e=>(...t)=>e(we(),...t));var we;const xe=(e,t=e)=>g(e,t),ke=ge(w),Be=ge(S),Se=ge(E),Ee=ge(x),Ce=ge(k),Ae=C,Re=ge(A);R(Array);const $e=["I","J","L","O","S","T","Z"],Ie={I:[xe(-1,0),xe(0,0),xe(1,0),xe(2,0)],T:[xe(-1,0),xe(0,0),xe(1,0),xe(0,1)],J:[xe(0,-1),xe(0,0),xe(0,1),xe(-1,1)],L:[xe(0,-1),xe(0,0),xe(0,1),xe(1,1)],O:[xe(0,0),xe(1,0),xe(0,1),xe(1,1)],S:[xe(0,0),xe(1,0),xe(-1,1),xe(0,1)],Z:[xe(-1,0),xe(0,0),xe(0,1),xe(1,1)]},Te=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return xe(o,t)},Me=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],Fe=e=>Ie[e.tetronimo].map((t=>ke(Ee(t,Me[e.rotation]),e.position))),Oe=e=>{const t=Fe(e).reduce((([[e,t],[o,n]],[a,r])=>[[Math.min(e,a),Math.min(t,r)],[Math.max(o,a),Math.max(n,r)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=Be(Ce(),Re(Ce(),t[0])),n=Se(Be(Ce(),Re(t[1],xe(15,15))));return r(r({},e),{position:ke(e.position,ke(o,n))})},qe=(e,t)=>4===((e,t)=>{const o=Fe(e),n=Fe(t),a=[];for(const r of o)for(const e of n)Ae(r,e)&&a.push(r);return a})(e,t).length,je=e=>e%8==0,_e=xe(-1,0),Ne=xe(1,0),Pe=xe(0,-1),Le=xe(0,1),Ue=(e,t)=>r(r({},e),{tetronimoes:e.tetronimoes.map((o=>"player"!==o.type||"O"===o.tetronimo||je(e.currentBeat)?o:Oe(r(r({},o),{rotation:(o.rotation-t+4)%4}))))}),ze=(e,t)=>r(r({},e),{tetronimoes:e.tetronimoes.map((o=>"player"!==o.type||je(e.currentBeat)?o:Oe(r(r({},o),{position:ke(o.position,t)}))))}),De=({beat:e=0,type:t="hole",tetronimo:o=pe($e),position:n=Te(),rotation:a=pe([0,1,2,3])})=>Oe({tetronimo:o,position:n,rotation:a,type:t,beat:e}),Ge=De({type:"player",beat:-1,tetronimo:pe($e.filter((e=>"O"!==e))),position:xe($.randomInt(3,12)(),$.randomInt(8,12)())}),He={tetronimoes:[Ge],currentBeat:-1},Je=pe([["a",ze(He,_e)],["d",ze(He,Ne)],["w",ze(He,Pe)],["s",ze(He,Le)],["e",Ue(He,1)],["q",Ue(He,-1)]]),Ze=Je[1];He.tetronimoes.push(r(r(r({},Ge),Ze.tetronimoes[0]),{type:"hole",beat:0}));const We=Je[0],Xe=W.of(He),Ye=W.of(!1),Qe=(e,t)=>r(r({},e),{tetronimoes:[...e.tetronimoes,De({type:"hole",beat:t+8})]}),Ve=m(Boolean,Xe.map((e=>{const t=e.tetronimoes[0],o=e.tetronimoes[1];return e.currentBeat>0&&je(e.currentBeat)&&t&&o&&!qe(t,o)})));W.on((()=>Ye(!1)),Ve);const Ke=ae.addFolder("audio"),et=Ke.auto(100,"BPM",60,240);let tt=fe();const ot=W.of(0),nt=e=>e%32==0;m(Boolean,ot.map((e=>e%8==0))),W.on((e=>b.bpm.value=e),et);const at=W.combine(((e,t)=>e()||!t()),[re,Ye]);W.on((async e=>{await I(),e?b.pause(T()):b.start(T())}),at);const rt=ve(Ke,"effect",-12),st=(new M).connect(rt);let it=be(tt,5,6,3).filter((e=>e));const ct=()=>{"running"===O.state&&st.triggerAttackRelease(pe(it),"16n")},lt=ve(Ke,"good job",-13),pt=new F("32n",.7).connect(lt);pt.set({wet:1});const dt=new M(y,{oscillator:{type:"sine"},envelope:{attack:0,release:.7},filterEnvelope:{attack:0},detune:3}).connect(pt);let mt=be(tt,5,6,3).filter((e=>e)),ut=be(tt,3,4,3).filter((e=>e));const ft=()=>{"running"===O.state&&dt.triggerAttackRelease([pe(mt),pe(ut)],"8n")},ht=async()=>{await I(),tt=fe(),it=be(tt,5,6,3).filter((e=>e)),mt=be(tt,5,6,3).filter((e=>e)),ut=be(tt,3,4,3).filter((e=>e));const e=ve(Ke,"Drums",-14),t=new q(4.2).connect(e),o=(new j).connect(t),n=new _(((e,t)=>{o.triggerAttackRelease(t,"4n",e)}),["C1","C1","C1",["C1","C1"],"C1","C1","C1",["C1","C1","C1"]]);n.loop=!0,n.playbackRate=.5;const a=ve(Ke,"Hats",-14),r=(new N).connect(a),s=new _(((e,t)=>{r.triggerAttackRelease("32n",e)}),["C3","C3","C3","C3","C3","C3",["C4","C4"],["C4","C4","C4"]]);s.loop=!0,b.scheduleRepeat((()=>{r.volume.set({value:pe([-60,-6])})}),"4m");const i=[be(tt,4,5),be(tt,4,4),be(tt,4,5),be(tt,3,5),be(tt,3,6)],c=ve(Ke,"arp",-19),l=new P("16n").connect(c);new L("4m",.25,.5).connect(l.wet).start(0);const p=ye().connect(l),d=new U(((e,t)=>{const o=pe(["8n","4n","16n"]);p.triggerAttackRelease(t,o,e)}),pe(i),pe(["up","upDown"]));d.playbackRate=pe([1,2,4]),b.scheduleRepeat((()=>{d.values=pe(i)}),"4m");const m=ve(Ke,"bass",-15),u=ye().connect(m),f=new U(((e,t)=>{u.triggerAttackRelease(t,"2n",e)}),be(tt,1,2,4),pe(["up","upDown"]));return f.playbackRate=pe([.25,.5,1]),n.start(0),f.start(0),d.start(0),s.start(0),()=>{n.stop(),f.stop(),d.stop(),s.stop(),e.dispose(),a.dispose(),c.dispose(),m.dispose()}},bt=async()=>{await I(),b.scheduleRepeat((()=>{ot(ot()+1)}),"4n"),b.scheduleRepeat((e=>{v.schedule((()=>{de(b.ticks/b.PPQ%1)}),e)}),"64n")},vt=X(document,"keydown");function yt(e,...t){const o=t.map(gt),n=z,a=D,r=e.reduce(((e,t,a)=>{const r=o[a-1];return`${e}${n(r)}${t}`}));return[...o.map(a),{frag:r}].reduce(wt)}function gt(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function wt(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var n;return e[t]="string"==typeof o?((null!=(n=e[t])?n:"")+"\n"+o).trim():"object"==typeof o&&null!==o?r(r({},e[t]),o):o,e}),r({},e))}function xt(e,t=Bt(),o){const n="controller"in e?e.controller.property:Et(t)?Bt():t;const a=ee(e())?()=>te(e()):()=>e();return[n,{frag:`uniform ${null!=o?o:Et(t)?t:Ct(a())} ${n};`,uniforms:{[n]:a}}]}W.on((()=>{bt(),vt.end(!0)}),vt);let kt=1;const Bt=()=>"u_"+kt++,St=["float","int","bool","vec2","vec3","vec4"],Et=e=>St.includes(e);const Ct=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},At=yt`
${{depth:{enable:!1},primitive:"triangle strip",count:4,attributes:{position:[[-1,-1],[1,-1],[-1,1],[1,1]]},vert:"\nprecision highp float;\nattribute vec2 position;\nvarying vec2 uv;\nvoid main() {\n  uv = 0.5 * (position + 1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n",uniforms:{viewport:({viewportWidth:e,viewportHeight:t})=>[e,t]},scissor:{enable:!0,box:({viewportWidth:e,viewportHeight:t})=>{const o=Math.min(e,t),n=Math.max(e,t)-o;return r(r({},e>t?{x:n/2,y:0}:{x:0,y:n/2}),{width:o,height:o})}}}}

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
`,Rt=yt`
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
`,$t=ae.addFolder("graphics"),It={I:$t.auto("#ff9b0d","I").map(te),J:$t.auto("#497bff","J").map(te),L:$t.auto("#ff5d5d","L").map(te),O:$t.auto("#00f0ff","O").map(te),S:$t.auto("#00ff86","S").map(te),T:$t.auto("#ff74d1","T").map(te),Z:$t.auto("#fffb51","Z").map(te)},Tt={blocks:G.range(0,3).map((()=>Ce())),beat:0,color:[0,0,0],active:!1,invert:!1},Mt=Xe.map((e=>G.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,n=o?[1,1,1]:It[t.tetronimo]();return{blocks:Fe(t),color:n,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=G.range(1,8-e.length).map((()=>Tt));return e.length<8?e.concat(t):e.slice(0,8)})),Ft=["a","b","c","d"],Ot=yt`
    ${At}
    ${Rt}
    ${{uniforms:G.range(1,8).reduce(((e,t,o)=>{for(const n of Object.keys(Mt()[o]))"blocks"!==n&&(e[`shapes[${o}].${n}`]=()=>Mt()[o][n]);return G.range(0,3).forEach((t=>{e[`shapes[${o}].${Ft[t]}`]=()=>Mt()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
    #define beatTime ${xt((()=>b.ticks/b.PPQ))}
    #define phraseTime (floor(mod(beatTime - 1., 8.))/8.)

    #define board vec2(${16})
    #define halfBoard (board/2.)

    uniform Shape shapes[numShapes];

    vec2 scaleToBeat(vec2 p, float beat) {
      p -= halfBoard;
      p *= (1. + beat * ${xt($t.auto(.2,"beatScale",.1,1))});
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
  `,qt=document.getElementById("layout"),jt=document.getElementById("ui"),_t=document.querySelectorAll(".ui"),Nt=document.getElementById("instructions");Nt&&(Nt.textContent=`press ${We.toUpperCase()} to begin`);let Pt;W.on((e=>{qt&&(qt.style.opacity=e?"0":"1",e&&_t.forEach((e=>{e!==jt&&(e.style.visibility="hidden")})))}),Ye),W.on((()=>{jt&&(jt.textContent=`tetronim${"o".repeat(Xe().currentBeat)}!`)}),Ve);const Lt=W.of(!0);W.on((()=>{Pt(),Lt(!1),setTimeout((()=>Lt(!0)),750)}),Ve);const Ut=async e=>{Xe().currentBeat>0?(Xe(((e=0)=>{const t=De({type:"player",beat:e});return{tetronimoes:[t,De({tetronimo:t.tetronimo,beat:8})],currentBeat:e}})()),Ye(!0),Pt=await ht()):e===We&&(Ye(!0),Pt=await ht(),Qt()),Ye()&&et(100)};[V("a"),V("s"),V("d"),V("q"),V("w"),V("e")].reduce(W.merge).map((({key:e})=>{Ye()||Lt()&&Ut(e),!Ye()||"q"!==e&&"e"!==e||(ct(),"e"===e&&Xe(Ue(Xe(),1)),"q"===e&&Xe(Ue(Xe(),-1)))}));const zt=["a","s","d","w"].map((e=>m(Boolean,H(ce.map((t=>t[e])))))).reduce(W.merge),Dt=H(ce.map((e=>e.a||e.s||e.d||e.w)).map(f)),Gt=W.combine(((e,t,o,n)=>!!n.includes(e)||!n.includes(t)&&void 0),[zt,Dt]);let Ht=0;const Jt=W.combine((e=>{if(Ht+=e(),Ht>.06666666666666667)return Ht-=.06666666666666667,!0}),[ie]),Zt=(Wt=ce,Xt=Jt,W.combine((()=>Wt()),[Xt]));var Wt,Xt;const Yt=m((e=>e>1),W.scan((e=>Gt()?e+1:0),0,Zt)),Qt=()=>{if(!Ye())return;ct();const e=ce();e.a&&Xe(ze(Xe(),_e)),e.s&&Xe(ze(Xe(),Le)),e.d&&Xe(ze(Xe(),Ne)),e.w&&Xe(ze(Xe(),Pe))};W.on(Qt,zt),W.on(Qt,Yt),W.on((()=>Xe(((e,t)=>{let o=r(r({},e),{currentBeat:t,tetronimoes:e.tetronimoes.map((o=>"player"===o.type?r(r({},o),{beat:t,tetronimo:e.tetronimoes[e.tetronimoes.length-1].tetronimo}):o)).filter((e=>e.beat>=t))});return je(t)&&(ft(),o=Qe(o,t)),nt(t)&&et(et()+20),o})(Xe(),Xe().currentBeat+1))),m((()=>Ye()),ot));const Vt=J(),Kt=new Z;Kt.showPanel(0),document.body.appendChild(Kt.dom),W.on((e=>{Kt.dom.style.visibility=e?"visible":"hidden",e?ae.show():ae.hide()}),W.scan((e=>!e),!1,V("t")));const eo=Vt(Ot);W.on((()=>{Vt.poll(),eo(),Kt.update()}),se);new ResizeObserver((([e])=>{(({width:e,height:t})=>{if(!qt)return;qt.style.opacity="1";const o=Math.min(e,t),n=o/16,a=2.5*n,r=(e-o)/2+a,s=(t-o)/2+a;qt.style.fontSize=n/2+"px",qt.style.borderRadius=n/8+"px",qt.style.left=`${r}px`,qt.style.top=`${s}px`,qt.style.maxWidth=o-2*a+"px",qt.style.maxHeight=o-2*a+"px",_t.forEach((e=>e.style.borderRadius=n/8+"px"))})(e.contentRect)})).observe(Vt._gl.canvas);
