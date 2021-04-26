var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(e,a)=>{for(var s in a||(a={}))t.call(a,s)&&r(e,s,a[s]);if(o)for(var s of o(a))n.call(a,s)&&r(e,s,a[s]);return e};import{l as s,t as c,p as i,a as l,b as p,e as d,f as u,G as m,n as f,T as h,D as b,c as v,M as y,d as g,g as w,h as x,z as k,i as B,m as E,j as S,k as C,s as A,o as $,R as I,q as R,r as M,P as F,u as O,v as q,w as T,S as j,N as _,L as N,x as L,y as P,A as U,B as z,C as D,E as G}from"./vendor.3c8e1cf4.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){a(new Error(`Failed to import: ${e}`)),r(i)},onload(){o(self[t].moduleMap[s]),r(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/LD48/assets/");const H=s.stream.bind({});Object.assign(H,a(a({},s),{of:H}));function J(e,t){const o=H.of();return e.addEventListener(t,o),o}function Z(e){let t;return H.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const W=H.merge(H(document.hasFocus()),H.merge(J(window,"focus"),J(window,"blur")).map(p("type")).map(d("focus"))),X=e=>u((t=>t.key===e),J(document,"keydown")),Y=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,Q=e=>"string"==typeof e&&Y.test(e);function K(e){const t=e.match(Y);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class V{constructor(){return new Proxy({},{get(e,t){var o,n;return"$"===t?e:null!=(n=null==(o=e[t])?void 0:o.call(e))?n:void 0},set(e,t,o){const n=e[t];return n?n(o):e[t]=H(o),!0}})}}class ee extends m{constructor(e=new V){super(),this.store=e}auto(e,t,...o){const n=this.store.$;if(n[t])return n[t];this.store[t]=e;const r=n[t];return r.controller=Q(e)?this.addColor(this.store,t):this.add(this.store,t,...o),r}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,ee.prototype),t.store=new V,t}}const te=new ee;te.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const oe=W.map(f).map(((...e)=>c(i(console.log,e)))("pause")),ne=function(e){const t=H.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=H(),o=H(),n=H.merge(H.of(e),H.immediate(H.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return H.on((()=>cancelAnimationFrame(t())),n.end),n}().pipe(Z).map(Math.abs);t()&&t().end(!0)}),[e]),o=(n=t,H.combine(((e,t)=>{e().map(t)}),[n]));var n;return H.scan(l,0,o)}(oe);Z(ne).map((e=>e/1e3));const re=(ae=document,H.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},H.merge(J(ae,"keydown"),J(ae,"keyup"))));var ae;const se=e=>e[Math.floor(Math.random()*e.length)],ce=H.of(0);h.scheduleRepeat((e=>{b.schedule((()=>{ce(h.ticks/h.PPQ%1)}),e)}),"64n");const ie=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],le={major:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2]},pe=()=>{const e=se(ie),t=ie.indexOf(e),o=se(Object.values(le)),n=[e];let r=t;return o.forEach((e=>{r=(r+e)%ie.length,n.push(ie[r])})),n},de=[[1]],ue=(e,t=3,o=4,n=16)=>{const r=[],a=se(de);for(let s=0;s<n;s++){const n=a[s%a.length]?`${se(e)}${se([t,o])}`:null;r.push(n)}return r},me=(e,t,o=.2)=>{const n=(new v).toDestination(),r=e.auto(o,t,0,1);return H.on((e=>n.set({gain:e})),r),n},fe=()=>{const e=new y;return e.oscillator.type=se(["pulse","pwm","sine","square","triangle","sawtooth","fatsawtooth","fattriangle","fmsawtooth","fmtriangle"]),e.envelope.set({attack:se([.01,"8n"])}),e.filterEnvelope.set({attack:se([.01,"8n"]),decay:se([.01,"8n","4n"])}),e},he=(be=B,e=>(...t)=>e(be(),...t));var be;const ve=(e,t=e)=>g(e,t),ye=he(w),ge=he(E),we=he(S),xe=he(x),ke=he(k),Be=C,Ee=he(A);$(Array);const Se=["I","J","L","O","S","T","Z"],Ce={I:[ve(-1,0),ve(0,0),ve(1,0),ve(2,0)],T:[ve(-1,0),ve(0,0),ve(1,0),ve(0,1)],J:[ve(0,-1),ve(0,0),ve(0,1),ve(-1,1)],L:[ve(0,-1),ve(0,0),ve(0,1),ve(1,1)],O:[ve(0,0),ve(1,0),ve(0,1),ve(1,1)],S:[ve(0,0),ve(1,0),ve(-1,1),ve(0,1)],Z:[ve(-1,0),ve(0,0),ve(0,1),ve(1,1)]},Ae=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return ve(o,t)},$e=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],Ie=e=>Ce[e.tetronimo].map((t=>ye(xe(t,$e[e.rotation]),e.position))),Re=e=>{const t=Ie(e).reduce((([[e,t],[o,n]],[r,a])=>[[Math.min(e,r),Math.min(t,a)],[Math.max(o,r),Math.max(n,a)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=ge(ke(),Ee(ke(),t[0])),n=we(ge(ke(),Ee(t[1],ve(15,15))));return a(a({},e),{position:ye(e.position,ye(o,n))})},Me=(e,t)=>4===((e,t)=>{const o=Ie(e),n=Ie(t),r=[];for(const a of o)for(const e of n)Be(a,e)&&r.push(a);return r})(e,t).length,Fe=ve(-1,0),Oe=ve(1,0),qe=ve(0,-1),Te=ve(0,1),je=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type&&"O"!==e.tetronimo?Re(a(a({},e),{rotation:(e.rotation-t+4)%4})):e))}),_e=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type?Re(a(a({},e),{position:ye(e.position,t)})):e))}),Ne=({beat:e=0,type:t="hole",tetronimo:o=se(Se),position:n=Ae(),rotation:r=se([0,1,2,3])})=>Re({tetronimo:o,position:n,rotation:r,type:t,beat:e}),Le=Ne({type:"player",beat:-1,tetronimo:se(Se.filter((e=>"O"!==e))),position:ve(I.randomInt(3,12)(),I.randomInt(8,12)())}),Pe={tetronimoes:[Le],currentBeat:-1},Ue=se([["a",_e(Pe,Fe)],["d",_e(Pe,Oe)],["w",_e(Pe,qe)],["s",_e(Pe,Te)],["e",je(Pe,1)],["q",je(Pe,-1)]]),ze=Ue[1];Pe.tetronimoes.push(a(a(a({},Le),ze.tetronimoes[0]),{type:"hole",beat:0}));const De=Ue[0],Ge=H.of(Pe),He=H.of(!1),Je=(e,t)=>a(a({},e),{tetronimoes:[...e.tetronimoes,Ne({type:"hole",beat:t+8})]}),Ze=u(Boolean,Ge.map((e=>{const t=e.tetronimoes[0],o=e.tetronimoes[1];return e.currentBeat>0&&Ke(e.currentBeat)&&t&&o&&!Me(t,o)})));H.on((()=>He(!1)),Ze);const We=te.addFolder("audio"),Xe=We.auto(100,"BPM",60,240);let Ye=pe();const Qe=H.of(0);h.scheduleRepeat((()=>{Qe(Qe()+1)}),"4n");const Ke=e=>e%8==0,Ve=e=>e%32==0;u(Boolean,Qe.map(Ke)),H.on((e=>h.bpm.value=e),Xe);const et=H.combine(((e,t)=>e()||!t()),[oe,He]);H.on((e=>{e?h.pause(R()):h.start(R())}),et);const tt=me(We,"effect",.4),ot=new M(.5).connect(tt);ot.set({wet:.5});const nt=new F("16n",.2).connect(ot);nt.set({wet:.5});const rt=(new y).connect(nt);rt.oscillator.type="fmsine",rt.envelope.set({attack:.01,decay:.2}),rt.filterEnvelope.set({attack:.01,decay:.2});const at=ue(Ye,5,6).filter((e=>e)),st=()=>{Ye=pe();const e=me(We,"Drums",.4),t=new q(4.2).connect(e),o=(new T).connect(t),n=new j(((e,t)=>{o.triggerAttackRelease(t,"4n",e)}),["C1","C1","C1",["C1","C1"],"C1","C1","C1",["C1","C1","C1"]]);n.loop=!0,n.playbackRate=.5;const r=me(We,"Hats",.2),a=(new _).connect(r),s=new j(((e,t)=>{a.triggerAttackRelease("32n",e)}),["C3","C3","C3","C3","C3","C3",["C4","C4"],["C4","C4","C4"]]);s.loop=!0,h.scheduleRepeat((()=>{a.volume.set({value:se([-60,-6])})}),"4m");const c=[ue(Ye,4,5),ue(Ye,4,4),ue(Ye,4,5),ue(Ye,3,5),ue(Ye,3,6)],i=me(We,"arp"),l=new F("16n").connect(i);new N("4m",.25,.5).connect(l.wet).start(0);const p=fe().connect(l),d=new L(((e,t)=>{const o=se(["8n","4n","16n"]);p.triggerAttackRelease(t,o,e)}),se(c),se(["up","upDown"]));d.playbackRate=se([1,2,4]),h.scheduleRepeat((()=>{d.values=se(c)}),"4m");const u=me(We,"bass"),m=fe().connect(u),f=new L(((e,t)=>{m.triggerAttackRelease(t,"2n",e)}),ue(Ye,1,2,4),se(["up","upDown"]));return f.playbackRate=se([.25,.5,1]),n.start(0),f.start(0),d.start(0),s.start(0),()=>{n.stop(),f.stop(),d.stop(),s.stop(),e.dispose(),r.dispose(),i.dispose(),u.dispose()}},ct=J(document,"keydown");function it(e,...t){const o=t.map(lt),n=P,r=U,a=e.reduce(((e,t,r)=>{const a=o[r-1];return`${e}${n(a)}${t}`}));return[...o.map(r),{frag:a}].reduce(pt)}function lt(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function pt(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var n;return e[t]="string"==typeof o?((null!=(n=e[t])?n:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}H.on((()=>{(async()=>{O()})(),ct.end(!0)}),ct);let dt=1;const ut=()=>"u_"+dt++,mt=["float","int","bool","vec2","vec3","vec4"],ft=e=>mt.includes(e);const ht=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},bt=it`
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
`,vt=it`
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
`,yt=te.addFolder("graphics"),gt={I:yt.auto("#ff9b0d","I").map(K),J:yt.auto("#497bff","J").map(K),L:yt.auto("#ff5d5d","L").map(K),O:yt.auto("#00f0ff","O").map(K),S:yt.auto("#00ff86","S").map(K),T:yt.auto("#ff74d1","T").map(K),Z:yt.auto("#fffb51","Z").map(K)},wt={blocks:z.range(0,3).map((()=>ke())),beat:0,color:[0,0,0],active:!1,invert:!1},xt=Ge.map((e=>z.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,n=o?[1,1,1]:gt[t.tetronimo]();return{blocks:Ie(t),color:n,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=z.range(1,8-e.length).map((()=>wt));return e.length<8?e.concat(t):e.slice(0,8)})),kt=["a","b","c","d"],Bt=it`
    ${bt}
    ${vt}
    ${{uniforms:z.range(1,8).reduce(((e,t,o)=>{for(const n of Object.keys(xt()[o]))"blocks"!==n&&(e[`shapes[${o}].${n}`]=()=>xt()[o][n]);return z.range(0,3).forEach((t=>{e[`shapes[${o}].${kt[t]}`]=()=>xt()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
      p *= (1. + beat * ${function(e,t=ut(),o){const n="controller"in e?e.controller.property:ft(t)?ut():t,r=Q(e())?()=>K(e()):()=>e();return[n,{frag:`uniform ${null!=o?o:ft(t)?t:ht(r())} ${n};`,uniforms:{[n]:r}}]}(yt.auto(.2,"beatScale",.1,1))});
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
  `,Et=document.getElementById("layout"),St=document.getElementById("ui"),Ct=document.querySelectorAll(".ui"),At=document.getElementById("instructions");At&&(At.textContent=`press ${De.toUpperCase()} to begin`);let $t;H.on((e=>{Et&&(Et.style.opacity=e?"0":"1",e&&Ct.forEach((e=>{e!==St&&(e.style.visibility="hidden")})))}),He),H.on((()=>{St&&(St.textContent=`tetronim${"o".repeat(Ge().currentBeat)}!`)}),Ze);const It=H.of(!0);H.on((()=>{$t(),It(!1),setTimeout((()=>It(!0)),750)}),Ze);const Rt=e=>{Ge().currentBeat>0?(Ge(((e=0)=>{const t=Ne({type:"player",beat:e});return{tetronimoes:[t,Ne({tetronimo:t.tetronimo,beat:8})],currentBeat:e}})()),He(!0),$t=st()):e===De&&(He(!0),$t=st()),He()&&Xe(100)};[X("a"),X("s"),X("d"),X("q"),X("w"),X("e")].reduce(H.merge).map((({key:e})=>{if(He()||It()&&Rt(e),He()){rt.triggerAttackRelease(se(at),"16n",R());const e=re();e.a&&Ge(_e(Ge(),Fe)),e.s&&Ge(_e(Ge(),Te)),e.d&&Ge(_e(Ge(),Oe)),e.w&&Ge(_e(Ge(),qe)),e.e&&Ge(je(Ge(),1)),e.q&&Ge(je(Ge(),-1))}})),H.on((()=>Ge(((e,t)=>{let o=a(a({},e),{currentBeat:t,tetronimoes:e.tetronimoes.map((o=>"player"===o.type?a(a({},o),{beat:t,tetronimo:e.tetronimoes[e.tetronimoes.length-1].tetronimo}):o)).filter((e=>e.beat>=t))});return Ke(t)&&(o=Je(o,t)),Ve(t)&&Xe(Xe()+20),o})(Ge(),Ge().currentBeat+1))),u((()=>He()),Qe));const Mt=D(),Ft=new G;Ft.showPanel(0),document.body.appendChild(Ft.dom),H.on((e=>{Ft.dom.style.visibility=e?"visible":"hidden",e?te.show():te.hide()}),H.scan((e=>!e),!1,X("t")));const Ot=Mt(Bt);H.on((()=>{Mt.poll(),Ot(),Ft.update()}),ne);new ResizeObserver((([e])=>{(({width:e,height:t})=>{if(!Et)return;Et.style.opacity="1";const o=Math.min(e,t),n=o/16,r=2.5*n,a=(e-o)/2+r,s=(t-o)/2+r;Et.style.fontSize=n/2+"px",Et.style.borderRadius=n/8+"px",Et.style.left=`${a}px`,Et.style.top=`${s}px`,Et.style.maxWidth=o-2*r+"px",Et.style.maxHeight=o-2*r+"px",Ct.forEach((e=>e.style.borderRadius=n/8+"px"))})(e.contentRect)})).observe(Mt._gl.canvas);
