var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,a=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,r=(e,r)=>{for(var s in r||(r={}))t.call(r,s)&&a(e,s,r[s]);if(o)for(var s of o(r))n.call(r,s)&&a(e,s,r[s]);return e};import{l as s,t as c,p as i,a as p,b as l,e as d,f as u,G as m,c as f,M as h,T as v,n as b,D as g,d as y,S as w,R as k,P as x,L as S,g as E,s as A,h as B,i as $,j as M,z as F,k as I,m as R,o as O,q as T,r as j,u as q,v as C,w as _,x as N,y as L,A as P}from"./vendor.96dcdc19.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,r)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){r(new Error(`Failed to import: ${e}`)),a(i)},onload(){o(self[t].moduleMap[s]),a(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/LD48/assets/");const U=s.stream.bind({});Object.assign(U,r(r({},s),{of:U}));function G(e,t){const o=U.of();return e.addEventListener(t,o),o}function D(e){let t;return U.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const z=U.merge(U(document.hasFocus()),U.merge(G(window,"focus"),G(window,"blur")).map(l("type")).map(d("focus"))),J=e=>u((t=>t.key===e),G(document,"keydown")),Z=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,X=e=>"string"==typeof e&&Z.test(e);function Y(e){const t=e.match(Z);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class H{constructor(){return new Proxy({},{get(e,t){var o,n;return"$"===t?e:null!=(n=null==(o=e[t])?void 0:o.call(e))?n:void 0},set(e,t,o){const n=e[t];return n?n(o):e[t]=U(o),!0}})}}class W extends m{constructor(e=new H){super(),this.store=e}auto(e,t,...o){const n=this.store.$;if(n[t])return n[t];this.store[t]=e;const a=n[t];return a.controller=X(e)?this.addColor(this.store,t):this.add(this.store,t,...o),a}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,W.prototype),t.store=new H,t}}const K=new W;K.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const Q=U.of(!0),V=function(e){const t=U.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=U(),o=U(),n=U.merge(U.of(e),U.immediate(U.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return U.on((()=>cancelAnimationFrame(t())),n.end),n}().pipe(D).map(Math.abs);t()&&t().end(!0)}),[e]),o=(n=t,U.combine(((e,t)=>{e().map(t)}),[n]));var n;return U.scan(p,0,o)}(Q);D(V).map((e=>e/1e3)),U.on((e=>{e||Q(!0)}),z);const ee=(te=document,U.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},U.merge(G(te,"keydown"),G(te,"keyup"))));var te;const oe=e=>e[Math.floor(Math.random()*e.length)],ne=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],ae={major:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2]},re=(e,t=3,o=4,n=16)=>{const a=[];for(let r=0;r<n;r++)a.push(`${oe(e)}${oe([t,o])}`);return a},se=(e,t,o=.2)=>{const n=(new f).toDestination(),a=e.auto(o,t,0,1);return U.on((e=>n.set({gain:e})),a),n},ce=()=>{const e=se(K,"bass"),t=(()=>{const e=new h;return e.oscillator.type=oe(["pulse","pwm","sine","square","triangle","sawtooth"]),e.envelope.set({attack:oe([.01,"8n"])}),e.filterEnvelope.set({attack:oe([.01,"8n"]),decay:oe([.01,"8n","4n"])}),e})();return t.connect(e),t},ie=K.addFolder("audio"),pe=ie.auto(120,"BPM",60,240),le=(()=>{const e=oe(ne),t=ne.indexOf(e),o=oe(Object.values(ae)),n=[e];let a=t;return o.forEach((e=>{a=(a+e)%ne.length,n.push(ne[a])})),n})(),de=U.of(0);v.scheduleRepeat((()=>{de(de()+1)}),"4n");const ue=u(Boolean,de.map((e=>e%8==0)));U.on((e=>v.bpm.value=e),pe),U.on((e=>{e?v.pause(b()):v.start(b())}),Q);const me=se(ie,"Drums",.4),fe=new g(4.2).connect(me),he=(new y).connect(fe),ve=new w(((e,t)=>{he.triggerAttackRelease(t,"4n",e)}),["C1","C1","C1","C1","C1","C1","C1",["C1","C1","C1"]]);ve.loop=!0,ve.playbackRate=.5;const be=se(ie,"effect",.4),ge=new k(.5).connect(be);ge.set({wet:.5});const ye=new x("16n",.4).connect(ge);ye.set({wet:.5});const we=(new h).connect(ye);we.oscillator.type="fmsine",we.envelope.set({attack:.01,decay:.2}),we.filterEnvelope.set({attack:.01,decay:.2});const ke=re(le,5,6),xe=()=>{we.triggerAttackRelease(oe(ke),"16n",b())},Se=[re(le,4,5),re(le,4,4),re(le,4,5),re(le,3,5),re(le,3,6)],Ee=se(ie,"arp"),Ae=new x("16n").connect(Ee);new S("4m",0,1).connect(Ae.wet);const Be=ce().connect(Ae),$e=new E(((e,t)=>{const o=oe(["8n","4n","16n"]);Be.triggerAttackRelease(t,o,e)}),oe(Se),"up");$e.playbackRate=2,v.scheduleRepeat((()=>{$e.values=oe(Se)}),"4m");const Me=ce(),Fe=new E(((e,t)=>{Me.triggerAttackRelease(t,"2n",e)}),re(le,1,2,4),"upDown");Fe.playbackRate=.5;const Ie=(Re=I,e=>(...t)=>e(Re(),...t));var Re;const Oe=(e,t=e)=>B(e,t),Te=Ie($),je=Ie(R),qe=Ie(O),Ce=Ie(M),_e=Ie(F),Ne=T,Le=Ie(j);q(Array);const Pe=["I","J","L","O","S","T","Z"],Ue={I:[Oe(-1,0),Oe(0,0),Oe(1,0),Oe(2,0)],T:[Oe(-1,0),Oe(0,0),Oe(1,0),Oe(0,1)],J:[Oe(0,-1),Oe(0,0),Oe(0,1),Oe(-1,1)],L:[Oe(0,-1),Oe(0,0),Oe(0,1),Oe(1,1)],O:[Oe(0,0),Oe(1,0),Oe(0,1),Oe(1,1)],S:[Oe(0,0),Oe(1,0),Oe(-1,1),Oe(0,1)],Z:[Oe(-1,0),Oe(0,0),Oe(0,1),Oe(1,1)]},Ge=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return Oe(o,t)},De=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],ze=e=>Ue[e.tetronimo].map((t=>Te(Ce(t,De[e.rotation]),e.position))),Je=e=>{const t=ze(e).reduce((([[e,t],[o,n]],[a,r])=>[[Math.min(e,a),Math.min(t,r)],[Math.max(o,a),Math.max(n,r)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=je(_e(),Le(_e(),t[0])),n=qe(je(_e(),Le(t[1],Oe(15,15))));return r(r({},e),{position:Te(e.position,Te(o,n))})},Ze=(e,t)=>4===((e,t)=>{const o=ze(e),n=ze(t),a=[];for(const r of o)for(const e of n)Ne(r,e)&&a.push(r);return a})(e,t).length,Xe=Oe(-1,0),Ye=Oe(1,0),He=Oe(0,-1),We=Oe(0,1),Ke=({beat:e=0,type:t="hole",tetronimo:o=oe(Pe),position:n=Ge(),rotation:a=oe([0,1,2,3])})=>Je({tetronimo:o,position:n,rotation:a,type:t,beat:e}),Qe=Ke({type:"player",beat:de()}),Ve={tetronimoes:[Qe,Ke({tetronimo:Qe.tetronimo,beat:8})],currentBeat:de()},et=U.of(Ve);var tt,ot;U.on((e=>{const t=et();et(r(r({},t),{currentBeat:e,tetronimoes:t.tetronimoes.map((o=>"player"===o.type?r(r({},o),{beat:e,tetronimo:t.tetronimoes[t.tetronimoes.length-1].tetronimo}):o)).filter((t=>t.beat>=e))}))}),de),U.on((()=>{if(0===de())return;const e=et();et(r(r({},e),{tetronimoes:[...e.tetronimoes,Ke({type:"hole",beat:de()+8})]}))}),ue),u(Boolean,(tt=et.map((e=>{const t=e.tetronimoes[0],o=e.tetronimoes[1];return de()>0&&t&&o&&!Ze(t,o)})),ot=ue,U.combine((()=>tt()),[ot]))).map(((...e)=>c(i(console.log,e)))("collision"));const nt=(e,t)=>r(r({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type&&"O"!==e.tetronimo?Je(r(r({},e),{rotation:(e.rotation-t+4)%4})):e))}),at=(e,t)=>r(r({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type?Je(r(r({},e),{position:Te(e.position,t)})):e))});function rt(e,...t){const o=t.map(st),n=C,a=_,r=e.reduce(((e,t,a)=>{const r=o[a-1];return`${e}${n(r)}${t}`}));return[...o.map(a),{frag:r}].reduce(ct)}function st(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function ct(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var n;return e[t]="string"==typeof o?((null!=(n=e[t])?n:"")+"\n"+o).trim():"object"==typeof o&&null!==o?r(r({},e[t]),o):o,e}),r({},e))}let it=1;const pt=()=>"u_"+it++,lt=["float","int","bool","vec2","vec3","vec4"],dt=e=>lt.includes(e);const ut=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},mt=rt`
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
`,ft=rt`
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
`,ht=K.addFolder("graphics"),vt={I:ht.auto("#ff9b0d","I").map(Y),J:ht.auto("#497bff","J").map(Y),L:ht.auto("#ff5d5d","L").map(Y),O:ht.auto("#00f0ff","O").map(Y),S:ht.auto("#00ff86","S").map(Y),T:ht.auto("#ff74d1","T").map(Y),Z:ht.auto("#fffb51","Z").map(Y)},bt={blocks:N.range(0,3).map((()=>_e())),beat:0,color:[0,0,0],active:!1,invert:!1},gt=et.map((e=>N.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,n=o?[1,1,1]:vt[t.tetronimo]();return{blocks:ze(t),color:n,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=N.range(1,8-e.length).map((()=>bt));return e.length<8?e.concat(t):e.slice(0,8)})),yt=["a","b","c","d"],wt=rt`
    ${mt}
    ${ft}
    ${{uniforms:N.range(1,8).reduce(((e,t,o)=>{for(const n of Object.keys(gt()[o]))"blocks"!==n&&(e[`shapes[${o}].${n}`]=()=>gt()[o][n]);return N.range(0,3).forEach((t=>{e[`shapes[${o}].${yt[t]}`]=()=>gt()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
      p *= (1. + beat * ${function(e,t=pt(),o){const n="controller"in e?e.controller.property:dt(t)?pt():t,a=X(e())?()=>Y(e()):()=>e();return[n,{frag:`uniform ${null!=o?o:dt(t)?t:ut(a())} ${n};`,uniforms:{[n]:a}}]}(ht.auto(.2,"beatScale",.1,1))});
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
  `;let kt=!1;J("a").map(xe),J("s").map(xe),J("d").map(xe),J("q").map(xe),J("w").map(xe),J("e").map(xe),ee.map((e=>{e.a&&et(at(et(),Xe)),e.s&&et(at(et(),We)),e.d&&et(at(et(),Ye)),e.w&&et(at(et(),He)),e.e&&et(nt(et(),1)),e.q&&et(nt(et(),-1)),e[" "]&&(kt||((async()=>{A().then((()=>{ve.start(0),Fe.start(0),$e.start(0)}))})(),kt=!0),Q(!Q()))}));const xt=L(),St=new P;St.showPanel(0),document.body.appendChild(St.dom),U.on((e=>{St.dom.style.visibility=e?"visible":"hidden",e?K.show():K.hide()}),U.scan((e=>!e),!1,J("t")));const Et=xt(wt);U.on((()=>{xt.poll(),Et(),St.update()}),V);
