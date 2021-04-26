var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(e,a)=>{for(var s in a||(a={}))t.call(a,s)&&r(e,s,a[s]);if(o)for(var s of o(a))n.call(a,s)&&r(e,s,a[s]);return e};import{l as s,t as c,p as i,a as l,b as p,e as d,f as u,G as m,n as f,T as h,D as b,c as v,M as y,d as g,g as w,h as x,z as k,i as B,m as E,j as S,k as C,s as A,o as $,R as I,q as R,r as M,u as F,S as O,N as q,v as T,P as j,L as _,w as N,x as L,y as P,A as U,B as z,C as D,E as G}from"./vendor.1306d785.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){a(new Error(`Failed to import: ${e}`)),r(i)},onload(){o(self[t].moduleMap[s]),r(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/LD48/assets/");const H=s.stream.bind({});Object.assign(H,a(a({},s),{of:H}));function J(e,t){const o=H.of();return e.addEventListener(t,o),o}function Z(e){let t;return H.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const W=H.merge(H(document.hasFocus()),H.merge(J(window,"focus"),J(window,"blur")).map(p("type")).map(d("focus"))),X=e=>u((t=>t.key===e),J(document,"keydown")),Y=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,Q=e=>"string"==typeof e&&Y.test(e);function K(e){const t=e.match(Y);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class V{constructor(){return new Proxy({},{get(e,t){var o,n;return"$"===t?e:null!=(n=null==(o=e[t])?void 0:o.call(e))?n:void 0},set(e,t,o){const n=e[t];return n?n(o):e[t]=H(o),!0}})}}class ee extends m{constructor(e=new V){super(),this.store=e}auto(e,t,...o){const n=this.store.$;if(n[t])return n[t];this.store[t]=e;const r=n[t];return r.controller=Q(e)?this.addColor(this.store,t):this.add(this.store,t,...o),r}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,ee.prototype),t.store=new V,t}}const te=new ee;te.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const oe=W.map(f).map(((...e)=>c(i(console.log,e)))("pause")),ne=function(e){const t=H.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=H(),o=H(),n=H.merge(H.of(e),H.immediate(H.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return H.on((()=>cancelAnimationFrame(t())),n.end),n}().pipe(Z).map(Math.abs);t()&&t().end(!0)}),[e]),o=(n=t,H.combine(((e,t)=>{e().map(t)}),[n]));var n;return H.scan(l,0,o)}(oe);Z(ne).map((e=>e/1e3));const re=(ae=document,H.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},H.merge(J(ae,"keydown"),J(ae,"keyup"))));var ae;const se=e=>e[Math.floor(Math.random()*e.length)],ce=H.of(0);h.scheduleRepeat((e=>{b.schedule((()=>{ce(h.ticks/h.PPQ%1)}),e)}),"64n");const ie=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],le={major:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2]},pe=[[1]],de=(e,t=3,o=4,n=16)=>{const r=[],a=se(pe);for(let s=0;s<n;s++){const n=a[s%a.length]?`${se(e)}${se([t,o])}`:null;r.push(n)}return r},ue=(e,t,o=.2)=>{const n=(new v).toDestination(),r=e.auto(o,t,0,1);return H.on((e=>n.set({gain:e})),r),n},me=()=>{const e=ue(te,"bass"),t=(()=>{const e=new y;return e.oscillator.type=se(["pulse","pwm","sine","square","triangle","sawtooth","fatsawtooth","fattriangle","fmsawtooth","fmtriangle"]),e.envelope.set({attack:se([.01,"8n"])}),e.filterEnvelope.set({attack:se([.01,"8n"]),decay:se([.01,"8n","4n"])}),e})();return t.connect(e),t},fe=(he=B,e=>(...t)=>e(he(),...t));var he;const be=(e,t=e)=>g(e,t),ve=fe(w),ye=fe(E),ge=fe(S),we=fe(x),xe=fe(k),ke=C,Be=fe(A);$(Array);const Ee=["I","J","L","O","S","T","Z"],Se={I:[be(-1,0),be(0,0),be(1,0),be(2,0)],T:[be(-1,0),be(0,0),be(1,0),be(0,1)],J:[be(0,-1),be(0,0),be(0,1),be(-1,1)],L:[be(0,-1),be(0,0),be(0,1),be(1,1)],O:[be(0,0),be(1,0),be(0,1),be(1,1)],S:[be(0,0),be(1,0),be(-1,1),be(0,1)],Z:[be(-1,0),be(0,0),be(0,1),be(1,1)]},Ce=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return be(o,t)},Ae=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],$e=e=>Se[e.tetronimo].map((t=>ve(we(t,Ae[e.rotation]),e.position))),Ie=e=>{const t=$e(e).reduce((([[e,t],[o,n]],[r,a])=>[[Math.min(e,r),Math.min(t,a)],[Math.max(o,r),Math.max(n,a)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=ye(xe(),Be(xe(),t[0])),n=ge(ye(xe(),Be(t[1],be(15,15))));return a(a({},e),{position:ve(e.position,ve(o,n))})},Re=(e,t)=>4===((e,t)=>{const o=$e(e),n=$e(t),r=[];for(const a of o)for(const e of n)ke(a,e)&&r.push(a);return r})(e,t).length,Me=be(-1,0),Fe=be(1,0),Oe=be(0,-1),qe=be(0,1),Te=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type&&"O"!==e.tetronimo?Ie(a(a({},e),{rotation:(e.rotation-t+4)%4})):e))}),je=(e,t)=>a(a({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type?Ie(a(a({},e),{position:ve(e.position,t)})):e))}),_e=({beat:e=0,type:t="hole",tetronimo:o=se(Ee),position:n=Ce(),rotation:r=se([0,1,2,3])})=>Ie({tetronimo:o,position:n,rotation:r,type:t,beat:e}),Ne=_e({type:"player",beat:-1,tetronimo:se(Ee.filter((e=>"O"!==e))),position:be(I.randomInt(3,12)(),I.randomInt(8,12)())}),Le={tetronimoes:[Ne],currentBeat:-1},Pe=se([["a",je(Le,Me)],["d",je(Le,Fe)],["w",je(Le,Oe)],["s",je(Le,qe)],["e",Te(Le,1)],["q",Te(Le,-1)]]),Ue=Pe[1];Le.tetronimoes.push(a(a(a({},Ne),Ue.tetronimoes[0]),{type:"hole",beat:0}));const ze=Pe[0],De=H.of(Le),Ge=H.of(!1),He=(e,t)=>a(a({},e),{tetronimoes:[...e.tetronimoes,_e({type:"hole",beat:t+8})]}),Je=u(Boolean,De.map((e=>{const t=e.tetronimoes[0],o=e.tetronimoes[1];return e.currentBeat>0&&Qe(e.currentBeat)&&t&&o&&!Re(t,o)})));H.on((()=>Ge(!1)),Je);const Ze=te.addFolder("audio"),We=Ze.auto(100,"BPM",60,240),Xe=(()=>{const e=se(ie),t=ie.indexOf(e),o=se(Object.values(le)),n=[e];let r=t;return o.forEach((e=>{r=(r+e)%ie.length,n.push(ie[r])})),n})(),Ye=H.of(0);h.scheduleRepeat((()=>{Ye(Ye()+1)}),"4n");const Qe=e=>e%8==0,Ke=e=>e%32==0;u(Boolean,Ye.map(Qe)),H.on((e=>h.bpm.value=e),We);const Ve=H.combine(((e,t)=>e()||!t()),[oe,Ge]);H.on((e=>{e?h.pause(R()):h.start(R())}),Ve);const et=ue(Ze,"Drums",.4),tt=new M(4.2).connect(et),ot=(new F).connect(tt),nt=new O(((e,t)=>{ot.triggerAttackRelease(t,"4n",e)}),["C1","C1","C1",["C1","C1"],"C1","C1","C1",["C1","C1","C1"]]);nt.loop=!0,nt.playbackRate=.5;const rt=ue(Ze,"Hats",.2),at=(new q).connect(rt),st=new O(((e,t)=>{at.triggerAttackRelease("32n",e)}),["C3","C3","C3","C3","C3","C3",["C4","C4"],["C4","C4","C4"]]);st.loop=!0,h.scheduleRepeat((()=>{at.volume.set({value:se([-60,-6])})}),"4m");const ct=ue(Ze,"effect",.4),it=new T(.5).connect(ct);it.set({wet:.5});const lt=new j("16n",.2).connect(it);lt.set({wet:.5});const pt=(new y).connect(lt);pt.oscillator.type="fmsine",pt.envelope.set({attack:.01,decay:.2}),pt.filterEnvelope.set({attack:.01,decay:.2});const dt=de(Xe,5,6).filter((e=>e)),ut=[de(Xe,4,5),de(Xe,4,4),de(Xe,4,5),de(Xe,3,5),de(Xe,3,6)],mt=ue(Ze,"arp"),ft=new j("16n").connect(mt);new _("4m",.25,.5).connect(ft.wet).start(0);const ht=me().connect(ft),bt=new N(((e,t)=>{const o=se(["8n","4n","16n"]);ht.triggerAttackRelease(t,o,e)}),se(ut),se(["up","upDown"]));bt.playbackRate=se([1,2,4]),h.scheduleRepeat((()=>{bt.values=se(ut)}),"4m");const vt=me(),yt=new N(((e,t)=>{vt.triggerAttackRelease(t,"2n",e)}),de(Xe,1,2,4),se(["up","upDown"]));yt.playbackRate=.5;const gt=J(document,"keydown");function wt(e,...t){const o=t.map(xt),n=P,r=U,a=e.reduce(((e,t,r)=>{const a=o[r-1];return`${e}${n(a)}${t}`}));return[...o.map(r),{frag:a}].reduce(kt)}function xt(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function kt(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var n;return e[t]="string"==typeof o?((null!=(n=e[t])?n:"")+"\n"+o).trim():"object"==typeof o&&null!==o?a(a({},e[t]),o):o,e}),a({},e))}H.on((()=>{(async()=>{L().then((()=>{nt.start(0),yt.start(0),bt.start(0),st.start(0)}))})(),gt.end(!0)}),gt);let Bt=1;const Et=()=>"u_"+Bt++,St=["float","int","bool","vec2","vec3","vec4"],Ct=e=>St.includes(e);const At=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},$t=wt`
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
`,It=wt`
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
`,Rt=te.addFolder("graphics"),Mt={I:Rt.auto("#ff9b0d","I").map(K),J:Rt.auto("#497bff","J").map(K),L:Rt.auto("#ff5d5d","L").map(K),O:Rt.auto("#00f0ff","O").map(K),S:Rt.auto("#00ff86","S").map(K),T:Rt.auto("#ff74d1","T").map(K),Z:Rt.auto("#fffb51","Z").map(K)},Ft={blocks:z.range(0,3).map((()=>xe())),beat:0,color:[0,0,0],active:!1,invert:!1},Ot=De.map((e=>z.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,n=o?[1,1,1]:Mt[t.tetronimo]();return{blocks:$e(t),color:n,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=z.range(1,8-e.length).map((()=>Ft));return e.length<8?e.concat(t):e.slice(0,8)})),qt=["a","b","c","d"],Tt=wt`
    ${$t}
    ${It}
    ${{uniforms:z.range(1,8).reduce(((e,t,o)=>{for(const n of Object.keys(Ot()[o]))"blocks"!==n&&(e[`shapes[${o}].${n}`]=()=>Ot()[o][n]);return z.range(0,3).forEach((t=>{e[`shapes[${o}].${qt[t]}`]=()=>Ot()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
      p *= (1. + beat * ${function(e,t=Et(),o){const n="controller"in e?e.controller.property:Ct(t)?Et():t,r=Q(e())?()=>K(e()):()=>e();return[n,{frag:`uniform ${null!=o?o:Ct(t)?t:At(r())} ${n};`,uniforms:{[n]:r}}]}(Rt.auto(.2,"beatScale",.1,1))});
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
  `,jt=document.getElementById("layout"),_t=document.getElementById("ui"),Nt=document.querySelectorAll(".ui"),Lt=document.getElementById("instructions");Lt&&(Lt.textContent=`press ${ze.toUpperCase()} to begin`);H.on((e=>{jt&&(jt.style.opacity=e?"0":"1",e&&Nt.forEach((e=>{e!==_t&&(e.style.visibility="hidden")})))}),Ge),H.on((()=>{_t&&(_t.textContent=`tetronim${"o".repeat(De().currentBeat)}!`)}),Je);const Pt=H.of(!0);H.on((()=>{Pt(!1),setTimeout((()=>Pt(!0)),750)}),Je);const Ut=e=>{De().currentBeat>0?(De(((e=0)=>{const t=_e({type:"player",beat:e});return{tetronimoes:[t,_e({tetronimo:t.tetronimo,beat:8})],currentBeat:e}})()),Ge(!0)):e===ze&&Ge(!0),Ge()&&We(100)};[X("a"),X("s"),X("d"),X("q"),X("w"),X("e")].reduce(H.merge).map((({key:e})=>{if(Ge()||Pt()&&Ut(e),Ge()){pt.triggerAttackRelease(se(dt),"16n",R());const e=re();e.a&&De(je(De(),Me)),e.s&&De(je(De(),qe)),e.d&&De(je(De(),Fe)),e.w&&De(je(De(),Oe)),e.e&&De(Te(De(),1)),e.q&&De(Te(De(),-1))}})),H.on((()=>De(((e,t)=>{let o=a(a({},e),{currentBeat:t,tetronimoes:e.tetronimoes.map((o=>"player"===o.type?a(a({},o),{beat:t,tetronimo:e.tetronimoes[e.tetronimoes.length-1].tetronimo}):o)).filter((e=>e.beat>=t))});return Qe(t)&&(o=He(o,t)),Ke(t)&&(console.log("here",t),We(We()+20)),o})(De(),De().currentBeat+1))),u((()=>Ge()),Ye));const zt=D(),Dt=new G;Dt.showPanel(0),document.body.appendChild(Dt.dom),H.on((e=>{Dt.dom.style.visibility=e?"visible":"hidden",e?te.show():te.hide()}),H.scan((e=>!e),!1,X("t")));const Gt=zt(Tt);H.on((()=>{zt.poll(),Gt(),Dt.update()}),ne);new ResizeObserver((([e])=>{(({width:e,height:t})=>{if(!jt)return;jt.style.opacity="1";const o=Math.min(e,t),n=o/16,r=2.5*n,a=(e-o)/2+r,s=(t-o)/2+r;jt.style.fontSize=n/2+"px",jt.style.borderRadius=n/8+"px",jt.style.left=`${a}px`,jt.style.top=`${s}px`,jt.style.maxWidth=o-2*r+"px",jt.style.maxHeight=o-2*r+"px",Nt.forEach((e=>e.style.borderRadius=n/8+"px"))})(e.contentRect)})).observe(zt._gl.canvas);
