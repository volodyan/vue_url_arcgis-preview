"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[5996],{25996:function(e,r,n){n.r(r),n.d(r,{clearBoundingBoxCache:function(){return f},computeIconLayerResourceSize:function(){return m},computeLayerResourceSize:function(){return y},computeLayerSize:function(){return p},computeObjectLayerResourceSize:function(){return b}});var t=n(35680),o=n(25585),i=n(46019),u=n(27092),c=n(43429),s=n(82394);let a=l();function l(){return new i.Z(50)}function f(){a=l()}function y(e,r){if("icon"===e.type)return m(e,r);if("object"===e.type)return b(e,r);throw new o.Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function p(e,r){if("icon"===e.type)return h(e,r);if("object"===e.type)return w(e,r);throw new o.Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function m(e,r){if(e.resource.href)return d(e.resource.href).then((e=>[e.width,e.height]));if(e.resource.primitive)return(0,u.pC)(r)?[r,r]:[256,256];throw new o.Z("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function h(e,r){return m(e,r).then((r=>{if(null==e.size)return r;const n=r[0]/r[1];return n>1?[e.size,e.size/n]:[e.size*n,e.size]}))}function d(e){return(0,t["default"])(e,{responseType:"image"}).then((e=>e.data))}function b(e,r){return v(e,r).then((e=>(0,c.dp)(e)))}async function w(e,r){const n=await b(e,r);return(0,s.$K)(n,e)}async function v(e,r){if(!e.isPrimitive){const r=e.resource.href,t=a.get(r);if(void 0!==t)return Promise.resolve(t);const o=await Promise.all([n.e(4708),n.e(6886),n.e(5113),n.e(9115)]).then(n.bind(n,69115)),i=await o.fetch(r,{disableTextures:!0});return a.put(r,i.referenceBoundingBox),i.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=(0,c.Ue)((0,s.Uz)(e.resource.primitive)),(0,u.pC)(r)))for(let n=0;n<t.length;n++)t[n]*=r;return t?Promise.resolve(t):Promise.reject(new o.Z("symbol:invalid-resource","The symbol does not have a valid resource"))}}}]);