var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(e,a)=>{for(var s in a||(a={}))t.call(a,s)&&r(e,s,a[s]);if(o)for(var s of o(a))n.call(a,s)&&r(e,s,a[s]);return e};import{l as s,t as c,p as i,a as l,b as p,e as u,f as d,G as f,n as m,T as h,D as v,c as b,M as g,d as y,g as w,h as k,z as x,i as S,m as B,j as E,k as A,s as C,o as $,q as M,r as R,u as F,S as I,N as O,R as T,P as j,L as q,v as N,w as _,x as L,y as P,A as U,B as D,C as G}from"./vendor.f1ffe601.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){a(new Error(`Failed to import: ${e}`)),r(i)},onload(){o(self[t].moduleMap[s]),r(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/LD48/assets/");const z=s.stream.bind({});Object.assign(z,a(a({},s),{of:z}));function J(e,t){const o=z.of();return e.addEventListener(t,o),o}function Z(e){let t;return z.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const H=z.merge(z(document.hasFocus()),z.merge(J(window,"focus"),J(window,"blur")).map(p("type")).map(u("focus"))),X=e=>d((t=>t.key===e),J(document,"keydown")),Y=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,W=e=>"string"==typeof e&&Y.test(e);function Q(e){const t=e.match(Y);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class K{constructor(){return new Proxy({},{get(e,t){var o,n;return"$"===t?e:null!=(n=null==(o=e[t])?void 0:o.call(e))?n:void 0},set(e,t,o){const n=e[t];return n?n(o):e[t]=z(o),!0}})}}class V extends f{constructor(e=new K){super(),this.store=e}auto(e,t,...o){const n=this.store.$;if(n[t])return n[t];this.store[t]=e;const r=n[t];return r.controller=W(e)?this.addColor(this.store,t):this.add(this.store,t,...o),r}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,V.prototype),t.store=new K,t}}const ee=new V;ee.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const te=H.map(m).map(((...e)=>c(i(console.log,e)))("pause")),oe=function(e){const t=z.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=z(),o=z(),n=z.merge(z.of(e),z.immediate(z.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return z.on((()=>cancelAnimationFrame(t())),n.end),n}().pipe(Z).map(Math.abs);t()&&t().end(!0)}),[e]),o=(n=t,z.combine(((e,t)=>{e().map(t)}),[n]));var n;return z.scan(l,0,o)}(te);Z(oe).map((e=>e/1e3));const ne=(re=document,z.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},z.merge(J(re,"keydown"),J(re,"keyup"))));var re;const ae=e=>e[Math.floor(Math.random()*e.length)],se=z.of(0);h.scheduleRepeat((e=>{v.schedule((()=>{se(h.ticks/h.PPQ%1)}),e)}),"64n");const ce=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],ie={major:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2]},le=[[1]],pe=(e,t=3,o=4,n=16)=>{const r=[],a=ae(le);for(let s=0;s<n;s++){const n=a[s%a.length]?`${ae(e)}${ae([t,o])}`:null;r.push(n)}return r},ue=(e,t,o=.2)=>{const n=(new b).toDestination(),r=e.auto(o,t,0,1);return z.on((e=>n.set({gain:e})),r),n},de=()=>{const e=ue(ee,"bass"),t=(()=>{const e=new g;return e.oscillator.type=ae(["pulse","pwm","sine","square","triangle","sawtooth","fatsawtooth","fattriangle","fmsawtooth","fmtriangle"]),e.envelope.set({attack:ae([.01,"8n"])}),e.filterEnvelope.set({attack:ae([.01,"8n"]),decay:ae([.01,"8n","4n"])}),e})();return t.connect(e),t},fe=(me=S,e=>(...t)=>e(me(),...t));var me;const he=(e,t=e)=>y(e,t),ve=fe(w),be=fe(B),ge=fe(E),ye=fe(k),we=fe(x),ke=A,xe=fe(C);$(Array);const Se=["I","J","L","O","S","T","Z"],Be={I:[he(-1,0),he(0,0),he(1,0),he(2,0)],T:[he(-1,0),he(0,0),he(1,0),he(0,1)],J:[he(0,-1),he(0,0),he(0,1),he(-1,1)],L:[he(0,-1),he(0,0),he(0,1),he(1,1)],O:[he(0,0),he(1,0),he(0,1),he(1,1)],S:[he(0,0),he(1,0),he(-1,1),he(0,1)],Z:[he(-1,0),he(0,0),he(0,1),he(1,1)]},Ee=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return he(o,t)},Ae=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],Ce=e=>Be[e.tetronimo].map((t=>ve(ye(t,Ae[e.rotation]),e.position))),$e=e=>{const t=Ce(e).reduce((([[e,t],[o,n]],[r,a])=>[[Math.min(e,r),Math.min(t,a)],[Math.max(o,r),Math.max(n,a)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=be(we(),xe(we(),t[0])),n=ge(be(we(),xe(t[1],he(15,15))));return a(a({},e),{position:ve(e.position,ve(o,n))})},Me=(e,t)=>4===((e,t)=>{const o=Ce(e),n=Ce(t),r=[];for(const a of o)for(const e of n)ke(a,e)&&r.push(a);return r})(e,t).length,Re=he(-1,0),Fe=he(1,0),Ie=he(0,-1),Oe=he(0,1),Te=({beat:e=0,type:t="hole",tetronimo:o=ae(Se),position:n=Ee(),rotation:r=ae([0,1,2,3])})=>$e({tetronimo:o,position:n,rotation:r,type:t,beat:e}),je=(e=0)=>{const t=Te({type:"player",beat:e});return{tetronimoes:[t,Te({tetronimo:t.tetronimo,beat:8})],currentBeat:e}},qe=z.of(je()),Ne=z.of(!1),_e=(e,t)=>0===t?e:a(a({},e),{tetronimoes:[...e.tetronimoes,Te({type:"hole",beat:t+8})]}),Le=d(Boolean,qe.map((e=>{const t=e.tetronimoes[0],o=e.tetronimoes[1];return e.currentBeat>0&&Ze(e.currentBeat)&&t&&o&&!Me(t,o)})));z.on((()=>Ne(!1)),Le);const Pe=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type&&"O"!==e.tetronimo?$e(a(a({},e),{rotation:(e.rotation-t+4)%4})):e))}),Ue=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type?$e(a(a({},e),{position:ve(e.position,t)})):e))}),De=ee.addFolder("audio"),Ge=De.auto(100,"BPM",60,240),ze=(()=>{const e=ae(ce),t=ce.indexOf(e),o=ae(Object.values(ie)),n=[e];let r=t;return o.forEach((e=>{r=(r+e)%ce.length,n.push(ce[r])})),n})(),Je=z.of(0);h.scheduleRepeat((()=>{Je(Je()+1)}),"4n");const Ze=e=>e%8==0,He=e=>e%32==0;d(Boolean,Je.map(Ze)),z.on((e=>h.bpm.value=e),Ge);const Xe=z.combine(((e,t)=>e()||!t()),[te,Ne]);z.on((e=>{e?h.pause(M()):h.start(M())}),Xe);const Ye=ue(De,"Drums",.4),We=new R(4.2).connect(Ye),Qe=(new F).connect(We),Ke=new I(((e,t)=>{Qe.triggerAttackRelease(t,"4n",e)}),["C1","C1","C1",["C1","C1"],"C1","C1","C1",["C1","C1","C1"]]);Ke.loop=!0,Ke.playbackRate=.5;const Ve=ue(De,"Hats",.2),et=(new O).connect(Ve),tt=new I(((e,t)=>{et.triggerAttackRelease("32n",e)}),["C3","C3","C3","C3","C3","C3",["C4","C4"],["C4","C4","C4"]]);tt.loop=!0,h.scheduleRepeat((()=>{et.volume.set({value:ae([-60,-6])})}),"4m");const ot=ue(De,"effect",.4),nt=new T(.5).connect(ot);nt.set({wet:.5});const rt=new j("16n",.2).connect(nt);rt.set({wet:.5});const at=(new g).connect(rt);at.oscillator.type="fmsine",at.envelope.set({attack:.01,decay:.2}),at.filterEnvelope.set({attack:.01,decay:.2});const st=pe(ze,5,6).filter((e=>e)),ct=[pe(ze,4,5),pe(ze,4,4),pe(ze,4,5),pe(ze,3,5),pe(ze,3,6)],it=ue(De,"arp"),lt=new j("16n").connect(it);new q("4m",.25,.5).connect(lt.wet).start(0);const pt=de().connect(lt),ut=new N(((e,t)=>{const o=ae(["8n","4n","16n"]);pt.triggerAttackRelease(t,o,e)}),ae(ct),ae(["up","upDown"]));ut.playbackRate=ae([1,2,4]),h.scheduleRepeat((()=>{ut.values=ae(ct)}),"4m");const dt=de(),ft=new N(((e,t)=>{dt.triggerAttackRelease(t,"2n",e)}),pe(ze,1,2,4),ae(["up","upDown"]));ft.playbackRate=.5;const mt=J(document,"keydown");function ht(e,...t){const o=t.map(vt),n=L,r=P,a=e.reduce(((e,t,r)=>{const a=o[r-1];return`${e}${n(a)}${t}`}));return[...o.map(r),{frag:a}].reduce(bt)}function vt(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function bt(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var n;return e[t]="string"==typeof o?((null!=(n=e[t])?n:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}z.on((()=>{(async()=>{_().then((()=>{Ke.start(0),ft.start(0),ut.start(0),tt.start(0)}))})(),mt.end(!0)}),mt);let gt=1;const yt=()=>"u_"+gt++,wt=["float","int","bool","vec2","vec3","vec4"],kt=e=>wt.includes(e);const xt=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},St=ht`
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
`,Bt=ht`
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
`,Et=ee.addFolder("graphics"),At={I:Et.auto("#ff9b0d","I").map(Q),J:Et.auto("#497bff","J").map(Q),L:Et.auto("#ff5d5d","L").map(Q),O:Et.auto("#00f0ff","O").map(Q),S:Et.auto("#00ff86","S").map(Q),T:Et.auto("#ff74d1","T").map(Q),Z:Et.auto("#fffb51","Z").map(Q)},Ct={blocks:U.range(0,3).map((()=>we())),beat:0,color:[0,0,0],active:!1,invert:!1},$t=qe.map((e=>U.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,n=o?[1,1,1]:At[t.tetronimo]();return{blocks:Ce(t),color:n,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=U.range(1,8-e.length).map((()=>Ct));return e.length<8?e.concat(t):e.slice(0,8)})),Mt=["a","b","c","d"],Rt=ht`
    ${St}
    ${Bt}
    ${{uniforms:U.range(1,8).reduce(((e,t,o)=>{for(const n of Object.keys($t()[o]))"blocks"!==n&&(e[`shapes[${o}].${n}`]=()=>$t()[o][n]);return U.range(0,3).forEach((t=>{e[`shapes[${o}].${Mt[t]}`]=()=>$t()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
      p *= (1. + beat * ${function(e,t=yt(),o){const n="controller"in e?e.controller.property:kt(t)?yt():t,r=W(e())?()=>Q(e()):()=>e();return[n,{frag:`uniform ${null!=o?o:kt(t)?t:xt(r())} ${n};`,uniforms:{[n]:r}}]}(Et.auto(.2,"beatScale",.1,1))});
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
  `,Ft=z.of(!0);z.on((()=>{Ft(!1),setTimeout((()=>Ft(!0)),750)}),Le);[X("a"),X("s"),X("d"),X("q"),X("w"),X("e")].reduce(z.merge).map((()=>{if(Ne()){at.triggerAttackRelease(ae(st),"16n",M());const e=ne();e.a&&qe(Ue(qe(),Re)),e.s&&qe(Ue(qe(),Oe)),e.d&&qe(Ue(qe(),Fe)),e.w&&qe(Ue(qe(),Ie)),e.e&&qe(Pe(qe(),1)),e.q&&qe(Pe(qe(),-1))}else Ft()&&(Ne(!0),0!==qe().currentBeat&&(Ge(100),qe(je())))})),z.on((()=>qe(((e,t)=>{let o=a(a({},e),{currentBeat:t,tetronimoes:e.tetronimoes.map((o=>"player"===o.type?a(a({},o),{beat:t,tetronimo:e.tetronimoes[e.tetronimoes.length-1].tetronimo}):o)).filter((e=>e.beat>=t))});return Ze(t)&&(o=_e(o,t)),He(t)&&(console.log("here",t),Ge(Ge()+20)),o})(qe(),qe().currentBeat+1))),d((()=>Ne()),Je));const It=D(),Ot=new G;Ot.showPanel(0),document.body.appendChild(Ot.dom),z.on((e=>{Ot.dom.style.visibility=e?"visible":"hidden",e?ee.show():ee.hide()}),z.scan((e=>!e),!1,X("t")));const Tt=It(Rt);z.on((()=>{It.poll(),Tt(),Ot.update()}),oe);
