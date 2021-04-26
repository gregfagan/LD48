var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(e,a)=>{for(var s in a||(a={}))t.call(a,s)&&r(e,s,a[s]);if(o)for(var s of o(a))n.call(a,s)&&r(e,s,a[s]);return e};import{l as s,t as c,p as i,a as l,b as p,e as u,f as d,G as m,n as f,c as h,M as v,d as b,g,h as y,z as w,i as k,m as x,j as S,k as B,s as E,o as A,T as C,q as $,D as M,r as F,S as I,N as R,R as O,P as T,L as j,u as q,v as N,w as _,x as L,y as P,A as U,B as D}from"./vendor.68ab5e34.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){a(new Error(`Failed to import: ${e}`)),r(i)},onload(){o(self[t].moduleMap[s]),r(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/LD48/assets/");const G=s.stream.bind({});Object.assign(G,a(a({},s),{of:G}));function z(e,t){const o=G.of();return e.addEventListener(t,o),o}function J(e){let t;return G.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const Z=G.merge(G(document.hasFocus()),G.merge(z(window,"focus"),z(window,"blur")).map(p("type")).map(u("focus"))),H=e=>d((t=>t.key===e),z(document,"keydown")),X=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,Y=e=>"string"==typeof e&&X.test(e);function W(e){const t=e.match(X);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class K{constructor(){return new Proxy({},{get(e,t){var o,n;return"$"===t?e:null!=(n=null==(o=e[t])?void 0:o.call(e))?n:void 0},set(e,t,o){const n=e[t];return n?n(o):e[t]=G(o),!0}})}}class Q extends m{constructor(e=new K){super(),this.store=e}auto(e,t,...o){const n=this.store.$;if(n[t])return n[t];this.store[t]=e;const r=n[t];return r.controller=Y(e)?this.addColor(this.store,t):this.add(this.store,t,...o),r}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,Q.prototype),t.store=new K,t}}const V=new Q;V.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const ee=Z.map(f).map(((...e)=>c(i(console.log,e)))("pause")),te=function(e){const t=G.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=G(),o=G(),n=G.merge(G.of(e),G.immediate(G.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return G.on((()=>cancelAnimationFrame(t())),n.end),n}().pipe(J).map(Math.abs);t()&&t().end(!0)}),[e]),o=(n=t,G.combine(((e,t)=>{e().map(t)}),[n]));var n;return G.scan(l,0,o)}(ee);J(te).map((e=>e/1e3));const oe=(ne=document,G.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},G.merge(z(ne,"keydown"),z(ne,"keyup"))));var ne;const re=e=>e[Math.floor(Math.random()*e.length)],ae=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],se={major:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2]},ce=(e,t=3,o=4,n=16)=>{const r=[];for(let a=0;a<n;a++){const n=`${re(e)}${re([t,o])}`;r.push(re([n,n,n,null]))}return r},ie=(e,t,o=.2)=>{const n=(new h).toDestination(),r=e.auto(o,t,0,1);return G.on((e=>n.set({gain:e})),r),n},le=()=>{const e=ie(V,"bass"),t=(()=>{const e=new v;return e.oscillator.type=re(["pulse","pwm","sine","square","triangle","sawtooth","fatsawtooth","fattriangle","fmsawtooth","fmtriangle"]),e.envelope.set({attack:re([.01,"8n"])}),e.filterEnvelope.set({attack:re([.01,"8n"]),decay:re([.01,"8n","4n"])}),e})();return t.connect(e),t},pe=(ue=k,e=>(...t)=>e(ue(),...t));var ue;const de=(e,t=e)=>b(e,t),me=pe(g),fe=pe(x),he=pe(S),ve=pe(y),be=pe(w),ge=B,ye=pe(E);A(Array);const we=["I","J","L","O","S","T","Z"],ke={I:[de(-1,0),de(0,0),de(1,0),de(2,0)],T:[de(-1,0),de(0,0),de(1,0),de(0,1)],J:[de(0,-1),de(0,0),de(0,1),de(-1,1)],L:[de(0,-1),de(0,0),de(0,1),de(1,1)],O:[de(0,0),de(1,0),de(0,1),de(1,1)],S:[de(0,0),de(1,0),de(-1,1),de(0,1)],Z:[de(-1,0),de(0,0),de(0,1),de(1,1)]},xe=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return de(o,t)},Se=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],Be=e=>ke[e.tetronimo].map((t=>me(ve(t,Se[e.rotation]),e.position))),Ee=e=>{const t=Be(e).reduce((([[e,t],[o,n]],[r,a])=>[[Math.min(e,r),Math.min(t,a)],[Math.max(o,r),Math.max(n,a)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=fe(be(),ye(be(),t[0])),n=he(fe(be(),ye(t[1],de(15,15))));return a(a({},e),{position:me(e.position,me(o,n))})},Ae=(e,t)=>4===((e,t)=>{const o=Be(e),n=Be(t),r=[];for(const a of o)for(const e of n)ge(a,e)&&r.push(a);return r})(e,t).length,Ce=de(-1,0),$e=de(1,0),Me=de(0,-1),Fe=de(0,1),Ie=({beat:e=0,type:t="hole",tetronimo:o=re(we),position:n=xe(),rotation:r=re([0,1,2,3])})=>Ee({tetronimo:o,position:n,rotation:r,type:t,beat:e}),Re=(e=0)=>{const t=Ie({type:"player",beat:e});return{tetronimoes:[t,Ie({tetronimo:t.tetronimo,beat:8})],currentBeat:e}},Oe=G.of(Re()),Te=G.of(!1),je=(e,t)=>0===t?e:a(a({},e),{tetronimoes:[...e.tetronimoes,Ie({type:"hole",beat:t+8})]}),qe=d(Boolean,Oe.map((e=>{const t=e.tetronimoes[0],o=e.tetronimoes[1];return e.currentBeat>0&&Ge(e.currentBeat)&&t&&o&&!Ae(t,o)})));G.on((()=>Te(!1)),qe);const Ne=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type&&"O"!==e.tetronimo?Ee(a(a({},e),{rotation:(e.rotation-t+4)%4})):e))}),_e=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type?Ee(a(a({},e),{position:me(e.position,t)})):e))}),Le=V.addFolder("audio"),Pe=Le.auto(120,"BPM",60,240),Ue=(()=>{const e=re(ae),t=ae.indexOf(e),o=re(Object.values(se)),n=[e];let r=t;return o.forEach((e=>{r=(r+e)%ae.length,n.push(ae[r])})),n})(),De=G.of(0);C.scheduleRepeat((()=>{De(De()+1)}),"4n");const Ge=e=>e%8==0;d(Boolean,De.map(Ge)),G.on((e=>C.bpm.value=e),Pe);const ze=G.combine(((e,t)=>e()||!t()),[ee,Te]);G.on((e=>{e?C.pause($()):C.start($())}),ze);const Je=ie(Le,"Drums",.4),Ze=new M(4.2).connect(Je),He=(new F).connect(Ze),Xe=new I(((e,t)=>{He.triggerAttackRelease(t,"4n",e)}),["C1","C1","C1",["C1","C1"],"C1","C1","C1",["C1","C1","C1"]]);Xe.loop=!0,Xe.playbackRate=.5;const Ye=ie(Le,"Hats",.2),We=(new R).connect(Ye),Ke=new I(((e,t)=>{We.triggerAttackRelease("32n",e)}),["C3","C3","C3","C3","C3","C3",["C4","C4"],["C4","C4","C4"]]);Ke.loop=!0,C.scheduleRepeat((()=>{We.volume.set({value:re([-60,-6])})}),"4m");const Qe=ie(Le,"effect",.4),Ve=new O(.5).connect(Qe);Ve.set({wet:.5});const et=new T("16n",.4).connect(Ve);et.set({wet:.5});const tt=(new v).connect(et);tt.oscillator.type="fmsine",tt.envelope.set({attack:.01,decay:.2}),tt.filterEnvelope.set({attack:.01,decay:.2});const ot=ce(Ue,5,6),nt=[ce(Ue,4,5),ce(Ue,4,4),ce(Ue,4,5),ce(Ue,3,5),ce(Ue,3,6)],rt=ie(Le,"arp"),at=new T("16n").connect(rt);new j("4m",.25,.5).connect(at.wet).start(0);const st=le().connect(at),ct=new q(((e,t)=>{const o=re(["8n","4n","16n"]);st.triggerAttackRelease(t,o,e)}),re(nt),re(["up","upDown"]));ct.playbackRate=re([1,2,4]),C.scheduleRepeat((()=>{ct.values=re(nt)}),"4m");const it=le(),lt=new q(((e,t)=>{it.triggerAttackRelease(t,"2n",e)}),ce(Ue,1,2,4),re(["up","upDown"]));lt.playbackRate=.5;const pt=z(document,"keydown");function ut(e,...t){const o=t.map(dt),n=_,r=L,a=e.reduce(((e,t,r)=>{const a=o[r-1];return`${e}${n(a)}${t}`}));return[...o.map(r),{frag:a}].reduce(mt)}function dt(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function mt(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var n;return e[t]="string"==typeof o?((null!=(n=e[t])?n:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}G.on((()=>{(async()=>{N().then((()=>{Xe.start(0),lt.start(0),ct.start(0),Ke.start(0)}))})(),pt.end(!0)}),pt);let ft=1;const ht=()=>"u_"+ft++,vt=["float","int","bool","vec2","vec3","vec4"],bt=e=>vt.includes(e);const gt=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},yt=ut`
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
`,wt=ut`
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
`,kt=V.addFolder("graphics"),xt={I:kt.auto("#ff9b0d","I").map(W),J:kt.auto("#497bff","J").map(W),L:kt.auto("#ff5d5d","L").map(W),O:kt.auto("#00f0ff","O").map(W),S:kt.auto("#00ff86","S").map(W),T:kt.auto("#ff74d1","T").map(W),Z:kt.auto("#fffb51","Z").map(W)},St={blocks:P.range(0,3).map((()=>be())),beat:0,color:[0,0,0],active:!1,invert:!1},Bt=Oe.map((e=>P.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,n=o?[1,1,1]:xt[t.tetronimo]();return{blocks:Be(t),color:n,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=P.range(1,8-e.length).map((()=>St));return e.length<8?e.concat(t):e.slice(0,8)})),Et=["a","b","c","d"],At=ut`
    ${yt}
    ${wt}
    ${{uniforms:P.range(1,8).reduce(((e,t,o)=>{for(const n of Object.keys(Bt()[o]))"blocks"!==n&&(e[`shapes[${o}].${n}`]=()=>Bt()[o][n]);return P.range(0,3).forEach((t=>{e[`shapes[${o}].${Et[t]}`]=()=>Bt()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
      p *= (1. + beat * ${function(e,t=ht(),o){const n="controller"in e?e.controller.property:bt(t)?ht():t,r=Y(e())?()=>W(e()):()=>e();return[n,{frag:`uniform ${null!=o?o:bt(t)?t:gt(r())} ${n};`,uniforms:{[n]:r}}]}(kt.auto(.2,"beatScale",.1,1))});
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
  `,Ct=G.of(!0);G.on((()=>{Ct(!1),setTimeout((()=>Ct(!0)),750)}),qe);[H("a"),H("s"),H("d"),H("q"),H("w"),H("e")].reduce(G.merge).map((()=>{if(Te()){tt.triggerAttackRelease(re(ot),"16n",$());const e=oe();e.a&&Oe(_e(Oe(),Ce)),e.s&&Oe(_e(Oe(),Fe)),e.d&&Oe(_e(Oe(),$e)),e.w&&Oe(_e(Oe(),Me)),e.e&&Oe(Ne(Oe(),1)),e.q&&Oe(Ne(Oe(),-1))}else Ct()&&(Te(!0),0!==Oe().currentBeat&&Oe(Re()))})),G.on((()=>Oe(((e,t)=>{let o=a(a({},e),{currentBeat:t,tetronimoes:e.tetronimoes.map((o=>"player"===o.type?a(a({},o),{beat:t,tetronimo:e.tetronimoes[e.tetronimoes.length-1].tetronimo}):o)).filter((e=>e.beat>=t))});return Ge(t)&&(o=je(o,t)),o})(Oe(),Oe().currentBeat+1))),d((()=>Te()),De));const $t=U(),Mt=new D;Mt.showPanel(0),document.body.appendChild(Mt.dom),G.on((e=>{Mt.dom.style.visibility=e?"visible":"hidden",e?V.show():V.hide()}),G.scan((e=>!e),!1,H("t")));const Ft=$t(At);G.on((()=>{$t.poll(),Ft(),Mt.update()}),te);
