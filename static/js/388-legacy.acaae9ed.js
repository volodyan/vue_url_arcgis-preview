"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[388],{388:function(e,t,i){i.r(t),i.d(t,{default:function(){return Z}});var n=i(62032),r=i(16198),a=i(76133),s=i(92751),o=i(99418),l=i(49161),u=(i(78975),i(51532),i(41539),i(78783),i(33948),i(21249),i(57327),i(84944),i(33792),i(63825)),p=i(78136),h=i(54643),d=i(44621),y=(i(87441),i(90202),i(57787),i(35425),i(61726),i(92236)),c=i(23867),v=i(15041),f=i(7804),g=i(21211),b=i(43162),w=i(41815),m=i(74139),_=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,a.Z)(this,i),e=t.apply(this,arguments),e._graphicsViewMap={},e._popupTemplates=new Map,e.graphicsViews=[],e}return(0,s.Z)(i,[{key:"hitTest",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(t,i){var n,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.graphicsViews.length){e.next=2;break}return e.abrupt("return",null);case 2:return n=this.graphicsViews.reverse().map((function(e){return e.hitTest(t)})),e.next=5,Promise.all(n);case 5:return e.abrupt("return",e.sent.flat().filter((function(e,t){return e&&(e.popupTemplate=r._popupTemplates.get(r.graphicsViews[t]),e.layer=r.layer,e.sourceLayer=r.layer),!!e})));case 6:case"end":return e.stop()}}),e,this)})));function t(t,i){return e.apply(this,arguments)}return t}()},{key:"update",value:function(e){if(this.graphicsViews){var t,i=(0,n.Z)(this.graphicsViews);try{for(i.s();!(t=i.n()).done;){var r=t.value;r.processUpdate(e)}}catch(a){i.e(a)}finally{i.f()}}}},{key:"attach",value:function(){var e=this;this.handles.add([(0,d.S1)(this.layer,"featureCollections",(function(t){e._clear();var i,r=(0,n.Z)(t);try{for(r.s();!(i=r.n()).done;){var a=i.value,s=a.popupInfo,o=a.featureSet,l=a.layerDefinition,u=f["default"].fromJSON(o),d=new h.Z(u.features),y=l.drawingInfo,c=s?p.Z.fromJSON(s):null,g=(0,v.i)(y.renderer),m=new w.Z({requestUpdateCallback:function(){return e.requestUpdate()},view:e.view,graphics:d,renderer:g,container:new b.Z(e.view.featuresTilingScheme)});e._graphicsViewMap[u.geometryType]=m,e._popupTemplates.set(m,c),"polygon"!==u.geometryType||e.layer.polygonSymbol?"polyline"!==u.geometryType||e.layer.lineSymbol?"point"!==u.geometryType||e.layer.pointSymbol||(e.layer.pointSymbol=g.symbol):e.layer.lineSymbol=g.symbol:e.layer.polygonSymbol=g.symbol,e.graphicsViews.push(m),e.container.addChild(m.container)}}catch(_){r.e(_)}finally{r.f()}})),(0,d.S1)(this.layer,"polygonSymbol",(function(t){e._graphicsViewMap.polygon.renderer=new c.Z({symbol:t})})),(0,d.S1)(this.layer,"lineSymbol",(function(t){e._graphicsViewMap.polyline.renderer=new c.Z({symbol:t})})),(0,d.S1)(this.layer,"pointSymbol",(function(t){e._graphicsViewMap.point.renderer=new c.Z({symbol:t})}))],"georsslayerview")}},{key:"detach",value:function(){this.handles.remove("georsslayerview"),this._clear()}},{key:"moveStart",value:function(){}},{key:"moveEnd",value:function(){}},{key:"viewChange",value:function(){var e,t=(0,n.Z)(this.graphicsViews);try{for(t.s();!(e=t.n()).done;){var i=e.value;i.viewChange()}}catch(r){t.e(r)}finally{t.f()}}},{key:"_clear",value:function(){this.container.removeAllChildren();var e,t=(0,n.Z)(this.graphicsViews);try{for(t.s();!(e=t.n()).done;){var i=e.value;i.destroy()}}catch(r){t.e(r)}finally{t.f()}this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}}]),i}((0,g.y)(m.Z));_=(0,u._)([(0,y.j)("esri.views.2d.layers.GeoRSSLayerView2D")],_);var Z=_},21211:function(e,t,i){i.d(t,{y:function(){return M}});var n=i(76133),r=i(92751),a=i(50460),s=i(87349),o=i(99418),l=i(49161),u=(i(41539),i(63825)),p=i(54643),h=i(80218),d=i(44621),y=i(2553),c=(i(57787),i(35425),i(90202),i(92236)),v=i(38430),f=i(71741),g=(i(87441),i(61726),function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,r.Z)(i)}(f.wq));g=(0,u._)([(0,c.j)("esri.views.layers.support.ClipArea")],g);var b,w=g,m=(i(9653),b=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,n.Z)(this,i),e=t.apply(this,arguments),e.type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return(0,r.Z)(i,[{key:"clone",value:function(){return new b({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(w));(0,u._)([(0,y.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"left",void 0),(0,u._)([(0,y.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"right",void 0),(0,u._)([(0,y.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"top",void 0),(0,u._)([(0,y.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"bottom",void 0),(0,u._)([(0,y.Cb)({readOnly:!0})],m.prototype,"version",null),m=b=(0,u._)([(0,c.j)("esri.views.layers.support.ClipRect")],m);var _,Z=m,k=(i(75065),i(22779)),C=i(64316),S=i(7230),R=i(72110),V={base:k.Z,key:"type",typeMap:{extent:S.Z,polygon:R.Z}},q=_=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,n.Z)(this,i),e=t.apply(this,arguments),e.type="geometry",e.geometry=null,e}return(0,r.Z)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new _({geometry:this.geometry.clone()})}}]),i}(w);(0,u._)([(0,y.Cb)({types:V,json:{read:C.im,write:!0}})],q.prototype,"geometry",void 0),(0,u._)([(0,y.Cb)({readOnly:!0})],q.prototype,"version",null),q=_=(0,u._)([(0,c.j)("esri.views.layers.support.Geometry")],q);var T=q,j=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,n.Z)(this,i),e=t.apply(this,arguments),e.type="path",e.path=[],e}return(0,r.Z)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(w);(0,u._)([(0,y.Cb)({type:[[[Number]]],json:{write:!0}})],j.prototype,"path",void 0),(0,u._)([(0,y.Cb)({readOnly:!0})],j.prototype,"version",null),j=(0,u._)([(0,c.j)("esri.views.layers.support.Path")],j);var O=j,U=p.Z.ofType({key:"type",base:w,typeMap:{rect:Z,path:O,geometry:T}}),M=function(e){var t=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,n.Z)(this,i),e=t.apply(this,arguments),e.clips=new U,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}return(0,r.Z)(i,[{key:"initialize",value:function(){var e,t=this;this.container||(this.container=new v.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,d.S1)(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),(0,d.S1)(this,["layer.opacity","container"],(function(){var e,i;t.container&&(t.container.opacity=null!=(e=null==(i=t.layer)?void 0:i.opacity)?e:1)}),!0),(0,d.S1)(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),(0,d.S1)(this,["layer.effect"],(function(e){t.container&&(t.container.effect=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))}},{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(!this.updatingHandles||!this.updatingHandles.updating)}},{key:"isVisibleAtScale",value:function(e){var t=!0,i=this.layer,n=i.minScale,r=i.maxScale;if(null!=n&&null!=r){var a=!n,s=!r;!a&&e<=n&&(a=!0),!s&&e>=r&&(s=!0),t=a&&s}return t}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"hitTest",value:function(e,t){return Promise.resolve(null)}},{key:"isUpdating",value:function(){return!1}},{key:"isRendering",value:function(){return!1}},{key:"canResume",value:function(){return!!(0,a.Z)((0,s.Z)(i.prototype),"canResume",this).call(this)&&this.isVisibleAtScale(this.view.scale)}}]),i}(e);return(0,u._)([(0,y.Cb)({type:U,set:function(e){var t=(0,h.Z)(e,this._get("clips"),U);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,u._)([(0,y.Cb)()],t.prototype,"moving",void 0),(0,u._)([(0,y.Cb)()],t.prototype,"attached",void 0),(0,u._)([(0,y.Cb)()],t.prototype,"container",void 0),(0,u._)([(0,y.Cb)()],t.prototype,"suspended",void 0),(0,u._)([(0,y.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,u._)([(0,y.Cb)()],t.prototype,"updateRequested",void 0),(0,u._)([(0,y.Cb)()],t.prototype,"updating",null),(0,u._)([(0,y.Cb)()],t.prototype,"view",void 0),t=(0,u._)([(0,c.j)("esri.views.2d.layers.LayerView2D")],t),t}},43162:function(e,t,i){i.d(t,{Z:function(){return h}});var n=i(76133),r=i(92751),a=i(50460),s=i(87349),o=i(99418),l=i(49161),u=(i(41539),i(49026)),p=i(97700),h=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,r.Z)(i,[{key:"renderChildren",value:function(e){this.attributeView.bindTextures(e.context,!1),this.children.some((function(e){return e.hasData}))&&((0,a.Z)((0,s.Z)(i.prototype),"renderChildren",this).call(this,e),e.drawPhase===u.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===u.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}},{key:"_renderHighlight",value:function(e){var t=e.painter,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}]),i}(p.Z)},74139:function(e,t,i){i.d(t,{Z:function(){return b}});var n=i(76133),r=i(92751),a=i(99418),s=i(49161),o=(i(68309),i(92222),i(63825)),l=i(44171),u=i(78534),p=i(48595),h=i(7054),d=i(87441),y=i(27092),c=i(69324),v=i(2553),f=(i(57787),i(35425),i(90202),i(92236)),g=function(e){(0,a.Z)(i,e);var t=(0,s.Z)(i);function i(e){var r;return(0,n.Z)(this,i),r=t.call(this,e),r.layer=null,r.parent=null,r}return(0,r.Z)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";throw d.Z.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(i,"')"),t),t}}))}},{key:"fullOpacity",get:function(){return(0,y.Pt)(this.get("layer.opacity"),1)*(0,y.Pt)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null==(e=this.layer)?void 0:e.visible)},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}((0,p.p)((0,h.I)((0,c.v)(u.Z.EventedMixin(l.Z)))));(0,o._)([(0,v.Cb)()],g.prototype,"fullOpacity",null),(0,o._)([(0,v.Cb)()],g.prototype,"layer",void 0),(0,o._)([(0,v.Cb)()],g.prototype,"parent",void 0),(0,o._)([(0,v.Cb)({readOnly:!0})],g.prototype,"suspended",null),(0,o._)([(0,v.Cb)({readOnly:!0})],g.prototype,"suspendInfo",null),(0,o._)([(0,v.Cb)({readOnly:!0})],g.prototype,"legendEnabled",null),(0,o._)([(0,v.Cb)({type:Boolean,readOnly:!0})],g.prototype,"updating",null),(0,o._)([(0,v.Cb)({readOnly:!0})],g.prototype,"updatingProgress",null),(0,o._)([(0,v.Cb)()],g.prototype,"visible",null),g=(0,o._)([(0,f.j)("esri.views.layers.LayerView")],g);var b=g}}]);