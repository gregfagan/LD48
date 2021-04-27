var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,a=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,r=(e,r)=>{for(var s in r||(r={}))t.call(r,s)&&a(e,s,r[s]);if(o)for(var s of o(r))n.call(r,s)&&a(e,s,r[s]);return e};import{l as s,t as i,p as c,a as l,b as p,e as d,m,_ as u,c as f,f as h,G as b,n as v,T as y,D as g,d as w,M as x,g as k,h as B,i as S,z as C,j as E,k as A,o as $,q as I,s as R,r as T,R as M,u as F,v as O,P as q,w as _,x as j,y as N,A as P,S as L,N as U,L as z,B as D,C as G,E as H,F as J,H as Z,I as W,J as X}from"./vendor.da125841.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,r)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),a(c)},onload(){o(self[t].moduleMap[s]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const Y=s.stream.bind({});Object.assign(Y,r(r({},s),{of:Y}));const Q=(e,t)=>Y.combine((()=>e()),[t]);function K(e,t){const o=Y.of();return e.addEventListener(t,o),o}function V(e){return Y.combine(((e,t)=>{e()&&t(e())}),[e])}function ee(e){let t;return Y.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const te=Y.merge(Y(document.hasFocus()),Y.merge(K(window,"focus"),K(window,"blur")).map(f("type")).map(d("focus"))),oe=e=>h((t=>t.key===e),K(document,"keydown")),ne=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,ae=e=>"string"==typeof e&&ne.test(e);function re(e){const t=e.match(ne);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class se{constructor(){return new Proxy({},{get(e,t){var o,n;return"$"===t?e:null!=(n=null==(o=e[t])?void 0:o.call(e))?n:void 0},set(e,t,o){const n=e[t];return n?n(o):e[t]=Y(o),!0}})}}class ie extends b{constructor(e=new se){super(),this.store=e}auto(e,t,...o){const n=this.store.$;if(n[t])return n[t];this.store[t]=e;const a=n[t];return a.controller=ae(e)?this.addColor(this.store,t):this.add(this.store,t,...o),a}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,ie.prototype),t.store=new se,t}}const ce=new ie;ce.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const le=te.map(v).map(((...e)=>i(c(console.log,e)))("pause")),pe=function(e){const t=Y.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=Y(),o=Y(),n=Y.merge(Y.of(e),Y.immediate(Y.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return Y.on((()=>cancelAnimationFrame(t())),n.end),n}().pipe(ee).map(Math.abs);t()&&t().end(!0)}),[e]),o=(n=t,Y.combine(((e,t)=>{e().map(t)}),[n]));var n;return Y.scan(l,0,o)}(le);ee(pe).map((e=>e/1e3));const de=(me=document,Y.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},Y.merge(K(me,"keydown"),K(me,"keyup"))));var me;const ue=e=>e[Math.floor(Math.random()*e.length)],fe=Y.of(0);y.scheduleRepeat((e=>{g.schedule((()=>{fe(y.ticks/y.PPQ%1)}),e)}),"64n");const he=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],be={major:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2]},ve=()=>{const e=ue(he),t=he.indexOf(e),o=ue(Object.values(be)),n=[e];let a=t;return o.forEach((e=>{a=(a+e)%he.length,n.push(he[a])})),n},ye=[[1]],ge=(e,t=3,o=4,n=16)=>{const a=[],r=ue(ye);for(let s=0;s<n;s++){const n=r[s%r.length]?`${ue(e)}${ue([t,o])}`:null;a.push(n)}return a},we=(e,t,o=.2)=>{const n=(new w).toDestination(),a=e.auto(o,t,0,1);return Y.on((e=>n.set({gain:e})),a),n},xe=()=>{const e=new x;return e.oscillator.type=ue(["pulse","pwm","sine","square","triangle","sawtooth","fatsawtooth","fattriangle","fmsawtooth","fmtriangle"]),e.envelope.set({attack:ue([.01,"8n"])}),e.filterEnvelope.set({attack:ue([.01,"8n"]),decay:ue([.01,"8n","4n"])}),e},ke=(Be=E,e=>(...t)=>e(Be(),...t));var Be;const Se=(e,t=e)=>k(e,t),Ce=ke(B),Ee=ke(A),Ae=ke($),$e=ke(S),Ie=ke(C),Re=I,Te=ke(R);T(Array);const Me=["I","J","L","O","S","T","Z"],Fe={I:[Se(-1,0),Se(0,0),Se(1,0),Se(2,0)],T:[Se(-1,0),Se(0,0),Se(1,0),Se(0,1)],J:[Se(0,-1),Se(0,0),Se(0,1),Se(-1,1)],L:[Se(0,-1),Se(0,0),Se(0,1),Se(1,1)],O:[Se(0,0),Se(1,0),Se(0,1),Se(1,1)],S:[Se(0,0),Se(1,0),Se(-1,1),Se(0,1)],Z:[Se(-1,0),Se(0,0),Se(0,1),Se(1,1)]},Oe=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return Se(o,t)},qe=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],_e=e=>Fe[e.tetronimo].map((t=>Ce($e(t,qe[e.rotation]),e.position))),je=e=>{const t=_e(e).reduce((([[e,t],[o,n]],[a,r])=>[[Math.min(e,a),Math.min(t,r)],[Math.max(o,a),Math.max(n,r)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=Ee(Ie(),Te(Ie(),t[0])),n=Ae(Ee(Ie(),Te(t[1],Se(15,15))));return r(r({},e),{position:Ce(e.position,Ce(o,n))})},Ne=(e,t)=>4===((e,t)=>{const o=_e(e),n=_e(t),a=[];for(const r of o)for(const e of n)Re(r,e)&&a.push(r);return a})(e,t).length,Pe=e=>e%8==0,Le=Se(-1,0),Ue=Se(1,0),ze=Se(0,-1),De=Se(0,1),Ge=(e,t)=>r(r({},e),{tetronimoes:e.tetronimoes.map((o=>"player"!==o.type||"O"===o.tetronimo||Pe(e.currentBeat)?o:je(r(r({},o),{rotation:(o.rotation-t+4)%4}))))}),He=(e,t)=>r(r({},e),{tetronimoes:e.tetronimoes.map((o=>"player"!==o.type||Pe(e.currentBeat)?o:je(r(r({},o),{position:Ce(o.position,t)}))))}),Je=({beat:e=0,type:t="hole",tetronimo:o=ue(Me),position:n=Oe(),rotation:a=ue([0,1,2,3])})=>je({tetronimo:o,position:n,rotation:a,type:t,beat:e}),Ze=Je({type:"player",beat:-1,tetronimo:ue(Me.filter((e=>"O"!==e))),position:Se(M.randomInt(3,12)(),M.randomInt(8,12)())}),We={tetronimoes:[Ze],currentBeat:-1},Xe=ue([["a",He(We,Le)],["d",He(We,Ue)],["w",He(We,ze)],["s",He(We,De)],["e",Ge(We,1)],["q",Ge(We,-1)]]),Ye=Xe[1];We.tetronimoes.push(r(r(r({},Ze),Ye.tetronimoes[0]),{type:"hole",beat:0}));const Qe=Xe[0],Ke=Y.of(We),Ve=Y.of(!1),et=(e,t)=>r(r({},e),{tetronimoes:[...e.tetronimoes,Je({type:"hole",beat:t+8})]}),tt=h(Boolean,Ke.map((e=>{const t=e.tetronimoes[0],o=e.tetronimoes[1];return e.currentBeat>0&&Pe(e.currentBeat)&&t&&o&&!Ne(t,o)})));Y.on((()=>Ve(!1)),tt);const ot=ce.addFolder("audio"),nt=ot.auto(100,"BPM",60,240);let at=ve();const rt=Y.of(0);y.scheduleRepeat((()=>{rt(rt()+1)}),"4n");const st=e=>e%32==0;h(Boolean,rt.map((e=>e%8==0))),Y.on((e=>y.bpm.value=e),nt);const it=Y.combine(((e,t)=>e()||!t()),[le,Ve]);Y.on((e=>{e?y.pause(F()):y.start(F())}),it);const ct=we(ot,"effect",.4),lt=new O(.5).connect(ct);lt.set({wet:.5});const pt=new q("16n",.2).connect(lt);pt.set({wet:.5});const dt=(new _).connect(pt),mt=ge(at,5,6,3).filter((e=>e)),ut=()=>{dt.triggerAttackRelease(ue(mt),"16n")},ft=()=>{at=ve();const e=we(ot,"Drums",.4),t=new N(4.2).connect(e),o=(new P).connect(t),n=new L(((e,t)=>{o.triggerAttackRelease(t,"4n",e)}),["C1","C1","C1",["C1","C1"],"C1","C1","C1",["C1","C1","C1"]]);n.loop=!0,n.playbackRate=.5;const a=we(ot,"Hats",.2),r=(new U).connect(a),s=new L(((e,t)=>{r.triggerAttackRelease("32n",e)}),["C3","C3","C3","C3","C3","C3",["C4","C4"],["C4","C4","C4"]]);s.loop=!0,y.scheduleRepeat((()=>{r.volume.set({value:ue([-60,-6])})}),"4m");const i=[ge(at,4,5),ge(at,4,4),ge(at,4,5),ge(at,3,5),ge(at,3,6)],c=we(ot,"arp"),l=new q("16n").connect(c);new z("4m",.25,.5).connect(l.wet).start(0);const p=xe().connect(l),d=new D(((e,t)=>{const o=ue(["8n","4n","16n"]);p.triggerAttackRelease(t,o,e)}),ue(i),ue(["up","upDown"]));d.playbackRate=ue([1,2,4]),y.scheduleRepeat((()=>{d.values=ue(i)}),"4m");const m=we(ot,"bass",.5),u=xe().connect(m),f=new D(((e,t)=>{u.triggerAttackRelease(t,"2n",e)}),ge(at,1,2,4),ue(["up","upDown"]));return f.playbackRate=ue([.25,.5,1]),n.start(0),f.start(0),d.start(0),s.start(0),()=>{n.stop(),f.stop(),d.stop(),s.stop(),e.dispose(),a.dispose(),c.dispose(),m.dispose()}},ht=K(document,"keydown");function bt(e,...t){const o=t.map(vt),n=G,a=H,r=e.reduce(((e,t,a)=>{const r=o[a-1];return`${e}${n(r)}${t}`}));return[...o.map(a),{frag:r}].reduce(yt)}function vt(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function yt(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var n;return e[t]="string"==typeof o?((null!=(n=e[t])?n:"")+"\n"+o).trim():"object"==typeof o&&null!==o?r(r({},e[t]),o):o,e}),r({},e))}function gt(e,t=xt(),o){const n="controller"in e?e.controller.property:Bt(t)?xt():t;const a=ae(e())?()=>re(e()):()=>e();return[n,{frag:`uniform ${null!=o?o:Bt(t)?t:St(a())} ${n};`,uniforms:{[n]:a}}]}Y.on((()=>{(async()=>{j()})(),ht.end(!0)}),ht);let wt=1;const xt=()=>"u_"+wt++,kt=["float","int","bool","vec2","vec3","vec4"],Bt=e=>kt.includes(e);const St=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},Ct=bt`
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
`,At=ce.addFolder("graphics"),$t={I:At.auto("#ff9b0d","I").map(re),J:At.auto("#497bff","J").map(re),L:At.auto("#ff5d5d","L").map(re),O:At.auto("#00f0ff","O").map(re),S:At.auto("#00ff86","S").map(re),T:At.auto("#ff74d1","T").map(re),Z:At.auto("#fffb51","Z").map(re)},It={blocks:J.range(0,3).map((()=>Ie())),beat:0,color:[0,0,0],active:!1,invert:!1},Rt=Ke.map((e=>J.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,n=o?[1,1,1]:$t[t.tetronimo]();return{blocks:_e(t),color:n,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=J.range(1,8-e.length).map((()=>It));return e.length<8?e.concat(t):e.slice(0,8)})),Tt=["a","b","c","d"],Mt=bt`
    ${Ct}
    ${Et}
    ${{uniforms:J.range(1,8).reduce(((e,t,o)=>{for(const n of Object.keys(Rt()[o]))"blocks"!==n&&(e[`shapes[${o}].${n}`]=()=>Rt()[o][n]);return J.range(0,3).forEach((t=>{e[`shapes[${o}].${Tt[t]}`]=()=>Rt()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
    #define beatTime ${gt((()=>y.ticks/y.PPQ))}
    #define phraseTime (floor(mod(beatTime - 1., 8.))/8.)

    #define board vec2(${16})
    #define halfBoard (board/2.)

    uniform Shape shapes[numShapes];

    vec2 scaleToBeat(vec2 p, float beat) {
      p -= halfBoard;
      p *= (1. + beat * ${gt(At.auto(.2,"beatScale",.1,1))});
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
  `,Ft=document.getElementById("layout"),Ot=document.getElementById("ui"),qt=document.querySelectorAll(".ui"),_t=document.getElementById("instructions");_t&&(_t.textContent=`press ${Qe.toUpperCase()} to begin`);let jt;Y.on((e=>{Ft&&(Ft.style.opacity=e?"0":"1",e&&qt.forEach((e=>{e!==Ot&&(e.style.visibility="hidden")})))}),Ve),Y.on((()=>{Ot&&(Ot.textContent=`tetronim${"o".repeat(Ke().currentBeat)}!`)}),tt);const Nt=Y.of(!0);Y.on((()=>{jt(),Nt(!1),setTimeout((()=>Nt(!0)),750)}),tt);const Pt=e=>{Ke().currentBeat>0?(Ke(((e=0)=>{const t=Je({type:"player",beat:e});return{tetronimoes:[t,Je({tetronimo:t.tetronimo,beat:8})],currentBeat:e}})()),Ve(!0),jt=ft()):e===Qe&&(Ve(!0),jt=ft(),Jt()),Ve()&&nt(100)};[oe("a"),oe("s"),oe("d"),oe("q"),oe("w"),oe("e")].reduce(Y.merge).map((({key:e})=>{Ve()||Nt()&&Pt(e),!Ve()||"q"!==e&&"e"!==e||(ut(),"e"===e&&Ke(Ge(Ke(),1)),"q"===e&&Ke(Ge(Ke(),-1)))}));const Lt=["a","s","d","w"].map((e=>h(Boolean,Z(de.map((t=>t[e])))))).reduce(Y.merge),Ut=Z(de.map((e=>e.a||e.s||e.d||e.w)).map(v)),zt=Y.combine(((e,t,o,n)=>!!n.includes(e)||!n.includes(t)&&void 0),[Lt,Ut]),Dt=Q(de,(Gt=4,e=>Q(e,Y.scan(l(1),0,e).map(p(m(u,Gt),d(0))).pipe(V)))(pe));var Gt;const Ht=h((e=>e>1),Y.scan((e=>zt()?e+1:0),0,Dt)),Jt=()=>{if(!Ve())return;ut();const e=de();e.a&&Ke(He(Ke(),Le)),e.s&&Ke(He(Ke(),De)),e.d&&Ke(He(Ke(),Ue)),e.w&&Ke(He(Ke(),ze))};Y.on(Jt,Lt),Y.on(Jt,Ht),Y.on((()=>Ke(((e,t)=>{let o=r(r({},e),{currentBeat:t,tetronimoes:e.tetronimoes.map((o=>"player"===o.type?r(r({},o),{beat:t,tetronimo:e.tetronimoes[e.tetronimoes.length-1].tetronimo}):o)).filter((e=>e.beat>=t))});return Pe(t)&&(o=et(o,t)),st(t)&&nt(nt()+20),o})(Ke(),Ke().currentBeat+1))),h((()=>Ve()),rt));const Zt=W(),Wt=new X;Wt.showPanel(0),document.body.appendChild(Wt.dom),Y.on((e=>{Wt.dom.style.visibility=e?"visible":"hidden",e?ce.show():ce.hide()}),Y.scan((e=>!e),!1,oe("t")));const Xt=Zt(Mt);Y.on((()=>{Zt.poll(),Xt(),Wt.update()}),pe);new ResizeObserver((([e])=>{(({width:e,height:t})=>{if(!Ft)return;Ft.style.opacity="1";const o=Math.min(e,t),n=o/16,a=2.5*n,r=(e-o)/2+a,s=(t-o)/2+a;Ft.style.fontSize=n/2+"px",Ft.style.borderRadius=n/8+"px",Ft.style.left=`${r}px`,Ft.style.top=`${s}px`,Ft.style.maxWidth=o-2*a+"px",Ft.style.maxHeight=o-2*a+"px",qt.forEach((e=>e.style.borderRadius=n/8+"px"))})(e.contentRect)})).observe(Zt._gl.canvas);
