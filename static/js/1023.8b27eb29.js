"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[1023],{79204:function(t,e,s){s.d(e,{ZP:function(){return f}});var i=s(63825),n=s(44171),r=s(35425),a=s(40199),h=s(87441),l=s(2553),o=(s(90202),s(92236)),c=s(33251),u=s(89878);const d=-1;let v=class extends n.Z{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=(0,r.Z)("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(p(t))}catch(e){this._transitionTo([]),h.Z.getLogger(this.declaredClass).warn("Invalid Effect",{effect:t,error:e})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return null!==this._to}canTransitionTo(t){try{return this.scale>0&&_(this._current,p(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}end(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&_(this._current,t,this.scale)?(this._final=t,this._to=(0,a.d9)(t),S(this._current,this._to,this.scale),this._from=(0,a.d9)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?(0,a.d9)(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let s=0;s<this._current.length;s++){const t=this._current[s],i=this._from[s],n=this._to[s];t.scale=g(i.scale,n.scale,e);for(let s=0;s<t.effects.length;s++){const r=t.effects[s],a=i.effects[s],h=n.effects[s];r.interpolate(a,h,e)}}1===e&&(this._current=this._final,this._set("effects",this._current[0]?(0,a.d9)(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),0===this._current.length)return;const e=this._current,s=this._current.length-1;let i,n,r=1;if(1===e.length||t>=e[0].scale)n=i=e[0].effects;else if(t<=e[s].scale)n=i=e[s].effects;else for(let a=0;a<s;a++){const s=e[a],h=e[a+1];if(s.scale>=t&&h.scale<=t){r=(t-s.scale)/(h.scale-s.scale),i=s.effects,n=h.effects;break}}for(let a=0;a<this.effects.length;a++)this.effects[a].interpolate(i[a],n[a],r)}};(0,i._)([(0,l.Cb)()],v.prototype,"_to",void 0),(0,i._)([(0,l.Cb)()],v.prototype,"duration",void 0),(0,i._)([(0,l.Cb)({value:""})],v.prototype,"effect",null),(0,i._)([(0,l.Cb)({readOnly:!0})],v.prototype,"effects",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],v.prototype,"hasEffects",null),(0,i._)([(0,l.Cb)({value:0})],v.prototype,"scale",null),(0,i._)([(0,l.Cb)({readOnly:!0})],v.prototype,"transitioning",null),v=(0,i._)([(0,o.j)("esri.layers.effects.EffectView")],v);const f=v;function p(t){const e=(0,c.Q)(t)||[];return m(e)?[{scale:d,effects:e}]:e}function _(t,e,s){var i,n,r,a;return null==(i=t[0])||!i.effects||null==(n=e[0])||!n.effects||!(((null==(r=t[0])?void 0:r.scale)===d||(null==(a=e[0])?void 0:a.scale)===d)&&(t.length>1||e.length>1)&&s<=0)&&(0,u.AS)(t[0].effects,e[0].effects)}function S(t,e,s){var i,n;const r=t.length>e.length?t:e,a=t.length>e.length?e:t,h=a[a.length-1],l=null!=(i=null==h?void 0:h.scale)?i:s,o=null!=(n=null==h?void 0:h.effects)?n:[];for(let c=a.length;c<r.length;c++)a.push({scale:l,effects:[...o]});for(let c=0;c<r.length;c++)a[c].scale=a[c].scale===d?s:a[c].scale,r[c].scale=r[c].scale===d?s:r[c].scale,(0,u.uF)(a[c].effects,r[c].effects)}function g(t,e,s){return t+(e-t)*s}function m(t){const e=t[0];return!!e&&"type"in e}},38430:function(t,e,s){s.d(e,{W:function(){return a}});var i=s(33482),n=s(79204),r=s(80188);class a extends r.s{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach((e=>e.clips=t))}get computedEffects(){var t,e;return null!=(t=null==(e=this._effectView)?void 0:e.effects)?t:null}get effect(){var t,e;return null!=(t=null==(e=this._effectView)?void 0:e.effect)?t:""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new n.ZP),this._effectView.effect=t,this.requestRender())}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectView&&(this._effectView.transitionStep(t,e),this._effectView.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t);this.renderChildren(e)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t)return t;if(this.contains(t))return t;this._needsSort=!0;const s=t.parent;return s&&s!==this&&s.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}_createTransforms(){return{dvs:(0,i.c)()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.beforeRender(t);for(const e of this.children)e.processRender(t);for(const e of this.children)e.afterRender(t)}createRenderParams(t){return{...t,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}},80188:function(t,e,s){s.d(e,{s:function(){return l}});var i=s(78534),n=s(35425),r=s(27092),a=s(24446);const h=1/(0,n.Z)("mapview-transitions-duration");class l extends i.Z{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return(0,r.Wi)(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,a.hh)(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,a.hh)(),this.requestRender()),this._fadeOutResolver.promise}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var t;null==(t=this.parent)||t.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const e=this._fadeOutResolver||!this.visible?0:this.opacity,s=this.computedOpacity;if(s===e)this.computedVisible=this.visible;else{const i=t*h;this.computedOpacity=s>e?Math.max(e,s-i):Math.min(e,s+i),this.computedVisible=this.computedOpacity>0;const n=e===this.computedOpacity;this.inFadeTransition=!n,n||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}},72239:function(t,e,s){s.d(e,{Gq:function(){return U},a:function(){return C},dk:function(){return F},hF:function(){return L},jj:function(){return O},m2:function(){return z},mE:function(){return w},qr:function(){return x}});s(21703);var i=s(25585),n=s(49026),r=s(55094);function a(t,e){const s=n.X.SIZE_FIELD_STOPS|n.X.SIZE_MINMAX_VALUE|n.X.SIZE_SCALE_STOPS|n.X.SIZE_UNIT_VALUE,i=(t&(n.mf.FIELD_TARGETS_OUTLINE|n.mf.MINMAX_TARGETS_OUTLINE|n.mf.SCALE_TARGETS_OUTLINE|n.mf.UNIT_TARGETS_OUTLINE))>>>4;return e.isOutline||e.isOutlinedFill?s&i:s&~i}const h=0,l=8,o=7,c=8,u=11,d=11,v=12,f=13,p=14,_=15,S=15,g=16,m=17,V=18,y=19,R=20,T=21,b=22;function O(t,e){switch(t){case n.LW.FILL:return F.from(e);case n.LW.LINE:return C.from(e);case n.LW.MARKER:return w.from(e);case n.LW.TEXT:return x.from(e);case n.LW.LABEL:return U.from(e);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function L(t){switch(z.load(t).geometryType){case n.LW.MARKER:return new w(t);case n.LW.FILL:return new F(t);case n.LW.LINE:return new C(t);case n.LW.TEXT:return new x(t);case n.LW.LABEL:return new U(t)}}class z{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(c,u)}set geometryType(t){this.setBits(t,c,u)}get mapAligned(){return!!this.bit(R)}set mapAligned(t){this.setBit(R,t)}get sdf(){return!!this.bit(d)}set sdf(t){this.setBit(d,t)}get pattern(){return!!this.bit(v)}set pattern(t){this.setBit(v,t)}get textureBinding(){return this.bits(h,l)}set textureBinding(t){this.setBits(t,h,l)}get geometryTypeString(){switch(this.geometryType){case n.LW.FILL:return"fill";case n.LW.MARKER:return"marker";case n.LW.LINE:return"line";case n.LW.TEXT:return"text";case n.LW.LABEL:return"label";default:throw new i.Z(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const s=1<<t;e?this._data|=s:this._data&=~s}bit(t){return(this._data&1<<t)>>t}setBits(t,e,s){for(let i=e,n=0;i<s;i++,n++)this.setBit(i,0!=(t&1<<n))}bits(t,e){let s=0;for(let i=t,n=0;i<e;i++,n++)s|=this.bit(i)<<n;return s}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(o&this.textureBinding)}}z.shared=new z(0);const E=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(g)}set vvSizeMinMaxValue(t){this.setBit(g,t)}get vvSizeScaleStops(){return 0!==this.bit(m)}set vvSizeScaleStops(t){this.setBit(m,t)}get vvSizeFieldStops(){return 0!==this.bit(V)}set vvSizeFieldStops(t){this.setBit(V,t)}get vvSizeUnitValue(){return 0!==this.bit(y)}set vvSizeUnitValue(t){this.setBit(y,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,e){super.setVV(t,e);const s=a(t,e)&t;this.vvSizeMinMaxValue=!!(s&n.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(s&n.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(s&n.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(s&n.X.SIZE_SCALE_STOPS)}},M=t=>class extends t{get vvRotation(){return 0!==this.bit(_)}set vvRotation(t){this.setBit(_,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,e){super.setVV(t,e),this.vvRotation=!e.isOutline&&!!(t&n.X.ROTATION)}},A=t=>class extends t{get vvColor(){return 0!==this.bit(f)}set vvColor(t){this.setBit(f,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,e){super.setVV(t,e),this.vvColor=!e.isOutline&&!!(t&n.X.COLOR)}},I=t=>class extends t{get vvOpacity(){return 0!==this.bit(p)}set vvOpacity(t){this.setBit(p,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,e){super.setVV(t,e),this.vvOpacity=!e.isOutline&&!!(t&n.X.OPACITY)}};class F extends(A(I(E(z)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=n.LW.FILL,e.dotDensity="dot-density"===t.stride.fill,e.simple="simple"===t.stride.fill,e.outlinedFill=t.isOutlinedFill,e.dotDensity||e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,outlinedFill:this.outlinedFill,simple:this.simple,vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}get dotDensity(){return!!this.bit(S)}set dotDensity(t){this.setBit(S,t)}get simple(){return!!this.bit(b)}set simple(t){this.setBit(b,t)}get outlinedFill(){return!!this.bit(T)}set outlinedFill(t){this.setBit(T,t)}}F.shared=new F(0);class w extends(A(I(M(E(z))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=n.LW.MARKER,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}w.shared=new w(0);class C extends(A(I(E(z)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=n.LW.LINE,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}C.shared=new C(0);class x extends(A(I(M(E(z))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=n.LW.TEXT,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}x.shared=new x(0);class U extends(E(z)){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=n.LW.LABEL,e.setVV(t.vvFlags,t),e.mapAligned=(0,r.N)(t.placement),e.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}U.shared=new U(0)},55094:function(t,e,s){function i(t){switch(t){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}s.d(e,{N:function(){return i}})}}]);