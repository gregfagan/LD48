var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,n=(e,n)=>{for(var s in n||(n={}))t.call(n,s)&&a(e,s,n[s]);if(o)for(var s of o(n))r.call(n,s)&&a(e,s,n[s]);return e};import{l as s,a as i,p as c,e as p,G as l,T as d,n as u,S as f,P as m,s as h,f as v,b,t as g,z as y,c as w,d as x,h as S,g as k,R as B,r as $,i as A}from"./vendor.9b9e80c2.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,n)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){n(new Error(`Failed to import: ${e}`)),a(c)},onload(){o(self[t].moduleMap[s]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/LD48/assets/");const E=s.stream.bind({});function F(e,t){const o=E.of();return e.addEventListener(t,o),o}function O(e){let t;return E.combine(((e,o)=>{void 0!==t?(o(e()-t),t=e()):t=e()}),[e])}Object.assign(E,n(n({},s),{of:E}));const I=E.merge(E(document.hasFocus()),E.merge(F(window,"focus"),F(window,"blur")).map(c("type")).map(p("focus"))),j=/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i,q=e=>"string"==typeof e&&j.test(e);function M(e){const t=e.match(j);if(null===t)throw new Error("cannot read color");return[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}class T{constructor(){return new Proxy({},{get(e,t){var o,r;return"$"===t?e:null!=(r=null==(o=e[t])?void 0:o.call(e))?r:void 0},set(e,t,o){const r=e[t];return r?r(o):e[t]=E(o),!0}})}}class C extends l{constructor(e=new T){super(),this.store=e}auto(e,t,...o){const r=this.store.$;if(r[t])return r[t];this.store[t]=e;const a=r[t];return a.controller=q(e)?this.addColor(this.store,t):this.add(this.store,t,...o),a}addFolder(e){const t=super.addFolder(e);return Object.setPrototypeOf(t,C.prototype),t.store=new T,t}}const L=new C;L.domElement.parentElement.style.zIndex=Number.MAX_SAFE_INTEGER.toString();const P=E.of(!0),R=function(e){const t=E.combine(((e,t)=>{if(!e())return function(){const e=performance.now(),t=E(),o=E(),r=E.merge(E.of(e),E.immediate(E.combine((e=>(t(requestAnimationFrame(e)),e())),[o])));return E.on((()=>cancelAnimationFrame(t())),r.end),r}().pipe(O).map(Math.abs);t()&&t().end(!0)}),[e]),o=(r=t,E.combine(((e,t)=>{e().map(t)}),[r]));var r;return E.scan(i,0,o)}(P);O(R).map((e=>e/1e3)),E.on((e=>{e||P(!0)}),I);const U=(_=document,E.scan(((e,t)=>(e[t.key]="keydown"===t.type,e)),{},E.merge(F(_,"keydown"),F(_,"keyup"))));var _;const N=L.addFolder("audio").auto(120,"BPM",60,240),z=E.of(0);d.scheduleRepeat((()=>{z(z()+1)}),"4n"),E.on((e=>d.bpm.value=e),N),E.on((e=>{e?d.pause(u()):d.start(u())}),P);const Z=(new f).toDestination();new m(((e,t)=>{Z.triggerAttackRelease(t,"4n")}),["C5","C4","C4","C4","C4","C4","B3","G#3"]).start(0);new Array(16).fill(new Array(16).fill(0)),new Array(16).fill(new Array(16).fill(1));const G=(J=w,e=>(...t)=>e(J(),...t));var J;const Y=(e,t=e)=>v(e,t),D=G(b),H=G(g),W=G(y),X={I:[Y(-1,0),Y(0,0),Y(1,0),Y(2,0)],T:[Y(-1,0),Y(0,0),Y(1,0),Y(0,1)],J:[Y(0,-1),Y(0,0),Y(0,1),Y(-1,1)],L:[Y(0,-1),Y(0,0),Y(0,1),Y(1,1)],O:[Y(0,0),Y(1,0),Y(0,1),Y(1,1)],S:[Y(0,0),Y(1,0),Y(-1,1),Y(0,1)],Z:[Y(-1,0),Y(0,0),Y(0,1),Y(1,1)]},K=e=>{const t=Math.floor(14*Math.random())+2,o=Math.floor(14*Math.random())+2;return Y(o,t)};x(Array);const Q=Y(-1,0),V=Y(1,0),ee=Y(0,-1),te=Y(0,1),oe={tetronimoes:[{tetronimo:"Z",position:K(),type:"player",rotation:0,beat:z()}],currentBeat:z()},re=E.of(oe),ae=(e,t)=>{const o=e.tetronimoes.map((e=>{if("player"===e.type){const o=e.rotation+t;return n(n({},e),{rotation:o>3?0:o<0?3:o})}return e}));return n(n({},e),{tetronimoes:o})},ne=(e,t)=>{const o=e.tetronimoes.map((e=>{if("player"===e.type){const a=D(e.position,t),s=(o=e.tetronimo,r=a,X[o].map((e=>D(r,e))));return a[0]=s.some((([e])=>e<0||e>=16))?e.position[0]:a[0],a[1]=s.some((([,e])=>e<0||e>=16))?e.position[1]:a[1],n(n({},e),{position:a})}var o,r;return e}));return n(n({},e),{tetronimoes:o})};function se(e,...t){const o=t.map(ie),r=S,a=k,n=e.reduce(((e,t,a)=>{const n=o[a-1];return`${e}${r(n)}${t}`}));return[...o.map(a),{frag:n}].reduce(ce)}function ie(e){if("number"==typeof e)return[Number.isInteger(e)?e.toString():e.toFixed(6),{}];if("string"==typeof e)return[e,{}];if("object"==typeof e&&!Array.isArray(e))return["",e];if(Array.isArray(e)&&2===e.length)return e;throw new Error("invalid glsl template parameter")}function ce(e,t){return Object.entries(t).reduce(((e,[t,o])=>{var r;return e[t]="string"==typeof o?((null!=(r=e[t])?r:"")+"\n"+o).trim():"object"==typeof o&&null!==o?n(n({},e[t]),o):o,e}),n({},e))}let pe=1;const le=()=>"u_"+pe++,de=["float","int","bool","vec2","vec3","vec4"],ue=e=>de.includes(e);const fe=e=>{if("number"==typeof e)return"float";if(function(e){return"boolean"==typeof e}(e))return"bool";if(function(e){return Array.isArray(e)&&2===e.length}(e))return"vec2";if(function(e){return Array.isArray(e)&&3===e.length}(e))return"vec3";if(function(e){return Array.isArray(e)&&4===e.length}(e))return"vec4";throw new Error("could not infer uniform type")},me=se`
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
`,he=se`
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
`,ve=L.addFolder("graphics"),be={I:ve.auto("#ff9b0d","I").map(M),J:ve.auto("#497bff","J").map(M),L:ve.auto("#ff5d5d","L").map(M),O:ve.auto("#00f0ff","O").map(M),S:ve.auto("#00ff86","S").map(M),T:ve.auto("#ff74d1","T").map(M),Z:ve.auto("#fffb51","Z").map(M)},ge={blocks:B.range(0,3).map((()=>W())),beat:0,color:[0,0,0],active:!1,invert:!1},ye=[[1,0,0,1],[0,-1,1,0],[-1,0,0,-1],[0,1,-1,0]],we=re.map((e=>B.takeLeft(8)(e.tetronimoes).map((t=>{const o=X[t.tetronimo].map((e=>D(H(e,ye[t.rotation]),t.position))),r="hole"===t.type;return{blocks:o,color:r?[1,1,1]:be[t.tetronimo](),beat:t.beat-e.currentBeat,active:!0,invert:r}})))).map((e=>{const t=B.range(1,8-e.length).map((()=>ge));return e.length<8?e.concat(t):e.slice(0,8)})),xe=["a","b","c","d"],Se=se`
    ${me}
    ${he}
    ${{uniforms:B.range(1,8).reduce(((e,t,o)=>{for(const r of Object.keys(we()[o]))"blocks"!==r&&(e[`shapes[${o}].${r}`]=()=>we()[o][r]);return B.range(0,3).forEach((t=>{e[`shapes[${o}].${xe[t]}`]=()=>we()[o].blocks[t]})),e}),{}),depth:{enable:!1}}}
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
      p *= (1. + beat * ${function(e,t=le(),o){const r="controller"in e?e.controller.property:ue(t)?le():t,a=q(e())?()=>M(e()):()=>e();return[r,{frag:`uniform ${null!=o?o:ue(t)?t:fe(a())} ${r};`,uniforms:{[r]:a}}]}(ve.auto(.2,"beatScale",.1,1))});
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
  `;let ke=!1,Be=0;d.scheduleRepeat((()=>{re(((e,t)=>{const o=[];var r;return e.tetronimoes.forEach((e=>{"player"!==e.type?e.beat>=t&&o.push(e):o.push(n(n({},e),{beat:t}))})),t%8==0&&o.push({tetronimo:"Z",position:K(),type:"hole",rotation:(r=[0,1,2,3],r[Math.floor(Math.random()*r.length)]),beat:t+7}),{tetronimoes:o,currentBeat:t}})(re(),Be)),Be+=1}),"4n"),U.map((e=>{e.a&&re(ne(re(),Q)),e.s&&re(ne(re(),te)),e.d&&re(ne(re(),V)),e.w&&re(ne(re(),ee)),e.e&&re(ae(re(),1)),e.q&&re(ae(re(),-1)),e[" "]&&(ke||((async()=>{h()})(),ke=!0),P(!P()))}));const $e=$({extensions:["OES_texture_float"]}),Ae=new A;Ae.showPanel(0),document.body.appendChild(Ae.dom);const Ee=$e(Se);E.on((()=>{$e.poll(),Ee(),Ae.update()}),R);
