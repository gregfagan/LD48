var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,n=(e,n)=>{for(var s in n||(n={}))t.call(n,s)&&a(e,s,n[s]);if(o)for(var s of o(n))r.call(n,s)&&a(e,s,n[s]);return e};import{l as s,a as i,p as c,e as p,G as l,T as d,n as u,M as f,P as m,s as h,f as b,b as v,t as g,z as y,c as w,m as x,d as S,g as E,h as k,i as B,j as A,R as M,r as I,k as $}from"./vendor.a34bd166.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,n)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){n(new Error(`Failed to import: ${e}`)),a(c)},onload(){o(self[t].moduleMap[s]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const F=s.stream.bind({});function O(e,t){const o=F.of();return e.addEventListener(t,o),o}function T(e){let t;return F.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}Object.assign(F,n(n({},s),{of:F}));const _=F.merge(F(document.hasFocus()),F.merge(O(window,"focus"),O(window,"blur")).map(c("type")).map(p("focus"))),j=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,N=e=>"string"==typeof e&&j.test(e);function q(e){const t=e.match(j);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class R{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=F(o),!0}})}}class C extends l{constructor(e=new R){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const a=r[t];return a.controller=N(e)?this.addColor(this.store,t):this.add(this.store,t,...o),a}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,C.prototype),t.store=new R,t}}const L=new C;L.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const P=F.of(!0),U=function(e){const t=F.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=F(),o=F(),r=F.merge(F.of(e),F.immediate(F.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return F.on((()=>cancelAnimationFrame(t())),r.end),r}().pipe(T).map(Math.abs);t()&&t().end(!0)}),[e]),o=(r=t,F.combine(((e,t)=>{e().map(t)}),[r]));var r;return F.scan(i,0,o)}(P);T(U).map((e=>e/1e3)),F.on((e=>{e||P(!0)}),_);const z=(G=document,F.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},F.merge(O(G,"keydown"),O(G,"keyup"))));var G;const J=e=>e[Math.floor(Math.random()*e.length)],Z=L.addFolder("audio").auto(120,"BPM",60,240),X=F.of(0);d.scheduleRepeat((()=>{X(X()+1)}),"4n"),F.on((e=>d.bpm.value=e),Z),F.on((e=>{e?d.pause(u()):d.start(u())}),P);const Y=(new f).toDestination(),D=new m(((e,t)=>{Y.triggerAttackRelease(t,"4n")}),[[0,"A1"],["0:1:0","C1"],["0:2:0","C1"],["0:3:0","C1"],["1:0:0","C1"],["1:1:0","C1"],["1:2:0","C1"],["1:3:0","C1"]]);D.loop=!0,D.loopEnd="2m",D.start(0);const H=(W=w,e=>(...t)=>e(W(),...t));var W;const K=(e,t=e)=>b(e,t),Q=H(v),V=H(x),ee=H(S),te=H(g),oe=H(y),re=H(E);k(Array);const ae=["I","J","L","O","S","T","Z"],ne={I:[K(-1,0),K(0,0),K(1,0),K(2,0)],T:[K(-1,0),K(0,0),K(1,0),K(0,1)],J:[K(0,-1),K(0,0),K(0,1),K(-1,1)],L:[K(0,-1),K(0,0),K(0,1),K(1,1)],O:[K(0,0),K(1,0),K(0,1),K(1,1)],S:[K(0,0),K(1,0),K(-1,1),K(0,1)],Z:[K(-1,0),K(0,0),K(0,1),K(1,1)]},se=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return K(o,t)},ie=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],ce=e=>ne[e.tetronimo].map((t=>Q(te(t,ie[e.rotation]),e.position))),pe=e=>{const t=ce(e).reduce((([[e,t],[o,r]],[a,n])=>[[Math.min(e,a),Math.min(t,n)],[Math.max(o,a),Math.max(r,n)]]),[[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]]);const o=V(oe(),re(oe(),t[0])),r=ee(V(oe(),re(t[1],K(15,15))));return n(n({},e),{position:Q(e.position,Q(o,r))})},le=K(-1,0),de=K(1,0),ue=K(0,-1),fe=K(0,1),me=()=>J(ae),he=({beat:e=0,type:t="hole",tetronimo:o=me(),position:r=se(),rotation:a=J([0,1,2,3])})=>pe({tetronimo:o,position:r,rotation:a,type:t,beat:e}),be=he({type:"player",beat:X()}),ve={tetronimoes:[be,he({tetronimo:be.tetronimo,beat:7})],currentBeat:X()},ge=F.of(ve),ye=(e,t)=>n(n({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type&&"O"!==e.tetronimo?pe(n(n({},e),{rotation:(e.rotation-t+4)%4})):e))}),we=(e,t)=>n(n({},e),{tetronimoes:e.tetronimoes.map((e=>"player"===e.type?pe(n(n({},e),{position:Q(e.position,t)})):e))});function xe(e,...t){const o=t.map(Se),r=B,a=A,n=e.reduce(((e,t,a)=>{const n=o[a-1];return`${e}${r(n)}${t}`}));return[...o.map(a),{frag:n}].reduce(Ee)}function Se(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function Ee(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?n(n({},e[t]),o):o,e}),n({},e))}let ke=1;const Be=()=>"u_"+ke++,Ae=["float","int","bool","vec2","vec3","vec4"],Me=e=>Ae.includes(e);const Ie=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},$e=xe`
${{depth:{enable:!1},primitive:"triangle strip",count:4,attributes:{position:[[-1,-1],[1,-1],[-1,1],[1,1]]},vert:"\nprecision highp float;\nattribute vec2 position;\nvarying vec2 uv;\nvoid main() {\n  uv = 0.5 * (position + 1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n",uniforms:{viewport:({viewportWidth:e,viewportHeight:t})=>[e,t]},scissor:{enable:!0,box:({viewportWidth:e,viewportHeight:t})=>{const o=Math.min(e,t),r=Math.max(e,t)-o;return n(n({},e>t?{x:r/2,y:0}:{x:0,y:r/2}),{width:o,height:o})}}}}

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
`,Fe=xe`
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
`,Oe=L.addFolder("graphics"),Te={I:Oe.auto("#ff9b0d","I").map(q),J:Oe.auto("#497bff","J").map(q),L:Oe.auto("#ff5d5d","L").map(q),O:Oe.auto("#00f0ff","O").map(q),S:Oe.auto("#00ff86","S").map(q),T:Oe.auto("#ff74d1","T").map(q),Z:Oe.auto("#fffb51","Z").map(q)},_e={blocks:M.range(0,3).map((()=>oe())),beat:0,color:[0,0,0],active:!1,invert:!1},je=ge.map((e=>M.takeLeft(8)(e.tetronimoes).map((t=>{const o="hole"===t.type,r=o?[1,1,1]:Te[t.tetronimo]();return{blocks:ce(t),color:r,beat:t.beat-e.currentBeat,active:!0,invert:o}})))).map((e=>{const t=M.range(1,8-e.length).map((()=>_e));return e.length<8?e.concat(t):e.slice(0,8)})),Ne=["a","b","c","d"],qe=xe`
    ${$e}
    ${Fe}
    ${{uniforms:M.range(1,8).reduce(((e,t,o)=>{for(const r of Object.keys(je()[o]))"blocks"!==r&&(e[`shapes[${o}].${r}`]=()=>je()[o][r]);return M.range(0,3).forEach((t=>{e[`shapes[${o}].${Ne[t]}`]=()=>je()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
      p *= (1. + beat * ${function(e,t=Be(),o){const r="controller"in e?e.controller.property:Me(t)?Be():t,a=N(e())?()=>q(e()):()=>e();return[r,{frag:`uniform ${null!=o?o:Me(t)?t:Ie(a())} ${r};`,uniforms:{[r]:a}}]}(Oe.auto(.2,"beatScale",.1,1))});
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
  `;let Re=!1,Ce=0;d.scheduleRepeat((()=>{ge(((e,t)=>{const o=t>0&&t%8==0&&he({type:"hole",beat:t+7}),r=[...e.tetronimoes].map((e=>"player"===e.type?n(n({},e),{beat:t,tetronimo:o?o.tetronimo:e.tetronimo}):e)).filter((e=>e.beat>=t));return{tetronimoes:o?[...r,o]:r,currentBeat:t}})(ge(),Ce)),Ce+=1}),"4n"),z.map((e=>{e.a&&ge(we(ge(),le)),e.s&&ge(we(ge(),fe)),e.d&&ge(we(ge(),de)),e.w&&ge(we(ge(),ue)),e.e&&ge(ye(ge(),1)),e.q&&ge(ye(ge(),-1)),e[" "]&&(Re||((async()=>{h()})(),Re=!0),P(!P()))}));const Le=I({extensions:["OES_texture_float"]}),Pe=new $;Pe.showPanel(0),document.body.appendChild(Pe.dom);const Ue=Le(qe);F.on((()=>{Le.poll(),Ue(),Pe.update()}),U);
