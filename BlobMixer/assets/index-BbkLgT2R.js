(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oc="170",Cd=0,Jc=1,Pd=2,Cf=1,Dd=2,ii=3,Li=0,en=1,Nn=2,Ci=0,Or=1,$c=2,Qc=3,eu=4,Ud=5,Zi=100,Ld=101,Id=102,Fd=103,Nd=104,Od=200,Bd=201,kd=202,zd=203,el=204,tl=205,Gd=206,Vd=207,Hd=208,Wd=209,Xd=210,Yd=211,qd=212,jd=213,Kd=214,nl=0,il=1,rl=2,Hr=3,sl=4,al=5,ol=6,ll=7,Pf=0,Zd=1,Jd=2,Pi=0,$d=1,Qd=2,ep=3,Df=4,tp=5,np=6,ip=7,Uf=300,Wr=301,Xr=302,Ia=303,cl=304,Xa=306,ul=1e3,oi=1001,fl=1002,gn=1003,rp=1004,Zs=1005,Lt=1006,uo=1007,bi=1008,fi=1009,Lf=1010,If=1011,Cs=1012,lc=1013,rr=1014,An=1015,li=1016,cc=1017,uc=1018,Yr=1020,Ff=35902,Nf=1021,Of=1022,Bn=1023,Bf=1024,kf=1025,Br=1026,qr=1027,zf=1028,fc=1029,Gf=1030,hc=1031,dc=1033,Ea=33776,Ta=33777,ba=33778,Aa=33779,hl=35840,dl=35841,pl=35842,ml=35843,_l=36196,gl=37492,vl=37496,xl=37808,Sl=37809,Ml=37810,yl=37811,El=37812,Tl=37813,bl=37814,Al=37815,wl=37816,Rl=37817,Cl=37818,Pl=37819,Dl=37820,Ul=37821,wa=36492,Ll=36494,Il=36495,Vf=36283,Fl=36284,Nl=36285,Ol=36286,sp=3200,Hf=3201,Wf=0,ap=1,Ti="",Tn="srgb",cr="srgb-linear",Ya="linear",st="srgb",gr=7680,tu=519,op=512,lp=513,cp=514,Xf=515,up=516,fp=517,hp=518,dp=519,nu=35044,iu="300 es",ci=2e3,Fa=2001;class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fo=Math.PI/180,Bl=180/Math.PI;function Bs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[s&255]+Ot[s>>8&255]+Ot[s>>16&255]+Ot[s>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function kt(s,e,t){return Math.max(e,Math.min(t,s))}function pp(s,e){return(s%e+e)%e}function ho(s,e,t){return(1-t)*s+t*e}function ds(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,n,r,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=n[0],p=n[3],m=n[6],S=n[1],M=n[4],v=n[7],b=n[2],w=n[5],E=n[8];return r[0]=a*_+o*S+l*b,r[3]=a*p+o*M+l*w,r[6]=a*m+o*v+l*E,r[1]=c*_+u*S+f*b,r[4]=c*p+u*M+f*w,r[7]=c*m+u*v+f*E,r[2]=h*_+d*S+g*b,r[5]=h*p+d*M+g*w,r[8]=h*m+d*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+n*r*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=t*f+i*h+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(n*c-u*i)*_,e[2]=(o*i-n*a)*_,e[3]=h*_,e[4]=(u*t-n*l)*_,e[5]=(n*r-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(po.makeScale(e,t)),this}rotate(e){return this.premultiply(po.makeRotation(-e)),this}translate(e,t){return this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const po=new qe;function Yf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ps(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mp(){const s=Ps("canvas");return s.style.display="block",s}const ru={};function Ss(s){s in ru||(ru[s]=!0,console.warn(s))}function _p(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function gp(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vp(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tt={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===st&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===st&&(s.r=kr(s.r),s.g=kr(s.g),s.b=kr(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Ya:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function kr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const su=[.64,.33,.3,.6,.15,.06],au=[.2126,.7152,.0722],ou=[.3127,.329],lu=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cu=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[cr]:{primaries:su,whitePoint:ou,transfer:Ya,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:au,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:su,whitePoint:ou,transfer:st,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:au,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}});let vr;class xp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vr===void 0&&(vr=Ps("canvas")),vr.width=e.width,vr.height=e.height;const i=vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ps("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ui(t[i]/255)*255):t[i]=ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sp=0;class qf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(mo(n[a].image)):r.push(mo(n[a]))}else r=mo(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function mo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mp=0;class It extends es{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=oi,n=oi,r=Lt,a=bi,o=Bn,l=fi,c=It.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Bs(),this.name="",this.source=new qf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ul:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ul:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Uf;It.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,n=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(d+1)/2,b=(m+1)/2,w=(u+h)/4,E=(f+_)/4,T=(g+p)/4;return M>v&&M>b?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=w/i,r=E/i):v>b?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=w/n,r=T/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=E/r,n=T/r),this.set(i,n,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yp extends es{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new It(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends yp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class jf extends It{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=gn,this.minFilter=gn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ep extends It{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=gn,this.minFilter=gn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ks{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],f=i[n+3];const h=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let p=1-o;const m=l*h+c*d+u*g+f*_,S=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const b=Math.sqrt(M),w=Math.atan2(b,m*S);p=Math.sin(p*w)/b,o=Math.sin(o*w)/b}const v=o*S;if(l=l*p+h*v,c=c*p+d*v,u=u*p+g*v,f=f*p+_*v,p===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),f=o(r/2),h=l(i/2),d=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-n)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-n)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+n*c-r*l,this._y=n*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*n+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=n*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,i=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),u=2*(o*t-r*n),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=n+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _o.copy(this).projectOnVector(e),this.sub(_o)}reflect(e){return this.sub(_o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _o=new te,uu=new ks;class ur{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Js.copy(i.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),$s.subVectors(this.max,ps),xr.subVectors(e.a,ps),Sr.subVectors(e.b,ps),Mr.subVectors(e.c,ps),vi.subVectors(Sr,xr),xi.subVectors(Mr,Sr),Bi.subVectors(xr,Mr);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Bi.z,Bi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Bi.z,0,-Bi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Bi.y,Bi.x,0];return!go(t,xr,Sr,Mr,$s)||(t=[1,0,0,0,1,0,0,0,1],!go(t,xr,Sr,Mr,$s))?!1:(Qs.crossVectors(vi,xi),t=[Qs.x,Qs.y,Qs.z],go(t,xr,Sr,Mr,$s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new te,new te,new te,new te,new te,new te,new te,new te],Ln=new te,Js=new ur,xr=new te,Sr=new te,Mr=new te,vi=new te,xi=new te,Bi=new te,ps=new te,$s=new te,Qs=new te,ki=new te;function go(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){ki.fromArray(s,r);const o=n.x*Math.abs(ki.x)+n.y*Math.abs(ki.y)+n.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),u=i.dot(ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Tp=new ur,ms=new te,vo=new te;class qa{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Tp.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ms,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(vo)),this.expandByPoint(ms.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new te,xo=new te,ea=new te,Si=new te,So=new te,ta=new te,Mo=new te;class bp{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){xo.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(xo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ea),o=Si.dot(this.direction),l=-Si.dot(ea),c=Si.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(xo).addScaledVector(ea,h),d}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),n=$n.dot($n)-i*i,r=e.radius*e.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,n,r){So.subVectors(t,e),ta.subVectors(i,e),Mo.crossVectors(So,ta);let a=this.direction.dot(Mo),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);const l=o*this.direction.dot(ta.crossVectors(Si,ta));if(l<0)return null;const c=o*this.direction.dot(So.cross(Si));if(c<0||l+c>a)return null;const u=-o*Si.dot(Mo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,n,r,a,o,l,c,u,f,h,d,g,_,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,u,f,h,d,g,_,p)}set(e,t,i,n,r,a,o,l,c,u,f,h,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/yr.setFromMatrixColumn(e,0).length(),r=1/yr.setFromMatrixColumn(e,1).length(),a=1/yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ap,e,wp)}lookAt(e,t,i){const n=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Mi.crossVectors(i,fn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Mi.crossVectors(i,fn)),Mi.normalize(),na.crossVectors(fn,Mi),n[0]=Mi.x,n[4]=na.x,n[8]=fn.x,n[1]=Mi.y,n[5]=na.y,n[9]=fn.y,n[2]=Mi.z,n[6]=na.z,n[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],S=i[3],M=i[7],v=i[11],b=i[15],w=n[0],E=n[4],T=n[8],x=n[12],y=n[1],D=n[5],P=n[9],U=n[13],L=n[2],B=n[6],I=n[10],X=n[14],H=n[3],q=n[7],W=n[11],F=n[15];return r[0]=a*w+o*y+l*L+c*H,r[4]=a*E+o*D+l*B+c*q,r[8]=a*T+o*P+l*I+c*W,r[12]=a*x+o*U+l*X+c*F,r[1]=u*w+f*y+h*L+d*H,r[5]=u*E+f*D+h*B+d*q,r[9]=u*T+f*P+h*I+d*W,r[13]=u*x+f*U+h*X+d*F,r[2]=g*w+_*y+p*L+m*H,r[6]=g*E+_*D+p*B+m*q,r[10]=g*T+_*P+p*I+m*W,r[14]=g*x+_*U+p*X+m*F,r[3]=S*w+M*y+v*L+b*H,r[7]=S*E+M*D+v*B+b*q,r[11]=S*T+M*P+v*I+b*W,r[15]=S*x+M*U+v*X+b*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*f-n*c*f-r*o*h+i*c*h+n*o*d-i*l*d)+_*(+t*l*d-t*c*h+r*a*h-n*a*d+n*c*u-r*l*u)+p*(+t*c*f-t*o*d-r*a*f+i*a*d+r*o*u-i*c*u)+m*(-n*o*u-t*l*f+t*o*h+n*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=f*p*c-_*h*c+_*l*d-o*p*d-f*l*m+o*h*m,M=g*h*c-u*p*c-g*l*d+a*p*d+u*l*m-a*h*m,v=u*_*c-g*f*c+g*o*d-a*_*d-u*o*m+a*f*m,b=g*f*l-u*_*l-g*o*h+a*_*h+u*o*p-a*f*p,w=t*S+i*M+n*v+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=S*E,e[1]=(_*h*r-f*p*r-_*n*d+i*p*d+f*n*m-i*h*m)*E,e[2]=(o*p*r-_*l*r+_*n*c-i*p*c-o*n*m+i*l*m)*E,e[3]=(f*l*r-o*h*r-f*n*c+i*h*c+o*n*d-i*l*d)*E,e[4]=M*E,e[5]=(u*p*r-g*h*r+g*n*d-t*p*d-u*n*m+t*h*m)*E,e[6]=(g*l*r-a*p*r-g*n*c+t*p*c+a*n*m-t*l*m)*E,e[7]=(a*h*r-u*l*r+u*n*c-t*h*c-a*n*d+t*l*d)*E,e[8]=v*E,e[9]=(g*f*r-u*_*r-g*i*d+t*_*d+u*i*m-t*f*m)*E,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*m+t*o*m)*E,e[11]=(u*o*r-a*f*r-u*i*c+t*f*c+a*i*d-t*o*d)*E,e[12]=b*E,e[13]=(u*_*n-g*f*n+g*i*h-t*_*h-u*i*p+t*f*p)*E,e[14]=(g*o*n-a*_*n-g*i*l+t*_*l+a*i*p-t*o*p)*E,e[15]=(a*f*n-u*o*n+u*i*l-t*f*l-a*i*h+t*o*h)*E,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,_=a*u,p=a*f,m=o*f,S=l*c,M=l*u,v=l*f,b=i.x,w=i.y,E=i.z;return n[0]=(1-(_+m))*b,n[1]=(d+v)*b,n[2]=(g-M)*b,n[3]=0,n[4]=(d-v)*w,n[5]=(1-(h+m))*w,n[6]=(p+S)*w,n[7]=0,n[8]=(g+M)*E,n[9]=(p-S)*E,n[10]=(1-(h+_))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=yr.set(n[0],n[1],n[2]).length();const a=yr.set(n[4],n[5],n[6]).length(),o=yr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],In.copy(this);const c=1/r,u=1/a,f=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,t.setFromRotationMatrix(In),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=ci){const l=this.elements,c=2*r/(t-e),u=2*r/(i-n),f=(t+e)/(t-e),h=(i+n)/(i-n);let d,g;if(o===ci)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Fa)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=ci){const l=this.elements,c=1/(t-e),u=1/(i-n),f=1/(a-r),h=(t+e)*c,d=(i+n)*u;let g,_;if(o===ci)g=(a+r)*f,_=-2*f;else if(o===Fa)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yr=new te,In=new gt,Ap=new te(0,0,0),wp=new te(1,1,1),Mi=new te,na=new te,fn=new te,fu=new gt,hu=new ks;class jn{constructor(e=0,t=0,i=0,n=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],f=n[2],h=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hu.setFromEuler(this),this.setFromQuaternion(hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Kf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rp=0;const du=new te,Er=new ks,Qn=new gt,ia=new te,_s=new te,Cp=new te,Pp=new ks,pu=new te(1,0,0),mu=new te(0,1,0),_u=new te(0,0,1),gu={type:"added"},Dp={type:"removed"},Tr={type:"childadded",child:null},yo={type:"childremoved",child:null};class vn extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new te,t=new jn,i=new ks,n=new te(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new gt},normalMatrix:{value:new qe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(mu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(mu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ia.copy(e):ia.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(_s,ia,this.up):Qn.lookAt(ia,_s,this.up),this.quaternion.setFromRotationMatrix(Qn),n&&(Qn.extractRotation(n.matrixWorld),Er.setFromRotationMatrix(Qn),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gu),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dp),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gu),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,Cp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Pp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}vn.DEFAULT_UP=new te(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new te,ei=new te,Eo=new te,ti=new te,br=new te,Ar=new te,vu=new te,To=new te,bo=new te,Ao=new te,wo=new ht,Ro=new ht,Co=new ht;class On{constructor(e=new te,t=new te,i=new te){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Fn.subVectors(e,t),n.cross(Fn);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Fn.subVectors(n,t),ei.subVectors(i,t),Eo.subVectors(e,t);const a=Fn.dot(Fn),o=Fn.dot(ei),l=Fn.dot(Eo),c=ei.dot(ei),u=ei.dot(Eo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return wo.setScalar(0),Ro.setScalar(0),Co.setScalar(0),wo.fromBufferAttribute(e,t),Ro.fromBufferAttribute(e,i),Co.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(wo,r.x),a.addScaledVector(Ro,r.y),a.addScaledVector(Co,r.z),a}static isFrontFacing(e,t,i,n){return Fn.subVectors(i,t),ei.subVectors(e,t),Fn.cross(ei).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Fn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return On.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,o;br.subVectors(n,i),Ar.subVectors(r,i),To.subVectors(e,i);const l=br.dot(To),c=Ar.dot(To);if(l<=0&&c<=0)return t.copy(i);bo.subVectors(e,n);const u=br.dot(bo),f=Ar.dot(bo);if(u>=0&&f<=u)return t.copy(n);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(br,a);Ao.subVectors(e,r);const d=br.dot(Ao),g=Ar.dot(Ao);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ar,o);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return vu.subVectors(r,n),o=(f-u)/(f-u+(d-g)),t.copy(n).addScaledVector(vu,o);const m=1/(p+_+h);return a=_*m,o=h*m,t.copy(i).addScaledVector(br,a).addScaledVector(Ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Po(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=tt.workingColorSpace){if(e=pp(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Po(a,r,e+1/3),this.g=Po(a,r,e),this.b=Po(a,r,e-1/3)}return tt.toWorkingColorSpace(this,n),this}setStyle(e,t=Tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const i=Zf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return tt.fromWorkingColorSpace(Bt.copy(this),e),Math.round(kt(Bt.r*255,0,255))*65536+Math.round(kt(Bt.g*255,0,255))*256+Math.round(kt(Bt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,n=Bt.g,r=Bt.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(n-r)/f+(n<r?6:0);break;case n:l=(r-i)/f+2;break;case r:l=(i-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Tn){tt.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,n=Bt.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(ra);const i=ho(yi.h,ra.h,t),n=ho(yi.s,ra.s,t),r=ho(yi.l,ra.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ke;Ke.NAMES=Zf;let Up=0;class ts extends es{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Bs(),this.name="",this.blending=Or,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==el&&(i.blendSrc=this.blendSrc),this.blendDst!==tl&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pc extends ts{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ai=Lp();function Lp(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:a,offsetTable:o}}function Ip(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=kt(s,-65504,65504),ai.floatView[0]=s;const e=ai.uint32View[0],t=e>>23&511;return ai.baseTable[t]+((e&8388607)>>ai.shiftTable[t])}function Fp(s){const e=s>>10;return ai.uint32View[0]=ai.mantissaTable[ai.offsetTable[e]+(s&1023)]+ai.exponentTable[e],ai.floatView[0]}const sa={toHalfFloat:Ip,fromHalfFloat:Fp},xt=new te,aa=new Je;class kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nu,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ds(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),n=Qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),n=Qt(n,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),e}}class Jf extends kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $f extends kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Yn extends kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Np=0;const yn=new gt,Do=new vn,wr=new te,hn=new ur,gs=new ur,At=new te;class mi extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yf(e)?$f:Jf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yn(i,3))}else{for(let i=0,n=t.count;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(hn.min,gs.min),hn.expandByPoint(At),At.addVectors(hn.max,gs.max),hn.expandByPoint(At)):(hn.expandByPoint(gs.min),hn.expandByPoint(gs.max))}hn.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(wr.fromBufferAttribute(e,c),At.add(wr)),n=Math.max(n,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<i.count;T++)o[T]=new te,l[T]=new te;const c=new te,u=new te,f=new te,h=new Je,d=new Je,g=new Je,_=new te,p=new te;function m(T,x,y){c.fromBufferAttribute(i,T),u.fromBufferAttribute(i,x),f.fromBufferAttribute(i,y),h.fromBufferAttribute(r,T),d.fromBufferAttribute(r,x),g.fromBufferAttribute(r,y),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[T].add(_),o[x].add(_),o[y].add(_),l[T].add(p),l[x].add(p),l[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let T=0,x=S.length;T<x;++T){const y=S[T],D=y.start,P=y.count;for(let U=D,L=D+P;U<L;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const M=new te,v=new te,b=new te,w=new te;function E(T){b.fromBufferAttribute(n,T),w.copy(b);const x=o[T];M.copy(x),M.sub(b.multiplyScalar(b.dot(x))).normalize(),v.crossVectors(w,x);const D=v.dot(l[T])<0?-1:1;a.setXYZW(T,M.x,M.y,M.z,D)}for(let T=0,x=S.length;T<x;++T){const y=S[T],D=y.start,P=y.count;for(let U=D,L=D+P;U<L;U+=3)E(e.getX(U+0)),E(e.getX(U+1)),E(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const n=new te,r=new te,a=new te,o=new te,l=new te,c=new te,u=new te,f=new te;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(n,r),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)n.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(n,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new kn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mi,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xu=new gt,zi=new bp,oa=new qa,Su=new te,la=new te,ca=new te,ua=new te,Uo=new te,fa=new te,Mu=new te,ha=new te;class mn extends vn{constructor(e=new mi,t=new pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Uo.fromBufferAttribute(f,e),a?fa.addScaledVector(Uo,u):fa.addScaledVector(Uo.sub(t),u))}t.add(fa)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),zi.copy(e.ray).recast(e.near),!(oa.containsPoint(zi.origin)===!1&&(zi.intersectSphere(oa,Su)===null||zi.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(xu.copy(r).invert(),zi.copy(e.ray).applyMatrix4(xu),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),M=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,b=M;v<b;v+=3){const w=o.getX(v),E=o.getX(v+1),T=o.getX(v+2);n=da(this,m,e,i,c,u,f,w,E,T),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const S=o.getX(p),M=o.getX(p+1),v=o.getX(p+2);n=da(this,a,e,i,c,u,f,S,M,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,b=M;v<b;v+=3){const w=v,E=v+1,T=v+2;n=da(this,m,e,i,c,u,f,w,E,T),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const S=p,M=p+1,v=p+2;n=da(this,a,e,i,c,u,f,S,M,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function Op(s,e,t,i,n,r,a,o){let l;if(e.side===en?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Li,o),l===null)return null;ha.copy(o),ha.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ha);return c<t.near||c>t.far?null:{distance:c,point:ha.clone(),object:s}}function da(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,la),s.getVertexPosition(l,ca),s.getVertexPosition(c,ua);const u=Op(s,e,t,i,la,ca,ua,Mu);if(u){const f=new te;On.getBarycoord(Mu,la,ca,ua,f),n&&(u.uv=On.getInterpolatedAttribute(n,o,l,c,f,new Je)),r&&(u.uv1=On.getInterpolatedAttribute(r,o,l,c,f,new Je)),a&&(u.normal=On.getInterpolatedAttribute(a,o,l,c,f,new te),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new te,materialIndex:0};On.getNormal(la,ca,ua,h.normal),u.face=h,u.barycoord=f}return u}class zs extends mi{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Yn(c,3)),this.setAttribute("normal",new Yn(u,3)),this.setAttribute("uv",new Yn(f,2));function g(_,p,m,S,M,v,b,w,E,T,x){const y=v/E,D=b/T,P=v/2,U=b/2,L=w/2,B=E+1,I=T+1;let X=0,H=0;const q=new te;for(let W=0;W<I;W++){const F=W*D-U;for(let V=0;V<B;V++){const Z=V*y-P;q[_]=Z*S,q[p]=F*M,q[m]=L,c.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[m]=w>0?1:-1,u.push(q.x,q.y,q.z),f.push(V/E),f.push(1-W/T),X+=1}}for(let W=0;W<T;W++)for(let F=0;F<E;F++){const V=h+F+B*W,Z=h+F+B*(W+1),N=h+(F+1)+B*(W+1),O=h+(F+1)+B*W;l.push(V,Z,O),l.push(Z,N,O),H+=6}o.addGroup(d,H,x),d+=H,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jr(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Wt(s){const e={};for(let t=0;t<s.length;t++){const i=jr(s[t]);for(const n in i)e[n]=i[n]}return e}function Bp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Qf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const eh={clone:jr,merge:Wt};var kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends ts{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=Bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class th extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new te,yu=new Je,Eu=new Je;class bn extends th{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,yu,Eu),t.subVectors(Eu,yu)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fo*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rr=-90,Cr=1;class Gp extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new bn(Rr,Cr,e,t);n.layers=this.layers,this.add(n);const r=new bn(Rr,Cr,e,t);r.layers=this.layers,this.add(r);const a=new bn(Rr,Cr,e,t);a.layers=this.layers,this.add(a);const o=new bn(Rr,Cr,e,t);o.layers=this.layers,this.add(o);const l=new bn(Rr,Cr,e,t);l.layers=this.layers,this.add(l);const c=new bn(Rr,Cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nh extends It{constructor(e,t,i,n,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,i,n,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vp extends sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new nh(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new zs(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Ci});r.uniforms.tEquirect.value=t;const a=new mn(n,r),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=Lt),new Gp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}const Lo=new te,Hp=new te,Wp=new qe;class qi{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Lo.subVectors(i,t).cross(Hp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Lo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wp.getNormalMatrix(e),n=this.coplanarPoint(Lo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new qa,pa=new te;class ih{constructor(e=new qi,t=new qi,i=new qi,n=new qi,r=new qi,a=new qi){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci){const i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],u=n[5],f=n[6],h=n[7],d=n[8],g=n[9],_=n[10],p=n[11],m=n[12],S=n[13],M=n[14],v=n[15];if(i[0].setComponents(l-r,h-c,p-d,v-m).normalize(),i[1].setComponents(l+r,h+c,p+d,v+m).normalize(),i[2].setComponents(l+a,h+u,p+g,v+S).normalize(),i[3].setComponents(l-a,h-u,p-g,v-S).normalize(),i[4].setComponents(l-o,h-f,p-_,v-M).normalize(),t===ci)i[5].setComponents(l+o,h+f,p+_,v+M).normalize();else if(t===Fa)i[5].setComponents(o,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(pa.x=n.normal.x>0?e.max.x:e.min.x,pa.y=n.normal.y>0?e.max.y:e.min.y,pa.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rh(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Xp(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}class fr extends mi{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const S=m*h-a;for(let M=0;M<c;M++){const v=M*f-r;g.push(v,-S,0),_.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const M=S+c*m,v=S+c*(m+1),b=S+1+c*(m+1),w=S+1+c*m;d.push(M,v,w),d.push(v,b,w)}this.setIndex(d),this.setAttribute("position",new Yn(g,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,em=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,am=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_m=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Km=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,t_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,l_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,u_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,m_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,__=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,M_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,R_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,P_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,D_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,L_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,F_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,k_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ug=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_g=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Eg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Yp,alphahash_pars_fragment:qp,alphamap_fragment:jp,alphamap_pars_fragment:Kp,alphatest_fragment:Zp,alphatest_pars_fragment:Jp,aomap_fragment:$p,aomap_pars_fragment:Qp,batching_pars_vertex:em,batching_vertex:tm,begin_vertex:nm,beginnormal_vertex:im,bsdfs:rm,iridescence_fragment:sm,bumpmap_pars_fragment:am,clipping_planes_fragment:om,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:um,color_fragment:fm,color_pars_fragment:hm,color_pars_vertex:dm,color_vertex:pm,common:mm,cube_uv_reflection_fragment:_m,defaultnormal_vertex:gm,displacementmap_pars_vertex:vm,displacementmap_vertex:xm,emissivemap_fragment:Sm,emissivemap_pars_fragment:Mm,colorspace_fragment:ym,colorspace_pars_fragment:Em,envmap_fragment:Tm,envmap_common_pars_fragment:bm,envmap_pars_fragment:Am,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Bm,envmap_vertex:Rm,fog_vertex:Cm,fog_pars_vertex:Pm,fog_fragment:Dm,fog_pars_fragment:Um,gradientmap_pars_fragment:Lm,lightmap_pars_fragment:Im,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Nm,lights_pars_begin:Om,lights_toon_fragment:km,lights_toon_pars_fragment:zm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Vm,lights_physical_fragment:Hm,lights_physical_pars_fragment:Wm,lights_fragment_begin:Xm,lights_fragment_maps:Ym,lights_fragment_end:qm,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:Km,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Jm,map_fragment:$m,map_pars_fragment:Qm,map_particle_fragment:e_,map_particle_pars_fragment:t_,metalnessmap_fragment:n_,metalnessmap_pars_fragment:i_,morphinstance_vertex:r_,morphcolor_vertex:s_,morphnormal_vertex:a_,morphtarget_pars_vertex:o_,morphtarget_vertex:l_,normal_fragment_begin:c_,normal_fragment_maps:u_,normal_pars_fragment:f_,normal_pars_vertex:h_,normal_vertex:d_,normalmap_pars_fragment:p_,clearcoat_normal_fragment_begin:m_,clearcoat_normal_fragment_maps:__,clearcoat_pars_fragment:g_,iridescence_pars_fragment:v_,opaque_fragment:x_,packing:S_,premultiplied_alpha_fragment:M_,project_vertex:y_,dithering_fragment:E_,dithering_pars_fragment:T_,roughnessmap_fragment:b_,roughnessmap_pars_fragment:A_,shadowmap_pars_fragment:w_,shadowmap_pars_vertex:R_,shadowmap_vertex:C_,shadowmask_pars_fragment:P_,skinbase_vertex:D_,skinning_pars_vertex:U_,skinning_vertex:L_,skinnormal_vertex:I_,specularmap_fragment:F_,specularmap_pars_fragment:N_,tonemapping_fragment:O_,tonemapping_pars_fragment:B_,transmission_fragment:k_,transmission_pars_fragment:z_,uv_pars_fragment:G_,uv_pars_vertex:V_,uv_vertex:H_,worldpos_vertex:W_,background_vert:X_,background_frag:Y_,backgroundCube_vert:q_,backgroundCube_frag:j_,cube_vert:K_,cube_frag:Z_,depth_vert:J_,depth_frag:$_,distanceRGBA_vert:Q_,distanceRGBA_frag:eg,equirect_vert:tg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:rg,meshbasic_vert:sg,meshbasic_frag:ag,meshlambert_vert:og,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:ug,meshnormal_vert:fg,meshnormal_frag:hg,meshphong_vert:dg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:_g,meshtoon_vert:gg,meshtoon_frag:vg,points_vert:xg,points_frag:Sg,shadow_vert:Mg,shadow_frag:yg,sprite_vert:Eg,sprite_frag:Tg},Ce={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Hn={basic:{uniforms:Wt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Wt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Wt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Wt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Wt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Wt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Wt([Ce.points,Ce.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Wt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Wt([Ce.common,Ce.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Wt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Wt([Ce.sprite,Ce.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Wt([Ce.common,Ce.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Wt([Ce.lights,Ce.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Hn.physical={uniforms:Wt([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const ma={r:0,b:0,g:0},Vi=new jn,bg=new gt;function Ag(s,e,t,i,n,r,a){const o=new Ke(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function _(S){let M=!1;const v=g(S);v===null?m(o,l):v&&v.isColor&&(m(v,1),M=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(S,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===Xa)?(u===void 0&&(u=new mn(new zs(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:jr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),Vi.copy(M.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(Vi)),u.material.toneMapped=tt.getTransfer(v.colorSpace)!==st,(f!==v||h!==v.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=s.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new mn(new fr(2,2),new hi({name:"BackgroundMaterial",uniforms:jr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=tt.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,M){S.getRGB(ma,Qf(s)),i.buffers.color.setClear(ma.r,ma.g,ma.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),l=M,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:_,addToRenderList:p}}function wg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=h(null);let r=n,a=!1;function o(y,D,P,U,L){let B=!1;const I=f(U,P,D);r!==I&&(r=I,c(r.object)),B=d(y,U,P,L),B&&g(y,U,P,L),L!==null&&e.update(L,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,v(y,D,P,U),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function f(y,D,P){const U=P.wireframe===!0;let L=i[y.id];L===void 0&&(L={},i[y.id]=L);let B=L[D.id];B===void 0&&(B={},L[D.id]=B);let I=B[U];return I===void 0&&(I=h(l()),B[U]=I),I}function h(y){const D=[],P=[],U=[];for(let L=0;L<t;L++)D[L]=0,P[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:P,attributeDivisors:U,object:y,attributes:{},index:null}}function d(y,D,P,U){const L=r.attributes,B=D.attributes;let I=0;const X=P.getAttributes();for(const H in X)if(X[H].location>=0){const W=L[H];let F=B[H];if(F===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(F=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(F=y.instanceColor)),W===void 0||W.attribute!==F||F&&W.data!==F.data)return!0;I++}return r.attributesNum!==I||r.index!==U}function g(y,D,P,U){const L={},B=D.attributes;let I=0;const X=P.getAttributes();for(const H in X)if(X[H].location>=0){let W=B[H];W===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(W=y.instanceColor));const F={};F.attribute=W,W&&W.data&&(F.data=W.data),L[H]=F,I++}r.attributes=L,r.attributesNum=I,r.index=U}function _(){const y=r.newAttributes;for(let D=0,P=y.length;D<P;D++)y[D]=0}function p(y){m(y,0)}function m(y,D){const P=r.newAttributes,U=r.enabledAttributes,L=r.attributeDivisors;P[y]=1,U[y]===0&&(s.enableVertexAttribArray(y),U[y]=1),L[y]!==D&&(s.vertexAttribDivisor(y,D),L[y]=D)}function S(){const y=r.newAttributes,D=r.enabledAttributes;for(let P=0,U=D.length;P<U;P++)D[P]!==y[P]&&(s.disableVertexAttribArray(P),D[P]=0)}function M(y,D,P,U,L,B,I){I===!0?s.vertexAttribIPointer(y,D,P,L,B):s.vertexAttribPointer(y,D,P,U,L,B)}function v(y,D,P,U){_();const L=U.attributes,B=P.getAttributes(),I=D.defaultAttributeValues;for(const X in B){const H=B[X];if(H.location>=0){let q=L[X];if(q===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){const W=q.normalized,F=q.itemSize,V=e.get(q);if(V===void 0)continue;const Z=V.buffer,N=V.type,O=V.bytesPerElement,Q=N===s.INT||N===s.UNSIGNED_INT||q.gpuType===lc;if(q.isInterleavedBufferAttribute){const Y=q.data,ne=Y.stride,ge=q.offset;if(Y.isInstancedInterleavedBuffer){for(let Me=0;Me<H.locationSize;Me++)m(H.location+Me,Y.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Me=0;Me<H.locationSize;Me++)p(H.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Me=0;Me<H.locationSize;Me++)M(H.location+Me,F/H.locationSize,N,W,ne*O,(ge+F/H.locationSize*Me)*O,Q)}else{if(q.isInstancedBufferAttribute){for(let Y=0;Y<H.locationSize;Y++)m(H.location+Y,q.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Y=0;Y<H.locationSize;Y++)p(H.location+Y);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Y=0;Y<H.locationSize;Y++)M(H.location+Y,F/H.locationSize,N,W,F*O,F/H.locationSize*Y*O,Q)}}else if(I!==void 0){const W=I[X];if(W!==void 0)switch(W.length){case 2:s.vertexAttrib2fv(H.location,W);break;case 3:s.vertexAttrib3fv(H.location,W);break;case 4:s.vertexAttrib4fv(H.location,W);break;default:s.vertexAttrib1fv(H.location,W)}}}}S()}function b(){T();for(const y in i){const D=i[y];for(const P in D){const U=D[P];for(const L in U)u(U[L].object),delete U[L];delete D[P]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const P in D){const U=D[P];for(const L in U)u(U[L].object),delete U[L];delete D[P]}delete i[y.id]}function E(y){for(const D in i){const P=i[D];if(P[y.id]===void 0)continue;const U=P[y.id];for(const L in U)u(U[L].object),delete U[L];delete P[y.id]}}function T(){x(),a=!0,r!==n&&(r=n,c(r.object))}function x(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:T,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function Rg(s,e,t){let i;function n(c){i=c}function r(c,u){s.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(s.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Cg(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(E){return!(E!==Bn&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const T=E===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==fi&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==An&&!T)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:b,maxSamples:w}}function Pg(s){const e=this;let t=null,i=0,n=!1,r=!1;const a=new qi,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||n;return n=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=s.get(f);if(!n||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:i,M=S*4;let v=m.clippingState||null;l.value=v,v=u(g,h,M,d);for(let b=0;b!==M;++b)v[b]=t[b];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,v=d;M!==_;++M,v+=4)a.copy(f[M]).applyMatrix4(S,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Dg(s){let e=new WeakMap;function t(a,o){return o===Ia?a.mapping=Wr:o===cl&&(a.mapping=Xr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ia||o===cl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vp(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Ug extends th{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ir=4,Tu=[.125,.215,.35,.446,.526,.582],Ji=20,Io=new Ug,bu=new Ke;let Fo=null,No=0,Oo=0,Bo=!1;const ji=(1+Math.sqrt(5))/2,Pr=1/ji,Au=[new te(-ji,Pr,0),new te(ji,Pr,0),new te(-Pr,0,ji),new te(Pr,0,ji),new te(0,ji,-Pr),new te(0,ji,Pr),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)];class wu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Fo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,No,Oo),this._renderer.xr.enabled=Bo,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:li,format:Bn,colorSpace:cr,depthBuffer:!1},n=Ru(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(r)),this._blurMaterial=Ig(r,e,t)}return n}_compileMaterial(e){const t=new mn(this._lodPlanes[0],e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,i,n){const o=new bn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(bu),u.toneMapping=Pi,u.autoClear=!1;const d=new pc({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new mn(new zs,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(bu),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):S===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const M=this._cubeSize;_a(n,S*M,m>2?M:0,M,M),u.setRenderTarget(n),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Wr||e.mapping===Xr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new mn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;_a(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Io)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Au[(n-r-1)%Au.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new mn(this._lodPlanes[n],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ji-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):Ji;p>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ji}`);const m=[];let S=0;for(let E=0;E<Ji;++E){const T=E/_,x=Math.exp(-T*T/2);m.push(x),E===0?S+=x:E<p&&(S+=2*x)}for(let E=0;E<m.length;E++)m[E]=m[E]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const v=this._sizeLods[n],b=3*v*(n>M-Ir?n-M+Ir:0),w=4*(this._cubeSize-v);_a(t,b,w,3*v,2*v),l.setRenderTarget(t),l.render(f,Io)}}function Lg(s){const e=[],t=[],i=[];let n=s;const r=s-Ir+1+Tu.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>s-Ir?l=Tu[a-s+Ir-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*d),M=new Float32Array(p*g*d),v=new Float32Array(m*g*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,T=w>2?0:-1,x=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];S.set(x,_*g*w),M.set(h,p*g*w);const y=[w,w,w,w,w,w];v.set(y,m*g*w)}const b=new mi;b.setAttribute("position",new kn(S,_)),b.setAttribute("uv",new kn(M,p)),b.setAttribute("faceIndex",new kn(v,m)),e.push(b),n>Ir&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ru(s,e,t){const i=new sr(s,e,t);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function Ig(s,e,t){const i=new Float32Array(Ji),n=new te(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Cu(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Pu(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function mc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fg(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ia||l===cl,u=l===Wr||l===Xr;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new wu(s)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new wu(s)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ng(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&Ss("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Og(s,e,t,i){const n={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}h.removeEventListener("dispose",a),delete n[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],s.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],s.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let M=0,v=S.length;M<v;M+=3){const b=S[M+0],w=S[M+1],E=S[M+2];h.push(b,w,w,E,E,b)}}else if(g!==void 0){const S=g.array;_=g.version;for(let M=0,v=S.length/3-1;M<v;M+=3){const b=M+0,w=M+1,E=M+2;h.push(b,w,w,E,E,b)}}else return;const p=new(Yf(h)?$f:Jf)(h,1);p.version=_;const m=r.get(f);m&&e.remove(m),r.set(f,p)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Bg(s,e,t){let i;function n(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){s.drawElements(i,d,r,h*a),t.update(d,i,1)}function c(h,d,g){g!==0&&(s.drawElementsInstanced(i,d,r,h*a,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,i,1)}function f(h,d,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/a,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,_,0,g);let m=0;for(let S=0;S<g;S++)m+=d[S]*_[S];t.update(m,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function kg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function zg(s,e,t){const i=new WeakMap,n=new ht;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let y=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var d=y;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let b=o.attributes.position.count*v,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*w*4*f),T=new jf(E,b,w,f);T.type=An,T.needsUpdate=!0;const x=v*4;for(let D=0;D<f;D++){const P=m[D],U=S[D],L=M[D],B=b*w*4*D;for(let I=0;I<P.count;I++){const X=I*x;g===!0&&(n.fromBufferAttribute(P,I),E[B+X+0]=n.x,E[B+X+1]=n.y,E[B+X+2]=n.z,E[B+X+3]=0),_===!0&&(n.fromBufferAttribute(U,I),E[B+X+4]=n.x,E[B+X+5]=n.y,E[B+X+6]=n.z,E[B+X+7]=0),p===!0&&(n.fromBufferAttribute(L,I),E[B+X+8]=n.x,E[B+X+9]=n.y,E[B+X+10]=n.z,E[B+X+11]=L.itemSize===4?n.w:1)}}h={count:f,texture:T,size:new Je(b,w)},i.set(o,h),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function Gg(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return f}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class sh extends It{constructor(e,t,i,n,r,a,o,l,c,u=Br){if(u!==Br&&u!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Br&&(i=rr),i===void 0&&u===qr&&(i=Yr),super(null,n,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ah=new It,Du=new sh(1,1),oh=new jf,lh=new Ep,ch=new nh,Uu=[],Lu=[],Iu=new Float32Array(16),Fu=new Float32Array(9),Nu=new Float32Array(4);function ns(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=Uu[n];if(r===void 0&&(r=new Float32Array(n),Uu[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Tt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function ja(s,e){let t=Lu[e];t===void 0&&(t=new Int32Array(e),Lu[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Vg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),Tt(t,e)}}function Wg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),Tt(t,e)}}function Xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),Tt(t,e)}}function Yg(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Nu.set(i),s.uniformMatrix2fv(this.addr,!1,Nu),Tt(t,i)}}function qg(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Fu.set(i),s.uniformMatrix3fv(this.addr,!1,Fu),Tt(t,i)}}function jg(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Iu.set(i),s.uniformMatrix4fv(this.addr,!1,Iu),Tt(t,i)}}function Kg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2iv(this.addr,e),Tt(t,e)}}function Jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3iv(this.addr,e),Tt(t,e)}}function $g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4iv(this.addr,e),Tt(t,e)}}function Qg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function e0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2uiv(this.addr,e),Tt(t,e)}}function t0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3uiv(this.addr,e),Tt(t,e)}}function n0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4uiv(this.addr,e),Tt(t,e)}}function i0(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Du.compareFunction=Xf,r=Du):r=ah,t.setTexture2D(e||r,n)}function r0(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||lh,n)}function s0(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||ch,n)}function a0(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||oh,n)}function o0(s){switch(s){case 5126:return Vg;case 35664:return Hg;case 35665:return Wg;case 35666:return Xg;case 35674:return Yg;case 35675:return qg;case 35676:return jg;case 5124:case 35670:return Kg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return $g;case 5125:return Qg;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return a0}}function l0(s,e){s.uniform1fv(this.addr,e)}function c0(s,e){const t=ns(e,this.size,2);s.uniform2fv(this.addr,t)}function u0(s,e){const t=ns(e,this.size,3);s.uniform3fv(this.addr,t)}function f0(s,e){const t=ns(e,this.size,4);s.uniform4fv(this.addr,t)}function h0(s,e){const t=ns(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function d0(s,e){const t=ns(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function p0(s,e){const t=ns(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function m0(s,e){s.uniform1iv(this.addr,e)}function _0(s,e){s.uniform2iv(this.addr,e)}function g0(s,e){s.uniform3iv(this.addr,e)}function v0(s,e){s.uniform4iv(this.addr,e)}function x0(s,e){s.uniform1uiv(this.addr,e)}function S0(s,e){s.uniform2uiv(this.addr,e)}function M0(s,e){s.uniform3uiv(this.addr,e)}function y0(s,e){s.uniform4uiv(this.addr,e)}function E0(s,e,t){const i=this.cache,n=e.length,r=ja(t,n);Et(i,r)||(s.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||ah,r[a])}function T0(s,e,t){const i=this.cache,n=e.length,r=ja(t,n);Et(i,r)||(s.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||lh,r[a])}function b0(s,e,t){const i=this.cache,n=e.length,r=ja(t,n);Et(i,r)||(s.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||ch,r[a])}function A0(s,e,t){const i=this.cache,n=e.length,r=ja(t,n);Et(i,r)||(s.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||oh,r[a])}function w0(s){switch(s){case 5126:return l0;case 35664:return c0;case 35665:return u0;case 35666:return f0;case 35674:return h0;case 35675:return d0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return _0;case 35668:case 35672:return g0;case 35669:case 35673:return v0;case 5125:return x0;case 36294:return S0;case 36295:return M0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return A0}}class R0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=o0(t.type)}}class C0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w0(t.type)}}class P0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Ou(s,e){s.seq.push(e),s.map[e.id]=e}function D0(s,e,t){const i=s.name,n=i.length;for(ko.lastIndex=0;;){const r=ko.exec(i),a=ko.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Ou(t,c===void 0?new R0(o,s,e):new C0(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new P0(o),Ou(t,f)),t=f}}}class Ra{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);D0(r,a,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Bu(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const U0=37297;let L0=0;function I0(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ku=new qe;function F0(s){tt._getMatrix(ku,tt.workingColorSpace,s);const e=`mat3( ${ku.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(s)){case Ya:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function zu(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+I0(s.getShaderSource(e),a)}else return n}function N0(s,e){const t=F0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function O0(s,e){let t;switch(e){case $d:t="Linear";break;case Qd:t="Reinhard";break;case ep:t="Cineon";break;case Df:t="ACESFilmic";break;case np:t="AgX";break;case ip:t="Neutral";break;case tp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ga=new te;function B0(){tt.getLuminanceCoefficients(ga);const s=ga.x.toFixed(4),e=ga.y.toFixed(4),t=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function z0(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function G0(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ms(s){return s!==""}function Gu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(s){return s.replace(V0,W0)}const H0=new Map;function W0(s,e){let t=Ye[e];if(t===void 0){const i=H0.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}const X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(s){return s.replace(X0,Y0)}function Y0(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Wu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function q0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Dd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function j0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Wr:case Xr:e="ENVMAP_TYPE_CUBE";break;case Xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function Z0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pf:e="ENVMAP_BLENDING_MULTIPLY";break;case Zd:e="ENVMAP_BLENDING_MIX";break;case Jd:e="ENVMAP_BLENDING_ADD";break}return e}function J0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $0(s,e,t,i){const n=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=q0(t),c=j0(t),u=K0(t),f=Z0(t),h=J0(t),d=k0(t),g=z0(r),_=n.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`)):(p=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),m=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Pi?O0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,N0("linearToOutputTexel",t.outputColorSpace),B0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),a=kl(a),a=Gu(a,t),a=Vu(a,t),o=kl(o),o=Gu(o,t),o=Vu(o,t),a=Hu(a),o=Hu(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=S+p+a,v=S+m+o,b=Bu(n,n.VERTEX_SHADER,M),w=Bu(n,n.FRAGMENT_SHADER,v);n.attachShader(_,b),n.attachShader(_,w),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function E(D){if(s.debug.checkShaderErrors){const P=n.getProgramInfoLog(_).trim(),U=n.getShaderInfoLog(b).trim(),L=n.getShaderInfoLog(w).trim();let B=!0,I=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,b,w);else{const X=zu(n,b,"vertex"),H=zu(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+X+`
`+H)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(U===""||L==="")&&(I=!1);I&&(D.diagnostics={runnable:B,programLog:P,vertexShader:{log:U,prefix:p},fragmentShader:{log:L,prefix:m}})}n.deleteShader(b),n.deleteShader(w),T=new Ra(n,_),x=G0(n,_)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(_,U0)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let Q0=0;class ev{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new tv(e),t.set(e,i)),i}}class tv{constructor(e){this.id=Q0++,this.code=e,this.usedTimes=0}}function nv(s,e,t,i,n,r,a){const o=new Kf,l=new ev,c=new Set,u=[],f=n.logarithmicDepthBuffer,h=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,y,D,P,U){const L=P.fog,B=U.geometry,I=x.isMeshStandardMaterial?P.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||I),H=X&&X.mapping===Xa?X.image.height:null,q=g[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const W=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,F=W!==void 0?W.length:0;let V=0;B.morphAttributes.position!==void 0&&(V=1),B.morphAttributes.normal!==void 0&&(V=2),B.morphAttributes.color!==void 0&&(V=3);let Z,N,O,Q;if(q){const Ve=Hn[q];Z=Ve.vertexShader,N=Ve.fragmentShader}else Z=x.vertexShader,N=x.fragmentShader,l.update(x),O=l.getVertexShaderID(x),Q=l.getFragmentShaderID(x);const Y=s.getRenderTarget(),ne=s.state.buffers.depth.getReversed(),ge=U.isInstancedMesh===!0,Me=U.isBatchedMesh===!0,xe=!!x.map,oe=!!x.matcap,Ne=!!X,z=!!x.aoMap,Oe=!!x.lightMap,Ae=!!x.bumpMap,Re=!!x.normalMap,ae=!!x.displacementMap,we=!!x.emissiveMap,me=!!x.metalnessMap,R=!!x.roughnessMap,A=x.anisotropy>0,k=x.clearcoat>0,J=x.dispersion>0,$=x.iridescence>0,se=x.sheen>0,de=x.transmission>0,ue=A&&!!x.anisotropyMap,_e=k&&!!x.clearcoatMap,Pe=k&&!!x.clearcoatNormalMap,fe=k&&!!x.clearcoatRoughnessMap,ye=$&&!!x.iridescenceMap,Ee=$&&!!x.iridescenceThicknessMap,Te=se&&!!x.sheenColorMap,ce=se&&!!x.sheenRoughnessMap,De=!!x.specularMap,Le=!!x.specularColorMap,je=!!x.specularIntensityMap,G=de&&!!x.transmissionMap,he=de&&!!x.thicknessMap,ee=!!x.gradientMap,pe=!!x.alphaMap,Se=x.alphaTest>0,ve=!!x.alphaHash,Fe=!!x.extensions;let We=Pi;x.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(We=s.toneMapping);const Ge={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:Z,fragmentShader:N,defines:x.defines,customVertexShaderID:O,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Me,batchingColor:Me&&U._colorsTexture!==null,instancing:ge,instancingColor:ge&&U.instanceColor!==null,instancingMorph:ge&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Y===null?s.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:cr,alphaToCoverage:!!x.alphaToCoverage,map:xe,matcap:oe,envMap:Ne,envMapMode:Ne&&X.mapping,envMapCubeUVHeight:H,aoMap:z,lightMap:Oe,bumpMap:Ae,normalMap:Re,displacementMap:h&&ae,emissiveMap:we,normalMapObjectSpace:Re&&x.normalMapType===ap,normalMapTangentSpace:Re&&x.normalMapType===Wf,metalnessMap:me,roughnessMap:R,anisotropy:A,anisotropyMap:ue,clearcoat:k,clearcoatMap:_e,clearcoatNormalMap:Pe,clearcoatRoughnessMap:fe,dispersion:J,iridescence:$,iridescenceMap:ye,iridescenceThicknessMap:Ee,sheen:se,sheenColorMap:Te,sheenRoughnessMap:ce,specularMap:De,specularColorMap:Le,specularIntensityMap:je,transmission:de,transmissionMap:G,thicknessMap:he,gradientMap:ee,opaque:x.transparent===!1&&x.blending===Or&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:Se,alphaHash:ve,combine:x.combine,mapUv:xe&&_(x.map.channel),aoMapUv:z&&_(x.aoMap.channel),lightMapUv:Oe&&_(x.lightMap.channel),bumpMapUv:Ae&&_(x.bumpMap.channel),normalMapUv:Re&&_(x.normalMap.channel),displacementMapUv:ae&&_(x.displacementMap.channel),emissiveMapUv:we&&_(x.emissiveMap.channel),metalnessMapUv:me&&_(x.metalnessMap.channel),roughnessMapUv:R&&_(x.roughnessMap.channel),anisotropyMapUv:ue&&_(x.anisotropyMap.channel),clearcoatMapUv:_e&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ce&&_(x.sheenRoughnessMap.channel),specularMapUv:De&&_(x.specularMap.channel),specularColorMapUv:Le&&_(x.specularColorMap.channel),specularIntensityMapUv:je&&_(x.specularIntensityMap.channel),transmissionMapUv:G&&_(x.transmissionMap.channel),thicknessMapUv:he&&_(x.thicknessMap.channel),alphaMapUv:pe&&_(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Re||A),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(xe||pe),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ne,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:V,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:We,decodeVideoTexture:xe&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===st,decodeVideoTextureEmissive:we&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Nn,flipSided:x.side===en,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Fe&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&x.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function m(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)y.push(D),y.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(S(y,x),M(y,x),y.push(s.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function S(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const y=g[x.type];let D;if(y){const P=Hn[y];D=eh.clone(P.uniforms)}else D=x.uniforms;return D}function b(x,y){let D;for(let P=0,U=u.length;P<U;P++){const L=u[P];if(L.cacheKey===y){D=L,++D.usedTimes;break}}return D===void 0&&(D=new $0(s,y,x,r),u.push(D)),D}function w(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function E(x){l.remove(x)}function T(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:b,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:T}}function iv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function rv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Yu(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(f,h,d,g,_,p){let m=s[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},s[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function o(f,h,d,g,_,p){const m=a(f,h,d,g,_,p);d.transmission>0?i.push(m):d.transparent===!0?n.push(m):t.push(m)}function l(f,h,d,g,_,p){const m=a(f,h,d,g,_,p);d.transmission>0?i.unshift(m):d.transparent===!0?n.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||rv),i.length>1&&i.sort(h||Xu),n.length>1&&n.sort(h||Xu)}function u(){for(let f=e,h=s.length;f<h;f++){const d=s[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:u,sort:c}}function sv(){let s=new WeakMap;function e(i,n){const r=s.get(i);let a;return r===void 0?(a=new Yu,s.set(i,[a])):n>=r.length?(a=new Yu,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function av(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new Ke};break;case"SpotLight":t={position:new te,direction:new te,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=t,t}}}function ov(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let lv=0;function cv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function uv(s){const e=new av,t=ov(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new te);const n=new te,r=new gt,a=new gt;function o(c){let u=0,f=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,S=0,M=0,v=0,b=0,w=0,E=0;c.sort(cv);for(let x=0,y=c.length;x<y;x++){const D=c[x],P=D.color,U=D.intensity,L=D.distance,B=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=P.r*U,f+=P.g*U,h+=P.b*U;else if(D.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(D.sh.coefficients[I],U);E++}else if(D.isDirectionalLight){const I=e.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,H=t.get(D);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=B,i.directionalShadowMatrix[d]=D.shadow.matrix,S++}i.directional[d]=I,d++}else if(D.isSpotLight){const I=e.get(D);I.position.setFromMatrixPosition(D.matrixWorld),I.color.copy(P).multiplyScalar(U),I.distance=L,I.coneCos=Math.cos(D.angle),I.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),I.decay=D.decay,i.spot[_]=I;const X=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,X.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=X.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=B,v++}_++}else if(D.isRectAreaLight){const I=e.get(D);I.color.copy(P).multiplyScalar(U),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=I,p++}else if(D.isPointLight){const I=e.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),I.distance=D.distance,I.decay=D.decay,D.castShadow){const X=D.shadow,H=t.get(D);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=D.shadow.matrix,M++}i.point[g]=I,g++}else if(D.isHemisphereLight){const I=e.get(D);I.skyColor.copy(D.color).multiplyScalar(U),I.groundColor.copy(D.groundColor).multiplyScalar(U),i.hemi[m]=I,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const T=i.hash;(T.directionalLength!==d||T.pointLength!==g||T.spotLength!==_||T.rectAreaLength!==p||T.hemiLength!==m||T.numDirectionalShadows!==S||T.numPointShadows!==M||T.numSpotShadows!==v||T.numSpotMaps!==b||T.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,T.directionalLength=d,T.pointLength=g,T.spotLength=_,T.rectAreaLength=p,T.hemiLength=m,T.numDirectionalShadows=S,T.numPointShadows=M,T.numSpotShadows=v,T.numSpotMaps=b,T.numLightProbes=E,i.version=lv++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const M=c[m];if(M.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),f++}else if(M.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function qu(s){const e=new uv(s),t=[],i=[];function n(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function fv(s){let e=new WeakMap;function t(n,r=0){const a=e.get(n);let o;return a===void 0?(o=new qu(s),e.set(n,[o])):r>=a.length?(o=new qu(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class uh extends ts{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fh extends ts{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pv(s,e,t){let i=new ih;const n=new Je,r=new Je,a=new ht,o=new uh({depthPacking:Hf}),l=new fh,c={},u=t.maxTextureSize,f={[Li]:en,[en]:Li,[Nn]:Nn},h=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:hv,fragmentShader:dv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new mi;g.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new mn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cf;let m=this.type;this.render=function(w,E,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const x=s.getRenderTarget(),y=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Ci),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=m!==ii&&this.type===ii,L=m===ii&&this.type!==ii;for(let B=0,I=w.length;B<I;B++){const X=w[B],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const q=H.getFrameExtents();if(n.multiply(q),r.copy(H.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/q.x),n.x=r.x*q.x,H.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/q.y),n.y=r.y*q.y,H.mapSize.y=r.y)),H.map===null||U===!0||L===!0){const F=this.type!==ii?{minFilter:gn,magFilter:gn}:{};H.map!==null&&H.map.dispose(),H.map=new sr(n.x,n.y,F),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const W=H.getViewportCount();for(let F=0;F<W;F++){const V=H.getViewport(F);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),P.viewport(a),H.updateMatrices(X,F),i=H.getFrustum(),v(E,T,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===ii&&S(H,T),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(x,y,D)};function S(w,E){const T=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new sr(n.x,n.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(E,null,T,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(E,null,T,d,_,null)}function M(w,E,T,x){let y=null;const D=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)y=D;else if(y=T.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const P=y.uuid,U=E.uuid;let L=c[P];L===void 0&&(L={},c[P]=L);let B=L[U];B===void 0&&(B=y.clone(),L[U]=B,E.addEventListener("dispose",b)),y=B}if(y.visible=E.visible,y.wireframe=E.wireframe,x===ii?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:f[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const P=s.properties.get(y);P.light=T}return y}function v(w,E,T,x,y){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===ii)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const U=e.update(w),L=w.material;if(Array.isArray(L)){const B=U.groups;for(let I=0,X=B.length;I<X;I++){const H=B[I],q=L[H.materialIndex];if(q&&q.visible){const W=M(w,q,x,y);w.onBeforeShadow(s,w,E,T,U,W,H),s.renderBufferDirect(T,null,U,W,w,H),w.onAfterShadow(s,w,E,T,U,W,H)}}}else if(L.visible){const B=M(w,L,x,y);w.onBeforeShadow(s,w,E,T,U,B,null),s.renderBufferDirect(T,null,U,B,w,null),w.onAfterShadow(s,w,E,T,U,B,null)}}const P=w.children;for(let U=0,L=P.length;U<L;U++)v(P[U],E,T,x,y)}function b(w){w.target.removeEventListener("dispose",b);for(const T in c){const x=c[T],y=w.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const mv={[nl]:il,[rl]:ol,[sl]:ll,[Hr]:al,[il]:nl,[ol]:rl,[ll]:sl,[al]:Hr};function _v(s,e){function t(){let G=!1;const he=new ht;let ee=null;const pe=new ht(0,0,0,0);return{setMask:function(Se){ee!==Se&&!G&&(s.colorMask(Se,Se,Se,Se),ee=Se)},setLocked:function(Se){G=Se},setClear:function(Se,ve,Fe,We,Ge){Ge===!0&&(Se*=We,ve*=We,Fe*=We),he.set(Se,ve,Fe,We),pe.equals(he)===!1&&(s.clearColor(Se,ve,Fe,We),pe.copy(he))},reset:function(){G=!1,ee=null,pe.set(-1,0,0,0)}}}function i(){let G=!1,he=!1,ee=null,pe=null,Se=null;return{setReversed:function(ve){if(he!==ve){const Fe=e.get("EXT_clip_control");he?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const We=Se;Se=null,this.setClear(We)}he=ve},getReversed:function(){return he},setTest:function(ve){ve?Y(s.DEPTH_TEST):ne(s.DEPTH_TEST)},setMask:function(ve){ee!==ve&&!G&&(s.depthMask(ve),ee=ve)},setFunc:function(ve){if(he&&(ve=mv[ve]),pe!==ve){switch(ve){case nl:s.depthFunc(s.NEVER);break;case il:s.depthFunc(s.ALWAYS);break;case rl:s.depthFunc(s.LESS);break;case Hr:s.depthFunc(s.LEQUAL);break;case sl:s.depthFunc(s.EQUAL);break;case al:s.depthFunc(s.GEQUAL);break;case ol:s.depthFunc(s.GREATER);break;case ll:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=ve}},setLocked:function(ve){G=ve},setClear:function(ve){Se!==ve&&(he&&(ve=1-ve),s.clearDepth(ve),Se=ve)},reset:function(){G=!1,ee=null,pe=null,Se=null,he=!1}}}function n(){let G=!1,he=null,ee=null,pe=null,Se=null,ve=null,Fe=null,We=null,Ge=null;return{setTest:function(Ve){G||(Ve?Y(s.STENCIL_TEST):ne(s.STENCIL_TEST))},setMask:function(Ve){he!==Ve&&!G&&(s.stencilMask(Ve),he=Ve)},setFunc:function(Ve,at,lt){(ee!==Ve||pe!==at||Se!==lt)&&(s.stencilFunc(Ve,at,lt),ee=Ve,pe=at,Se=lt)},setOp:function(Ve,at,lt){(ve!==Ve||Fe!==at||We!==lt)&&(s.stencilOp(Ve,at,lt),ve=Ve,Fe=at,We=lt)},setLocked:function(Ve){G=Ve},setClear:function(Ve){Ge!==Ve&&(s.clearStencil(Ve),Ge=Ve)},reset:function(){G=!1,he=null,ee=null,pe=null,Se=null,ve=null,Fe=null,We=null,Ge=null}}}const r=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,p=null,m=null,S=null,M=null,v=null,b=null,w=null,E=new Ke(0,0,0),T=0,x=!1,y=null,D=null,P=null,U=null,L=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,X=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),I=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),I=X>=2);let q=null,W={};const F=s.getParameter(s.SCISSOR_BOX),V=s.getParameter(s.VIEWPORT),Z=new ht().fromArray(F),N=new ht().fromArray(V);function O(G,he,ee,pe){const Se=new Uint8Array(4),ve=s.createTexture();s.bindTexture(G,ve),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Fe=0;Fe<ee;Fe++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(he+Fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return ve}const Q={};Q[s.TEXTURE_2D]=O(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=O(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=O(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=O(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(s.DEPTH_TEST),a.setFunc(Hr),Ae(!1),Re(Jc),Y(s.CULL_FACE),z(Ci);function Y(G){u[G]!==!0&&(s.enable(G),u[G]=!0)}function ne(G){u[G]!==!1&&(s.disable(G),u[G]=!1)}function ge(G,he){return f[G]!==he?(s.bindFramebuffer(G,he),f[G]=he,G===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=he),G===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=he),!0):!1}function Me(G,he){let ee=d,pe=!1;if(G){ee=h.get(he),ee===void 0&&(ee=[],h.set(he,ee));const Se=G.textures;if(ee.length!==Se.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Fe=Se.length;ve<Fe;ve++)ee[ve]=s.COLOR_ATTACHMENT0+ve;ee.length=Se.length,pe=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ee)}function xe(G){return g!==G?(s.useProgram(G),g=G,!0):!1}const oe={[Zi]:s.FUNC_ADD,[Ld]:s.FUNC_SUBTRACT,[Id]:s.FUNC_REVERSE_SUBTRACT};oe[Fd]=s.MIN,oe[Nd]=s.MAX;const Ne={[Od]:s.ZERO,[Bd]:s.ONE,[kd]:s.SRC_COLOR,[el]:s.SRC_ALPHA,[Xd]:s.SRC_ALPHA_SATURATE,[Hd]:s.DST_COLOR,[Gd]:s.DST_ALPHA,[zd]:s.ONE_MINUS_SRC_COLOR,[tl]:s.ONE_MINUS_SRC_ALPHA,[Wd]:s.ONE_MINUS_DST_COLOR,[Vd]:s.ONE_MINUS_DST_ALPHA,[Yd]:s.CONSTANT_COLOR,[qd]:s.ONE_MINUS_CONSTANT_COLOR,[jd]:s.CONSTANT_ALPHA,[Kd]:s.ONE_MINUS_CONSTANT_ALPHA};function z(G,he,ee,pe,Se,ve,Fe,We,Ge,Ve){if(G===Ci){_===!0&&(ne(s.BLEND),_=!1);return}if(_===!1&&(Y(s.BLEND),_=!0),G!==Ud){if(G!==p||Ve!==x){if((m!==Zi||v!==Zi)&&(s.blendEquation(s.FUNC_ADD),m=Zi,v=Zi),Ve)switch(G){case Or:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $c:s.blendFunc(s.ONE,s.ONE);break;case Qc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Or:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $c:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}S=null,M=null,b=null,w=null,E.set(0,0,0),T=0,p=G,x=Ve}return}Se=Se||he,ve=ve||ee,Fe=Fe||pe,(he!==m||Se!==v)&&(s.blendEquationSeparate(oe[he],oe[Se]),m=he,v=Se),(ee!==S||pe!==M||ve!==b||Fe!==w)&&(s.blendFuncSeparate(Ne[ee],Ne[pe],Ne[ve],Ne[Fe]),S=ee,M=pe,b=ve,w=Fe),(We.equals(E)===!1||Ge!==T)&&(s.blendColor(We.r,We.g,We.b,Ge),E.copy(We),T=Ge),p=G,x=!1}function Oe(G,he){G.side===Nn?ne(s.CULL_FACE):Y(s.CULL_FACE);let ee=G.side===en;he&&(ee=!ee),Ae(ee),G.blending===Or&&G.transparent===!1?z(Ci):z(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const pe=G.stencilWrite;o.setTest(pe),pe&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),we(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Y(s.SAMPLE_ALPHA_TO_COVERAGE):ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(G){y!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),y=G)}function Re(G){G!==Cd?(Y(s.CULL_FACE),G!==D&&(G===Jc?s.cullFace(s.BACK):G===Pd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ne(s.CULL_FACE),D=G}function ae(G){G!==P&&(I&&s.lineWidth(G),P=G)}function we(G,he,ee){G?(Y(s.POLYGON_OFFSET_FILL),(U!==he||L!==ee)&&(s.polygonOffset(he,ee),U=he,L=ee)):ne(s.POLYGON_OFFSET_FILL)}function me(G){G?Y(s.SCISSOR_TEST):ne(s.SCISSOR_TEST)}function R(G){G===void 0&&(G=s.TEXTURE0+B-1),q!==G&&(s.activeTexture(G),q=G)}function A(G,he,ee){ee===void 0&&(q===null?ee=s.TEXTURE0+B-1:ee=q);let pe=W[ee];pe===void 0&&(pe={type:void 0,texture:void 0},W[ee]=pe),(pe.type!==G||pe.texture!==he)&&(q!==ee&&(s.activeTexture(ee),q=ee),s.bindTexture(G,he||Q[G]),pe.type=G,pe.texture=he)}function k(){const G=W[q];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(G){Z.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Z.copy(G))}function ce(G){N.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),N.copy(G))}function De(G,he){let ee=c.get(he);ee===void 0&&(ee=new WeakMap,c.set(he,ee));let pe=ee.get(G);pe===void 0&&(pe=s.getUniformBlockIndex(he,G.name),ee.set(G,pe))}function Le(G,he){const pe=c.get(he).get(G);l.get(he)!==pe&&(s.uniformBlockBinding(he,pe,G.__bindingPointIndex),l.set(he,pe))}function je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},q=null,W={},f={},h=new WeakMap,d=[],g=null,_=!1,p=null,m=null,S=null,M=null,v=null,b=null,w=null,E=new Ke(0,0,0),T=0,x=!1,y=null,D=null,P=null,U=null,L=null,Z.set(0,0,s.canvas.width,s.canvas.height),N.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Y,disable:ne,bindFramebuffer:ge,drawBuffers:Me,useProgram:xe,setBlending:z,setMaterial:Oe,setFlipSided:Ae,setCullFace:Re,setLineWidth:ae,setPolygonOffset:we,setScissorTest:me,activeTexture:R,bindTexture:A,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:$,texImage2D:ye,texImage3D:Ee,updateUBOMapping:De,uniformBlockBinding:Le,texStorage2D:Pe,texStorage3D:fe,texSubImage2D:se,texSubImage3D:de,compressedTexSubImage2D:ue,compressedTexSubImage3D:_e,scissor:Te,viewport:ce,reset:je}}function ju(s,e,t,i){const n=gv(i);switch(t){case Nf:return s*e;case Bf:return s*e;case kf:return s*e*2;case zf:return s*e/n.components*n.byteLength;case fc:return s*e/n.components*n.byteLength;case Gf:return s*e*2/n.components*n.byteLength;case hc:return s*e*2/n.components*n.byteLength;case Of:return s*e*3/n.components*n.byteLength;case Bn:return s*e*4/n.components*n.byteLength;case dc:return s*e*4/n.components*n.byteLength;case Ea:case Ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ba:case Aa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dl:case ml:return Math.max(s,16)*Math.max(e,8)/4;case hl:case pl:return Math.max(s,8)*Math.max(e,8)/2;case _l:case gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case yl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case El:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case wl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wa:case Ll:case Il:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Vf:case Fl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Nl:case Ol:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gv(s){switch(s){case fi:case Lf:return{byteLength:1,components:1};case Cs:case If:case li:return{byteLength:2,components:1};case cc:case uc:return{byteLength:2,components:4};case rr:case lc:case An:return{byteLength:4,components:1};case Ff:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function vv(s,e,t,i,n,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,A){return d?new OffscreenCanvas(R,A):Ps("canvas")}function _(R,A,k){let J=1;const $=me(R);if(($.width>k||$.height>k)&&(J=k/Math.max($.width,$.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const se=Math.floor(J*$.width),de=Math.floor(J*$.height);f===void 0&&(f=g(se,de));const ue=A?g(se,de):f;return ue.width=se,ue.height=de,ue.getContext("2d").drawImage(R,0,0,se,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+de+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){s.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(R,A,k,J,$=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se=A;if(A===s.RED&&(k===s.FLOAT&&(se=s.R32F),k===s.HALF_FLOAT&&(se=s.R16F),k===s.UNSIGNED_BYTE&&(se=s.R8)),A===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(se=s.R8UI),k===s.UNSIGNED_SHORT&&(se=s.R16UI),k===s.UNSIGNED_INT&&(se=s.R32UI),k===s.BYTE&&(se=s.R8I),k===s.SHORT&&(se=s.R16I),k===s.INT&&(se=s.R32I)),A===s.RG&&(k===s.FLOAT&&(se=s.RG32F),k===s.HALF_FLOAT&&(se=s.RG16F),k===s.UNSIGNED_BYTE&&(se=s.RG8)),A===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(se=s.RG8UI),k===s.UNSIGNED_SHORT&&(se=s.RG16UI),k===s.UNSIGNED_INT&&(se=s.RG32UI),k===s.BYTE&&(se=s.RG8I),k===s.SHORT&&(se=s.RG16I),k===s.INT&&(se=s.RG32I)),A===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(se=s.RGB8UI),k===s.UNSIGNED_SHORT&&(se=s.RGB16UI),k===s.UNSIGNED_INT&&(se=s.RGB32UI),k===s.BYTE&&(se=s.RGB8I),k===s.SHORT&&(se=s.RGB16I),k===s.INT&&(se=s.RGB32I)),A===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(se=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(se=s.RGBA16UI),k===s.UNSIGNED_INT&&(se=s.RGBA32UI),k===s.BYTE&&(se=s.RGBA8I),k===s.SHORT&&(se=s.RGBA16I),k===s.INT&&(se=s.RGBA32I)),A===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(se=s.RGB9_E5),A===s.RGBA){const de=$?Ya:tt.getTransfer(J);k===s.FLOAT&&(se=s.RGBA32F),k===s.HALF_FLOAT&&(se=s.RGBA16F),k===s.UNSIGNED_BYTE&&(se=de===st?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function v(R,A){let k;return R?A===null||A===rr||A===Yr?k=s.DEPTH24_STENCIL8:A===An?k=s.DEPTH32F_STENCIL8:A===Cs&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===rr||A===Yr?k=s.DEPTH_COMPONENT24:A===An?k=s.DEPTH_COMPONENT32F:A===Cs&&(k=s.DEPTH_COMPONENT16),k}function b(R,A){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==Lt?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function w(R){const A=R.target;A.removeEventListener("dispose",w),T(A),A.isVideoTexture&&u.delete(A)}function E(R){const A=R.target;A.removeEventListener("dispose",E),y(A)}function T(R){const A=i.get(R);if(A.__webglInit===void 0)return;const k=R.source,J=h.get(k);if(J){const $=J[A.__cacheKey];$.usedTimes--,$.usedTimes===0&&x(R),Object.keys(J).length===0&&h.delete(k)}i.remove(R)}function x(R){const A=i.get(R);s.deleteTexture(A.__webglTexture);const k=R.source,J=h.get(k);delete J[A.__cacheKey],a.memory.textures--}function y(R){const A=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(A.__webglFramebuffer[J]))for(let $=0;$<A.__webglFramebuffer[J].length;$++)s.deleteFramebuffer(A.__webglFramebuffer[J][$]);else s.deleteFramebuffer(A.__webglFramebuffer[J]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[J])}else{if(Array.isArray(A.__webglFramebuffer))for(let J=0;J<A.__webglFramebuffer.length;J++)s.deleteFramebuffer(A.__webglFramebuffer[J]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let J=0;J<A.__webglColorRenderbuffer.length;J++)A.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[J]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const k=R.textures;for(let J=0,$=k.length;J<$;J++){const se=i.get(k[J]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(k[J])}i.remove(R)}let D=0;function P(){D=0}function U(){const R=D;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),D+=1,R}function L(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function B(R,A){const k=i.get(R);if(R.isVideoTexture&&ae(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(k,R,A);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+A)}function I(R,A){const k=i.get(R);if(R.version>0&&k.__version!==R.version){N(k,R,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+A)}function X(R,A){const k=i.get(R);if(R.version>0&&k.__version!==R.version){N(k,R,A);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+A)}function H(R,A){const k=i.get(R);if(R.version>0&&k.__version!==R.version){O(k,R,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+A)}const q={[ul]:s.REPEAT,[oi]:s.CLAMP_TO_EDGE,[fl]:s.MIRRORED_REPEAT},W={[gn]:s.NEAREST,[rp]:s.NEAREST_MIPMAP_NEAREST,[Zs]:s.NEAREST_MIPMAP_LINEAR,[Lt]:s.LINEAR,[uo]:s.LINEAR_MIPMAP_NEAREST,[bi]:s.LINEAR_MIPMAP_LINEAR},F={[op]:s.NEVER,[dp]:s.ALWAYS,[lp]:s.LESS,[Xf]:s.LEQUAL,[cp]:s.EQUAL,[hp]:s.GEQUAL,[up]:s.GREATER,[fp]:s.NOTEQUAL};function V(R,A){if(A.type===An&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Lt||A.magFilter===uo||A.magFilter===Zs||A.magFilter===bi||A.minFilter===Lt||A.minFilter===uo||A.minFilter===Zs||A.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,q[A.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,q[A.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,q[A.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,W[A.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,W[A.minFilter]),A.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,F[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===gn||A.minFilter!==Zs&&A.minFilter!==bi||A.type===An&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Z(R,A){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",w));const J=A.source;let $=h.get(J);$===void 0&&($={},h.set(J,$));const se=L(A);if(se!==R.__cacheKey){$[se]===void 0&&($[se]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[se].usedTimes++;const de=$[R.__cacheKey];de!==void 0&&($[R.__cacheKey].usedTimes--,de.usedTimes===0&&x(A)),R.__cacheKey=se,R.__webglTexture=$[se].texture}return k}function N(R,A,k){let J=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(J=s.TEXTURE_3D);const $=Z(R,A),se=A.source;t.bindTexture(J,R.__webglTexture,s.TEXTURE0+k);const de=i.get(se);if(se.version!==de.__version||$===!0){t.activeTexture(s.TEXTURE0+k);const ue=tt.getPrimaries(tt.workingColorSpace),_e=A.colorSpace===Ti?null:tt.getPrimaries(A.colorSpace),Pe=A.colorSpace===Ti||ue===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let fe=_(A.image,!1,n.maxTextureSize);fe=we(A,fe);const ye=r.convert(A.format,A.colorSpace),Ee=r.convert(A.type);let Te=M(A.internalFormat,ye,Ee,A.colorSpace,A.isVideoTexture);V(J,A);let ce;const De=A.mipmaps,Le=A.isVideoTexture!==!0,je=de.__version===void 0||$===!0,G=se.dataReady,he=b(A,fe);if(A.isDepthTexture)Te=v(A.format===qr,A.type),je&&(Le?t.texStorage2D(s.TEXTURE_2D,1,Te,fe.width,fe.height):t.texImage2D(s.TEXTURE_2D,0,Te,fe.width,fe.height,0,ye,Ee,null));else if(A.isDataTexture)if(De.length>0){Le&&je&&t.texStorage2D(s.TEXTURE_2D,he,Te,De[0].width,De[0].height);for(let ee=0,pe=De.length;ee<pe;ee++)ce=De[ee],Le?G&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ce.width,ce.height,ye,Ee,ce.data):t.texImage2D(s.TEXTURE_2D,ee,Te,ce.width,ce.height,0,ye,Ee,ce.data);A.generateMipmaps=!1}else Le?(je&&t.texStorage2D(s.TEXTURE_2D,he,Te,fe.width,fe.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe.width,fe.height,ye,Ee,fe.data)):t.texImage2D(s.TEXTURE_2D,0,Te,fe.width,fe.height,0,ye,Ee,fe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Le&&je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Te,De[0].width,De[0].height,fe.depth);for(let ee=0,pe=De.length;ee<pe;ee++)if(ce=De[ee],A.format!==Bn)if(ye!==null)if(Le){if(G)if(A.layerUpdates.size>0){const Se=ju(ce.width,ce.height,A.format,A.type);for(const ve of A.layerUpdates){const Fe=ce.data.subarray(ve*Se/ce.data.BYTES_PER_ELEMENT,(ve+1)*Se/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,ve,ce.width,ce.height,1,ye,Fe)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,fe.depth,ye,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Te,ce.width,ce.height,fe.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,fe.depth,ye,Ee,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Te,ce.width,ce.height,fe.depth,0,ye,Ee,ce.data)}else{Le&&je&&t.texStorage2D(s.TEXTURE_2D,he,Te,De[0].width,De[0].height);for(let ee=0,pe=De.length;ee<pe;ee++)ce=De[ee],A.format!==Bn?ye!==null?Le?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,ce.width,ce.height,ye,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Te,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?G&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ce.width,ce.height,ye,Ee,ce.data):t.texImage2D(s.TEXTURE_2D,ee,Te,ce.width,ce.height,0,ye,Ee,ce.data)}else if(A.isDataArrayTexture)if(Le){if(je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Te,fe.width,fe.height,fe.depth),G)if(A.layerUpdates.size>0){const ee=ju(fe.width,fe.height,A.format,A.type);for(const pe of A.layerUpdates){const Se=fe.data.subarray(pe*ee/fe.data.BYTES_PER_ELEMENT,(pe+1)*ee/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,fe.width,fe.height,1,ye,Ee,Se)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,ye,Ee,fe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,fe.width,fe.height,fe.depth,0,ye,Ee,fe.data);else if(A.isData3DTexture)Le?(je&&t.texStorage3D(s.TEXTURE_3D,he,Te,fe.width,fe.height,fe.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,ye,Ee,fe.data)):t.texImage3D(s.TEXTURE_3D,0,Te,fe.width,fe.height,fe.depth,0,ye,Ee,fe.data);else if(A.isFramebufferTexture){if(je)if(Le)t.texStorage2D(s.TEXTURE_2D,he,Te,fe.width,fe.height);else{let ee=fe.width,pe=fe.height;for(let Se=0;Se<he;Se++)t.texImage2D(s.TEXTURE_2D,Se,Te,ee,pe,0,ye,Ee,null),ee>>=1,pe>>=1}}else if(De.length>0){if(Le&&je){const ee=me(De[0]);t.texStorage2D(s.TEXTURE_2D,he,Te,ee.width,ee.height)}for(let ee=0,pe=De.length;ee<pe;ee++)ce=De[ee],Le?G&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ye,Ee,ce):t.texImage2D(s.TEXTURE_2D,ee,Te,ye,Ee,ce);A.generateMipmaps=!1}else if(Le){if(je){const ee=me(fe);t.texStorage2D(s.TEXTURE_2D,he,Te,ee.width,ee.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ye,Ee,fe)}else t.texImage2D(s.TEXTURE_2D,0,Te,ye,Ee,fe);p(A)&&m(J),de.__version=se.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function O(R,A,k){if(A.image.length!==6)return;const J=Z(R,A),$=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);const se=i.get($);if($.version!==se.__version||J===!0){t.activeTexture(s.TEXTURE0+k);const de=tt.getPrimaries(tt.workingColorSpace),ue=A.colorSpace===Ti?null:tt.getPrimaries(A.colorSpace),_e=A.colorSpace===Ti||de===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Pe=A.isCompressedTexture||A.image[0].isCompressedTexture,fe=A.image[0]&&A.image[0].isDataTexture,ye=[];for(let pe=0;pe<6;pe++)!Pe&&!fe?ye[pe]=_(A.image[pe],!0,n.maxCubemapSize):ye[pe]=fe?A.image[pe].image:A.image[pe],ye[pe]=we(A,ye[pe]);const Ee=ye[0],Te=r.convert(A.format,A.colorSpace),ce=r.convert(A.type),De=M(A.internalFormat,Te,ce,A.colorSpace),Le=A.isVideoTexture!==!0,je=se.__version===void 0||J===!0,G=$.dataReady;let he=b(A,Ee);V(s.TEXTURE_CUBE_MAP,A);let ee;if(Pe){Le&&je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,De,Ee.width,Ee.height);for(let pe=0;pe<6;pe++){ee=ye[pe].mipmaps;for(let Se=0;Se<ee.length;Se++){const ve=ee[Se];A.format!==Bn?Te!==null?Le?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,0,0,ve.width,ve.height,Te,ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,De,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,0,0,ve.width,ve.height,Te,ce,ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,De,ve.width,ve.height,0,Te,ce,ve.data)}}}else{if(ee=A.mipmaps,Le&&je){ee.length>0&&he++;const pe=me(ye[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,De,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(fe){Le?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ye[pe].width,ye[pe].height,Te,ce,ye[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,De,ye[pe].width,ye[pe].height,0,Te,ce,ye[pe].data);for(let Se=0;Se<ee.length;Se++){const Fe=ee[Se].image[pe].image;Le?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,0,0,Fe.width,Fe.height,Te,ce,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,De,Fe.width,Fe.height,0,Te,ce,Fe.data)}}else{Le?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Te,ce,ye[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,De,Te,ce,ye[pe]);for(let Se=0;Se<ee.length;Se++){const ve=ee[Se];Le?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,0,0,Te,ce,ve.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,De,Te,ce,ve.image[pe])}}}p(A)&&m(s.TEXTURE_CUBE_MAP),se.__version=$.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function Q(R,A,k,J,$,se){const de=r.convert(k.format,k.colorSpace),ue=r.convert(k.type),_e=M(k.internalFormat,de,ue,k.colorSpace),Pe=i.get(A),fe=i.get(k);if(fe.__renderTarget=A,!Pe.__hasExternalTextures){const ye=Math.max(1,A.width>>se),Ee=Math.max(1,A.height>>se);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,se,_e,ye,Ee,A.depth,0,de,ue,null):t.texImage2D($,se,_e,ye,Ee,0,de,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Re(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,$,fe.__webglTexture,0,Ae(A)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,$,fe.__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Y(R,A,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),A.depthBuffer){const J=A.depthTexture,$=J&&J.isDepthTexture?J.type:null,se=v(A.stencilBuffer,$),de=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=Ae(A);Re(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,se,A.width,A.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,se,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,se,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,R)}else{const J=A.textures;for(let $=0;$<J.length;$++){const se=J[$],de=r.convert(se.format,se.colorSpace),ue=r.convert(se.type),_e=M(se.internalFormat,de,ue,se.colorSpace),Pe=Ae(A);k&&Re(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,_e,A.width,A.height):Re(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,_e,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,_e,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ne(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(A.depthTexture);J.__renderTarget=A,(!J.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),B(A.depthTexture,0);const $=J.__webglTexture,se=Ae(A);if(A.depthTexture.format===Br)Re(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(A.depthTexture.format===qr)Re(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ge(R){const A=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),J){const $=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,J.removeEventListener("dispose",$)};J.addEventListener("dispose",$),A.__depthDisposeCallback=$}A.__boundDepthTexture=J}if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ne(A.__webglFramebuffer,R)}else if(k){A.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[J]),A.__webglDepthbuffer[J]===void 0)A.__webglDepthbuffer[J]=s.createRenderbuffer(),Y(A.__webglDepthbuffer[J],R,!1);else{const $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=A.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,se)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Y(A.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,$)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(R,A,k){const J=i.get(R);A!==void 0&&Q(J.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&ge(R)}function xe(R){const A=R.texture,k=i.get(R),J=i.get(A);R.addEventListener("dispose",E);const $=R.textures,se=R.isWebGLCubeRenderTarget===!0,de=$.length>1;if(de||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=A.version,a.memory.textures++),se){k.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer[ue]=[];for(let _e=0;_e<A.mipmaps.length;_e++)k.__webglFramebuffer[ue][_e]=s.createFramebuffer()}else k.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer=[];for(let ue=0;ue<A.mipmaps.length;ue++)k.__webglFramebuffer[ue]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(de)for(let ue=0,_e=$.length;ue<_e;ue++){const Pe=i.get($[ue]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&Re(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<$.length;ue++){const _e=$[ue];k.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);const Pe=r.convert(_e.format,_e.colorSpace),fe=r.convert(_e.type),ye=M(_e.internalFormat,Pe,fe,_e.colorSpace,R.isXRRenderTarget===!0),Ee=Ae(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,ye,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Y(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),V(s.TEXTURE_CUBE_MAP,A);for(let ue=0;ue<6;ue++)if(A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)Q(k.__webglFramebuffer[ue][_e],R,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,_e);else Q(k.__webglFramebuffer[ue],R,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(A)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ue=0,_e=$.length;ue<_e;ue++){const Pe=$[ue],fe=i.get(Pe);t.bindTexture(s.TEXTURE_2D,fe.__webglTexture),V(s.TEXTURE_2D,Pe),Q(k.__webglFramebuffer,R,Pe,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),p(Pe)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,J.__webglTexture),V(ue,A),A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)Q(k.__webglFramebuffer[_e],R,A,s.COLOR_ATTACHMENT0,ue,_e);else Q(k.__webglFramebuffer,R,A,s.COLOR_ATTACHMENT0,ue,0);p(A)&&m(ue),t.unbindTexture()}R.depthBuffer&&ge(R)}function oe(R){const A=R.textures;for(let k=0,J=A.length;k<J;k++){const $=A[k];if(p($)){const se=S(R),de=i.get($).__webglTexture;t.bindTexture(se,de),m(se),t.unbindTexture()}}}const Ne=[],z=[];function Oe(R){if(R.samples>0){if(Re(R)===!1){const A=R.textures,k=R.width,J=R.height;let $=s.COLOR_BUFFER_BIT;const se=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=i.get(R),ue=A.length>1;if(ue)for(let _e=0;_e<A.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let _e=0;_e<A.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Pe=i.get(A[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pe,0)}s.blitFramebuffer(0,0,k,J,0,0,k,J,$,s.NEAREST),l===!0&&(Ne.length=0,z.length=0,Ne.push(s.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ne.push(se),z.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let _e=0;_e<A.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Pe=i.get(A[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const A=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Ae(R){return Math.min(n.maxSamples,R.samples)}function Re(R){const A=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ae(R){const A=a.render.frame;u.get(R)!==A&&(u.set(R,A),R.update())}function we(R,A){const k=R.colorSpace,J=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==cr&&k!==Ti&&(tt.getTransfer(k)===st?(J!==Bn||$!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),A}function me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=B,this.setTexture2DArray=I,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=Me,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Re}function xv(s,e){function t(i,n=Ti){let r;const a=tt.getTransfer(n);if(i===fi)return s.UNSIGNED_BYTE;if(i===cc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===uc)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Ff)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Lf)return s.BYTE;if(i===If)return s.SHORT;if(i===Cs)return s.UNSIGNED_SHORT;if(i===lc)return s.INT;if(i===rr)return s.UNSIGNED_INT;if(i===An)return s.FLOAT;if(i===li)return s.HALF_FLOAT;if(i===Nf)return s.ALPHA;if(i===Of)return s.RGB;if(i===Bn)return s.RGBA;if(i===Bf)return s.LUMINANCE;if(i===kf)return s.LUMINANCE_ALPHA;if(i===Br)return s.DEPTH_COMPONENT;if(i===qr)return s.DEPTH_STENCIL;if(i===zf)return s.RED;if(i===fc)return s.RED_INTEGER;if(i===Gf)return s.RG;if(i===hc)return s.RG_INTEGER;if(i===dc)return s.RGBA_INTEGER;if(i===Ea||i===Ta||i===ba||i===Aa)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hl||i===dl||i===pl||i===ml)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_l||i===gl||i===vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_l||i===gl)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xl||i===Sl||i===Ml||i===yl||i===El||i===Tl||i===bl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Dl||i===Ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ml)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Al)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ul)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wa||i===Ll||i===Il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===wa)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vf||i===Fl||i===Nl||i===Ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===wa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yr?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}class Sv extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class va extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mv={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mv)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new va;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ev=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new It,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new hi({vertexShader:yv,fragmentShader:Ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new fr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bv extends es{constructor(e,t){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new Tv,p=t.getContextAttributes();let m=null,S=null;const M=[],v=[],b=new Je;let w=null;const E=new bn;E.viewport=new ht;const T=new bn;T.viewport=new ht;const x=[E,T],y=new Sv;let D=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let O=M[N];return O===void 0&&(O=new zo,M[N]=O),O.getTargetRaySpace()},this.getControllerGrip=function(N){let O=M[N];return O===void 0&&(O=new zo,M[N]=O),O.getGripSpace()},this.getHand=function(N){let O=M[N];return O===void 0&&(O=new zo,M[N]=O),O.getHandSpace()};function U(N){const O=v.indexOf(N.inputSource);if(O===-1)return;const Q=M[O];Q!==void 0&&(Q.update(N.inputSource,N.frame,c||a),Q.dispatchEvent({type:N.type,data:N.inputSource}))}function L(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",L),n.removeEventListener("inputsourceschange",B);for(let N=0;N<M.length;N++){const O=v[N];O!==null&&(v[N]=null,M[N].disconnect(O))}D=null,P=null,_.reset(),e.setRenderTarget(m),d=null,h=null,f=null,n=null,S=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(N){if(n=N,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",L),n.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(b),n.renderState.layers===void 0){const O={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,O),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new sr(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let O=null,Q=null,Y=null;p.depth&&(Y=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=p.stencil?qr:Br,Q=p.stencil?Yr:rr);const ne={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:r};f=new XRWebGLBinding(n,t),h=f.createProjectionLayer(ne),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new sr(h.textureWidth,h.textureHeight,{format:Bn,type:fi,depthTexture:new sh(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Z.setContext(n),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(N){for(let O=0;O<N.removed.length;O++){const Q=N.removed[O],Y=v.indexOf(Q);Y>=0&&(v[Y]=null,M[Y].disconnect(Q))}for(let O=0;O<N.added.length;O++){const Q=N.added[O];let Y=v.indexOf(Q);if(Y===-1){for(let ge=0;ge<M.length;ge++)if(ge>=v.length){v.push(Q),Y=ge;break}else if(v[ge]===null){v[ge]=Q,Y=ge;break}if(Y===-1)break}const ne=M[Y];ne&&ne.connect(Q)}}const I=new te,X=new te;function H(N,O,Q){I.setFromMatrixPosition(O.matrixWorld),X.setFromMatrixPosition(Q.matrixWorld);const Y=I.distanceTo(X),ne=O.projectionMatrix.elements,ge=Q.projectionMatrix.elements,Me=ne[14]/(ne[10]-1),xe=ne[14]/(ne[10]+1),oe=(ne[9]+1)/ne[5],Ne=(ne[9]-1)/ne[5],z=(ne[8]-1)/ne[0],Oe=(ge[8]+1)/ge[0],Ae=Me*z,Re=Me*Oe,ae=Y/(-z+Oe),we=ae*-z;if(O.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(we),N.translateZ(ae),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ne[10]===-1)N.projectionMatrix.copy(O.projectionMatrix),N.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const me=Me+ae,R=xe+ae,A=Ae-we,k=Re+(Y-we),J=oe*xe/R*me,$=Ne*xe/R*me;N.projectionMatrix.makePerspective(A,k,J,$,me,R),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function q(N,O){O===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(O.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(n===null)return;let O=N.near,Q=N.far;_.texture!==null&&(_.depthNear>0&&(O=_.depthNear),_.depthFar>0&&(Q=_.depthFar)),y.near=T.near=E.near=O,y.far=T.far=E.far=Q,(D!==y.near||P!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,P=y.far),E.layers.mask=N.layers.mask|2,T.layers.mask=N.layers.mask|4,y.layers.mask=E.layers.mask|T.layers.mask;const Y=N.parent,ne=y.cameras;q(y,Y);for(let ge=0;ge<ne.length;ge++)q(ne[ge],Y);ne.length===2?H(y,E,T):y.projectionMatrix.copy(E.projectionMatrix),W(N,y,Y)};function W(N,O,Q){Q===null?N.matrix.copy(O.matrixWorld):(N.matrix.copy(Q.matrixWorld),N.matrix.invert(),N.matrix.multiply(O.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(O.projectionMatrix),N.projectionMatrixInverse.copy(O.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Bl*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(N){l=N,h!==null&&(h.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let F=null;function V(N,O){if(u=O.getViewerPose(c||a),g=O,u!==null){const Q=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Y=!1;Q.length!==y.cameras.length&&(y.cameras.length=0,Y=!0);for(let ge=0;ge<Q.length;ge++){const Me=Q[ge];let xe=null;if(d!==null)xe=d.getViewport(Me);else{const Ne=f.getViewSubImage(h,Me);xe=Ne.viewport,ge===0&&(e.setRenderTargetTextures(S,Ne.colorTexture,h.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(S))}let oe=x[ge];oe===void 0&&(oe=new bn,oe.layers.enable(ge),oe.viewport=new ht,x[ge]=oe),oe.matrix.fromArray(Me.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Me.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(xe.x,xe.y,xe.width,xe.height),ge===0&&(y.matrix.copy(oe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Y===!0&&y.cameras.push(oe)}const ne=n.enabledFeatures;if(ne&&ne.includes("depth-sensing")){const ge=f.getDepthInformation(Q[0]);ge&&ge.isValid&&ge.texture&&_.init(e,ge,n.renderState)}}for(let Q=0;Q<M.length;Q++){const Y=v[Q],ne=M[Q];Y!==null&&ne!==void 0&&ne.update(Y,O,c||a)}F&&F(N,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),g=null}const Z=new rh;Z.setAnimationLoop(V),this.setAnimationLoop=function(N){F=N},this.dispose=function(){}}}const Hi=new jn,Av=new gt;function wv(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Qf(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,S,M,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===en&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===en&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),M=S.envMap,v=S.envMapRotation;M&&(p.envMap.value=M,Hi.copy(v),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),p.envMapRotation.value.setFromMatrix4(Av.makeRotationFromEuler(Hi)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Rv(s,e,t,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const v=M.program;i.uniformBlockBinding(S,v)}function c(S,M){let v=n[S.id];v===void 0&&(g(S),v=u(S),n[S.id]=v,S.addEventListener("dispose",p));const b=M.program;i.updateUBOMapping(S,b);const w=e.render.frame;r[S.id]!==w&&(h(S),r[S.id]=w)}function u(S){const M=f();S.__bindingPointIndex=M;const v=s.createBuffer(),b=S.__size,w=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,b,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const M=n[S.id],v=S.uniforms,b=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let w=0,E=v.length;w<E;w++){const T=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,y=T.length;x<y;x++){const D=T[x];if(d(D,w,x,b)===!0){const P=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let L=0;for(let B=0;B<U.length;B++){const I=U[B],X=_(I);typeof I=="number"||typeof I=="boolean"?(D.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,P+L,D.__data)):I.isMatrix3?(D.__data[0]=I.elements[0],D.__data[1]=I.elements[1],D.__data[2]=I.elements[2],D.__data[3]=0,D.__data[4]=I.elements[3],D.__data[5]=I.elements[4],D.__data[6]=I.elements[5],D.__data[7]=0,D.__data[8]=I.elements[6],D.__data[9]=I.elements[7],D.__data[10]=I.elements[8],D.__data[11]=0):(I.toArray(D.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,P,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,M,v,b){const w=S.value,E=M+"_"+v;if(b[E]===void 0)return typeof w=="number"||typeof w=="boolean"?b[E]=w:b[E]=w.clone(),!0;{const T=b[E];if(typeof w=="number"||typeof w=="boolean"){if(T!==w)return b[E]=w,!0}else if(T.equals(w)===!1)return T.copy(w),!0}return!1}function g(S){const M=S.uniforms;let v=0;const b=16;for(let E=0,T=M.length;E<T;E++){const x=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,D=x.length;y<D;y++){const P=x[y],U=Array.isArray(P.value)?P.value:[P.value];for(let L=0,B=U.length;L<B;L++){const I=U[L],X=_(I),H=v%b,q=H%X.boundary,W=H+q;v+=q,W!==0&&b-W<X.storage&&(v+=b-W),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=X.storage}}}const w=v%b;return w>0&&(v+=b-w),S.__size=v,S.__cache={},this}function _(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){const M=S.target;M.removeEventListener("dispose",p);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function m(){for(const S in n)s.deleteBuffer(n[S]);a=[],n={},r={}}return{bind:l,update:c,dispose:m}}class Cv{constructor(e={}){const{canvas:t=mp(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const S=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=Pi,this.toneMappingExposure=1;const v=this;let b=!1,w=0,E=0,T=null,x=-1,y=null;const D=new ht,P=new ht;let U=null;const L=new Ke(0);let B=0,I=t.width,X=t.height,H=1,q=null,W=null;const F=new ht(0,0,I,X),V=new ht(0,0,I,X);let Z=!1;const N=new ih;let O=!1,Q=!1;const Y=new gt,ne=new gt,ge=new te,Me=new ht,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ne(){return T===null?H:1}let z=i;function Oe(C,K){return t.getContext(C,K)}try{const C={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oc}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ve,!1),z===null){const K="webgl2";if(z=Oe(K,C),z===null)throw Oe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ae,Re,ae,we,me,R,A,k,J,$,se,de,ue,_e,Pe,fe,ye,Ee,Te,ce,De,Le,je,G;function he(){Ae=new Ng(z),Ae.init(),Le=new xv(z,Ae),Re=new Cg(z,Ae,e,Le),ae=new _v(z,Ae),Re.reverseDepthBuffer&&h&&ae.buffers.depth.setReversed(!0),we=new kg(z),me=new iv,R=new vv(z,Ae,ae,me,Re,Le,we),A=new Dg(v),k=new Fg(v),J=new Xp(z),je=new wg(z,J),$=new Og(z,J,we,je),se=new Gg(z,$,J,we),Te=new zg(z,Re,R),fe=new Pg(me),de=new nv(v,A,k,Ae,Re,je,fe),ue=new wv(v,me),_e=new sv,Pe=new fv(Ae),Ee=new Ag(v,A,k,ae,se,d,l),ye=new pv(v,se,Re),G=new Rv(z,we,Re,ae),ce=new Rg(z,Ae,we),De=new Bg(z,Ae,we),we.programs=de.programs,v.capabilities=Re,v.extensions=Ae,v.properties=me,v.renderLists=_e,v.shadowMap=ye,v.state=ae,v.info=we}he();const ee=new bv(v,z);this.xr=ee,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=Ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(I,X,!1))},this.getSize=function(C){return C.set(I,X)},this.setSize=function(C,K,re=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,X=K,t.width=Math.floor(C*H),t.height=Math.floor(K*H),re===!0&&(t.style.width=C+"px",t.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(I*H,X*H).floor()},this.setDrawingBufferSize=function(C,K,re){I=C,X=K,H=re,t.width=Math.floor(C*re),t.height=Math.floor(K*re),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,K,re,ie){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,K,re,ie),ae.viewport(D.copy(F).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(V)},this.setScissor=function(C,K,re,ie){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,K,re,ie),ae.scissor(P.copy(V).multiplyScalar(H).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(C){ae.setScissorTest(Z=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(C=!0,K=!0,re=!0){let ie=0;if(C){let j=!1;if(T!==null){const be=T.texture.format;j=be===dc||be===hc||be===fc}if(j){const be=T.texture.type,le=be===fi||be===rr||be===Cs||be===Yr||be===cc||be===uc,Ie=Ee.getClearColor(),ke=Ee.getClearAlpha(),He=Ie.r,Xe=Ie.g,Be=Ie.b;le?(g[0]=He,g[1]=Xe,g[2]=Be,g[3]=ke,z.clearBufferuiv(z.COLOR,0,g)):(_[0]=He,_[1]=Xe,_[2]=Be,_[3]=ke,z.clearBufferiv(z.COLOR,0,_))}else ie|=z.COLOR_BUFFER_BIT}K&&(ie|=z.DEPTH_BUFFER_BIT),re&&(ie|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),_e.dispose(),Pe.dispose(),me.dispose(),A.dispose(),k.dispose(),se.dispose(),je.dispose(),G.dispose(),de.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",pt),ee.removeEventListener("sessionend",Yt),Ft.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=we.autoReset,K=ye.enabled,re=ye.autoUpdate,ie=ye.needsUpdate,j=ye.type;he(),we.autoReset=C,ye.enabled=K,ye.autoUpdate=re,ye.needsUpdate=ie,ye.type=j}function ve(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Fe(C){const K=C.target;K.removeEventListener("dispose",Fe),We(K)}function We(C){Ge(C),me.remove(C)}function Ge(C){const K=me.get(C).programs;K!==void 0&&(K.forEach(function(re){de.releaseProgram(re)}),C.isShaderMaterial&&de.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,re,ie,j,be){K===null&&(K=xe);const le=j.isMesh&&j.matrixWorld.determinant()<0,Ie=Qa(C,K,re,ie,j);ae.setMaterial(ie,le);let ke=re.index,He=1;if(ie.wireframe===!0){if(ke=$.getWireframeAttribute(re),ke===void 0)return;He=2}const Xe=re.drawRange,Be=re.attributes.position;let Ze=Xe.start*He,nt=(Xe.start+Xe.count)*He;be!==null&&(Ze=Math.max(Ze,be.start*He),nt=Math.min(nt,(be.start+be.count)*He)),ke!==null?(Ze=Math.max(Ze,0),nt=Math.min(nt,ke.count)):Be!=null&&(Ze=Math.max(Ze,0),nt=Math.min(nt,Be.count));const it=nt-Ze;if(it<0||it===1/0)return;je.setup(j,ie,Ie,re,ke);let Ct,$e=ce;if(ke!==null&&(Ct=J.get(ke),$e=De,$e.setIndex(Ct)),j.isMesh)ie.wireframe===!0?(ae.setLineWidth(ie.wireframeLinewidth*Ne()),$e.setMode(z.LINES)):$e.setMode(z.TRIANGLES);else if(j.isLine){let ze=ie.linewidth;ze===void 0&&(ze=1),ae.setLineWidth(ze*Ne()),j.isLineSegments?$e.setMode(z.LINES):j.isLineLoop?$e.setMode(z.LINE_LOOP):$e.setMode(z.LINE_STRIP)}else j.isPoints?$e.setMode(z.POINTS):j.isSprite&&$e.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)$e.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))$e.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const ze=j._multiDrawStarts,ln=j._multiDrawCounts,et=j._multiDrawCount,Pt=ke?J.get(ke).bytesPerElement:1,Gn=me.get(ie).currentProgram.getUniforms();for(let vt=0;vt<et;vt++)Gn.setValue(z,"_gl_DrawID",vt),$e.render(ze[vt]/Pt,ln[vt])}else if(j.isInstancedMesh)$e.renderInstances(Ze,it,j.count);else if(re.isInstancedBufferGeometry){const ze=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ln=Math.min(re.instanceCount,ze);$e.renderInstances(Ze,it,ln)}else $e.render(Ze,it)};function Ve(C,K,re){C.transparent===!0&&C.side===Nn&&C.forceSinglePass===!1?(C.side=en,C.needsUpdate=!0,Mn(C,K,re),C.side=Li,C.needsUpdate=!0,Mn(C,K,re),C.side=Nn):Mn(C,K,re)}this.compile=function(C,K,re=null){re===null&&(re=C),m=Pe.get(re),m.init(K),M.push(m),re.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),C!==re&&C.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights();const ie=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const be=j.material;if(be)if(Array.isArray(be))for(let le=0;le<be.length;le++){const Ie=be[le];Ve(Ie,re,j),ie.add(Ie)}else Ve(be,re,j),ie.add(be)}),M.pop(),m=null,ie},this.compileAsync=function(C,K,re=null){const ie=this.compile(C,K,re);return new Promise(j=>{function be(){if(ie.forEach(function(le){me.get(le).currentProgram.isReady()&&ie.delete(le)}),ie.size===0){j(C);return}setTimeout(be,10)}Ae.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let at=null;function lt(C){at&&at(C)}function pt(){Ft.stop()}function Yt(){Ft.start()}const Ft=new rh;Ft.setAnimationLoop(lt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(C){at=C,ee.setAnimationLoop(C),C===null?Ft.stop():Ft.start()},ee.addEventListener("sessionstart",pt),ee.addEventListener("sessionend",Yt),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(K),K=ee.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,K,T),m=Pe.get(C,M.length),m.init(K),M.push(m),ne.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),N.setFromProjectionMatrix(ne),Q=this.localClippingEnabled,O=fe.init(this.clippingPlanes,Q),p=_e.get(C,S.length),p.init(),S.push(p),ee.enabled===!0&&ee.isPresenting===!0){const be=v.xr.getDepthSensingMesh();be!==null&&on(be,K,-1/0,v.sortObjects)}on(C,K,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(q,W),oe=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,oe&&Ee.addToRenderList(p,C),this.info.render.frame++,O===!0&&fe.beginShadows();const re=m.state.shadowsArray;ye.render(re,C,K),O===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=p.opaque,j=p.transmissive;if(m.setupLights(),K.isArrayCamera){const be=K.cameras;if(j.length>0)for(let le=0,Ie=be.length;le<Ie;le++){const ke=be[le];zn(ie,j,C,ke)}oe&&Ee.render(C);for(let le=0,Ie=be.length;le<Ie;le++){const ke=be[le];Pn(p,C,ke,ke.viewport)}}else j.length>0&&zn(ie,j,C,K),oe&&Ee.render(C),Pn(p,C,K);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(v,C,K),je.resetDefaultState(),x=-1,y=null,M.pop(),M.length>0?(m=M[M.length-1],O===!0&&fe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function on(C,K,re,ie){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||N.intersectsSprite(C)){ie&&Me.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ne);const le=se.update(C),Ie=C.material;Ie.visible&&p.push(C,le,Ie,re,Me.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||N.intersectsObject(C))){const le=se.update(C),Ie=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Me.copy(C.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Me.copy(le.boundingSphere.center)),Me.applyMatrix4(C.matrixWorld).applyMatrix4(ne)),Array.isArray(Ie)){const ke=le.groups;for(let He=0,Xe=ke.length;He<Xe;He++){const Be=ke[He],Ze=Ie[Be.materialIndex];Ze&&Ze.visible&&p.push(C,le,Ze,re,Me.z,Be)}}else Ie.visible&&p.push(C,le,Ie,re,Me.z,null)}}const be=C.children;for(let le=0,Ie=be.length;le<Ie;le++)on(be[le],K,re,ie)}function Pn(C,K,re,ie){const j=C.opaque,be=C.transmissive,le=C.transparent;m.setupLightsView(re),O===!0&&fe.setGlobalState(v.clippingPlanes,re),ie&&ae.viewport(D.copy(ie)),j.length>0&&qt(j,K,re),be.length>0&&qt(be,K,re),le.length>0&&qt(le,K,re),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function zn(C,K,re,ie){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ie.id]===void 0&&(m.state.transmissionRenderTarget[ie.id]=new sr(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?li:fi,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const be=m.state.transmissionRenderTarget[ie.id],le=ie.viewport||D;be.setSize(le.z,le.w);const Ie=v.getRenderTarget();v.setRenderTarget(be),v.getClearColor(L),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),oe&&Ee.render(re);const ke=v.toneMapping;v.toneMapping=Pi;const He=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),m.setupLightsView(ie),O===!0&&fe.setGlobalState(v.clippingPlanes,ie),qt(C,re,ie),R.updateMultisampleRenderTarget(be),R.updateRenderTargetMipmap(be),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Be=0,Ze=K.length;Be<Ze;Be++){const nt=K[Be],it=nt.object,Ct=nt.geometry,$e=nt.material,ze=nt.group;if($e.side===Nn&&it.layers.test(ie.layers)){const ln=$e.side;$e.side=en,$e.needsUpdate=!0,bt(it,re,ie,Ct,$e,ze),$e.side=ln,$e.needsUpdate=!0,Xe=!0}}Xe===!0&&(R.updateMultisampleRenderTarget(be),R.updateRenderTargetMipmap(be))}v.setRenderTarget(Ie),v.setClearColor(L,B),He!==void 0&&(ie.viewport=He),v.toneMapping=ke}function qt(C,K,re){const ie=K.isScene===!0?K.overrideMaterial:null;for(let j=0,be=C.length;j<be;j++){const le=C[j],Ie=le.object,ke=le.geometry,He=ie===null?le.material:ie,Xe=le.group;Ie.layers.test(re.layers)&&bt(Ie,K,re,ke,He,Xe)}}function bt(C,K,re,ie,j,be){C.onBeforeRender(v,K,re,ie,j,be),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(v,K,re,ie,C,be),j.transparent===!0&&j.side===Nn&&j.forceSinglePass===!1?(j.side=en,j.needsUpdate=!0,v.renderBufferDirect(re,K,ie,j,C,be),j.side=Li,j.needsUpdate=!0,v.renderBufferDirect(re,K,ie,j,C,be),j.side=Nn):v.renderBufferDirect(re,K,ie,j,C,be),C.onAfterRender(v,K,re,ie,j,be)}function Mn(C,K,re){K.isScene!==!0&&(K=xe);const ie=me.get(C),j=m.state.lights,be=m.state.shadowsArray,le=j.state.version,Ie=de.getParameters(C,j.state,be,K,re),ke=de.getProgramCacheKey(Ie);let He=ie.programs;ie.environment=C.isMeshStandardMaterial?K.environment:null,ie.fog=K.fog,ie.envMap=(C.isMeshStandardMaterial?k:A).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,He===void 0&&(C.addEventListener("dispose",Fe),He=new Map,ie.programs=He);let Xe=He.get(ke);if(Xe!==void 0){if(ie.currentProgram===Xe&&ie.lightsStateVersion===le)return dr(C,Ie),Xe}else Ie.uniforms=de.getUniforms(C),C.onBeforeCompile(Ie,v),Xe=de.acquireProgram(Ie,ke),He.set(ke,Xe),ie.uniforms=Ie.uniforms;const Be=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=fe.uniform),dr(C,Ie),ie.needsLights=pr(C),ie.lightsStateVersion=le,ie.needsLights&&(Be.ambientLightColor.value=j.state.ambient,Be.lightProbe.value=j.state.probe,Be.directionalLights.value=j.state.directional,Be.directionalLightShadows.value=j.state.directionalShadow,Be.spotLights.value=j.state.spot,Be.spotLightShadows.value=j.state.spotShadow,Be.rectAreaLights.value=j.state.rectArea,Be.ltc_1.value=j.state.rectAreaLTC1,Be.ltc_2.value=j.state.rectAreaLTC2,Be.pointLights.value=j.state.point,Be.pointLightShadows.value=j.state.pointShadow,Be.hemisphereLights.value=j.state.hemi,Be.directionalShadowMap.value=j.state.directionalShadowMap,Be.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Be.spotShadowMap.value=j.state.spotShadowMap,Be.spotLightMatrix.value=j.state.spotLightMatrix,Be.spotLightMap.value=j.state.spotLightMap,Be.pointShadowMap.value=j.state.pointShadowMap,Be.pointShadowMatrix.value=j.state.pointShadowMatrix),ie.currentProgram=Xe,ie.uniformsList=null,Xe}function rs(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=Ra.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function dr(C,K){const re=me.get(C);re.outputColorSpace=K.outputColorSpace,re.batching=K.batching,re.batchingColor=K.batchingColor,re.instancing=K.instancing,re.instancingColor=K.instancingColor,re.instancingMorph=K.instancingMorph,re.skinning=K.skinning,re.morphTargets=K.morphTargets,re.morphNormals=K.morphNormals,re.morphColors=K.morphColors,re.morphTargetsCount=K.morphTargetsCount,re.numClippingPlanes=K.numClippingPlanes,re.numIntersection=K.numClipIntersection,re.vertexAlphas=K.vertexAlphas,re.vertexTangents=K.vertexTangents,re.toneMapping=K.toneMapping}function Qa(C,K,re,ie,j){K.isScene!==!0&&(K=xe),R.resetTextureUnits();const be=K.fog,le=ie.isMeshStandardMaterial?K.environment:null,Ie=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:cr,ke=(ie.isMeshStandardMaterial?k:A).get(ie.envMap||le),He=ie.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Xe=!!re.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Be=!!re.morphAttributes.position,Ze=!!re.morphAttributes.normal,nt=!!re.morphAttributes.color;let it=Pi;ie.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(it=v.toneMapping);const Ct=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,$e=Ct!==void 0?Ct.length:0,ze=me.get(ie),ln=m.state.lights;if(O===!0&&(Q===!0||C!==y)){const Kt=C===y&&ie.id===x;fe.setState(ie,C,Kt)}let et=!1;ie.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ln.state.version||ze.outputColorSpace!==Ie||j.isBatchedMesh&&ze.batching===!1||!j.isBatchedMesh&&ze.batching===!0||j.isBatchedMesh&&ze.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ze.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ze.instancing===!1||!j.isInstancedMesh&&ze.instancing===!0||j.isSkinnedMesh&&ze.skinning===!1||!j.isSkinnedMesh&&ze.skinning===!0||j.isInstancedMesh&&ze.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ze.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ze.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ze.instancingMorph===!1&&j.morphTexture!==null||ze.envMap!==ke||ie.fog===!0&&ze.fog!==be||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==fe.numPlanes||ze.numIntersection!==fe.numIntersection)||ze.vertexAlphas!==He||ze.vertexTangents!==Xe||ze.morphTargets!==Be||ze.morphNormals!==Ze||ze.morphColors!==nt||ze.toneMapping!==it||ze.morphTargetsCount!==$e)&&(et=!0):(et=!0,ze.__version=ie.version);let Pt=ze.currentProgram;et===!0&&(Pt=Mn(ie,K,j));let Gn=!1,vt=!1,Zn=!1;const rt=Pt.getUniforms(),jt=ze.uniforms;if(ae.useProgram(Pt.program)&&(Gn=!0,vt=!0,Zn=!0),ie.id!==x&&(x=ie.id,vt=!0),Gn||y!==C){ae.buffers.depth.getReversed()?(Y.copy(C.projectionMatrix),gp(Y),vp(Y),rt.setValue(z,"projectionMatrix",Y)):rt.setValue(z,"projectionMatrix",C.projectionMatrix),rt.setValue(z,"viewMatrix",C.matrixWorldInverse);const cn=rt.map.cameraPosition;cn!==void 0&&cn.setValue(z,ge.setFromMatrixPosition(C.matrixWorld)),Re.logarithmicDepthBuffer&&rt.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&rt.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,vt=!0,Zn=!0)}if(j.isSkinnedMesh){rt.setOptional(z,j,"bindMatrix"),rt.setOptional(z,j,"bindMatrixInverse");const Kt=j.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),rt.setValue(z,"boneTexture",Kt.boneTexture,R))}j.isBatchedMesh&&(rt.setOptional(z,j,"batchingTexture"),rt.setValue(z,"batchingTexture",j._matricesTexture,R),rt.setOptional(z,j,"batchingIdTexture"),rt.setValue(z,"batchingIdTexture",j._indirectTexture,R),rt.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&rt.setValue(z,"batchingColorTexture",j._colorsTexture,R));const Nt=re.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0)&&Te.update(j,re,Pt),(vt||ze.receiveShadow!==j.receiveShadow)&&(ze.receiveShadow=j.receiveShadow,rt.setValue(z,"receiveShadow",j.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(jt.envMap.value=ke,jt.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&K.environment!==null&&(jt.envMapIntensity.value=K.environmentIntensity),vt&&(rt.setValue(z,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&Hs(jt,Zn),be&&ie.fog===!0&&ue.refreshFogUniforms(jt,be),ue.refreshMaterialUniforms(jt,ie,H,X,m.state.transmissionRenderTarget[C.id]),Ra.upload(z,rs(ze),jt,R)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ra.upload(z,rs(ze),jt,R),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&rt.setValue(z,"center",j.center),rt.setValue(z,"modelViewMatrix",j.modelViewMatrix),rt.setValue(z,"normalMatrix",j.normalMatrix),rt.setValue(z,"modelMatrix",j.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Kt=ie.uniformsGroups;for(let cn=0,Zt=Kt.length;cn<Zt;cn++){const ss=Kt[cn];G.update(ss,Pt),G.bind(ss,Pt)}}return Pt}function Hs(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function pr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,K,re){me.get(C.texture).__webglTexture=K,me.get(C.depthTexture).__webglTexture=re;const ie=me.get(C);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=re===void 0,ie.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,K){const re=me.get(C);re.__webglFramebuffer=K,re.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,re=0){T=C,w=K,E=re;let ie=!0,j=null,be=!1,le=!1;if(C){const ke=me.get(C);if(ke.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(z.FRAMEBUFFER,null),ie=!1;else if(ke.__webglFramebuffer===void 0)R.setupRenderTarget(C);else if(ke.__hasExternalTextures)R.rebindTextures(C,me.get(C.texture).__webglTexture,me.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Be=C.depthTexture;if(ke.__boundDepthTexture!==Be){if(Be!==null&&me.has(Be)&&(C.width!==Be.image.width||C.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(C)}}const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(le=!0);const Xe=me.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xe[K])?j=Xe[K][re]:j=Xe[K],be=!0):C.samples>0&&R.useMultisampledRTT(C)===!1?j=me.get(C).__webglMultisampledFramebuffer:Array.isArray(Xe)?j=Xe[re]:j=Xe,D.copy(C.viewport),P.copy(C.scissor),U=C.scissorTest}else D.copy(F).multiplyScalar(H).floor(),P.copy(V).multiplyScalar(H).floor(),U=Z;if(ae.bindFramebuffer(z.FRAMEBUFFER,j)&&ie&&ae.drawBuffers(C,j),ae.viewport(D),ae.scissor(P),ae.setScissorTest(U),be){const ke=me.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke.__webglTexture,re)}else if(le){const ke=me.get(C.texture),He=K||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.__webglTexture,re||0,He)}x=-1},this.readRenderTargetPixels=function(C,K,re,ie,j,be,le){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=me.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&le!==void 0&&(Ie=Ie[le]),Ie){ae.bindFramebuffer(z.FRAMEBUFFER,Ie);try{const ke=C.texture,He=ke.format,Xe=ke.type;if(!Re.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-ie&&re>=0&&re<=C.height-j&&z.readPixels(K,re,ie,j,Le.convert(He),Le.convert(Xe),be)}finally{const ke=T!==null?me.get(T).__webglFramebuffer:null;ae.bindFramebuffer(z.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(C,K,re,ie,j,be,le){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=me.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&le!==void 0&&(Ie=Ie[le]),Ie){const ke=C.texture,He=ke.format,Xe=ke.type;if(!Re.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=C.width-ie&&re>=0&&re<=C.height-j){ae.bindFramebuffer(z.FRAMEBUFFER,Ie);const Be=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Be),z.bufferData(z.PIXEL_PACK_BUFFER,be.byteLength,z.STREAM_READ),z.readPixels(K,re,ie,j,Le.convert(He),Le.convert(Xe),0);const Ze=T!==null?me.get(T).__webglFramebuffer:null;ae.bindFramebuffer(z.FRAMEBUFFER,Ze);const nt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await _p(z,nt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Be),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,be),z.deleteBuffer(Be),z.deleteSync(nt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,K=null,re=0){C.isTexture!==!0&&(Ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,C=arguments[1]);const ie=Math.pow(2,-re),j=Math.floor(C.image.width*ie),be=Math.floor(C.image.height*ie),le=K!==null?K.x:0,Ie=K!==null?K.y:0;R.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,re,0,0,le,Ie,j,be),ae.unbindTexture()},this.copyTextureToTexture=function(C,K,re=null,ie=null,j=0){C.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,C=arguments[1],K=arguments[2],j=arguments[3]||0,re=null);let be,le,Ie,ke,He,Xe,Be,Ze,nt;const it=C.isCompressedTexture?C.mipmaps[j]:C.image;re!==null?(be=re.max.x-re.min.x,le=re.max.y-re.min.y,Ie=re.isBox3?re.max.z-re.min.z:1,ke=re.min.x,He=re.min.y,Xe=re.isBox3?re.min.z:0):(be=it.width,le=it.height,Ie=it.depth||1,ke=0,He=0,Xe=0),ie!==null?(Be=ie.x,Ze=ie.y,nt=ie.z):(Be=0,Ze=0,nt=0);const Ct=Le.convert(K.format),$e=Le.convert(K.type);let ze;K.isData3DTexture?(R.setTexture3D(K,0),ze=z.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(R.setTexture2DArray(K,0),ze=z.TEXTURE_2D_ARRAY):(R.setTexture2D(K,0),ze=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,K.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,K.unpackAlignment);const ln=z.getParameter(z.UNPACK_ROW_LENGTH),et=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Pt=z.getParameter(z.UNPACK_SKIP_PIXELS),Gn=z.getParameter(z.UNPACK_SKIP_ROWS),vt=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,it.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,it.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ke),z.pixelStorei(z.UNPACK_SKIP_ROWS,He),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xe);const Zn=C.isDataArrayTexture||C.isData3DTexture,rt=K.isDataArrayTexture||K.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const jt=me.get(C),Nt=me.get(K),Kt=me.get(jt.__renderTarget),cn=me.get(Nt.__renderTarget);ae.bindFramebuffer(z.READ_FRAMEBUFFER,Kt.__webglFramebuffer),ae.bindFramebuffer(z.DRAW_FRAMEBUFFER,cn.__webglFramebuffer);for(let Zt=0;Zt<Ie;Zt++)Zn&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,me.get(C).__webglTexture,j,Xe+Zt),C.isDepthTexture?(rt&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,me.get(K).__webglTexture,j,nt+Zt),z.blitFramebuffer(ke,He,be,le,Be,Ze,be,le,z.DEPTH_BUFFER_BIT,z.NEAREST)):rt?z.copyTexSubImage3D(ze,j,Be,Ze,nt+Zt,ke,He,be,le):z.copyTexSubImage2D(ze,j,Be,Ze,nt+Zt,ke,He,be,le);ae.bindFramebuffer(z.READ_FRAMEBUFFER,null),ae.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else rt?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(ze,j,Be,Ze,nt,be,le,Ie,Ct,$e,it.data):K.isCompressedArrayTexture?z.compressedTexSubImage3D(ze,j,Be,Ze,nt,be,le,Ie,Ct,it.data):z.texSubImage3D(ze,j,Be,Ze,nt,be,le,Ie,Ct,$e,it):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,j,Be,Ze,be,le,Ct,$e,it.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,j,Be,Ze,it.width,it.height,Ct,it.data):z.texSubImage2D(z.TEXTURE_2D,j,Be,Ze,be,le,Ct,$e,it);z.pixelStorei(z.UNPACK_ROW_LENGTH,ln),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,et),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Pt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Gn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,vt),j===0&&K.generateMipmaps&&z.generateMipmap(ze),ae.unbindTexture()},this.copyTextureToTexture3D=function(C,K,re=null,ie=null,j=0){return C.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,ie=arguments[1]||null,C=arguments[2],K=arguments[3],j=arguments[4]||0),Ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,K,re,ie,j)},this.initRenderTarget=function(C){me.get(C).__webglFramebuffer===void 0&&R.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),ae.unbindTexture()},this.resetState=function(){w=0,E=0,T=null,ae.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class Pv extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Dv extends It{constructor(e=null,t=1,i=1,n,r,a,o,l,c=gn,u=gn,f,h){super(null,a,o,l,c,u,n,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uv extends kn{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class _c extends mi{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const r=[],a=[];o(n),c(i),u(),this.setAttribute("position",new Yn(r,3)),this.setAttribute("normal",new Yn(r.slice(),3)),this.setAttribute("uv",new Yn(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const M=new te,v=new te,b=new te;for(let w=0;w<t.length;w+=3)d(t[w+0],M),d(t[w+1],v),d(t[w+2],b),l(M,v,b,S)}function l(S,M,v,b){const w=b+1,E=[];for(let T=0;T<=w;T++){E[T]=[];const x=S.clone().lerp(v,T/w),y=M.clone().lerp(v,T/w),D=w-T;for(let P=0;P<=D;P++)P===0&&T===w?E[T][P]=x:E[T][P]=x.clone().lerp(y,P/D)}for(let T=0;T<w;T++)for(let x=0;x<2*(w-T)-1;x++){const y=Math.floor(x/2);x%2===0?(h(E[T][y+1]),h(E[T+1][y]),h(E[T][y])):(h(E[T][y+1]),h(E[T+1][y+1]),h(E[T+1][y]))}}function c(S){const M=new te;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(S),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function u(){const S=new te;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const v=p(S)/2/Math.PI+.5,b=m(S)/Math.PI+.5;a.push(v,1-b)}g(),f()}function f(){for(let S=0;S<a.length;S+=6){const M=a[S+0],v=a[S+2],b=a[S+4],w=Math.max(M,v,b),E=Math.min(M,v,b);w>.9&&E<.1&&(M<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),b<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function d(S,M){const v=S*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function g(){const S=new te,M=new te,v=new te,b=new te,w=new Je,E=new Je,T=new Je;for(let x=0,y=0;x<r.length;x+=9,y+=6){S.set(r[x+0],r[x+1],r[x+2]),M.set(r[x+3],r[x+4],r[x+5]),v.set(r[x+6],r[x+7],r[x+8]),w.set(a[y+0],a[y+1]),E.set(a[y+2],a[y+3]),T.set(a[y+4],a[y+5]),b.copy(S).add(M).add(v).divideScalar(3);const D=p(b);_(w,y+0,S,D),_(E,y+2,M,D),_(T,y+4,v,D)}}function _(S,M,v,b){b<0&&S.x===1&&(a[M]=S.x-1),v.x===0&&v.z===0&&(a[M]=b/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.vertices,e.indices,e.radius,e.details)}}class gc extends _c{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gc(e.radius,e.detail)}}class Lv extends ts{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wf,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Iv extends Lv{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Na={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class hh{constructor(e,t,i){const n=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Fv=new hh;class Gs{constructor(e){this.manager=e!==void 0?e:Fv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class Nv extends Error{constructor(e,t){super(e),this.response=t}}class Ov extends Gs{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Na.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:i,onError:n});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ni[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let _=0;const p=new ReadableStream({start(m){S();function S(){f.read().then(({done:M,value:v})=>{if(M)m.close();else{_+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,E=u.length;w<E;w++){const T=u[w];T.onProgress&&T.onProgress(b)}m.enqueue(v),S()}},M=>{m.error(M)})}}});return new Response(p)}else throw new Nv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Na.add(e,c);const u=ni[e];delete ni[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete ni[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Bv extends Gs{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Na.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ps("img");function l(){u(),Na.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),n&&n(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class kv extends Gs{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new Dv,o=new Ov(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(n!==void 0)n(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:oi,a.wrapT=c.wrapT!==void 0?c.wrapT:oi,a.magFilter=c.magFilter!==void 0?c.magFilter:Lt,a.minFilter=c.minFilter!==void 0?c.minFilter:Lt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=bi),c.mipmapCount===1&&(a.minFilter=Lt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,n),a}}class zv extends Gs{constructor(e){super(e)}load(e,t,i,n){const r=new It,a=new Bv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class Gv extends mi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Vv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ku(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ku();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ku(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);class Hv extends kv{constructor(e){super(e),this.type=li}parse(e){const a=function(T,x){switch(T){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},u=`
`,f=function(T,x,y){x=x||1024;let P=T.pos,U=-1,L=0,B="",I=String.fromCharCode.apply(null,new Uint16Array(T.subarray(P,P+128)));for(;0>(U=I.indexOf(u))&&L<x&&P<T.byteLength;)B+=I,L+=I.length,P+=128,I+=String.fromCharCode.apply(null,new Uint16Array(T.subarray(P,P+128)));return-1<U?(T.pos+=L+U+1,B+I.slice(0,U)):!1},h=function(T){const x=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,L={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let B,I;for((T.pos>=T.byteLength||!(B=f(T)))&&a(1,"no header found"),(I=B.match(x))||a(3,"bad initial token"),L.valid|=1,L.programtype=I[1],L.string+=B+`
`;B=f(T),B!==!1;){if(L.string+=B+`
`,B.charAt(0)==="#"){L.comments+=B+`
`;continue}if((I=B.match(y))&&(L.gamma=parseFloat(I[1])),(I=B.match(D))&&(L.exposure=parseFloat(I[1])),(I=B.match(P))&&(L.valid|=2,L.format=I[1]),(I=B.match(U))&&(L.valid|=4,L.height=parseInt(I[1],10),L.width=parseInt(I[2],10)),L.valid&2&&L.valid&4)break}return L.valid&2||a(3,"missing format specifier"),L.valid&4||a(3,"missing image size specifier"),L},d=function(T,x,y){const D=x;if(D<8||D>32767||T[0]!==2||T[1]!==2||T[2]&128)return new Uint8Array(T);D!==(T[2]<<8|T[3])&&a(3,"wrong scanline width");const P=new Uint8Array(4*x*y);P.length||a(4,"unable to allocate buffer space");let U=0,L=0;const B=4*D,I=new Uint8Array(4),X=new Uint8Array(B);let H=y;for(;H>0&&L<T.byteLength;){L+4>T.byteLength&&a(1),I[0]=T[L++],I[1]=T[L++],I[2]=T[L++],I[3]=T[L++],(I[0]!=2||I[1]!=2||(I[2]<<8|I[3])!=D)&&a(3,"bad rgbe scanline format");let q=0,W;for(;q<B&&L<T.byteLength;){W=T[L++];const V=W>128;if(V&&(W-=128),(W===0||q+W>B)&&a(3,"bad scanline data"),V){const Z=T[L++];for(let N=0;N<W;N++)X[q++]=Z}else X.set(T.subarray(L,L+W),q),q+=W,L+=W}const F=D;for(let V=0;V<F;V++){let Z=0;P[U]=X[V+Z],Z+=D,P[U+1]=X[V+Z],Z+=D,P[U+2]=X[V+Z],Z+=D,P[U+3]=X[V+Z],U+=4}H--}return P},g=function(T,x,y,D){const P=T[x+3],U=Math.pow(2,P-128)/255;y[D+0]=T[x+0]*U,y[D+1]=T[x+1]*U,y[D+2]=T[x+2]*U,y[D+3]=1},_=function(T,x,y,D){const P=T[x+3],U=Math.pow(2,P-128)/255;y[D+0]=sa.toHalfFloat(Math.min(T[x+0]*U,65504)),y[D+1]=sa.toHalfFloat(Math.min(T[x+1]*U,65504)),y[D+2]=sa.toHalfFloat(Math.min(T[x+2]*U,65504)),y[D+3]=sa.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const m=h(p),S=m.width,M=m.height,v=d(p.subarray(p.pos),S,M);let b,w,E;switch(this.type){case An:E=v.length/4;const T=new Float32Array(E*4);for(let y=0;y<E;y++)g(v,y*4,T,y*4);b=T,w=An;break;case li:E=v.length/4;const x=new Uint16Array(E*4);for(let y=0;y<E;y++)_(v,y*4,x,y*4);b=x,w=li;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:S,height:M,data:b,header:m.string,gamma:m.gamma,exposure:m.exposure,type:w}}setDataType(e){return this.type=e,this}load(e,t,i,n){function r(a,o){switch(a.type){case An:case li:a.colorSpace=cr,a.minFilter=Lt,a.magFilter=Lt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,i,n)}}const Wv=`
    
#ifdef IS_VERTEX
    vec3 csm_Position;
    vec4 csm_PositionRaw;
    vec3 csm_Normal;

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize;
    #endif
#else
    vec4 csm_DiffuseColor;
    vec4 csm_FragColor;
    float csm_UnlitFac;

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive;
        float csm_Roughness;
        float csm_Metalness;
        float csm_Iridescence;
        
        #if defined IS_MESHPHYSICALMATERIAL
            float csm_Clearcoat;
            float csm_ClearcoatRoughness;
            vec3 csm_ClearcoatNormal;
            float csm_Transmission;
            float csm_Thickness;
        #endif
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump;
        vec3 csm_FragNormal;
    #endif

    float csm_DepthAlpha;
#endif
`,Xv=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        csm_Position = vec3(0.0);
        csm_PositionRaw = vec4(0.0);
        csm_Normal = vec3(0.0);
    #else
        csm_Position = position;
        csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        csm_PointSize = size;
    #endif
#else
    csm_UnlitFac = 0.0;

    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHDISTANCEMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            csm_DiffuseColor = vec4(diffuse, opacity);
            csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        csm_Emissive = emissive;
        csm_Roughness = roughness;
        csm_Metalness = metalness;

        #ifdef USE_IRIDESCENCE
            csm_Iridescence = iridescence;
        #else
            csm_Iridescence = 0.0;
        #endif

        #if defined IS_MESHPHYSICALMATERIAL
            #ifdef USE_CLEARCOAT
                csm_Clearcoat = clearcoat;
                csm_ClearcoatRoughness = clearcoatRoughness;
            #else
                csm_Clearcoat = 0.0;
                csm_ClearcoatRoughness = 0.0;
            #endif

            #ifdef USE_TRANSMISSION
                csm_Transmission = transmission;
                csm_Thickness = thickness;
            #else
                csm_Transmission = 0.0;
                csm_Thickness = 0.0;
            #endif
        #endif
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        csm_Bump = vec3(0.0);
        #ifdef FLAT_SHADED
            vec3 fdx = dFdx( vViewPosition );
            vec3 fdy = dFdy( vViewPosition );
            csm_FragNormal = normalize( cross( fdx, fdy ) );
        #else
            csm_FragNormal = normalize(vNormal);
            #ifdef DOUBLE_SIDED
                csm_FragNormal *= gl_FrontFacing ? 1.0 : - 1.0;
            #endif
        #endif
    #endif

    csm_DepthAlpha = 1.0;
#endif
`,Yv=`
    varying mat4 csm_internal_vModelViewMatrix;
`,qv=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,jv=`
    varying mat4 csm_internal_vModelViewMatrix;
`,Kv=`
    
`,Ue={diffuse:"csm_DiffuseColor",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",fragNormal:"csm_FragNormal",clearcoat:"csm_Clearcoat",clearcoatRoughness:"csm_ClearcoatRoughness",clearcoatNormal:"csm_ClearcoatNormal",transmission:"csm_Transmission",thickness:"csm_Thickness",iridescence:"csm_Iridescence",pointSize:"csm_PointSize",fragColor:"csm_FragColor",depthAlpha:"csm_DepthAlpha",unlitFac:"csm_UnlitFac",position:"csm_Position",positionRaw:"csm_PositionRaw",normal:"csm_Normal"},Zv={[`${Ue.position}`]:"*",[`${Ue.positionRaw}`]:"*",[`${Ue.normal}`]:"*",[`${Ue.depthAlpha}`]:"*",[`${Ue.pointSize}`]:["PointsMaterial"],[`${Ue.diffuse}`]:"*",[`${Ue.fragColor}`]:"*",[`${Ue.fragNormal}`]:"*",[`${Ue.unlitFac}`]:"*",[`${Ue.emissive}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${Ue.roughness}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${Ue.metalness}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${Ue.iridescence}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${Ue.ao}`]:["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"],[`${Ue.bump}`]:["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"],[`${Ue.clearcoat}`]:["MeshPhysicalMaterial"],[`${Ue.clearcoatRoughness}`]:["MeshPhysicalMaterial"],[`${Ue.clearcoatNormal}`]:["MeshPhysicalMaterial"],[`${Ue.transmission}`]:["MeshPhysicalMaterial"],[`${Ue.thickness}`]:["MeshPhysicalMaterial"]},Jv={"*":{"#include <lights_physical_fragment>":Ye.lights_physical_fragment,"#include <transmission_fragment>":Ye.transmission_fragment},[`${Ue.normal}`]:{"#include <beginnormal_vertex>":`
    vec3 objectNormal = ${Ue.normal};
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `},[`${Ue.position}`]:{"#include <begin_vertex>":`
    vec3 transformed = ${Ue.position};
  `},[`${Ue.positionRaw}`]:{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = ${Ue.positionRaw};
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `},[`${Ue.pointSize}`]:{"gl_PointSize = size;":`
    gl_PointSize = ${Ue.pointSize};
    `},[`${Ue.diffuse}`]:{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = ${Ue.diffuse};
  `},[`${Ue.fragColor}`]:{"#include <opaque_fragment>":`
    #include <opaque_fragment>
    gl_FragColor = mix(gl_FragColor, ${Ue.fragColor}, ${Ue.unlitFac});
  `},[`${Ue.emissive}`]:{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = ${Ue.emissive};
    `},[`${Ue.roughness}`]:{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = ${Ue.roughness};
    `},[`${Ue.metalness}`]:{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = ${Ue.metalness};
    `},[`${Ue.ao}`]:{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - ${Ue.ao};
    `},[`${Ue.bump}`]:{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = ${Ue.bump} - (dot(${Ue.bump}, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `},[`${Ue.fragNormal}`]:{"#include <normal_fragment_maps>":`
      #include <normal_fragment_maps>
      normal = ${Ue.fragNormal};
    `},[`${Ue.depthAlpha}`]:{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * 1.0 - ${Ue.depthAlpha} );
    `,"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      if(${Ue.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `,"gl_FragColor = packDepthToRGBA( dist );":`
      if(${Ue.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `},[`${Ue.clearcoat}`]:{"material.clearcoat = clearcoat;":`material.clearcoat = ${Ue.clearcoat};`},[`${Ue.clearcoatRoughness}`]:{"material.clearcoatRoughness = clearcoatRoughness;":`material.clearcoatRoughness = ${Ue.clearcoatRoughness};`},[`${Ue.clearcoatNormal}`]:{"#include <clearcoat_normal_fragment_begin>":`
      vec3 csm_coat_internal_orthogonal = csm_ClearcoatNormal - (dot(csm_ClearcoatNormal, nonPerturbedNormal) * nonPerturbedNormal);
      vec3 csm_coat_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_coat_internal_orthogonal;
      vec3 clearcoatNormal = normalize(nonPerturbedNormal - csm_coat_internal_projectedbump);
    `},[`${Ue.transmission}`]:{"material.transmission = transmission;":`
      material.transmission = ${Ue.transmission};
    `},[`${Ue.thickness}`]:{"material.thickness = thickness;":`
      material.thickness = ${Ue.thickness};
    `},[`${Ue.iridescence}`]:{"material.iridescence = iridescence;":`
      material.iridescence = ${Ue.iridescence};
    `}},$v={clearcoat:[Ue.clearcoat,Ue.clearcoatNormal,Ue.clearcoatRoughness],transmission:[Ue.transmission],iridescence:[Ue.iridescence]};function Qv(s){let e=0;for(let i=0;i<s.length;i++)e=s.charCodeAt(i)+(e<<6)+(e<<16)-e;const t=e>>>0;return String(t)}function ex(s){try{new s}catch(e){if(e.message.indexOf("is not a constructor")>=0)return!1}return!0}function Zu(s){return s.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,"")}class tx extends ts{constructor({baseMaterial:e,vertexShader:t,fragmentShader:i,uniforms:n,patchMap:r,cacheKey:a,...o}){if(!e)throw new Error("CustomShaderMaterial: baseMaterial is required.");let l;if(ex(e)){const h=Object.keys(o).length===0;l=new e(h?void 0:o)}else l=e,Object.assign(l,o);if(["ShaderMaterial","RawShaderMaterial"].includes(l.type))throw new Error(`CustomShaderMaterial does not support ${l.type} as a base material.`);super(),this.uniforms={},this.vertexShader="",this.fragmentShader="";const c=l;c.name=`CustomShaderMaterial<${l.name||l.type}>`,c.update=this.update.bind(c),c.__csm={prevOnBeforeCompile:l.onBeforeCompile,baseMaterial:l,vertexShader:t,fragmentShader:i,uniforms:n,patchMap:r,cacheKey:a};const u={...c.uniforms||{},...n||{}};c.uniforms=this.uniforms=u,c.vertexShader=this.vertexShader=t||"",c.fragmentShader=this.fragmentShader=i||"",c.update({fragmentShader:c.fragmentShader,vertexShader:c.vertexShader,uniforms:c.uniforms,patchMap:r,cacheKey:a}),Object.assign(this,c);const f=Object.getOwnPropertyDescriptors(Object.getPrototypeOf(c));for(const h in f){const d=f[h];(d.get||d.set)&&Object.defineProperty(this,h,d)}return Object.defineProperty(this,"type",{get(){return l.type},set(h){l.type=h}}),this}update({fragmentShader:e,vertexShader:t,uniforms:i,cacheKey:n,patchMap:r}){const a=Zu(t||""),o=Zu(e||""),l=this;i&&(l.uniforms=i),t&&(l.vertexShader=t),e&&(l.fragmentShader=e),Object.entries($v).forEach(([h,d])=>{for(const g in d){const _=d[g];(o&&o.includes(_)||a&&a.includes(_))&&(l[h]||(l[h]=1))}});const c=l.__csm.prevOnBeforeCompile,u=(h,d,g)=>{let _,p="";if(d){const m=d.search(/void\s+main\s*\(\s*\)\s*{/);if(m!==-1){p=d.slice(0,m);let S=0,M=-1;for(let v=m;v<d.length;v++)if(d[v]==="{"&&S++,d[v]==="}"&&(S--,S===0)){M=v;break}if(M!==-1){const v=d.slice(m,M+1);_=v.slice(v.indexOf("{")+1,-1)}}else p=d}if(g&&d&&d.includes(Ue.fragColor)&&_&&(_=`csm_UnlitFac = 1.0;
`+_),h.includes("//~CSM_DEFAULTS")){h=h.replace("void main() {",`
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          ${p}
          
          void main() {
          `);const m=h.lastIndexOf("//~CSM_MAIN_END");if(m!==-1){const S=`
            ${_?`${_}`:""}
            //~CSM_MAIN_END
          `;h=h.slice(0,m)+S+h.slice(m)}}else{const m=/void\s*main\s*\(\s*\)\s*{/gm;h=h.replace(m,`
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          //~CSM_DEFAULTS
          ${g?jv:Yv}
          ${Wv}
  
          ${p}
          
          void main() {
            {
              ${Xv}
            }
            ${g?Kv:qv}

            ${_?`${_}`:""}
            //~CSM_MAIN_END
          `)}return h};l.onBeforeCompile=(h,d)=>{c==null||c(h,d);const g=r||{},_=l.type,p=_?`#define IS_${_.toUpperCase()};
`:`#define IS_UNKNOWN;
`;h.vertexShader=p+`#define IS_VERTEX
`+h.vertexShader,h.fragmentShader=p+`#define IS_FRAGMENT
`+h.fragmentShader;const m=S=>{for(const M in S){const v=M==="*"||a&&a.includes(M);if(M==="*"||o&&o.includes(M)||v){const b=Zv[M];if(b&&b!=="*"&&(Array.isArray(b)?!b.includes(_):b!==_)){console.error(`CustomShaderMaterial: ${M} is not available in ${_}. Shader cannot compile.`);return}const w=S[M];for(const E in w){const T=w[E];if(typeof T=="object"){const x=T.type,y=T.value;x==="fs"?h.fragmentShader=h.fragmentShader.replace(E,y):x==="vs"&&(h.vertexShader=h.vertexShader.replace(E,y))}else T&&(h.vertexShader=h.vertexShader.replace(E,T),h.fragmentShader=h.fragmentShader.replace(E,T))}}}};m(Jv),m(g),h.vertexShader=u(h.vertexShader,a,!1),h.fragmentShader=u(h.fragmentShader,o,!0),i&&(h.uniforms={...h.uniforms,...l.uniforms}),l.uniforms=h.uniforms};const f=l.customProgramCacheKey;l.customProgramCacheKey=()=>((n==null?void 0:n())||Qv((a||"")+(o||"")))+(f==null?void 0:f.call(l)),l.needsUpdate=!0}clone(){const e=this;return new e.constructor({baseMaterial:e.__csm.baseMaterial.clone(),vertexShader:e.__csm.vertexShader,fragmentShader:e.__csm.fragmentShader,uniforms:e.__csm.uniforms,patchMap:e.__csm.patchMap,cacheKey:e.__csm.cacheKey})}}function nx(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=s.getIndex(),n=s.getAttribute("position"),r=i?i.count:n.count;let a=0;const o=Object.keys(s.attributes),l={},c={},u=[],f=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let S=0,M=o.length;S<M;S++){const v=o[S],b=s.attributes[v];l[v]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);const w=s.morphAttributes[v];w&&(c[v]||(c[v]=[]),w.forEach((E,T)=>{const x=new E.array.constructor(E.count*E.itemSize);c[v][T]=new E.constructor(x,E.itemSize,E.normalized)}))}const d=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),p=d*_;for(let S=0;S<r;S++){const M=i?i.getX(S):S;let v="";for(let b=0,w=o.length;b<w;b++){const E=o[b],T=s.getAttribute(E),x=T.itemSize;for(let y=0;y<x;y++)v+=`${~~(T[f[y]](M)*_+p)},`}if(v in t)u.push(t[v]);else{for(let b=0,w=o.length;b<w;b++){const E=o[b],T=s.getAttribute(E),x=s.morphAttributes[E],y=T.itemSize,D=l[E],P=c[E];for(let U=0;U<y;U++){const L=f[U],B=h[U];if(D[B](a,T[L](M)),x)for(let I=0,X=x.length;I<X;I++)P[I][B](a,x[I][L](M))}}t[v]=a,u.push(a),a++}}const m=s.clone();for(const S in s.attributes){const M=l[S];if(m.setAttribute(S,new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)),S in c)for(let v=0;v<c[S].length;v++){const b=c[S][v];m.morphAttributes[S][v]=new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)}}return m.setIndex(u),m}var ix=`vec4 permute(vec4 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}
float permute(float x) {
  return floor(mod(((x * 34.0) + 1.0) * x, 289.0));
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
float taylorInvSqrt(float r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip) {
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p, s;
  p.xyz = floor(fract(vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz * 2.0 - 1.0) * s.www;
  return p;
}

float simplexNoise4d(vec4 v) {
  const vec2 C = vec2(0.138196601125010504, 0.309016994374947451);
  vec4 i = floor(v + dot(v, C.yyyy));
  vec4 x0 = v - i + dot(i, C.xxxx);

  vec4 i0;

  vec3 isX = step(x0.yzw, x0.xxx);
  vec3 isYZ = step(x0.zww, x0.yyz);
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;

  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  vec4 i3 = clamp(i0, 0.0, 1.0);
  vec4 i2 = clamp(i0 - 1.0, 0.0, 1.0);
  vec4 i1 = clamp(i0 - 2.0, 0.0, 1.0);

  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  i = mod(i, 289.0);
  float j0 = permute(permute(permute(permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute(permute(permute(permute(i.w + vec4(i1.w, i2.w, i3.w, 1.0)) + i.z + vec4(i1.z, i2.z, i3.z, 1.0)) + i.y + vec4(i1.y, i2.y, i3.y, 1.0)) + i.x + vec4(i1.x, i2.x, i3.x, 1.0));

  vec4 ip = vec4(1.0 / 294.0, 1.0 / 49.0, 1.0 / 7.0, 0.0);

  vec4 p0 = grad4(j0, ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4, p4));

  vec3 m0 = max(0.6 - vec3(dot(x0, x0), dot(x1, x1), dot(x2, x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3, x3), dot(x4, x4)), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * (dot(m0 * m0, vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2))) + dot(m1 * m1, vec2(dot(p3, x3), dot(p4, x4))));
}\r
attribute vec3 tangent;

uniform float uTime;\r
uniform float uPositionFrequency;\r
uniform float uPositionStrength;\r
uniform float uTimeFrequency;

uniform float uSmallWavePositionFrequency;\r
uniform float uSmallWavePositionStrength;\r
uniform float uSmallWaveTimeFrequency;\r

float getBlob(vec3 position) {\r
    vec3 wrappedPosition = position;\r
    wrappedPosition += simplexNoise4d(vec4(position * uPositionFrequency, uTime * uTimeFrequency)) * uPositionStrength;

    return simplexNoise4d(vec4(wrappedPosition * uSmallWavePositionFrequency, uTime * uSmallWaveTimeFrequency)) * uSmallWavePositionStrength;\r
}

void main() {

    vec3 bitangent = cross(tangent.xyz, normal);

    float shift = 0.07;\r
    vec3 A = csm_Position + shift * tangent.xyz;\r
    vec3 B = csm_Position + shift * bitangent;

    float blob = getBlob(csm_Position);\r
    csm_Position += blob * normal;

    A += getBlob(A) * normal;\r
    B += getBlob(B) * normal;

    vec3 shadowA = normalize(A - csm_Position);\r
    vec3 shadowB = normalize(B - csm_Position);

    csm_Normal = -cross(shadowA, shadowB);\r
}`;function rx(){var s=Object.create(null);function e(n,r){var a=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!s[a])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(d){if(d instanceof Error)throw d}),h=s[h.id].value),h}),c=i("<"+o+">.init",c),u&&(u=i("<"+o+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:f,getTransferables:u},r(f)}catch(h){h&&h.noLog||console.error(h),r(h)}}function t(n,r){var a,o=n.id,l=n.args;(!s[o]||typeof s[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=s[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(u,function(f){return r(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){r(f)}function u(f){try{var h=s[o].getTransferables&&s[o].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),r(f,h)}catch(d){console.error(d),r(d)}}}function i(n,r){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var r=n.data,a=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function sx(s){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,i=s.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var dh=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return dh=function(){return s},s},ax=0,ox=0,Go=!1,Ts=Object.create(null),bs=Object.create(null),zl=Object.create(null);function is(s){if((!s||typeof s.init!="function")&&!Go)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,i=s.getTransferables,n=s.workerId,r=sx(s);n==null&&(n="#default");var a="workerModule"+ ++ax,o=s.name||a,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(Go=!0,u=is({workerId:n,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+Ca(u)+`
)}`}),Go=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],f=arguments.length;f--;)u[f]=arguments[f];if(!dh())return r.apply(void 0,u);if(!l){l=Ju(n,"registerModule",c.workerModuleData);var h=function(){l=null,bs[n].delete(h)};(bs[n]||(bs[n]=new Set)).add(h)}return l.then(function(d){var g=d.isCallable;if(g)return Ju(n,"callModule",{id:a,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:a,name:o,dependencies:e,init:Ca(t),getTransferables:i&&Ca(i)},c.onMainThread=r,c}function lx(s){bs[s]&&bs[s].forEach(function(e){e()}),Ts[s]&&(Ts[s].terminate(),delete Ts[s])}function Ca(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function cx(s){var e=Ts[s];if(!e){var t=Ca(rx);e=Ts[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,a=zl[r];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete zl[r],a(n)}}return e}function Ju(s,e,t){return new Promise(function(i,n){var r=++ox;zl[r]=function(a){a.success?i(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},cx(s).postMessage({messageId:r,action:e,data:t})})}function ph(){var s=function(e){function t(q,W,F,V,Z,N,O,Q){var Y=1-O;Q.x=Y*Y*q+2*Y*O*F+O*O*Z,Q.y=Y*Y*W+2*Y*O*V+O*O*N}function i(q,W,F,V,Z,N,O,Q,Y,ne){var ge=1-Y;ne.x=ge*ge*ge*q+3*ge*ge*Y*F+3*ge*Y*Y*Z+Y*Y*Y*O,ne.y=ge*ge*ge*W+3*ge*ge*Y*V+3*ge*Y*Y*N+Y*Y*Y*Q}function n(q,W){for(var F=/([MLQCZ])([^MLQCZ]*)/g,V,Z,N,O,Q;V=F.exec(q);){var Y=V[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ne){return parseFloat(ne)});switch(V[1]){case"M":O=Z=Y[0],Q=N=Y[1];break;case"L":(Y[0]!==O||Y[1]!==Q)&&W("L",O,Q,O=Y[0],Q=Y[1]);break;case"Q":{W("Q",O,Q,O=Y[2],Q=Y[3],Y[0],Y[1]);break}case"C":{W("C",O,Q,O=Y[4],Q=Y[5],Y[0],Y[1],Y[2],Y[3]);break}case"Z":(O!==Z||Q!==N)&&W("L",O,Q,Z,N);break}}}function r(q,W,F){F===void 0&&(F=16);var V={x:0,y:0};n(q,function(Z,N,O,Q,Y,ne,ge,Me,xe){switch(Z){case"L":W(N,O,Q,Y);break;case"Q":{for(var oe=N,Ne=O,z=1;z<F;z++)t(N,O,ne,ge,Q,Y,z/(F-1),V),W(oe,Ne,V.x,V.y),oe=V.x,Ne=V.y;break}case"C":{for(var Oe=N,Ae=O,Re=1;Re<F;Re++)i(N,O,ne,ge,Me,xe,Q,Y,Re/(F-1),V),W(Oe,Ae,V.x,V.y),Oe=V.x,Ae=V.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(q,W){var F=q.getContext?q.getContext("webgl",c):q,V=l.get(F);if(!V){let Oe=function(R){var A=N[R];if(!A&&(A=N[R]=F.getExtension(R),!A))throw new Error(R+" not supported");return A},Ae=function(R,A){var k=F.createShader(A);return F.shaderSource(k,R),F.compileShader(k),k},Re=function(R,A,k,J){if(!O[R]){var $={},se={},de=F.createProgram();F.attachShader(de,Ae(A,F.VERTEX_SHADER)),F.attachShader(de,Ae(k,F.FRAGMENT_SHADER)),F.linkProgram(de),O[R]={program:de,transaction:function(_e){F.useProgram(de),_e({setUniform:function(fe,ye){for(var Ee=[],Te=arguments.length-2;Te-- >0;)Ee[Te]=arguments[Te+2];var ce=se[ye]||(se[ye]=F.getUniformLocation(de,ye));F["uniform"+fe].apply(F,[ce].concat(Ee))},setAttribute:function(fe,ye,Ee,Te,ce){var De=$[fe];De||(De=$[fe]={buf:F.createBuffer(),loc:F.getAttribLocation(de,fe),data:null}),F.bindBuffer(F.ARRAY_BUFFER,De.buf),F.vertexAttribPointer(De.loc,ye,F.FLOAT,!1,0,0),F.enableVertexAttribArray(De.loc),Z?F.vertexAttribDivisor(De.loc,Te):Oe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(De.loc,Te),ce!==De.data&&(F.bufferData(F.ARRAY_BUFFER,ce,Ee),De.data=ce)}})}}}O[R].transaction(J)},ae=function(R,A){Y++;try{F.activeTexture(F.TEXTURE0+Y);var k=Q[R];k||(k=Q[R]=F.createTexture(),F.bindTexture(F.TEXTURE_2D,k),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,F.NEAREST)),F.bindTexture(F.TEXTURE_2D,k),A(k,Y)}finally{Y--}},we=function(R,A,k){var J=F.createFramebuffer();ne.push(J),F.bindFramebuffer(F.FRAMEBUFFER,J),F.activeTexture(F.TEXTURE0+A),F.bindTexture(F.TEXTURE_2D,R),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,R,0);try{k(J)}finally{F.deleteFramebuffer(J),F.bindFramebuffer(F.FRAMEBUFFER,ne[--ne.length-1]||null)}},me=function(){N={},O={},Q={},Y=-1,ne.length=0};var ge=Oe,Me=Ae,xe=Re,oe=ae,Ne=we,z=me,Z=typeof WebGL2RenderingContext<"u"&&F instanceof WebGL2RenderingContext,N={},O={},Q={},Y=-1,ne=[];F.canvas.addEventListener("webglcontextlost",function(R){me(),R.preventDefault()},!1),l.set(F,V={gl:F,isWebGL2:Z,getExtension:Oe,withProgram:Re,withTexture:ae,withTextureFramebuffer:we,handleContextLoss:me})}W(V)}function f(q,W,F,V,Z,N,O,Q){O===void 0&&(O=15),Q===void 0&&(Q=null),u(q,function(Y){var ne=Y.gl,ge=Y.withProgram,Me=Y.withTexture;Me("copy",function(xe,oe){ne.texImage2D(ne.TEXTURE_2D,0,ne.RGBA,Z,N,0,ne.RGBA,ne.UNSIGNED_BYTE,W),ge("copy",a,o,function(Ne){var z=Ne.setUniform,Oe=Ne.setAttribute;Oe("aUV",2,ne.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),z("1i","image",oe),ne.bindFramebuffer(ne.FRAMEBUFFER,Q||null),ne.disable(ne.BLEND),ne.colorMask(O&8,O&4,O&2,O&1),ne.viewport(F,V,Z,N),ne.scissor(F,V,Z,N),ne.drawArrays(ne.TRIANGLES,0,3)})})})}function h(q,W,F){var V=q.width,Z=q.height;u(q,function(N){var O=N.gl,Q=new Uint8Array(V*Z*4);O.readPixels(0,0,V,Z,O.RGBA,O.UNSIGNED_BYTE,Q),q.width=W,q.height=F,f(O,Q,0,0,V,Z)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function g(q,W,F,V,Z,N){N===void 0&&(N=1);var O=new Uint8Array(q*W),Q=V[2]-V[0],Y=V[3]-V[1],ne=[];r(F,function(Oe,Ae,Re,ae){ne.push({x1:Oe,y1:Ae,x2:Re,y2:ae,minX:Math.min(Oe,Re),minY:Math.min(Ae,ae),maxX:Math.max(Oe,Re),maxY:Math.max(Ae,ae)})}),ne.sort(function(Oe,Ae){return Oe.maxX-Ae.maxX});for(var ge=0;ge<q;ge++)for(var Me=0;Me<W;Me++){var xe=Ne(V[0]+Q*(ge+.5)/q,V[1]+Y*(Me+.5)/W),oe=Math.pow(1-Math.abs(xe)/Z,N)/2;xe<0&&(oe=1-oe),oe=Math.max(0,Math.min(255,Math.round(oe*255))),O[Me*q+ge]=oe}return O;function Ne(Oe,Ae){for(var Re=1/0,ae=1/0,we=ne.length;we--;){var me=ne[we];if(me.maxX+ae<=Oe)break;if(Oe+ae>me.minX&&Ae-ae<me.maxY&&Ae+ae>me.minY){var R=m(Oe,Ae,me.x1,me.y1,me.x2,me.y2);R<Re&&(Re=R,ae=Math.sqrt(Re))}}return z(Oe,Ae)&&(ae=-ae),ae}function z(Oe,Ae){for(var Re=0,ae=ne.length;ae--;){var we=ne[ae];if(we.maxX<=Oe)break;var me=we.y1>Ae!=we.y2>Ae&&Oe<(we.x2-we.x1)*(Ae-we.y1)/(we.y2-we.y1)+we.x1;me&&(Re+=we.y1<we.y2?1:-1)}return Re!==0}}function _(q,W,F,V,Z,N,O,Q,Y,ne){N===void 0&&(N=1),Q===void 0&&(Q=0),Y===void 0&&(Y=0),ne===void 0&&(ne=0),p(q,W,F,V,Z,N,O,null,Q,Y,ne)}function p(q,W,F,V,Z,N,O,Q,Y,ne,ge){N===void 0&&(N=1),Y===void 0&&(Y=0),ne===void 0&&(ne=0),ge===void 0&&(ge=0);for(var Me=g(q,W,F,V,Z,N),xe=new Uint8Array(Me.length*4),oe=0;oe<Me.length;oe++)xe[oe*4+ge]=Me[oe];f(O,xe,Y,ne,q,W,1<<3-ge,Q)}function m(q,W,F,V,Z,N){var O=Z-F,Q=N-V,Y=O*O+Q*Q,ne=Y?Math.max(0,Math.min(1,((q-F)*O+(W-V)*Q)/Y)):0,ge=q-(F+ne*O),Me=W-(V+ne*Q);return ge*ge+Me*Me}var S=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:p}),M="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",v="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",b="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),E=null,T=!1,x={},y=new WeakMap;function D(q){if(!T&&!B(q))throw new Error("WebGL generation not supported")}function P(q,W,F,V,Z,N,O){if(N===void 0&&(N=1),O===void 0&&(O=null),!O&&(O=E,!O)){var Q=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!Q)throw new Error("OffscreenCanvas or DOM canvas not supported");O=E=Q.getContext("webgl",{depth:!1})}D(O);var Y=new Uint8Array(q*W*4);u(O,function(xe){var oe=xe.gl,Ne=xe.withTexture,z=xe.withTextureFramebuffer;Ne("readable",function(Oe,Ae){oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,q,W,0,oe.RGBA,oe.UNSIGNED_BYTE,null),z(Oe,Ae,function(Re){L(q,W,F,V,Z,N,oe,Re,0,0,0),oe.readPixels(0,0,q,W,oe.RGBA,oe.UNSIGNED_BYTE,Y)})})});for(var ne=new Uint8Array(q*W),ge=0,Me=0;ge<Y.length;ge+=4)ne[Me++]=Y[ge];return ne}function U(q,W,F,V,Z,N,O,Q,Y,ne){N===void 0&&(N=1),Q===void 0&&(Q=0),Y===void 0&&(Y=0),ne===void 0&&(ne=0),L(q,W,F,V,Z,N,O,null,Q,Y,ne)}function L(q,W,F,V,Z,N,O,Q,Y,ne,ge){N===void 0&&(N=1),Y===void 0&&(Y=0),ne===void 0&&(ne=0),ge===void 0&&(ge=0),D(O);var Me=[];r(F,function(xe,oe,Ne,z){Me.push(xe,oe,Ne,z)}),Me=new Float32Array(Me),u(O,function(xe){var oe=xe.gl,Ne=xe.isWebGL2,z=xe.getExtension,Oe=xe.withProgram,Ae=xe.withTexture,Re=xe.withTextureFramebuffer,ae=xe.handleContextLoss;if(Ae("rawDistances",function(we,me){(q!==we._lastWidth||W!==we._lastHeight)&&oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,we._lastWidth=q,we._lastHeight=W,0,oe.RGBA,oe.UNSIGNED_BYTE,null),Oe("main",M,v,function(R){var A=R.setAttribute,k=R.setUniform,J=!Ne&&z("ANGLE_instanced_arrays"),$=!Ne&&z("EXT_blend_minmax");A("aUV",2,oe.STATIC_DRAW,0,w),A("aLineSegment",4,oe.DYNAMIC_DRAW,1,Me),k.apply(void 0,["4f","uGlyphBounds"].concat(V)),k("1f","uMaxDistance",Z),k("1f","uExponent",N),Re(we,me,function(se){oe.enable(oe.BLEND),oe.colorMask(!0,!0,!0,!0),oe.viewport(0,0,q,W),oe.scissor(0,0,q,W),oe.blendFunc(oe.ONE,oe.ONE),oe.blendEquationSeparate(oe.FUNC_ADD,Ne?oe.MAX:$.MAX_EXT),oe.clear(oe.COLOR_BUFFER_BIT),Ne?oe.drawArraysInstanced(oe.TRIANGLES,0,3,Me.length/4):J.drawArraysInstancedANGLE(oe.TRIANGLES,0,3,Me.length/4)})}),Oe("post",a,b,function(R){R.setAttribute("aUV",2,oe.STATIC_DRAW,0,w),R.setUniform("1i","tex",me),oe.bindFramebuffer(oe.FRAMEBUFFER,Q),oe.disable(oe.BLEND),oe.colorMask(ge===0,ge===1,ge===2,ge===3),oe.viewport(Y,ne,q,W),oe.scissor(Y,ne,q,W),oe.drawArrays(oe.TRIANGLES,0,3)})}),oe.isContextLost())throw ae(),new Error("webgl context lost")})}function B(q){var W=!q||q===E?x:q.canvas||q,F=y.get(W);if(F===void 0){T=!0;var V=null;try{var Z=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],N=P(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,q);F=N&&Z.length===N.length&&N.every(function(O,Q){return O===Z[Q]}),F||(V="bad trial run results",console.info(Z,N))}catch(O){F=!1,V=O.message}V&&console.warn("WebGL SDF generation not supported:",V),T=!1,y.set(W,F)}return F}var I=Object.freeze({__proto__:null,generate:P,generateIntoCanvas:U,generateIntoFramebuffer:L,isSupported:B});function X(q,W,F,V,Z,N){Z===void 0&&(Z=Math.max(V[2]-V[0],V[3]-V[1])/2),N===void 0&&(N=1);try{return P.apply(I,arguments)}catch(O){return console.info("WebGL SDF generation failed, falling back to JS",O),g.apply(S,arguments)}}function H(q,W,F,V,Z,N,O,Q,Y,ne){Z===void 0&&(Z=Math.max(V[2]-V[0],V[3]-V[1])/2),N===void 0&&(N=1),Q===void 0&&(Q=0),Y===void 0&&(Y=0),ne===void 0&&(ne=0);try{return U.apply(I,arguments)}catch(ge){return console.info("WebGL SDF generation failed, falling back to JS",ge),_.apply(S,arguments)}}return e.forEachPathCommand=n,e.generate=X,e.generateIntoCanvas=H,e.javascript=S,e.pathToLineSegments=r,e.webgl=I,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function ux(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(ae,we){i[ae]=1<<we+1,n[i[ae]]=ae}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,a=i.L|i.R|i.AL,o=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,u=null;function f(){if(!u){u=new Map;var ae=function(me){if(t.hasOwnProperty(me)){var R=0;t[me].split(",").forEach(function(A){var k=A.split("+"),J=k[0],$=k[1];J=parseInt(J,36),$=$?parseInt($,36):0,u.set(R+=J,i[me]);for(var se=0;se<$;se++)u.set(++R,i[me])})}};for(var we in t)ae(we)}}function h(ae){return f(),u.get(ae.codePointAt(0))||i.L}function d(ae){return n[h(ae)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(ae,we){var me=36,R=0,A=new Map,k=we&&new Map,J;return ae.split(",").forEach(function $(se){if(se.indexOf("+")!==-1)for(var de=+se;de--;)$(J);else{J=se;var ue=se.split(">"),_e=ue[0],Pe=ue[1];_e=String.fromCodePoint(R+=parseInt(_e,me)),Pe=String.fromCodePoint(R+=parseInt(Pe,me)),A.set(_e,Pe),we&&k.set(Pe,_e)}}),{map:A,reverseMap:k}}var p,m,S;function M(){if(!p){var ae=_(g.pairs,!0),we=ae.map,me=ae.reverseMap;p=we,m=me,S=_(g.canonical,!1).map}}function v(ae){return M(),p.get(ae)||null}function b(ae){return M(),m.get(ae)||null}function w(ae){return M(),S.get(ae)||null}var E=i.L,T=i.R,x=i.EN,y=i.ES,D=i.ET,P=i.AN,U=i.CS,L=i.B,B=i.S,I=i.ON,X=i.BN,H=i.NSM,q=i.AL,W=i.LRO,F=i.RLO,V=i.LRE,Z=i.RLE,N=i.PDF,O=i.LRI,Q=i.RLI,Y=i.FSI,ne=i.PDI;function ge(ae,we){for(var me=125,R=new Uint32Array(ae.length),A=0;A<ae.length;A++)R[A]=h(ae[A]);var k=new Map;function J(Jt,Un){var $t=R[Jt];R[Jt]=Un,k.set($t,k.get($t)-1),$t&o&&k.set(o,k.get(o)-1),k.set(Un,(k.get(Un)||0)+1),Un&o&&k.set(o,(k.get(o)||0)+1)}for(var $=new Uint8Array(ae.length),se=new Map,de=[],ue=null,_e=0;_e<ae.length;_e++)ue||de.push(ue={start:_e,end:ae.length-1,level:we==="rtl"?1:we==="ltr"?0:Kc(_e,!1)}),R[_e]&L&&(ue.end=_e,ue=null);for(var Pe=Z|V|F|W|r|ne|N|L,fe=function(Jt){return Jt+(Jt&1?1:2)},ye=function(Jt){return Jt+(Jt&1?2:1)},Ee=0;Ee<de.length;Ee++){ue=de[Ee];var Te=[{_level:ue.level,_override:0,_isolate:0}],ce=void 0,De=0,Le=0,je=0;k.clear();for(var G=ue.start;G<=ue.end;G++){var he=R[G];if(ce=Te[Te.length-1],k.set(he,(k.get(he)||0)+1),he&o&&k.set(o,(k.get(o)||0)+1),he&Pe)if(he&(Z|V)){$[G]=ce._level;var ee=(he===Z?ye:fe)(ce._level);ee<=me&&!De&&!Le?Te.push({_level:ee,_override:0,_isolate:0}):De||Le++}else if(he&(F|W)){$[G]=ce._level;var pe=(he===F?ye:fe)(ce._level);pe<=me&&!De&&!Le?Te.push({_level:pe,_override:he&F?T:E,_isolate:0}):De||Le++}else if(he&r){he&Y&&(he=Kc(G+1,!0)===1?Q:O),$[G]=ce._level,ce._override&&J(G,ce._override);var Se=(he===Q?ye:fe)(ce._level);Se<=me&&De===0&&Le===0?(je++,Te.push({_level:Se,_override:0,_isolate:1,_isolInitIndex:G})):De++}else if(he&ne){if(De>0)De--;else if(je>0){for(Le=0;!Te[Te.length-1]._isolate;)Te.pop();var ve=Te[Te.length-1]._isolInitIndex;ve!=null&&(se.set(ve,G),se.set(G,ve)),Te.pop(),je--}ce=Te[Te.length-1],$[G]=ce._level,ce._override&&J(G,ce._override)}else he&N?(De===0&&(Le>0?Le--:!ce._isolate&&Te.length>1&&(Te.pop(),ce=Te[Te.length-1])),$[G]=ce._level):he&L&&($[G]=ue.level);else $[G]=ce._level,ce._override&&he!==X&&J(G,ce._override)}for(var Fe=[],We=null,Ge=ue.start;Ge<=ue.end;Ge++){var Ve=R[Ge];if(!(Ve&l)){var at=$[Ge],lt=Ve&r,pt=Ve===ne;We&&at===We._level?(We._end=Ge,We._endsWithIsolInit=lt):Fe.push(We={_start:Ge,_end:Ge,_level:at,_startsWithPDI:pt,_endsWithIsolInit:lt})}}for(var Yt=[],Ft=0;Ft<Fe.length;Ft++){var on=Fe[Ft];if(!on._startsWithPDI||on._startsWithPDI&&!se.has(on._start)){for(var Pn=[We=on],zn=void 0;We&&We._endsWithIsolInit&&(zn=se.get(We._end))!=null;)for(var qt=Ft+1;qt<Fe.length;qt++)if(Fe[qt]._start===zn){Pn.push(We=Fe[qt]);break}for(var bt=[],Mn=0;Mn<Pn.length;Mn++)for(var rs=Pn[Mn],dr=rs._start;dr<=rs._end;dr++)bt.push(dr);for(var Qa=$[bt[0]],Hs=ue.level,pr=bt[0]-1;pr>=0;pr--)if(!(R[pr]&l)){Hs=$[pr];break}var C=bt[bt.length-1],K=$[C],re=ue.level;if(!(R[C]&r)){for(var ie=C+1;ie<=ue.end;ie++)if(!(R[ie]&l)){re=$[ie];break}}Yt.push({_seqIndices:bt,_sosType:Math.max(Hs,Qa)%2?T:E,_eosType:Math.max(re,K)%2?T:E})}}for(var j=0;j<Yt.length;j++){var be=Yt[j],le=be._seqIndices,Ie=be._sosType,ke=be._eosType,He=$[le[0]]&1?T:E;if(k.get(H))for(var Xe=0;Xe<le.length;Xe++){var Be=le[Xe];if(R[Be]&H){for(var Ze=Ie,nt=Xe-1;nt>=0;nt--)if(!(R[le[nt]]&l)){Ze=R[le[nt]];break}J(Be,Ze&(r|ne)?I:Ze)}}if(k.get(x))for(var it=0;it<le.length;it++){var Ct=le[it];if(R[Ct]&x)for(var $e=it-1;$e>=-1;$e--){var ze=$e===-1?Ie:R[le[$e]];if(ze&a){ze===q&&J(Ct,P);break}}}if(k.get(q))for(var ln=0;ln<le.length;ln++){var et=le[ln];R[et]&q&&J(et,T)}if(k.get(y)||k.get(U))for(var Pt=1;Pt<le.length-1;Pt++){var Gn=le[Pt];if(R[Gn]&(y|U)){for(var vt=0,Zn=0,rt=Pt-1;rt>=0&&(vt=R[le[rt]],!!(vt&l));rt--);for(var jt=Pt+1;jt<le.length&&(Zn=R[le[jt]],!!(Zn&l));jt++);vt===Zn&&(R[Gn]===y?vt===x:vt&(x|P))&&J(Gn,vt)}}if(k.get(x))for(var Nt=0;Nt<le.length;Nt++){var Kt=le[Nt];if(R[Kt]&x){for(var cn=Nt-1;cn>=0&&R[le[cn]]&(D|l);cn--)J(le[cn],x);for(Nt++;Nt<le.length&&R[le[Nt]]&(D|l|x);Nt++)R[le[Nt]]!==x&&J(le[Nt],x)}}if(k.get(D)||k.get(y)||k.get(U))for(var Zt=0;Zt<le.length;Zt++){var ss=le[Zt];if(R[ss]&(D|y|U)){J(ss,I);for(var Ws=Zt-1;Ws>=0&&R[le[Ws]]&l;Ws--)J(le[Ws],I);for(var Xs=Zt+1;Xs<le.length&&R[le[Xs]]&l;Xs++)J(le[Xs],I)}}if(k.get(x))for(var eo=0,Oc=Ie;eo<le.length;eo++){var Bc=le[eo],to=R[Bc];to&x?Oc===E&&J(Bc,E):to&a&&(Oc=to)}if(k.get(o)){var as=T|x|P,kc=as|E,Ys=[];{for(var mr=[],_r=0;_r<le.length;_r++)if(R[le[_r]]&o){var os=ae[le[_r]],zc=void 0;if(v(os)!==null)if(mr.length<63)mr.push({char:os,seqIndex:_r});else break;else if((zc=b(os))!==null)for(var ls=mr.length-1;ls>=0;ls--){var no=mr[ls].char;if(no===zc||no===b(w(os))||v(w(no))===os){Ys.push([mr[ls].seqIndex,_r]),mr.length=ls;break}}}Ys.sort(function(Jt,Un){return Jt[0]-Un[0]})}for(var io=0;io<Ys.length;io++){for(var Gc=Ys[io],qs=Gc[0],ro=Gc[1],Vc=!1,Dn=0,so=qs+1;so<ro;so++){var Hc=le[so];if(R[Hc]&kc){Vc=!0;var Wc=R[Hc]&as?T:E;if(Wc===He){Dn=Wc;break}}}if(Vc&&!Dn){Dn=Ie;for(var ao=qs-1;ao>=0;ao--){var Xc=le[ao];if(R[Xc]&kc){var Yc=R[Xc]&as?T:E;Yc!==He?Dn=Yc:Dn=He;break}}}if(Dn){if(R[le[qs]]=R[le[ro]]=Dn,Dn!==He){for(var cs=qs+1;cs<le.length;cs++)if(!(R[le[cs]]&l)){h(ae[le[cs]])&H&&(R[le[cs]]=Dn);break}}if(Dn!==He){for(var us=ro+1;us<le.length;us++)if(!(R[le[us]]&l)){h(ae[le[us]])&H&&(R[le[us]]=Dn);break}}}}for(var _i=0;_i<le.length;_i++)if(R[le[_i]]&o){for(var qc=_i,oo=_i,lo=Ie,fs=_i-1;fs>=0;fs--)if(R[le[fs]]&l)qc=fs;else{lo=R[le[fs]]&as?T:E;break}for(var jc=ke,hs=_i+1;hs<le.length;hs++)if(R[le[hs]]&(o|l))oo=hs;else{jc=R[le[hs]]&as?T:E;break}for(var co=qc;co<=oo;co++)R[le[co]]=lo===jc?lo:He;_i=oo}}}for(var un=ue.start;un<=ue.end;un++){var wd=$[un],js=R[un];if(wd&1?js&(E|x|P)&&$[un]++:js&T?$[un]++:js&(P|x)&&($[un]+=2),js&l&&($[un]=un===0?ue.level:$[un-1]),un===ue.end||h(ae[un])&(B|L))for(var Ks=un;Ks>=0&&h(ae[Ks])&c;Ks--)$[Ks]=ue.level}}return{levels:$,paragraphs:de};function Kc(Jt,Un){for(var $t=Jt;$t<ae.length;$t++){var gi=R[$t];if(gi&(T|q))return 1;if(gi&(L|E)||Un&&gi===ne)return 0;if(gi&r){var Zc=Rd($t);$t=Zc===-1?ae.length:Zc}}return 0}function Rd(Jt){for(var Un=1,$t=Jt+1;$t<ae.length;$t++){var gi=R[$t];if(gi&L)break;if(gi&ne){if(--Un===0)return $t}else gi&r&&Un++}return-1}}var Me="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",xe;function oe(){if(!xe){var ae=_(Me,!0),we=ae.map,me=ae.reverseMap;me.forEach(function(R,A){we.set(A,R)}),xe=we}}function Ne(ae){return oe(),xe.get(ae)||null}function z(ae,we,me,R){var A=ae.length;me=Math.max(0,me==null?0:+me),R=Math.min(A-1,R==null?A-1:+R);for(var k=new Map,J=me;J<=R;J++)if(we[J]&1){var $=Ne(ae[J]);$!==null&&k.set(J,$)}return k}function Oe(ae,we,me,R){var A=ae.length;me=Math.max(0,me==null?0:+me),R=Math.min(A-1,R==null?A-1:+R);var k=[];return we.paragraphs.forEach(function(J){var $=Math.max(me,J.start),se=Math.min(R,J.end);if($<se){for(var de=we.levels.slice($,se+1),ue=se;ue>=$&&h(ae[ue])&c;ue--)de[ue]=J.level;for(var _e=J.level,Pe=1/0,fe=0;fe<de.length;fe++){var ye=de[fe];ye>_e&&(_e=ye),ye<Pe&&(Pe=ye|1)}for(var Ee=_e;Ee>=Pe;Ee--)for(var Te=0;Te<de.length;Te++)if(de[Te]>=Ee){for(var ce=Te;Te+1<de.length&&de[Te+1]>=Ee;)Te++;Te>ce&&k.push([ce+$,Te+$])}}}),k}function Ae(ae,we,me,R){var A=Re(ae,we,me,R),k=[].concat(ae);return A.forEach(function(J,$){k[$]=(we.levels[J]&1?Ne(ae[J]):null)||ae[J]}),k.join("")}function Re(ae,we,me,R){for(var A=Oe(ae,we,me,R),k=[],J=0;J<ae.length;J++)k[J]=J;return A.forEach(function($){for(var se=$[0],de=$[1],ue=k.slice(se,de+1),_e=ue.length;_e--;)k[de-_e]=ue[_e]}),k}return e.closingToOpeningBracket=b,e.getBidiCharType=h,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=ge,e.getMirroredCharacter=Ne,e.getMirroredCharactersMap=z,e.getReorderSegments=Oe,e.getReorderedIndices=Re,e.getReorderedString=Ae,e.openingToClosingBracket=v,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const mh=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Gl(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=Ye[n];return r?Gl(r):i}return s.replace(e,t)}const Dt=[];for(let s=0;s<256;s++)Dt[s]=(s<16?"0":"")+s.toString(16);function fx(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[s&255]+Dt[s>>8&255]+Dt[s>>16&255]+Dt[s>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toUpperCase()}const Wi=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s[n]=i[n])}return s},hx=Date.now(),$u=new WeakMap,Qu=new Map;let dx=1e10;function Vl(s,e){const t=gx(e);let i=$u.get(s);if(i||$u.set(s,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,u){s.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=Qu[f];if(!h){const d=px(this,c,e,t);h=Qu[f]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,Wi(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-hx}}),this[n]&&this[n](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:dx++}),u.uuid=fx(),u.uniforms=Wi({},c.uniforms,e.uniforms),u.defines=Wi({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Wi({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(Wi(this.extensions,c.extensions),Wi(this.defines,c.defines),Wi(this.uniforms,eh.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Vl(s.isDerivedMaterial?s.getDepthMaterial():new uh({depthPacking:Hf}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Vl(s.isDerivedMaterial?s.getDistanceMaterial():new fh,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return i[t]=a,new a}function px(s,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:d,timeUniform:g}=i;if(r=r||"",a=a||"",o=o||"",c=c||"",u=u||"",f=f||"",(l||d)&&(e=Gl(e)),(h||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Gl(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(h){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(_.push(p),"")),f=`${h}
${_.join(`
`)}
${f}`}if(g){const _=`
uniform float ${g};
`;r=_+r,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,r=`${r}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,p,m,S)=>/\battribute\s+vec[23]\s+$/.test(S.substr(0,m))?p:`troika_${p}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=ef(e,n,r,a,o),t=ef(t,n,c,u,f),{vertexShader:e,fragmentShader:t}}function ef(s,e,t,i,n){return(i||n||t)&&(s=s.replace(mh,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),s}function mx(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let _x=0;const tf=new Map;function gx(s){const e=JSON.stringify(s,mx);let t=tf.get(e);return t==null&&tf.set(e,t=++_x),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function vx(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(n){var r=e._bin,a=new Uint8Array(n);if(r.readASCII(a,0,4)=="ttcf"){var o=4;r.readUshort(a,o),o+=2,r.readUshort(a,o),o+=2;var l=r.readUint(a,o);o+=4;for(var c=[],u=0;u<l;u++){var f=r.readUint(a,o);o+=4,c.push(e._readFont(a,f))}return c}return[e._readFont(a,0)]},_readFont:function(n,r){var a=e._bin,o=r;a.readFixed(n,r),r+=4;var l=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},f={},h=0;h<l;h++){var d=a.readASCII(n,r,4);r+=4,a.readUint(n,r),r+=4;var g=a.readUint(n,r);r+=4;var _=a.readUint(n,r);r+=4,f[d]={offset:g,length:_}}for(h=0;h<c.length;h++){var p=c[h];f[p]&&(u[p.trim()]=e[p.trim()].parse(n,f[p].offset,f[p].length,u))}return u},_tabOffset:function(n,r,a){for(var o=e._bin,l=o.readUshort(n,a+4),c=a+12,u=0;u<l;u++){var f=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var h=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,f==r)return h}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(n,r+2*l));return o},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(n[r+l]);return o},readUnicode:function(n,r,a){for(var o="",l=0;l<a;l++){var c=n[r++]<<8|n[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,a){var o=e._bin._tdec;return o&&r==0&&a==n.length?o.decode(n):e._bin.readASCII(n,r,a)},readBytes:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(n[r+l]);return o},readASCIIArray:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(n[r+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,a,o,l){var c=e._bin,u={},f=r;c.readFixed(n,r),r+=4;var h=c.readUshort(n,r);r+=2;var d=c.readUshort(n,r);r+=2;var g=c.readUshort(n,r);return r+=2,u.scriptList=e._lctf.readScriptList(n,f+h),u.featureList=e._lctf.readFeatureList(n,f+d),u.lookupList=e._lctf.readLookupList(n,f+g,l),u},e._lctf.readLookupList=function(n,r,a){var o=e._bin,l=r,c=[],u=o.readUshort(n,r);r+=2;for(var f=0;f<u;f++){var h=o.readUshort(n,r);r+=2;var d=e._lctf.readLookupTable(n,l+h,a);c.push(d)}return c},e._lctf.readLookupTable=function(n,r,a){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(n,r),r+=2,c.flag=o.readUshort(n,r),r+=2;var u=o.readUshort(n,r);r+=2;for(var f=c.ltype,h=0;h<u;h++){var d=o.readUshort(n,r);r+=2;var g=a(n,f,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var r=0,a=0;a<32;a++)n>>>a&1&&r++;return r},e._lctf.readClassDef=function(n,r){var a=e._bin,o=[],l=a.readUshort(n,r);if(r+=2,l==1){var c=a.readUshort(n,r);r+=2;var u=a.readUshort(n,r);r+=2;for(var f=0;f<u;f++)o.push(c+f),o.push(c+f),o.push(a.readUshort(n,r)),r+=2}if(l==2){var h=a.readUshort(n,r);for(r+=2,f=0;f<h;f++)o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2}return o},e._lctf.getInterval=function(n,r){for(var a=0;a<n.length;a+=3){var o=n[a],l=n[a+1];if(n[a+2],o<=r&&r<=l)return a}return-1},e._lctf.readCoverage=function(n,r){var a=e._bin,o={};o.fmt=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);return r+=2,o.fmt==1&&(o.tab=a.readUshorts(n,r,l)),o.fmt==2&&(o.tab=a.readUshorts(n,r,3*l)),o},e._lctf.coverageIndex=function(n,r){var a=n.tab;if(n.fmt==1)return a.indexOf(r);if(n.fmt==2){var o=e._lctf.getInterval(a,r);if(o!=-1)return a[o+2]+(r-a[o])}return-1},e._lctf.readFeatureList=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=a.readASCII(n,r,4);r+=4;var h=a.readUshort(n,r);r+=2;var d=e._lctf.readFeatureTable(n,o+h);d.tag=f.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2,c>0&&(l.featureParams=o+c);var u=a.readUshort(n,r);r+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(a.readUshort(n,r+2*f));return l},e._lctf.readScriptList=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=a.readASCII(n,r,4);r+=4;var h=a.readUshort(n,r);r+=2,l[f.trim()]=e._lctf.readScriptTable(n,o+h)}return l},e._lctf.readScriptTable=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=a.readUshort(n,r);r+=2;for(var f=0;f<u;f++){var h=a.readASCII(n,r,4);r+=4;var d=a.readUshort(n,r);r+=2,l[h.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,r){var a=e._bin,o={};a.readUshort(n,r),r+=2,o.reqFeature=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);return r+=2,o.features=a.readUshorts(n,r,l),o},e.CFF={},e.CFF.parse=function(n,r,a){var o=e._bin;(n=new Uint8Array(n.buffer,r,a))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var f=[];r=e.CFF.readIndex(n,r,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(n,r+f[u],r+f[u+1]));r+=f[f.length-1];var d=h[0],g=[];r=e.CFF.readIndex(n,r,g);var _=[];for(u=0;u<g.length-1;u++)_.push(o.readASCII(n,r+g[u],g[u+1]-g[u]));if(r+=g[g.length-1],e.CFF.readSubrs(n,r,d),d.CharStrings){r=d.CharStrings,g=[],r=e.CFF.readIndex(n,r,g);var p=[];for(u=0;u<g.length-1;u++)p.push(o.readBytes(n,r+g[u],g[u+1]-g[u]));d.CharStrings=p}if(d.ROS){r=d.FDArray;var m=[];for(r=e.CFF.readIndex(n,r,m),d.FDArray=[],u=0;u<m.length-1;u++){var S=e.CFF.readDict(n,r+m[u],r+m[u+1]);e.CFF._readFDict(n,S,_),d.FDArray.push(S)}r+=m[m.length-1],r=d.FDSelect,d.FDSelect=[];var M=n[r];if(r++,M!=3)throw M;var v=o.readUshort(n,r);for(r+=2,u=0;u<v+1;u++)d.FDSelect.push(o.readUshort(n,r),n[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,_),d},e.CFF._readFDict=function(n,r,a){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(n,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=a[r[l]-426+35])},e.CFF.readSubrs=function(n,r,a){var o=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var f=0;f<l.length-1;f++)a.Subrs.push(o.readBytes(n,r+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==r)return a;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,a){e._bin;var o=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var u=0;u<c;u++)o.push(n[r+u]);return o},e.CFF.readCharset=function(n,r,a){var o=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var u=0;u<a;u++){var f=o.readUshort(n,r);r+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){f=o.readUshort(n,r),r+=2;var h=0;for(c==1?(h=n[r],r++):(h=o.readUshort(n,r),r+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(n,r,a){var o=e._bin,l=o.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var u=0;u<l;u++)a.push(n[r+u]);else if(c==2)for(u=0;u<l;u++)a.push(o.readUshort(n,r+2*u));else if(c==3)for(u=0;u<l;u++)a.push(16777215&o.readUint(n,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,a){var o=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=o.readShort(n,r+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=o.readInt(n,r+1)/65535,u=5),a.val=h??"o"+f,a.size=u},e.CFF.readCharString=function(n,r,a){for(var o=r+a,l=e._bin,c=[];r<o;){var u=n[r],f=n[r+1];n[r+2],n[r+3],n[r+4];var h=1,d=null,g=null;u<=20&&(d=u,h=1),u==12&&(d=100*u+f,h=2),u!=19&&u!=20||(d=u,h=2),21<=u&&u<=27&&(d=u,h=1),u==28&&(g=l.readShort(n,r+1),h=3),29<=u&&u<=31&&(d=u,h=1),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255&&(g=l.readInt(n,r+1)/65535,h=5),c.push(g??"o"+d),r+=h}return c},e.CFF.readDict=function(n,r,a){for(var o=e._bin,l={},c=[];r<a;){var u=n[r],f=n[r+1];n[r+2],n[r+3],n[r+4];var h=1,d=null,g=null;if(u==28&&(g=o.readShort(n,r+1),h=3),u==29&&(g=o.readInt(n,r+1),h=5),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255)throw g=o.readInt(n,r+1)/65535,h=5,"unknown number";if(u==30){var _=[];for(h=1;;){var p=n[r+h];h++;var m=p>>4,S=15&p;if(m!=15&&_.push(m),S!=15&&_.push(S),S==15)break}for(var M="",v=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],b=0;b<_.length;b++)M+=v[_[b]];g=parseFloat(M)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),r+=h}return l},e.cmap={},e.cmap.parse=function(n,r,a){n=new Uint8Array(n.buffer,r,a),r=0;var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=o.readUshort(n,r);r+=2;var d=o.readUshort(n,r);r+=2;var g=o.readUint(n,r);r+=4;var _="p"+h+"e"+d,p=u.indexOf(g);if(p==-1){var m;p=l.tables.length,u.push(g);var S=o.readUshort(n,g);S==0?m=e.cmap.parse0(n,g):S==4?m=e.cmap.parse4(n,g):S==6?m=e.cmap.parse6(n,g):S==12?m=e.cmap.parse12(n,g):console.debug("unknown format: "+S,h,d,g),l.tables.push(m)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=p}return l},e.cmap.parse0=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[r+c]);return o},e.cmap.parse4=function(n,r){var a=e._bin,o=r,l={};l.format=a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2;var u=a.readUshort(n,r);r+=2;var f=u/2;l.searchRange=a.readUshort(n,r),r+=2,l.entrySelector=a.readUshort(n,r),r+=2,l.rangeShift=a.readUshort(n,r),r+=2,l.endCount=a.readUshorts(n,r,f),r+=2*f,r+=2,l.startCount=a.readUshorts(n,r,f),r+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(a.readShort(n,r)),r+=2;for(l.idRangeOffset=a.readUshorts(n,r,f),r+=2*f,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(a.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,o.firstCode=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(n,r)),r+=2;return o},e.cmap.parse12=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,r+=2,a.readUint(n,r),r+=4,a.readUint(n,r),r+=4;var l=a.readUint(n,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var u=r+12*c,f=a.readUint(n,u+0),h=a.readUint(n,u+4),d=a.readUint(n,u+8);o.groups.push([f,h,d])}return o},e.glyf={},e.glyf.parse=function(n,r,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var a=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(a.readUshort(o,l)),l+=2;var f=a.readUshort(o,l);if(l+=2,o.length-l<f)return null;c.instructions=a.readBytes(o,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var _=0;_<g;_++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<h;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var S=0,M=0;for(u=0;u<h;u++)S+=c.xs[u],M+=c.ys[u],c.xs[u]=S,c.ys[u]=M}else{var v;c.parts=[];do{v=a.readUshort(o,l),l+=2;var b={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(b),b.glyphIndex=a.readUshort(o,l),l+=2,1&v){var w=a.readShort(o,l);l+=2;var E=a.readShort(o,l);l+=2}else w=a.readInt8(o,l),l++,E=a.readInt8(o,l),l++;2&v?(b.m.tx=w,b.m.ty=E):(b.p1=w,b.p2=E),8&v?(b.m.a=b.m.d=a.readF2dot14(o,l),l+=2):64&v?(b.m.a=a.readF2dot14(o,l),l+=2,b.m.d=a.readF2dot14(o,l),l+=2):128&v&&(b.m.a=a.readF2dot14(o,l),l+=2,b.m.b=a.readF2dot14(o,l),l+=2,b.m.c=a.readF2dot14(o,l),l+=2,b.m.d=a.readF2dot14(o,l),l+=2)}while(32&v);if(256&v){var T=a.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<T;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,a,o){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var f=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,f+c)}if(r==1&&u.fmt==1){var h=l.readUshort(n,a);a+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(n,a,h))}else if(r==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(n,a),a+=2;var d=l.readUshort(n,a);a+=2;var g=e._lctf.numOfOnes(h),_=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(n,a);a+=2;for(var m=0;m<p;m++){var S=c+l.readUshort(n,a);a+=2;var M=l.readUshort(n,S);S+=2;for(var v=[],b=0;b<M;b++){var w=l.readUshort(n,S);S+=2,h!=0&&(P=e.GPOS.readValueRecord(n,S,h),S+=2*g),d!=0&&(U=e.GPOS.readValueRecord(n,S,d),S+=2*_),v.push({gid2:w,val1:P,val2:U})}u.pairsets.push(v)}}if(u.fmt==2){var E=l.readUshort(n,a);a+=2;var T=l.readUshort(n,a);a+=2;var x=l.readUshort(n,a);a+=2;var y=l.readUshort(n,a);for(a+=2,u.classDef1=e._lctf.readClassDef(n,c+E),u.classDef2=e._lctf.readClassDef(n,c+T),u.matrix=[],m=0;m<x;m++){var D=[];for(b=0;b<y;b++){var P=null,U=null;h!=0&&(P=e.GPOS.readValueRecord(n,a,h),a+=2*g),d!=0&&(U=e.GPOS.readValueRecord(n,a,d),a+=2*_),D.push({val1:P,val2:U})}u.matrix.push(D)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var L=l.readUshort(n,a);a+=2;var B=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=L;else if(o.ltype!=L)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+B)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,r,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(n,r):0),r+=1&a?2:0,l.push(2&a?o.readShort(n,r):0),r+=2&a?2:0,l.push(4&a?o.readShort(n,r):0),r+=4&a?2:0,l.push(8&a?o.readShort(n,r):0),r+=8&a?2:0,l},e.GPOS.readBaseArray=function(n,r,a){var o=e._bin,l=[],c=r,u=o.readUshort(n,r);r+=2;for(var f=0;f<u;f++){for(var h=[],d=0;d<a;d++)h.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,r))),r+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(n,r){var a=e._bin,o=[],l=r,c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=e.GPOS.readAnchorRecord(n,a.readUshort(n,r+2)+l);f.markClass=a.readUshort(n,r),o.push(f),r+=4}return o},e.GPOS.readAnchorRecord=function(n,r){var a=e._bin,o={};return o.fmt=a.readUshort(n,r),o.x=a.readShort(n,r+2),o.y=a.readShort(n,r+4),o},e.GSUB={},e.GSUB.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var f=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,c+f)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,a),a+=2;else if(u.fmt==2){var h=l.readUshort(n,a);a+=2,u.newg=l.readUshorts(n,a,h),a+=2*u.newg.length}}else if(r==2&&u.fmt==1){h=l.readUshort(n,a),a+=2,u.seqs=[];for(var d=0;d<h;d++){var g=l.readUshort(n,a)+c;a+=2;var _=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,_))}}else if(r==4)for(u.vals=[],h=l.readUshort(n,a),a+=2,d=0;d<h;d++){var p=l.readUshort(n,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+p))}else if(r==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(n,a);a+=2,u.cDef=e._lctf.readClassDef(n,c+m),u.scset=[];var S=l.readUshort(n,a);for(a+=2,d=0;d<S;d++){var M=l.readUshort(n,a);a+=2,u.scset.push(M==0?null:e.GSUB.readSubClassSet(n,c+M))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){h=l.readUshort(n,a),a+=2;for(var v=[],b=0;b<h;b++)v.push(e._lctf.readCoverage(n,c+l.readUshort(n,a+2*b)));a+=2*h,d==0&&(u.backCvg=v),d==1&&(u.inptCvg=v),d==2&&(u.ahedCvg=v)}h=l.readUshort(n,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,a,h)}}else{if(r==7&&u.fmt==1){var w=l.readUshort(n,a);a+=2;var E=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=w;else if(o.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+E)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,r){var a=e._bin.readUshort,o=r,l=[],c=a(n,r);r+=2;for(var u=0;u<c;u++){var f=a(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,o+f))}return l},e.GSUB.readSubClassRule=function(n,r){var a=e._bin.readUshort,o={},l=a(n,r),c=a(n,r+=2);r+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(a(n,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),o},e.GSUB.readSubstLookupRecords=function(n,r,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(n,r),o(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=a.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,o+f))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=a.readUshort(n,r);r+=2,c==1&&u--,o[l[c]]=a.readUshorts(n,r,u),r+=2*o[l[c]].length}return u=a.readUshort(n,r),r+=2,o.subst=a.readUshorts(n,r,2*u),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=a.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,o+f))}return l},e.GSUB.readLigature=function(n,r){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(n,r)),r+=2;return o},e.head={},e.head.parse=function(n,r,a){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.fontRevision=o.readFixed(n,r),r+=4,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4,l.flags=o.readUshort(n,r),r+=2,l.unitsPerEm=o.readUshort(n,r),r+=2,l.created=o.readUint64(n,r),r+=8,l.modified=o.readUint64(n,r),r+=8,l.xMin=o.readShort(n,r),r+=2,l.yMin=o.readShort(n,r),r+=2,l.xMax=o.readShort(n,r),r+=2,l.yMax=o.readShort(n,r),r+=2,l.macStyle=o.readUshort(n,r),r+=2,l.lowestRecPPEM=o.readUshort(n,r),r+=2,l.fontDirectionHint=o.readShort(n,r),r+=2,l.indexToLocFormat=o.readShort(n,r),r+=2,l.glyphDataFormat=o.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,a){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.ascender=o.readShort(n,r),r+=2,l.descender=o.readShort(n,r),r+=2,l.lineGap=o.readShort(n,r),r+=2,l.advanceWidthMax=o.readUshort(n,r),r+=2,l.minLeftSideBearing=o.readShort(n,r),r+=2,l.minRightSideBearing=o.readShort(n,r),r+=2,l.xMaxExtent=o.readShort(n,r),r+=2,l.caretSlopeRise=o.readShort(n,r),r+=2,l.caretSlopeRun=o.readShort(n,r),r+=2,l.caretOffset=o.readShort(n,r),r+=2,r+=8,l.metricDataFormat=o.readShort(n,r),r+=2,l.numberOfHMetrics=o.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<o.maxp.numGlyphs;h++)h<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,r),r+=2,f=l.readShort(n,r),r+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(n,r,a,o){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,a,o);var u=l.readUshort(n,r);r+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){r+=2,a=l.readUshort(n,r),r+=2;var d=l.readUshort(n,r);r+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(n,r,f)}return f},e.kern.parseV1=function(n,r,a,o){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(n,r),r+=4;var h=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(n,r,u)}return u},e.kern.readFormat0=function(n,r,a){var o=e._bin,l=-1,c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,r);r+=2;var h=o.readUshort(n,r);r+=2;var d=o.readShort(n,r);r+=2,f!=l&&(a.glyph1.push(f),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(h),g.vals.push(d),l=f}return r},e.loca={},e.loca.parse=function(n,r,a,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,f=o.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(n,r+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(n,r+(h<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,a){var o=e._bin,l={},c=o.readUint(n,r);return r+=4,l.numGlyphs=o.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(n,r),r+=2,l.maxContours=o.readUshort(n,r),r+=2,l.maxCompositePoints=o.readUshort(n,r),r+=2,l.maxCompositeContours=o.readUshort(n,r),r+=2,l.maxZones=o.readUshort(n,r),r+=2,l.maxTwilightPoints=o.readUshort(n,r),r+=2,l.maxStorage=o.readUshort(n,r),r+=2,l.maxFunctionDefs=o.readUshort(n,r),r+=2,l.maxInstructionDefs=o.readUshort(n,r),r+=2,l.maxStackElements=o.readUshort(n,r),r+=2,l.maxSizeOfInstructions=o.readUshort(n,r),r+=2,l.maxComponentElements=o.readUshort(n,r),r+=2,l.maxComponentDepth=o.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,a){var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=r+=2,d=0;d<c;d++){var g=o.readUshort(n,r);r+=2;var _=o.readUshort(n,r);r+=2;var p=o.readUshort(n,r);r+=2;var m=o.readUshort(n,r);r+=2;var S=o.readUshort(n,r);r+=2;var M=o.readUshort(n,r);r+=2;var v,b=f[m],w=h+12*c+M;if(g==0)v=o.readUnicode(n,w,S/2);else if(g==3&&_==0)v=o.readUnicode(n,w,S/2);else if(_==0)v=o.readASCII(n,w,S);else if(_==1)v=o.readUnicode(n,w,S/2);else if(_==3)v=o.readUnicode(n,w,S/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;v=o.readASCII(n,w,S),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var E="p"+g+","+p.toString(16);l[E]==null&&(l[E]={}),l[E][b!==void 0?b:m]=v,l[E]._lang=p}for(var T in l)if(l[T].postScriptName!=null&&l[T]._lang==1033)return l[T];for(var T in l)if(l[T].postScriptName!=null&&l[T]._lang==0)return l[T];for(var T in l)if(l[T].postScriptName!=null&&l[T]._lang==3084)return l[T];for(var T in l)if(l[T].postScriptName!=null)return l[T];for(var T in l){u=T;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,r,a){var o=e._bin.readUshort(n,r);r+=2;var l={};if(o==0)e["OS/2"].version0(n,r,l);else if(o==1)e["OS/2"].version1(n,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,r),r+=2,a.usWeightClass=o.readUshort(n,r),r+=2,a.usWidthClass=o.readUshort(n,r),r+=2,a.fsType=o.readUshort(n,r),r+=2,a.ySubscriptXSize=o.readShort(n,r),r+=2,a.ySubscriptYSize=o.readShort(n,r),r+=2,a.ySubscriptXOffset=o.readShort(n,r),r+=2,a.ySubscriptYOffset=o.readShort(n,r),r+=2,a.ySuperscriptXSize=o.readShort(n,r),r+=2,a.ySuperscriptYSize=o.readShort(n,r),r+=2,a.ySuperscriptXOffset=o.readShort(n,r),r+=2,a.ySuperscriptYOffset=o.readShort(n,r),r+=2,a.yStrikeoutSize=o.readShort(n,r),r+=2,a.yStrikeoutPosition=o.readShort(n,r),r+=2,a.sFamilyClass=o.readShort(n,r),r+=2,a.panose=o.readBytes(n,r,10),r+=10,a.ulUnicodeRange1=o.readUint(n,r),r+=4,a.ulUnicodeRange2=o.readUint(n,r),r+=4,a.ulUnicodeRange3=o.readUint(n,r),r+=4,a.ulUnicodeRange4=o.readUint(n,r),r+=4,a.achVendID=[o.readInt8(n,r),o.readInt8(n,r+1),o.readInt8(n,r+2),o.readInt8(n,r+3)],r+=4,a.fsSelection=o.readUshort(n,r),r+=2,a.usFirstCharIndex=o.readUshort(n,r),r+=2,a.usLastCharIndex=o.readUshort(n,r),r+=2,a.sTypoAscender=o.readShort(n,r),r+=2,a.sTypoDescender=o.readShort(n,r),r+=2,a.sTypoLineGap=o.readShort(n,r),r+=2,a.usWinAscent=o.readUshort(n,r),r+=2,a.usWinDescent=o.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,a){var o=e._bin;return r=e["OS/2"].version0(n,r,a),a.ulCodePageRange1=o.readUint(n,r),r+=4,a.ulCodePageRange2=o.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,a){var o=e._bin;return r=e["OS/2"].version1(n,r,a),a.sxHeight=o.readShort(n,r),r+=2,a.sCapHeight=o.readShort(n,r),r+=2,a.usDefault=o.readUshort(n,r),r+=2,a.usBreak=o.readUshort(n,r),r+=2,a.usMaxContext=o.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,a){var o=e._bin;return r=e["OS/2"].version2(n,r,a),a.usLowerOpticalPointSize=o.readUshort(n,r),r+=2,a.usUpperOpticalPointSize=o.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,a){var o=e._bin,l={};return l.version=o.readFixed(n,r),r+=4,l.italicAngle=o.readFixed(n,r),r+=4,l.underlinePosition=o.readShort(n,r),r+=2,l.underlineThickness=o.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=r&&r<=f[1])return f[2]+(r-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var o=n.SVG.entries[r];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[r]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=r;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,u,a)}else n.glyf&&e.U._drawGlyf(r,n,a);return a},e.U._drawGlyf=function(n,r,a){var o=r.glyf[n];o==null&&(o=r.glyf[n]=e.glyf._parseGlyf(r,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,r,a))},e.U._simpleGlyph=function(n,r){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,l=n.endPts[a],c=o;c<=l;c++){var u=c==o?l:c-1,f=c==l?o:c+1,h=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[f],_=n.xs[c],p=n.ys[c];if(c==o)if(h){if(!d){e.U.P.moveTo(r,_,p);continue}e.U.P.moveTo(r,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(r,n.xs[u],n.ys[u]):e.U.P.moveTo(r,(n.xs[u]+_)/2,(n.ys[u]+p)/2);h?d&&e.U.P.lineTo(r,_,p):g?e.U.P.qcurveTo(r,_,p,n.xs[f],n.ys[f]):e.U.P.qcurveTo(r,_,p,(_+n.xs[f])/2,(p+n.ys[f])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,a){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],d=l.crds[f+1];a.crds.push(h*u.a+d*u.b+u.tx),a.crds.push(h*u.c+d*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)a.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(n,r){var a=e._lctf.getInterval(r,n);return a==-1?0:r[a+2]},e.U._applySubs=function(n,r,a,o){for(var l=n.length-r-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var u,f=a.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,n[r]))!=-1){if(a.ltype==1)n[r],f.fmt==1?n[r]=n[r]+f.delta:n[r]=f.newg[u];else if(a.ltype==4)for(var h=f.vals[u],d=0;d<h.length;d++){var g=h[d],_=g.chain.length;if(!(_>l)){for(var p=!0,m=0,S=0;S<_;S++){for(;n[r+m+(1+S)]==-1;)m++;g.chain[S]!=n[r+m+(1+S)]&&(p=!1)}if(p){for(n[r]=g.nglyph,S=0;S<_+m;S++)n[r+S+1]=-1;break}}}else if(a.ltype==5&&f.fmt==2)for(var M=e._lctf.getInterval(f.cDef,n[r]),v=f.cDef[M+2],b=f.scset[v],w=0;w<b.length;w++){var E=b[w],T=E.input;if(!(T.length>l)){for(p=!0,S=0;S<T.length;S++){var x=e._lctf.getInterval(f.cDef,n[r+1+S]);if(M==-1&&f.cDef[x+2]!=T[S]){p=!1;break}}if(p){var y=E.substLookupRecords;for(d=0;d<y.length;d+=2)y[d],y[d+1]}}}else if(a.ltype==6&&f.fmt==3){if(!e.U._glsCovered(n,f.backCvg,r-f.backCvg.length)||!e.U._glsCovered(n,f.inptCvg,r)||!e.U._glsCovered(n,f.ahedCvg,r+f.inptCvg.length))continue;var D=f.lookupRec;for(w=0;w<D.length;w+=2){M=D[w];var P=o[D[w+1]];e.U._applySubs(n,r+M,P,o)}}}}},e.U._glsCovered=function(n,r,a){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var f=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,h=e.U.glyphToPath(n,u),d=0;d<h.crds.length;d+=2)o.crds.push(h.crds[d]+l),o.crds.push(h.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<h.cmds.length;d++)o.cmds.push(h.cmds[d]);a&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(n,u,f))}}return o},e.U.P={},e.U.P.moveTo=function(n,r,a){n.cmds.push("M"),n.crds.push(r,a)},e.U.P.lineTo=function(n,r,a){n.cmds.push("L"),n.crds.push(r,a)},e.U.P.curveTo=function(n,r,a,o,l,c,u){n.cmds.push("C"),n.crds.push(r,a,o,l,c,u)},e.U.P.qcurveTo=function(n,r,a,o,l){n.cmds.push("Q"),n.crds.push(r,a,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,a,o,l){for(var c=r.stack,u=r.nStems,f=r.haveWidth,h=r.width,d=r.open,g=0,_=r.x,p=r.y,m=0,S=0,M=0,v=0,b=0,w=0,E=0,T=0,x=0,y=0,D={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,D);var P=D.val;if(g+=D.size,P=="o1"||P=="o18")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(P=="o3"||P=="o23")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(P=="o4")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,_,p),d=!0;else if(P=="o5")for(;c.length>0;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);else if(P=="o6"||P=="o7")for(var U=c.length,L=P=="o6",B=0;B<U;B++){var I=c.shift();L?_+=I:p+=I,L=!L,e.U.P.lineTo(l,_,p)}else if(P=="o8"||P=="o24"){U=c.length;for(var X=0;X+6<=U;)m=_+c.shift(),S=p+c.shift(),M=m+c.shift(),v=S+c.shift(),_=M+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,m,S,M,v,_,p),X+=6;P=="o24"&&(_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p))}else{if(P=="o11")break;if(P=="o1234"||P=="o1235"||P=="o1236"||P=="o1237")P=="o1234"&&(S=p,M=(m=_+c.shift())+c.shift(),y=v=S+c.shift(),w=v,T=p,_=(E=(b=(x=M+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,S,M,v,x,y),e.U.P.curveTo(l,b,w,E,T,_,p)),P=="o1235"&&(m=_+c.shift(),S=p+c.shift(),M=m+c.shift(),v=S+c.shift(),x=M+c.shift(),y=v+c.shift(),b=x+c.shift(),w=y+c.shift(),E=b+c.shift(),T=w+c.shift(),_=E+c.shift(),p=T+c.shift(),c.shift(),e.U.P.curveTo(l,m,S,M,v,x,y),e.U.P.curveTo(l,b,w,E,T,_,p)),P=="o1236"&&(m=_+c.shift(),S=p+c.shift(),M=m+c.shift(),y=v=S+c.shift(),w=v,E=(b=(x=M+c.shift())+c.shift())+c.shift(),T=w+c.shift(),_=E+c.shift(),e.U.P.curveTo(l,m,S,M,v,x,y),e.U.P.curveTo(l,b,w,E,T,_,p)),P=="o1237"&&(m=_+c.shift(),S=p+c.shift(),M=m+c.shift(),v=S+c.shift(),x=M+c.shift(),y=v+c.shift(),b=x+c.shift(),w=y+c.shift(),E=b+c.shift(),T=w+c.shift(),Math.abs(E-_)>Math.abs(T-p)?_=E+c.shift():p=T+c.shift(),e.U.P.curveTo(l,m,S,M,v,x,y),e.U.P.curveTo(l,b,w,E,T,_,p));else if(P=="o14"){if(c.length>0&&!f&&(h=c.shift()+a.nominalWidthX,f=!0),c.length==4){var H=c.shift(),q=c.shift(),W=c.shift(),F=c.shift(),V=e.CFF.glyphBySE(a,W),Z=e.CFF.glyphBySE(a,F);e.U._drawCFF(a.CharStrings[V],r,a,o,l),r.x=H,r.y=q,e.U._drawCFF(a.CharStrings[Z],r,a,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(P=="o19"||P=="o20")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,g+=u+7>>3;else if(P=="o21")c.length>2&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),p+=c.pop(),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(P=="o22")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(P=="o25"){for(;c.length>6;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);m=_+c.shift(),S=p+c.shift(),M=m+c.shift(),v=S+c.shift(),_=M+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,m,S,M,v,_,p)}else if(P=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)m=_,S=p+c.shift(),_=M=m+c.shift(),p=(v=S+c.shift())+c.shift(),e.U.P.curveTo(l,m,S,M,v,_,p);else if(P=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)S=p,M=(m=_+c.shift())+c.shift(),v=S+c.shift(),_=M+c.shift(),p=v,e.U.P.curveTo(l,m,S,M,v,_,p);else if(P=="o10"||P=="o29"){var N=P=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var O=c.pop(),Q=N.Subrs[O+N.Bias];r.x=_,r.y=p,r.nStems=u,r.haveWidth=f,r.width=h,r.open=d,e.U._drawCFF(Q,r,a,o,l),_=r.x,p=r.y,u=r.nStems,f=r.haveWidth,h=r.width,d=r.open}}else if(P=="o30"||P=="o31"){var Y=c.length,ne=(X=0,P=="o31");for(X+=Y-(U=-3&Y);X<U;)ne?(S=p,M=(m=_+c.shift())+c.shift(),p=(v=S+c.shift())+c.shift(),U-X==5?(_=M+c.shift(),X++):_=M,ne=!1):(m=_,S=p+c.shift(),M=m+c.shift(),v=S+c.shift(),_=M+c.shift(),U-X==5?(p=v+c.shift(),X++):p=v,ne=!0),e.U.P.curveTo(l,m,S,M,v,_,p),X+=4}else{if((P+"").charAt(0)=="o")throw console.debug("Unknown operation: "+P,n),P;c.push(P)}}}r.x=_,r.y=p,r.nStems=u,r.haveWidth=f,r.width=h,r.open=d};var t=e,i={Typr:t};return s.Typr=t,s.default=i,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function xx(){return function(s){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(P,U){for(var L=new t(31),B=0;B<31;++B)L[B]=U+=1<<P[B-1];var I=new i(L[30]);for(B=1;B<30;++B)for(var X=L[B];X<L[B+1];++X)I[X]=X-L[B]<<5|B;return[L,I]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=o(r,0)[0],h=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(P,U,L){for(var B=P.length,I=0,X=new t(U);I<B;++I)++X[P[I]-1];var H,q=new t(U);for(I=0;I<U;++I)q[I]=q[I-1]+X[I-1]<<1;{H=new t(1<<U);var W=15-U;for(I=0;I<B;++I)if(P[I])for(var F=I<<4|P[I],V=U-P[I],Z=q[P[I]-1]++<<V,N=Z|(1<<V)-1;Z<=N;++Z)H[h[Z]>>>W]=F}return H},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var S=_(p,9),M=_(m,5),v=function(P){for(var U=P[0],L=1;L<P.length;++L)P[L]>U&&(U=P[L]);return U},b=function(P,U,L){var B=U/8|0;return(P[B]|P[B+1]<<8)>>(7&U)&L},w=function(P,U){var L=U/8|0;return(P[L]|P[L+1]<<8|P[L+2]<<16)>>(7&U)},E=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],T=function(P,U,L){var B=new Error(U||E[P]);if(B.code=P,Error.captureStackTrace&&Error.captureStackTrace(B,T),!L)throw B;return B},x=function(P,U,L){var B=P.length;if(!B||L&&!L.l&&B<5)return U||new e(0);var I=!U||L,X=!L||L.i;L||(L={}),U||(U=new e(3*B));var H,q=function(ce){var De=U.length;if(ce>De){var Le=new e(Math.max(2*De,ce));Le.set(U),U=Le}},W=L.f||0,F=L.p||0,V=L.b||0,Z=L.l,N=L.d,O=L.m,Q=L.n,Y=8*B;do{if(!Z){L.f=W=b(P,F,1);var ne=b(P,F+1,3);if(F+=3,!ne){var ge=P[(me=((H=F)/8|0)+(7&H&&1)+4)-4]|P[me-3]<<8,Me=me+ge;if(Me>B){X&&T(0);break}I&&q(V+ge),U.set(P.subarray(me,Me),V),L.b=V+=ge,L.p=F=8*Me;continue}if(ne==1)Z=S,N=M,O=9,Q=5;else if(ne==2){var xe=b(P,F,31)+257,oe=b(P,F+10,15)+4,Ne=xe+b(P,F+5,31)+1;F+=14;for(var z=new e(Ne),Oe=new e(19),Ae=0;Ae<oe;++Ae)Oe[a[Ae]]=b(P,F+3*Ae,7);F+=3*oe;var Re=v(Oe),ae=(1<<Re)-1,we=_(Oe,Re);for(Ae=0;Ae<Ne;){var me,R=we[b(P,F,ae)];if(F+=15&R,(me=R>>>4)<16)z[Ae++]=me;else{var A=0,k=0;for(me==16?(k=3+b(P,F,3),F+=2,A=z[Ae-1]):me==17?(k=3+b(P,F,7),F+=3):me==18&&(k=11+b(P,F,127),F+=7);k--;)z[Ae++]=A}}var J=z.subarray(0,xe),$=z.subarray(xe);O=v(J),Q=v($),Z=_(J,O),N=_($,Q)}else T(1);if(F>Y){X&&T(0);break}}I&&q(V+131072);for(var se=(1<<O)-1,de=(1<<Q)-1,ue=F;;ue=F){var _e=(A=Z[w(P,F)&se])>>>4;if((F+=15&A)>Y){X&&T(0);break}if(A||T(2),_e<256)U[V++]=_e;else{if(_e==256){ue=F,Z=null;break}var Pe=_e-254;if(_e>264){var fe=n[Ae=_e-257];Pe=b(P,F,(1<<fe)-1)+c[Ae],F+=fe}var ye=N[w(P,F)&de],Ee=ye>>>4;if(ye||T(3),F+=15&ye,$=f[Ee],Ee>3&&(fe=r[Ee],$+=w(P,F)&(1<<fe)-1,F+=fe),F>Y){X&&T(0);break}I&&q(V+131072);for(var Te=V+Pe;V<Te;V+=4)U[V]=U[V-$],U[V+1]=U[V+1-$],U[V+2]=U[V+2-$],U[V+3]=U[V+3-$];V=Te}}L.l=Z,L.p=ue,L.b=V,Z&&(W=1,L.m=O,L.d=N,L.n=Q)}while(!W);return V==U.length?U:function(ce,De,Le){(Le==null||Le>ce.length)&&(Le=ce.length);var je=new(ce instanceof t?t:ce instanceof i?i:e)(Le-De);return je.set(ce.subarray(De,Le)),je}(U,0,V)},y=new e(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(y,{stream:!0})}catch{}return s.convert_streams=function(P){var U=new DataView(P),L=0;function B(){var xe=U.getUint16(L);return L+=2,xe}function I(){var xe=U.getUint32(L);return L+=4,xe}function X(xe){ge.setUint16(Me,xe),Me+=2}function H(xe){ge.setUint32(Me,xe),Me+=4}for(var q={signature:I(),flavor:I(),length:I(),numTables:B(),reserved:B(),totalSfntSize:I(),majorVersion:B(),minorVersion:B(),metaOffset:I(),metaLength:I(),metaOrigLength:I(),privOffset:I(),privLength:I()},W=0;Math.pow(2,W)<=q.numTables;)W++;W--;for(var F=16*Math.pow(2,W),V=16*q.numTables-F,Z=12,N=[],O=0;O<q.numTables;O++)N.push({tag:I(),offset:I(),compLength:I(),origLength:I(),origChecksum:I()}),Z+=16;var Q,Y=new Uint8Array(12+16*N.length+N.reduce(function(xe,oe){return xe+oe.origLength+4},0)),ne=Y.buffer,ge=new DataView(ne),Me=0;return H(q.flavor),X(q.numTables),X(F),X(W),X(V),N.forEach(function(xe){H(xe.tag),H(xe.origChecksum),H(Z),H(xe.origLength),xe.outOffset=Z,(Z+=xe.origLength)%4!=0&&(Z+=4-Z%4)}),N.forEach(function(xe){var oe,Ne=P.slice(xe.offset,xe.offset+xe.compLength);if(xe.compLength!=xe.origLength){var z=new Uint8Array(xe.origLength);oe=new Uint8Array(Ne,2),x(oe,z)}else z=new Uint8Array(Ne);Y.set(z,xe.outOffset);var Oe=0;(Z=xe.outOffset+xe.origLength)%4!=0&&(Oe=4-Z%4),Y.set(new Uint8Array(Oe).buffer,xe.outOffset+xe.origLength),Q=Z+Oe}),ne.slice(0,Q)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function Sx(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,a=4,o=8,l=16,c=32;let u;function f(E){if(!u){const T={R:r,L:n,D:a,C:l,U:c,T:o};u=new Map;for(let x in i){let y=0;i[x].split(",").forEach(D=>{let[P,U]=D.split("+");P=parseInt(P,36),U=U?parseInt(U,36):0,u.set(y+=P,T[x]);for(let L=U;L--;)u.set(++y,T[x])})}}return u.get(E)||c}const h=1,d=2,g=3,_=4,p=[null,"isol","init","fina","medi"];function m(E){const T=new Uint8Array(E.length);let x=c,y=h,D=-1;for(let P=0;P<E.length;P++){const U=E.codePointAt(P);let L=f(U)|0,B=h;L&o||(x&(n|a|l)?L&(r|a|l)?(B=g,(y===h||y===g)&&T[D]++):L&(n|c)&&(y===d||y===_)&&T[D]--:x&(r|c)&&(y===d||y===_)&&T[D]--,y=T[P]=B,x=L,D=P,U>65535&&P++)}return T}function S(E,T){const x=[];for(let D=0;D<T.length;D++){const P=T.codePointAt(D);P>65535&&D++,x.push(s.U.codeToGlyph(E,P))}const y=E.GSUB;if(y){const{lookupList:D,featureList:P}=y;let U;const L=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,B=[];P.forEach(I=>{if(L.test(I.tag))for(let X=0;X<I.tab.length;X++){if(B[I.tab[X]])continue;B[I.tab[X]]=!0;const H=D[I.tab[X]],q=/^(isol|init|fina|medi)$/.test(I.tag);q&&!U&&(U=m(T));for(let W=0;W<x.length;W++)(!U||!q||p[U[W]]===I.tag)&&s.U._applySubs(x,W,H,D)}})}return x}function M(E,T){const x=new Int16Array(T.length*3);let y=0;for(;y<T.length;y++){const L=T[y];if(L===-1)continue;x[y*3+2]=E.hmtx.aWidth[L];const B=E.GPOS;if(B){const I=B.lookupList;for(let X=0;X<I.length;X++){const H=I[X];for(let q=0;q<H.tabs.length;q++){const W=H.tabs[q];if(H.ltype===1){if(s._lctf.coverageIndex(W.coverage,L)!==-1&&W.pos){U(W.pos,y);break}}else if(H.ltype===2){let F=null,V=D();if(V!==-1){const Z=s._lctf.coverageIndex(W.coverage,T[V]);if(Z!==-1){if(W.fmt===1){const N=W.pairsets[Z];for(let O=0;O<N.length;O++)N[O].gid2===L&&(F=N[O])}else if(W.fmt===2){const N=s.U._getGlyphClass(T[V],W.classDef1),O=s.U._getGlyphClass(L,W.classDef2);F=W.matrix[N][O]}if(F){F.val1&&U(F.val1,V),F.val2&&U(F.val2,y);break}}}}else if(H.ltype===4){const F=s._lctf.coverageIndex(W.markCoverage,L);if(F!==-1){const V=D(P),Z=V===-1?-1:s._lctf.coverageIndex(W.baseCoverage,T[V]);if(Z!==-1){const N=W.markArray[F],O=W.baseArray[Z][N.markClass];x[y*3]=O.x-N.x+x[V*3]-x[V*3+2],x[y*3+1]=O.y-N.y+x[V*3+1];break}}}else if(H.ltype===6){const F=s._lctf.coverageIndex(W.mark1Coverage,L);if(F!==-1){const V=D();if(V!==-1){const Z=T[V];if(v(E,Z)===3){const N=s._lctf.coverageIndex(W.mark2Coverage,Z);if(N!==-1){const O=W.mark1Array[F],Q=W.mark2Array[N][O.markClass];x[y*3]=Q.x-O.x+x[V*3]-x[V*3+2],x[y*3+1]=Q.y-O.y+x[V*3+1];break}}}}}}}}else if(E.kern&&!E.cff){const I=D();if(I!==-1){const X=E.kern.glyph1.indexOf(T[I]);if(X!==-1){const H=E.kern.rval[X].glyph2.indexOf(L);H!==-1&&(x[I*3+2]+=E.kern.rval[X].vals[H])}}}}return x;function D(L){for(let B=y-1;B>=0;B--)if(T[B]!==-1&&(!L||L(T[B])))return B;return-1}function P(L){return v(E,L)===1}function U(L,B){for(let I=0;I<3;I++)x[B*3+I]+=L[I]||0}}function v(E,T){const x=E.GDEF&&E.GDEF.glyphClassDef;return x?s.U._getGlyphClass(T,x):0}function b(...E){for(let T=0;T<E.length;T++)if(typeof E[T]=="number")return E[T]}function w(E){const T=Object.create(null),x=E["OS/2"],y=E.hhea,D=E.head.unitsPerEm,P=b(x&&x.sTypoAscender,y&&y.ascender,D),U={unitsPerEm:D,ascender:P,descender:b(x&&x.sTypoDescender,y&&y.descender,0),capHeight:b(x&&x.sCapHeight,P),xHeight:b(x&&x.sxHeight,P),lineGap:b(x&&x.sTypoLineGap,y&&y.lineGap),supportsCodePoint(L){return s.U.codeToGlyph(E,L)>0},forEachGlyph(L,B,I,X){let H=0;const q=1/U.unitsPerEm*B,W=S(E,L);let F=0;const V=M(E,W);return W.forEach((Z,N)=>{if(Z!==-1){let O=T[Z];if(!O){const{cmds:Q,crds:Y}=s.U.glyphToPath(E,Z);let ne="",ge=0;for(let z=0,Oe=Q.length;z<Oe;z++){const Ae=t[Q[z]];ne+=Q[z];for(let Re=1;Re<=Ae;Re++)ne+=(Re>1?",":"")+Y[ge++]}let Me,xe,oe,Ne;if(Y.length){Me=xe=1/0,oe=Ne=-1/0;for(let z=0,Oe=Y.length;z<Oe;z+=2){let Ae=Y[z],Re=Y[z+1];Ae<Me&&(Me=Ae),Re<xe&&(xe=Re),Ae>oe&&(oe=Ae),Re>Ne&&(Ne=Re)}}else Me=oe=xe=Ne=0;O=T[Z]={index:Z,advanceWidth:E.hmtx.aWidth[Z],xMin:Me,yMin:xe,xMax:oe,yMax:Ne,path:ne}}X.call(null,O,H+V[N*3]*q,V[N*3+1]*q,F),H+=V[N*3+2]*q,I&&(H+=I*B)}F+=L.codePointAt(F)>65535?2:1}),H}};return U}return function(T){const x=new Uint8Array(T,0,4),y=s._bin.readASCII(x,0,4);if(y==="wOFF")T=e(T);else if(y==="wOF2")throw new Error("woff2 fonts not supported");return w(s.parse(T)[0])}}const Mx=is({name:"Typr Font Parser",dependencies:[vx,xx,Sx],init(s,e,t){const i=s(),n=e();return t(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function yx(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(M){var v=M>>5;this.buckets.set(v,(this.buckets.get(v)||0)|1<<(31&M))},e.prototype.has=function(M){var v=this.buckets.get(M>>5);return v!==void 0&&(v&1<<(31&M))!=0},e.prototype.serialize=function(){var M=[];return this.buckets.forEach(function(v,b){M.push((+b).toString(36)+":"+v.toString(36))}),M.join(",")},e.prototype.deserialize=function(M){var v=this;this.buckets.clear(),M.split(",").forEach(function(b){var w=b.split(":");v.buckets.set(parseInt(w[0],36),parseInt(w[1],36))})};var t=Math.pow(2,8),i=t-1,n=~i;function r(M){var v=function(w){return w&n}(M).toString(16),b=function(w){return(w&n)+t-1}(M).toString(16);return"codepoint-index/plane"+(M>>16)+"/"+v+"-"+b+".json"}function a(M,v){var b=M&i,w=v.codePointAt(b/6|0);return((w=(w||48)-48)&1<<b%6)!=0}function o(M,v){var b;(b=M,b.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(w){return w.split("-").map(function(E){return parseInt(E.trim(),16)})})).forEach(function(w){var E=w[0],T=w[1];T===void 0&&(T=E),v(E,T)})}function l(M,v){o(M,function(b,w){for(var E=b;E<=w;E++)v(E)})}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(M){var v=f.get(M);return v||(v=new e,l(M.ranges,function(b){return v.add(b)}),f.set(M,v)),v}var g,_=new Map;function p(M,v,b){return M[v]?v:M[b]?b:function(w){for(var E in w)return E}(M)}function m(M,v){var b=v;if(!M.includes(b)){b=1/0;for(var w=0;w<M.length;w++)Math.abs(M[w]-v)<Math.abs(b-v)&&(b=M[w])}return b}function S(M){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(v){g.add(v)})),g.has(M)}return s.CodePointSet=e,s.clearCache=function(){c={},u={}},s.getFontsForString=function(M,v){v===void 0&&(v={});var b,w=v.lang;w===void 0&&(w=new RegExp("\\p{Script=Hangul}","u").test(b=M)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(b)?"ja":"en");var E=v.category;E===void 0&&(E="sans-serif");var T=v.style;T===void 0&&(T="normal");var x=v.weight;x===void 0&&(x=400);var y=(v.dataUrl||h).replace(/\/$/g,""),D=new Map,P=new Uint8Array(M.length),U={},L={},B=new Array(M.length),I=new Map,X=!1;function H(F){var V=_.get(F);return V||(V=fetch(y+"/"+F).then(function(Z){if(!Z.ok)throw new Error(Z.statusText);return Z.json().then(function(N){if(!Array.isArray(N)||N[0]!==1)throw new Error("Incorrect schema version; need 1, got "+N[0]);return N[1]})}).catch(function(Z){if(y!==h)return X||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+y+'", trying default CDN. '+Z.message),X=!0),y=h,_.delete(F),H(F);throw Z}),_.set(F,V)),V}for(var q=function(F){var V=M.codePointAt(F),Z=r(V);B[F]=Z,c[Z]||I.has(Z)||I.set(Z,H(Z).then(function(N){c[Z]=N})),V>65535&&(F++,W=F)},W=0;W<M.length;W++)q(W);return Promise.all(I.values()).then(function(){I.clear();for(var F=function(Z){var N=M.codePointAt(Z),O=null,Q=c[B[Z]],Y=void 0;for(var ne in Q){var ge=L[ne];if(ge===void 0&&(ge=L[ne]=new RegExp(ne).test(w||"en")),ge){for(var Me in Y=ne,Q[ne])if(a(N,Q[ne][Me])){O=Me;break}break}}if(!O){e:for(var xe in Q)if(xe!==Y){for(var oe in Q[xe])if(a(N,Q[xe][oe])){O=oe;break e}}}O||(console.debug("No font coverage for U+"+N.toString(16)),O="latin"),B[Z]=O,u[O]||I.has(O)||I.set(O,H("font-meta/"+O+".json").then(function(Ne){u[O]=Ne})),N>65535&&(Z++,V=Z)},V=0;V<M.length;V++)F(V);return Promise.all(I.values())}).then(function(){for(var F,V=null,Z=0;Z<M.length;Z++){var N=M.codePointAt(Z);if(V&&(S(N)||d(V).has(N)))P[Z]=P[Z-1];else{V=u[B[Z]];var O=U[V.id];if(!O){var Q=V.typeforms,Y=p(Q,E,"sans-serif"),ne=p(Q[Y],T,"normal"),ge=m((F=Q[Y])===null||F===void 0?void 0:F[ne],x);O=U[V.id]=y+"/font-files/"+V.id+"/"+Y+"."+ne+"."+ge+".woff"}var Me=D.get(O);Me==null&&(Me=D.size,D.set(O,Me)),P[Z]=Me}N>65535&&(Z++,P[Z]=P[Z-1])}return{fontUrls:Array.from(D.keys()),chars:P}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function Ex(s,e){const t=Object.create(null),i=Object.create(null);function n(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=s(c.response);u.src=a,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(a,o){let l=t[a];l?o(l):i[a]?i[a].push(o):(i[a]=[o],n(a,c=>{c.src=a,t[a]=c,i[a].forEach(u=>u(c)),delete i[a]}))}return function(a,o,{lang:l,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const d=new Uint8Array(a.length),g=[];a.length||S();const _=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(v=>!v.lang||v.lang.test(l)).reverse(),c.length){let E=0;(function T(x=0){for(let y=x,D=a.length;y<D;y++){const P=a.codePointAt(y);if(E===1&&g[d[y-1]].supportsCodePoint(P)||y>0&&/\s/.test(a[y]))d[y]=d[y-1],E===2&&(p[p.length-1][1]=y);else for(let U=d[y],L=c.length;U<=L;U++)if(U===L){const B=E===2?p[p.length-1]:p[p.length]=[y,y];B[1]=y,E=2}else{d[y]=U;const{src:B,unicodeRange:I}=c[U];if(!I||M(P,I)){const X=t[B];if(!X){r(B,()=>{T(y)});return}if(X.supportsCodePoint(P)){let H=_.get(X);typeof H!="number"&&(H=g.length,g.push(X),_.set(X,H)),d[y]=H,E=1;break}}}P>65535&&y+1<D&&(d[y+1]=d[y],y++,E===2&&(p[p.length-1][1]=y))}m()})()}else p.push([0,a.length-1]),m();function m(){if(p.length){const v=p.map(b=>a.substring(b[0],b[1]+1)).join(`
`);e.getFontsForString(v,{lang:l||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:b,chars:w})=>{const E=g.length;let T=0;p.forEach(y=>{for(let D=0,P=y[1]-y[0];D<=P;D++)d[y[0]+D]=w[T++]+E;T++});let x=0;b.forEach((y,D)=>{r(y,P=>{g[D+E]=P,++x===b.length&&S()})})})}else S()}function S(){o({chars:d,fonts:g})}function M(v,b){for(let w=0;w<b.length;w++){const[E,T=E]=b[w];if(E<=v&&v<=T)return!0}return!1}}}const Tx=is({name:"FontResolver",dependencies:[Ex,Mx,yx],init(s,e,t){return s(e,t())}});function bx(s,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:g,lang:_,fonts:p,style:m,weight:S,preResolvedFonts:M,unicodeFontsURL:v},b){const w=({chars:E,fonts:T})=>{let x,y;const D=[];for(let P=0;P<E.length;P++)E[P]!==y?(y=E[P],D.push(x={start:P,end:P,fontObj:T[E[P]]})):x.end=P;b(D)};M?w(M):s(g,w,{lang:_,fonts:p,style:m,weight:S,unicodeFontsURL:v})}function o({text:g="",font:_,lang:p,sdfGlyphSize:m=64,fontSize:S=400,fontWeight:M=1,fontStyle:v="normal",letterSpacing:b=0,lineHeight:w="normal",maxWidth:E=1/0,direction:T,textAlign:x="left",textIndent:y=0,whiteSpace:D="normal",overflowWrap:P="normal",anchorX:U=0,anchorY:L=0,metricsOnly:B=!1,unicodeFontsURL:I,preResolvedFonts:X=null,includeCaretPositions:H=!1,chunkedBoundsSize:q=8192,colorRanges:W=null},F){const V=f(),Z={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),S=+S,b=+b,E=+E,w=w||"normal",y=+y,a({text:g,lang:p,style:v,weight:M,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:I,preResolvedFonts:X},N=>{Z.fontLoad=f()-V;const O=isFinite(E);let Q=null,Y=null,ne=null,ge=null,Me=null,xe=null,oe=null,Ne=null,z=0,Oe=0,Ae=D!=="nowrap";const Re=new Map,ae=f();let we=y,me=0,R=new h;const A=[R];N.forEach(de=>{const{fontObj:ue}=de,{ascender:_e,descender:Pe,unitsPerEm:fe,lineGap:ye,capHeight:Ee,xHeight:Te}=ue;let ce=Re.get(ue);if(!ce){const he=S/fe,ee=w==="normal"?(_e-Pe+ye)*he:w*S,pe=(ee-(_e-Pe)*he)/2,Se=Math.min(ee,(_e-Pe)*he),ve=(_e+Pe)/2*he+Se/2;ce={index:Re.size,src:ue.src,fontObj:ue,fontSizeMult:he,unitsPerEm:fe,ascender:_e*he,descender:Pe*he,capHeight:Ee*he,xHeight:Te*he,lineHeight:ee,baseline:-pe-_e*he,caretTop:ve,caretBottom:ve-Se},Re.set(ue,ce)}const{fontSizeMult:De}=ce,Le=g.slice(de.start,de.end+1);let je,G;ue.forEachGlyph(Le,S,b,(he,ee,pe,Se)=>{ee+=me,Se+=de.start,je=ee,G=he;const ve=g.charAt(Se),Fe=he.advanceWidth*De,We=R.count;let Ge;if("isEmpty"in he||(he.isWhitespace=!!ve&&new RegExp(n).test(ve),he.canBreakAfter=!!ve&&r.test(ve),he.isEmpty=he.xMin===he.xMax||he.yMin===he.yMax||i.test(ve)),!he.isWhitespace&&!he.isEmpty&&Oe++,Ae&&O&&!he.isWhitespace&&ee+Fe+we>E&&We){if(R.glyphAt(We-1).glyphObj.canBreakAfter)Ge=new h,we=-ee;else for(let at=We;at--;)if(at===0&&P==="break-word"){Ge=new h,we=-ee;break}else if(R.glyphAt(at).glyphObj.canBreakAfter){Ge=R.splitAt(at+1);const lt=Ge.glyphAt(0).x;we-=lt;for(let pt=Ge.count;pt--;)Ge.glyphAt(pt).x-=lt;break}Ge&&(R.isSoftWrapped=!0,R=Ge,A.push(R),z=E)}let Ve=R.glyphAt(R.count);Ve.glyphObj=he,Ve.x=ee+we,Ve.y=pe,Ve.width=Fe,Ve.charIndex=Se,Ve.fontData=ce,ve===`
`&&(R=new h,A.push(R),we=-(ee+Fe+b*S)+y)}),me=je+G.advanceWidth*De+b*S});let k=0;A.forEach(de=>{let ue=!0;for(let _e=de.count;_e--;){const Pe=de.glyphAt(_e);ue&&!Pe.glyphObj.isWhitespace&&(de.width=Pe.x+Pe.width,de.width>z&&(z=de.width),ue=!1);let{lineHeight:fe,capHeight:ye,xHeight:Ee,baseline:Te}=Pe.fontData;fe>de.lineHeight&&(de.lineHeight=fe);const ce=Te-de.baseline;ce<0&&(de.baseline+=ce,de.cap+=ce,de.ex+=ce),de.cap=Math.max(de.cap,de.baseline+ye),de.ex=Math.max(de.ex,de.baseline+Ee)}de.baseline-=k,de.cap-=k,de.ex-=k,k+=de.lineHeight});let J=0,$=0;if(U&&(typeof U=="number"?J=-U:typeof U=="string"&&(J=-z*(U==="left"?0:U==="center"?.5:U==="right"?1:c(U)))),L&&(typeof L=="number"?$=-L:typeof L=="string"&&($=L==="top"?0:L==="top-baseline"?-A[0].baseline:L==="top-cap"?-A[0].cap:L==="top-ex"?-A[0].ex:L==="middle"?k/2:L==="bottom"?k:L==="bottom-baseline"?-A[A.length-1].baseline:c(L)*k)),!B){const de=e.getEmbeddingLevels(g,T);Q=new Uint16Array(Oe),Y=new Uint8Array(Oe),ne=new Float32Array(Oe*2),ge={},oe=[1/0,1/0,-1/0,-1/0],Ne=[],H&&(xe=new Float32Array(g.length*4)),W&&(Me=new Uint8Array(Oe*3));let ue=0,_e=-1,Pe=-1,fe,ye;if(A.forEach((Ee,Te)=>{let{count:ce,width:De}=Ee;if(ce>0){let Le=0;for(let Se=ce;Se--&&Ee.glyphAt(Se).glyphObj.isWhitespace;)Le++;let je=0,G=0;if(x==="center")je=(z-De)/2;else if(x==="right")je=z-De;else if(x==="justify"&&Ee.isSoftWrapped){let Se=0;for(let ve=ce-Le;ve--;)Ee.glyphAt(ve).glyphObj.isWhitespace&&Se++;G=(z-De)/Se}if(G||je){let Se=0;for(let ve=0;ve<ce;ve++){let Fe=Ee.glyphAt(ve);const We=Fe.glyphObj;Fe.x+=je+Se,G!==0&&We.isWhitespace&&ve<ce-Le&&(Se+=G,Fe.width+=G)}}const he=e.getReorderSegments(g,de,Ee.glyphAt(0).charIndex,Ee.glyphAt(Ee.count-1).charIndex);for(let Se=0;Se<he.length;Se++){const[ve,Fe]=he[Se];let We=1/0,Ge=-1/0;for(let Ve=0;Ve<ce;Ve++)if(Ee.glyphAt(Ve).charIndex>=ve){let at=Ve,lt=Ve;for(;lt<ce;lt++){let pt=Ee.glyphAt(lt);if(pt.charIndex>Fe)break;lt<ce-Le&&(We=Math.min(We,pt.x),Ge=Math.max(Ge,pt.x+pt.width))}for(let pt=at;pt<lt;pt++){const Yt=Ee.glyphAt(pt);Yt.x=Ge-(Yt.x+Yt.width-We)}break}}let ee;const pe=Se=>ee=Se;for(let Se=0;Se<ce;Se++){const ve=Ee.glyphAt(Se);ee=ve.glyphObj;const Fe=ee.index,We=de.levels[ve.charIndex]&1;if(We){const Ge=e.getMirroredCharacter(g[ve.charIndex]);Ge&&ve.fontData.fontObj.forEachGlyph(Ge,0,0,pe)}if(H){const{charIndex:Ge,fontData:Ve}=ve,at=ve.x+J,lt=ve.x+ve.width+J;xe[Ge*4]=We?lt:at,xe[Ge*4+1]=We?at:lt,xe[Ge*4+2]=Ee.baseline+Ve.caretBottom+$,xe[Ge*4+3]=Ee.baseline+Ve.caretTop+$;const pt=Ge-_e;pt>1&&u(xe,_e,pt),_e=Ge}if(W){const{charIndex:Ge}=ve;for(;Ge>Pe;)Pe++,W.hasOwnProperty(Pe)&&(ye=W[Pe])}if(!ee.isWhitespace&&!ee.isEmpty){const Ge=ue++,{fontSizeMult:Ve,src:at,index:lt}=ve.fontData,pt=ge[at]||(ge[at]={});pt[Fe]||(pt[Fe]={path:ee.path,pathBounds:[ee.xMin,ee.yMin,ee.xMax,ee.yMax]});const Yt=ve.x+J,Ft=ve.y+Ee.baseline+$;ne[Ge*2]=Yt,ne[Ge*2+1]=Ft;const on=Yt+ee.xMin*Ve,Pn=Ft+ee.yMin*Ve,zn=Yt+ee.xMax*Ve,qt=Ft+ee.yMax*Ve;on<oe[0]&&(oe[0]=on),Pn<oe[1]&&(oe[1]=Pn),zn>oe[2]&&(oe[2]=zn),qt>oe[3]&&(oe[3]=qt),Ge%q===0&&(fe={start:Ge,end:Ge,rect:[1/0,1/0,-1/0,-1/0]},Ne.push(fe)),fe.end++;const bt=fe.rect;if(on<bt[0]&&(bt[0]=on),Pn<bt[1]&&(bt[1]=Pn),zn>bt[2]&&(bt[2]=zn),qt>bt[3]&&(bt[3]=qt),Q[Ge]=Fe,Y[Ge]=lt,W){const Mn=Ge*3;Me[Mn]=ye>>16&255,Me[Mn+1]=ye>>8&255,Me[Mn+2]=ye&255}}}}}),xe){const Ee=g.length-_e;Ee>1&&u(xe,_e,Ee)}}const se=[];Re.forEach(({index:de,src:ue,unitsPerEm:_e,ascender:Pe,descender:fe,lineHeight:ye,capHeight:Ee,xHeight:Te})=>{se[de]={src:ue,unitsPerEm:_e,ascender:Pe,descender:fe,lineHeight:ye,capHeight:Ee,xHeight:Te}}),Z.typesetting=f()-ae,F({glyphIds:Q,glyphFontIndices:Y,glyphPositions:ne,glyphData:ge,fontData:se,caretPositions:xe,glyphColors:Me,chunkedBounds:Ne,fontSize:S,topBaseline:$+A[0].baseline,blockBounds:[J,$-k,J+z,$],visibleBounds:oe,timings:Z})})}function l(g,_){o({...g,metricsOnly:!0},p=>{const[m,S,M,v]=p.blockBounds;_({width:M-m,height:v-S})})}function c(g){let _=g.match(/^([\d.]+)%$/),p=_?parseFloat(_[1]):NaN;return isNaN(p)?0:p/100}function u(g,_,p){const m=g[_*4],S=g[_*4+1],M=g[_*4+2],v=g[_*4+3],b=(S-m)/p;for(let w=0;w<p;w++){const E=(_+w)*4;g[E]=m+b*w,g[E+1]=m+b*(w+1),g[E+2]=M,g[E+3]=v}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=h.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new h;return _.data=this.data.splice(g*d.length),_}},h.flyweight=d.reduce((g,_,p,m)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+p]},set(S){this.data[this.index*d.length+p]=S}}),g),{data:null,index:0}),{typeset:o,measure:l}}const Qi=()=>(self.performance||Date).now(),Ka=ph();let nf;function Ax(s,e,t,i,n,r,a,o,l,c,u=!0){return u?Rx(s,e,t,i,n,r,a,o,l,c).then(null,f=>(nf||(console.warn("WebGL SDF generation failed, falling back to JS",f),nf=!0),sf(s,e,t,i,n,r,a,o,l,c))):sf(s,e,t,i,n,r,a,o,l,c)}const Pa=[],wx=5;let Hl=0;function _h(){const s=Qi();for(;Pa.length&&Qi()-s<wx;)Pa.shift()();Hl=Pa.length?setTimeout(_h,0):0}const Rx=(...s)=>new Promise((e,t)=>{Pa.push(()=>{const i=Qi();try{Ka.webgl.generateIntoCanvas(...s),e({timing:Qi()-i})}catch(n){t(n)}}),Hl||(Hl=setTimeout(_h,0))}),Cx=4,Px=2e3,rf={};let Dx=0;function sf(s,e,t,i,n,r,a,o,l,c){const u="TroikaTextSDFGenerator_JS_"+Dx++%Cx;let f=rf[u];return f||(f=rf[u]={workerModule:is({name:u,workerId:u,dependencies:[ph,Qi],init(h,d){const g=h().javascript.generate;return function(..._){const p=d();return{textureData:g(..._),timing:d()-p}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(s,e,t,i,n,r).then(({textureData:h,timing:d})=>{const g=Qi(),_=new Uint8Array(h.length*4);for(let p=0;p<h.length;p++)_[p*4+c]=h[p];return Ka.webglUtils.renderImageData(a,_,o,l,s,e,1<<3-c),d+=Qi()-g,--f.requests===0&&(f.idleTimer=setTimeout(()=>{lx(u)},Px)),{timing:d}})}function Ux(s){s._warm||(Ka.webgl.isSupported(s),s._warm=!0)}const Lx=Ka.webglUtils.resizeWebGLCanvasWithoutClearing,Lr={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048,useWorker:!0},Ix=new Ke;function Dr(){return(self.performance||Date).now()}const af=Object.create(null);function Fx(s,e){s=Ox({},s);const t=Dr(),{defaultFontURL:i}=Lr,n=[];if(i&&n.push({label:"default",src:of(i)}),s.font&&n.push({label:"user",src:of(s.font)}),s.font=n,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||Lr.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||Lr.unicodeFontsURL,s.colorRanges!=null){let d={};for(let g in s.colorRanges)if(s.colorRanges.hasOwnProperty(g)){let _=s.colorRanges[g];typeof _!="number"&&(_=Ix.set(_).getHex()),d[g]=_}s.colorRanges=d}Object.freeze(s);const{textureWidth:r,sdfExponent:a}=Lr,{sdfGlyphSize:o}=s,l=r/o*4;let c=af[o];if(!c){const d=document.createElement("canvas");d.width=r,d.height=o*256/l,c=af[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:d,sdfTexture:new It(d,void 0,void 0,void 0,Lt,Lt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,Nx(c)}const{sdfTexture:u,sdfCanvas:f}=c;xh(s).then(d=>{const{glyphIds:g,glyphFontIndices:_,fontData:p,glyphPositions:m,fontSize:S,timings:M}=d,v=[],b=new Float32Array(g.length*4);let w=0,E=0;const T=Dr(),x=p.map(L=>{let B=c.glyphsByFont.get(L.src);return B||c.glyphsByFont.set(L.src,B=new Map),B});g.forEach((L,B)=>{const I=_[B],{src:X,unitsPerEm:H}=p[I];let q=x[I].get(L);if(!q){const{path:N,pathBounds:O}=d.glyphData[X][L],Q=Math.max(O[2]-O[0],O[3]-O[1])/o*(Lr.sdfMargin*o+.5),Y=c.glyphCount++,ne=[O[0]-Q,O[1]-Q,O[2]+Q,O[3]+Q];x[I].set(L,q={path:N,atlasIndex:Y,sdfViewBox:ne}),v.push(q)}const{sdfViewBox:W}=q,F=m[E++],V=m[E++],Z=S/H;b[w++]=F+W[0]*Z,b[w++]=V+W[1]*Z,b[w++]=F+W[2]*Z,b[w++]=V+W[3]*Z,g[B]=q.atlasIndex}),M.quads=(M.quads||0)+(Dr()-T);const y=Dr();M.sdf={};const D=f.height,P=Math.ceil(c.glyphCount/l),U=Math.pow(2,Math.ceil(Math.log2(P*o)));U>D&&(console.info(`Increasing SDF texture size ${D}->${U}`),Lx(f,r,U),u.dispose()),Promise.all(v.map(L=>gh(L,c,s.gpuAccelerateSDF).then(({timing:B})=>{M.sdf[L.atlasIndex]=B}))).then(()=>{v.length&&!c.contextLost&&(vh(c),u.needsUpdate=!0),M.sdfTotal=Dr()-y,M.total=Dr()-t,e(Object.freeze({parameters:s,sdfTexture:u,sdfGlyphSize:o,sdfExponent:a,glyphBounds:b,glyphAtlasIndices:g,glyphColors:d.glyphColors,caretPositions:d.caretPositions,chunkedBounds:d.chunkedBounds,ascender:d.ascender,descender:d.descender,lineHeight:d.lineHeight,capHeight:d.capHeight,xHeight:d.xHeight,topBaseline:d.topBaseline,blockBounds:d.blockBounds,visibleBounds:d.visibleBounds,timings:d.timings}))})}),Promise.resolve().then(()=>{c.contextLost||Ux(f)})}function gh({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},a){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=Lr,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(o/i)*i,h=Math.floor(u/(o/i))*i,d=e%4;return Ax(i,i,s,t,c,l,n,f,h,d,a)}function Nx(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const i=[];s.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(gh(r,s,!0))})}),Promise.all(i).then(()=>{vh(s),s.sdfTexture.needsUpdate=!0})})}function Ox(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let xa;function of(s){return xa||(xa=typeof document>"u"?{}:document.createElement("a")),xa.href=s,xa.href}function vh(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:i,height:n}=e,r=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==i*n*4)&&(a=new Uint8Array(i*n*4),t.image={width:i,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,a)}}const Bx=is({name:"Typesetter",dependencies:[bx,Tx,ux],init(s,e,t){return s(e,t())}}),xh=is({name:"Typesetter",dependencies:[Bx],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}});xh.onMainThread;const lf={};function kx(s){let e=lf[s];return e||(e=lf[s]=new fr(1,1,s,s).translate(.5,.5,0)),e}const zx="aTroikaGlyphBounds",cf="aTroikaGlyphIndex",Gx="aTroikaGlyphColor";class Vx extends Gv{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new qa,this.boundingBox=new ur}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=kx(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){this.updateAttributeData(zx,e,4),this.updateAttributeData(cf,t,1),this.updateAttributeData(Gx,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:a,max:o,sin:l,cos:c}=Math,u=n/2,f=n*2,h=Math.abs(t),d=e[0]/h,g=e[2]/h,_=r((d+u)/f)!==r((g+u)/f)?-h:a(l(d)*h,l(g)*h),p=r((d-u)/f)!==r((g-u)/f)?h:o(l(d)*h,l(g)*h),m=r((d+n)/f)!==r((g+n)/f)?h*2:o(h-c(d)*h,h-c(g)*h);i.min.set(_,e[1],t<0?-m:0),i.max.set(p,e[3],t<0?0:m)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(cf).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,i){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new Uv(t,i)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const Hx=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Wx=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Xx=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Yx=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function qx(s){const e=Vl(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Je},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ht(0,0,0,0)},uTroikaClipRect:{value:new ht(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Je},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ke},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new qe},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Hx,vertexTransform:Wx,fragmentDefs:Xx,fragmentColorTransform:Yx,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(mh,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const vc=new pc({color:16777215,side:Nn,transparent:!0}),uf=8421504,ff=new gt,Sa=new te,Vo=new te,vs=[],jx=new te,Ho="+x+y";function hf(s){return Array.isArray(s)?s[0]:s}let Sh=()=>{const s=new mn(new fr(1,1),vc);return Sh=()=>s,s},Mh=()=>{const s=new mn(new fr(1,1,32,1),vc);return Mh=()=>s,s};const Kx={type:"syncstart"},Zx={type:"synccomplete"},yh=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Jx=yh.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Eh extends mn{constructor(){const e=new Vx;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=uf,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Ho,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Kx),Fx({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(Zx),e&&e()})))}onBeforeRender(e,t,i,n,r,a){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return qx(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=vc.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.hasOutline()){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return hf(this.material).getDepthMaterial()}get customDistanceMaterial(){return hf(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;i.uTroikaSDFTexture.value=o,i.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,f=0,h,d,g,_=0,p=0;if(t){let{outlineWidth:S,outlineOffsetX:M,outlineOffsetY:v,outlineBlur:b,outlineOpacity:w}=this;c=this._parsePercent(S)||0,u=Math.max(0,this._parsePercent(b)||0),h=w,_=this._parsePercent(M)||0,p=this._parsePercent(v)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(g=this.strokeColor,i.uTroikaStrokeColor.value.set(g??uf),d=this.strokeOpacity,d==null&&(d=1)),h=this.fillOpacity;i.uTroikaEdgeOffset.value=c,i.uTroikaPositionOffset.value.set(_,p),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=f,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=h??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)i.uTroikaClipRect.value.fromArray(m);else{const S=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-S,l[1]-S,l[2]+S,l[3]+S)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Ke;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let a=this.orientation||Ho;if(a!==e._orientation){let o=i.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==Ho&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,f,h]=l;Sa.set(0,0,0)[u]=c==="-"?1:-1,Vo.set(0,0,0)[h]=f==="-"?-1:1,ff.lookAt(jx,Sa.cross(Vo),Vo),o.setFromMatrix4(ff)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Je){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new Je){return Sa.copy(e),this.localPositionToTextCoords(this.worldToLocal(Sa),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,a=n?Mh():Sh(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let f=r[0]+c.getX(u)*(r[2]-r[0]);const h=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;n&&(d=n-Math.cos(f/n)*n,f=Math.sin(f/n)*n),l.setXYZ(u,f,h,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,vs.length=0,a.raycast(e,vs);for(let u=0;u<vs.length;u++)vs[u].object=this,t.push(vs[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Jx.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}yh.forEach(s=>{const e="_private_"+s;Object.defineProperty(Eh.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new ur;new Ke;var $x=`uniform float progress;\r
uniform float direction;

#define PI 3.1415926538

vec3 rotateAxis(vec3 p, vec3 axis, float angle) {\r
    return mix(dot(axis, p) * axis, p, cos(angle)) + cross(axis, p) * sin(angle);\r
}

void main() {\r
    vec3 pos = position;

    float twirlPeriod = sin(progress * PI * 2.);

    float rotateAngle = -direction * pow(sin(progress * PI), 1.5) * PI * 2.;

    float twirlAngle = -sin(uv.x - .5) * pow(twirlPeriod, 2.0) * -4.;

    float twirlRotate = rotateAngle + twirlAngle;

    pos = rotateAxis(pos, vec3(1., 0., 0.), twirlRotate);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\r
}`;function ri(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Th(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Kr={duration:.5,overwrite:!1,delay:0},xc,Gt,ut,wn=1e8,ct=1/wn,Wl=Math.PI*2,Qx=Wl/4,eS=0,bh=Math.sqrt,tS=Math.cos,nS=Math.sin,Rt=function(e){return typeof e=="string"},mt=function(e){return typeof e=="function"},di=function(e){return typeof e=="number"},Sc=function(e){return typeof e>"u"},Kn=function(e){return typeof e=="object"},tn=function(e){return e!==!1},Mc=function(){return typeof window<"u"},Ma=function(e){return mt(e)||Rt(e)},Ah=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,Xl=/(?:-?\.?\d|\.)+/gi,wh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Wo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Rh=/[+-]=-?[.\d]+/,Ch=/[^,'"\[\]\s]+/gi,iS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ft,Vn,Yl,yc,Sn={},Oa={},Ph,Dh=function(e){return(Oa=ar(e,Sn))&&an},Ec=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ds=function(e,t){return!t&&console.warn(e)},Uh=function(e,t){return e&&(Sn[e]=t)&&Oa&&(Oa[e]=t)||Sn},Us=function(){return 0},rS={suppressEvents:!0,isStart:!0,kill:!1},Da={suppressEvents:!0,kill:!1},sS={suppressEvents:!0},Tc={},Di=[],ql={},Lh,dn={},Xo={},df=30,Ua=[],bc="",Ac=function(e){var t=e[0],i,n;if(Kn(t)||mt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Ua.length;n--&&!Ua[n].targetTest(t););i=Ua[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new id(e[n],i)))||e.splice(n,1);return e},er=function(e){return e._gsap||Ac(Rn(e))[0]._gsap},Ih=function(e,t,i){return(i=e[t])&&mt(i)?e[t]():Sc(i)&&e.getAttribute&&e.getAttribute(t)||i},nn=function(e,t){return(e=e.split(",")).forEach(t)||e},_t=function(e){return Math.round(e*1e5)/1e5||0},wt=function(e){return Math.round(e*1e7)/1e7||0},zr=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},aS=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Ba=function(){var e=Di.length,t=Di.slice(0),i,n;for(ql={},Di.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Fh=function(e,t,i,n){Di.length&&!Gt&&Ba(),e.render(t,i,Gt&&t<0&&(e._initted||e._startAt)),Di.length&&!Gt&&Ba()},Nh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ch).length<2?t:Rt(e)?e.trim():e},Oh=function(e){return e},Cn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},oS=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},ar=function(e,t){for(var i in t)e[i]=t[i];return e},pf=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Kn(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},ka=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},As=function(e){var t=e.parent||ft,i=e.keyframes?oS(Vt(e.keyframes)):Cn;if(tn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},lS=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Bh=function(e,t,i,n,r){var a=e[n],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},Za=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,a=t._next;r?r._next=a:e[i]===t&&(e[i]=a),a?a._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Ii=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},tr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},cS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},jl=function(e,t,i,n){return e._startAt&&(Gt?e._startAt.revert(Da):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},uS=function s(e){return!e||e._ts&&s(e.parent)},mf=function(e){return e._repeat?Zr(e._tTime,e=e.duration()+e._rDelay)*e:0},Zr=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},za=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ja=function(e){return e._end=wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},$a=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=wt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ja(e),i._dirty||tr(i,e)),e},kh=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=za(e.rawTime(),t),(!t._dur||Vs(0,t.totalDuration(),i)-t._tTime>ct)&&t.render(i,!0)),tr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ct}},Wn=function(e,t,i,n){return t.parent&&Ii(t),t._start=wt((di(i)?i:i||e!==ft?En(e,i,t):e._time)+t._delay),t._end=wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Bh(e,t,"_first","_last",e._sort?"_start":0),Kl(t)||(e._recent=t),n||kh(e,t),e._ts<0&&$a(e,e._tTime),e},zh=function(e,t){return(Sn.ScrollTrigger||Ec("scrollTrigger",t))&&Sn.ScrollTrigger.create(t,e)},Gh=function(e,t,i,n,r){if(Rc(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!Gt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Lh!==pn.frame)return Di.push(e),e._lazy=[r,n],1},fS=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Kl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hS=function(e,t,i,n){var r=e.ratio,a=t<0||!t&&(!e._start&&fS(e)&&!(!e._initted&&Kl(e))||(e._ts<0||e._dp._ts<0)&&!Kl(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Vs(0,e._tDur,t),u=Zr(l,o),e._yoyo&&u&1&&(a=1-a),u!==Zr(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Gt||n||e._zTime===ct||!t&&e._zTime){if(!e._initted&&Gh(e,t,n,i,l))return;for(f=e._zTime,e._zTime=t||(i?ct:0),i||(i=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&jl(e,t,i,!0),e._onUpdate&&!i&&_n(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&_n(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ii(e,1),!i&&!Gt&&(_n(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},dS=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Jr=function(e,t,i,n){var r=e._repeat,a=wt(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:wt(a*(r+1)+e._rDelay*r):a,o>0&&!n&&$a(e,e._tTime=e._tDur*o),e.parent&&Ja(e),i||tr(e.parent,e),e},_f=function(e){return e instanceof Xt?tr(e):Jr(e,e._dur)},pS={_start:0,endTime:Us,totalDuration:Us},En=function s(e,t,i){var n=e.labels,r=e._recent||pS,a=e.duration()>=wn?r.endTime(!1):e._dur,o,l,c;return Rt(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(Vt(i)?i[0]:i).totalDuration()),o>1?s(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},ws=function(e,t,i){var n=di(t[1]),r=(n?2:1)+(e<2?0:1),a=t[r],o,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=tn(l.vars.inherit)&&l.parent;a.immediateRender=tn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Mt(t[0],a,t[r+1])},Oi=function(e,t){return e||e===0?t(e):t},Vs=function(e,t,i){return i<e?e:i>t?t:i},zt=function(e,t){return!Rt(e)||!(t=iS.exec(e))?"":t[1]},mS=function(e,t,i){return Oi(i,function(n){return Vs(e,t,n)})},Zl=[].slice,Vh=function(e,t){return e&&Kn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Kn(e[0]))&&!e.nodeType&&e!==Vn},_S=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Rt(n)&&!t||Vh(n,1)?(r=i).push.apply(r,Rn(n)):i.push(n)})||i},Rn=function(e,t,i){return ut&&!t&&ut.selector?ut.selector(e):Rt(e)&&!i&&(Yl||!$r())?Zl.call((t||yc).querySelectorAll(e),0):Vt(e)?_S(e,i):Vh(e)?Zl.call(e,0):e?[e]:[]},Jl=function(e){return e=Rn(e)[0]||Ds("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Rn(t,i.querySelectorAll?i:i===e?Ds("Invalid scope")||yc.createElement("div"):e)}},Hh=function(e){return e.sort(function(){return .5-Math.random()})},Wh=function(e){if(mt(e))return e;var t=Kn(e)?e:{each:e},i=nr(t.ease),n=t.from||0,r=parseFloat(t.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,u=n,f=n;return Rt(n)?u=f={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(u=n[0],f=n[1]),function(h,d,g){var _=(g||t).length,p=a[_],m,S,M,v,b,w,E,T,x;if(!p){if(x=t.grid==="auto"?0:(t.grid||[1,wn])[1],!x){for(E=-wn;E<(E=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(p=a[_]=[],m=l?Math.min(x,_)*u-.5:n%x,S=x===wn?0:l?_*f/x-.5:n/x|0,E=0,T=wn,w=0;w<_;w++)M=w%x-m,v=S-(w/x|0),p[w]=b=c?Math.abs(c==="y"?v:M):bh(M*M+v*v),b>E&&(E=b),b<T&&(T=b);n==="random"&&Hh(p),p.max=E-T,p.min=T,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(n==="edges"?-1:1),p.b=_<0?r-_:r,p.u=zt(t.amount||t.each)||0,i=i&&_<0?ed(i):i}return _=(p[h]-p.min)/p.max||0,wt(p.b+(i?i(_):_)*p.v)+p.u}},$l=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=wt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(di(i)?0:zt(i))}},Xh=function(e,t){var i=Vt(e),n,r;return!i&&Kn(e)&&(n=i=e.radius||wn,e.values?(e=Rn(e.values),(r=!di(e[0]))&&(n*=n)):e=$l(e.increment)),Oi(t,i?mt(e)?function(a){return r=e(a),Math.abs(r-a)<=n?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=wn,u=0,f=e.length,h,d;f--;)r?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!n||c<=n?e[u]:a,r||u===a||di(a)?u:u+zt(a)}:$l(e))},Yh=function(e,t,i,n){return Oi(Vt(e)?!t:i===!0?!!(i=0):!n,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},gS=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,a){return a(r)},n)}},vS=function(e,t){return function(i){return e(parseFloat(i))+(t||zt(i))}},xS=function(e,t,i){return jh(e,t,0,1,i)},qh=function(e,t,i){return Oi(i,function(n){return e[~~t(n)]})},SS=function s(e,t,i){var n=t-e;return Vt(e)?qh(e,s(0,e.length),t):Oi(i,function(r){return(n+(r-e)%n)%n+e})},MS=function s(e,t,i){var n=t-e,r=n*2;return Vt(e)?qh(e,s(0,e.length-1),t):Oi(i,function(a){return a=(r+(a-e)%r)%r||0,e+(a>n?r-a:a)})},Ls=function(e){for(var t=0,i="",n,r,a,o;~(n=e.indexOf("random(",t));)a=e.indexOf(")",n),o=e.charAt(n+7)==="[",r=e.substr(n+7,a-n-7).match(o?Ch:Xl),i+=e.substr(t,n-t)+Yh(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return i+e.substr(t,e.length-t)},jh=function(e,t,i,n,r){var a=t-e,o=n-i;return Oi(r,function(l){return i+((l-e)/a*o||0)})},yS=function s(e,t,i,n){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=Rt(e),o={},l,c,u,f,h;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(s(e[c-1],e[c]));f--,r=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},i=t}else n||(e=ar(Vt(e)?[]:{},e));if(!u){for(l in t)wc.call(o,e,l,"get",t[l]);r=function(g){return Dc(g,o)||(a?e.p:e)}}}return Oi(i,r)},gf=function(e,t,i){var n=e.labels,r=wn,a,o,l;for(a in n)o=n[a]-t,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},_n=function(e,t,i){var n=e.vars,r=n[t],a=ut,o=e._ctx,l,c,u;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&Di.length&&Ba(),o&&(ut=o),u=l?r.apply(c,l):r.call(c),ut=a,u},ys=function(e){return Ii(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gt),e.progress()<1&&_n(e,"onInterrupt"),e},Nr,Kh=[],Zh=function(e){if(e)if(e=!e.name&&e.default||e,Mc()||e.headless){var t=e.name,i=mt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:Us,render:Dc,add:wc,kill:BS,modifier:OS,rawVars:0},a={targetTest:0,get:0,getSetter:Pc,aliases:{},register:0};if($r(),e!==n){if(dn[t])return;Cn(n,Cn(ka(e,r),a)),ar(n.prototype,ar(r,ka(e,a))),dn[n.prop=t]=n,e.targetTest&&(Ua.push(n),Tc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Uh(t,n),e.register&&e.register(an,n,rn)}else Kh.push(e)},ot=255,Es={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},Yo=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ot+.5|0},Jh=function(e,t,i){var n=e?di(e)?[e>>16,e>>8&ot,e&ot]:0:Es.black,r,a,o,l,c,u,f,h,d,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Es[e])n=Es[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&ot,n&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(Xl),!t)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,n.length>3&&(n[3]*=1),n[0]=Yo(l+1/3,r,a),n[1]=Yo(l,r,a),n[2]=Yo(l-1/3,r,a);else if(~e.indexOf("="))return n=e.match(wh),i&&n.length<4&&(n[3]=1),n}else n=e.match(Xl)||Es.transparent;n=n.map(Number)}return t&&!g&&(r=n[0]/ot,a=n[1]/ot,o=n[2]/ot,f=Math.max(r,a,o),h=Math.min(r,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===r?(a-o)/d+(a<o?6:0):f===a?(o-r)/d+2:(r-a)/d+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},$h=function(e){var t=[],i=[],n=-1;return e.split(Ui).forEach(function(r){var a=r.match(Fr)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},vf=function(e,t,i){var n="",r=(e+n).match(Ui),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!r)return e;if(r=r.map(function(h){return(h=Jh(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=$h(e),l=i.c,l.join(n)!==u.c.join(n)))for(c=e.replace(Ui,"1").split(Fr),f=c.length-1;o<f;o++)n+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=e.split(Ui),f=c.length-1;o<f;o++)n+=c[o]+r[o];return n+c[f]},Ui=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Es)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),ES=/hsl[a]?\(/,Qh=function(e){var t=e.join(" "),i;if(Ui.lastIndex=0,Ui.test(t))return i=ES.test(t),e[1]=vf(e[1],i),e[0]=vf(e[0],i,$h(e[1])),!0},Is,pn=function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,a=r,o=[],l,c,u,f,h,d,g=function _(p){var m=s()-n,S=p===!0,M,v,b,w;if((m>e||m<0)&&(i+=m-t),n+=m,b=n-i,M=b-a,(M>0||S)&&(w=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,a+=M+(M>=r?4:r-M),v=1),S||(l=c(_)),v)for(d=0;d<o.length;d++)o[d](b,h,w,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Ph&&(!Yl&&Mc()&&(Vn=Yl=window,yc=Vn.document||{},Sn.gsap=an,(Vn.gsapVersions||(Vn.gsapVersions=[])).push(an.version),Dh(Oa||Vn.GreenSockGlobals||!Vn.gsap&&Vn||{}),Kh.forEach(Zh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},Is=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Is=0,c=Us},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),a=f.time*1e3+r},add:function(p,m,S){var M=m?function(v,b,w,E){p(v,b,w,E),f.remove(M)}:p;return f.remove(p),o[S?"unshift":"push"](M),$r(),M},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},f}(),$r=function(){return!Is&&pn.wake()},Qe={},TS=/^[\d.\-M][\d.\-,\s]/,bS=/["']/g,AS=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,a=i.length,o,l,c;r<a;r++)l=i[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(bS,"").trim():+c,n=l.substr(o+1).trim();return t},wS=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},RS=function(e){var t=(e+"").split("("),i=Qe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[AS(t[1])]:wS(e).split(",").map(Nh)):Qe._CE&&TS.test(e)?Qe._CE("",e):i},ed=function(e){return function(t){return 1-e(1-t)}},td=function s(e,t){for(var i=e._first,n;i;)i instanceof Xt?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},nr=function(e,t){return e&&(mt(e)?e:Qe[e]||RS(e))||t},hr=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},a;return nn(e,function(o){Qe[o]=Sn[o]=r,Qe[a=o.toLowerCase()]=i;for(var l in r)Qe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Qe[o+"."+l]=r[l]}),r},nd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},qo=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),a=r/Wl*(Math.asin(1/n)||0),o=function(u){return u===1?1:n*Math.pow(2,-10*u)*nS((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:nd(o);return r=Wl/r,l.config=function(c,u){return s(e,c,u)},l},jo=function s(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:nd(i);return n.config=function(r){return s(e,r)},n};nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;hr(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Qe.Linear.easeNone=Qe.none=Qe.Linear.easeIn;hr("Elastic",qo("in"),qo("out"),qo());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(o){return o<t?s*o*o:o<i?s*Math.pow(o-1.5/e,2)+.75:o<n?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};hr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);hr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});hr("Circ",function(s){return-(bh(1-s*s)-1)});hr("Sine",function(s){return s===1?1:-tS(s*Qx)+1});hr("Back",jo("in"),jo("out"),jo());Qe.SteppedEase=Qe.steps=Sn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,a=1-ct;return function(o){return((n*Vs(0,a,o)|0)+r)*i}}};Kr.ease=Qe["quad.out"];nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return bc+=s+","+s+"Params,"});var id=function(e,t){this.id=eS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ih,this.set=t?t.getSetter:Pc},Fs=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Jr(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),Is||pn.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Jr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if($r(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for($a(this,i),!r._dp||r.parent||kh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Wn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===ct||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Fh(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+mf(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+mf(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?Zr(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?za(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ct?0:this._rts,this.totalTime(Vs(-Math.abs(this._delay),this._tDur,r),n!==!1),Ja(this),cS(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($r(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Wn(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(tn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?za(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=sS);var n=Gt;return Gt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Gt=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,_f(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,_f(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(En(this,i),tn(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,tn(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-ct)},e.eventCallback=function(i,n,r){var a=this.vars;return arguments.length>1?(n?(a[i]=n,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this;return new Promise(function(r){var a=mt(i)?i:Oh,o=function(){var c=n.then;n.then=null,mt(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=c),r(a),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?o():n._prom=o})},e.kill=function(){ys(this)},s}();Cn(Fs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var Xt=function(s){Th(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=tn(i.sortChildren),ft&&Wn(i.parent||ft,ri(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&zh(ri(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,a){return ws(0,arguments,this),this},t.from=function(n,r,a){return ws(1,arguments,this),this},t.fromTo=function(n,r,a,o){return ws(2,arguments,this),this},t.set=function(n,r,a){return r.duration=0,r.parent=this,As(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Mt(n,r,En(this,a),1),this},t.call=function(n,r,a){return Wn(this,Mt.delayedCall(0,n,r),a)},t.staggerTo=function(n,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Mt(n,a,En(this,l)),this},t.staggerFrom=function(n,r,a,o,l,c,u){return a.runBackwards=1,As(a).immediateRender=tn(a.immediateRender),this.staggerTo(n,r,a,o,l,c,u)},t.staggerFromTo=function(n,r,a,o,l,c,u,f){return o.startAt=a,As(o).immediateRender=tn(o.immediateRender),this.staggerTo(n,r,o,l,c,u,f)},t.render=function(n,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:wt(n),f=this._zTime<0!=n<0&&(this._initted||!c),h,d,g,_,p,m,S,M,v,b,w,E;if(this!==ft&&u>l&&n>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,n+=this._time-o),h=u,v=this._start,M=this._ts,m=!M,f&&(c||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,r,a);if(h=wt(u%p),u===l?(_=this._repeat,h=c):(_=~~(u/p),_&&_===u/p&&(h=c,_--),h>c&&(h=c)),b=Zr(this._tTime,p),!o&&this._tTime&&b!==_&&this._tTime-b*p-this._dur<=0&&(b=_),w&&_&1&&(h=c-h,E=1),_!==b&&!this._lock){var T=w&&b&1,x=T===(w&&_&1);if(_<b&&(T=!T),o=T?0:u%c?c:u,this._lock=1,this.render(o||(E?0:wt(_*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&_n(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=T?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;td(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=dS(this,wt(o),wt(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&!r&&!_&&(_n(this,"onStart"),this._tTime!==u))return this;if(h>=o&&n>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(n,r,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,r,a),h!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=-ct);break}}d=g}else{d=this._last;for(var y=n<0?n:h;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(n,r,a);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,r,a||Gt&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=y?-ct:ct);break}}d=g}}if(S&&!r&&(this.pause(),S.render(h>=o?0:-ct)._zTime=h>=o?1:-1,this._ts))return this._start=v,Ja(this),this.render(n,r,a);this._onUpdate&&!r&&_n(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ii(this,1),!r&&!(n<0&&!o)&&(u||o||!l)&&(_n(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var a=this;if(di(r)||(r=En(this,r,n)),!(n instanceof Fs)){if(Vt(n))return n.forEach(function(o){return a.add(o,r)}),this;if(Rt(n))return this.addLabel(n,r);if(mt(n))n=Mt.delayedCall(0,n);else return this}return this!==n?Wn(this,n,r):this},t.getChildren=function(n,r,a,o){n===void 0&&(n=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-wn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Mt?r&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===n)return r[a]},t.remove=function(n){return Rt(n)?this.removeLabel(n):mt(n)?this.killTweensOf(n):(Za(this,n),n===this._recent&&(this._recent=this._last),tr(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wt(pn.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=En(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,a){var o=Mt.delayedCall(0,r||Us,a);return o.data="isPause",this._hasPause=1,Wn(this,o,En(this,n))},t.removePause=function(n){var r=this._first;for(n=En(this,n);r;)r._start===n&&r.data==="isPause"&&Ii(r),r=r._next},t.killTweensOf=function(n,r,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)Ai!==o[l]&&o[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var a=[],o=Rn(n),l=this._first,c=di(r),u;l;)l instanceof Mt?aS(l._targets,o)&&(c?(!Ai||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(n,r){r=r||{};var a=this,o=En(a,n),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Mt.to(a,Cn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ct,onStart:function(){if(a.pause(),!d){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Jr(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(n,r,a){return this.tweenTo(r,Cn({startAt:{time:En(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),gf(this,En(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),gf(this,En(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(n,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=n);return tr(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),tr(this)},t.totalDuration=function(n){var r=0,a=this,o=a._last,l=wn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Wn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Jr(a,a===ft&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(ft._ts&&(Fh(ft,za(n,ft)),Lh=pn.frame),pn.frame>=df){df+=xn.autoSleep||120;var r=ft._first;if((!r||!r._ts)&&xn.autoSleep&&pn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||pn.sleep()}}},e}(Fs);Cn(Xt.prototype,{_lock:0,_hasPause:0,_forcing:0});var CS=function(e,t,i,n,r,a,o){var l=new rn(this._pt,e,t,0,1,cd,null,r),c=0,u=0,f,h,d,g,_,p,m,S;for(l.b=i,l.e=n,i+="",n+="",(m=~n.indexOf("random("))&&(n=Ls(n)),a&&(S=[i,n],a(S,e,t),i=S[0],n=S[1]),h=i.match(Wo)||[];f=Wo.exec(n);)g=f[0],_=n.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?zr(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Wo.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(Rh.test(n)||m)&&(l.e=0),this._pt=l,l},wc=function(e,t,i,n,r,a,o,l,c,u){mt(n)&&(n=n(r||0,e,a));var f=e[t],h=i!=="get"?i:mt(f)?c?e[t.indexOf("set")||!mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=mt(f)?c?IS:od:Cc,g;if(Rt(n)&&(~n.indexOf("random(")&&(n=Ls(n)),n.charAt(1)==="="&&(g=zr(h,n)+(zt(h)||0),(g||g===0)&&(n=g))),!u||h!==n||Ql)return!isNaN(h*n)&&n!==""?(g=new rn(this._pt,e,t,+h||0,n-(h||0),typeof f=="boolean"?NS:ld,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&Ec(t,n),CS.call(this,e,t,h,n,d,l||xn.stringFilter,c))},PS=function(e,t,i,n,r){if(mt(e)&&(e=Rs(e,r,t,i,n)),!Kn(e)||e.style&&e.nodeType||Vt(e)||Ah(e))return Rt(e)?Rs(e,r,t,i,n):e;var a={},o;for(o in e)a[o]=Rs(e[o],r,t,i,n);return a},rd=function(e,t,i,n,r,a){var o,l,c,u;if(dn[e]&&(o=new dn[e]).init(r,o.rawVars?t[e]:PS(t[e],n,r,a,i),i,n,a)!==!1&&(i._pt=l=new rn(i._pt,r,e,0,1,o.render,o,0,o.priority),i!==Nr))for(c=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ai,Ql,Rc=function s(e,t,i){var n=e.vars,r=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.runBackwards,f=n.yoyoEase,h=n.keyframes,d=n.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,M=e._overwrite==="auto"&&!xc,v=e.timeline,b,w,E,T,x,y,D,P,U,L,B,I,X;if(v&&(!h||!r)&&(r="none"),e._ease=nr(r,Kr.ease),e._yEase=f?ed(nr(f===!0?r:f,Kr.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!n.runBackwards,!v||h&&!n.stagger){if(P=p[0]?er(p[0]).harness:0,I=P&&n[P.prop],b=ka(n,Tc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?Da:rS),_._lazy=0),a){if(Ii(e._startAt=Mt.set(p,Cn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&tn(l),startAt:null,delay:0,onUpdate:c&&function(){return _n(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt||!o&&!d)&&e._startAt.revert(Da),o&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),E=Cn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&tn(l),immediateRender:o,stagger:0,parent:m},b),I&&(E[P.prop]=I),Ii(e._startAt=Mt.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt?e._startAt.revert(Da):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&tn(l)||l&&!g,w=0;w<p.length;w++){if(x=p[w],D=x._gsap||Ac(p)[w]._gsap,e._ptLookup[w]=L={},ql[D.id]&&Di.length&&Ba(),B=S===p?w:S.indexOf(x),P&&(U=new P).init(x,I||b,e,B,S)!==!1&&(e._pt=T=new rn(e._pt,x,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(H){L[H]=T}),U.priority&&(y=1)),!P||I)for(E in b)dn[E]&&(U=rd(E,b,e,B,x,S))?U.priority&&(y=1):L[E]=T=wc.call(e,x,E,"get",b[E],B,S,0,n.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),M&&e._pt&&(Ai=e,ft.killTweensOf(x,L,e.globalTime(t)),X=!e.parent,Ai=0),e._pt&&l&&(ql[D.id]=1)}y&&ud(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,h&&t<=0&&v.render(wn,!0,!0)},DS=function(e,t,i,n,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ql=1,e.vars[t]="+=0",Rc(e,o),Ql=0,l?Ds(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(n||n===0)&&!r?n:u.s+(n||0)+a*u.c,u.c=i-u.s,f.e&&(f.e=_t(i)+zt(f.e)),f.b&&(f.b=u.s+zt(f.b))},US=function(e,t){var i=e[0]?er(e[0]).harness:0,n=i&&i.aliases,r,a,o,l;if(!n)return t;r=ar({},t);for(a in n)if(a in r)for(l=n[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},LS=function(e,t,i,n){var r=t.ease||n||"power1.inOut",a,o;if(Vt(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Rs=function(e,t,i,n,r){return mt(e)?e.call(t,i,n,r):Rt(e)&&~e.indexOf("random(")?Ls(e):e},sd=bc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ad={};nn(sd+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return ad[s]=1});var Mt=function(s){Th(e,s);function e(i,n,r,a){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=s.call(this,a?n:As(n))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=n.parent||ft,M=(Vt(i)||Ah(i)?di(i[0]):"length"in n)?[i]:Rn(i),v,b,w,E,T,x,y,D;if(o._targets=M.length?Ac(M):Ds("GSAP target "+i+" not found. https://gsap.com",!xn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||h||Ma(c)||Ma(u)){if(n=o.vars,v=o.timeline=new Xt({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:M}),v.kill(),v.parent=v._dp=ri(o),v._start=0,h||Ma(c)||Ma(u)){if(E=M.length,y=h&&Wh(h),Kn(h))for(T in h)~sd.indexOf(T)&&(D||(D={}),D[T]=h[T]);for(b=0;b<E;b++)w=ka(n,ad),w.stagger=0,m&&(w.yoyoEase=m),D&&ar(w,D),x=M[b],w.duration=+Rs(c,ri(o),b,x,M),w.delay=(+Rs(u,ri(o),b,x,M)||0)-o._delay,!h&&E===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(x,w,y?y(b,x,M):0),v._ease=Qe.none;v.duration()?c=u=0:o.timeline=0}else if(g){As(Cn(v.vars.defaults,{ease:"none"})),v._ease=nr(g.ease||n.ease||"none");var P=0,U,L,B;if(Vt(g))g.forEach(function(I){return v.to(M,I,">")}),v.duration();else{w={};for(T in g)T==="ease"||T==="easeEach"||LS(T,g[T],w,g.easeEach);for(T in w)for(U=w[T].sort(function(I,X){return I.t-X.t}),P=0,b=0;b<U.length;b++)L=U[b],B={ease:L.e,duration:(L.t-(b?U[b-1].t:0))/100*c},B[T]=L.v,v.to(M,B,P),P+=B.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!xc&&(Ai=ri(o),ft.killTweensOf(M),Ai=0),Wn(S,ri(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(f||!c&&!g&&o._start===wt(S._time)&&tn(f)&&uS(ri(o))&&S.data!=="nested")&&(o._tTime=-ct,o.render(Math.max(0,-u)||0)),p&&zh(ri(o),p),o}var t=e.prototype;return t.render=function(n,r,a){var o=this._time,l=this._tDur,c=this._dur,u=n<0,f=n>l-ct&&!u?l:n<ct?0:n,h,d,g,_,p,m,S,M,v;if(!c)hS(this,n,r,a);else if(f!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+n,r,a);if(h=wt(f%_),f===l?(g=this._repeat,h=c):(g=~~(f/_),g&&g===wt(f/_)&&(h=c,g--),h>c&&(h=c)),m=this._yoyo&&g&1,m&&(v=this._yEase,h=c-h),p=Zr(this._tTime,_),h===o&&!a&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(M&&this._yEase&&td(M,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(wt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Gh(this,u?n:h,a,r,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(n,r,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(v||this._ease)(h/c),this._from&&(this.ratio=S=1-S),h&&!o&&!r&&!g&&(_n(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;M&&M.render(n<0?n:M._dur*M._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(u&&jl(this,n,r,a),_n(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&_n(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&jl(this,n,!0,!0),(n||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ii(this,1),!r&&!(u&&!o)&&(f||o||m)&&(_n(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,a,o,l){Is||pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Rc(this,c),u=this._ease(c/this._dur),DS(this,n,r,a,o,u,c,l)?this.resetTo(n,r,a,o,1):($a(this,0),this.parent||Bh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ys(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Ai&&Ai.vars.overwrite!==!0)._first||ys(this),this.parent&&a!==this.timeline.totalDuration()&&Jr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?Rn(n):o,c=this._ptLookup,u=this._pt,f,h,d,g,_,p,m;if((!r||r==="all")&&lS(o,l))return r==="all"&&(this._pt=0),ys(this);for(f=this._op=this._op||[],r!=="all"&&(Rt(r)&&(_={},nn(r,function(S){return _[S]=1}),r=_),r=US(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],r==="all"?(f[m]=r,g=h,d={}):(d=f[m]=f[m]||{},g=r);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Za(this,p,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ys(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return ws(1,arguments)},e.delayedCall=function(n,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,r,a){return ws(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,a){return ft.killTweensOf(n,r,a)},e}(Fs);Cn(Mt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});nn("staggerTo,staggerFrom,staggerFromTo",function(s){Mt[s]=function(){var e=new Xt,t=Zl.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Cc=function(e,t,i){return e[t]=i},od=function(e,t,i){return e[t](i)},IS=function(e,t,i,n){return e[t](n.fp,i)},FS=function(e,t,i){return e.setAttribute(t,i)},Pc=function(e,t){return mt(e[t])?od:Sc(e[t])&&e.setAttribute?FS:Cc},ld=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},NS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},cd=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Dc=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},OS=function(e,t,i,n){for(var r=this._pt,a;r;)a=r._next,r.p===n&&r.modifier(e,t,i),r=a},BS=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Za(this,t,"_pt"):t.dep||(i=1),t=n;return!i},kS=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},ud=function(e){for(var t=e._pt,i,n,r,a;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=r},rn=function(){function s(t,i,n,r,a,o,l,c,u){this.t=i,this.s=r,this.c=a,this.p=n,this.r=o||ld,this.d=l||this,this.set=c||Cc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=kS,this.m=i,this.mt=r,this.tween=n},s}();nn(bc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Tc[s]=1});Sn.TweenMax=Sn.TweenLite=Mt;Sn.TimelineLite=Sn.TimelineMax=Xt;ft=new Xt({sortChildren:!1,defaults:Kr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});xn.stringFilter=Qh;var ir=[],La={},zS=[],xf=0,GS=0,Ko=function(e){return(La[e]||zS).map(function(t){return t()})},ec=function(){var e=Date.now(),t=[];e-xf>2&&(Ko("matchMediaInit"),ir.forEach(function(i){var n=i.queries,r=i.conditions,a,o,l,c;for(o in n)a=Vn.matchMedia(n[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Ko("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),xf=e,Ko("matchMedia"))},fd=function(){function s(t,i){this.selector=i&&Jl(i),this.data=[],this._r=[],this.isReverted=!1,this.id=GS++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){mt(i)&&(r=n,n=i,i=mt);var a=this,o=function(){var c=ut,u=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=Jl(r)),ut=a,f=n.apply(a,arguments),mt(f)&&a._r.push(f),ut=c,a.selector=u,a.isReverted=!1,f};return a.last=o,i===mt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var n=ut;ut=null,i(this),ut=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof Mt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof Xt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Mt)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=ir.length;a--;)ir[a].id===this.id&&ir.splice(a,1)},e.revert=function(i){this.kill(i||{})},s}(),VS=function(){function s(t){this.contexts=[],this.scope=t,ut&&ut.data.push(this)}var e=s.prototype;return e.add=function(i,n,r){Kn(i)||(i={matches:i});var a=new fd(0,r||this.scope),o=a.conditions={},l,c,u;ut&&!a.selector&&(a.selector=ut.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?u=1:(l=Vn.matchMedia(i[c]),l&&(ir.indexOf(a)<0&&ir.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ec):l.addEventListener("change",ec)));return u&&n(a,function(f){return a.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s}(),Ga={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Zh(n)})},timeline:function(e){return new Xt(e)},getTweensOf:function(e,t){return ft.getTweensOf(e,t)},getProperty:function(e,t,i,n){Rt(e)&&(e=Rn(e)[0]);var r=er(e||{}).get,a=i?Oh:Nh;return i==="native"&&(i=""),e&&(t?a((dn[t]&&dn[t].get||r)(e,t,i,n)):function(o,l,c){return a((dn[o]&&dn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Rn(e),e.length>1){var n=e.map(function(u){return an.quickSetter(u,t,i)}),r=n.length;return function(u){for(var f=r;f--;)n[f](u)}}e=e[0]||{};var a=dn[t],o=er(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Nr._pt=0,f.init(e,i?u+i:u,Nr,0,[e]),f.render(1,f),Nr._pt&&Dc(1,Nr)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var n,r=an.to(e,ar((n={},n[t]="+=0.1",n.paused=!0,n),i||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=nr(e.ease,Kr.ease)),pf(Kr,e||{})},config:function(e){return pf(xn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!dn[o]&&!Sn[o]&&Ds(t+" effect requires "+o+" plugin.")}),Xo[t]=function(o,l,c){return i(Rn(o),Cn(l||{},r),c)},a&&(Xt.prototype[t]=function(o,l,c){return this.add(Xo[t](o,Kn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Qe[e]=nr(t)},parseEase:function(e,t){return arguments.length?nr(e,t):Qe},getById:function(e){return ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Xt(e),n,r;for(i.smoothChildTiming=tn(e.smoothChildTiming),ft.remove(i),i._dp=0,i._time=i._tTime=ft._time,n=ft._first;n;)r=n._next,(t||!(!n._dur&&n instanceof Mt&&n.vars.onComplete===n._targets[0]))&&Wn(i,n,n._start-n._delay),n=r;return Wn(ft,i,0),i},context:function(e,t){return e?new fd(e,t):ut},matchMedia:function(e){return new VS(e)},matchMediaRefresh:function(){return ir.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||ec()},addEventListener:function(e,t){var i=La[e]||(La[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=La[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:SS,wrapYoyo:MS,distribute:Wh,random:Yh,snap:Xh,normalize:xS,getUnit:zt,clamp:mS,splitColor:Jh,toArray:Rn,selector:Jl,mapRange:jh,pipe:gS,unitize:vS,interpolate:yS,shuffle:Hh},install:Dh,effects:Xo,ticker:pn,updateRoot:Xt.updateRoot,plugins:dn,globalTimeline:ft,core:{PropTween:rn,globals:Uh,Tween:Mt,Timeline:Xt,Animation:Fs,getCache:er,_removeLinkedListItem:Za,reverting:function(){return Gt},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return xc=e}}};nn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ga[s]=Mt[s]});pn.add(Xt.updateRoot);Nr=Ga.to({},{duration:0});var HS=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},WS=function(e,t){var i=e._targets,n,r,a;for(n in t)for(r=i.length;r--;)a=e._ptLookup[r][n],a&&(a=a.d)&&(a._pt&&(a=HS(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[r],n))},Zo=function(e,t){return{name:e,rawVars:1,init:function(n,r,a){a._onInit=function(o){var l,c;if(Rt(r)&&(l={},nn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}WS(o,r)}}}},an=Ga.registerPlugin({name:"attr",init:function(e,t,i,n,r){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],n,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Gt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Zo("roundProps",$l),Zo("modifiers"),Zo("snap",Xh))||Ga;Mt.version=Xt.version=an.version="3.12.5";Ph=1;Mc()&&$r();Qe.Power0;Qe.Power1;Qe.Power2;Qe.Power3;Qe.Power4;Qe.Linear;Qe.Quad;Qe.Cubic;Qe.Quart;Qe.Quint;Qe.Strong;Qe.Elastic;Qe.Back;Qe.SteppedEase;Qe.Bounce;Qe.Sine;Qe.Expo;Qe.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sf,wi,Gr,Uc,$i,Mf,Lc,XS=function(){return typeof window<"u"},pi={},Ki=180/Math.PI,Vr=Math.PI/180,Ur=Math.atan2,yf=1e8,Ic=/([A-Z])/g,YS=/(left|right|width|margin|padding|x)/i,qS=/[\s,\(]\S/,Xn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},tc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},KS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ZS=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},hd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},dd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},JS=function(e,t,i){return e.style[t]=i},$S=function(e,t,i){return e.style.setProperty(t,i)},QS=function(e,t,i){return e._gsap[t]=i},eM=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},tM=function(e,t,i,n,r){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},nM=function(e,t,i,n,r){var a=e._gsap;a[t]=i,a.renderTransform(r,a)},dt="transform",sn=dt+"Origin",iM=function s(e,t){var i=this,n=this.target,r=n.style,a=n._gsap;if(e in pi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Xn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=si(n,o)}):this.tfm[e]=a.x?a[e]:si(n,e),e===sn&&(this.tfm.zOrigin=a.zOrigin);else return Xn.transform.split(",").forEach(function(o){return s.call(i,o,t)});if(this.props.indexOf(dt)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(sn,t,"")),e=dt}(r||t)&&this.props.push(e,t,r[e])},pd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rM=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Ic,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Lc(),(!r||!r.isStart)&&!i[dt]&&(pd(i),n.zOrigin&&i[sn]&&(i[sn]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},md=function(e,t){var i={target:e,props:[],revert:rM,save:iM};return e._gsap||an.core.getCache(e),t&&t.split(",").forEach(function(n){return i.save(n)}),i},_d,nc=function(e,t){var i=wi.createElementNS?wi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):wi.createElement(e);return i&&i.style?i:wi.createElement(e)},qn=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Ic,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,Qr(t)||t,1)||""},Ef="O,Moz,ms,Ms,Webkit".split(","),Qr=function(e,t,i){var n=t||$i,r=n.style,a=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Ef[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Ef[a]:"")+e},ic=function(){XS()&&window.document&&(Sf=window,wi=Sf.document,Gr=wi.documentElement,$i=nc("div")||{style:{}},nc("div"),dt=Qr(dt),sn=dt+"Origin",$i.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_d=!!Qr("perspective"),Lc=an.core.reverting,Uc=1)},Jo=function s(e){var t=nc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,r=this.style.cssText,a;if(Gr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),Gr.removeChild(t),this.style.cssText=r,a},Tf=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},gd=function(e){var t;try{t=e.getBBox()}catch{t=Jo.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Jo||(t=Jo.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Tf(e,["x","cx","x1"])||0,y:+Tf(e,["y","cy","y1"])||0,width:0,height:0}:t},vd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&gd(e))},or=function(e,t){if(t){var i=e.style,n;t in pi&&t!==sn&&(t=dt),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Ic,"-$1").toLowerCase())):i.removeAttribute(t)}},Ri=function(e,t,i,n,r,a){var o=new rn(e._pt,t,i,0,1,a?dd:hd);return e._pt=o,o.b=n,o.e=r,e._props.push(i),o},bf={deg:1,rad:1,turn:1},sM={grid:1,flex:1},Fi=function s(e,t,i,n){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=$i.style,l=YS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=n==="px",d=n==="%",g,_,p,m;if(n===a||!r||bf[n]||bf[a])return r;if(a!=="px"&&!h&&(r=s(e,t,i,"px")),m=e.getCTM&&vd(e),(d||a==="%")&&(pi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],_t(d?r/g*f:r/100*g);if(o[l?"width":"height"]=f+(h?a:n),_=~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===wi||!_.appendChild)&&(_=wi.body),p=_._gsap,p&&d&&p.width&&l&&p.time===pn.time&&!p.uncache)return _t(r/p.width*f);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=f+n,g=e[u],S?e.style[t]=S:or(e,t)}else(d||a==="%")&&!sM[qn(_,"display")]&&(o.position=qn(e,"position")),_===e&&(o.position="static"),_.appendChild($i),g=$i[u],_.removeChild($i),o.position="absolute";return l&&d&&(p=er(_),p.time=pn.time,p.width=_[u]),_t(h?g*r/f:g&&r?f/g*r:0)},si=function(e,t,i,n){var r;return Uc||ic(),t in Xn&&t!=="transform"&&(t=Xn[t],~t.indexOf(",")&&(t=t.split(",")[0])),pi[t]&&t!=="transform"?(r=Os(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ha(qn(e,sn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Va[t]&&Va[t](e,t,i)||qn(e,t)||Ih(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Fi(e,t,r,i)+i:r},aM=function(e,t,i,n){if(!i||i==="none"){var r=Qr(t,e,1),a=r&&qn(e,r,1);a&&a!==i?(t=r,i=a):t==="borderColor"&&(i=qn(e,"borderTopColor"))}var o=new rn(this._pt,e.style,t,0,1,cd),l=0,c=0,u,f,h,d,g,_,p,m,S,M,v,b;if(o.b=i,o.e=n,i+="",n+="",n==="auto"&&(_=e.style[t],e.style[t]=n,n=qn(e,t)||n,_?e.style[t]=_:or(e,t)),u=[i,n],Qh(u),i=u[0],n=u[1],h=i.match(Fr)||[],b=n.match(Fr)||[],b.length){for(;f=Fr.exec(n);)p=f[0],S=n.substring(l,f.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),p.charAt(1)==="="&&(p=zr(d,p)+v),m=parseFloat(p),M=p.substr((m+"").length),l=Fr.lastIndex-M.length,M||(M=M||xn.units[t]||v,l===n.length&&(n+=M,o.e+=M)),v!==M&&(d=Fi(e,t,_,M)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?dd:hd;return Rh.test(n)&&(o.e=0),this._pt=o,o},Af={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},oM=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Af[i]||i,t[1]=Af[n]||n,t.join(" ")},lM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,a=i._gsap,o,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],pi[o]&&(l=1,o=o==="transformOrigin"?sn:dt),or(i,o);l&&(or(i,dt),a&&(a.svg&&i.removeAttribute("transform"),Os(i,1),a.uncache=1,pd(n)))}},Va={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var a=e._pt=new rn(e._pt,t,i,0,0,lM);return a.u=n,a.pr=-10,a.tween=r,e._props.push(i),1}}},Ns=[1,0,0,1,0,0],xd={},Sd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},wf=function(e){var t=qn(e,dt);return Sd(t)?Ns:t.substr(7).match(wh).map(_t)},Fc=function(e,t){var i=e._gsap||er(e),n=e.style,r=wf(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ns:r):(r===Ns&&!e.offsetParent&&e!==Gr&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Gr.appendChild(e)),r=wf(e),l?n.display=l:or(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Gr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},rc=function(e,t,i,n,r,a){var o=e._gsap,l=r||Fc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],S=l[5],M=t.split(" "),v=parseFloat(M[0])||0,b=parseFloat(M[1])||0,w,E,T,x;i?l!==Ns&&(E=d*p-g*_)&&(T=v*(p/E)+b*(-_/E)+(_*S-p*m)/E,x=v*(-g/E)+b*(d/E)-(d*S-g*m)/E,v=T,b=x):(w=gd(e),v=w.x+(~M[0].indexOf("%")?v/100*w.width:v),b=w.y+(~(M[1]||M[0]).indexOf("%")?b/100*w.height:b)),n||n!==!1&&o.smooth?(m=v-c,S=b-u,o.xOffset=f+(m*d+S*_)-m,o.yOffset=h+(m*g+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=b,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[sn]="0px 0px",a&&(Ri(a,o,"xOrigin",c,v),Ri(a,o,"yOrigin",u,b),Ri(a,o,"xOffset",f,o.xOffset),Ri(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},Os=function(e,t){var i=e._gsap||new id(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=qn(e,sn)||"0",u,f,h,d,g,_,p,m,S,M,v,b,w,E,T,x,y,D,P,U,L,B,I,X,H,q,W,F,V,Z,N,O;return u=f=h=_=p=m=S=M=v=0,d=g=1,i.svg=!!(e.getCTM&&vd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[dt]!=="none"?l[dt]:"")),n.scale=n.rotate=n.translate="none"),E=Fc(e,i.svg),i.svg&&(i.uncache?(H=e.getBBox(),c=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),rc(e,X||c,!!X||i.originIsAbsolute,i.smooth!==!1,E)),b=i.xOrigin||0,w=i.yOrigin||0,E!==Ns&&(D=E[0],P=E[1],U=E[2],L=E[3],u=B=E[4],f=I=E[5],E.length===6?(d=Math.sqrt(D*D+P*P),g=Math.sqrt(L*L+U*U),_=D||P?Ur(P,D)*Ki:0,S=U||L?Ur(U,L)*Ki+_:0,S&&(g*=Math.abs(Math.cos(S*Vr))),i.svg&&(u-=b-(b*D+w*U),f-=w-(b*P+w*L))):(O=E[6],Z=E[7],W=E[8],F=E[9],V=E[10],N=E[11],u=E[12],f=E[13],h=E[14],T=Ur(O,V),p=T*Ki,T&&(x=Math.cos(-T),y=Math.sin(-T),X=B*x+W*y,H=I*x+F*y,q=O*x+V*y,W=B*-y+W*x,F=I*-y+F*x,V=O*-y+V*x,N=Z*-y+N*x,B=X,I=H,O=q),T=Ur(-U,V),m=T*Ki,T&&(x=Math.cos(-T),y=Math.sin(-T),X=D*x-W*y,H=P*x-F*y,q=U*x-V*y,N=L*y+N*x,D=X,P=H,U=q),T=Ur(P,D),_=T*Ki,T&&(x=Math.cos(T),y=Math.sin(T),X=D*x+P*y,H=B*x+I*y,P=P*x-D*y,I=I*x-B*y,D=X,B=H),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=_t(Math.sqrt(D*D+P*P+U*U)),g=_t(Math.sqrt(I*I+O*O)),T=Ur(B,I),S=Math.abs(T)>2e-4?T*Ki:0,v=N?1/(N<0?-N:N):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Sd(qn(e,dt)),X&&e.setAttribute("transform",X))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=_t(d),i.scaleY=_t(g),i.rotation=_t(_)+o,i.rotationX=_t(p)+o,i.rotationY=_t(m)+o,i.skewX=S+o,i.skewY=M+o,i.transformPerspective=v+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[sn]=Ha(c)),i.xOffset=i.yOffset=0,i.force3D=xn.force3D,i.renderTransform=i.svg?uM:_d?Md:cM,i.uncache=0,i},Ha=function(e){return(e=e.split(" "))[0]+" "+e[1]},$o=function(e,t,i){var n=zt(t);return _t(parseFloat(t)+parseFloat(Fi(e,"x",i+"px",n)))+n},cM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Md(e,t)},Xi="0deg",xs="0px",Yi=") ",Md=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,p=i.transformPerspective,m=i.force3D,S=i.target,M=i.zOrigin,v="",b=m==="auto"&&e&&e!==1||m===!0;if(M&&(f!==Xi||u!==Xi)){var w=parseFloat(u)*Vr,E=Math.sin(w),T=Math.cos(w),x;w=parseFloat(f)*Vr,x=Math.cos(w),a=$o(S,a,E*x*-M),o=$o(S,o,-Math.sin(w)*-M),l=$o(S,l,T*x*-M+M)}p!==xs&&(v+="perspective("+p+Yi),(n||r)&&(v+="translate("+n+"%, "+r+"%) "),(b||a!==xs||o!==xs||l!==xs)&&(v+=l!==xs||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Yi),c!==Xi&&(v+="rotate("+c+Yi),u!==Xi&&(v+="rotateY("+u+Yi),f!==Xi&&(v+="rotateX("+f+Yi),(h!==Xi||d!==Xi)&&(v+="skew("+h+", "+d+Yi),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Yi),S.style[dt]=v||"translate(0, 0)"},uM=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,p=i.xOffset,m=i.yOffset,S=i.forceCSS,M=parseFloat(a),v=parseFloat(o),b,w,E,T,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Vr,c*=Vr,b=Math.cos(l)*f,w=Math.sin(l)*f,E=Math.sin(l-c)*-h,T=Math.cos(l-c)*h,c&&(u*=Vr,x=Math.tan(c-u),x=Math.sqrt(1+x*x),E*=x,T*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),b*=x,w*=x)),b=_t(b),w=_t(w),E=_t(E),T=_t(T)):(b=f,T=h,w=E=0),(M&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(M=Fi(d,"x",a,"px"),v=Fi(d,"y",o,"px")),(g||_||p||m)&&(M=_t(M+g-(g*b+_*E)+p),v=_t(v+_-(g*w+_*T)+m)),(n||r)&&(x=d.getBBox(),M=_t(M+n/100*x.width),v=_t(v+r/100*x.height)),x="matrix("+b+","+w+","+E+","+T+","+M+","+v+")",d.setAttribute("transform",x),S&&(d.style[dt]=x)},fM=function(e,t,i,n,r){var a=360,o=Rt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Ki:1),c=l-n,u=n+c+"deg",f,h;return o&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*yf)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*yf)%a-~~(c/a)*a)),e._pt=h=new rn(e._pt,t,i,n,c,jS),h.e=u,h.u="deg",e._props.push(i),h},Rf=function(e,t){for(var i in t)e[i]=t[i];return e},hM=function(e,t,i){var n=Rf({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,f,h,d,g;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[dt]=t,o=Os(i,1),or(i,dt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[dt],a[dt]=t,o=Os(i,1),a[dt]=c);for(l in pi)c=n[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=zt(c),g=zt(u),f=d!==g?Fi(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new rn(e._pt,o,l,f,h-f,tc),e._pt.u=g||0,e._props.push(l));Rf(o,n)};nn("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",a=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(o){return e<2?s+o:"border"+o+s});Va[e>1?"border"+s:s]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(g){return si(o,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var yd={name:"css",register:ic,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var a=this._props,o=e.style,l=i.vars.startAt,c,u,f,h,d,g,_,p,m,S,M,v,b,w,E,T;Uc||ic(),this.styles=this.styles||md(e),T=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(dn[_]&&rd(_,t,i,n,e,r)))){if(d=typeof u,g=Va[_],d==="function"&&(u=u.call(i,n,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ls(u)),g)g(this,e,_,u,i)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ui.lastIndex=0,Ui.test(c)||(p=zt(c),m=zt(u)),m?p!==m&&(c=Fi(e,_,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,n,r,0,0,_),a.push(_),T.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,n,e,r):l[_],Rt(c)&&~c.indexOf("random(")&&(c=Ls(c)),zt(c+"")||c==="auto"||(c+=xn.units[_]||zt(si(e,_))||""),(c+"").charAt(1)==="="&&(c=si(e,_))):c=si(e,_),h=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),_ in Xn&&(_==="autoAlpha"&&(h===1&&si(e,"visibility")==="hidden"&&f&&(h=0),T.push("visibility",0,o.visibility),Ri(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Xn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in pi,M){if(this.styles.save(_),v||(b=e._gsap,b.renderTransform&&!t.parseTransform||Os(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new rn(this._pt,o,dt,0,1,b.renderTransform,b,0,-1),v.dep=1),_==="scale")this._pt=new rn(this._pt,b,"scaleY",b.scaleY,(S?zr(b.scaleY,S+f):f)-b.scaleY||0,tc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){T.push(sn,0,o[sn]),u=oM(u),b.svg?rc(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==b.zOrigin&&Ri(this,b,"zOrigin",b.zOrigin,m),Ri(this,o,_,Ha(c),Ha(u)));continue}else if(_==="svgOrigin"){rc(e,u,1,w,0,this);continue}else if(_ in xd){fM(this,b,_,h,S?zr(h,S+u):u);continue}else if(_==="smoothOrigin"){Ri(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){hM(this,u,e);continue}}else _ in o||(_=Qr(_)||_);if(M||(f||f===0)&&(h||h===0)&&!qS.test(u)&&_ in o)p=(c+"").substr((h+"").length),f||(f=0),m=zt(u)||(_ in xn.units?xn.units[_]:p),p!==m&&(h=Fi(e,_,c,m)),this._pt=new rn(this._pt,M?b:o,_,h,(S?zr(h,S+f):f)-h,!M&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?ZS:tc),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=KS);else if(_ in o)aM.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,n,r);else if(_!=="parseTransform"){Ec(_,u);continue}M||(_ in o?T.push(_,0,o[_]):T.push(_,1,c||e[_])),a.push(_)}}E&&ud(this)},render:function(e,t){if(t.tween._time||!Lc())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:si,aliases:Xn,getSetter:function(e,t,i){var n=Xn[t];return n&&n.indexOf(",")<0&&(t=n),t in pi&&t!==sn&&(e._gsap.x||si(e,"x"))?i&&Mf===i?t==="scale"?eM:QS:(Mf=i||{})&&(t==="scale"?tM:nM):e.style&&!Sc(e.style[t])?JS:~t.indexOf("-")?$S:Pc(e,t)},core:{_removeProperty:or,_getMatrix:Fc}};an.utils.checkPrefix=Qr;an.core.getStyleSaver=md;(function(s,e,t,i){var n=nn(s+","+e+","+t,function(r){pi[r]=1});nn(e,function(r){xn.units[r]="deg",xd[r]=1}),Xn[n[13]]=s+","+e,nn(i,function(r){var a=r.split(":");Xn[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){xn.units[s]="px"});an.registerPlugin(yd);var St=an.registerPlugin(yd)||an;St.core.Tween;const Nc=new hh,Ed=new zv(Nc),dM=new Hv(Nc),yt=[{name:"Color Fusion",background:"#9D73F7",config:{uPositionFrequency:1,uPositionStrength:.3,uSmallWavePositionFrequency:.5,uSmallWavePositionStrength:.7,roughness:1,metalness:0,envMapIntensity:.5,clearcoat:0,clearcoatRoughness:0,transmission:0,flatShading:!1,wireframe:!1,map:"cosmic-fusion"}},{name:"Purple Mirror",background:"#5300B1",config:{uPositionFrequency:.584,uPositionStrength:.276,uSmallWavePositionFrequency:.899,uSmallWavePositionStrength:1.266,roughness:0,metalness:1,envMapIntensity:2,clearcoat:0,clearcoatRoughness:0,transmission:0,flatShading:!1,wireframe:!1,map:"purple-rain"}},{name:"Alien Goo",background:"#45ACD8",config:{uPositionFrequency:1.022,uPositionStrength:.99,uSmallWavePositionFrequency:.378,uSmallWavePositionStrength:.341,roughness:.292,metalness:.73,envMapIntensity:.86,clearcoat:1,clearcoatRoughness:0,transmission:0,flatShading:!1,wireframe:!1,map:"lucky-day"}}];let Qo=!1,Ut=0;const lr=new Pv;lr.background=new Ke("#333");const Wa=new bn(75,window.innerWidth/window.innerHeight,.1,1e3),Td=document.querySelector("canvas");if(!Td)throw new Error("Canvas element not found");const Ni=new Cv({canvas:Td});Ni.setSize(window.innerWidth,window.innerHeight);Ni.setPixelRatio(Math.min(window.devicePixelRatio,2));Ni.toneMapping=Df;Ni.toneMappingExposure=1;Ni.outputEncoding=void 0;const bd={uTime:{value:0},uPositionFrequency:{value:yt[Ut].config.uPositionFrequency},uPositionStrength:{value:yt[Ut].config.uPositionStrength},uTimeFrequency:{value:.3},uSmallWavePositionFrequency:{value:yt[Ut].config.uSmallWavePositionFrequency},uSmallWavePositionStrength:{value:yt[Ut].config.uSmallWavePositionStrength},uSmallWaveTimeFrequency:{value:.3}},Ht=new tx({baseMaterial:Iv,vertexShader:ix,map:Ed.load(`./gradients/${yt[Ut].config.map}.png`),metalness:yt[Ut].config.metalness,roughness:yt[Ut].config.roughness,envMapIntensity:yt[Ut].config.envMapIntensity,clearcoat:yt[Ut].config.clearcoat,clearcoatRoughness:yt[Ut].config.clearcoatRoughness,transmission:yt[Ut].config.transmission,flatShading:yt[Ut].config.flatShading,wireframe:yt[Ut].config.wireframe,uniforms:bd}),Ad=nx(new gc(1,70));Ad.computeTangents();const sc=new mn(Ad,Ht);lr.add(sc);Wa.position.z=3;dM.load("https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr",function(s){s.mapping=Ia,lr.environment=s});window.addEventListener("resize",()=>{Wa.aspect=window.innerWidth/window.innerHeight,Wa.updateProjectionMatrix(),Ni.setSize(window.innerWidth,window.innerHeight),Ni.setPixelRatio(Math.min(window.devicePixelRatio,2))});const pM=new Vv,ac=new hi({fragmentShader:"void main() { gl_FragColor = vec4(1.0); }",vertexShader:$x,side:Nn,uniforms:{progress:{value:0},direction:{value:1}}}),ya=yt.map((s,e)=>{const t=new Eh;return t.text=s.name,t.font="./aften_screen.woff",t.anchorX="center",t.anchorY="middle",t.material=ac,t.position.set(0,0,2),e!==0&&t.scale.set(0,0,0),t.letterSpacing=-.08,t.fontSize=window.innerWidth/4e3,t.glyphGeometryDetail=20,t.sync(),lr.add(t),t});window.addEventListener("wheel",s=>{if(Qo)return;Qo=!0;let e=Math.sign(s.deltaY),t=(Ut+e+yt.length)%yt.length;ya[t].scale.set(1,1,1),ya[t].position.x=e*3.5,St.to(ac.uniforms.progress,{value:.5,duration:1,ease:"linear",onComplete:()=>{Ut=t,Qo=!1,ac.uniforms.progress.value=0}}),St.to(ya[Ut].position,{x:-e*3,duration:1,ease:"power2.inOut"}),St.to(sc.rotation,{y:sc.rotation.y+Math.PI*4*-e,duration:1,ease:"power2.inOut"}),St.to(ya[t].position,{x:0,duration:1,ease:"power2.inOut"});const i=new Ke(yt[t].background);St.to(lr.background,{r:i.r,g:i.g,b:i.b,duration:1,ease:"linear"}),mM(yt[t].config)});function mM(s){s.uPositionFrequency!==void 0&&St.to(Ht.uniforms.uPositionFrequency,{value:s.uPositionFrequency,duration:1,ease:"power2.inOut"}),s.uPositionStrength!==void 0&&St.to(Ht.uniforms.uPositionStrength,{value:s.uPositionStrength,duration:1,ease:"power2.inOut"}),s.uSmallWavePositionFrequency!==void 0&&St.to(Ht.uniforms.uSmallWavePositionFrequency,{value:s.uSmallWavePositionFrequency,duration:1,ease:"power2.inOut"}),s.uSmallWavePositionStrength!==void 0&&St.to(Ht.uniforms.uSmallWavePositionStrength,{value:s.uSmallWavePositionStrength,duration:1,ease:"power2.inOut"}),s.uSmallWaveTimeFrequency!==void 0&&St.to(Ht.uniforms.uSmallWaveTimeFrequency,{value:s.uSmallWaveTimeFrequency,duration:1,ease:"power2.inOut"}),s.map!==void 0&&setTimeout(()=>{Ht.map=Ed.load(`./gradients/${s.map}.png`)},400),s.roughness!==void 0&&St.to(Ht,{roughness:s.roughness,duration:1,ease:"power2.inOut"}),s.metalness!==void 0&&St.to(Ht,{metalness:s.metalness,duration:1,ease:"power2.inOut"}),s.envMapIntensity!==void 0&&St.to(Ht,{envMapIntensity:s.envMapIntensity,duration:1,ease:"power2.inOut"}),s.clearcoat!==void 0&&St.to(Ht,{clearcoat:s.clearcoat,duration:1,ease:"power2.inOut"}),s.clearcoatRoughness!==void 0&&St.to(Ht,{clearcoatRoughness:s.clearcoatRoughness,duration:1,ease:"power2.inOut"}),s.transmission!==void 0&&St.to(Ht,{transmission:s.transmission,duration:1,ease:"power2.inOut"}),s.flatShading!==void 0&&St.to(Ht,{flatShading:s.flatShading,duration:1,ease:"power2.inOut"}),s.wireframe!==void 0&&St.to(Ht,{wireframe:s.wireframe,duration:1,ease:"power2.inOut"})}Nc.onLoad=()=>{function s(){requestAnimationFrame(s),bd.uTime.value=pM.getElapsedTime(),Ni.render(lr,Wa)}const e=new Ke(yt[Ut].background);St.to(lr.background,{r:e.r,g:e.g,b:e.b,duration:1,ease:"linear"}),s()};
