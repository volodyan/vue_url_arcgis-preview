"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[6238,7357],{5246:function(e,t,a){function n(e){return e=e||globalThis.location.hostname,u.some((t=>{var a;return null!=(null==(a=e)?void 0:a.match(t))}))}function s(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(l)||null!=t.match(c)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(o)||null!=t.match(r)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}a.d(t,{XO:function(){return n},pJ:function(){return s}});const l=/^devext.arcgis.com$/,o=/^qaext.arcgis.com$/,c=/^[\w-]*\.mapsdevext.arcgis.com$/,r=/^[\w-]*\.mapsqa.arcgis.com$/,u=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,l,o,/^jsapps.esri.com$/,c,r]},6238:function(e,t,a){a.r(t),a.d(t,{getPatternDescriptor:function(){return z},getSymbolLayerFill:function(){return C},previewSymbol3D:function(){return H}});var n=a(22434),s=a(36801),l=(a(35425),a(25585)),o=a(87441),c=a(27092),r=a(24446),u=a(597),p=a(85957),m=a(90017),i=a(7452),h=a(26258),y=a(19610),d=a(97455),L=a(37357);const f=22,v=120,b=80,M=40,g=20,Z=o.Z.getLogger("esri.symbols.support.previewSymbol3D");function w(e){const t=e.outline,a=(0,c.pC)(e.material)?e.material.color:null,n=(0,c.pC)(a)?a.toHex():null;if((0,c.Wi)(t)||"pattern"in t&&(0,c.pC)(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style)return"fill"===e.type&&"#ffffff"===n?{color:"#bdc3c7",width:.75}:null;const s=(0,u.F2)(t.size)||0;return{color:"rgba("+((0,c.pC)(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(s,b),style:"pattern"in t&&(0,c.pC)(t.pattern)&&"style"===t.pattern.type?(0,p.Sp)(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function x(e,t){const a=t&&t.resource,s=a&&a.href;if(e.thumbnail&&e.thumbnail.url)return Promise.resolve(e.thumbnail.url);if(s&&"object"!==t.type)return Promise.resolve((0,d.nf)(e,t));const l=(0,n.V)("esri/images/Legend/legend3dsymboldefault.png");return e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)?(0,L.resolveWebStyleSymbol)(e.styleOrigin,{portal:e.styleOrigin.portal},"webRef").catch((e=>e)).then((e=>{var t;return(null==e||null==(t=e.thumbnail)?void 0:t.url)||l})):Promise.resolve(l)}function k(e,t=1){const a=e.a,n=(0,s._Y)(e),l=n.h,o=n.s/t,c=100-(100-n.v)/t,{r:r,g:u,b:p}=(0,s.xr)({h:l,s:o,v:c});return[r,u,p,a]}function S(e){return"water"===e.type?(0,c.Wi)(e.color)?null:e.color:(0,c.Wi)(e.material)||(0,c.Wi)(e.material.color)?null:e.material.color}function C(e,t=0){const a=S(e);if(!a){if("fill"===e.type)return null;const a=p.Ne.r,n=(0,h.uH)(a,t);return[n,n,n,100]}const n=a.toRgba();for(let s=0;s<3;s++)n[s]=(0,h.uH)(n[s],t);return n}async function z(e,t){const a=e.style;return"none"===a?null:{type:"pattern",x:0,y:0,src:await(0,p.Od)((0,n.V)(`esri/symbols/patterns/${a}.png`),t.toCss(!0)),width:5,height:5}}function P(e){return e.outline?w(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function j(e,t){const a=S(e);if(!a)return null;let n="rgba(";return n+=(0,h.uH)(a.r,t)+",",n+=(0,h.uH)(a.g,t)+",",n+=(0,h.uH)(a.b,t)+",",n+a.a+");"}function D(e,t){const a=j(e,t);return a?"pattern"in e&&(0,c.pC)(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style?null:{color:a,width:Math.min(e.size?(0,u.F2)(e.size):.75,b),style:"pattern"in e&&(0,c.pC)(e.pattern)&&"style"===e.pattern.type?(0,p.Sp)(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?(0,u.F2)(2):e.join:null}:{}}function F(e,t,a){const n=.75*a;return{type:"linear",x1:n?.25*n:0,y1:n?.5*n:0,x2:n||4,y2:n?.5*n:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function N(e){const t=e.depth,a=e.height,n=e.width;return n&&t&&a&&n===t&&n<a}function E(e,t,a){const n=[];if(!e)return n;switch(e.type){case"icon":{const a=0,s=0,l=t,o=t;switch(e.resource&&e.resource.primitive||m.SI){case"circle":n.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:C(e,0),stroke:w(e)});break;case"square":n.push({shape:{type:"path",path:[{command:"M",values:[a,o]},{command:"L",values:[a,s]},{command:"L",values:[l,s]},{command:"L",values:[l,o]},{command:"Z",values:[]}]},fill:C(e,0),stroke:w(e)});break;case"triangle":n.push({shape:{type:"path",path:[{command:"M",values:[a,o]},{command:"L",values:[.5*l,s]},{command:"L",values:[l,o]},{command:"Z",values:[]}]},fill:C(e,0),stroke:w(e)});break;case"cross":n.push({shape:{type:"path",path:[{command:"M",values:[.5*l,s]},{command:"L",values:[.5*l,o]},{command:"M",values:[a,.5*o]},{command:"L",values:[l,.5*o]}]},stroke:P(e)});break;case"x":n.push({shape:{type:"path",path:[{command:"M",values:[a,s]},{command:"L",values:[l,o]},{command:"M",values:[l,s]},{command:"L",values:[a,o]}]},stroke:P(e)});break;case"kite":n.push({shape:{type:"path",path:[{command:"M",values:[a,.5*o]},{command:"L",values:[.5*l,s]},{command:"L",values:[l,.5*o]},{command:"L",values:[.5*l,o]},{command:"Z",values:[]}]},fill:C(e,0),stroke:w(e)})}break}case"object":switch(e.resource&&e.resource.primitive||i.SI){case"cone":{const s=F(C(e,0),C(e,-.6),a?g:t),l=(0,h.TE)(t,a);n.push({shape:l[0],fill:s}),n.push({shape:l[1],fill:s});break}case"inverted-cone":{const a=C(e,0),s=F(a,C(e,-.6),t),l=(0,h.DY)(t);n.push({shape:l[0],fill:s}),n.push({shape:l[1],fill:a});break}case"cube":{const s=(0,h.Pc)(t,a);n.push({shape:s[0],fill:C(e,0)}),n.push({shape:s[1],fill:C(e,-.3)}),n.push({shape:s[2],fill:C(e,-.5)});break}case"cylinder":{const s=F(C(e,0),C(e,-.6),a?g:t),l=(0,h.EB)(t,a);n.push({shape:l[0],fill:s}),n.push({shape:l[1],fill:s}),n.push({shape:l[2],fill:C(e,0)});break}case"diamond":{const a=(0,h.XX)(t);n.push({shape:a[0],fill:C(e,-.3)}),n.push({shape:a[1],fill:C(e,0)}),n.push({shape:a[2],fill:C(e,-.3)}),n.push({shape:a[3],fill:C(e,-.7)});break}case"sphere":{const a=F(C(e,0),C(e,-.6));a.x1=0,a.y1=0,a.x2=.25*t,a.y2=.25*t,n.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:a});break}case"tetrahedron":{const a=(0,h.tp)(t);n.push({shape:a[0],fill:C(e,-.3)}),n.push({shape:a[1],fill:C(e,0)}),n.push({shape:a[2],fill:C(e,-.6)});break}}break}return n}function O(e){return"icon"===e.type?"multiply":"tint"}function J(e,t){const a=t&&t.size?(0,u.F2)(t.size):null,n=t&&t.maxSize?(0,u.F2)(t.maxSize):null,s=t&&t.disableUpsampling,l=e.symbolLayers,o=[];let c=0,p=0;const m=l.getItemAt(l.length-1);let i;return m&&"icon"===m.type&&(i=m.size&&(0,u.F2)(m.size)),l.forEach((l=>{if("icon"!==l.type&&"object"!==l.type)return;const r="icon"===l.type?l.size&&(0,u.F2)(l.size):0,m=a||r?Math.ceil(Math.min(a||r,n||v)):f;if(l&&l.resource&&l.resource.href){const t=x(e,l).then((function(e){const t=l.get("material.color"),a=O(l);return(0,y.r)(e,m,t,a,s)})).then((function(e){const t=e.width,a=e.height;return c=Math.max(c,t),p=Math.max(p,a),[{shape:{type:"image",x:0,y:0,width:t,height:a,src:e.url},fill:null,stroke:null}]}));o.push(t)}else{var h;let e=m;"icon"===l.type&&i&&a&&(e=m*(r/i));const n="tall"===(null==t?void 0:t.symbolConfig)||(null==t||null==(h=t.symbolConfig)?void 0:h.isTall)||"object"===l.type&&N(l);c=Math.max(c,n?g:e),p=Math.max(p,e),o.push(Promise.resolve(E(l,e,n)))}})),(0,r.as)(o).then((function(e){const a=[];return e.forEach((function(e){e.value?a.push(e.value):e.error&&Z.warn("error while building swatchInfo!",e.error)})),(0,y.w)(a,[c,p],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}function W(e,t){const a=e.symbolLayers,n=[],s=(0,d.YW)(e),l=t&&t.size?(0,u.F2)(t.size):null,o=(t&&t.maxSize?(0,u.F2)(t.maxSize):null)||b;let r,p=0,m=0;return a.forEach(((e,t)=>{if(!e)return;if("line"!==e.type&&"path"!==e.type)return;const a=[];switch(e.type){case"line":{const n=D(e,0);if((0,c.Wi)(n))break;const s=n&&n.width||0;0===t&&(r=s);const u=Math.min(l||s,o),i=0===t?u:l?u*(s/r):u,h=i>M/2?2*i:M;m=Math.max(m,i),p=Math.max(p,h),n.width=i,a.push({shape:{type:"path",path:[{command:"M",values:[0,.5*m]},{command:"L",values:[p,.5*m]}]},stroke:n});break}case"path":{const t=Math.min(l||f,o),n=C(e,0),s=C(e,-.2),c=j(e,-.4),r=c?{color:c,width:1}:{};if("quad"===e.profile){const t=e.width,l=e.height,o=(0,h.eb)(t&&l?t/l:1,0===l,0===t),c={...r,join:"bevel"};a.push({shape:o[0],fill:s,stroke:c}),a.push({shape:o[1],fill:s,stroke:c}),a.push({shape:o[2],fill:n,stroke:c})}else a.push({shape:h.JZ.pathSymbol3DLayer[0],fill:s,stroke:r}),a.push({shape:h.JZ.pathSymbol3DLayer[1],fill:n,stroke:r});m=Math.max(m,t),p=m}}n.push(a)})),Promise.resolve((0,y.w)(n,[p,m],{node:t&&t.node,scale:s,opacity:t&&t.opacity}))}async function $(e,t){const a="mesh-3d"===e.type,n=e.symbolLayers,s=t&&t.size?(0,u.F2)(t.size):null,l=t&&t.maxSize?(0,u.F2)(t.maxSize):null,o=s||f,r=[];let p=0,m=0,i=!1;for(let u=0;u<n.length;u++){const e=n.getItemAt(u),t=[];if(a&&"fill"!==e.type)continue;const s=h.JZ.fill[0];switch(e.type){case"fill":{const n=w(e),r=Math.min(o,l||v);p=Math.max(p,r),m=Math.max(m,r),i=!0;let u=C(e,0);const h="pattern"in e&&e.pattern,y=S(e);!a&&(0,c.pC)(h)&&"style"===h.type&&"solid"!==h.style&&y&&(u=await z(h,y)),t.push({shape:s,fill:u,stroke:n});break}case"line":{const a=D(e,0);if((0,c.Wi)(a))break;const n={stroke:a,shape:s};p=Math.max(p,f),m=Math.max(m,f),t.push(n);break}case"extrude":{const a={join:"round",width:1,...D(e,-.4)},n=C(e,0),s=C(e,-.2),c=Math.min(o,l||v),r=(0,h.EV)(c);a.width=1,t.push({shape:r[0],fill:s,stroke:a}),t.push({shape:r[1],fill:s,stroke:a}),t.push({shape:r[2],fill:n,stroke:a});const u=f,i=.7*f+.5*c;p=Math.max(p,u),m=Math.max(m,i);break}case"water":{const a=S(e),n=k(a),s=k(a,2),c=k(a,3),r=(0,h.ht)();i=!0,t.push({shape:r[0],fill:n}),t.push({shape:r[1],fill:s}),t.push({shape:r[2],fill:c});const u=Math.min(o,l||v);p=Math.max(p,u),m=Math.max(m,u);break}}r.push(t)}return Promise.resolve((0,y.w)(r,[p,m],{node:t&&t.node,scale:i,opacity:t&&t.opacity}))}function H(e,t){if(0===e.symbolLayers.length)return Promise.reject(new l.Z("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return J(e,t);case"line-3d":return W(e,t);case"polygon-3d":case"mesh-3d":return $(e,t)}return Promise.reject(new l.Z("symbolPreview: swatchInfo3D","symbol not supported."))}},26258:function(e,t,a){a.d(t,{DY:function(){return m},EB:function(){return u},EV:function(){return o},JZ:function(){return s},Pc:function(){return r},TE:function(){return p},XX:function(){return i},dc:function(){return d},eb:function(){return l},ht:function(){return c},tp:function(){return h},uH:function(){return y}});var n=a(47038);const s={fill:[{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"}],squareFill:[{type:"path",path:"M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 Z"}],pathSymbol3DLayer:[{type:"path",path:"M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z"},{type:"circle",cx:-2,cy:10,r:5}],extrudeSymbol3DLayer:[{type:"path",path:"M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z"},{type:"path",path:"M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z"},{type:"path",path:"M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z"}],cone:[{type:"path",path:"M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z"}],tallCone:[{type:"path",path:"M 0,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 0,-9 Z"}],invertedCone:[{type:"path",path:"M 0,7 L -8,-8 L 8,-8 Z"},{type:"path",path:"M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z"}],cube:[{type:"path",path:"M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z"},{type:"path",path:"M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z"},{type:"path",path:"M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z"}],tallCube:[{type:"path",path:"M -3.5,-8.5 L 0,-9.5 L 3.5,-8.5 L 0,-7.5 L -3.5,-8.5 Z"},{type:"path",path:"M -3.5,-8.5 L 0,-7.5 L 0,9 L -3.5,8 L -3.5,-8.5 Z"},{type:"path",path:"M 0,-7.5 L 3.5,-8.5 L 3.5,8 L 0,9 L 0,-7.5 Z"}],cylinder:[{type:"path",path:"M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:8,ry:2}],tallCylinder:[{type:"path",path:"M -3.5,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 3.5,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:3.5,ry:1}],diamond:[{type:"path",path:"M 0,-10 L 10,-1 L -1,1 L 0,-10 Z"},{type:"path",path:"M 0,-10 L -1,1 L -8,-1 L 0,-10 Z"},{type:"path",path:"M -1,1 L 0,10 L -8,-1 L -1,1 Z"},{type:"path",path:"M -1,0 L 0,10 L 10,-1 L -1,1 Z"}],tetrahedron:[{type:"path",path:"M 0,-10 L 10,7 L 0,0 L 0,-10 Z"},{type:"path",path:"M 0,-10 L 0,0 L -8,7 L 0,-10 Z"},{type:"path",path:"M 10,7 L 0,0 L -8,7 L 10,7 Z"}]};function l(e,t,a){const n=22;let s=n,l=n;e<1?s*=.75:e>1&&(l*=1.25);const o=0,c=0;let r=n,u=n;return t&&a&&(s=l=r=u=0),[{type:"path",path:[{command:"M",values:[r,o]},{command:"L",values:[a?r:.875*r,o]},{command:"L",values:[a?s-.5*r:c,l-.5*u]},{command:"L",values:[s-.5*r,l-.5*u]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[r,o]},{command:"L",values:[r,t?o:.125*u]},{command:"L",values:[s-.5*r,t?l-.5*u:u]},{command:"L",values:[s-.5*r,l-.5*u]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[s-.5*r,l-.5*u]},{command:"L",values:[a?s-.5*r:c,l-.5*u]},{command:"L",values:[a?s-.5*r:c,t?l-.5*u:u]},{command:"L",values:[s-.5*r,t?l-.5*u:u]},{command:"Z",values:[]}]}]}function o(e){const t=22,a=.5*e,n=0,s=0;return[{type:"path",path:[{command:"M",values:[s,.7*t*.5]},{command:"L",values:[.3*t,.7*t]},{command:"L",values:[.3*t,.7*t+a]},{command:"L",values:[s,.7*t+a-.7*t*.5]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*t,.7*t]},{command:"L",values:[.3*t,.7*t+a]},{command:"L",values:[t,a]},{command:"L",values:[t,n]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*t,n]},{command:"L",values:[t,n]},{command:"L",values:[.3*t,.7*t]},{command:"L",values:[s,.7*t*.5]},{command:"Z",values:[]}]}]}function c(){return[{type:"path",path:"M80,80.2v-27c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4C8.3,59.3,5.7,58,3.9,56c-1.1-1.2-2.4-2.1-3.9-2.8v27"},{type:"path",path:"M11,59.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8v-24c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-1.1-1.2-2.4-2.1-3.9-2.8v24c1.5,0.7,2.8,1.6,3.9,2.8C5.7,58,8.3,59.3,11,59.4z"},{type:"path",path:"M11,35.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8V3.6c-1.5,0.7-2.8,1.6-3.9,2.8c-2.2,2.1-4.6,3.4-7.1,3.4s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6S42.5,9.9,40,9.9s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.5,0-5-1.3-7.1-3.4C2.8,5.3,1.4,4.3,0,3.6v25.6c1.5,0.7,2.8,1.6,3.9,2.8C5.7,34.1,8.3,35.3,11,35.4z"}]}function r(e,t){let a=t?20:e;const n=t?4:6;a-=a<=22?.5*n:n;const s=0,l=0,o=t?.35*a:.5*a;return[{type:"path",path:[{command:"M",values:[.5*a,s]},{command:"L",values:[a,.5*o]},{command:"L",values:[.5*a,o]},{command:"L",values:[l,.5*o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[s,.5*o]},{command:"L",values:[.5*a,o]},{command:"L",values:[.5*a,e]},{command:"L",values:[l,e-.5*o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.5*a,o]},{command:"L",values:[.5*a,e]},{command:"L",values:[a,e-.5*o]},{command:"L",values:[a,.5*o]},{command:"Z",values:[]}]}]}function u(e,t){let a=t?20:e;const n=t?4:6;a-=a<=22?.5*n:n;const s=.5*a,l=.15*a,o=0,c=e-l;return[{type:"ellipse",cx:.5*a,cy:c,rx:s,ry:l},{type:"path",path:[{command:"M",values:[o,l]},{command:"L",values:[o,c]},{command:"L",values:[a,c]},{command:"L",values:[a,l]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*a,cy:l,rx:s,ry:l}]}function p(e,t){let a=t?20:e;const n=t?4:6;a-=a<=22?.5*n:n;const s=.15*a,l=e-s;return[{type:"ellipse",cx:.5*a,cy:l,rx:.5*a,ry:s},{type:"path",path:[{command:"M",values:[.5*a,0]},{command:"L",values:[a,l]},{command:"L",values:[0,l]},{command:"Z",values:[]}]}]}function m(e){let t=e;const a=6;t-=t<22?.5*a:a;const n=.15*t,s=0;return[{type:"path",path:[{command:"M",values:[0,s]},{command:"L",values:[t,s]},{command:"L",values:[.5*t,e-n]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*t,cy:s,rx:.5*t,ry:n}]}function i(e){let t=e;const a=e,n=4;t-=t<22?.5*n:n;const s=0,l=0,o=t,c=a,r=Math.floor(e/10)-1||1;return[{type:"path",path:[{command:"M",values:[.45*o,s]},{command:"L",values:[o,.5*c-r]},{command:"L",values:[.45*o-r,.5*c+r]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*o,s]},{command:"L",values:[.45*o-r,.5*c+r]},{command:"L",values:[l,.5*c-r]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[l,.5*c-r]},{command:"L",values:[.45*o-r,.5*c+r]},{command:"L",values:[.45*o,a]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*o,a]},{command:"L",values:[o,.5*c-r]},{command:"L",values:[.45*o-r,.5*c+r]},{command:"Z",values:[]}]}]}function h(e){const t=2;let a=e;a-=a<22?.5*t:t;const n=0,s=0;return[{type:"path",path:[{command:"M",values:[.45*e,n]},{command:"L",values:[e,a]},{command:"L",values:[.45*e,.6*a]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*e,n]},{command:"L",values:[.45*e,.6*a]},{command:"L",values:[s,a]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[s,a]},{command:"L",values:[.45*e,.6*a]},{command:"L",values:[e,a]},{command:"Z",values:[]}]}]}function y(e,t){const a=.75;return Math.round(Math.min(Math.max(e+255*t*a,0),255))}function d(e,t){if("type"in e&&("linear"===e.type||"pattern"===e.type))return e;const a=new n.Z(e);return new n.Z([y(a.r,t),y(a.g,t),y(a.b,t),a.a])}},37357:function(e,t,a){a.r(t),a.d(t,{fetchSymbolFromStyle:function(){return y},resolveWebStyleSymbol:function(){return h}});var n=a(40689),s=a(5246),l=a(25585),o=a(58476),c=a(88096),r=a(93554),u=a(95025),p=a(64019),m=a(66328),i=a(60298);function h(e,t,a,n){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?d(e,t,n):(0,m.n2)(e,t,n).then((s=>y(s,e.name,t,a,n))):Promise.reject(new l.Z("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function y(e,t,a,h,y){const d=e.data,L={portal:a&&a.portal||c.Z.getDefault(),url:(0,o.mN)(e.baseUrl),origin:"portal-item"},f=d.items.find((e=>e.name===t));if(!f){const e=`The symbol name '${t}' could not be found`;return Promise.reject(new l.Z("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let v=(0,r.f)((0,m.v9)(f,h),L),b=f.thumbnail&&f.thumbnail.href;const M=f.thumbnail&&f.thumbnail.imageData;(0,s.XO)()&&(v=(0,s.pJ)(v),b=(0,s.pJ)(b));const g={portal:a.portal,url:(0,o.mN)((0,o.Yd)(v)),origin:"portal-item"};return(0,m.EJ)(v,y).then((s=>{const l="cimRef"===h?(0,m.KV)(s.data):s.data,o=(0,u.i)(l,g);if(o&&(0,n.dU)(o)){if(b){const e=(0,r.f)(b,L);o.thumbnail=new i.Z({url:e})}else M&&(o.thumbnail=new i.Z({url:`data:image/png;base64,${M}`}));e.styleUrl?o.styleOrigin=new p.Z({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(o.styleOrigin=new p.Z({portal:a.portal,styleName:e.styleName,name:t}))}return o}))}function d(e,t,a){const n=m.wm.replace(/\{SymbolName\}/gi,e.name);return(0,m.EJ)(n,a).then((e=>{const a=(0,m.KV)(e.data);return(0,u.i)(a,{portal:t.portal,url:(0,o.mN)((0,o.Yd)(n)),origin:"portal-item"})}))}}}]);