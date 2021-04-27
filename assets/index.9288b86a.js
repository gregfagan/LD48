var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,a=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,r=(e,r)=>{for(var s in r||(r={}))t.call(r,s)&&a(e,s,r[s]);if(o)for(var s of o(r))n.call(r,s)&&a(e,s,r[s]);return e};import{l as s,t as i,p as c,a as l,b as p,e as d,m,_ as u,c as f,f as h,G as b,n as v,T as y,D as g,V as w,M as x,d as k,g as B,h as S,z as E,i as C,j as A,k as R,o as $,s as I,q as T,R as M,r as F,P as O,u as q,v as j,w as _,x as N,S as P,N as L,L as U,y as z,A as D,B as G,C as H,E as J,F as Z,H as W}from"./vendor.6c8e6db8.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,r)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),a(c)},onload(){o(self[t].moduleMap[s]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/tetronimo/assets/");const X=s.stream.bind({});Object.assign(X,r(r({},s),{of:X}));const Y=(e,t)=>X.combine((()=>e()),[t]);function Q(e,t){const o=X.of();return e.addEventListener(t,o),o}function V(e){return X.combine(((e,t)=>{e()&&t(e())}),[e])}function K(e){let t;return X.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const ee=X.merge(X(document.hasFocus()),X.merge(Q(window,"focus"),Q(window,"blur")).map(f("type")).map(d("focus"))),te=e=>h((t=>t.key===e),Q(document,"keydown")),oe=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,ne=e=>"string"==typeof e&&oe.test(e);function ae(e){const t=e.match(oe);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class re{constructor(){return new Proxy({},{get(e,t){var o,n;return"$"===t?e:null!=(n=null==(o=e[t])?void 0:o.call(e))?n:void 0},set(e,t,o){const n=e[t];return n?n(o):e[t]=X(o),!0}})}}class se extends b{constructor(e=new re){super(),this.store=e}auto(e,t,...o){const n=this.store.$;if(n[t])return n[t];this.store[t]=e;const a=n[t];return a.controller=ne(e)?this.addColor(this.store,t):this.add(this.store,t,...o),a}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,se.prototype),t.store=new re,t}}const ie=new se;ie.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const ce=ee.map(v).map(((...e)=>i(c(console.log,e)))("pause")),le=function(e){const t=X.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=X(),o=X(),n=X.merge(X.of(e),X.immediate(X.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return X.on((()=>cancelAnimationFrame(t())),n.end),n}().pipe(K).map(Math.abs);t()&&t().end(!0)}),[e]),o=(n=t,X.combine(((e,t)=>{e().map(t)}),[n]));var n;return X.scan(l,0,o)}(ce);K(le).map((e=>e/1e3));const pe=(de=document,X.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},X.merge(Q(de,"keydown"),Q(de,"keyup"))));var de;const me=e=>e[Math.floor(Math.random()*e.length)],ue=X.of(0);y.scheduleRepeat((e=>{g.schedule((()=>{ue(y.ticks/y.PPQ%1)}),e)}),"64n");const fe=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],he={major:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2]},be=()=>{const e=me(fe),t=fe.indexOf(e),o=me(Object.values(he)),n=[e];let a=t;return o.forEach((e=>{a=(a+e)%fe.length,n.push(fe[a])})),n},ve=[[1]],ye=(e,t=3,o=4,n=16)=>{const a=[],r=me(ve);for(let s=0;s<n;s++){const n=r[s%r.length]?`${me(e)}${me([t,o])}`:null;a.push(n)}return a},ge=(e,t,o=-12)=>{const n=(new w).toDestination(),a=e.auto(o,t,-30,-3);return X.on((e=>n.set({volume:e})),a),n},we=()=>{const e=new x;return e.oscillator.type=me(["pulse","pwm","sine","square","triangle","sawtooth","fatsawtooth","fattriangle","fmsawtooth","fmtriangle"]),e.envelope.set({attack:me([.01,"8n"])}),e.filterEnvelope.set({attack:me([.01,"8n"]),decay:me([.01,"8n","4n"])}),e},xe=(ke=C,e=>(...t)=>e(ke(),...t));var ke;const Be=(e,t=e)=>k(e,t),Se=xe(B),Ee=xe(A),Ce=xe(R),Ae=xe(S),Re=xe(E),$e=$,Ie=xe(I);T(Array);const Te=["I","J","L","O","S","T","Z"],Me={I:[Be(-1,0),Be(0,0),Be(1,0),Be(2,0)],T:[Be(-1,0),Be(0,0),Be(1,0),Be(0,1)],J:[Be(0,-1),Be(0,0),Be(0,1),Be(-1,1)],L:[Be(0,-1),Be(0,0),Be(0,1),Be(1,1)],O:[Be(0,0),Be(1,0),Be(0,1),Be(1,1)],S:[Be(0,0),Be(1,0),Be(-1,1),Be(0,1)],Z:[Be(-1,0),Be(0,0),Be(0,1),Be(1,1)]},Fe=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return Be(o,t)},Oe=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],qe=e=>Me[e.tetronimo].map((t=>Se(Ae(t,Oe[e.rotation]),e.position))),je=e=>{const t=qe(e).reduce((([[e,t],[o,n]],[a,r])=>[[Math.min(e,a),Math.min(t,r)],[Math.max(o,a),Math.max(n,r)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=Ee(Re(),Ie(Re(),t[0])),n=Ce(Ee(Re(),Ie(t[1],Be(15,15))));return r(r({},e),{position:Se(e.position,Se(o,n))})},_e=(e,t)=>4===((e,t)=>{const o=qe(e),n=qe(t),a=[];for(const r of o)for(const e of n)$e(r,e)&&a.push(r);return a})(e,t).length,Ne=e=>e%8==0,Pe=Be(-1,0),Le=Be(1,0),Ue=Be(0,-1),ze=Be(0,1),De=(e,t)=>r(r({},e),{tetronimoes:e.tetronimoes.map((o=>"player"!==o.type||"O"===o.tetronimo||Ne(e.currentBeat)?o:je(r(r({},o),{rotation:(o.rotation-t+4)%4}))))}),Ge=(e,t)=>r(r({},e),{tetronimoes:e.tetronimoes.map((o=>"player"!==o.type||Ne(e.currentBeat)?o:je(r(r({},o),{position:Se(o.position,t)}))))}),He=({beat:e=0,type:t="hole",tetronimo:o=me(Te),position:n=Fe(),rotation:a=me([0,1,2,3])})=>je({tetronimo:o,position:n,rotation:a,type:t,beat:e}),Je=He({type:"player",beat:-1,tetronimo:me(Te.filter((e=>"O"!==e))),position:Be(M.randomInt(3,12)(),M.randomInt(8,12)())}),Ze={tetronimoes:[Je],currentBeat:-1},We=me([["a",Ge(Ze,Pe)],["d",Ge(Ze,Le)],["w",Ge(Ze,Ue)],["s",Ge(Ze,ze)],["e",De(Ze,1)],["q",De(Ze,-1)]]),Xe=We[1];Ze.tetronimoes.push(r(r(r({},Je),Xe.tetronimoes[0]),{type:"hole",beat:0}));const Ye=We[0],Qe=X.of(Ze),Ve=X.of(!1),Ke=(e,t)=>r(r({},e),{tetronimoes:[...e.tetronimoes,He({type:"hole",beat:t+8})]}),et=h(Boolean,Qe.map((e=>{const t=e.tetronimoes[0],o=e.tetronimoes[1];return e.currentBeat>0&&Ne(e.currentBeat)&&t&&o&&!_e(t,o)})));X.on((()=>Ve(!1)),et);const tt=ie.addFolder("audio"),ot=tt.auto(100,"BPM",60,240);let nt=be();const at=X.of(0);y.scheduleRepeat((()=>{at(at()+1)}),"4n");const rt=e=>e%32==0;h(Boolean,at.map((e=>e%8==0))),X.on((e=>y.bpm.value=e),ot);const st=X.combine(((e,t)=>e()||!t()),[ce,Ve]);X.on((e=>{e?y.pause(F()):y.start(F())}),st);const it=ge(tt,"effect",-12),ct=(new O).connect(it);let lt=ye(nt,5,6,3).filter((e=>e));const pt=()=>{ct.triggerAttackRelease(me(lt),"16n")},dt=ge(tt,"good job",-13),mt=new q("32n",.7).connect(dt);mt.set({wet:1});const ut=new O(x,{oscillator:{type:"sine"},envelope:{attack:0,release:.7},filterEnvelope:{attack:0},detune:3}).connect(mt);let ft=ye(nt,5,6,3).filter((e=>e)),ht=ye(nt,3,4,3).filter((e=>e));const bt=()=>{ut.triggerAttackRelease([me(ft),me(ht)],"8n")},vt=()=>{nt=be(),lt=ye(nt,5,6,3).filter((e=>e)),ft=ye(nt,5,6,3).filter((e=>e)),ht=ye(nt,3,4,3).filter((e=>e));const e=ge(tt,"Drums",-14),t=new _(4.2).connect(e),o=(new N).connect(t),n=new P(((e,t)=>{o.triggerAttackRelease(t,"4n",e)}),["C1","C1","C1",["C1","C1"],"C1","C1","C1",["C1","C1","C1"]]);n.loop=!0,n.playbackRate=.5;const a=ge(tt,"Hats",-14),r=(new L).connect(a),s=new P(((e,t)=>{r.triggerAttackRelease("32n",e)}),["C3","C3","C3","C3","C3","C3",["C4","C4"],["C4","C4","C4"]]);s.loop=!0,y.scheduleRepeat((()=>{r.volume.set({value:me([-60,-6])})}),"4m");const i=[ye(nt,4,5),ye(nt,4,4),ye(nt,4,5),ye(nt,3,5),ye(nt,3,6)],c=ge(tt,"arp",-19),l=new q("16n").connect(c);new U("4m",.25,.5).connect(l.wet).start(0);const p=we().connect(l),d=new z(((e,t)=>{const o=me(["8n","4n","16n"]);p.triggerAttackRelease(t,o,e)}),me(i),me(["up","upDown"]));d.playbackRate=me([1,2,4]),y.scheduleRepeat((()=>{d.values=me(i)}),"4m");const m=ge(tt,"bass",-15),u=we().connect(m),f=new z(((e,t)=>{u.triggerAttackRelease(t,"2n",e)}),ye(nt,1,2,4),me(["up","upDown"]));return f.playbackRate=me([.25,.5,1]),n.start(0),f.start(0),d.start(0),s.start(0),()=>{n.stop(),f.stop(),d.stop(),s.stop(),e.dispose(),a.dispose(),c.dispose(),m.dispose()}},yt=Q(document,"keydown");function gt(e,...t){const o=t.map(wt),n=D,a=G,r=e.reduce(((e,t,a)=>{const r=o[a-1];return`${e}${n(r)}${t}`}));return[...o.map(a),{frag:r}].reduce(xt)}function wt(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function xt(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var n;return e[t]="string"==typeof o?((null!=(n=e[t])?n:"")+"\n"+o).trim():"object"==typeof o&&null!==o?r(r({},e[t]),o):o,e}),r({},e))}function kt(e,t=St(),o){const n="controller"in e?e.controller.property:Ct(t)?St():t;const a=ne(e())?()=>ae(e()):()=>e();return[n,{frag:`uniform ${null!=o?o:Ct(t)?t:At(a())} ${n};`,uniforms:{[n]:a}}]}X.on((()=>{(async()=>{j()})(),yt.end(!0)}),yt);let Bt=1;const St=()=>"u_"+Bt++,Et=["float","int","bool","vec2","vec3","vec4"],Ct=e=>Et.includes(e);const At=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},Rt=gt`
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
`,$t=gt`
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
`,It=ie.addFolder("graphics"),Tt={I:It.auto("#ff9b0d","I").map(ae),J:It.auto("#497bff","J").map(ae),L:It.auto("#ff5d5d","L").map(ae),O:It.auto("#00f0ff","O").map(ae),S:It.auto("#00ff86","S").map(ae),T:It.auto("#ff74d1","T").map(ae),Z:It.auto("#fffb51","Z").map(ae)},Mt={blocks:H.range(0,3).map((()=>Re())),beat:0,color:[0,0,0],active:!1,invert:!1},Ft=Qe.map((e=>H.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,n=o?[1,1,1]:Tt[t.tetronimo]();return{blocks:qe(t),color:n,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=H.range(1,8-e.length).map((()=>Mt));return e.length<8?e.concat(t):e.slice(0,8)})),Ot=["a","b","c","d"],qt=gt`
    ${Rt}
    ${$t}
    ${{uniforms:H.range(1,8).reduce(((e,t,o)=>{for(const n of Object.keys(Ft()[o]))"blocks"!==n&&(e[`shapes[${o}].${n}`]=()=>Ft()[o][n]);return H.range(0,3).forEach((t=>{e[`shapes[${o}].${Ot[t]}`]=()=>Ft()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
    #define beatTime ${kt((()=>y.ticks/y.PPQ))}
    #define phraseTime (floor(mod(beatTime - 1., 8.))/8.)

    #define board vec2(${16})
    #define halfBoard (board/2.)

    uniform Shape shapes[numShapes];

    vec2 scaleToBeat(vec2 p, float beat) {
      p -= halfBoard;
      p *= (1. + beat * ${kt(It.auto(.2,"beatScale",.1,1))});
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
  `,jt=document.getElementById("layout"),_t=document.getElementById("ui"),Nt=document.querySelectorAll(".ui"),Pt=document.getElementById("instructions");Pt&&(Pt.textContent=`press ${Ye.toUpperCase()} to begin`);let Lt;X.on((e=>{jt&&(jt.style.opacity=e?"0":"1",e&&Nt.forEach((e=>{e!==_t&&(e.style.visibility="hidden")})))}),Ve),X.on((()=>{_t&&(_t.textContent=`tetronim${"o".repeat(Qe().currentBeat)}!`)}),et);const Ut=X.of(!0);X.on((()=>{Lt(),Ut(!1),setTimeout((()=>Ut(!0)),750)}),et);const zt=e=>{Qe().currentBeat>0?(Qe(((e=0)=>{const t=He({type:"player",beat:e});return{tetronimoes:[t,He({tetronimo:t.tetronimo,beat:8})],currentBeat:e}})()),Ve(!0),Lt=vt()):e===Ye&&(Ve(!0),Lt=vt(),Xt()),Ve()&&ot(100)};[te("a"),te("s"),te("d"),te("q"),te("w"),te("e")].reduce(X.merge).map((({key:e})=>{Ve()||Ut()&&zt(e),!Ve()||"q"!==e&&"e"!==e||(pt(),"e"===e&&Qe(De(Qe(),1)),"q"===e&&Qe(De(Qe(),-1)))}));const Dt=["a","s","d","w"].map((e=>h(Boolean,J(pe.map((t=>t[e])))))).reduce(X.merge),Gt=J(pe.map((e=>e.a||e.s||e.d||e.w)).map(v)),Ht=X.combine(((e,t,o,n)=>!!n.includes(e)||!n.includes(t)&&void 0),[Dt,Gt]),Jt=Y(pe,(Zt=4,e=>Y(e,X.scan(l(1),0,e).map(p(m(u,Zt),d(0))).pipe(V)))(le));var Zt;const Wt=h((e=>e>1),X.scan((e=>Ht()?e+1:0),0,Jt)),Xt=()=>{if(!Ve())return;pt();const e=pe();e.a&&Qe(Ge(Qe(),Pe)),e.s&&Qe(Ge(Qe(),ze)),e.d&&Qe(Ge(Qe(),Le)),e.w&&Qe(Ge(Qe(),Ue))};X.on(Xt,Dt),X.on(Xt,Wt),X.on((()=>Qe(((e,t)=>{let o=r(r({},e),{currentBeat:t,tetronimoes:e.tetronimoes.map((o=>"player"===o.type?r(r({},o),{beat:t,tetronimo:e.tetronimoes[e.tetronimoes.length-1].tetronimo}):o)).filter((e=>e.beat>=t))});return Ne(t)&&(bt(),o=Ke(o,t)),rt(t)&&ot(ot()+20),o})(Qe(),Qe().currentBeat+1))),h((()=>Ve()),at));const Yt=Z(),Qt=new W;Qt.showPanel(0),document.body.appendChild(Qt.dom),X.on((e=>{Qt.dom.style.visibility=e?"visible":"hidden",e?ie.show():ie.hide()}),X.scan((e=>!e),!1,te("t")));const Vt=Yt(qt);X.on((()=>{Yt.poll(),Vt(),Qt.update()}),le);new ResizeObserver((([e])=>{(({width:e,height:t})=>{if(!jt)return;jt.style.opacity="1";const o=Math.min(e,t),n=o/16,a=2.5*n,r=(e-o)/2+a,s=(t-o)/2+a;jt.style.fontSize=n/2+"px",jt.style.borderRadius=n/8+"px",jt.style.left=`${r}px`,jt.style.top=`${s}px`,jt.style.maxWidth=o-2*a+"px",jt.style.maxHeight=o-2*a+"px",Nt.forEach((e=>e.style.borderRadius=n/8+"px"))})(e.contentRect)})).observe(Yt._gl.canvas);
