"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[7343,9026],{78763:function(e,t,r){function n(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:function(){return n}})},27343:function(e,t,r){r.d(t,{V:function(){return z}});var n=r(62032),a=r(4367),i=r(9726),o=r(16198),s=r(76133),u=r(92751),l=r(99418),c=r(49161),p=(r(78975),r(9653),r(41539),r(74916),r(23123),r(39714),r(68309),r(92222),r(77601),r(15306),r(57327),r(78783),r(33948),r(21249),r(69600),r(63825)),d=r(35680),h=r(25585),f=(r(35425),r(87441)),v=r(27092),m=r(24446),y=r(58476),g=r(2553),x=(r(57787),r(90202),r(66667)),w=r(92236),b=r(78386),S=(r(54747),r(78763));function k(e){e&&e.writtenProperties&&e.writtenProperties.forEach((function(e){var t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&(0,S.l)(t)&&t.updateOrigin(e.propName,e.newOrigin)}))}var R=r(7230),_=r(35912),I=r(7730),Z=r(46561),O=r(15387),P=r(67385),N=r(88096),T=r(34907),U=(r(70189),r(53855)),C=r(11387),j=r(9026);function A(e,t,r){return E.apply(this,arguments)}function E(){return E=(0,o.Z)(regeneratorRuntime.mark((function e(t,r,a){var i,o,s,u,l,c,p,d,f,v,y,g,x,w,b,S,k;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r&&r.resources){e.next=2;break}return e.abrupt("return");case 2:i=r.portalItem===t.portalItem?new Set(t.paths):new Set,t.paths.length=0,t.portalItem=r.portalItem,o=new Set(r.resources.toKeep.map((function(e){return e.resource.path}))),s=new Set,u=[],o.forEach((function(e){i.delete(e),t.paths.push(e)})),l=(0,n.Z)(r.resources.toUpdate);try{for(l.s();!(c=l.n()).done;)p=c.value,i.delete(p.resource.path),o.has(p.resource.path)||s.has(p.resource.path)?(d=p.resource,f=p.content,v=p.finish,y=p.error,g=(0,j.getSiblingOfSameTypeI)(d,(0,C.D)()),t.paths.push(g.path),u.push(K({resource:g,content:f,finish:v,error:y},a))):(t.paths.push(p.resource.path),u.push(F(p,a)),s.add(p.resource.path))}catch(R){l.e(R)}finally{l.f()}x=(0,n.Z)(r.resources.toAdd);try{for(x.s();!(w=x.n()).done;)b=w.value,u.push(K(b,a)),t.paths.push(b.resource.path)}catch(R){x.e(R)}finally{x.f()}if(i.forEach((function(e){var t=r.portalItem.resourceFromPath(e);u.push(t.portalItem.removeResource(t).catch((function(){})))})),0!==u.length){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,(0,m.as)(u);case 14:if(S=e.sent,(0,m.k_)(a),k=S.filter((function(e){return"error"in e})).map((function(e){return e.error})),!(k.length>0)){e.next=19;break}throw new h.Z("save:resources","Failed to save one or more resources",{errors:k});case 19:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function K(e,t){return q.apply(this,arguments)}function q(){return q=(0,o.Z)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,U.q6)(t.resource.portalItem.addResource(t.resource,t.content,r));case 2:if(n=e.sent,!0===n.ok){e.next=5;break}throw t.error&&t.error(n.error),n.error;case 5:t.finish&&t.finish(t.resource);case 6:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}function F(e,t){return L.apply(this,arguments)}function L(){return L=(0,o.Z)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,U.q6)(t.resource.update(t.content,r));case 2:if(n=e.sent,!0===n.ok){e.next=5;break}throw t.error(n.error),n.error;case 5:t.finish(t.resource);case 6:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}var M=f.Z.getLogger("esri.layers.mixins.SceneService"),z=function(e){var t=function(e){(0,l.Z)(p,e);var t=(0,c.Z)(p);function p(){var e;return(0,s.Z)(this,p),e=t.apply(this,arguments),e.spatialReference=null,e.fullExtent=null,e.heightModelInfo=null,e.minScale=0,e.maxScale=0,e.version={major:Number.NaN,minor:Number.NaN,versionString:""},e.copyright=null,e.sublayerTitleMode="item-title",e.title=null,e.layerId=null,e.indexInfo=null,e._debouncedSaveOperations=(0,m.Ds)(function(){var t=(0,o.Z)(regeneratorRuntime.mark((function t(r,n,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:t.t0=r,t.next=0===t.t0?3:1===t.t0?4:5;break;case 3:return t.abrupt("return",e._save(n));case 4:return t.abrupt("return",e._saveAs(a,n));case 5:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()),e}return(0,u.Z)(p,[{key:"readSpatialReference",value:function(e,t){return this._readSpatialReference(t)}},{key:"_readSpatialReference",value:function(e){if(null!=e.spatialReference)return I.Z.fromJSON(e.spatialReference);var t=e.store,r=t.indexCRS||t.geographicCRS,n=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=n?new I.Z(n):null}},{key:"readFullExtent",value:function(e,t,r){if(null!=e&&"object"==(0,i.Z)(e)){var n=null==e.spatialReference?(0,a.Z)((0,a.Z)({},e),{},{spatialReference:this._readSpatialReference(t)}):e;return R.Z.fromJSON(n,r)}var o=t.store,s=this._readSpatialReference(t);return null==s||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some((function(e){return e<D}))?null:new R.Z({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:s})}},{key:"parseVersionString",value:function(e){var t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}},{key:"readVersion",value:function(e,t){var r=t.store,n=null!=r.version?r.version.toString():"";return this.parseVersionString(n)}},{key:"readTitlePortalItem",value:function(e){return"item-title"!==this.sublayerTitleMode?void 0:e}},{key:"readTitleService",value:function(e,t){var r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return(0,Z.a7)(this.url,t.name);var n=t.name;if(!n&&this.url){var a=(0,Z.Qc)(this.url);(0,v.pC)(a)&&(n=a.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(n=r+" - "+n),(0,Z.ld)(n)}},{key:"url",set:function(e){var t=(0,Z.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:M});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}},{key:"writeUrl",value:function(e,t,r,n){(0,Z.wH)(this,e,"layers",t,n)}},{key:"parsedUrl",get:function(){var e=this._get("url");if(!e)return null;var t=(0,y.mN)(e);return null!=this.layerId&&(t.path="".concat(t.path,"/layers/").concat(this.layerId)),t}},{key:"_fetchIndexAndUpdateExtent",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.indexInfo=(0,P.T)(this.parsedUrl.path,this.rootNode,t,this.apiKey,M,r),e.t0=null==this.fullExtent||this.fullExtent.hasZ,e.t0){e.next=8;break}return e.t1=this,e.next=6,this.indexInfo;case 6:e.t2=e.sent,e.t1._updateExtent.call(e.t1,e.t2);case 8:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"_updateExtent",value:function(e){if("page"===(null==e?void 0:e.type)){var t,r,n=e.rootIndex%e.pageSize,a=null==(t=e.rootPage)||null==(r=t.nodes)?void 0:r[n];if(null==a||null==a.obb||null==a.obb.center||null==a.obb.halfSize)throw new h.Z("sceneservice:invalid-node-page","Invalid node page.");if(a.obb.center[0]<D||null==this.fullExtent||this.fullExtent.hasZ)return;var i=a.obb.halfSize,o=a.obb.center[2],s=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this.fullExtent.zmin=o-s,this.fullExtent.zmax=o+s}else if("node"===(null==e?void 0:e.type)){var u,l=null==(u=e.rootNode)?void 0:u.mbs;if(!Array.isArray(l)||4!==l.length||l[0]<D)return;var c=l[2],p=l[3];this.fullExtent.zmin=c-p,this.fullExtent.zmax=c+p}}},{key:"_fetchService",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!=this.url){e.next=2;break}throw new h.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");case 2:if(null!=this.layerId||!/SceneServer\/*$/i.test(this.url)){e.next=7;break}return e.next=5,this._fetchFirstLayerId(t);case 5:r=e.sent,null!=r&&(this.layerId=r);case 7:return e.abrupt("return",this._fetchServiceLayer(t));case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_fetchFirstLayerId",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,d["default"])(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:if(r=e.sent,!(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)){e.next=5;break}return e.abrupt("return",r.data.layers[0].id);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_fetchServiceLayer",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,d["default"])(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:if(r=e.sent,r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),n=!1,r.data.layerType&&"Voxel"===r.data.layerType&&(n=!0),!n){e.next=7;break}return e.abrupt("return",(this.read(r.data,{origin:"service",url:this.parsedUrl}),this._fetchVoxelServiceLayer()));case 7:a=r.data,this.read(a,{origin:"service",url:this.parsedUrl}),this.validateLayer(a);case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_fetchVoxelServiceLayer",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,d["default"])(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:r=e.sent.data,this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_ensureLoadBeforeSave",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(e.t0="beforeSave"in this&&"function"==typeof this.beforeSave,!e.t0){e.next=6;break}return e.next=6,this.beforeSave();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"validateLayer",value:function(e){}},{key:"_updateTypeKeywords",value:function(e,t,r){e.typeKeywords||(e.typeKeywords=[]);var a,i=t.getTypeKeywords(),o=(0,n.Z)(i);try{for(o.s();!(a=o.n()).done;){var s=a.value;e.typeKeywords.push(s)}}catch(u){o.e(u)}finally{o.f()}e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((function(e,t,r){return r.indexOf(e)===t})),1===r&&(e.typeKeywords=e.typeKeywords.filter((function(e){return"Hosted Service"!==e}))))}},{key:"_saveAs",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t,r){var n,i,o,s,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=(0,a.Z)((0,a.Z)({},B),r),i=T["default"].from(t),e.t0=i,e.t0){e.next=7;break}return M.error("_saveAs(): requires a portal item parameter"),e.next=7,Promise.reject(new h.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"));case 7:return i.id&&(i=i.clone(),i.id=null),o=i.portal||N.Z.getDefault(),e.next=11,this._ensureLoadBeforeSave();case 11:return i.type=J,i.portal=o,s={origin:"portal-item",url:null,messages:[],portal:o,portalItem:i,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},u={layers:[this.write({},s)]},e.next=16,Promise.all(s.resources.pendingOperations);case 16:return e.next=18,this._validateAgainstJSONSchema(u,s,n);case 18:return i.url=this.url,i.title||(i.title=this.title),this._updateTypeKeywords(i,n,1),e.next=23,o._signIn();case 23:return e.next=25,o.user.addItem({item:i,folder:n&&n.folder,data:u});case 25:return e.next=27,A(this.resourceReferences,s,null);case 27:return this.portalItem=i,k(s),s.portalItem=i,e.abrupt("return",i);case 31:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"_save",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=(0,a.Z)((0,a.Z)({},B),t),e.t0=this.portalItem,e.t0){e.next=6;break}return M.error("_save(): requires the .portalItem property to be set"),e.next=6,Promise.reject(new h.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"));case 6:if(e.t1=this.portalItem.type!==J,!e.t1){e.next=11;break}return M.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+J),e.next=11,Promise.reject(new h.Z("sceneservice:portal-item-wrong-type",'Portal item needs to have type "'.concat(J,'"')));case 11:return e.next=13,this._ensureLoadBeforeSave();case 13:return n={origin:"portal-item",url:this.portalItem.itemUrl&&(0,y.mN)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||N.Z.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},i={layers:[this.write({},n)]},e.next=16,Promise.all(n.resources.pendingOperations);case 16:return e.next=18,this._validateAgainstJSONSchema(i,n,r);case 18:return this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,r,0),e.next=23,this.portalItem.update({data:i});case 23:return e.next=25,A(this.resourceReferences,n,null);case 25:return k(n),e.abrupt("return",this.portalItem);case 27:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_validateAgainstJSONSchema",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t,n,a){var i,o,s,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=n.messages.filter((function(e){return"error"===e.type})).map((function(e){return new h.Z(e.name,e.message,e.details)})),a&&a.validationOptions.ignoreUnsupported&&(i=i.filter((function(e){return"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name}))),!a.validationOptions.enabled&&!V){e.next=10;break}return e.next=4,r.e(834).then(r.bind(r,30834));case 4:if(o=e.sent.validate(t,a.portalItemLayerType),!(o.length>0)){e.next=10;break}if(s="Layer item did not validate:\n".concat(o.join("\n")),M.error("_validateAgainstJSONSchema(): ".concat(s)),"throw"!==a.validationOptions.failPolicy){e.next=10;break}throw u=o.map((function(e){return new h.Z("sceneservice:schema-validation",e)})).concat(i),new h.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:u});case 10:if(!(i.length>0)){e.next=12;break}throw new h.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i});case 12:case"end":return e.stop()}}),e)})));function t(t,r,n){return e.apply(this,arguments)}return t}()}]),p}(e);return(0,p._)([(0,g.Cb)(O.id)],t.prototype,"id",void 0),(0,p._)([(0,g.Cb)({type:I.Z})],t.prototype,"spatialReference",void 0),(0,p._)([(0,x.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,p._)([(0,g.Cb)({type:R.Z})],t.prototype,"fullExtent",void 0),(0,p._)([(0,x.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,p._)([(0,g.Cb)({readOnly:!0,type:_.Z})],t.prototype,"heightModelInfo",void 0),(0,p._)([(0,g.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,p._)([(0,g.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,p._)([(0,g.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,p._)([(0,x.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,p._)([(0,g.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,p._)([(0,g.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,p._)([(0,g.Cb)({type:String})],t.prototype,"title",void 0),(0,p._)([(0,x.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,p._)([(0,x.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,p._)([(0,g.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,p._)([(0,g.Cb)(O.HQ)],t.prototype,"url",null),(0,p._)([(0,b.c)("url")],t.prototype,"writeUrl",null),(0,p._)([(0,g.Cb)()],t.prototype,"parsedUrl",null),(0,p._)([(0,g.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,p._)([(0,g.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,p._)([(0,w.j)("esri.layers.mixins.SceneService")],t),t},D=-1e38,V=!1,J="Scene Service",B={getTypeKeywords:function(){return[]},portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}},67385:function(e,t,r){r.d(t,{T:function(){return s}});var n=r(16198),a=(r(78975),r(74916),r(23123),r(35680)),i=r(25585),o=r(27092);function s(e,t,r,n,a,i){return u.apply(this,arguments)}function u(){return u=(0,n.Z)(regeneratorRuntime.mark((function e(t,r,n,s,u,l){var c,p,d,h,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c=null,!(0,o.pC)(n)){e.next=17;break}return p="".concat(t,"/nodepages/"),d=p+Math.floor(n.rootIndex/n.nodesPerPage),e.prev=3,e.next=6,(0,a["default"])(d,{query:{f:"json",token:s},responseType:"json",signal:l});case 6:return e.t0=e.sent.data,e.t1=n.rootIndex,e.t2=n.nodesPerPage,e.t3=n.lodSelectionMetricType,e.t4=p,e.abrupt("return",{type:"page",rootPage:e.t0,rootIndex:e.t1,pageSize:e.t2,lodMetric:e.t3,urlPrefix:e.t4});case 14:e.prev=14,e.t5=e["catch"](3),(0,o.pC)(u)&&u.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",d,e.t5),c=e.t5;case 17:if(r){e.next=19;break}return e.abrupt("return",null);case 19:return h="".concat(t,"/nodes/"),f=h+(r&&r.split("/").pop()),e.prev=20,e.next=23,(0,a["default"])(f,{query:{f:"json",token:s},responseType:"json",signal:l});case 23:return e.t6=e.sent.data,e.t7=h,e.abrupt("return",{type:"node",rootNode:e.t6,urlPrefix:e.t7});case 28:throw e.prev=28,e.t8=e["catch"](20),new i.Z("sceneservice:root-node-missing","Root node missing.",{pageError:c,nodeError:e.t8,url:f});case 31:case"end":return e.stop()}}),e,null,[[3,14],[20,28]])}))),u.apply(this,arguments)}},9026:function(e,t,r){r.r(t),r.d(t,{addOrUpdateResource:function(){return p},contentToBlob:function(){return w},fetchResources:function(){return l},getSiblingOfSameType:function(){return S},getSiblingOfSameTypeI:function(){return k},removeAllResources:function(){return v},removeResource:function(){return h},splitPrefixFileNameAndExtension:function(){return g}});var n=r(2394),a=r(16198),i=(r(78975),r(47042),r(21249),r(35680)),o=r(25585),s=r(27092),u=r(58476);function l(e){return c.apply(this,arguments)}function c(){return c=(0,a.Z)(regeneratorRuntime.mark((function e(t){var r,n,a,i,o,l,c,p,d,h,f,v,m,y=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=y.length>1&&void 0!==y[1]?y[1]:{},n=y.length>2?y[2]:void 0,e.next=4,t.load(n);case 4:return a=(0,u.v_)(t.itemUrl,"resources"),i=r.start,o=void 0===i?1:i,l=r.num,c=void 0===l?10:l,p=r.sortOrder,d=void 0===p?"asc":p,h=r.sortField,f=void 0===h?"created":h,v={query:{start:o,num:c,sortOrder:d,sortField:f,token:t.apiKey},signal:(0,s.U2)(n,"signal")},e.next=16,t.portal._request(a,v);case 16:return m=e.sent,e.abrupt("return",{total:m.total,nextStart:m.nextStart,resources:m.resources.map((function(e){var r=e.created,n=e.size,a=e.resource;return{created:new Date(r),size:n,resource:t.resourceFromPath(a)}}))});case 18:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function p(e,t,r,n){return d.apply(this,arguments)}function d(){return d=(0,a.Z)(regeneratorRuntime.mark((function e(t,r,a,i){var l,c,p,d,h,f,v,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.hasPath()){e.next=2;break}throw new o.Z("portal-item-resource-".concat(r,":invalid-path"),"Resource does not have a valid path");case 2:return l=t.portalItem,e.next=5,l.load(i);case 5:return c=(0,u.v_)(l.userItemUrl,"add"===r?"addResources":"updateResources"),p=y(t.path),d=(0,n.Z)(p,2),h=d[0],f=d[1],e.next=12,w(a);case 12:return v=e.sent,m=new FormData,h&&"."!==h&&m.append("resourcesPrefix",h),m.append("fileName",f),m.append("file",v,f),m.append("f","json"),(0,s.pC)(i)&&i.access&&m.append("access",i.access),e.next=21,l.portal._request(c,{method:"post",body:m,signal:(0,s.U2)(i,"signal")});case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function h(e,t,r){return f.apply(this,arguments)}function f(){return f=(0,a.Z)(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r.hasPath()){e.next=2;break}throw new o.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");case 2:return e.next=4,t.load(n);case 4:return a=(0,u.v_)(t.userItemUrl,"removeResources"),e.next=7,t.portal._request(a,{method:"post",query:{resource:r.path},signal:(0,s.U2)(n,"signal")});case 7:r.portalItem=null;case 8:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function v(e,t){return m.apply(this,arguments)}function m(){return m=(0,a.Z)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.load(r);case 2:return n=(0,u.v_)(t.userItemUrl,"removeResources"),e.abrupt("return",t.portal._request(n,{method:"post",query:{deleteAll:!0},signal:(0,s.U2)(r,"signal")}));case 4:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function y(e){var t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function g(e){var t=x(e),r=(0,n.Z)(t,2),a=r[0],i=r[1],o=y(a),s=(0,n.Z)(o,2),u=s[0],l=s[1];return[u,l,i]}function x(e){var t=(0,u.Ml)(e);return(0,s.Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}function w(e){return b.apply(this,arguments)}function b(){return b=(0,a.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t instanceof Blob)){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,(0,i["default"])(t.url,{responseType:"blob"});case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function S(e,t){if(!e.hasPath())return null;var r=g(e.path),a=(0,n.Z)(r,3),i=a[0],o=a[2];return e.portalItem.resourceFromPath((0,u.v_)(i,t+o))}function k(e,t){if(!e.hasPath())return null;var r=g(e.path),a=(0,n.Z)(r,3),i=a[0],o=a[2];return e.portalItem.resourceFromPath((0,u.v_)(i,t+o))}}}]);