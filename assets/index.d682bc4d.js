var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(e,a)=>{for(var s in a||(a={}))t.call(a,s)&&r(e,s,a[s]);if(o)for(var s of o(a))n.call(a,s)&&r(e,s,a[s]);return e};import{l as s,t as i,p as c,a as l,b as p,e as d,f as m,G as u,n as f,T as h,D as b,V as v,M as y,c as g,d as w,g as x,z as k,h as B,m as S,i as E,j as C,s as A,k as R,R as $,o as I,P as T,q as M,r as F,u as q,v as O,S as j,N as _,L as N,w as P,x as L,y as U,A as z,B as D,C as G,E as H}from"./vendor.8434b459.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){a(new Error(`Failed to import: ${e}`)),r(c)},onload(){o(self[t].moduleMap[s]),r(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/tetronimo/assets/");const J=s.stream.bind({});Object.assign(J,a(a({},s),{of:J}));function Z(e,t){const o=J.of();return e.addEventListener(t,o),o}function W(e){let t;return J.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const X=J.merge(J(document.hasFocus()),J.merge(Z(window,"focus"),Z(window,"blur")).map(p("type")).map(d("focus"))),Y=e=>m((t=>t.key===e),Z(document,"keydown")),Q=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,V=e=>"string"==typeof e&&Q.test(e);function K(e){const t=e.match(Q);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class ee{constructor(){return new Proxy({},{get(e,t){var o,n;return"$"===t?e:null!=(n=null==(o=e[t])?void 0:o.call(e))?n:void 0},set(e,t,o){const n=e[t];return n?n(o):e[t]=J(o),!0}})}}class te extends u{constructor(e=new ee){super(),this.store=e}auto(e,t,...o){const n=this.store.$;if(n[t])return n[t];this.store[t]=e;const r=n[t];return r.controller=V(e)?this.addColor(this.store,t):this.add(this.store,t,...o),r}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,te.prototype),t.store=new ee,t}}const oe=new te;oe.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const ne=X.map(f).map(((...e)=>i(c(console.log,e)))("pause")),re=function(e){const t=J.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=J(),o=J(),n=J.merge(J.of(e),J.immediate(J.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return J.on((()=>cancelAnimationFrame(t())),n.end),n}().pipe(W).map(Math.abs);t()&&t().end(!0)}),[e]),o=(n=t,J.combine(((e,t)=>{e().map(t)}),[n]));var n;return J.scan(l,0,o)}(ne);W(re).map((e=>e/1e3));const ae=(se=document,J.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},J.merge(Z(se,"keydown"),Z(se,"keyup"))));var se;const ie=e=>e[Math.floor(Math.random()*e.length)],ce=J.of(0);h.scheduleRepeat((e=>{b.schedule((()=>{ce(h.ticks/h.PPQ%1)}),e)}),"64n");const le=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],pe={major:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2]},de=()=>{const e=ie(le),t=le.indexOf(e),o=ie(Object.values(pe)),n=[e];let r=t;return o.forEach((e=>{r=(r+e)%le.length,n.push(le[r])})),n},me=[[1]],ue=(e,t=3,o=4,n=16)=>{const r=[],a=ie(me);for(let s=0;s<n;s++){const n=a[s%a.length]?`${ie(e)}${ie([t,o])}`:null;r.push(n)}return r},fe=(e,t,o=-12)=>{const n=(new v).toDestination(),r=e.auto(o,t,-30,-3);return J.on((e=>n.set({volume:e})),r),n},he=()=>{const e=new y;return e.oscillator.type=ie(["pulse","pwm","sine","square","triangle","sawtooth","fatsawtooth","fattriangle","fmsawtooth","fmtriangle"]),e.envelope.set({attack:ie([.01,"8n"])}),e.filterEnvelope.set({attack:ie([.01,"8n"]),decay:ie([.01,"8n","4n"])}),e},be=(ve=B,e=>(...t)=>e(ve(),...t));var ve;const ye=(e,t=e)=>g(e,t),ge=be(w),we=be(S),xe=be(E),ke=be(x),Be=be(k),Se=C,Ee=be(A);R(Array);const Ce=["I","J","L","O","S","T","Z"],Ae={I:[ye(-1,0),ye(0,0),ye(1,0),ye(2,0)],T:[ye(-1,0),ye(0,0),ye(1,0),ye(0,1)],J:[ye(0,-1),ye(0,0),ye(0,1),ye(-1,1)],L:[ye(0,-1),ye(0,0),ye(0,1),ye(1,1)],O:[ye(0,0),ye(1,0),ye(0,1),ye(1,1)],S:[ye(0,0),ye(1,0),ye(-1,1),ye(0,1)],Z:[ye(-1,0),ye(0,0),ye(0,1),ye(1,1)]},Re=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return ye(o,t)},$e=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],Ie=e=>Ae[e.tetronimo].map((t=>ge(ke(t,$e[e.rotation]),e.position))),Te=e=>{const t=Ie(e).reduce((([[e,t],[o,n]],[r,a])=>[[Math.min(e,r),Math.min(t,a)],[Math.max(o,r),Math.max(n,a)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=we(Be(),Ee(Be(),t[0])),n=xe(we(Be(),Ee(t[1],ye(15,15))));return a(a({},e),{position:ge(e.position,ge(o,n))})},Me=(e,t)=>4===((e,t)=>{const o=Ie(e),n=Ie(t),r=[];for(const a of o)for(const e of n)Se(a,e)&&r.push(a);return r})(e,t).length,Fe=e=>e%8==0,qe=ye(-1,0),Oe=ye(1,0),je=ye(0,-1),_e=ye(0,1),Ne=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((o=>"player"!==o.type||"O"===o.tetronimo||Fe(e.currentBeat)?o:Te(a(a({},o),{rotation:(o.rotation-t+4)%4}))))}),Pe=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((o=>"player"!==o.type||Fe(e.currentBeat)?o:Te(a(a({},o),{position:ge(o.position,t)}))))}),Le=({beat:e=0,type:t="hole",tetronimo:o=ie(Ce),position:n=Re(),rotation:r=ie([0,1,2,3])})=>Te({tetronimo:o,position:n,rotation:r,type:t,beat:e}),Ue=Le({type:"player",beat:-1,tetronimo:ie(Ce.filter((e=>"O"!==e))),position:ye($.randomInt(3,12)(),$.randomInt(8,12)())}),ze={tetronimoes:[Ue],currentBeat:-1},De=ie([["a",Pe(ze,qe)],["d",Pe(ze,Oe)],["w",Pe(ze,je)],["s",Pe(ze,_e)],["e",Ne(ze,1)],["q",Ne(ze,-1)]]),Ge=De[1];ze.tetronimoes.push(a(a(a({},Ue),Ge.tetronimoes[0]),{type:"hole",beat:0}));const He=De[0],Je=J.of(ze),Ze=J.of(!1),We=(e,t)=>a(a({},e),{tetronimoes:[...e.tetronimoes,Le({type:"hole",beat:t+8})]}),Xe=m(Boolean,Je.map((e=>{const t=e.tetronimoes[0],o=e.tetronimoes[1];return e.currentBeat>0&&Fe(e.currentBeat)&&t&&o&&!Me(t,o)})));J.on((()=>Ze(!1)),Xe);const Ye=oe.addFolder("audio"),Qe=Ye.auto(100,"BPM",60,240);let Ve=de();const Ke=J.of(0);h.scheduleRepeat((()=>{Ke(Ke()+1)}),"4n");const et=e=>e%32==0;m(Boolean,Ke.map((e=>e%8==0))),J.on((e=>h.bpm.value=e),Qe);const tt=J.combine(((e,t)=>e()||!t()),[ne,Ze]);J.on((e=>{e?h.pause(I()):h.start(I())}),tt);const ot=fe(Ye,"effect",-12),nt=(new T).connect(ot);let rt=ue(Ve,5,6,3).filter((e=>e));const at=()=>{nt.triggerAttackRelease(ie(rt),"16n")},st=fe(Ye,"good job",-13),it=new M("32n",.7).connect(st);it.set({wet:1});const ct=new T(y,{oscillator:{type:"sine"},envelope:{attack:0,release:.7},filterEnvelope:{attack:0},detune:3}).connect(it);let lt=ue(Ve,5,6,3).filter((e=>e)),pt=ue(Ve,3,4,3).filter((e=>e));const dt=()=>{ct.triggerAttackRelease([ie(lt),ie(pt)],"8n")},mt=()=>{Ve=de(),rt=ue(Ve,5,6,3).filter((e=>e)),lt=ue(Ve,5,6,3).filter((e=>e)),pt=ue(Ve,3,4,3).filter((e=>e));const e=fe(Ye,"Drums",-14),t=new q(4.2).connect(e),o=(new O).connect(t),n=new j(((e,t)=>{o.triggerAttackRelease(t,"4n",e)}),["C1","C1","C1",["C1","C1"],"C1","C1","C1",["C1","C1","C1"]]);n.loop=!0,n.playbackRate=.5;const r=fe(Ye,"Hats",-14),a=(new _).connect(r),s=new j(((e,t)=>{a.triggerAttackRelease("32n",e)}),["C3","C3","C3","C3","C3","C3",["C4","C4"],["C4","C4","C4"]]);s.loop=!0,h.scheduleRepeat((()=>{a.volume.set({value:ie([-60,-6])})}),"4m");const i=[ue(Ve,4,5),ue(Ve,4,4),ue(Ve,4,5),ue(Ve,3,5),ue(Ve,3,6)],c=fe(Ye,"arp",-19),l=new M("16n").connect(c);new N("4m",.25,.5).connect(l.wet).start(0);const p=he().connect(l),d=new P(((e,t)=>{const o=ie(["8n","4n","16n"]);p.triggerAttackRelease(t,o,e)}),ie(i),ie(["up","upDown"]));d.playbackRate=ie([1,2,4]),h.scheduleRepeat((()=>{d.values=ie(i)}),"4m");const m=fe(Ye,"bass",-15),u=he().connect(m),f=new P(((e,t)=>{u.triggerAttackRelease(t,"2n",e)}),ue(Ve,1,2,4),ie(["up","upDown"]));return f.playbackRate=ie([.25,.5,1]),n.start(0),f.start(0),d.start(0),s.start(0),()=>{n.stop(),f.stop(),d.stop(),s.stop(),e.dispose(),r.dispose(),c.dispose(),m.dispose()}},ut=Z(document,"keydown");function ft(e,...t){const o=t.map(ht),n=L,r=U,a=e.reduce(((e,t,r)=>{const a=o[r-1];return`${e}${n(a)}${t}`}));return[...o.map(r),{frag:a}].reduce(bt)}function ht(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function bt(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var n;return e[t]="string"==typeof o?((null!=(n=e[t])?n:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}function vt(e,t=gt(),o){const n="controller"in e?e.controller.property:xt(t)?gt():t;const r=V(e())?()=>K(e()):()=>e();return[n,{frag:`uniform ${null!=o?o:xt(t)?t:kt(r())} ${n};`,uniforms:{[n]:r}}]}J.on((()=>{(async()=>{F()})(),ut.end(!0)}),ut);let yt=1;const gt=()=>"u_"+yt++,wt=["float","int","bool","vec2","vec3","vec4"],xt=e=>wt.includes(e);const kt=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},Bt=ft`
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
`,St=ft`
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
`,Et=oe.addFolder("graphics"),Ct={I:Et.auto("#ff9b0d","I").map(K),J:Et.auto("#497bff","J").map(K),L:Et.auto("#ff5d5d","L").map(K),O:Et.auto("#00f0ff","O").map(K),S:Et.auto("#00ff86","S").map(K),T:Et.auto("#ff74d1","T").map(K),Z:Et.auto("#fffb51","Z").map(K)},At={blocks:z.range(0,3).map((()=>Be())),beat:0,color:[0,0,0],active:!1,invert:!1},Rt=Je.map((e=>z.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,n=o?[1,1,1]:Ct[t.tetronimo]();return{blocks:Ie(t),color:n,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=z.range(1,8-e.length).map((()=>At));return e.length<8?e.concat(t):e.slice(0,8)})),$t=["a","b","c","d"],It=ft`
    ${Bt}
    ${St}
    ${{uniforms:z.range(1,8).reduce(((e,t,o)=>{for(const n of Object.keys(Rt()[o]))"blocks"!==n&&(e[`shapes[${o}].${n}`]=()=>Rt()[o][n]);return z.range(0,3).forEach((t=>{e[`shapes[${o}].${$t[t]}`]=()=>Rt()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
    #define beatTime ${vt((()=>h.ticks/h.PPQ))}
    #define phraseTime (floor(mod(beatTime - 1., 8.))/8.)

    #define board vec2(${16})
    #define halfBoard (board/2.)

    uniform Shape shapes[numShapes];

    vec2 scaleToBeat(vec2 p, float beat) {
      p -= halfBoard;
      p *= (1. + beat * ${vt(Et.auto(.2,"beatScale",.1,1))});
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
  `,Tt=document.getElementById("layout"),Mt=document.getElementById("ui"),Ft=document.querySelectorAll(".ui"),qt=document.getElementById("instructions");qt&&(qt.textContent=`press ${He.toUpperCase()} to begin`);let Ot;J.on((e=>{Tt&&(Tt.style.opacity=e?"0":"1",e&&Ft.forEach((e=>{e!==Mt&&(e.style.visibility="hidden")})))}),Ze),J.on((()=>{Mt&&(Mt.textContent=`tetronim${"o".repeat(Je().currentBeat)}!`)}),Xe);const jt=J.of(!0);J.on((()=>{Ot(),jt(!1),setTimeout((()=>jt(!0)),750)}),Xe);const _t=e=>{Je().currentBeat>0?(Je(((e=0)=>{const t=Le({type:"player",beat:e});return{tetronimoes:[t,Le({tetronimo:t.tetronimo,beat:8})],currentBeat:e}})()),Ze(!0),Ot=mt()):e===He&&(Ze(!0),Ot=mt(),Xt()),Ze()&&Qe(100)};[Y("a"),Y("s"),Y("d"),Y("q"),Y("w"),Y("e")].reduce(J.merge).map((({key:e})=>{Ze()||jt()&&_t(e),!Ze()||"q"!==e&&"e"!==e||(at(),"e"===e&&Je(Ne(Je(),1)),"q"===e&&Je(Ne(Je(),-1)))}));const Nt=["a","s","d","w"].map((e=>m(Boolean,D(ae.map((t=>t[e])))))).reduce(J.merge),Pt=D(ae.map((e=>e.a||e.s||e.d||e.w)).map(f)),Lt=J.combine(((e,t,o,n)=>!!n.includes(e)||!n.includes(t)&&void 0),[Nt,Pt]);let Ut=0,zt=performance.now();const Dt=J.of(),Gt=e=>{const t=e-zt;zt=e,Ut+=t,Ut>66.66666666666667&&(Ut-=66.66666666666667,Dt(!0)),requestAnimationFrame(Gt)};Gt(performance.now());const Ht=(Jt=ae,Zt=Dt,J.combine((()=>Jt()),[Zt]));var Jt,Zt;const Wt=m((e=>e>1),J.scan((e=>Lt()?e+1:0),0,Ht)),Xt=()=>{if(!Ze())return;at();const e=ae();e.a&&Je(Pe(Je(),qe)),e.s&&Je(Pe(Je(),_e)),e.d&&Je(Pe(Je(),Oe)),e.w&&Je(Pe(Je(),je))};J.on(Xt,Nt),J.on(Xt,Wt),J.on((()=>Je(((e,t)=>{let o=a(a({},e),{currentBeat:t,tetronimoes:e.tetronimoes.map((o=>"player"===o.type?a(a({},o),{beat:t,tetronimo:e.tetronimoes[e.tetronimoes.length-1].tetronimo}):o)).filter((e=>e.beat>=t))});return Fe(t)&&(dt(),o=We(o,t)),et(t)&&Qe(Qe()+20),o})(Je(),Je().currentBeat+1))),m((()=>Ze()),Ke));const Yt=G(),Qt=new H;Qt.showPanel(0),document.body.appendChild(Qt.dom),J.on((e=>{Qt.dom.style.visibility=e?"visible":"hidden",e?oe.show():oe.hide()}),J.scan((e=>!e),!1,Y("t")));const Vt=Yt(It);J.on((()=>{Yt.poll(),Vt(),Qt.update()}),re);new ResizeObserver((([e])=>{(({width:e,height:t})=>{if(!Tt)return;Tt.style.opacity="1";const o=Math.min(e,t),n=o/16,r=2.5*n,a=(e-o)/2+r,s=(t-o)/2+r;Tt.style.fontSize=n/2+"px",Tt.style.borderRadius=n/8+"px",Tt.style.left=`${a}px`,Tt.style.top=`${s}px`,Tt.style.maxWidth=o-2*r+"px",Tt.style.maxHeight=o-2*r+"px",Ft.forEach((e=>e.style.borderRadius=n/8+"px"))})(e.contentRect)})).observe(Yt._gl.canvas);
