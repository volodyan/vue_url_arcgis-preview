"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[3874],{21440:function(e,t,r){r.d(t,{QM:function(){return o},hy:function(){return u},uI:function(){return i}});var n=r(62032),a=(r(35837),r(92222),r(41539),r(76495),r(48675),r(92990),r(18927),r(33105),r(35035),r(74345),r(7174),r(32846),r(44731),r(77209),r(96319),r(58867),r(37789),r(33739),r(29368),r(14483),r(12056),r(3462),r(30678),r(27462),r(33824),r(55021),r(12974),r(15016),r(9653),r(70189),r(78783),r(33948),r(49743),r(29135),r(82472),r(14937)),i=function(){if(!("document"in globalThis))return function(){return null};var e=document.createElement("canvas"),t=e.getContext("2d"),r=512;return e.height=r,e.width=1,function(r){t.clearRect(0,0,1,e.height);var a,i=t.createLinearGradient(0,0,0,e.height),o=(0,n.Z)(r.colorStops);try{for(o.s();!(a=o.n()).done;){var u=a.value,s=u.ratio,c=u.color;i.addColorStop(Math.max(s,.001),"rgba(".concat(c[0],", ").concat(c[1],", ").concat(c[2],", ").concat(c[3],")"))}}catch(l){o.e(l)}finally{o.f()}return t.fillStyle=i,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}}();function o(e,t,r,a){var i,o,u=t.blurRadius,s=t.fieldOffset,f=t.field,d=new Float64Array(r*a),h=c(u),p=Math.round(3*u),y=Number.NEGATIVE_INFINITY,v=l(f,s),m=new Set,w=(0,n.Z)(e);try{for(w.s();!(o=w.n()).done;)for(var g=o.value,M=g.getCursor();M.next();){var k=M.getObjectId();if(!m.has(k)){m.add(k);var b=M.readLegacyPointGeometry(),_=128;if(!(b.x<-_||b.x>=r+_||b.y<-_||b.y>a+_))for(var Z=+v(M),T=Math.round(b.x)-p,x=Math.round(b.y)-p,C=Math.max(0,T),S=Math.max(0,x),I=Math.min(a,Math.round(b.y)+p),R=Math.min(r,Math.round(b.x)+p),U=S;U<I;U++)for(var O=h[U-x],F=C;F<R;F++){var A=h[F-T];i=d[U*r+F]+=O*A*Z,i>y&&(y=i)}}}}catch(K){w.e(K)}finally{w.f()}return{matrix:d.buffer,max:y}}function u(e,t,r,n,a,i){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);var o=e.getImageData(0,0,t,t);r&&n&&o.data.set(new Uint8ClampedArray(s(t,r,n,a,i))),e.putImageData(o,0,0)}function s(e,t,r,n,i){for(var o=new Uint32Array(e*e),u=("buffer"in t?t:new Float64Array(t)),s=("buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer)),c=s.length/(i-n),l=0;l<u.length;l++){var f=u[l],d=Math.floor((f-n)*c);o[l]=s[(0,a.uZ)(d,0,s.length-1)]}return o.buffer}function c(e){for(var t=Math.round(3*e),r=2*e*e,n=new Float64Array(2*t+1),a=0;a<=n.length;a++)n[a]=Math.exp(-Math.pow(a-t,2)/r)/Math.sqrt(2*Math.PI)*(e/2);return n}function l(e,t){return null!=e?"string"==typeof t?function(t){return-1*+t.readAttribute(e)}:function(r){return+r.readAttribute(e)+t}:function(e){return 1}}},38751:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(76133),a=r(92751),i=r(99418),o=r(49161),u=(r(83753),r(63825)),s=r(48595),c=r(2553),l=(r(57787),r(35425),r(90202),r(92236)),f=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"initialize",value:function(){}},{key:"destroy",value:function(){}},{key:"supportsTileUpdates",get:function(){return!1}},{key:"spatialReference",get:function(){var e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}}]),r}(s.r);(0,u._)([(0,c.Cb)({readOnly:!0})],f.prototype,"supportsTileUpdates",null),(0,u._)([(0,c.Cb)({constructOnly:!0})],f.prototype,"remoteClient",void 0),(0,u._)([(0,c.Cb)({constructOnly:!0})],f.prototype,"service",void 0),(0,u._)([(0,c.Cb)()],f.prototype,"spatialReference",null),(0,u._)([(0,c.Cb)({constructOnly:!0})],f.prototype,"tileInfo",void 0),(0,u._)([(0,c.Cb)({constructOnly:!0})],f.prototype,"tileStore",void 0),f=(0,u._)([(0,l.j)("esri.views.2d.layers.features.processors.BaseProcessor")],f);var d=f},63874:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(4367),a=r(2394),i=r(62032),o=r(16198),u=r(99418),s=r(49161),c=r(92751),l=r(76133),f=(r(78975),r(51532),r(41539),r(78783),r(33948),r(54747),r(63825)),d=(r(35425),r(27092)),h=(r(87441),r(90202),r(57787),r(61726),r(92236)),p=r(93400),y=r(21440),v=r(92963),m=r(38751),w=r(5250),g=(0,c.Z)((function e(t,r){(0,l.Z)(this,e),this.offset=t,this.extent=r}));function M(e){var t=e.key,r=new Map,n=256,a=v.I_,i=e.tileInfoView.tileInfo.isWrappable;return r.set((0,w.M)(t,-1,-1,i).id,new g([-a,-a],[a-n,a-n,a,a])),r.set((0,w.M)(t,0,-1,i).id,new g([0,-a],[0,a-n,a,a])),r.set((0,w.M)(t,1,-1,i).id,new g([a,-a],[0,a-n,n,a])),r.set((0,w.M)(t,-1,0,i).id,new g([-a,0],[a-n,0,a,a])),r.set((0,w.M)(t,1,0,i).id,new g([a,0],[0,0,n,a])),r.set((0,w.M)(t,-1,1,i).id,new g([-a,a],[a-n,0,a,n])),r.set((0,w.M)(t,0,1,i).id,new g([0,a],[0,0,a,n])),r.set((0,w.M)(t,1,1,i).id,new g([a,a],[0,0,n,n])),r}var k=function(e){(0,u.Z)(r,e);var t=(0,s.Z)(r);function r(){var e;return(0,l.Z)(this,r),e=t.apply(this,arguments),e.type="heatmap",e._tileKeyToFeatureSets=new Map,e}return(0,c.Z)(r,[{key:"initialize",value:function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}},{key:"update",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=r.schema.processors[0],"heatmap"===n.type){e.next=3;break}return e.abrupt("return");case 3:(0,p.Hg)(this._schema,n)&&(t.mesh=!0,this._schema=n);case 4:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"onTileUpdate",value:function(e){var t,r=(0,i.Z)(e.removed);try{for(r.s();!(t=r.n()).done;){var n=t.value;this._tileKeyToFeatureSets.delete(n.key.id)}}catch(a){r.e(a)}finally{r.f()}}},{key:"onTileClear",value:function(e){var t={clear:!0};return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}},{key:"onTileMessage",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t,r,i){var o,u,s,c,l,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this._tileKeyToFeatureSets.has(t.key.id)||this._tileKeyToFeatureSets.set(t.key.id,new Map),o=this._tileKeyToFeatureSets.get(t.key.id),(0,d.pC)(r.addOrUpdate)&&r.addOrUpdate.hasFeatures&&o.set(r.addOrUpdate.instance,r),!r.end){e.next=7;break}return u=[],s=M(t),this._tileKeyToFeatureSets.forEach((function(e,r){if(r===t.key.id)e.forEach((function(e){return(0,d.Po)(e.addOrUpdate,(function(e){return u.push(e)}))}));else if(s.has(r)){var n=s.get(r),i=(0,a.Z)(n.offset,2),o=i[0],c=i[1];e.forEach((function(e){return(0,d.Po)(e.addOrUpdate,(function(e){var t=e.transform(o,c,1,1);u.push(t)}))}))}})),c=(0,y.QM)(u,this._schema.mesh,512,512),l={tileKey:t.key.id,intensityInfo:c},f=[c.matrix],e.abrupt("return",this.remoteClient.invoke("tileRenderer.onTileData",l,(0,n.Z)((0,n.Z)({},i),{},{transferList:f})));case 7:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"onTileError",value:function(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}}]),r}(m.Z);k=(0,f._)([(0,h.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],k);var b=k},5250:function(e,t,r){r.d(t,{M:function(){return n}});r(40405);function n(e,t,r,n){var a=e.clone(),i=1<<a.level,o=a.col+t,u=a.row+r;return n&&o<0?(a.col=o+i,a.world-=1):o>=i?(a.col=o-i,a.world+=1):a.col=o,a.row=u,a}}}]);