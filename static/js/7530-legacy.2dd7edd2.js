"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[7530],{60047:function(e,t,r){r.r(t),r.d(t,{default:function(){return ge}});var n=r(16198),i=r(4367),o=r(76133),l=r(92751),a=r(50460),s=r(87349),u=r(99418),c=r(49161),p=(r(78975),r(92222),r(51532),r(41539),r(78783),r(33948),r(35837),r(21703),r(74916),r(4723),r(26699),r(32023),r(63825)),f=r(35680),h=r(25585),y=r(40199),d=r(3266),v=r(24446),m=r(58476),g=r(2553),A=(r(90202),r(66667)),S=r(92236),x=r(78386),w=r(7230),b=r(7730),k=r(49471),_=r(77177),R=r(10378),I=r(94589),Z=r(63759),U=r(54638),T=r(47359),P=r(61761),C=r(93692),L=null;function O(e){if(L)return L;var t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return L=new Promise((function(r){var n=new Image;n.onload=function(){n.onload=n.onerror=null,r(n.width>0&&n.height>0)},n.onerror=function(){n.onload=n.onerror=null,r(!1)},n.src="data:image/webp;base64,"+t[e]})),L}var D=r(2394),M=(r(2707),r(47941),r(82472),r(48675),r(92990),r(18927),r(33105),r(35035),r(74345),r(7174),r(32846),r(44731),r(77209),r(96319),r(58867),r(37789),r(33739),r(29368),r(14483),r(12056),r(3462),r(30678),r(27462),r(33824),r(55021),r(12974),r(15016),r(87441)),N=M.Z.getLogger("esri.layers.support.SpriteSource"),B=1.15,E=function(){function e(t,r,n,i){(0,o.Z)(this,e),this.baseURL=t,this.devicePixelRatio=r,this.maxTextureSize=n,this._spriteImageFormat=i,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}return(0,l.Z)(e,[{key:"spriteNames",get:function(){var e=[];for(var t in this._spritesData)e.push(t);return e.sort(),e}},{key:"getSpriteInfo",value:function(e){return this._spritesData[e]}},{key:"load",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.baseURL){e.next=13;break}return this.loadStatus="loading",e.prev=2,e.next=5,this._loadSprites(t);case 5:this.loadStatus="loaded",e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),this.loadStatus="failed";case 11:e.next=14;break;case 13:this.loadStatus="failed";case 14:case"end":return e.stop()}}),e,this,[[2,8]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_loadSprites",value:function(e){var t=this;this._isRetina=this.devicePixelRatio>B;var r=(0,m.mN)(this.baseURL),n=r.query?"?"+(0,m.B7)(r.query):"",o=this._isRetina?"@2x":"",l="".concat(r.path).concat(o,".").concat(this._spriteImageFormat).concat(n),a="".concat(r.path).concat(o,".json").concat(n);return Promise.all([(0,f["default"])(a,e),(0,f["default"])(l,(0,i.Z)({responseType:"image"},e))]).then((function(e){var n=(0,D.Z)(e,2),i=n[0],o=n[1],l=Object.keys(i.data);if(!l||0===l.length||1===l.length&&"_ssl"===l[0]||!o||!o.data)return t._spritesData=t.image=null,t.width=t.height=0,Promise.resolve(null);t._spritesData=i.data;var a=o.data,s=Math.max(t.maxTextureSize,4096);if(a.width>s||a.height>s){var u="Sprite resource for style ".concat(r.path," is bigger than the maximum allowed of ").concat(s," pixels}");throw N.error(u),new h.Z("SpriteSource",u)}t.width=a.width,t.height=a.height;var c=document.createElement("canvas"),p=c.getContext("2d");c.width=a.width,c.height=a.height,p.drawImage(a,0,0,a.width,a.height);for(var f,y=p.getImageData(0,0,a.width,a.height),d=new Uint8Array(y.data),v=0;v<d.length;v+=4)f=d[v+3]/255,d[v]=d[v]*f,d[v+1]=d[v+1]*f,d[v+2]=d[v+2]*f;t.image=d}))}}]),e}(),Q=r(96090),j=r(62032),z=(r(23123),r(73210),r(15306),r(54560)),V=(r(68309),r(21249),r(39714),r(48437)),F=r(89104),G=r(12744),J=function(){function e(t){(0,o.Z)(this,e),this.url=t}return(0,l.Z)(e,[{key:"fetchTileIndex",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(this._tileIndexPromise||(this._tileIndexPromise=(0,f["default"])(this.url).then((function(e){return e.data.index}))),this._tileIndexPromise));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"dataKey",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchTileIndex();case 2:return n=e.sent,e.abrupt("return",((0,v.k_)(r),this._getIndexedDataKey(n,t)));case 4:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"_getIndexedDataKey",value:function(e,t){var r=[t];if(t.level<0||t.row<0||t.col<0||t.row>>t.level>0||t.col>>t.level>0)return null;for(var n=t;0!==n.level;)n=new G.Z(n.level-1,n.row>>1,n.col>>1,n.world),r.push(n);var i,o,l=e,a=r.pop();if(1===l)return a;for(;r.length;)if(i=r.pop(),o=(1&i.col)+((1&i.row)<<1),l){if(0===l[o]){a=null;break}if(1===l[o]){a=i;break}a=i,l=l[o]}return a}}]),e}(),q=function(){function e(t,r){(0,o.Z)(this,e),this._tilemap=t,this._tileIndexUrl=r}return(0,l.Z)(e,[{key:"fetchTileIndex",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(this._tileIndexPromise||(this._tileIndexPromise=(0,f["default"])(this._tileIndexUrl,{query:(0,i.Z)({},null==t?void 0:t.query)}).then((function(e){return e.data.index}))),this._tileIndexPromise));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"dataKey",value:function(e,t){var r=e.level,n=e.row,i=e.col,o=new G.Z(e);return this._tilemap.fetchAvailabilityUpsample(r,n,i,o,t).then((function(){return o.world=e.world,o})).catch((function(e){if((0,v.D_)(e))throw e;return null}))}}]),e}(),K=function(){function e(t,r,n){(0,o.Z)(this,e),this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=t,this.sourceUrl=r;var l=(0,m.mN)(this.sourceUrl),a=(0,y.d9)(n),s=a.tiles;if(l)for(var u=0;u<s.length;u++){var c=(0,m.mN)(s[u]);c&&((0,m.YP)(c.path)||(c.path=(0,m.v_)(l.path,c.path)),s[u]=(0,m.fl)(c.path,(0,i.Z)((0,i.Z)({},l.query),c.query)))}this.tileServers=s;var p=n.capabilities&&n.capabilities.split(",").map((function(e){return e.toLowerCase().trim()})),f=!0===(null==n?void 0:n.exportTilesAllowed),h=!0===(null==p?void 0:p.includes("tilemap")),d=f&&n.hasOwnProperty("maxExportTilesCount")?n.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:f,supportsTileMap:h},exportTiles:f?{maxExportTilesCount:+d}:null},this.tileInfo=(0,V.d)(a.tileInfo,a,null,{ignoreMinMaxLOD:!0});var v=n.tileMap?(0,m.fl)((0,m.v_)(l.path,n.tileMap),l.query):null;h?(this.type="vector-tile",this.tilemap=new q(new F.y({layer:{parsedUrl:l,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),v)):v&&(this.tilemap=new J(v)),this.fullExtent=w.Z.fromJSON(n.fullExtent)}return(0,l.Z)(e,[{key:"getRefKey",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t,r){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",null!=(n=null==(i=this.tilemap)?void 0:i.dataKey(t,r))?n:t);case 1:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"getSourceTileUrl",value:function(e,t,r){return this.tileServers[t%this.tileServers.length].replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,r.toString())}},{key:"isCompatibleWith",value:function(e){var t=this.tileInfo,r=e.tileInfo;if(!t.spatialReference.equals(r.spatialReference))return!1;if(!t.origin.equals(r.origin))return!1;if(Math.round(t.dpi)!==Math.round(r.dpi))return!1;for(var n=t.lods,i=r.lods,o=Math.min(n.length,i.length),l=0;l<o;l++){var a=n[l],s=i[l];if(a.level!==s.level||Math.round(a.scale)!==Math.round(s.scale))return!1}return!0}}]),e}(),W=z.Z.defaults&&z.Z.defaults.io.corsEnabledServers;function Y(e,t){return X.apply(this,arguments)}function X(){return X=(0,n.Z)(regeneratorRuntime.mark((function e(t,r){var n,i,o,l,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},i="string"==typeof t?[t,null]:[null,t.jsonUrl],o=(0,D.Z)(i,2),l=o[0],a=o[1],e.next=3,ee(n,"esri",t,a,r);case 3:return s={layerDefinition:n.validatedSource,url:l,serviceUrl:n.sourceUrl,style:n.style,styleUrl:n.styleUrl,spriteUrl:n.style.sprite&&H(n.styleBase,n.style.sprite),spriteFormat:n.spriteFormat,glyphsUrl:n.style.glyphs&&H(n.styleBase,n.style.glyphs),sourceNameToSource:n.sourceNameToSource,primarySourceName:n.primarySourceName},e.abrupt("return",($(s.spriteUrl),$(s.glyphsUrl),s));case 5:case"end":return e.stop()}}),e)}))),X.apply(this,arguments)}function $(e){if(e){var t=(0,m.P$)(e);W&&!W.includes(t)&&W.push(t)}}function H(){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];for(var i=0;i<r.length;++i)if((0,m.oC)(r[i])){if(e){var o=e.split("://")[0];e=o+":"+r[i].trim()}}else e=(0,m.YP)(r[i])?r[i]:(0,m.v_)(e,r[i]);return(0,m.Qj)(e)}function ee(e,t,r,n,i){return te.apply(this,arguments)}function te(){return te=(0,n.Z)(regeneratorRuntime.mark((function e(t,r,n,o,l){var a,s,u,c,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if((0,v.k_)(l),"string"!=typeof n){e.next=11;break}return c=(0,m.Fv)(n),$(c),e.next=5,(0,f["default"])(c,(0,i.Z)((0,i.Z)({},l),{},{responseType:"json",query:(0,i.Z)({f:"json"},null==l?void 0:l.query)}));case 5:u=e.sent,u.ssl&&(a&&(a=a.replace(/^http:/i,"https:")),s&&(s=s.replace(/^http:/i,"https:"))),a=c,s=c,e.next=12;break;case 11:u={data:n},a=n.jsonUrl||null,s=o;case 12:return p=u.data,e.abrupt("return",re(p)?(t.styleUrl=a||null,ie(t,p,s,l)):ne(p)?t.sourceUrl?le(t,p,s,!1,r,l):(t.sourceUrl=a||null,le(t,p,s,!0,r,l)):Promise.reject("You must specify the URL or the JSON for a service or for a style."));case 14:case"end":return e.stop()}}),e)}))),te.apply(this,arguments)}function re(e){return!!e.sources}function ne(e){return!re(e)}function ie(e,t,r,n){return oe.apply(this,arguments)}function oe(){return oe=(0,n.Z)(regeneratorRuntime.mark((function e(t,r,n,i){var o,l,a,s,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=n?(0,m.Yd)(n):m.AX,t.styleBase=o,t.style=r,t.styleUrl&&$(t.styleUrl),r["sprite-format"]&&"webp"===r["sprite-format"].toLowerCase()&&(t.spriteFormat="webp"),l=[],!r.sources||!r.sources.esri){e.next=11;break}if(a=r.sources.esri,!a.url){e.next=10;break}return e.next=8,ee(t,"esri",H(o,a.url),void 0,i);case 8:e.next=11;break;case 10:l.push(ee(t,"esri",a,o,i));case 11:for(s=0,u=Object.keys(r.sources);s<u.length;s++)c=u[s],"esri"!==c&&"vector"===r.sources[c].type&&(r.sources[c].url?l.push(ee(t,c,H(o,r.sources[c].url),void 0,i)):r.sources[c].tiles&&l.push(ee(t,c,r.sources[c],o,i)));return e.next=14,Promise.all(l);case 14:case"end":return e.stop()}}),e)}))),oe.apply(this,arguments)}function le(e,t,r,n,i,o){return ae.apply(this,arguments)}function ae(){return ae=(0,n.Z)(regeneratorRuntime.mark((function e(t,r,n,i,o,l){var a,s,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=n?(0,m.Qj)(n)+"/":m.AX,s=se(r,a),u=new K(o,(0,m.fl)(a,null==l?void 0:l.query),s),i||!(t.primarySourceName in t.sourceNameToSource)){e.next=6;break}if(c=t.sourceNameToSource[t.primarySourceName],c.isCompatibleWith(u)){e.next=5;break}return e.abrupt("return",Promise.resolve());case 5:null!=u.fullExtent&&(null!=c.fullExtent?c.fullExtent.union(u.fullExtent):c.fullExtent=u.fullExtent.clone()),c.tileInfo.lods.length<u.tileInfo.lods.length&&(c.tileInfo=u.tileInfo);case 6:if(i?(t.sourceBase=a,t.source=r,t.validatedSource=s,t.primarySourceName=o,t.sourceUrl&&$(t.sourceUrl)):$(a),t.sourceNameToSource[o]=u,t.style){e.next=8;break}return e.abrupt("return",null==r.defaultStyles?Promise.reject():"string"==typeof r.defaultStyles?ee(t,"",H(a,r.defaultStyles,"root.json"),void 0,l):ee(t,"",r.defaultStyles,H(a,"root.json"),l));case 8:case"end":return e.stop()}}),e)}))),ae.apply(this,arguments)}function se(e,t){if(e.hasOwnProperty("tileInfo"))return e;for(var r={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},n=512,i=78271.51696400007,o=295828763.7957775,l=[],a=e.hasOwnProperty("minzoom")?+e.minzoom:0,s=e.hasOwnProperty("maxzoom")?+e.maxzoom:22,u=0;u<=s;u++)u>=a&&l.push({level:u,scale:o,resolution:i}),i/=2,o/=2;var c,p=(0,j.Z)(e.tiles);try{for(p.s();!(c=p.n()).done;){var f=c.value;$(H(t,f))}}catch(h){p.e(h)}finally{p.f()}return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:n,cols:n,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:l,spatialReference:{wkid:102100}}}}var ue=r(91706),ce=r(2298),pe=function(){function e(t,r){(0,o.Z)(this,e),this.lockedSchemaPixelSize=t,this.isGCS=r}return(0,l.Z)(e,[{key:"getLevelRowColumn",value:function(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}},{key:"adjustLevel",value:function(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}},{key:"getShift",value:function(e,t){var r=0,n=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(r=t),e[1]%2&&(n=t)),[r,n]}},{key:"getScale",value:function(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}}],[{key:"create256x256CompatibleTileInfo",value:function(e){if(!e)return null;if(256===e.size[0]&&256===e.size[1])return e;for(var t=256,r=e.spatialReference.isGeographic,n=[],i=e.lods.length,o=0;o<i;o++){var l=e.lods[o],a=r?l.resolution:2*l.resolution;n.push(new ce.Z({level:l.level,scale:l.scale,resolution:a}))}return new Q.Z({size:[t,t],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:n})}},{key:"create512x512CompatibleTileInfo",value:function(e){if(!e)return null;if(256===e.size[0]||256===e.size[1])return null;for(var t=512,r=[],n=e.lods.length,i=0;i<n;i++){var o=e.lods[i],l=.5*o.resolution;r.push(new ce.Z({level:o.level,scale:o.scale,resolution:l}))}return new Q.Z({size:[t,t],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:r})}}]),e}(),fe=(r(83753),1e-6);function he(e,t){if(e===t)return!0;if(!e&&null!=t)return!1;if(null!=e&&!t)return!1;if(!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;var r,n,i=e.origin,o=t.origin;if(Math.abs(i.x-o.x)>=fe||Math.abs(i.y-o.y)>=fe)return!1;e.lods[0].scale>t.lods[0].scale?(r=e,n=t):(n=e,r=t);for(var l=r.lods[0].scale;l>=n.lods[n.lods.length-1].scale-fe;l/=2)if(Math.abs(l-n.lods[0].scale)<fe)return!0;return!1}function ye(e,t){if(e===t)return e;if(!e&&null!=t)return t;if(null!=e&&!t)return e;for(var r=e.size[0],n=e.format,i=e.dpi,o={x:e.origin.x,y:e.origin.y},l=e.spatialReference.toJSON(),a=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],s=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],u=a.scale,c=a.resolution,p=s.scale,f=[],h=u,y=c,d=0;h>p;)f.push({level:d,resolution:y,scale:h}),d++,h/=2,y/=2;return new Q.Z({size:[r,r],dpi:i,format:n||"pbf",origin:o,lods:f,spatialReference:l})}var de=r(91633),ve=r(11277),me=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;(0,o.Z)(this,r);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return e=t.call.apply(t,[this].concat(i)),e._spriteSourceMap=new Map,e.currentStyleInfo=null,e.style=null,e.isReference=null,e.operationalLayerType="VectorTileLayer",e.type="vector-tile",e.url=null,e.symbolCollisionBoxesVisible=!1,e.path=null,e}return(0,l.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,i.Z)({url:e},t):e}},{key:"destroy",value:function(){this._spriteSourceMap.clear()}},{key:"prefetchResources",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadSpriteSource(globalThis.devicePixelRatio||1,t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"load",value:function(e){var t=this,r=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(v.r9).then((0,n.Z)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.portalItem&&t.portalItem.id){r.next=2;break}return r.abrupt("return");case 2:return n="".concat(t.portalItem.itemUrl,"/resources/styles/root.json"),r.next=5,(0,f["default"])(n,(0,i.Z)((0,i.Z)({},e),{},{query:(0,i.Z)((0,i.Z)({f:"json"},t.customParameters),{},{token:t.apiKey})}));case 5:if(r.t0=r.sent.data,!r.t0){r.next=8;break}t.read({url:n},(0,ue.m)(t.portalItem));case 8:case"end":return r.stop()}}),r)})))).catch(v.r9).then((function(){return t._loadStyle(e)}));return this.addResolvingPromise(r),Promise.resolve(this)}},{key:"attributionDataUrl",get:function(){var e=this.currentStyleInfo,t=e&&e.serviceUrl&&(0,m.mN)(e.serviceUrl);if(!t)return null;var r=this._getDefaultAttribution(t.path);return r?(0,m.fl)(r,(0,i.Z)((0,i.Z)({},this.customParameters),{},{token:this.apiKey})):null}},{key:"capabilities",get:function(){var e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}},{key:"fullExtent",get:function(){var e;return(null==(e=this.primarySource)?void 0:e.fullExtent)||null}},{key:"parsedUrl",get:function(){return this.serviceUrl?(0,m.mN)(this.serviceUrl):null}},{key:"serviceUrl",get:function(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}},{key:"spatialReference",get:function(){return this.tileInfo&&this.tileInfo.spatialReference||null}},{key:"styleUrl",get:function(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}},{key:"writeStyleUrl",value:function(e,t){e&&(0,m.oC)(e)&&(e="https:".concat(e)),t.styleUrl=e}},{key:"tileInfo",get:function(){var e,t=[];for(var r in this.sourceNameToSource)t.push(this.sourceNameToSource[r]);var n=(null==(e=this.primarySource)?void 0:e.tileInfo)||new Q.Z;if(t.length>1)for(var i=0;i<t.length;i++)he(n,t[i].tileInfo)&&(n=ye(n,t[i].tileInfo));return n}},{key:"readVersion",value:function(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}},{key:"compatibleTileInfo256",get:function(){return pe.create256x256CompatibleTileInfo(this.tileInfo)}},{key:"compatibleTileInfo512",get:function(){return pe.create512x512CompatibleTileInfo(this.tileInfo)}},{key:"loadSpriteSource",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(){var t,r,n,o,l,a,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=s.length>0&&void 0!==s[0]?s[0]:1,r=s.length>1?s[1]:void 0,this._spriteSourceMap.has(t)){e.next=7;break}return o=(0,ve.Z)(),l=null!=(n=this.currentStyleInfo)&&n.spriteUrl?(0,m.fl)(this.currentStyleInfo.spriteUrl,(0,i.Z)((0,i.Z)({},this.customParameters),{},{token:this.apiKey})):null,a=new E(l,t,o.maxTextureSize,this.currentStyleInfo.spriteFormat),e.next=6,a.load(r);case 6:this._spriteSourceMap.set(t,a);case 7:return e.abrupt("return",Promise.resolve(this._spriteSourceMap.get(t)));case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"loadStyle",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t,r){var n,i,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t||this.style||this.url,e.abrupt("return",(this._loadingTask&&"string"==typeof i&&this.url===i||(null==(n=this._loadingTask)||n.abort(),this._loadingTask=(0,v.vr)((function(e){return o._spriteSourceMap.clear(),o._getSourceAndStyle(i,{signal:e})}),r)),this._loadingTask.promise));case 2:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"getStyleLayerId",value:function(e){return this.styleRepository.getStyleLayerId(e)}},{key:"getStyleLayerIndex",value:function(e){return this.styleRepository.getStyleLayerIndex(e)}},{key:"getPaintProperties",value:function(e){return(0,y.d9)(this.styleRepository.getPaintProperties(e))}},{key:"setPaintProperties",value:function(e,t){var r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);var n=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||n})}},{key:"getStyleLayer",value:function(e){return(0,y.d9)(this.styleRepository.getStyleLayer(e))}},{key:"setStyleLayer",value:function(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}},{key:"deleteStyleLayer",value:function(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}},{key:"getLayoutProperties",value:function(e){return(0,y.d9)(this.styleRepository.getLayoutProperties(e))}},{key:"setLayoutProperties",value:function(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}},{key:"setStyleLayerVisibility",value:function(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}},{key:"getStyleLayerVisibility",value:function(e){return this.styleRepository.getStyleLayerVisibility(e)}},{key:"write",value:function(e,t){return t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new h.Z("vectortilelayer:unsupported","VectorTileLayer (".concat(this.title,", ").concat(this.id,") with style defined by JSON only are not supported"),{layer:this})),null):(0,a.Z)((0,s.Z)(r.prototype),"write",this).call(this,e,t)}},{key:"getTileUrl",value:function(e,t,r){return null}},{key:"_getSourceAndStyle",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("invalid style!");case 2:return e.next=4,Y(t,(0,i.Z)((0,i.Z)({},r),{},{query:(0,i.Z)((0,i.Z)({},this.customParameters),{},{token:this.apiKey})}));case 4:if(n=e.sent,"webp"!==n.spriteFormat){e.next=11;break}return e.next=8,O("lossy");case 8:if(e.t0=e.sent,e.t0){e.next=11;break}n.spriteFormat="png";case 11:this._set("currentStyleInfo",(0,i.Z)({},n)),"string"==typeof t?(this.url=t,this.style=null):(this.url=null,this.style=t),this._set("sourceNameToSource",n.sourceNameToSource),this._set("primarySource",n.sourceNameToSource[n.primarySourceName]),this._set("styleRepository",new de.Z(n.style)),this.read(n.layerDefinition,{origin:"service"}),this.emit("load-style");case 12:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"_getDefaultAttribution",value:function(e){var t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(t){var n=t[2]&&t[2].toLowerCase();if(n)for(var i=t[1]||"",o=0,l=r;o<l.length;o++){var a=l[o];if(a.toLowerCase().includes(n))return(0,m.Fv)("//static.arcgis.com/attribution/Vector".concat(i,"/").concat(a))}}}},{key:"_loadStyle",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",null!=(r=null==(n=this._loadingTask)?void 0:n.promise)?r:this.loadStyle(null,t));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),r}((0,Z.h)((0,C.M)((0,R.Z)((0,I.Y)((0,T.q)((0,P.I)((0,U.N)((0,_.V)((0,d.R)(k.Z))))))))));(0,p._)([(0,g.Cb)({readOnly:!0})],me.prototype,"attributionDataUrl",null),(0,p._)([(0,g.Cb)({type:["show","hide"]})],me.prototype,"listMode",void 0),(0,p._)([(0,g.Cb)({readOnly:!0,json:{read:!1}})],me.prototype,"capabilities",null),(0,p._)([(0,g.Cb)({readOnly:!0})],me.prototype,"currentStyleInfo",void 0),(0,p._)([(0,g.Cb)({json:{read:!1},readOnly:!0,type:w.Z})],me.prototype,"fullExtent",null),(0,p._)([(0,g.Cb)()],me.prototype,"style",void 0),(0,p._)([(0,g.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],me.prototype,"isReference",void 0),(0,p._)([(0,g.Cb)({type:["VectorTileLayer"]})],me.prototype,"operationalLayerType",void 0),(0,p._)([(0,g.Cb)({readOnly:!0})],me.prototype,"parsedUrl",null),(0,p._)([(0,g.Cb)({readOnly:!0})],me.prototype,"serviceUrl",null),(0,p._)([(0,g.Cb)({type:b.Z,readOnly:!0})],me.prototype,"spatialReference",null),(0,p._)([(0,g.Cb)({readOnly:!0})],me.prototype,"styleRepository",void 0),(0,p._)([(0,g.Cb)({readOnly:!0})],me.prototype,"sourceNameToSource",void 0),(0,p._)([(0,g.Cb)({readOnly:!0})],me.prototype,"primarySource",void 0),(0,p._)([(0,g.Cb)({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],me.prototype,"styleUrl",null),(0,p._)([(0,x.c)(["portal-item","web-document"],"styleUrl")],me.prototype,"writeStyleUrl",null),(0,p._)([(0,g.Cb)({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:Q.Z})],me.prototype,"tileInfo",null),(0,p._)([(0,g.Cb)({json:{read:!1},readOnly:!0,value:"vector-tile"})],me.prototype,"type",void 0),(0,p._)([(0,g.Cb)({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],me.prototype,"url",void 0),(0,p._)([(0,g.Cb)({readOnly:!0})],me.prototype,"version",void 0),(0,p._)([(0,A.r)("version",["version","currentVersion"])],me.prototype,"readVersion",null),(0,p._)([(0,g.Cb)({readOnly:!0})],me.prototype,"compatibleTileInfo256",null),(0,p._)([(0,g.Cb)({readOnly:!0})],me.prototype,"compatibleTileInfo512",null),(0,p._)([(0,g.Cb)({type:Boolean})],me.prototype,"symbolCollisionBoxesVisible",void 0),(0,p._)([(0,g.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],me.prototype,"path",void 0),me=(0,p._)([(0,S.j)("esri.layers.VectorTileLayer")],me);var ge=me},91706:function(e,t,r){r.d(t,{m:function(){return o}});var n=r(58476),i=r(88096);function o(e){return{origin:"portal-item",url:(0,n.mN)(e.itemUrl),portal:e.portal||i.Z.getDefault(),portalItem:e,readResourcePaths:[]}}},92182:function(e,t,r){r.d(t,{B1:function(){return n},DQ:function(){return u},DT:function(){return a},JJ:function(){return i},Or:function(){return c},_U:function(){return o},k3:function(){return p},sX:function(){return f}});r(9653);var n=Number.POSITIVE_INFINITY,i=Math.PI,o=2*i,l=128/i,a=i/180,s=1/Math.LN2;function u(e,t){return(e%=t)>=0?e:e+t}function c(e){return u(e*l,256)}function p(e){return Math.log(e)*s}function f(e,t,r){return e*(1-r)+t*r}},92963:function(e,t,r){r.d(t,{$0:function(){return l},AI:function(){return n},Al:function(){return f},CQ:function(){return B},CU:function(){return P},D3:function(){return p},Ex:function(){return s},I_:function(){return o},Ic:function(){return h},Ij:function(){return v},Ip:function(){return D},Iw:function(){return u},Jc:function(){return U},Jw:function(){return A},MI:function(){return M},QU:function(){return g},SD:function(){return V},Tz:function(){return E},Uh:function(){return N},V4:function(){return T},XJ:function(){return O},Zd:function(){return R},_6:function(){return z},a:function(){return C},aK:function(){return b},e0:function(){return j},eF:function(){return c},f2:function(){return m},fL:function(){return L},iJ:function(){return y},iV:function(){return I},kF:function(){return S},m4:function(){return k},nM:function(){return d},oK:function(){return Q},ru:function(){return i},tQ:function(){return Z},uG:function(){return _},xl:function(){return w},xm:function(){return a},yP:function(){return x}});var n=1e-30,i=4294967295,o=512,l=8,a=29,s=24,u=8,c={metrics:{width:15,height:17,left:0,top:-7,advance:14}},p=0,f=0,h=0,y=1,d=2,v=3,m=4,g=5,A=6,S=5,x=6,w=1,b=2,k=2,_=1,R=2,I=4,Z=1.05,U=6,T=5,P=6,C=1.15,L=2,O=8,D=500,M=10,N=2,B=0,E=1,Q=4,j=8,z=4,V=1}}]);