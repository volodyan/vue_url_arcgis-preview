"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[8910],{5507:function(t,n,e){e.d(n,{QB:function(){return h}});var i=e(57787),s=e(27092),r=e(40920),o=e(26955);class h{constructor(t=9,n){this.compareMinX=c,this.compareMinY=d,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}destroy(){this.clear(),y.prune(),B.prune(),M.prune(),b.prune()}all(t){this._all(this.data,t)}search(t,n){let e=this.data;const i=this.toBBox;if(p(t,e))for(y.clear();e;){for(let s=0,r=e.children.length;s<r;s++){const r=e.children[s],o=e.leaf?i(r):r;p(t,o)&&(e.leaf?n(r):_(t,o)?this._all(r,n):y.push(r))}e=y.pop()}}collides(t){let n=this.data;const e=this.toBBox;if(!p(t,n))return!1;for(y.clear();n;){for(let i=0,s=n.children.length;i<s;i++){const s=n.children[i],r=n.leaf?e(s):s;if(p(t,r)){if(n.leaf||_(t,r))return!0;y.push(s)}}n=y.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let n=0,e=t.length;n<e;n++)this.insert(t[n]);return this}let n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const t=this.data;this.data=n,n=t}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new X([]),this}remove(t){if(!t)return this;let n,e=this.data,r=null,o=0,h=!1;const a=this.toBBox(t);for(M.clear(),b.clear();e||M.length>0;){var u;if(e||(e=(0,s.j0)(M.pop()),r=M.data[M.length-1],o=null!=(u=b.pop())?u:0,h=!0),e.leaf&&(n=(0,i.cq)(e.children,t,e.children.length,e.indexHint),-1!==n))return e.children.splice(n,1),M.push(e),this._condense(M),this;h||e.leaf||!_(e,a)?r?(o++,e=r.children[o],h=!1):e=null:(M.push(e),b.push(o),o=0,r=e,e=e.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,n){let e=t;for(B.clear();e;){var i;if(!0===e.leaf)for(const t of e.children)n(t);else B.pushArray(e.children);e=null!=(i=B.pop())?i:null}}_build(t,n,e,i){const s=e-n+1;let r=this._maxEntries;if(s<=r){const i=new X(t.slice(n,e+1));return a(i,this.toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new w([]);o.height=i;const h=Math.ceil(s/r),u=h*Math.ceil(Math.sqrt(r));I(t,n,e,u,this.compareMinX);for(let a=n;a<=e;a+=u){const n=Math.min(a+u-1,e);I(t,a,n,h,this.compareMinY);for(let e=a;e<=n;e+=h){const s=Math.min(e+h-1,n);o.children.push(this._build(t,e,s,i-1))}}return a(o,this.toBBox),o}_chooseSubtree(t,n,e,i){for(;i.push(n),!0!==n.leaf&&i.length-1!==e;){let e,i=1/0,s=1/0;for(let r=0,o=n.children.length;r<o;r++){const o=n.children[r],h=m(o),a=x(t,o)-h;a<s?(s=a,i=h<i?h:i,e=o):a===s&&h<i&&(i=h,e=o)}n=e||n.children[0]}return n}_insert(t,n,e){const i=this.toBBox,s=e?t:i(t);M.clear();const r=this._chooseSubtree(s,this.data,n,M);for(r.children.push(t),l(r,s);n>=0&&M.data[n].children.length>this._maxEntries;)this._split(M,n),n--;this._adjustParentBBoxes(s,M,n)}_split(t,n){const e=t.data[n],i=e.children.length,s=this._minEntries;this._chooseSplitAxis(e,s,i);const r=this._chooseSplitIndex(e,s,i);if(!r)return;const o=e.children.splice(r,e.children.length-r),h=e.leaf?new X(o):new w(o);h.height=e.height,a(e,this.toBBox),a(h,this.toBBox),n?t.data[n-1].children.push(h):this._splitRoot(e,h)}_splitRoot(t,n){this.data=new w([t,n]),this.data.height=t.height+1,a(this.data,this.toBBox)}_chooseSplitIndex(t,n,e){let i,s,r;i=s=1/0;for(let o=n;o<=e-n;o++){const n=u(t,0,o,this.toBBox),h=u(t,o,e,this.toBBox),a=g(n,h),l=m(n)+m(h);a<i?(i=a,r=o,s=l<s?l:s):a===i&&l<s&&(s=l,r=o)}return r}_chooseSplitAxis(t,n,e){const i=t.leaf?this.compareMinX:c,s=t.leaf?this.compareMinY:d;this._allDistMargin(t,n,e,i)<this._allDistMargin(t,n,e,s)&&t.children.sort(i)}_allDistMargin(t,n,e,i){t.children.sort(i);const s=this.toBBox,r=u(t,0,n,s),o=u(t,e-n,e,s);let h=f(r)+f(o);for(let a=n;a<e-n;a++){const n=t.children[a];l(r,t.leaf?s(n):n),h+=f(r)}for(let a=e-n-1;a>=n;a--){const n=t.children[a];l(o,t.leaf?s(n):n),h+=f(o)}return h}_adjustParentBBoxes(t,n,e){for(let i=e;i>=0;i--)l(n.data[i],t)}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(0===e.children.length)if(n>0){const s=t.data[n-1],r=s.children;r.splice((0,i.cq)(r,e,r.length,s.indexHint),1)}else this.clear();else a(e,this.toBBox)}}_initFormat(t){const n=["return a"," - b",";"];this.compareMinX=new Function("a","b",n.join(t[0])),this.compareMinY=new Function("a","b",n.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,n){u(t,0,t.children.length,n,t)}function u(t,n,e,i,s){s||(s=new X([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=n;o<e;o++)r=t.children[o],l(s,t.leaf?i(r):r);return s}function l(t,n){t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY)}function c(t,n){return t.minX-n.minX}function d(t,n){return t.minY-n.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function x(t,n){return(Math.max(n.maxX,t.maxX)-Math.min(n.minX,t.minX))*(Math.max(n.maxY,t.maxY)-Math.min(n.minY,t.minY))}function g(t,n){const e=Math.max(t.minX,n.minX),i=Math.max(t.minY,n.minY),s=Math.min(t.maxX,n.maxX),r=Math.min(t.maxY,n.maxY);return Math.max(0,s-e)*Math.max(0,r-i)}function _(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function p(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function I(t,n,e,i,r){const h=[n,e];for(;h.length;){const n=(0,s.j0)(h.pop()),e=(0,s.j0)(h.pop());if(n-e<=i)continue;const a=e+Math.ceil((n-e)/i/2)*i;(0,o.q)(t,a,e,n,r),h.push(e,a,a,n)}}const y=new r.Z,B=new r.Z,M=new r.Z,b=new r.Z({deallocator:void 0});class v{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class Y extends v{constructor(){super(...arguments),this.height=1,this.indexHint=new i.SO}}class X extends Y{constructor(t){super(),this.children=t,this.leaf=!0}}class w extends Y{constructor(t){super(),this.children=t,this.leaf=!1}}},630:function(t,n,e){e.d(n,{N:function(){return i}});const i={convertToGEGeometry:s,exportPoint:o,exportPolygon:a,exportPolyline:l,exportMultipoint:d,exportExtent:f};function s(t,n){return null==n?null:t.convertJSONToGeometry(n)}class r{constructor(t,n,e){this.x=t,this.y=n,this.spatialReference=e,this.z=void 0,this.m=void 0}}function o(t,n,e){const i=new r(t.getPointX(n),t.getPointY(n),e),s=t.hasZ(n),o=t.hasM(n);return s&&(i.z=t.getPointZ(n)),o&&(i.m=t.getPointM(n)),i}class h{constructor(t,n,e,i){this.rings=t,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),i&&(this.hasM=i)}}function a(t,n,e){return new h(t.exportPaths(n),e,t.hasZ(n),t.hasM(n))}class u{constructor(t,n,e,i){this.paths=t,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),i&&(this.hasM=i)}}function l(t,n,e){return new u(t.exportPaths(n),e,t.hasZ(n),t.hasM(n))}class c{constructor(t,n,e,i){this.points=t,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),i&&(this.hasM=i)}}function d(t,n,e){return new c(t.exportPoints(n),e,t.hasZ(n),t.hasM(n))}class m{constructor(t,n,e,i,s){this.xmin=t,this.ymin=n,this.xmax=e,this.ymax=i,this.spatialReference=s,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}function f(t,n,e){const i=t.hasZ(n),s=t.hasM(n),r=new m(t.getXMin(n),t.getYMin(n),t.getXMax(n),t.getYMax(n),e);if(i){const e=t.getZExtent(n);r.zmin=e.vmin,r.zmax=e.vmax}if(s){const e=t.getMExtent(n);r.mmin=e.vmin,r.mmax=e.vmax}return r}},58798:function(t,n,e){e.d(n,{G6:function(){return E},Ie:function(){return Z},J9:function(){return N},RF:function(){return v},U1:function(){return S},vY:function(){return a},ym:function(){return w}});var i=e(27092),s=e(64316);const r=(t,n,e)=>[n,e],o=(t,n,e)=>[n,e,t[2]],h=(t,n,e)=>[n,e,t[2],t[3]];function a(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:(0,i.pC)(t.extent)?[t.extent.xmin,t.extent.ymax]:[0,0]}:null}function u({scale:t,translate:n},e){return Math.round((e-n[0])/t[0])}function l({scale:t,translate:n},e){return Math.round((n[1]-e)/t[1])}function c(t,n,e){const i=[];let s,r,o,h;for(let a=0;a<e.length;a++){const c=e[a];a>0?(o=u(t,c[0]),h=l(t,c[1]),o===s&&h===r||(i.push(n(c,o-s,h-r)),s=o,r=h)):(s=u(t,c[0]),r=l(t,c[1]),i.push(n(c,s,r)))}return i.length>0?i:null}function d(t,n,e,i){return c(t,e?i?h:o:i?o:r,n)}function m(t,n,e,i){const s=[],a=e?i?h:o:i?o:r;for(let r=0;r<n.length;r++){const e=c(t,a,n[r]);e&&e.length>=3&&s.push(e)}return s.length?s:null}function f(t,n,e,i){const s=[],a=e?i?h:o:i?o:r;for(let r=0;r<n.length;r++){const e=c(t,a,n[r]);e&&e.length>=2&&s.push(e)}return s.length?s:null}function x({scale:t,translate:n},e){return e*t[0]+n[0]}function g({scale:t,translate:n},e){return n[1]-e*t[1]}function _(t,n,e){const i=new Array(e.length);if(!e.length)return i;const[s,r]=t.scale;let o=x(t,e[0][0]),h=g(t,e[0][1]);i[0]=n(e[0],o,h);for(let a=1;a<e.length;a++){const t=e[a];o+=t[0]*s,h-=t[1]*r,i[a]=n(t,o,h)}return i}function p(t,n,e){const i=new Array(e.length);for(let s=0;s<e.length;s++)i[s]=_(t,n,e[s]);return i}function I(t,n,e,i){return _(t,e?i?h:o:i?o:r,n)}function y(t,n,e,i){return p(t,e?i?h:o:i?o:r,n)}function B(t,n,e,i){return p(t,e?i?h:o:i?o:r,n)}function M(t,n,e,i,s){return n.xmin=u(t,e.xmin),n.ymin=l(t,e.ymin),n.xmax=u(t,e.xmax),n.ymax=l(t,e.ymax),n!==e&&(i&&(n.zmin=e.zmin,n.zmax=e.zmax),s&&(n.mmin=e.mmin,n.mmax=e.mmax)),n}function b(t,n,e,i,s){return n.points=d(t,e.points,i,s),n}function v(t,n,e,i,s){return n.x=u(t,e.x),n.y=l(t,e.y),n!==e&&(i&&(n.z=e.z),s&&(n.m=e.m)),n}function Y(t,n,e,i,s){const r=m(t,e.rings,i,s);return r?(n.rings=r,n):null}function X(t,n,e,i,s){const r=f(t,e.paths,i,s);return r?(n.paths=r,n):null}function w(t,n){return t&&n?(0,s.wp)(n)?v(t,{},n,!1,!1):(0,s.l9)(n)?X(t,{},n,!1,!1):(0,s.oU)(n)?Y(t,{},n,!1,!1):(0,s.aW)(n)?b(t,{},n,!1,!1):(0,s.YX)(n)?M(t,{},n,!1,!1):null:null}function N(t,n,e,s,r){return(0,i.pC)(e)&&(n.points=I(t,e.points,s,r)),n}function S(t,n,e,s,r){return(0,i.Wi)(e)||(n.x=x(t,e.x),n.y=g(t,e.y),n!==e&&(s&&(n.z=e.z),r&&(n.m=e.m))),n}function Z(t,n,e,s,r){return(0,i.pC)(e)&&(n.rings=B(t,e.rings,s,r)),n}function E(t,n,e,s,r){return(0,i.pC)(e)&&(n.paths=y(t,e.paths,s,r)),n}},61816:function(t,n,e){e.d(n,{Y:function(){return r}});var i=e(27092);function s(t,n){return t?n?4:3:n?3:2}function r(t,n,e,r,a){if((0,i.Wi)(n)||!n.lengths.length)return null;const u="upperLeft"===(null==a?void 0:a.originPosition)?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const l=t.coords,c=[],d=e?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:m,coords:f}=n,x=s(e,r);let g=0;for(const i of m){const t=o(d,f,g,i,e,r,u);t&&c.push(t),g+=i*x}if(c.sort(((t,n)=>{let i=u*t[2]-u*n[2];return 0===i&&e&&(i=t[4]-n[4]),i})),c.length){let t=6*c[0][2];l[0]=c[0][0]/t,l[1]=c[0][1]/t,e&&(t=6*c[0][4],l[2]=0!==t?c[0][3]/t:0),(l[0]<d[0]||l[0]>d[1]||l[1]<d[2]||l[1]>d[3]||e&&(l[2]<d[4]||l[2]>d[5]))&&(l.length=0)}if(!l.length){const t=n.lengths[0]?h(f,0,m[0],e,r):null;if(!t)return null;l[0]=t[0],l[1]=t[1],e&&t.length>2&&(l[2]=t[2])}return t}function o(t,n,e,i,r,o,h=1){const a=s(r,o);let u=e,l=e+a,c=0,d=0,m=0,f=0,x=0;for(let s=0,_=i-1;s<_;s++,u+=a,l+=a){const e=n[u],i=n[u+1],s=n[u+2],o=n[l],h=n[l+1],a=n[l+2];let g=e*h-o*i;f+=g,c+=(e+o)*g,d+=(i+h)*g,r&&(g=e*a-o*s,m+=(s+a)*g,x+=g),e<t[0]&&(t[0]=e),e>t[1]&&(t[1]=e),i<t[2]&&(t[2]=i),i>t[3]&&(t[3]=i),r&&(s<t[4]&&(t[4]=s),s>t[5]&&(t[5]=s))}if(f*h>0&&(f*=-1),x*h>0&&(x*=-1),!f)return null;const g=[c,d,.5*f];return r&&(g[3]=m,g[4]=.5*x),g}function h(t,n,e,i,r){const o=s(i,r);let h=n,d=n+o,m=0,f=0,x=0,g=0;for(let s=0,_=e-1;s<_;s++,h+=o,d+=o){const n=t[h],e=t[h+1],s=t[h+2],r=t[d],o=t[d+1],_=t[d+2],p=i?u(n,e,s,r,o,_):a(n,e,r,o);if(p)if(m+=p,i){const t=c(n,e,s,r,o,_);f+=p*t[0],x+=p*t[1],g+=p*t[2]}else{const t=l(n,e,r,o);f+=p*t[0],x+=p*t[1]}}return m>0?i?[f/m,x/m,g/m]:[f/m,x/m]:e>0?i?[t[n],t[n+1],t[n+2]]:[t[n],t[n+1]]:null}function a(t,n,e,i){const s=e-t,r=i-n;return Math.sqrt(s*s+r*r)}function u(t,n,e,i,s,r){const o=i-t,h=s-n,a=r-e;return Math.sqrt(o*o+h*h+a*a)}function l(t,n,e,i){return[t+.5*(e-t),n+.5*(i-n)]}function c(t,n,e,i,s,r){return[t+.5*(i-t),n+.5*(s-n),e+.5*(r-e)]}},60651:function(t,n,e){e.d(n,{H:function(){return a}});var i=e(35425),s=e(5507);const r=5e4,o={minX:0,minY:0,maxX:0,maxY:0};function h(t,n,e){o.minX=n[0],o.minY=n[1],o.maxX=n[2],o.maxY=n[3],t.search(o,e)}class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.QB(9,(0,i.Z)("esri-csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let n=0;this._idByBounds.forEach(((e,i)=>{t[n++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const n=this._boundsById.get(t);this._boundsById.delete(t),n&&(this._idByBounds.delete(n),this._indexInvalid||this._index.remove(n))}forEachInBounds(t,n){this._loadIndex(),h(this._index,t,(t=>n(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,n){if(!this._indexInvalid){const n=this._boundsById.get(t);n&&(this._index.remove(n),this._idByBounds.delete(n))}this._boundsById.set(t,n),n&&(this._idByBounds.set(n,t),this._indexInvalid||(this._boundsToLoad.push(n),this._boundsToLoad.length>r&&this._loadIndex()))}}},125:function(t,n,e){e.d(n,{Z:function(){return x}});var i=e(25585),s=e(78534),r=e(87441),o=e(27092),h=e(43429),a=e(49938),u=e(1156),l=e(60651),c=e(61816),d=e(39423),m=e(82409);const f={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,n)=>t.attributes[n],cloneWithGeometry:(t,n)=>new d.ZP(n,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,n)=>(t.centroid||(t.centroid=(0,c.Y)(new m.Z,t.geometry,n.hasZ,n.hasM)),t.centroid)};class x{constructor(t){this.geometryInfo=t,this._boundsStore=new l.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new s.Z,this.featureAdapter=f}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const t=(0,a.Ue)(a.Gv);return this._featuresById.forEach((n=>{const e=this._boundsStore.get(n.objectId);e&&(t[0]=Math.min(e[0],t[0]),t[1]=Math.min(e[1],t[1]),t[2]=Math.max(e[2],t[2]),t[3]=Math.max(e[3],t[3]))})),t}get storeStatistics(){let t=0;return this._featuresById.forEach((n=>{(0,o.pC)(n.geometry)&&n.geometry.coords&&(t+=n.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const n of t)this._add(n);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const n=this._featuresById.get(t);return n?(this._remove(n),this._emitChanged(),n):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const n of t){const t=this._featuresById.get(n);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,n,e){for(const i of t){const t=this._boundsStore.get(i.objectId);t&&n((0,h.JR)(e,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach((n=>t(n)))}forEachInBounds(t,n){this._boundsStore.forEachInBounds(t,(t=>{n(this._featuresById.get(t))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach(((n,e)=>{this._markedIds.has(e)||(t=!0,this._remove(n))})),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const n=t.objectId;if(null==n)return void r.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.Z("featurestore:invalid-feature","feature id is missing",{feature:t}));const e=this._featuresById.get(n);let s;if(this._markedIds.add(n),e?(t.displayId=e.displayId,s=this._boundsStore.get(n),this._boundsStore.delete(n)):(0,o.pC)(this.onFeatureAdd)&&this.onFeatureAdd(t),(0,o.Wi)(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(n,null),void this._featuresById.set(n,t);s=(0,u.$)((0,o.pC)(s)?s:(0,a.Ue)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,o.pC)(s)&&this._boundsStore.set(n,s),this._featuresById.set(n,t)}_remove(t){return(0,o.pC)(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t}}},76400:function(t,n,e){e.d(n,{_W:function(){return d},iV:function(){return x},oj:function(){return p}});var i=e(27092),s=e(98267),r=e(630),o=e(71563),h=e(8470);const a=[0,0];function u(t,n){if(!n)return null;if("x"in n){const e={x:0,y:0};return[e.x,e.y]=t(n.x,n.y,a),null!=n.z&&(e.z=n.z),null!=n.m&&(e.m=n.m),e}if("xmin"in n){const e={xmin:0,ymin:0,xmax:0,ymax:0};return[e.xmin,e.ymin]=t(n.xmin,n.ymin,a),[e.xmax,e.ymax]=t(n.xmax,n.ymax,a),n.hasZ&&(e.zmin=n.zmin,e.zmax=n.zmax,e.hasZ=!0),n.hasM&&(e.mmin=n.mmin,e.mmax=n.mmax,e.hasM=!0),e}return"rings"in n?{rings:l(n.rings,t),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:l(n.paths,t),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:c(n.points,t),hasM:n.hasM,hasZ:n.hasZ}:void 0}function l(t,n){const e=[];for(const i of t)e.push(c(i,n));return e}function c(t,n){const e=[];for(const i of t){const t=n(i[0],i[1],[0,0]);e.push(t),i.length>2&&t.push(i[2]),i.length>3&&t.push(i[3])}return e}async function d(t,n){if(!n)return;const e=Array.isArray(t)?t.map((t=>(0,i.pC)(t.geometry)&&t.geometry.spatialReference)):[t];await(0,s.iQ)(e.map((t=>({source:t,dest:n}))))}const m=u.bind(null,h.hG),f=u.bind(null,h.R6);function x(t,n,e){return t?(e||(e=n,n=t.spatialReference),(0,o.JY)(n)&&(0,o.JY)(e)&&!(0,o.fS)(n,e)?(0,h.Q8)(n,e)?(0,o.sS)(e)?m(t):f(t):(0,s.oj)(r.N,[t],n,e,null)[0]:t):t}class g{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,n,e){if(!t||!t.length||!n||!e||(0,o.fS)(n,e))return t;const i={geometries:t,inSpatialReference:n,outSpatialReference:e,resolve:null};return this._jobs.push(i),new Promise((t=>{i.resolve=t,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:n,inSpatialReference:e,outSpatialReference:i,resolve:a}=t;(0,h.Q8)(e,i)?(0,o.sS)(i)?a(n.map(m)):a(n.map(f)):a((0,s.oj)(r.N,n,e,i,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const _=new g;function p(t,n,e){return _.push(t,n,e)}}}]);