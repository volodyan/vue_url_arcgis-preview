"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[2946],{11047:function(t,e,n){n.d(e,{mR:function(){return H},C$:function(){return C},e2:function(){return P},Jq:function(){return ut},wO:function(){return X},Mk:function(){return B},cM:function(){return J},Z_:function(){return q},ws:function(){return F},xV:function(){return W},Ub:function(){return st},UK:function(){return Z},Yw:function(){return V},$_:function(){return w},Gr:function(){return tt},nU:function(){return G},Ll:function(){return rt},$K:function(){return v},DQ:function(){return et},HX:function(){return Q},hj:function(){return b},iw:function(){return nt},TB:function(){return ot},sG:function(){return j},Gg:function(){return it},js:function(){return at},Y8:function(){return D}});n(48675),n(3462);var r=n(25585),i=n(87441),o=(n(14937),n(95195),n(49026)),a=n(52214);class s{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(t,e,n,r,i,o,a,s,u){this.color=t,this.haloColor=e,this.haloSize=n,this.size=r,this.angle=i,this.offsetX=o,this.offsetY=a,this.hAnchor=s,this.vAnchor=u}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}s.pool=new a.Z(s);n(29168);const u=i.Z.getLogger("esri.views.2d.engine.webgl.Utils"),c="geometry",l=[{name:c,strideInBytes:36,divisor:0}],f=[{name:c,strideInBytes:32,divisor:0}],h=[{name:c,strideInBytes:20,divisor:0}],d=[{name:c,strideInBytes:12,divisor:0}],p=[{name:c,strideInBytes:40,divisor:0}],_=[{name:c,strideInBytes:36,divisor:0}],T=[{name:c,strideInBytes:36,divisor:0}];function m(t){const e={};for(const n of t)e[n.name]=n.strideInBytes;return e}const g=m(l),E=m(f),L=m(h),I=m(d),M=m(p),A=m(_),S=m(T);function w(t,{fill:e}){switch(t){case o.LW.MARKER:return g;case o.LW.FILL:return"dot-density"===e?I:"simple"===e?L:E;case o.LW.LINE:return M;case o.LW.TEXT:return A;case o.LW.LABEL:return S}}const y=[c],x=[c],U=[c],N=[c],O=[c];function R(t){switch(t){case o.LW.MARKER:return y;case o.LW.FILL:return x;case o.LW.LINE:return U;case o.LW.TEXT:return N;case o.LW.LABEL:return O}}function D(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function C(t,e){switch(e%4){case 0:case 2:return new Uint32Array(Math.floor(t*e/4));case 1:case 3:return new Uint8Array(t*e)}}function P(t,e){switch(e%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function v(t){return null!=t}function b(t){return"number"==typeof t}function F(t){switch(t){case"butt":return 0;case"round":return 1;case"square":return 2;default:return u.error(new r.Z("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),1}}function W(t){switch(t){case"miter":return 2;case"bevel":return 0;case"round":return 1;default:return u.error(new r.Z("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),1}}function G(t){switch(t){case"opacity":return o.pc.OPACITY;case"color":return o.pc.COLOR;case"rotation":return o.pc.ROTATION;case"size":return o.pc.SIZE;default:return u.error(`Cannot interpret unknown vv: ${t}`),null}}function X(t,e,n,r,i,o,a){for(const u in o){const e=o[u].stride,r=D(e),a=o[u].data,s=n[u].data,c=e*i.vertexCount/r,l=e*t/r,f=e*i.vertexFrom/r;for(let t=0;t<c;++t)s[t+l]=a[t+f]}const s=i.indexCount;for(let u=0;u<s;++u)r[u+e]=a[u+i.indexFrom]-i.vertexFrom+t}const H={[c]:35044};function B(t,e){const n=[];for(let r=0;r<5;++r){const i=R(r),o={};for(const t of i)o[t]={data:e(r,t)};n.push({data:t(r),buffers:o})}return n}function z(t){switch(t){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function V(t){switch(t){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:return void u.error(new r.Z("webgl-utils",`Unable to handle type ${t}`))}}function Z(t){switch(t){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:return void u.error(new r.Z("webgl-utils",`Unable to handle type ${t}`))}}function Y(t){const e={};for(const n in t){const r=t[n];let i=0;e[n]=r.map((t=>{const e={...t,normalized:t.normalized||!1,divisor:t.divisor||0,offset:i,stride:0};return i+=t.count*z(t.type),e})),e[n].forEach((t=>t.stride=i))}return e}const k=t=>{const e=new Map;for(const n in t)for(const r of t[n])e.set(r.name,r.location);return e},K=t=>{const e={};for(const n in t){const r=t[n];e[n]=r.length?r[0].stride:0}return e},$=new Map,J=(t,e)=>{if(!$.has(t)){const n=Y(e),r={strides:K(n),bufferLayouts:n,attributes:k(e)};$.set(t,r)}return $.get(t)};function q(t){t(o.LW.FILL),t(o.LW.LINE),t(o.LW.MARKER),t(o.LW.TEXT),t(o.LW.LABEL)}const j=t=>"path"in t&&ct(t.path),Q=t=>"url"in t&&t.url||"imageData"in t&&t.imageData,tt=t=>"imageData"in t&&t.imageData&&"contentType"in t&&t.contentType?`data:${t.contentType};base64,${t.imageData}`:"url"in t?t.url:null,et=t=>"url"in t&&t.url&&t.url.includes(".gif")||"contentType"in t&&"image/gif"===t.contentType||"imageData"in t&&t.imageData.includes("data:image/gif"),nt=t=>"url"in t&&t.url&&t.url.includes(".png")||"contentType"in t&&"image/png"===t.contentType||"imageData"in t&&t.imageData.includes("data:image/png"),rt=t=>t.type&&-1!==t.type.toLowerCase().indexOf("3d");function it(t){switch(t.type){case"line":{const e=t;return"CIMSolidStroke"===e.cim.type&&!e.dashTemplate}case"fill":return"CIMSolidFill"===t.cim.type;case"esriSFS":return"esriSFSSolid"===t.style||"esriSFSNull"===t.style;case"esriSLS":return"esriSLSSolid"===t.style||"esriSLSNull"===t.style;default:return!1}}const ot=t=>t.includes("data:image/svg+xml");function at(t){switch("cim"in t?t.cim.type:t.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!1;default:return!0}}function st(t){const e="maxVVSize"in t&&t.maxVVSize,n="width"in t&&t.width||"size"in t&&t.size||0;return e||n}function ut(t){const e=[];for(let n=0;n<t.length;n++)e.push(t.charCodeAt(n));return e}const ct=t=>!!t&&(t=t.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4))},95195:function(t,e,n){n.d(e,{aH:function(){return a},pr:function(){return i},t2:function(){return o}});var r=n(14621);function i(t,e=0,n=!1){const r=t[e+3];return t[e+0]*=r,t[e+1]*=r,t[e+2]*=r,n||(t[e+3]*=255),t}function o(t){if(!t)return 0;const{r:e,g:n,b:i,a:o}=t;return(0,r.Jz)(e*o,n*o,i*o,255*o)}function a(t){if(!t)return 0;const[e,n,i,o]=t;return(0,r.Jz)(e*(o/255),n*(o/255),i*(o/255),o)}},92963:function(t,e,n){n.d(e,{$0:function(){return a},AI:function(){return r},Al:function(){return h},CQ:function(){return W},CU:function(){return R},D3:function(){return f},Ex:function(){return u},I_:function(){return o},Ic:function(){return d},Ij:function(){return T},Ip:function(){return v},Iw:function(){return c},Jc:function(){return N},Jw:function(){return E},MI:function(){return b},QU:function(){return g},SD:function(){return z},Tz:function(){return G},Uh:function(){return F},V4:function(){return O},XJ:function(){return P},Zd:function(){return y},_6:function(){return B},a:function(){return D},aK:function(){return A},e0:function(){return H},eF:function(){return l},f2:function(){return m},fL:function(){return C},iJ:function(){return p},iV:function(){return x},kF:function(){return L},m4:function(){return S},nM:function(){return _},oK:function(){return X},ru:function(){return i},tQ:function(){return U},uG:function(){return w},xl:function(){return M},xm:function(){return s},yP:function(){return I}});const r=1e-30,i=4294967295,o=512,a=8,s=29,u=24,c=8,l={metrics:{width:15,height:17,left:0,top:-7,advance:14}},f=0,h=0,d=0,p=1,_=2,T=3,m=4,g=5,E=6,L=5,I=6,M=1,A=2,S=2,w=1,y=2,x=4,U=1.05,N=6,O=5,R=6,D=1.15,C=2,P=8,v=500,b=10,F=2,W=0,G=1,X=4,H=8,B=4,z=1},49026:function(t,e,n){var r,i,o,a,s,u,c;n.d(e,{LW:function(){return r},Un:function(){return c},X:function(){return s},jx:function(){return o},mf:function(){return u},pc:function(){return a}}),function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL"}(r||(r={})),function(t){t[t.SUCCEEDED=0]="SUCCEEDED",t[t.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(i||(i={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(o||(o={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(a||(a={})),function(t){t[t.NONE=0]="NONE",t[t.OPACITY=1]="OPACITY",t[t.COLOR=2]="COLOR",t[t.ROTATION=4]="ROTATION",t[t.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",t[t.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",t[t.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",t[t.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(s||(s={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(u||(u={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(c||(c={}))},14621:function(t,e,n){n.d(e,{Au:function(){return i},Jz:function(){return a},UJ:function(){return o}});n(48675),n(3462);const r=new Float32Array(1);new Uint32Array(r.buffer);function i(t){return[255&t,(65280&t)>>>8,(16711680&t)>>>16,(4278190080&t)>>>24]}function o(t,e){return 65535&t|e<<16}function a(t,e,n,r){return 255&t|(255&e)<<8|(255&n)<<16|r<<24}},29168:function(t,e,n){n.d(e,{Z:function(){return c}});n(21703);var r=n(14937),i=n(27092),o=n(56770),a=n(28383),s=n(68412);const u=4;class c{constructor(t,e,n=null){this._context=t,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,t.instanceCounter.increment(a._g.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...e},34067===this._descriptor.target?this.setDataCubeMap(n):this.setData(n)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(a._g.Texture,this))}release(){this.dispose()}resize(t,e){const n=this._descriptor;n.width===t&&n.height===e||(n.width=t,n.height=e,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(t=null){for(let e=34069;e<=34074;e++)this.setData(t,e)}setData(t,e=3553){if(!this._context||!this._context.gl)return;const n=this._context.gl;this._glName||(this._glName=n.createTexture()),void 0===t&&(t=null),null===t&&(this._descriptor.width=this._descriptor.width||u,this._descriptor.height=this._descriptor.height||u);const r=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES),a=this._descriptor;c._validateTexture(this._context,a),n.pixelStorei(n.UNPACK_ALIGNMENT,a.unpackAlignment),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,a.flipped?1:0),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.preMultiplyAlpha?1:0);const s=a.pixelFormat;let f=a.internalFormat?a.internalFormat:this._deriveInternalFormat(s,a.dataType);if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement){let r=t.width,i=t.height;t instanceof HTMLVideoElement&&(r=t.videoWidth,i=t.videoHeight),a.width&&a.height,n.texImage2D(e,0,f,s,a.dataType,t),(0,o.zu)(n),a.hasMipmap&&this.generateMipmap(),void 0===a.width&&(a.width=r),void 0===a.height&&(a.height=i)}else{null!=a.width&&a.height,n.DEPTH24_STENCIL8&&f===n.DEPTH_STENCIL&&(f=n.DEPTH24_STENCIL8);let r=a.width,u=a.height;if(l(t)){const i=Math.round(Math.log(Math.max(r,u))/Math.LN2)+1;a.hasMipmap=a.hasMipmap&&i===t.levels.length;for(let o=0;;++o){const i=t.levels[Math.min(o,t.levels.length-1)];if(n.compressedTexImage2D(e,o,f,r,u,0,i),1===r&&1===u||!a.hasMipmap)break;r=Math.max(1,r>>1),u=Math.max(1,u>>1)}}else if((0,i.pC)(t))n.texImage2D(e,0,f,r,u,0,s,a.dataType,t),(0,o.zu)(n),a.hasMipmap&&this.generateMipmap();else for(let t=0;n.texImage2D(e,t,f,r,u,0,s,a.dataType,null),(0,o.zu)(n),(1!==r||1!==u)&&a.hasMipmap;++t)r=Math.max(1,r>>1),u=Math.max(1,u>>1)}c._applySamplingMode(n,this._descriptor),c._applyWrapMode(n,this._descriptor),c._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,o.zu)(n),this._context.bindTexture(r,c.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,e,n,r,i,o,a=3553){this._glName;const s=this._context.gl,u=this._descriptor,l=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);e<0||n<0||r>u.width||i>u.height||e+r>u.width||u.height,s.pixelStorei(s.UNPACK_ALIGNMENT,u.unpackAlignment),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,u.flipped?1:0),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.preMultiplyAlpha?1:0),o instanceof ImageData||o instanceof HTMLImageElement||o instanceof HTMLCanvasElement||o instanceof HTMLVideoElement?s.texSubImage2D(a,t,e,n,u.pixelFormat,u.dataType,o):s.texSubImage2D(a,t,e,n,r,i,u.pixelFormat,u.dataType,o),this._context.bindTexture(l,c.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;t.hasMipmap||(t.hasMipmap=!0,this._samplingModeDirty=!0,c._validateTexture(this._context,t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);const e=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(t.target),this._context.bindTexture(e,c.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,c._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(c._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(c._applyWrapMode(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(t,e){if("webgl"===this._context.webglVersion)return t;if(5126===e)switch(t){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return t}static _validateTexture(t,e){e.width<0||e.height;const n=(0,r.wt)(e.width)&&(0,r.wt)(e.height);(0,s.Z)(t.gl)||n||("number"==typeof e.wrapMode?e.wrapMode:33071===e.wrapMode.s&&e.wrapMode.t,e.hasMipmap)}static _applySamplingMode(t,e){let n=e.samplingMode,r=e.samplingMode;9985===n||9987===n?(n=9729,e.hasMipmap||(r=9729)):9984!==n&&9986!==n||(n=9728,e.hasMipmap||(r=9728)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,n),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,r)}static _applyWrapMode(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}static _applyAnisotropicFilteringParameters(t,e){var n;const r=t.capabilities.textureFilterAnisotropic;r&&t.gl.texParameterf(e.target,r.TEXTURE_MAX_ANISOTROPY,null!=(n=e.maxAnisotropy)?n:1)}}function l(t){return(0,i.pC)(t)&&"type"in t&&"compressed"===t.type}c.TEXTURE_UNIT_FOR_UPDATES=0},68412:function(t,e,n){function r(t){return window.WebGL2RenderingContext&&t instanceof window.WebGL2RenderingContext}n.d(e,{Z:function(){return r}})},56770:function(t,e,n){n.d(e,{CG:function(){return l},hZ:function(){return c},zu:function(){return f}});n(21703);var r=n(25585),i=n(35425),o=n(87441);const a=o.Z.getLogger("esri/views/webgl");function s(t,e){switch(e){case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const u=!!(0,i.Z)("enable-feature:webgl-debug");function c(){return u}function l(){return u}function f(t){if(c()){const e=t.getError();if(e){const n=s(t,e),i=(new Error).stack;a.error(new r.Z("webgl-error","WebGL error occured",{message:n,stack:i}))}}}},28383:function(t,e,n){n.d(e,{Ld:function(){return r},Lu:function(){return o},_g:function(){return i}});const r=33984;var i;!function(t){t[t.Texture=0]="Texture",t[t.Buffer=1]="Buffer",t[t.VAO=2]="VAO",t[t.VertexShader=3]="VertexShader",t[t.FragmentShader=4]="FragmentShader",t[t.Program=5]="Program",t[t.Framebuffer=6]="Framebuffer",t[t.Renderbuffer=7]="Renderbuffer",t[t.COUNT=8]="COUNT"}(i||(i={}));const o=33306}}]);