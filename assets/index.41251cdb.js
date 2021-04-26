var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,a=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,r=(e,r)=>{for(var s in r||(r={}))t.call(r,s)&&a(e,s,r[s]);if(o)for(var s of o(r))n.call(r,s)&&a(e,s,r[s]);return e};import{l as s,t as c,p as i,a as p,b as l,e as d,f as u,G as m,c as f,M as h,T as v,n as b,D as g,d as y,S as w,N as k,R as x,P as S,L as E,g as A,s as B,h as C,i as $,j as M,z as F,k as I,m as R,o as O,q as T,r as j,u as q,v as N,w as _,x as L,y as P,A as U}from"./vendor.5940f755.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,r)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){r(new Error(`Failed to import: ${e}`)),a(i)},onload(){o(self[t].moduleMap[s]),a(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/LD48/assets/");const D=s.stream.bind({});Object.assign(D,r(r({},s),{of:D}));function G(e,t){const o=D.of();return e.addEventListener(t,o),o}function z(e){let t;return D.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}const J=D.merge(D(document.hasFocus()),D.merge(G(window,"focus"),G(window,"blur")).map(l("type")).map(d("focus"))),Z=e=>u((t=>t.key===e),G(document,"keydown")),H=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,X=e=>"string"==typeof e&&H.test(e);function Y(e){const t=e.match(H);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class W{constructor(){return new Proxy({},{get(e,t){var o,n;return"$"===t?e:null!=(n=null==(o=e[t])?void 0:o.call(e))?n:void 0},set(e,t,o){const n=e[t];return n?n(o):e[t]=D(o),!0}})}}class K extends m{constructor(e=new W){super(),this.store=e}auto(e,t,...o){const n=this.store.$;if(n[t])return n[t];this.store[t]=e;const a=n[t];return a.controller=X(e)?this.addColor(this.store,t):this.add(this.store,t,...o),a}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,K.prototype),t.store=new W,t}}const Q=new K;Q.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const V=D.of(!0),ee=function(e){const t=D.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=D(),o=D(),n=D.merge(D.of(e),D.immediate(D.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return D.on((()=>cancelAnimationFrame(t())),n.end),n}().pipe(z).map(Math.abs);t()&&t().end(!0)}),[e]),o=(n=t,D.combine(((e,t)=>{e().map(t)}),[n]));var n;return D.scan(p,0,o)}(V);z(ee).map((e=>e/1e3)),D.on((e=>{e||V(!0)}),J);const te=(oe=document,D.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},D.merge(G(oe,"keydown"),G(oe,"keyup"))));var oe;const ne=e=>e[Math.floor(Math.random()*e.length)],ae=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],re={major:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2]},se=(e,t=3,o=4,n=16)=>{const a=[];for(let r=0;r<n;r++){const n=`${ne(e)}${ne([t,o])}`;a.push(ne([n,n,n,null]))}return a},ce=(e,t,o=.2)=>{const n=(new f).toDestination(),a=e.auto(o,t,0,1);return D.on((e=>n.set({gain:e})),a),n},ie=()=>{const e=ce(Q,"bass"),t=(()=>{const e=new h;return e.oscillator.type=ne(["pulse","pwm","sine","square","triangle","sawtooth","fatsawtooth","fattriangle","fmsawtooth","fmtriangle"]),e.envelope.set({attack:ne([.01,"8n"])}),e.filterEnvelope.set({attack:ne([.01,"8n"]),decay:ne([.01,"8n","4n"])}),e})();return t.connect(e),t},pe=Q.addFolder("audio"),le=pe.auto(120,"BPM",60,240),de=(()=>{const e=ne(ae),t=ae.indexOf(e),o=ne(Object.values(re)),n=[e];let a=t;return o.forEach((e=>{a=(a+e)%ae.length,n.push(ae[a])})),n})(),ue=D.of(0);v.scheduleRepeat((()=>{ue(ue()+1)}),"4n");const me=u(Boolean,ue.map((e=>e%8==0)));D.on((e=>v.bpm.value=e),le),D.on((e=>{e?v.pause(b()):v.start(b())}),V);const fe=ce(pe,"Drums",.4),he=new g(4.2).connect(fe),ve=(new y).connect(he),be=new w(((e,t)=>{ve.triggerAttackRelease(t,"4n",e)}),["C1","C1","C1",["C1","C1"],"C1","C1","C1",["C1","C1","C1"]]);be.loop=!0,be.playbackRate=.5;const ge=ce(pe,"Hats",.2),ye=(new k).connect(ge),we=new w(((e,t)=>{ye.triggerAttackRelease("32n",e)}),["C3","C3","C3","C3","C3","C3",["C4","C4"],["C4","C4","C4"]]);we.loop=!0,v.scheduleRepeat((()=>{ye.volume.set({value:ne([-60,-6])})}),"4m");const ke=ce(pe,"effect",.4),xe=new x(.5).connect(ke);xe.set({wet:.5});const Se=new S("16n",.4).connect(xe);Se.set({wet:.5});const Ee=(new h).connect(Se);Ee.oscillator.type="fmsine",Ee.envelope.set({attack:.01,decay:.2}),Ee.filterEnvelope.set({attack:.01,decay:.2});const Ae=se(de,5,6),Be=()=>{Ee.triggerAttackRelease(ne(Ae),"16n",b())},Ce=[se(de,4,5),se(de,4,4),se(de,4,5),se(de,3,5),se(de,3,6)],$e=ce(pe,"arp"),Me=new S("16n").connect($e);new E("4m",.25,.5).connect(Me.wet).start(0);const Fe=ie().connect(Me),Ie=new A(((e,t)=>{const o=ne(["8n","4n","16n"]);Fe.triggerAttackRelease(t,o,e)}),ne(Ce),ne(["up","upDown"]));Ie.playbackRate=ne([1,2,4]),v.scheduleRepeat((()=>{Ie.values=ne(Ce)}),"4m");const Re=ie(),Oe=new A(((e,t)=>{Re.triggerAttackRelease(t,"2n",e)}),se(de,1,2,4),ne(["up","upDown"]));Oe.playbackRate=.5;const Te=(je=I,e=>(...t)=>e(je(),...t));var je;const qe=(e,t=e)=>C(e,t),Ne=Te($),_e=Te(R),Le=Te(O),Pe=Te(M),Ue=Te(F),De=T,Ge=Te(j);q(Array);const ze=["I","J","L","O","S","T","Z"],Je={I:[qe(-1,0),qe(0,0),qe(1,0),qe(2,0)],T:[qe(-1,0),qe(0,0),qe(1,0),qe(0,1)],J:[qe(0,-1),qe(0,0),qe(0,1),qe(-1,1)],L:[qe(0,-1),qe(0,0),qe(0,1),qe(1,1)],O:[qe(0,0),qe(1,0),qe(0,1),qe(1,1)],S:[qe(0,0),qe(1,0),qe(-1,1),qe(0,1)],Z:[qe(-1,0),qe(0,0),qe(0,1),qe(1,1)]},Ze=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return qe(o,t)},He=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],Xe=e=>Je[e.tetronimo].map((t=>Ne(Pe(t,He[e.rotation]),e.position))),Ye=e=>{const t=Xe(e).reduce((([[e,t],[o,n]],[a,r])=>[[Math.min(e,a),Math.min(t,r)],[Math.max(o,a),Math.max(n,r)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=_e(Ue(),Ge(Ue(),t[0])),n=Le(_e(Ue(),Ge(t[1],qe(15,15))));return r(r({},e),{position:Ne(e.position,Ne(o,n))})},We=(e,t)=>4===((e,t)=>{const o=Xe(e),n=Xe(t),a=[];for(const r of o)for(const e of n)De(r,e)&&a.push(r);return a})(e,t).length,Ke=qe(-1,0),Qe=qe(1,0),Ve=qe(0,-1),et=qe(0,1),tt=({beat:e=0,type:t="hole",tetronimo:o=ne(ze),position:n=Ze(),rotation:a=ne([0,1,2,3])})=>Ye({tetronimo:o,position:n,rotation:a,type:t,beat:e}),ot=tt({type:"player",beat:ue()}),nt={tetronimoes:[ot,tt({tetronimo:ot.tetronimo,beat:8})],currentBeat:ue()},at=D.of(nt);var rt,st;D.on((e=>{const t=at();at(r(r({},t),{currentBeat:e,tetronimoes:t.tetronimoes.map((o=>"player"===o.type?r(r({},o),{beat:e,tetronimo:t.tetronimoes[t.tetronimoes.length-1].tetronimo}):o)).filter((t=>t.beat>=e))}))}),ue),D.on((()=>{if(0===ue())return;const e=at();at(r(r({},e),{tetronimoes:[...e.tetronimoes,tt({type:"hole",beat:ue()+8})]}))}),me),u(Boolean,(rt=at.map((e=>{const t=e.tetronimoes[0],o=e.tetronimoes[1];return ue()>0&&t&&o&&!We(t,o)})),st=me,D.combine((()=>rt()),[st]))).map(((...e)=>c(i(console.log,e)))("collision"));const ct=(e,t)=>r(r({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type&&"O"!==e.tetronimo?Ye(r(r({},e),{rotation:(e.rotation-t+4)%4})):e))}),it=(e,t)=>r(r({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type?Ye(r(r({},e),{position:Ne(e.position,t)})):e))});function pt(e,...t){const o=t.map(lt),n=N,a=_,r=e.reduce(((e,t,a)=>{const r=o[a-1];return`${e}${n(r)}${t}`}));return[...o.map(a),{frag:r}].reduce(dt)}function lt(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function dt(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var n;return e[t]="string"==typeof o?((null!=(n=e[t])?n:"")+"\n"+o).trim():"object"==typeof o&&null!==o?r(r({},e[t]),o):o,e}),r({},e))}let ut=1;const mt=()=>"u_"+ut++,ft=["float","int","bool","vec2","vec3","vec4"],ht=e=>ft.includes(e);const vt=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},bt=pt`
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
`,gt=pt`
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
`,yt=Q.addFolder("graphics"),wt={I:yt.auto("#ff9b0d","I").map(Y),J:yt.auto("#497bff","J").map(Y),L:yt.auto("#ff5d5d","L").map(Y),O:yt.auto("#00f0ff","O").map(Y),S:yt.auto("#00ff86","S").map(Y),T:yt.auto("#ff74d1","T").map(Y),Z:yt.auto("#fffb51","Z").map(Y)},kt={blocks:L.range(0,3).map((()=>Ue())),beat:0,color:[0,0,0],active:!1,invert:!1},xt=at.map((e=>L.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,n=o?[1,1,1]:wt[t.tetronimo]();return{blocks:Xe(t),color:n,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=L.range(1,8-e.length).map((()=>kt));return e.length<8?e.concat(t):e.slice(0,8)})),St=["a","b","c","d"],Et=pt`
    ${bt}
    ${gt}
    ${{uniforms:L.range(1,8).reduce(((e,t,o)=>{for(const n of Object.keys(xt()[o]))"blocks"!==n&&(e[`shapes[${o}].${n}`]=()=>xt()[o][n]);return L.range(0,3).forEach((t=>{e[`shapes[${o}].${St[t]}`]=()=>xt()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
      p *= (1. + beat * ${function(e,t=mt(),o){const n="controller"in e?e.controller.property:ht(t)?mt():t,a=X(e())?()=>Y(e()):()=>e();return[n,{frag:`uniform ${null!=o?o:ht(t)?t:vt(a())} ${n};`,uniforms:{[n]:a}}]}(yt.auto(.2,"beatScale",.1,1))});
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
  `;let At=!1;Z("a").map(Be),Z("s").map(Be),Z("d").map(Be),Z("q").map(Be),Z("w").map(Be),Z("e").map(Be),te.map((e=>{e.a&&at(it(at(),Ke)),e.s&&at(it(at(),et)),e.d&&at(it(at(),Qe)),e.w&&at(it(at(),Ve)),e.e&&at(ct(at(),1)),e.q&&at(ct(at(),-1)),e[" "]&&(At||((async()=>{B().then((()=>{be.start(0),Oe.start(0),Ie.start(0),we.start(0)}))})(),At=!0),V(!V()))}));const Bt=P(),Ct=new U;Ct.showPanel(0),document.body.appendChild(Ct.dom),D.on((e=>{Ct.dom.style.visibility=e?"visible":"hidden",e?Q.show():Q.hide()}),D.scan((e=>!e),!1,Z("t")));const $t=Bt(Et);D.on((()=>{Bt.poll(),$t(),Ct.update()}),ee);
