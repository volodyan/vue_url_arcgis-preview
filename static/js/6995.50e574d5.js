"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[6995],{6598:function(e,t,r){r.d(t,{e:function(){return o}});var i,n,s,a={exports:{}};i=a,n=function(){function e(e,r,n){n=n||2;var s,a,o,u,c,h,v,f=r&&r.length,d=f?r[0]*n:e.length,p=t(e,0,d,n,!0),x=[];if(!p||p.next===p.prev)return x;if(f&&(p=l(e,r,p,n)),e.length>80*n){s=o=e[0],a=u=e[1];for(var y=n;y<d;y+=n)(c=e[y])<s&&(s=c),(h=e[y+1])<a&&(a=h),c>o&&(o=c),h>u&&(u=h);v=0!==(v=Math.max(o-s,u-a))?1/v:0}return i(p,x,n,s,a,v),x}function t(e,t,r,i,n){var s,a;if(n===C(e,t,r,i)>0)for(s=t;s<r;s+=i)a=I(s,e[s],e[s+1],a);else for(s=r-i;s>=t;s-=i)a=I(s,e[s],e[s+1],a);if(a&&_(a,a.next)){var o=a.next;E(a),a=o}return a}function r(e,t){if(!e)return e;t||(t=e);var r,i=e;do{if(r=!1,i.steiner||!_(i,i.next)&&0!==m(i.prev,i,i.next))i=i.next;else{var n=i.prev;if(E(i),(i=t=n)===i.next)break;r=!0}}while(r||i!==t);return t}function i(e,t,l,u,c,h,v){if(e){!v&&h&&d(e,u,c,h);for(var f,p,x=e;e.prev!==e.next;)if(f=e.prev,p=e.next,h?s(e,u,c,h):n(e))t.push(f.i/l),t.push(e.i/l),t.push(p.i/l),E(e),e=p.next,x=p.next;else if((e=p)===x){v?1===v?i(e=a(r(e),t,l),t,l,u,c,h,2):2===v&&o(e,t,l,u,c,h):i(r(e),t,l,u,c,h,1);break}}}function n(e){var t=e.prev,r=e,i=e.next;if(m(t,r,i)>=0)return!1;for(var n=e.next.next;n!==e.prev;){if(g(t.x,t.y,r.x,r.y,i.x,i.y,n.x,n.y)&&m(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function s(e,t,r,i){var n=e.prev,s=e,a=e.next;if(m(n,s,a)>=0)return!1;for(var o=n.x<s.x?n.x<a.x?n.x:a.x:s.x<a.x?s.x:a.x,l=n.y<s.y?n.y<a.y?n.y:a.y:s.y<a.y?s.y:a.y,u=n.x>s.x?n.x>a.x?n.x:a.x:s.x>a.x?s.x:a.x,c=n.y>s.y?n.y>a.y?n.y:a.y:s.y>a.y?s.y:a.y,h=x(o,l,t,r,i),v=x(u,c,t,r,i),f=e.prevZ,d=e.nextZ;f&&f.z>=h&&d&&d.z<=v;){if(f!==e.prev&&f!==e.next&&g(n.x,n.y,s.x,s.y,a.x,a.y,f.x,f.y)&&m(f.prev,f,f.next)>=0)return!1;if(f=f.prevZ,d!==e.prev&&d!==e.next&&g(n.x,n.y,s.x,s.y,a.x,a.y,d.x,d.y)&&m(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(;f&&f.z>=h;){if(f!==e.prev&&f!==e.next&&g(n.x,n.y,s.x,s.y,a.x,a.y,f.x,f.y)&&m(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;d&&d.z<=v;){if(d!==e.prev&&d!==e.next&&g(n.x,n.y,s.x,s.y,a.x,a.y,d.x,d.y)&&m(d.prev,d,d.next)>=0)return!1;d=d.nextZ}return!0}function a(e,t,i){var n=e;do{var s=n.prev,a=n.next.next;!_(s,a)&&V(s,n,n.next,a)&&z(s,a)&&z(a,s)&&(t.push(s.i/i),t.push(n.i/i),t.push(a.i/i),E(n),E(n.next),n=e=a),n=n.next}while(n!==e);return r(n)}function o(e,t,n,s,a,o){var l=e;do{for(var u=l.next.next;u!==l.prev;){if(l.i!==u.i&&S(l,u)){var c=w(l,u);return l=r(l,l.next),c=r(c,c.next),i(l,t,n,s,a,o),void i(c,t,n,s,a,o)}u=u.next}l=l.next}while(l!==e)}function l(e,i,n,s){var a,o,l,c=[];for(a=0,o=i.length;a<o;a++)(l=t(e,i[a]*s,a<o-1?i[a+1]*s:e.length,s,!1))===l.next&&(l.steiner=!0),c.push(y(l));for(c.sort(u),a=0;a<c.length;a++)n=r(n=h(c[a],n),n.next);return n}function u(e,t){return e.x-t.x}function c(e){if(e.next.prev===e)return e;let t=e;for(;;){const r=t.next;if(r.prev===t||r===t||r===e)break;t=r}return t}function h(e,t){var i=v(e,t);if(!i)return t;var n=w(i,e),s=r(i,i.next);let a=c(n);return r(a,a.next),s=c(s),c(t===i?s:t)}function v(e,t){var r,i=t,n=e.x,s=e.y,a=-1/0;do{if(s<=i.y&&s>=i.next.y&&i.next.y!==i.y){var o=i.x+(s-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(o<=n&&o>a){if(a=o,o===n){if(s===i.y)return i;if(s===i.next.y)return i.next}r=i.x<i.next.x?i:i.next}}i=i.next}while(i!==t);if(!r)return null;if(n===a)return r;var l,u=r,c=r.x,h=r.y,v=1/0;i=r;do{n>=i.x&&i.x>=c&&n!==i.x&&g(s<h?n:a,s,c,h,s<h?a:n,s,i.x,i.y)&&(l=Math.abs(s-i.y)/(n-i.x),z(i,e)&&(l<v||l===v&&(i.x>r.x||i.x===r.x&&f(r,i)))&&(r=i,v=l)),i=i.next}while(i!==u);return r}function f(e,t){return m(e.prev,e,t.prev)<0&&m(t.next,e,e.next)<0}function d(e,t,r,i){var n=e;do{if(null===n.z&&(n.z=x(n.x,n.y,t,r,i)),n.prev.next!==n||n.next.prev!==n)return n.prev.next=n,n.next.prev=n,d(e,t,r,i);n.prevZ=n.prev,n.nextZ=n.next,n=n.next}while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,p(n)}function p(e){var t,r,i,n,s,a,o,l,u=1;do{for(r=e,e=null,s=null,a=0;r;){for(a++,i=r,o=0,t=0;t<u&&(o++,i=i.nextZ);t++);for(l=u;o>0||l>0&&i;)0!==o&&(0===l||!i||r.z<=i.z)?(n=r,r=r.nextZ,o--):(n=i,i=i.nextZ,l--),s?s.nextZ=n:e=n,n.prevZ=s,s=n;r=i}s.nextZ=null,u*=2}while(a>1);return e}function x(e,t,r,i,n){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*n)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-i)*n)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function y(e){var t=e,r=e;do{(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next}while(t!==e);return r}function g(e,t,r,i,n,s,a,o){return(n-a)*(t-o)-(e-a)*(s-o)>=0&&(e-a)*(i-o)-(r-a)*(t-o)>=0&&(r-a)*(s-o)-(n-a)*(i-o)>=0}function S(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!L(e,t)&&(z(e,t)&&z(t,e)&&T(e,t)&&(m(e.prev,e,t.prev)||m(e,t.prev,t))||_(e,t)&&m(e.prev,e,e.next)>0&&m(t.prev,t,t.next)>0)}function m(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function _(e,t){return e.x===t.x&&e.y===t.y}function V(e,t,r,i){var n=M(m(e,t,r)),s=M(m(e,t,i)),a=M(m(r,i,e)),o=M(m(r,i,t));return n!==s&&a!==o||!(0!==n||!b(e,r,t))||!(0!==s||!b(e,i,t))||!(0!==a||!b(r,e,i))||!(0!==o||!b(r,t,i))}function b(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function M(e){return e>0?1:e<0?-1:0}function L(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&V(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function z(e,t){return m(e.prev,e,e.next)<0?m(e,t,e.next)>=0&&m(e,e.prev,t)>=0:m(e,t,e.prev)<0||m(e,e.next,t)<0}function T(e,t){var r=e,i=!1,n=(e.x+t.x)/2,s=(e.y+t.y)/2;do{r.y>s!=r.next.y>s&&r.next.y!==r.y&&n<(r.next.x-r.x)*(s-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next}while(r!==e);return i}function w(e,t){var r=new F(e.i,e.x,e.y),i=new F(t.i,t.x,t.y),n=e.next,s=t.prev;return e.next=t,t.prev=e,r.next=n,n.prev=r,i.next=r,r.prev=i,s.next=i,i.prev=s,i}function I(e,t,r,i){var n=new F(e,t,r);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function E(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function F(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function C(e,t,r,i){for(var n=0,s=t,a=r-i;s<r;s+=i)n+=(e[a]-e[s])*(e[s+1]+e[a+1]),a=s;return n}return e.deviation=function(e,t,r,i){var n=t&&t.length,s=n?t[0]*r:e.length,a=Math.abs(C(e,0,s,r));if(n)for(var o=0,l=t.length;o<l;o++){var u=t[o]*r,c=o<l-1?t[o+1]*r:e.length;a-=Math.abs(C(e,u,c,r))}var h=0;for(o=0;o<i.length;o+=3){var v=i[o]*r,f=i[o+1]*r,d=i[o+2]*r;h+=Math.abs((e[v]-e[d])*(e[f+1]-e[v+1])-(e[v]-e[f])*(e[d+1]-e[v+1]))}return 0===a&&0===h?0:Math.abs((h-a)/a)},e.flatten=function(e){for(var t=e[0][0].length,r={vertices:[],holes:[],dimensions:t},i=0,n=0;n<e.length;n++){for(var s=0;s<e[n].length;s++)for(var a=0;a<t;a++)r.vertices.push(e[n][s][a]);n>0&&(i+=e[n-1].length,r.holes.push(i))}return r},e},void 0!==(s=n())&&(i.exports=s);const o=a.exports},95466:function(e,t,r){r.d(t,{Or:function(){return l},k3:function(){return c},s5:function(){return u},vX:function(){return h}});Number.POSITIVE_INFINITY;const i=Math.PI,n=128/i,s=256/360,a=1/Math.LN2;function o(e,t){return(e%=t)>=0?e:e+t}function l(e){return o(e*n,256)}function u(e){return o(e*s,256)}function c(e){return Math.log(e)*a}function h(e,t,r){return e>=t&&e<=r||e>=r&&e<=t}},72239:function(e,t,r){r.d(t,{Gq:function(){return A},a:function(){return R},dk:function(){return C},hF:function(){return z},jj:function(){return L},m2:function(){return T},mE:function(){return O},qr:function(){return Z}});r(21703);var i=r(25585),n=r(49026),s=r(55094);function a(e,t){const r=n.X.SIZE_FIELD_STOPS|n.X.SIZE_MINMAX_VALUE|n.X.SIZE_SCALE_STOPS|n.X.SIZE_UNIT_VALUE,i=(e&(n.mf.FIELD_TARGETS_OUTLINE|n.mf.MINMAX_TARGETS_OUTLINE|n.mf.SCALE_TARGETS_OUTLINE|n.mf.UNIT_TARGETS_OUTLINE))>>>4;return t.isOutline||t.isOutlinedFill?r&i:r&~i}const o=0,l=8,u=7,c=8,h=11,v=11,f=12,d=13,p=14,x=15,y=15,g=16,S=17,m=18,_=19,V=20,b=21,M=22;function L(e,t){switch(e){case n.LW.FILL:return C.from(t);case n.LW.LINE:return R.from(t);case n.LW.MARKER:return O.from(t);case n.LW.TEXT:return Z.from(t);case n.LW.LABEL:return A.from(t);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${e}`)}}function z(e){switch(T.load(e).geometryType){case n.LW.MARKER:return new O(e);case n.LW.FILL:return new C(e);case n.LW.LINE:return new R(e);case n.LW.TEXT:return new Z(e);case n.LW.LABEL:return new A(e)}}class T{constructor(e){this._data=0,this._data=e}static load(e){const t=this.shared;return t.data=e,t}set data(e){this._data=e}get data(){return this._data}get geometryType(){return this.bits(c,h)}set geometryType(e){this.setBits(e,c,h)}get mapAligned(){return!!this.bit(V)}set mapAligned(e){this.setBit(V,e)}get sdf(){return!!this.bit(v)}set sdf(e){this.setBit(v,e)}get pattern(){return!!this.bit(f)}set pattern(e){this.setBit(f,e)}get textureBinding(){return this.bits(o,l)}set textureBinding(e){this.setBits(e,o,l)}get geometryTypeString(){switch(this.geometryType){case n.LW.FILL:return"fill";case n.LW.MARKER:return"marker";case n.LW.LINE:return"line";case n.LW.TEXT:return"text";case n.LW.LABEL:return"label";default:throw new i.Z(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(e,t){const r=1<<e;t?this._data|=r:this._data&=~r}bit(e){return(this._data&1<<e)>>e}setBits(e,t,r){for(let i=t,n=0;i<r;i++,n++)this.setBit(i,0!=(e&1<<n))}bits(e,t){let r=0;for(let i=e,n=0;i<t;i++,n++)r|=this.bit(i)<<n;return r}hasVV(){return!1}setVV(e,t){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(u&this.textureBinding)}}T.shared=new T(0);const w=e=>class extends e{get vvSizeMinMaxValue(){return 0!==this.bit(g)}set vvSizeMinMaxValue(e){this.setBit(g,e)}get vvSizeScaleStops(){return 0!==this.bit(S)}set vvSizeScaleStops(e){this.setBit(S,e)}get vvSizeFieldStops(){return 0!==this.bit(m)}set vvSizeFieldStops(e){this.setBit(m,e)}get vvSizeUnitValue(){return 0!==this.bit(_)}set vvSizeUnitValue(e){this.setBit(_,e)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(e,t){super.setVV(e,t);const r=a(e,t)&e;this.vvSizeMinMaxValue=!!(r&n.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(r&n.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(r&n.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(r&n.X.SIZE_SCALE_STOPS)}},I=e=>class extends e{get vvRotation(){return 0!==this.bit(x)}set vvRotation(e){this.setBit(x,e)}hasVV(){return super.hasVV()||this.vvRotation}setVV(e,t){super.setVV(e,t),this.vvRotation=!t.isOutline&&!!(e&n.X.ROTATION)}},E=e=>class extends e{get vvColor(){return 0!==this.bit(d)}set vvColor(e){this.setBit(d,e)}hasVV(){return super.hasVV()||this.vvColor}setVV(e,t){super.setVV(e,t),this.vvColor=!t.isOutline&&!!(e&n.X.COLOR)}},F=e=>class extends e{get vvOpacity(){return 0!==this.bit(p)}set vvOpacity(e){this.setBit(p,e)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(e,t){super.setVV(e,t),this.vvOpacity=!t.isOutline&&!!(e&n.X.OPACITY)}};class C extends(E(F(w(T)))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=n.LW.FILL,t.dotDensity="dot-density"===e.stride.fill,t.simple="simple"===e.stride.fill,t.outlinedFill=e.isOutlinedFill,t.dotDensity||t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,outlinedFill:this.outlinedFill,simple:this.simple,vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}get dotDensity(){return!!this.bit(y)}set dotDensity(e){this.setBit(y,e)}get simple(){return!!this.bit(M)}set simple(e){this.setBit(M,e)}get outlinedFill(){return!!this.bit(b)}set outlinedFill(e){this.setBit(b,e)}}C.shared=new C(0);class O extends(E(F(I(w(T))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=n.LW.MARKER,t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}O.shared=new O(0);class R extends(E(F(w(T)))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=n.LW.LINE,t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}R.shared=new R(0);class Z extends(E(F(I(w(T))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=n.LW.TEXT,t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}Z.shared=new Z(0);class A extends(w(T)){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=n.LW.LABEL,t.setVV(e.vvFlags,e),t.mapAligned=(0,s.N)(e.placement),t.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}A.shared=new A(0)},55094:function(e,t,r){function i(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}r.d(t,{N:function(){return i}})},38751:function(e,t,r){r.d(t,{Z:function(){return l}});var i=r(63825),n=r(48595),s=r(2553),a=(r(57787),r(35425),r(90202),r(92236));let o=class extends n.r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,i._)([(0,s.Cb)({readOnly:!0})],o.prototype,"supportsTileUpdates",null),(0,i._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"remoteClient",void 0),(0,i._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"service",void 0),(0,i._)([(0,s.Cb)()],o.prototype,"spatialReference",null),(0,i._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"tileInfo",void 0),(0,i._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"tileStore",void 0),o=(0,i._)([(0,a.j)("esri.views.2d.layers.features.processors.BaseProcessor")],o);const l=o},80803:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var i=r(63825),n=r(49081),s=(r(25585),r(35425)),a=r(87441),o=r(27092),l=r(24446),u=(r(90202),r(57787),r(61726),r(92236)),c=r(93400),h=r(7730),v=r(63235),f=r(34898),d=r(76883),p=r(16466),x=r(40304),y=r(64161),g=r(38751);class S{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map}destroy(){}async fetchResource(e,t){const r=this._resourceMap,i=r.get(e);if(i)return i;let n=this._inFlightResourceMap.get(e);if(n)return n;try{n=this._remoteClient.invoke("tileRenderer.fetchResource",{url:e},{...t}),this._inFlightResourceMap.set(e,n),n.then((t=>(this._inFlightResourceMap.delete(e),r.set(e,t),t)))}catch(s){return(0,l.D_)(s)?null:{width:0,height:0}}return n}getResource(e){var t;return null!=(t=this._resourceMap.get(e))?t:null}}function m(e,t){return(!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function _(e){const t=e.message,r={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin},transferList:new Array};for(const i in t.data){const e=t.data[i];if(r.message.data[i]=null,(0,o.pC)(e)){const t=e.stride,n=e.indices.slice(0),s=e.vertices.slice(0),a=e.records.slice(0),l={stride:t,indices:n,vertices:s,records:a,metrics:(0,o.Po)(e.metrics,(e=>e.slice(0)))};r.transferList.push(n,s,a),r.message.data[i]=l}}return r}a.Z.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let V=class extends g.Z{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new S(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e)}))}async update(e,t){const r=t.schema.processors[0];if("symbol"!==r.type)return;const i=(0,c.Hg)(this._schema,r);(0,c.uD)(i,"mesh")&&((0,s.Z)("esri-2d-update-debug"),e.mesh=!0,e.why.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo))}onTileMessage(e,t,r,i){return(0,l.k_)(i),this._onTileData(e,t,r,i)}onTileClear(e){const t={clear:!0};return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}onTileError(e,t,r){const i=r.signal,n={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",n,{signal:i})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const r of e)r.message.tileKey===t.id&&this._updateTileMesh("append",t,_(r),[],!1,!1,null)}))}_addBufferData(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e).push(_(t))}_createFactory(e){const{geometryType:t,objectIdField:r,fields:i}=this.service,n=(e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t),s={geometryType:t,fields:i,spatialReference:h.Z.fromJSON(this.spatialReference)},a=new p.Wr(n,this.tileStore.tileScheme.tileInfo),{matcher:l,aggregateMatcher:u}=e.mesh;return this._store=a,this._matchers.feature=(0,x.fL)(l,a,s,this._resourceManagerProxy),this._matchers.aggregate=(0,o.Po)(u,(e=>(0,x.fL)(e,a,s,this._resourceManagerProxy))),new d.j(t,r,a)}async _onTileData(e,t,r,i){(0,l.k_)(i);const{type:n,addOrUpdate:s,remove:a}=t,u=t.end,c=!!this._schema.mesh.sortKey;if(!s){const t={type:n,addOrUpdate:null,remove:a,clear:!1,end:u,sort:c};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},i)}const h=this._processFeatures(e,s,r,i);try{const r=await h;if((0,o.Wi)(r)){const t={type:n,addOrUpdate:null,remove:a,clear:!1,end:u,sort:c};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},i)}const s=[];for(const t of r){let r=!1;const i=t.message.bufferIds,n=e.key.id,a=t.message.tileKey;if(n!==a&&(0,o.pC)(i)){if(!this.tileStore.get(a)){this._addBufferData(n,t),s.push(t);continue}let e=this._bufferIds.get(a);e||(e=new Set,this._bufferIds.set(a,e));const o=Array.from(i);for(const t of o){if(e.has(t)){r=!0;break}e.add(t)}}r||(this._addBufferData(n,t),s.push(t))}await(0,l.$6)(s.map((r=>{const s=e.key.id===r.message.tileKey,a=s?t.remove:[],o=s&&t.end;return this._updateTileMesh(n,e,r,a,o,t.clear,i.signal)})))}catch(v){this._handleError(e,v,i)}}async _updateTileMesh(e,t,r,i,n,s,a){const u=e,c=r.message.tileKey,h=!!this._schema.mesh.sortKey;c!==t.key.id&&(n=!1);const v=(0,o.Po)(r,(e=>e.message)),f=(0,o.Po)(r,(e=>e.transferList))||[],d={type:u,addOrUpdate:v,remove:i,clear:!1,end:n,sort:h},p={transferList:(0,o.Wg)(f)||[],signal:a};return(0,l.k_)(p),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:c,data:d},p)}async _processFeatures(e,t,r,i){if((0,o.Wi)(t)||!t.hasFeatures)return null;const n={transform:e.transform,hasZ:!1,hasM:!1},s=this._factory,a={viewingMode:"",scale:e.scale},u=await this._matchers.feature,c=await this._matchers.aggregate;(0,l.k_)(i);const h=this._getLabelInfos(e,t);return await s.analyze(t.getCursor(),this._resourceManagerProxy,u,c,n,a),(0,l.k_)(i),this._writeFeatureSet(e,t,n,h,s,r)}_writeFeatureSet(e,t,r,i,n,s){const a=t.getSize(),l=new f._(e.key.id,{features:a,records:a,metrics:0},this._schema.mesh.matcher.stride,s,!0),u={viewingMode:"",scale:e.scale},c=t.getCursor();for(;c.next();)try{const t=c.getDisplayId(),s=(0,o.pC)(i)?i.get(t):null;n.writeCursor(l,c,r,u,e.level,s)}catch(v){}const h=e.tileInfoView.tileInfo.isWrappable;return l.serialize(h)}_handleError(e,t,r){if(!(0,l.D_)(t)){const i={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:r.signal})}}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if((0,o.Wi)(t))return null;if("subtype"===t.type){const r={type:"subtype",classes:{}};let i=!1;for(const n in t.classes){const s=t.classes[n].filter((t=>m(t,e.scale)));i=i||!!s.length,r.classes[n]=s}return i?r:null}const r=t.classes.filter((t=>m(t,e.scale)));return r.length?{type:"simple",classes:r}:null}_getLabels(e,t){if("subtype"===t.type){var r;const i=this.service.subtypeField,n=(0,o.s3)(i,"Expected to find subtype Field"),s=e.readAttribute(n);return null==s?[]:null!=(r=t.classes[s])?r:[]}return t.classes}_getLabelInfos(e,t){const r=this._getLabelingSchemaForScale(e);if((0,o.Wi)(r))return null;const i=new Map,s=t.getCursor();for(;s.next();){const e=s.getDisplayId(),t=[],a=(0,v.nE)(e),o=a&&1!==s.readAttribute("cluster_count")?"aggregate":"feature",l=this._getLabels(s,r);for(const r of l){if(r.target!==o)continue;const i=s.getStorage(),l=a&&"feature"===o?i.getComputedStringAtIndex(s.readAttribute("referenceId"),r.fieldIndex):i.getComputedStringAtIndex(e,r.fieldIndex);if(!l)continue;const u=(0,n.E)(l.toString()),c=u[0],h=u[1];this._store.getMosaicItem(r.symbol,(0,y._)(c)).then((e=>{t[r.index]={glyphs:e.glyphMosaicItems,rtl:h,index:r.index}}))}i.set(e,t)}return i}};V=(0,i._)([(0,u.j)("esri.views.2d.layers.features.processors.SymbolProcessor")],V);const b=V}}]);