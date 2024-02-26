var z_=Object.defineProperty,H_=Object.defineProperties;var G_=Object.getOwnPropertyDescriptors;var Jo=Object.getOwnPropertySymbols;var jf=Object.prototype.hasOwnProperty,$f=Object.prototype.propertyIsEnumerable;var Wf=(n,e,t)=>e in n?z_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,pe=(n,e)=>{for(var t in e||={})jf.call(e,t)&&Wf(n,t,e[t]);if(Jo)for(var t of Jo(e))$f.call(e,t)&&Wf(n,t,e[t]);return n},Mt=(n,e)=>H_(n,G_(e));var qf=(n,e)=>{var t={};for(var i in n)jf.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&Jo)for(var i of Jo(n))e.indexOf(i)<0&&$f.call(n,i)&&(t[i]=n[i]);return t};var Ko=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var Xf=null;var Nl=1,Yf=Symbol("SIGNAL");function en(n){let e=Xf;return Xf=n,e}var Zf={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function W_(n){if(!(Fl(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Nl)){if(!n.producerMustRecompute(n)&&!Ll(n)){n.dirty=!1,n.lastCleanEpoch=Nl;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=Nl}}function Jf(n){return n&&(n.nextProducerIndex=0),en(n)}function Kf(n,e){if(en(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Fl(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Ol(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Ll(n){Qo(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(W_(t),i!==t.version))return!0}return!1}function Qf(n){if(Qo(n),Fl(n))for(let e=0;e<n.producerNode.length;e++)Ol(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Ol(n,e){if(j_(n),Qo(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)Ol(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Qo(r),r.producerIndexOfThis[i]=e}}function Fl(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Qo(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function j_(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function $_(){throw new Error}var q_=$_;function ep(n){q_=n}function Ie(n){return typeof n=="function"}function Ir(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var ea=Ir(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Vs(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var St=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ie(i))try{i()}catch(s){e=s instanceof ea?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{tp(s)}catch(o){e=e??[],o instanceof ea?e=[...e,...o.errors]:e.push(o)}}if(e)throw new ea(e)}}add(e){var t;if(e&&e!==this)if(this.closed)tp(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Vs(t,e)}remove(e){let{_finalizers:t}=this;t&&Vs(t,e),e instanceof n&&e._removeParent(this)}};St.EMPTY=(()=>{let n=new St;return n.closed=!0,n})();var Ul=St.EMPTY;function ta(n){return n instanceof St||n&&"closed"in n&&Ie(n.remove)&&Ie(n.add)&&Ie(n.unsubscribe)}function tp(n){Ie(n)?n():n.unsubscribe()}var Tn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Rr={setTimeout(n,e,...t){let{delegate:i}=Rr;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Rr;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function na(n){Rr.setTimeout(()=>{let{onUnhandledError:e}=Tn;if(e)e(n);else throw n})}function zs(){}var np=kl("C",void 0,void 0);function ip(n){return kl("E",void 0,n)}function rp(n){return kl("N",n,void 0)}function kl(n,e,t){return{kind:n,value:e,error:t}}var Yi=null;function Pr(n){if(Tn.useDeprecatedSynchronousErrorHandling){let e=!Yi;if(e&&(Yi={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Yi;if(Yi=null,t)throw i}}else n()}function sp(n){Tn.useDeprecatedSynchronousErrorHandling&&Yi&&(Yi.errorThrown=!0,Yi.error=n)}var Zi=class extends St{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,ta(e)&&e.add(this)):this.destination=Z_}static create(e,t,i){return new Nr(e,t,i)}next(e){this.isStopped?Vl(rp(e),this):this._next(e)}error(e){this.isStopped?Vl(ip(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Vl(np,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},X_=Function.prototype.bind;function Bl(n,e){return X_.call(n,e)}var zl=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){ia(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){ia(i)}else ia(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){ia(t)}}},Nr=class extends Zi{constructor(e,t,i){super();let r;if(Ie(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Tn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Bl(e.next,s),error:e.error&&Bl(e.error,s),complete:e.complete&&Bl(e.complete,s)}):r=e}this.destination=new zl(r)}};function ia(n){Tn.useDeprecatedSynchronousErrorHandling?sp(n):na(n)}function Y_(n){throw n}function Vl(n,e){let{onStoppedNotification:t}=Tn;t&&Rr.setTimeout(()=>t(n,e))}var Z_={closed:!0,next:zs,error:Y_,complete:zs};var Lr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function tn(n){return n}function Hl(...n){return Gl(n)}function Gl(n){return n.length===0?tn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var st=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=K_(t)?t:new Nr(t,i,r);return Pr(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=op(i),new i((r,s)=>{let o=new Nr({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Lr](){return this}pipe(...t){return Gl(t)(this)}toPromise(t){return t=op(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function op(n){var e;return(e=n??Tn.Promise)!==null&&e!==void 0?e:Promise}function J_(n){return n&&Ie(n.next)&&Ie(n.error)&&Ie(n.complete)}function K_(n){return n&&n instanceof Zi||J_(n)&&ta(n)}function Wl(n){return Ie(n?.lift)}function Ze(n){return e=>{if(Wl(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Je(n,e,t,i,r){return new jl(n,e,t,i,r)}var jl=class extends Zi{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function Or(){return Ze((n,e)=>{let t=null;n._refCount++;let i=Je(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var Fr=class extends st{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Wl(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new St;let t=this.getSubject();e.add(this.source.subscribe(Je(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=St.EMPTY)}return e}refCount(){return Or()(this)}};var ap=Ir(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var nn=(()=>{class n extends st{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new ra(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new ap}next(t){Pr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Pr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Pr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Ul:(this.currentObservers=null,s.push(t),new St(()=>{this.currentObservers=null,Vs(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new st;return t.source=this,t}}return n.create=(e,t)=>new ra(e,t),n})(),ra=class extends nn{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Ul}};var Lt=class extends nn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var fn=new st(n=>n.complete());function cp(n){return n&&Ie(n.schedule)}function lp(n){return n[n.length-1]}function up(n){return Ie(lp(n))?n.pop():void 0}function gi(n){return cp(lp(n))?n.pop():void 0}function hp(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function dp(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ji(n){return this instanceof Ji?(this.v=n,this):new Ji(n)}function fp(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(h){i[h]&&(r[h]=function(m){return new Promise(function(g,v){s.push([h,m,g,v])>1||a(h,m)})})}function a(h,m){try{c(i[h](m))}catch(g){d(s[0][3],g)}}function c(h){h.value instanceof Ji?Promise.resolve(h.value.v).then(l,u):d(s[0][2],h)}function l(h){a("next",h)}function u(h){a("throw",h)}function d(h,m){h(m),s.shift(),s.length&&a(s[0][0],s[0][1])}}function pp(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof dp=="function"?dp(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var sa=n=>n&&typeof n.length=="number"&&typeof n!="function";function oa(n){return Ie(n?.then)}function aa(n){return Ie(n[Lr])}function ca(n){return Symbol.asyncIterator&&Ie(n?.[Symbol.asyncIterator])}function la(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Q_(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ua=Q_();function da(n){return Ie(n?.[ua])}function ha(n){return fp(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield Ji(t.read());if(r)return yield Ji(void 0);yield yield Ji(i)}}finally{t.releaseLock()}})}function fa(n){return Ie(n?.getReader)}function It(n){if(n instanceof st)return n;if(n!=null){if(aa(n))return ex(n);if(sa(n))return tx(n);if(oa(n))return nx(n);if(ca(n))return mp(n);if(da(n))return ix(n);if(fa(n))return rx(n)}throw la(n)}function ex(n){return new st(e=>{let t=n[Lr]();if(Ie(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function tx(n){return new st(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function nx(n){return new st(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,na)})}function ix(n){return new st(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function mp(n){return new st(e=>{sx(n,e).catch(t=>e.error(t))})}function rx(n){return mp(ha(n))}function sx(n,e){var t,i,r,s;return hp(this,void 0,void 0,function*(){try{for(t=pp(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Xt(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function pa(n,e=0){return Ze((t,i)=>{t.subscribe(Je(i,r=>Xt(i,n,()=>i.next(r),e),()=>Xt(i,n,()=>i.complete(),e),r=>Xt(i,n,()=>i.error(r),e)))})}function ma(n,e=0){return Ze((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function gp(n,e){return It(n).pipe(ma(e),pa(e))}function vp(n,e){return It(n).pipe(ma(e),pa(e))}function yp(n,e){return new st(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function _p(n,e){return new st(t=>{let i;return Xt(t,e,()=>{i=n[ua](),Xt(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Ie(i?.return)&&i.return()})}function ga(n,e){if(!n)throw new Error("Iterable cannot be null");return new st(t=>{Xt(t,e,()=>{let i=n[Symbol.asyncIterator]();Xt(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function xp(n,e){return ga(ha(n),e)}function Mp(n,e){if(n!=null){if(aa(n))return gp(n,e);if(sa(n))return yp(n,e);if(oa(n))return vp(n,e);if(ca(n))return ga(n,e);if(da(n))return _p(n,e);if(fa(n))return xp(n,e)}throw la(n)}function wt(n,e){return e?Mp(n,e):It(n)}function Ce(...n){let e=gi(n);return wt(n,e)}function Ur(n,e){let t=Ie(n)?n:()=>n,i=r=>r.error(t());return new st(e?r=>e.schedule(i,0,r):i)}function $l(n){return!!n&&(n instanceof st||Ie(n.lift)&&Ie(n.subscribe))}var Yn=Ir(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Ye(n,e){return Ze((t,i)=>{let r=0;t.subscribe(Je(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:ox}=Array;function ax(n,e){return ox(e)?n(...e):n(e)}function wp(n){return Ye(e=>ax(n,e))}var{isArray:cx}=Array,{getPrototypeOf:lx,prototype:ux,keys:dx}=Object;function Ep(n){if(n.length===1){let e=n[0];if(cx(e))return{args:e,keys:null};if(hx(e)){let t=dx(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function hx(n){return n&&typeof n=="object"&&lx(n)===ux}function bp(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function va(...n){let e=gi(n),t=up(n),{args:i,keys:r}=Ep(n);if(i.length===0)return wt([],e);let s=new st(fx(i,e,r?o=>bp(r,o):tn));return t?s.pipe(wp(t)):s}function fx(n,e,t=tn){return i=>{Sp(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)Sp(e,()=>{let l=wt(n[c],e),u=!1;l.subscribe(Je(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function Sp(n,e,t){n?Xt(t,n,e):e()}function Tp(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},m=v=>l<i?g(v):c.push(v),g=v=>{s&&e.next(v),l++;let p=!1;It(t(v,u++)).subscribe(Je(e,f=>{r?.(f),s?m(f):e.next(f)},()=>{p=!0},void 0,()=>{if(p)try{for(l--;c.length&&l<i;){let f=c.shift();o?Xt(e,o,()=>g(f)):g(f)}h()}catch(f){e.error(f)}}))};return n.subscribe(Je(e,m,()=>{d=!0,h()})),()=>{a?.()}}function Tt(n,e,t=1/0){return Ie(e)?Tt((i,r)=>Ye((s,o)=>e(i,s,r,o))(It(n(i,r))),t):(typeof e=="number"&&(t=e),Ze((i,r)=>Tp(i,r,n,t)))}function ql(n=1/0){return Tt(tn,n)}function Cp(){return ql(1)}function kr(...n){return Cp()(wt(n,gi(n)))}function ya(n){return new st(e=>{It(n()).subscribe(e)})}function pn(n,e){return Ze((t,i)=>{let r=0;t.subscribe(Je(i,s=>n.call(e,s,r++)&&i.next(s)))})}function vi(n){return Ze((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Je(t,void 0,void 0,o=>{s=It(n(o,vi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Ap(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Je(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function Ki(n,e){return Ie(e)?Tt(n,e,1):Tt(n,1)}function yi(n){return Ze((e,t)=>{let i=!1;e.subscribe(Je(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function Zn(n){return n<=0?()=>fn:Ze((e,t)=>{let i=0;e.subscribe(Je(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Xl(n){return Ye(()=>n)}function _a(n=px){return Ze((e,t)=>{let i=!1;e.subscribe(Je(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function px(){return new Yn}function Br(n){return Ze((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Cn(n,e){let t=arguments.length>=2;return i=>i.pipe(n?pn((r,s)=>n(r,s,i)):tn,Zn(1),t?yi(e):_a(()=>new Yn))}function Vr(n){return n<=0?()=>fn:Ze((e,t)=>{let i=[];e.subscribe(Je(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Yl(n,e){let t=arguments.length>=2;return i=>i.pipe(n?pn((r,s)=>n(r,s,i)):tn,Vr(1),t?yi(e):_a(()=>new Yn))}function Zl(n,e){return Ze(Ap(n,e,arguments.length>=2,!0))}function Jl(...n){let e=gi(n);return Ze((t,i)=>{(e?kr(n,t,e):kr(n,t)).subscribe(i)})}function mn(n,e){return Ze((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Je(i,c=>{r?.unsubscribe();let l=0,u=s++;It(n(c,u)).subscribe(r=Je(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function Kl(n){return Ze((e,t)=>{It(n).subscribe(Je(t,()=>t.complete(),zs)),!t.closed&&e.subscribe(t)})}function Et(n,e,t){let i=Ie(n)||e||t?{next:n,error:e,complete:t}:n;return i?Ze((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Je(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):tn}var be=class extends Error{constructor(e,t){super(ja(e,t)),this.code=e}};function ja(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var du=class extends nn{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=Ql(s),r&&(r=Ql(r)),o&&(o=Ql(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof St&&e.add(a),a}};function Ql(n){return e=>{setTimeout(n,void 0,e)}}var Dn=du;var Ge=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(Ge||{});function rn(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(rn).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function Dp(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var um=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(um||{}),zn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(zn||{});function Hu(n){return{toString:n}.toString()}var Hs=globalThis;var $s={},er=[];function ut(n){for(let e in n)if(n[e]===ut)return e;throw Error("Could not find renamed property on target object.")}var mx=ut({\u0275cmp:ut}),gx=ut({\u0275dir:ut}),vx=ut({\u0275pipe:ut}),yx=ut({\u0275mod:ut}),Aa=ut({\u0275fac:ut}),Gs=ut({__NG_ELEMENT_ID__:ut}),Ip=ut({__NG_ENV_ID__:ut}),wi=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(wi||{});function dm(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function hu(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];xx(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function _x(n){return n===3||n===4||n===6}function xx(n){return n.charCodeAt(0)===64}function Gu(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Rp(n,t,r,null,e[++i]):Rp(n,t,r,null,null))}}return n}function Rp(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var hm="ng-template";function Mx(n,e,t){let i=0,r=!0;for(;i<n.length;){let s=n[i++];if(typeof s=="string"&&r){let o=n[i++];if(t&&s==="class"&&dm(o.toLowerCase(),e,0)!==-1)return!0}else if(s===1){for(;i<n.length&&typeof(s=n[i++])=="string";)if(s.toLowerCase()===e)return!0;return!1}else typeof s=="number"&&(r=!1)}return!1}function fm(n){return n.type===4&&n.value!==hm}function wx(n,e,t){let i=n.type===4&&!t?hm:n.value;return e===i}function Ex(n,e,t){let i=4,r=n.attrs||[],s=Tx(r),o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!An(i)&&!An(c))return!1;if(o&&An(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!wx(n,c,t)||c===""&&e.length===1){if(An(i))return!1;o=!0}}else{let l=i&8?c:e[++a];if(i&8&&n.attrs!==null){if(!Mx(n.attrs,l,t)){if(An(i))return!1;o=!0}continue}let u=i&8?"class":c,d=bx(u,r,fm(n),t);if(d===-1){if(An(i))return!1;o=!0;continue}if(l!==""){let h;d>s?h="":h=r[d+1].toLowerCase();let m=i&8?h:null;if(m&&dm(m,l,0)!==-1||i&2&&l!==h){if(An(i))return!1;o=!0}}}}return An(i)||o}function An(n){return(n&1)===0}function bx(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return Cx(e,n)}function Sx(n,e,t=!1){for(let i=0;i<e.length;i++)if(Ex(n,e[i],t))return!0;return!1}function Tx(n){for(let e=0;e<n.length;e++){let t=n[e];if(_x(t))return e}return n.length}function Cx(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Pp(n,e){return n?":not("+e.trim()+")":e}function Ax(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!An(o)&&(e+=Pp(s,r),r=""),i=o,s=s||!An(i);t++}return r!==""&&(e+=Pp(s,r)),e}function Dx(n){return n.map(Ax).join(",")}function Ix(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!An(r))break;r=s}i++}return{attrs:e,classes:t}}function $a(n){return Hu(()=>{let e=ym(n),t=Mt(pe({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===um.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||zn.Emulated,styles:n.styles||er,_:null,schemas:n.schemas||null,tView:null,id:""});_m(t);let i=n.dependencies;return t.directiveDefs=Lp(i,!1),t.pipeDefs=Lp(i,!0),t.id=Nx(t),t})}function Rx(n){return tr(n)||pm(n)}function Px(n){return n!==null}function Np(n,e){if(n==null)return $s;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=wi.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==wi.None?[i,a]:i,e[s]=o):t[s]=i}return t}function Wu(n){return Hu(()=>{let e=ym(n);return _m(e),e})}function tr(n){return n[mx]||null}function pm(n){return n[gx]||null}function mm(n){return n[vx]||null}function gm(n){let e=tr(n)||pm(n)||mm(n);return e!==null?e.standalone:!1}function vm(n,e){let t=n[yx]||null;if(!t&&e===!0)throw new Error(`Type ${rn(n)} does not have '\u0275mod' property.`);return t}function ym(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||$s,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||er,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Np(n.inputs,e),outputs:Np(n.outputs),debugInfo:null}}function _m(n){n.features?.forEach(e=>e(n))}function Lp(n,e){if(!n)return null;let t=e?mm:Rx;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(Px)}function Nx(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var on=0,Xe=1,Re=2,Ot=3,In=4,Pn=5,Jn=6,Op=7,Ei=8,jr=9,bi=10,Wt=11,qs=12,Fp=13,ro=14,yn=15,ju=16,zr=17,qa=18,Xa=19,xm=20,Ws=21,eu=22,nr=23,Rn=25,Mm=1,Xs=6,Kn=7,Da=8,Ia=9,sn=10,$u=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}($u||{});function Mi(n){return Array.isArray(n)&&typeof n[Mm]=="object"}function Hn(n){return Array.isArray(n)&&n[Mm]===!0}function wm(n){return(n.flags&4)!==0}function Ya(n){return n.componentOffset>-1}function Lx(n){return(n.flags&1)===1}function so(n){return!!n.template}function Em(n){return(n[Re]&512)!==0}var Ox="svg",Fx="math",Ux=!1;function kx(){return Ux}function Qn(n){for(;Array.isArray(n);)n=n[on];return n}function Gn(n,e){return Qn(e[n.index])}function Bx(n,e){return n.data[e]}function oo(n,e){let t=e[n];return Mi(t)?t:t[on]}function qu(n){return(n[Re]&128)===128}function Vx(n){return Hn(n[Ot])}function Up(n,e){return e==null?null:n[e]}function bm(n){n[zr]=0}function zx(n){n[Re]&1024||(n[Re]|=1024,qu(n)&&Ys(n))}function Xu(n){return!!(n[Re]&9216||n[nr]?.dirty)}function fu(n){Xu(n)?Ys(n):n[Re]&64&&(kx()?(n[Re]|=1024,Ys(n)):n[bi].changeDetectionScheduler?.notify())}function Ys(n){n[bi].changeDetectionScheduler?.notify();let e=Zs(n);for(;e!==null&&!(e[Re]&8192||(e[Re]|=8192,!qu(e)));)e=Zs(e)}function Hx(n,e){if((n[Re]&256)===256)throw new be(911,!1);n[Ws]===null&&(n[Ws]=[]),n[Ws].push(e)}function Zs(n){let e=n[Ot];return Hn(e)?e[Ot]:e}var ot={lFrame:Pm(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function Gx(){return ot.lFrame.elementDepthCount}function Wx(){ot.lFrame.elementDepthCount++}function jx(){ot.lFrame.elementDepthCount--}function Sm(){return ot.bindingsEnabled}function ao(){return ot.skipHydrationRootTNode!==null}function $x(n){return ot.skipHydrationRootTNode===n}function qx(n){ot.skipHydrationRootTNode=n}function Xx(){ot.skipHydrationRootTNode=null}function ei(){return ot.lFrame.lView}function Tm(){return ot.lFrame.tView}function Ti(){let n=Cm();for(;n!==null&&n.type===64;)n=n.parent;return n}function Cm(){return ot.lFrame.currentTNode}function Yx(){let n=ot.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Yu(n,e){let t=ot.lFrame;t.currentTNode=n,t.isParent=e}function Am(){return ot.lFrame.isParent}function Zx(){ot.lFrame.isParent=!1}function Jx(n){return ot.lFrame.bindingIndex=n}function Kx(){return ot.lFrame.inI18n}function Qx(n,e){let t=ot.lFrame;t.bindingIndex=t.bindingRootIndex=n,pu(e)}function eM(){return ot.lFrame.currentDirectiveIndex}function pu(n){ot.lFrame.currentDirectiveIndex=n}function Dm(n){ot.lFrame.currentQueryIndex=n}function tM(n){let e=n[Xe];return e.type===2?e.declTNode:e.type===1?n[Pn]:null}function Im(n,e,t){if(t&Ge.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&Ge.Host);)if(r=tM(s),r===null||(s=s[ro],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=ot.lFrame=Rm();return i.currentTNode=e,i.lView=n,!0}function Zu(n){let e=Rm(),t=n[Xe];ot.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Rm(){let n=ot.lFrame,e=n===null?null:n.child;return e===null?Pm(n):e}function Pm(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Nm(){let n=ot.lFrame;return ot.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Lm=Nm;function Ju(){let n=Nm();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function nM(){return ot.lFrame.selectedIndex}function ir(n){ot.lFrame.selectedIndex=n}function Om(){return ot.lFrame.currentNamespace}var Fm=!0;function iM(){return Fm}function Ci(n){Fm=n}function rM(){return Ku(Ti(),ei())}function Ku(n,e){return new Za(Gn(n,e))}var Za=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=rM;let n=e;return n})();function Qu(n,e){n.forEach(t=>Array.isArray(t)?Qu(t,e):e(t))}function Um(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Ra(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var sM="ngSkipHydration",oM="ngskiphydration";function km(n){let e=n.mergedAttrs;if(e===null)return!1;for(let t=0;t<e.length;t+=2){let i=e[t];if(typeof i=="number")return!1;if(typeof i=="string"&&i.toLowerCase()===oM)return!0}return!1}function Bm(n){return n.hasAttribute(sM)}function Pa(n){return(n.flags&128)===128}function aM(n){if(Pa(n))return!0;let e=n.parent;for(;e;){if(Pa(n)||km(e))return!0;e=e.parent}return!1}var mu;function Vm(n){mu=n}function Ja(){if(mu!==void 0)return mu;if(typeof document<"u")return document;throw new be(210,!1)}function Ne(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Ka(n){return kp(n,Hm)||kp(n,Gm)}function zm(n){return Ka(n)!==null}function kp(n,e){return n.hasOwnProperty(e)?n[e]:null}function cM(n){let e=n&&(n[Hm]||n[Gm]);return e||null}function Bp(n){return n&&(n.hasOwnProperty(Vp)||n.hasOwnProperty(lM))?n[Vp]:null}var Hm=ut({\u0275prov:ut}),Vp=ut({\u0275inj:ut}),Gm=ut({ngInjectableDef:ut}),lM=ut({ngInjectorDef:ut}),We=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Ne({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}},Qa=new We("",{providedIn:"root",factory:()=>uM}),uM="ng",ed=new We(""),ni=new We("",{providedIn:"platform",factory:()=>"unknown"});var td=new We("",{providedIn:"root",factory:()=>Ja().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var dM=ut({__forward_ref__:ut});function Wm(n){return n.__forward_ref__=Wm,n.toString=function(){return rn(this())},n}function vn(n){return jm(n)?n():n}function jm(n){return typeof n=="function"&&n.hasOwnProperty(dM)&&n.__forward_ref__===Wm}function $m(n){return n&&!!n.\u0275providers}function hM(n){return typeof n=="string"?n:n==null?"":String(n)}function fM(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():hM(n)}function pM(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new be(-200,n)}function nd(n,e){throw new be(-201,!1)}var gu;function mM(){return gu}function gn(n){let e=gu;return gu=n,e}function qm(n,e,t){let i=Ka(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&Ge.Optional)return null;if(e!==void 0)return e;nd(n,"Injector")}var gM={},Js=gM,vM="__NG_DI_FLAG__",Na="ngTempTokenPath",yM="ngTokenPath",_M=/\n/gm,xM="\u0275",zp="__source",js;function _i(n){let e=js;return js=n,e}function MM(n,e=Ge.Default){if(js===void 0)throw new be(-203,!1);return js===null?qm(n,void 0,e):js.get(n,e&Ge.Optional?null:void 0,e)}function Ke(n,e=Ge.Default){return(mM()||MM)(vn(n),e)}function se(n,e=Ge.Default){return Ke(n,ec(e))}function ec(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function vu(n){let e=[];for(let t=0;t<n.length;t++){let i=vn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new be(900,!1);let r,s=Ge.Default;for(let o=0;o<i.length;o++){let a=i[o],c=wM(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Ke(r,s))}else e.push(Ke(i))}return e}function wM(n){return n[vM]}function EM(n,e,t,i){let r=n[Na];throw e[zp]&&r.unshift(e[zp]),n.message=bM(`
`+n.message,r,t,i),n[yM]=r,n[Na]=null,n}function bM(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==xM?n.slice(2):n;let r=rn(e);if(Array.isArray(e))r=e.map(rn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):rn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(_M,`
  `)}`}function SM(){let n=new sr;return se(ni)==="browser"&&(n.store=TM(Ja(),se(Qa))),n}var sr=(()=>{let e=class e{constructor(){this.store={},this.onSerializeCallbacks={}}get(i,r){return this.store[i]!==void 0?this.store[i]:r}set(i,r){this.store[i]=r}remove(i){delete this.store[i]}hasKey(i){return this.store.hasOwnProperty(i)}get isEmpty(){return Object.keys(this.store).length===0}onSerialize(i,r){this.onSerializeCallbacks[i]=r}toJson(){for(let i in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(i))try{this.store[i]=this.onSerializeCallbacks[i]()}catch(r){console.warn("Exception in onSerialize callback: ",r)}return JSON.stringify(this.store).replace(/</g,"\\u003C")}};e.\u0275prov=Ne({token:e,providedIn:"root",factory:SM});let n=e;return n})();function TM(n,e){let t=n.getElementById(e+"-state");if(t?.textContent)try{return JSON.parse(t.textContent)}catch(i){console.warn("Exception while restoring TransferState for app "+e,i)}return{}}var Xm="h",Ym="b",yu=function(n){return n.FirstChild="f",n.NextSibling="n",n}(yu||{}),CM="e",AM="t",id="c",Zm="x",La="r",DM="i",IM="n",RM="d",PM="__nghData__",Jm=PM,tu="ngh",NM="nghm",Km=()=>null;function LM(n,e,t=!1){let i=n.getAttribute(tu);if(i==null)return null;let[r,s]=i.split("|");if(i=t?s:r,!i)return null;let o=s?`|${s}`:"",a=t?r:o,c={};if(i!==""){let u=e.get(sr,null,{optional:!0});u!==null&&(c=u.get(Jm,[])[Number(i)])}let l={data:c,firstChild:n.firstChild??null};return t&&(l.firstChild=n,tc(l,0,n.nextSibling)),a?n.setAttribute(tu,a):n.removeAttribute(tu),l}function OM(){Km=LM}function rd(n,e,t=!1){return Km(n,e,t)}function FM(n){let e=n._lView;return e[Xe].type===2?null:(Em(e)&&(e=e[Rn]),e)}function UM(n){return n.textContent?.replace(/\s/gm,"")}function kM(n){let e=Ja(),t=e.createNodeIterator(n,NodeFilter.SHOW_COMMENT,{acceptNode(s){let o=UM(s);return o==="ngetn"||o==="ngtns"?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i,r=[];for(;i=t.nextNode();)r.push(i);for(let s of r)s.textContent==="ngetn"?s.replaceWith(e.createTextNode("")):s.remove()}function tc(n,e,t){n.segmentHeads??={},n.segmentHeads[e]=t}function _u(n,e){return n.segmentHeads?.[e]??null}function BM(n,e){let t=n.data,i=t[CM]?.[e]??null;return i===null&&t[id]?.[e]&&(i=sd(n,e)),i}function Qm(n,e){return n.data[id]?.[e]??null}function sd(n,e){let t=Qm(n,e)??[],i=0;for(let r of t)i+=r[La]*(r[Zm]??1);return i}function nc(n,e){if(typeof n.disconnectedNodes>"u"){let t=n.data[RM];n.disconnectedNodes=t?new Set(t):null}return!!n.disconnectedNodes?.has(e)}function $r(n,e){let t=n.hasOwnProperty(Aa);return t?n[Aa]:null}var rr=new We(""),eg=new We("",-1),tg=new We(""),Oa=class{get(e,t=Js){if(t===Js){let i=new Error(`NullInjectorError: No provider for ${rn(e)}!`);throw i.name="NullInjectorError",i}return t}};function or(n){return{\u0275providers:n}}function VM(...n){return{\u0275providers:ng(!0,n),\u0275fromNgModule:!0}}function ng(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Qu(e,o=>{let a=o;xu(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&ig(r,s),t}function ig(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];od(r,s=>{e(s,i)})}}function xu(n,e,t,i){if(n=vn(n),!n)return!1;let r=null,s=Bp(n),o=!s&&tr(n);if(!s&&!o){let c=n.ngModule;if(s=Bp(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)xu(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Qu(s.imports,u=>{xu(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&ig(l,e)}if(!a){let l=$r(r)||(()=>new r);e({provide:r,useFactory:l,deps:er},r),e({provide:tg,useValue:r,multi:!0},r),e({provide:rr,useValue:()=>Ke(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;od(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function od(n,e){for(let t of n)$m(t)&&(t=t.\u0275providers),Array.isArray(t)?od(t,e):e(t)}var zM=ut({provide:String,useValue:ut});function rg(n){return n!==null&&typeof n=="object"&&zM in n}function HM(n){return!!(n&&n.useExisting)}function GM(n){return!!(n&&n.useFactory)}function Mu(n){return typeof n=="function"}var ic=new We(""),Ea={},WM={},nu;function ad(){return nu===void 0&&(nu=new Oa),nu}var _n=class{},Ks=class extends _n{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Eu(e,o=>this.processProvider(o)),this.records.set(eg,Hr(void 0,this)),r.has("environment")&&this.records.set(_n,Hr(void 0,this));let s=this.records.get(ic);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(tg,er,Ge.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(let t of this._ngOnDestroyHooks)t.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let t of e)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear()}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=_i(this),i=gn(void 0),r;try{return e()}finally{_i(t),gn(i)}}get(e,t=Js,i=Ge.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Ip))return e[Ip](this);i=ec(i);let r,s=_i(this),o=gn(void 0);try{if(!(i&Ge.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=ZM(e)&&Ka(e);l&&this.injectableDefInScope(l)?c=Hr(wu(e),Ea):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&Ge.Self?ad():this.parent;return t=i&Ge.Optional&&t===Js?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Na]=a[Na]||[]).unshift(rn(e)),s)throw a;return EM(a,e,"R3InjectorError",this.source)}else throw a}finally{gn(o),_i(s)}}resolveInjectorInitializers(){let e=_i(this),t=gn(void 0),i;try{let r=this.get(rr,er,Ge.Self);for(let s of r)s()}finally{_i(e),gn(t)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(rn(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new be(205,!1)}processProvider(e){e=vn(e);let t=Mu(e)?e:vn(e&&e.provide),i=$M(e);if(!Mu(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Hr(void 0,Ea,!0),r.factory=()=>vu(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){return t.value===Ea&&(t.value=WM,t.value=t.factory()),typeof t.value=="object"&&t.value&&YM(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}injectableDefInScope(e){if(!e.providedIn)return!1;let t=vn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function wu(n){let e=Ka(n),t=e!==null?e.factory:$r(n);if(t!==null)return t;if(n instanceof We)throw new be(204,!1);if(n instanceof Function)return jM(n);throw new be(204,!1)}function jM(n){if(n.length>0)throw new be(204,!1);let t=cM(n);return t!==null?()=>t.factory(n):()=>new n}function $M(n){if(rg(n))return Hr(void 0,n.useValue);{let e=qM(n);return Hr(e,Ea)}}function qM(n,e,t){let i;if(Mu(n)){let r=vn(n);return $r(r)||wu(r)}else if(rg(n))i=()=>vn(n.useValue);else if(GM(n))i=()=>n.useFactory(...vu(n.deps||[]));else if(HM(n))i=()=>Ke(vn(n.useExisting));else{let r=vn(n&&(n.useClass||n.provide));if(XM(n))i=()=>new r(...vu(n.deps));else return $r(r)||wu(r)}return i}function Hr(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function XM(n){return!!n.deps}function YM(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function ZM(n){return typeof n=="function"||typeof n=="object"&&n instanceof We}function Eu(n,e){for(let t of n)Array.isArray(t)?Eu(t,e):t&&$m(t)?Eu(t.\u0275providers,e):e(t)}function Ai(n,e){n instanceof Ks&&n.assertNotDestroyed();let t,i=_i(n),r=gn(void 0);try{return e()}finally{_i(i),gn(r)}}function JM(n){return typeof n=="function"}var bu=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function sg(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function rc(){return og}function og(n){return n.type.prototype.ngOnChanges&&(n.setInput=QM),KM}rc.ngInherit=!0;function KM(){let n=cg(this),e=n?.current;if(e){let t=n.previous;if(t===$s)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function QM(n,e,t,i,r){let s=this.declaredInputs[i],o=cg(n)||ew(n,{previous:$s,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new bu(l&&l.currentValue,t,c===$s),sg(n,e,r,t)}var ag="__ngSimpleChanges__";function cg(n){return n[ag]||null}function ew(n,e){return n[ag]=e}var Hp=null;var xi=function(n,e,t){Hp?.(n,e,t)};function tw(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=og(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function lg(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function ba(n,e,t){ug(n,e,3,t)}function Sa(n,e,t,i){(n[Re]&3)===t&&ug(n,e,t,i)}function iu(n,e){let t=n[Re];(t&3)===e&&(t&=16383,t+=1,n[Re]=t)}function ug(n,e,t,i){let r=i!==void 0?n[zr]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[zr]+=65536),(a<s||s==-1)&&(nw(n,t,e,c),n[zr]=(n[zr]&4294901760)+c+2),c++}function Gp(n,e){xi(4,n,e);let t=en(null);try{e.call(n)}finally{en(t),xi(5,n,e)}}function nw(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Re]>>14<n[zr]>>16&&(n[Re]&3)===e&&(n[Re]+=16384,Gp(a,s)):Gp(a,s)}var Wr=-1,Qs=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function iw(n){return n instanceof Qs}function rw(n){return(n.flags&8)!==0}function sw(n){return(n.flags&16)!==0}function dg(n){return n!==Wr}function Fa(n){return n&32767}function ow(n){return n>>16}function Ua(n,e){let t=ow(n),i=e;for(;t>0;)i=i[ro],t--;return i}var Su=!0;function Wp(n){let e=Su;return Su=n,e}var aw=256,hg=aw-1,fg=5,cw=0,Vn={};function lw(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Gs)&&(i=t[Gs]),i==null&&(i=t[Gs]=cw++);let r=i&hg,s=1<<r;e.data[n+(r>>fg)]|=s}function pg(n,e){let t=mg(n,e);if(t!==-1)return t;let i=e[Xe];i.firstCreatePass&&(n.injectorIndex=e.length,ru(i.data,n),ru(e,null),ru(i.blueprint,null));let r=cd(n,e),s=n.injectorIndex;if(dg(r)){let o=Fa(r),a=Ua(r,e),c=a[Xe].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function ru(n,e){n.push(0,0,0,0,0,0,0,0,e)}function mg(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function cd(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=xg(r),i===null)return Wr;if(t++,r=r[ro],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Wr}function uw(n,e,t){lw(n,e,t)}function gg(n,e,t){if(t&Ge.Optional||n!==void 0)return n;nd(e,"NodeInjector")}function vg(n,e,t,i){if(t&Ge.Optional&&i===void 0&&(i=null),!(t&(Ge.Self|Ge.Host))){let r=n[jr],s=gn(void 0);try{return r?r.get(e,i,t&Ge.Optional):qm(e,i,t&Ge.Optional)}finally{gn(s)}}return gg(i,e,t)}function yg(n,e,t,i=Ge.Default,r){if(n!==null){if(e[Re]&2048&&!(i&Ge.Self)){let o=mw(n,e,t,i,Vn);if(o!==Vn)return o}let s=_g(n,e,t,i,Vn);if(s!==Vn)return s}return vg(e,t,i,r)}function _g(n,e,t,i,r){let s=fw(t);if(typeof s=="function"){if(!Im(e,n,i))return i&Ge.Host?gg(r,t,i):vg(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&Ge.Optional))nd(t);else return o}finally{Lm()}}else if(typeof s=="number"){let o=null,a=mg(n,e),c=Wr,l=i&Ge.Host?e[yn][Pn]:null;for((a===-1||i&Ge.SkipSelf)&&(c=a===-1?cd(n,e):e[a+8],c===Wr||!$p(i,!1)?a=-1:(o=e[Xe],a=Fa(c),e=Ua(c,e)));a!==-1;){let u=e[Xe];if(jp(s,a,u.data)){let d=dw(a,e,t,o,i,l);if(d!==Vn)return d}c=e[a+8],c!==Wr&&$p(i,e[Xe].data[a+8]===l)&&jp(s,a,e)?(o=u,a=Fa(c),e=Ua(c,e)):a=-1}}return r}function dw(n,e,t,i,r,s){let o=e[Xe],a=o.data[n+8],c=i==null?Ya(a)&&Su:i!=o&&(a.type&3)!==0,l=r&Ge.Host&&s===a,u=hw(a,o,t,c,l);return u!==null?eo(e,o,u,a):Vn}function hw(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let m=d;m<h;m++){let g=o[m];if(m<c&&t===g||m>=c&&g.type===t)return m}if(r){let m=o[c];if(m&&so(m)&&m.type===t)return c}return null}function eo(n,e,t,i){let r=n[t],s=e.data;if(iw(r)){let o=r;o.resolving&&pM(fM(s[t]));let a=Wp(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?gn(o.injectImpl):null,u=Im(n,i,Ge.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&tw(t,s[t],e)}finally{l!==null&&gn(l),Wp(a),o.resolving=!1,Lm()}}return r}function fw(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Gs)?n[Gs]:void 0;return typeof e=="number"?e>=0?e&hg:pw:e}function jp(n,e,t){let i=1<<n;return!!(t[e+(n>>fg)]&i)}function $p(n,e){return!(n&Ge.Self)&&!(n&Ge.Host&&e)}var Qi=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return yg(this._tNode,this._lView,e,ec(i),t)}};function pw(){return new Qi(Ti(),ei())}function ld(n){return Hu(()=>{let e=n.prototype.constructor,t=e[Aa]||Tu(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Aa]||Tu(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Tu(n){return jm(n)?()=>{let e=Tu(vn(n));return e&&e()}:$r(n)}function mw(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Re]&2048&&!(o[Re]&512);){let a=_g(s,o,t,i|Ge.Self,Vn);if(a!==Vn)return a;let c=s.parent;if(!c){let l=o[xm];if(l){let u=l.get(t,Vn,i);if(u!==Vn)return u}c=xg(o),o=o[ro]}s=c}return r}function xg(n){let e=n[Xe],t=e.type;return t===2?e.declTNode:t===1?n[Pn]:null}function qp(n,e=null,t=null,i){let r=Mg(n,e,t,i);return r.resolveInjectorInitializers(),r}function Mg(n,e=null,t=null,i,r=new Set){let s=[t||er,VM(n)];return i=i||(typeof n=="object"?void 0:rn(n)),new Ks(s,e||ad(),i||null,r)}var ar=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return qp({name:""},r,i,"");{let s=i.name??"";return qp({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=Js,e.NULL=new Oa,e.\u0275prov=Ne({token:e,providedIn:"any",factory:()=>Ke(eg)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})(),gw="ngOriginalError";function su(n){return n[gw]}var ti=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&su(e);for(;t&&su(t);)t=su(t);return t||null}},wg=new We("",{providedIn:"root",factory:()=>se(ti).handleError.bind(void 0)}),xa=new We(""),Eg=!1,bg=new We("",{providedIn:"root",factory:()=>Eg});var vw=/^>|^->|<!--|-->|--!>|<!-$/g,yw=/(<|>)/g,_w="\u200B$1\u200B";function xw(n){return n.replace(vw,e=>e.replace(yw,_w))}var Sg=new Map,Mw=0;function ww(){return Mw++}function Ew(n){Sg.set(n[Xa],n)}function bw(n){Sg.delete(n[Xa])}var Xp="__ngContext__";function qr(n,e){Mi(e)?(n[Xp]=e[Xa],Ew(e)):n[Xp]=e}function Sw(n){return n.ownerDocument.body}function Tg(n){return n instanceof Function?n():n}function Ma(n){return(n??se(ar)).get(ni)==="browser"}var cr=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(cr||{}),Tw;function ud(n,e){return Tw(n,e)}function Gr(n,e,t,i,r){if(i!=null){let s,o=!1;Hn(i)?s=i:Mi(i)&&(o=!0,i=i[on]);let a=Qn(i);n===0&&t!==null?r==null?Pg(e,t,a):ka(e,t,a,r||null,!0):n===1&&t!==null?ka(e,t,a,r||null,!0):n===2?Lg(e,a,o):n===3&&e.destroyNode(a),s!=null&&Gw(e,n,s,t,r)}}function Cg(n,e){return n.createText(e)}function Ag(n,e){return n.createComment(xw(e))}function dd(n,e,t){return n.createElement(e,t)}function Cw(n,e){Dg(n,e),e[on]=null,e[Pn]=null}function Aw(n,e,t,i,r,s){i[on]=r,i[Pn]=e,sc(n,i,t,1,r,s)}function Dg(n,e){sc(n,e,e[Wt],2,null,null)}function Dw(n){let e=n[qs];if(!e)return ou(n[Xe],n);for(;e;){let t=null;if(Mi(e))t=e[qs];else{let i=e[sn];i&&(t=i)}if(!t){for(;e&&!e[In]&&e!==n;)Mi(e)&&ou(e[Xe],e),e=e[Ot];e===null&&(e=n),Mi(e)&&ou(e[Xe],e),t=e&&e[In]}e=t}}function Iw(n,e,t,i){let r=sn+i,s=t.length;i>0&&(t[r-1][In]=e),i<s-sn?(e[In]=t[r],Um(t,sn+i,e)):(t.push(e),e[In]=null),e[Ot]=t;let o=e[ju];o!==null&&t!==o&&Rw(o,e);let a=e[qa];a!==null&&a.insertView(n),fu(e),e[Re]|=128}function Rw(n,e){let t=n[Ia],r=e[Ot][Ot][yn];e[yn]!==r&&(n[Re]|=$u.HasTransplantedViews),t===null?n[Ia]=[e]:t.push(e)}function Ig(n,e){let t=n[Ia],i=t.indexOf(e);t.splice(i,1)}function Cu(n,e){if(n.length<=sn)return;let t=sn+e,i=n[t];if(i){let r=i[ju];r!==null&&r!==n&&Ig(r,i),e>0&&(n[t-1][In]=i[In]);let s=Ra(n,sn+e);Cw(i[Xe],i);let o=s[qa];o!==null&&o.detachView(s[Xe]),i[Ot]=null,i[In]=null,i[Re]&=-129}return i}function Rg(n,e){if(!(e[Re]&256)){let t=e[Wt];t.destroyNode&&sc(n,e,t,3,null,null),Dw(e)}}function ou(n,e){if(!(e[Re]&256)){e[Re]&=-129,e[Re]|=256,e[nr]&&Qf(e[nr]),Nw(n,e),Pw(n,e),e[Xe].type===1&&e[Wt].destroy();let t=e[ju];if(t!==null&&Hn(e[Ot])){t!==e[Ot]&&Ig(t,e);let i=e[qa];i!==null&&i.detachView(n)}bw(e)}}function Pw(n,e){let t=n.cleanup,i=e[Op];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[Op]=null);let r=e[Ws];if(r!==null){e[Ws]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function Nw(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Qs)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];xi(4,a,c);try{c.call(a)}finally{xi(5,a,c)}}else{xi(4,r,s);try{s.call(r)}finally{xi(5,r,s)}}}}}function Lw(n,e,t){return Ow(n,e.parent,t)}function Ow(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[on];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===zn.None||s===zn.Emulated)return null}return Gn(i,t)}}function ka(n,e,t,i,r){n.insertBefore(e,t,i,r)}function Pg(n,e,t){n.appendChild(e,t)}function Yp(n,e,t,i,r){i!==null?ka(n,e,t,i,r):Pg(n,e,t)}function Fw(n,e,t,i){n.removeChild(e,t,i)}function hd(n,e){return n.parentNode(e)}function Uw(n,e){return n.nextSibling(e)}function kw(n,e,t){return Vw(n,e,t)}function Bw(n,e,t){return n.type&40?Gn(n,t):null}var Vw=Bw,Zp;function zw(n,e,t,i){let r=Lw(n,i,e),s=e[Wt],o=i.parent||e[Pn],a=kw(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Yp(s,r,t[c],a,!1);else Yp(s,r,t,a,!1);Zp!==void 0&&Zp(s,i,e,t,r)}function Ta(n,e){if(e!==null){let t=e.type;if(t&3)return Gn(e,n);if(t&4)return Au(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Ta(n,i);{let r=n[e.index];return Hn(r)?Au(-1,r):Qn(r)}}else{if(t&32)return ud(e,n)()||Qn(n[e.index]);{let i=Ng(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Zs(n[yn]);return Ta(r,i)}else return Ta(n,e.next)}}}return null}function Ng(n,e){if(e!==null){let i=n[yn][Pn],r=e.projection;return i.projection[r]}return null}function Au(n,e){let t=sn+n+1;if(t<e.length){let i=e[t],r=i[Xe].firstChild;if(r!==null)return Ta(i,r)}return e[Kn]}function Lg(n,e,t){let i=hd(n,e);i&&Fw(n,i,e,t)}function Og(n){n.textContent=""}function fd(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&qr(Qn(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)fd(n,e,t.child,i,r,s,!1),Gr(e,n,r,a,s);else if(c&32){let l=ud(t,i),u;for(;u=l();)Gr(e,n,r,u,s);Gr(e,n,r,a,s)}else c&16?Hw(n,e,i,t,r,s):Gr(e,n,r,a,s);t=o?t.projectionNext:t.next}}function sc(n,e,t,i,r,s){fd(t,i,n.firstChild,e,r,s,!1)}function Hw(n,e,t,i,r,s){let o=t[yn],c=o[Pn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Gr(e,n,r,u,s)}else{let l=c,u=o[Ot];Pa(i)&&(l.flags|=128),fd(n,e,l,u,r,s,!0)}}function Gw(n,e,t,i,r){let s=t[Kn],o=Qn(t);s!==o&&Gr(e,n,i,s,r);for(let a=sn;a<t.length;a++){let c=t[a];sc(c[Xe],c,n,e,i,s)}}function Ww(n,e,t){n.setAttribute(e,"style",t)}function Fg(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Ug(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&hu(n,e,i),r!==null&&Fg(n,e,r),s!==null&&Ww(n,e,s)}var kg={};function jw(n,e,t,i){if(!i)if((e[Re]&3)===3){let s=n.preOrderCheckHooks;s!==null&&ba(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Sa(e,s,0,t)}ir(t)}function co(n,e=Ge.Default){let t=ei();if(t===null)return Ke(n,e);let i=Ti();return yg(i,t,vn(n),e)}function Bg(n,e,t,i,r,s){let o=en(null);try{let a=null;r&wi.SignalBased&&(a=e[i][Yf]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&wi.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):sg(e,a,i,s)}finally{en(o)}}function $w(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)ir(~r);else{let s=r,o=t[++i],a=t[++i];Qx(o,s);let c=e[s];a(2,c)}}}finally{ir(-1)}}function pd(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[on]=r,d[Re]=i|4|128|8|64,(l!==null||n&&n[Re]&2048)&&(d[Re]|=2048),bm(d),d[Ot]=d[ro]=n,d[Ei]=t,d[bi]=o||n&&n[bi],d[Wt]=a||n&&n[Wt],d[jr]=c||n&&n[jr]||null,d[Pn]=s,d[Xa]=ww(),d[Jn]=u,d[xm]=l,d[yn]=e.type==2?n[yn]:d,d}function Vg(n,e,t,i,r){let s=n.data[e];if(s===null)s=qw(n,e,t,i,r),Kx()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=Yx();s.injectorIndex=o===null?-1:o.injectorIndex}return Yu(s,!0),s}function qw(n,e,t,i,r){let s=Cm(),o=Am(),a=o?s:s&&s.parent,c=n.data[e]=tE(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function zg(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Hg(n,e,t,i,r){let s=nM(),o=i&2;try{ir(-1),o&&e.length>Rn&&jw(n,e,Rn,!1),xi(o?2:0,r),t(i,r)}finally{ir(s),xi(o?3:1,r)}}function Gg(n,e,t){if(wm(e)){let i=en(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{en(i)}}}function Xw(n,e,t){Sm()&&(oE(n,e,t,Gn(t,e)),(t.flags&64)===64&&Xg(n,e,t))}function Yw(n,e,t=Gn){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function Wg(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=jg(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function jg(n,e,t,i,r,s,o,a,c,l,u){let d=Rn+i,h=d+r,m=Zw(d,h),g=typeof l=="function"?l():l;return m[Xe]={type:n,blueprint:m,template:t,queries:null,viewQuery:a,declTNode:e,data:m.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function Zw(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:kg);return t}function Jw(n,e,t,i){let s=i.get(bg,Eg)||t===zn.ShadowDom,o=n.selectRootElement(e,s);return Kw(o),o}function Kw(n){$g(n)}var $g=()=>null;function Qw(n){Bm(n)?Og(n):kM(n)}function eE(){$g=Qw}function tE(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return ao()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Jp(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=wi.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?Kp(i,t,l,a,c):Kp(i,t,l,a)}return i}function Kp(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function nE(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,m=h?h.inputs:null,g=h?h.outputs:null;c=Jp(0,d.inputs,u,c,m),l=Jp(1,d.outputs,u,l,g);let v=c!==null&&o!==null&&!fm(e)?mE(c,u,o):null;a.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function iE(n,e,t,i){if(Sm()){let r=i===null?null:{"":-1},s=cE(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&qg(n,e,t,o,r,a),r&&lE(t,i,r)}t.mergedAttrs=Gu(t.mergedAttrs,t.attrs)}function qg(n,e,t,i,r,s){for(let l=0;l<i.length;l++)uw(pg(t,e),n,i[l].type);dE(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=zg(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=Gu(t.mergedAttrs,u.hostAttrs),hE(n,t,e,c,u),uE(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}nE(n,t,s)}function rE(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;sE(o)!=a&&o.push(a),o.push(t,i,s)}}function sE(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function oE(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;Ya(t)&&fE(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||pg(t,e),qr(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=eo(e,n,a,t);if(qr(l,e),o!==null&&pE(e,a-r,l,c,t,o),so(c)){let u=oo(t.index,e);u[Ei]=eo(e,n,a,t)}}}function Xg(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=eM();try{ir(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];pu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&aE(c,l)}}finally{ir(-1),pu(o)}}function aE(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function cE(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(Sx(e,o.selectors,!1))if(i||(i=[]),so(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;Du(n,e,c)}else i.unshift(o),Du(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function Du(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function lE(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new be(-301,!1);i.push(e[r],s)}}}function uE(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;so(e)&&(t[""]=n)}}function dE(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function hE(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=$r(r.type,!0)),o=new Qs(s,so(r),co);n.blueprint[i]=o,t[i]=o,rE(n,e,i,zg(n,t,r.hostVars,kg),r)}function fE(n,e,t){let i=Gn(e,n),r=Wg(t),s=n[bi].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=md(n,pd(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function pE(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];Bg(i,t,c,l,u,d)}}function mE(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function gE(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Yg(n,e){let t=n.contentQueries;if(t!==null){let i=en(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Dm(s),a.contentQueries(2,e[o],o)}}}finally{en(i)}}}function md(n,e){return n[qs]?n[Fp][In]=e:n[qs]=e,n[Fp]=e,e}function Iu(n,e,t){Dm(0);let i=en(null);try{e(n,t)}finally{en(i)}}function vE(n,e){let t=n[jr],i=t?t.get(ti,null):null;i&&i.handleError(e)}function Zg(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];Bg(u,l,i,a,c,r)}}function yE(n,e){let t=oo(e,n),i=t[Xe];_E(i,t);let r=t[on];r!==null&&t[Jn]===null&&(t[Jn]=rd(r,t[jr])),Jg(i,t,t[Ei])}function _E(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Jg(n,e,t){Zu(e);try{let i=n.viewQuery;i!==null&&Iu(1,i,t);let r=n.template;r!==null&&Hg(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[qa]?.finishViewCreation(n),n.staticContentQueries&&Yg(n,e),n.staticViewQueries&&Iu(2,n.viewQuery,t);let s=n.components;s!==null&&xE(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Re]&=-5,Ju()}}function xE(n,e){for(let t=0;t<e.length;t++)yE(n,e[t])}function Qp(n,e){return!e||e.firstChild===null||Pa(n)}function ME(n,e,t,i=!0){let r=e[Xe];if(Iw(r,e,n,t),i){let o=Au(t,n),a=e[Wt],c=hd(a,n[Kn]);c!==null&&Aw(r,n[Pn],a,e,c,o)}let s=e[Jn];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Ba(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(Qn(s)),Hn(s)&&wE(s,i);let o=t.type;if(o&8)Ba(n,e,t.child,i);else if(o&32){let a=ud(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=Ng(e,t);if(Array.isArray(a))i.push(...a);else{let c=Zs(e[yn]);Ba(c[Xe],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function wE(n,e){for(let t=sn;t<n.length;t++){let i=n[t],r=i[Xe].firstChild;r!==null&&Ba(i[Xe],i,r,e)}n[Kn]!==n[on]&&e.push(n[Kn])}var Kg=[];function EE(n){return n[nr]??bE(n)}function bE(n){let e=Kg.pop()??Object.create(TE);return e.lView=n,e}function SE(n){n.lView[nr]!==n&&(n.lView=null,Kg.push(n))}var TE=Mt(pe({},Zf),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{Ys(n.lView)},consumerOnSignalRead(){this.lView[nr]=this}});function Qg(n){return tv(n[qs])}function ev(n){return tv(n[In])}function tv(n){for(;n!==null&&!Hn(n);)n=n[In];return n}var nv=100;function iv(n,e=!0,t=0){let i=n[bi],r=i.rendererFactory,s=!1;s||r.begin?.();try{CE(n,t)}catch(o){throw e&&vE(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function CE(n,e){Ru(n,e);let t=0;for(;Xu(n);){if(t===nv)throw new be(103,!1);t++,Ru(n,1)}}function AE(n,e,t,i){let r=e[Re];if((r&256)===256)return;let s=!1;!s&&e[bi].inlineEffectRunner?.flush(),Zu(e);let o=null,a=null;!s&&DE(n)&&(a=EE(e),o=Jf(a));try{bm(e),Jx(n.bindingStartIndex),t!==null&&Hg(n,e,t,2,i);let c=(r&3)===3;if(!s)if(c){let d=n.preOrderCheckHooks;d!==null&&ba(e,d,null)}else{let d=n.preOrderHooks;d!==null&&Sa(e,d,0,null),iu(e,0)}if(IE(e),rv(e,0),n.contentQueries!==null&&Yg(n,e),!s)if(c){let d=n.contentCheckHooks;d!==null&&ba(e,d)}else{let d=n.contentHooks;d!==null&&Sa(e,d,1),iu(e,1)}$w(n,e);let l=n.components;l!==null&&ov(e,l,0);let u=n.viewQuery;if(u!==null&&Iu(2,u,i),!s)if(c){let d=n.viewCheckHooks;d!==null&&ba(e,d)}else{let d=n.viewHooks;d!==null&&Sa(e,d,2),iu(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[eu]){for(let d of e[eu])d();e[eu]=null}s||(e[Re]&=-73)}catch(c){throw Ys(e),c}finally{a!==null&&(Kf(a,o),SE(a)),Ju()}}function DE(n){return n.type!==2}function rv(n,e){for(let t=Qg(n);t!==null;t=ev(t))for(let i=sn;i<t.length;i++){let r=t[i];sv(r,e)}}function IE(n){for(let e=Qg(n);e!==null;e=ev(e)){if(!(e[Re]&$u.HasTransplantedViews))continue;let t=e[Ia];for(let i=0;i<t.length;i++){let r=t[i],s=r[Ot];zx(r)}}}function RE(n,e,t){let i=oo(e,n);sv(i,t)}function sv(n,e){qu(n)&&Ru(n,e)}function Ru(n,e){let i=n[Xe],r=n[Re],s=n[nr],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Ll(s)),s&&(s.dirty=!1),n[Re]&=-9217,o)AE(i,n,i.template,n[Ei]);else if(r&8192){rv(n,1);let a=i.components;a!==null&&ov(n,a,1)}}function ov(n,e,t){for(let i=0;i<e.length;i++)RE(n,e[i],t)}function av(n){for(n[bi].changeDetectionScheduler?.notify();n;){n[Re]|=64;let e=Zs(n);if(Em(n)&&!e)return n;n=e}return null}var Xr=class{get rootNodes(){let e=this._lView,t=e[Xe];return Ba(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Ei]}set context(e){this._lView[Ei]=e}get destroyed(){return(this._lView[Re]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Ot];if(Hn(e)){let t=e[Da],i=t?t.indexOf(this):-1;i>-1&&(Cu(e,i),Ra(t,i))}this._attachedToViewContainer=!1}Rg(this._lView[Xe],this._lView)}onDestroy(e){Hx(this._lView,e)}markForCheck(){av(this._cdRefInjectingView||this._lView)}detach(){this._lView[Re]&=-129}reattach(){fu(this._lView),this._lView[Re]|=128}detectChanges(){this._lView[Re]|=1024,iv(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new be(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,Dg(this._lView[Xe],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new be(902,!1);this._appRef=e,fu(this._lView)}};function cv(n){let e=n[Xs]??[],i=n[Ot][Wt];for(let r of e)PE(r,i);n[Xs]=er}function PE(n,e){let t=0,i=n.firstChild;if(i){let r=n.data[La];for(;t<r;){let s=i.nextSibling;Lg(e,i,!1),i=s,t++}}}function lv(n){cv(n);for(let e=sn;e<n.length;e++)Va(n[e])}function Va(n){let e=n[Xe];for(let t=Rn;t<e.bindingStartIndex;t++)if(Hn(n[t])){let i=n[t];lv(i)}else Mi(n[t])&&Va(n[t])}function NE(n){let e=n._views;for(let t of e){let i=FM(t);if(i!==null&&i[on]!==null)if(Mi(i))Va(i);else{let r=i[on];Va(r),lv(i)}}}var LE=new RegExp(`^(\\d+)*(${Ym}|${Xm})*(.*)`);function OE(n){let e=n.match(LE),[t,i,r,s]=e,o=i?parseInt(i,10):r,a=[];for(let[c,l,u]of s.matchAll(/(f|n)(\d*)/g)){let d=parseInt(u,10)||1;a.push(l,d)}return[o,...a]}function FE(n){return!n.prev&&n.parent?.type===8}function au(n){return n.index-Rn}function oc(n,e,t,i){let r=null,s=au(i),o=n.data[IM];if(o?.[s])r=kE(o[s],t);else if(e.firstChild===i)r=n.firstChild;else{let a=i.prev===null,c=i.prev??i.parent;if(FE(i)){let l=au(i.parent);r=_u(n,l)}else{let l=Gn(c,t);if(a)r=l.firstChild;else{let u=au(c),d=_u(n,u);if(c.type===2&&d){let m=sd(n,u)+1;r=ac(m,d)}else r=l.nextSibling}}}return r}function ac(n,e){let t=e;for(let i=0;i<n;i++)t=t.nextSibling;return t}function UE(n,e){let t=n;for(let i=0;i<e.length;i+=2){let r=e[i],s=e[i+1];for(let o=0;o<s;o++)switch(r){case yu.FirstChild:t=t.firstChild;break;case yu.NextSibling:t=t.nextSibling;break}}return t}function kE(n,e){let[t,...i]=OE(n),r;if(t===Xm)r=e[yn][on];else if(t===Ym)r=Sw(e[yn][on]);else{let s=Number(t);r=Qn(e[s+Rn])}return UE(r,i)}function BE(n,e){let t=[];for(let i of e)for(let r=0;r<(i[Zm]??1);r++){let s={data:i,firstChild:null};i[La]>0&&(s.firstChild=n,n=ac(i[La],n)),t.push(s)}return[n,t]}var uv=()=>null;function VE(n,e){let t=n[Xs];return!e||t===null||t.length===0?null:t[0].data[DM]===e?t.shift():(cv(n),null)}function zE(){uv=VE}function em(n,e){return uv(n,e)}var Pu=class{},Nu=class{},za=class{};function HE(n){let e=Error(`No component factory found for ${rn(n)}.`);return e[GE]=n,e}var GE="ngComponent";var Lu=class{resolveComponentFactory(e){throw HE(e)}},cc=(()=>{let e=class e{};e.NULL=new Lu;let n=e;return n})(),to=class{};var WE=(()=>{let e=class e{};e.\u0275prov=Ne({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),cu={};var lo=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=jE;let n=e;return n})();function jE(n){return $E(Ti(),ei(),(n&16)===16)}function $E(n,e,t){if(Ya(n)&&!t){let i=oo(n.index,e);return new Xr(i,i)}else if(n.type&47){let i=e[yn];return new Xr(i,e)}return null}var tm=new Set;function uo(n){tm.has(n)||(tm.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function nm(...n){}function qE(){let n=typeof Hs.requestAnimationFrame=="function",e=Hs[n?"requestAnimationFrame":"setTimeout"],t=Hs[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var mt=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Dn(!1),this.onMicrotaskEmpty=new Dn(!1),this.onStable=new Dn(!1),this.onError=new Dn(!1),typeof Zone>"u")throw new be(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=qE().nativeRequestAnimationFrame,ZE(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new be(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new be(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,XE,nm,nm);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},XE={};function gd(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function YE(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(Hs,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,Ou(n),n.isCheckStableRunning=!0,gd(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),Ou(n))}function ZE(n){let e=()=>{YE(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(JE(a))return t.invokeTask(r,s,o,a);try{return im(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),rm(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return im(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),rm(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Ou(n),gd(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Ou(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function im(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function rm(n){n._nesting--,gd(n)}function JE(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}var dv=(()=>{let e=class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){let i=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let r of i)r();this.handler?.execute()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=Ne({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function Fu(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Dp(r,a);else if(s==2){let c=a,l=e[++o];i=Dp(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var Ha=class extends cc{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=tr(e);return new no(t,this.ngModule)}};function sm(n){let e=[];for(let t in n){if(!n.hasOwnProperty(t))continue;let i=n[t];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:t})}return e}function KE(n){let e=n.toLowerCase();return e==="svg"?Ox:e==="math"?Fx:null}var Uu=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=ec(i);let r=this.injector.get(e,cu,i);return r!==cu||t===cu?r:this.parentInjector.get(e,t,i)}},no=class extends za{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=sm(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return sm(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=Dx(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){r=r||this.ngModule;let s=r instanceof _n?r:r?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let o=s?new Uu(e,s):e,a=o.get(to,null);if(a===null)throw new be(407,!1);let c=o.get(WE,null),l=o.get(dv,null),u=o.get(Pu,null),d={rendererFactory:a,sanitizer:c,inlineEffectRunner:null,afterRenderEventManager:l,changeDetectionScheduler:u},h=a.createRenderer(null,this.componentDef),m=this.componentDef.selectors[0][0]||"div",g=i?Jw(h,i,this.componentDef.encapsulation,o):dd(h,m,KE(m)),v=512;this.componentDef.signals?v|=4096:this.componentDef.onPush||(v|=16);let p=null;g!==null&&(p=rd(g,o,!0));let f=jg(0,null,null,1,0,null,null,null,null,null,null),S=pd(null,f,null,v,null,null,d,h,o,null,p);Zu(S);let w,b;try{let I=this.componentDef,A,C=null;I.findHostDirectiveDefs?(A=[],C=new Map,I.findHostDirectiveDefs(I,A,C),A.push(I)):A=[I];let G=QE(S,g),ie=eb(G,g,I,A,S,d,h);b=Bx(f,Rn),g&&ib(h,I,g,i),t!==void 0&&rb(b,this.ngContentSelectors,t),w=nb(ie,I,A,C,S,[sb]),Jg(f,S,null)}finally{Ju()}return new ku(this.componentType,w,Ku(b,S),S,b)}},ku=class extends Nu{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new Xr(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;Zg(s[Xe],s,r,e,t),this.previousInputValues.set(e,t);let o=oo(this._tNode.index,s);av(o)}}get injector(){return new Qi(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function QE(n,e){let t=n[Xe],i=Rn;return n[i]=e,Vg(t,i,2,"#host",null)}function eb(n,e,t,i,r,s,o){let a=r[Xe];tb(i,n,e,o);let c=null;e!==null&&(c=rd(e,r[jr]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=pd(r,Wg(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&Du(a,n,i.length-1),md(r,d),r[n.index]=d}function tb(n,e,t,i){for(let r of n)e.mergedAttrs=Gu(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(Fu(e,e.mergedAttrs,!0),t!==null&&Ug(i,t,e))}function nb(n,e,t,i,r,s){let o=Ti(),a=r[Xe],c=Gn(o,r);qg(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=eo(r,a,d,o);qr(h,r)}Xg(a,r,o),c&&qr(c,r);let l=eo(r,a,o.directiveStart+o.componentOffset,o);if(n[Ei]=r[Ei]=l,s!==null)for(let u of s)u(l,e);return Gg(a,o,r),l}function ib(n,e,t,i){if(i)hu(n,t,["ng-version","17.2.2"]);else{let{attrs:r,classes:s}=Ix(e.selectors[0]);r&&hu(n,t,r),s&&s.length>0&&Fg(n,t,s.join(" "))}}function rb(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function sb(){let n=Ti();lg(ei()[Xe],n)}var lc=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=ob;let n=e;return n})();function ob(){let n=Ti();return cb(n,ei())}var ab=lc,hv=class extends ab{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Ku(this._hostTNode,this._hostLView)}get injector(){return new Qi(this._hostTNode,this._hostLView)}get parentInjector(){let e=cd(this._hostTNode,this._hostLView);if(dg(e)){let t=Ua(e,this._hostLView),i=Fa(e),r=t[Xe].data[i+8];return new Qi(r,t)}else return new Qi(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=om(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-sn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=em(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Qp(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!JM(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new no(tr(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let v=(o?l:this.parentInjector).get(_n,null);v&&(s=v)}let u=tr(c.componentType??{}),d=em(this._lContainer,u?.id??null),h=d?.firstChild??null,m=c.create(l,r,h,s);return this.insertImpl(m.hostView,a,Qp(this._hostTNode,d)),m}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(Vx(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Ot],l=new hv(c,c[Pn],c[Ot]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return ME(o,r,s,i),e.attachToViewContainerRef(),Um(lu(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=om(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Cu(this._lContainer,t);i&&(Ra(lu(this._lContainer),t),Rg(i[Xe],i))}detach(e){let t=this._adjustIndex(e,-1),i=Cu(this._lContainer,t);return i&&Ra(lu(this._lContainer),t)!=null?new Xr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function om(n){return n[Da]}function lu(n){return n[Da]||(n[Da]=[])}function cb(n,e){let t,i=e[n.index];return Hn(i)?t=i:(t=gE(i,e,null,n),e[n.index]=t,md(e,t)),fv(t,e,n,i),new hv(t,n,e)}function lb(n,e){let t=n[Wt],i=t.createComment(""),r=Gn(e,n),s=hd(t,r);return ka(t,s,i,Uw(t,r),!1),i}var fv=mv,pv=()=>!1;function mv(n,e,t,i){if(n[Kn])return;let r;t.type&8?r=Qn(i):r=lb(e,t),n[Kn]=r}function ub(n,e,t){if(n[Kn]&&n[Xs])return!0;let i=t[Jn],r=e.index-Rn;if(!i||aM(e)||nc(i,r))return!1;let o=_u(i,r),a=i.data[id]?.[r],[c,l]=BE(o,a);return n[Kn]=c,n[Xs]=l,!0}function db(n,e,t,i){pv(n,t,e)||mv(n,e,t,i)}function hb(){fv=db,pv=ub}var Si=class{},io=class{};var Bu=class extends Si{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Ha(this);let r=vm(e);this._bootstrapComponents=Tg(r.bootstrap),this._r3Injector=Mg(e,t,[{provide:Si,useValue:this},{provide:cc,useValue:this.componentFactoryResolver},...i],rn(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Vu=class extends io{constructor(e){super(),this.moduleType=e}create(e){return new Bu(this.moduleType,e,[])}};var Ga=class extends Si{constructor(e){super(),this.componentFactoryResolver=new Ha(this),this.instance=null;let t=new Ks([...e.providers,{provide:Si,useValue:this},{provide:cc,useValue:this.componentFactoryResolver}],e.parent||ad(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function vd(n,e,t=null){return new Ga({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var ho=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Lt(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var fb=gv;function gv(n,e,t,i){return Ci(!0),e[Wt].createComment("")}function pb(n,e,t,i){let r=e[Jn],s=!r||ao()||nc(r,i);if(Ci(s),s)return gv(n,e,t,i);let o=r.data[AM]?.[i]??null;o!==null&&t.tView!==null&&t.tView.ssrId===null&&(t.tView.ssrId=o);let a=oc(r,n,e,t);tc(r,i,a);let c=sd(r,i);return ac(c,a)}function mb(){fb=pb}function am(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";Zg(n,t,s[o],o,i)}function gb(n,e,t,i,r,s){let o=e.consts,a=Up(o,r),c=Vg(e,n,2,i,a);return iE(e,t,c,Up(o,s)),c.attrs!==null&&Fu(c,c.attrs,!1),c.mergedAttrs!==null&&Fu(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function vv(n,e,t,i){let r=ei(),s=Tm(),o=Rn+n,a=r[Wt],c=s.firstCreatePass?gb(o,s,r,e,t,i):s.data[o],l=_v(s,r,c,a,e,n);r[o]=l;let u=Lx(c);return Yu(c,!0),Ug(a,l,c),(c.flags&32)!==32&&iM()&&zw(s,r,l,c),Gx()===0&&qr(l,r),Wx(),u&&(Xw(s,r,c),Gg(s,c,r)),i!==null&&Yw(r,c),vv}function yv(){let n=Ti();Am()?Zx():(n=n.parent,Yu(n,!1));let e=n;$x(e)&&Xx(),jx();let t=Tm();return t.firstCreatePass&&(lg(t,n),wm(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&rw(e)&&am(t,e,ei(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&sw(e)&&am(t,e,ei(),e.stylesWithoutHost,!1),yv}function fo(n,e,t,i){return vv(n,e,t,i),yv(),fo}var _v=(n,e,t,i,r,s)=>(Ci(!0),dd(i,r,Om()));function vb(n,e,t,i,r,s){let o=e[Jn],a=!o||ao()||nc(o,s);if(Ci(a),a)return dd(i,r,Om());let c=oc(o,n,e,t);return Qm(o,s)&&tc(o,s,c.nextSibling),o&&(km(t)||Bm(c))&&Ya(t)&&(qx(t),Og(c)),c}function yb(){_v=vb}var _b=(n,e,t,i)=>(Ci(!0),Ag(e[Wt],""));function xb(n,e,t,i){let r,s=e[Jn],o=!s||ao();if(Ci(o),o)return Ag(e[Wt],"");let a=oc(s,n,e,t),c=BM(s,i);return tc(s,i,a),r=ac(c,a),r}function Mb(){_b=xb}var Wa="en-US";var wb=Wa;function Eb(n){typeof n=="string"&&(wb=n.toLowerCase().replace(/_/g,"-"))}var bb=(n,e,t,i,r)=>(Ci(!0),Cg(e[Wt],i));function Sb(n,e,t,i,r){let s=e[Jn],o=!s||ao()||nc(s,r);return Ci(o),o?Cg(e[Wt],i):oc(s,n,e,t)}function Tb(){bb=Sb}var Cb=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=ng(!1,i.type),s=r.length>0?vd([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=Ne({token:e,providedIn:"environment",factory:()=>new e(Ke(_n))});let n=e;return n})();function uc(n){uo("NgStandalone"),n.getStandaloneInjector=e=>e.get(Cb).getOrCreateStandaloneInjector(n)}var dc=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();var xv=new We("");function po(n){return!!n&&typeof n.then=="function"}function Mv(n){return!!n&&typeof n.subscribe=="function"}var wv=new We(""),Ev=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=se(wv,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(po(o))i.push(o);else if(Mv(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Yr=new We("");function Ab(){ep(()=>{throw new be(600,!1)})}function Db(n){return n.isBoundToModule}function Ib(n,e,t){try{let i=t();return po(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Di=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=se(wg),this.afterRenderEffectManager=se(dv),this.componentTypes=[],this.components=[],this.isStable=se(ho).hasPendingTasks.pipe(Ye(i=>!i)),this._injector=se(_n)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof za;if(!this._injector.get(Ev).done){let m=!s&&gm(i),g=!1;throw new be(405,g)}let a;s?a=i:a=this._injector.get(cc).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=Db(a)?void 0:this._injector.get(Si),l=r||a.selector,u=a.create(ar.NULL,[],l,c),d=u.location.nativeElement,h=u.injector.get(xv,null);return h?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),uu(this.components,u),h?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new be(101,!1);try{this._runningTick=!0,this.detectChangesInAttachedViews()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1}}detectChangesInAttachedViews(){let i=0;do{if(i===nv)throw new be(103,!1);let r=i===0;for(let{_lView:s,notifyErrorHandler:o}of this._views)!r&&!cm(s)||this.detectChangesInView(s,o,r);this.afterRenderEffectManager.execute(),i++}while(this._views.some(({_lView:r})=>cm(r)))}detectChangesInView(i,r,s){let o;s?(o=0,i[Re]|=1024):i[Re]&64?o=0:o=1,iv(i,r,o)}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;uu(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(Yr,[]);[...this._bootstrapListeners,...r].forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>uu(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new be(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function uu(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var wa;function yd(n){wa??=new WeakMap;let e=wa.get(n);if(e)return e;let t=n.isStable.pipe(Cn(i=>i)).toPromise().then(()=>{});return wa.set(n,t),n.onDestroy(()=>wa?.delete(n)),t}function cm(n){return Xu(n)}var zu=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},_d=(()=>{let e=class e{compileModuleSync(i){return new Vu(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),s=vm(i),o=Tg(s.declarations).reduce((a,c)=>{let l=tr(c);return l&&a.push(new no(l)),a},[]);return new zu(r,o)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Rb=(()=>{let e=class e{constructor(){this.zone=se(mt),this.applicationRef=se(Di)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Pb(n){return[{provide:mt,useFactory:n},{provide:rr,multi:!0,useFactory:()=>{let e=se(Rb,{optional:!0});return()=>e.initialize()}},{provide:rr,multi:!0,useFactory:()=>{let e=se(Fb);return()=>{e.initialize()}}},{provide:wg,useFactory:Nb}]}function Nb(){let n=se(mt),e=se(ti);return t=>n.runOutsideAngular(()=>e.handleError(t))}function Lb(n){let e=Pb(()=>new mt(Ob(n)));return or([[],e])}function Ob(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var Fb=(()=>{let e=class e{constructor(){this.subscription=new St,this.initialized=!1,this.zone=se(mt),this.pendingTasks=se(ho)}initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{mt.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{mt.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Ub(){return typeof $localize<"u"&&$localize.locale||Wa}var xd=new We("",{providedIn:"root",factory:()=>se(xd,Ge.Optional|Ge.SkipSelf)||Ub()});var bv=new We("");var Ca=null;function kb(n=[],e){return ar.create({name:e,providers:[{provide:ic,useValue:"platform"},{provide:bv,useValue:new Set([()=>Ca=null])},...n]})}function Bb(n=[]){if(Ca)return Ca;let e=kb(n);return Ca=e,Ab(),Vb(e),e}function Vb(n){n.get(ed,null)?.forEach(t=>t())}function Sv(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=Bb(i),s=[Lb(),...t||[]],a=new Ga({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(mt);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(ti,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:m=>{l.handleError(m)}})});let d=()=>a.destroy(),h=r.get(bv);return h.add(d),a.onDestroy(()=>{u.unsubscribe(),h.delete(d)}),Ib(l,c,()=>{let m=a.get(Ev);return m.runInitializers(),m.donePromise.then(()=>{let g=a.get(xd,Wa);Eb(g||Wa);let v=a.get(Di);return e!==void 0&&v.bootstrap(e),v})})})}catch(e){return Promise.reject(e)}}var lm=!1;function zb(){lm||(lm=!0,OM(),yb(),Tb(),Mb(),mb(),hb(),zE(),eE())}function Hb(n,e){return yd(n)}function Tv(){return or([{provide:xa,useFactory:()=>{let n=!0;return Ma()&&(n=!!se(sr,{optional:!0})?.get(Jm,null)),n&&uo("NgHydration"),n}},{provide:rr,useValue:()=>{Ma()&&se(xa)&&(Gb(),zb())},multi:!0},{provide:bg,useFactory:()=>Ma()&&se(xa)},{provide:Yr,useFactory:()=>{if(Ma()&&se(xa)){let n=se(Di),e=se(ar);return()=>{Hb(n,e).then(()=>{mt.assertInAngularZone(),NE(n)})}}return()=>{}},multi:!0}])}function Gb(){let n=Ja(),e;for(let t of n.body.childNodes)if(t.nodeType===Node.COMMENT_NODE&&t.textContent?.trim()===NM){e=t;break}if(!e)throw new be(-507,!1)}var Nv=null;function Zr(){return Nv}function Lv(n){Nv??=n}var fc=class{};var xn=new We(""),Ov=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>se(Xb),providedIn:"platform"});let n=e;return n})();var Xb=(()=>{let e=class e extends Ov{constructor(){super(),this._doc=se(xn),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Zr().getBaseHref(this._doc)}onPopState(i){let r=Zr().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=Zr().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,s){this._history.pushState(i,r,s)}replaceState(i,r,s){this._history.replaceState(i,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>new e,providedIn:"platform"});let n=e;return n})();function Fv(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function Cv(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function lr(n){return n&&n[0]!=="?"?"?"+n:n}var mc=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>se(Uv),providedIn:"root"});let n=e;return n})(),Yb=new We(""),Uv=(()=>{let e=class e extends mc{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??se(xn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return Fv(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+lr(this._platformLocation.search),s=this._platformLocation.hash;return s&&i?`${r}${s}`:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+lr(o));this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+lr(o));this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(Ke(Ov),Ke(Yb,8))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var mo=(()=>{let e=class e{constructor(i){this._subject=new Dn,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=Kb(Cv(Av(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+lr(r))}normalize(i){return e.stripTrailingSlash(Jb(this._basePath,Av(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",s=null){this._locationStrategy.pushState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+lr(r)),s)}replaceState(i,r="",s=null){this._locationStrategy.replaceState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+lr(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(s=>s(i,r))}subscribe(i,r,s){return this._subject.subscribe({next:i,error:r,complete:s})}};e.normalizeQueryParams=lr,e.joinWithSlash=Fv,e.stripTrailingSlash=Cv,e.\u0275fac=function(r){return new(r||e)(Ke(mc))},e.\u0275prov=Ne({token:e,factory:()=>Zb(),providedIn:"root"});let n=e;return n})();function Zb(){return new mo(Ke(mc))}function Jb(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function Av(n){return n.replace(/\/index.html$/,"")}function Kb(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function kv(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Bv="browser",Qb="server";function Md(n){return n===Qb}var pc=class{};var vc=class n{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let r=t.slice(0,i),s=r.toLowerCase(),o=t.slice(i+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,i)=>{this.setHeaderEntries(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":let s=e.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}setHeaderEntries(e,t){let i=(Array.isArray(t)?t:[t]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var $v=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}($v||{}),wd=class{constructor(e,t=qv.Ok,i="OK"){this.headers=e.headers||new vc,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}};var yc=class n extends wd{constructor(e={}){super(e),this.type=$v.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}};var qv=function(n){return n[n.Continue=100]="Continue",n[n.SwitchingProtocols=101]="SwitchingProtocols",n[n.Processing=102]="Processing",n[n.EarlyHints=103]="EarlyHints",n[n.Ok=200]="Ok",n[n.Created=201]="Created",n[n.Accepted=202]="Accepted",n[n.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",n[n.NoContent=204]="NoContent",n[n.ResetContent=205]="ResetContent",n[n.PartialContent=206]="PartialContent",n[n.MultiStatus=207]="MultiStatus",n[n.AlreadyReported=208]="AlreadyReported",n[n.ImUsed=226]="ImUsed",n[n.MultipleChoices=300]="MultipleChoices",n[n.MovedPermanently=301]="MovedPermanently",n[n.Found=302]="Found",n[n.SeeOther=303]="SeeOther",n[n.NotModified=304]="NotModified",n[n.UseProxy=305]="UseProxy",n[n.Unused=306]="Unused",n[n.TemporaryRedirect=307]="TemporaryRedirect",n[n.PermanentRedirect=308]="PermanentRedirect",n[n.BadRequest=400]="BadRequest",n[n.Unauthorized=401]="Unauthorized",n[n.PaymentRequired=402]="PaymentRequired",n[n.Forbidden=403]="Forbidden",n[n.NotFound=404]="NotFound",n[n.MethodNotAllowed=405]="MethodNotAllowed",n[n.NotAcceptable=406]="NotAcceptable",n[n.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",n[n.RequestTimeout=408]="RequestTimeout",n[n.Conflict=409]="Conflict",n[n.Gone=410]="Gone",n[n.LengthRequired=411]="LengthRequired",n[n.PreconditionFailed=412]="PreconditionFailed",n[n.PayloadTooLarge=413]="PayloadTooLarge",n[n.UriTooLong=414]="UriTooLong",n[n.UnsupportedMediaType=415]="UnsupportedMediaType",n[n.RangeNotSatisfiable=416]="RangeNotSatisfiable",n[n.ExpectationFailed=417]="ExpectationFailed",n[n.ImATeapot=418]="ImATeapot",n[n.MisdirectedRequest=421]="MisdirectedRequest",n[n.UnprocessableEntity=422]="UnprocessableEntity",n[n.Locked=423]="Locked",n[n.FailedDependency=424]="FailedDependency",n[n.TooEarly=425]="TooEarly",n[n.UpgradeRequired=426]="UpgradeRequired",n[n.PreconditionRequired=428]="PreconditionRequired",n[n.TooManyRequests=429]="TooManyRequests",n[n.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",n[n.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",n[n.InternalServerError=500]="InternalServerError",n[n.NotImplemented=501]="NotImplemented",n[n.BadGateway=502]="BadGateway",n[n.ServiceUnavailable=503]="ServiceUnavailable",n[n.GatewayTimeout=504]="GatewayTimeout",n[n.HttpVersionNotSupported=505]="HttpVersionNotSupported",n[n.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",n[n.InsufficientStorage=507]="InsufficientStorage",n[n.LoopDetected=508]="LoopDetected",n[n.NotExtended=510]="NotExtended",n[n.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",n}(qv||{});var tS=new We("");var Vv="b",zv="h",Hv="s",Gv="st",Wv="u",jv="rt",gc=new We(""),nS=["GET","HEAD"];function iS(n,e){let u=se(gc),{isCacheActive:t}=u,i=qf(u,["isCacheActive"]),{transferCache:r,method:s}=n;if(!t||s==="POST"&&!i.includePostRequests&&!r||s!=="POST"&&!nS.includes(s)||r===!1||i.filter?.(n)===!1)return e(n);let o=se(sr),a=sS(n),c=o.get(a,null),l=i.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(l=r.includeHeaders),c){let{[Vv]:d,[jv]:h,[zv]:m,[Hv]:g,[Gv]:v,[Wv]:p}=c,f=d;switch(h){case"arraybuffer":f=new TextEncoder().encode(d).buffer;break;case"blob":f=new Blob([d]);break}let S=new vc(m);return Ce(new yc({body:f,headers:S,status:g,statusText:v,url:p}))}return e(n).pipe(Et(d=>{d instanceof yc&&o.set(a,{[Vv]:d.body,[zv]:rS(d.headers,l),[Hv]:d.status,[Gv]:d.statusText,[Wv]:d.url||"",[jv]:n.responseType})}))}function rS(n,e){if(!e)return{};let t={};for(let i of e){let r=n.getAll(i);r!==null&&(t[i]=r)}return t}function sS(n){let{params:e,method:t,responseType:i,url:r,body:s}=n,o=e.keys().sort().map(u=>`${u}=${e.getAll(u)}`).join("&"),c=[t,i,r,typeof s=="string"?s:"",o].join("|"),l=oS(c);return l}function oS(n){let e=0;for(let t of n)e=Math.imul(31,e)+t.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Xv(n){return[{provide:gc,useFactory:()=>(uo("NgHttpTransferCache"),pe({isCacheActive:!0},n))},{provide:tS,useValue:iS,multi:!0,deps:[sr,gc]},{provide:Yr,multi:!0,useFactory:()=>{let e=se(Di),t=se(gc);return()=>{yd(e).then(()=>{t.isCacheActive=!1})}}}]}var Sd=class extends fc{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Td=class n extends Sd{static makeCurrent(){Lv(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=cS();return t==null?null:lS(t)}resetBaseElement(){go=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return kv(document.cookie,e)}},go=null;function cS(){return go=go||document.querySelector("base"),go?go.getAttribute("href"):null}function lS(n){return new URL(n,document.baseURI).pathname}var uS=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})(),Cd=new We(""),Kv=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new be(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(Ke(Cd),Ke(mt))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})(),_c=class{constructor(e){this._doc=e}},Ed="ng-app-id",Qv=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Md(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${Ed}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(Ed),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(Ed,this.appId),i.appendChild(a),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(Ke(xn),Ke(Qa),Ke(td,8),Ke(ni))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})(),bd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Id=/%COMP%/g,ey="%COMP%",dS=`_nghost-${ey}`,hS=`_ngcontent-${ey}`,fS=!0,pS=new We("",{providedIn:"root",factory:()=>fS});function mS(n){return hS.replace(Id,n)}function gS(n){return dS.replace(Id,n)}function ty(n,e){return e.map(t=>t.replace(Id,n))}var Yv=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=Md(c),this.defaultRenderer=new vo(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===zn.ShadowDom&&(r=Mt(pe({},r),{encapsulation:zn.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof xc?s.applyToHost(i):s instanceof yo&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(r.encapsulation){case zn.Emulated:o=new xc(l,u,r,this.appId,d,a,c,h);break;case zn.ShadowDom:return new Ad(l,u,i,r,a,c,this.nonce,h);default:o=new yo(l,u,r,d,a,c,h);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(Ke(Kv),Ke(Qv),Ke(Qa),Ke(pS),Ke(xn),Ke(ni),Ke(mt),Ke(td))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})(),vo=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(bd[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Zv(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(Zv(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new be(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=bd[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=bd[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(cr.DashCase|cr.Important)?e.style.setProperty(t,i,r&cr.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&cr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Zr().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Zv(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ad=class extends vo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=ty(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},yo=class extends vo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?ty(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},xc=class extends yo{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=mS(l),this.hostAttr=gS(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},vS=(()=>{let e=class e extends _c{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(Ke(xn))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})(),Jv=["alt","control","meta","shift"],yS={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},_S={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},xS=(()=>{let e=class e extends _c{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Zr().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),Jv.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=yS[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),Jv.forEach(a=>{if(a!==s){let c=_S[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(r){return new(r||e)(Ke(xn))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})();function ny(n,e){return Sv(pe({rootComponent:n},MS(e)))}function MS(n){return{appProviders:[...TS,...n?.providers??[]],platformProviders:SS}}function wS(){Td.makeCurrent()}function ES(){return new ti}function bS(){return Vm(document),document}var SS=[{provide:ni,useValue:Bv},{provide:ed,useValue:wS,multi:!0},{provide:xn,useFactory:bS,deps:[]}];var TS=[{provide:ic,useValue:"root"},{provide:ti,useFactory:ES,deps:[]},{provide:Cd,useClass:vS,multi:!0,deps:[xn,mt,ni]},{provide:Cd,useClass:xS,multi:!0,deps:[xn]},Yv,Qv,Kv,{provide:to,useExisting:Yv},{provide:pc,useClass:uS,deps:[]},[]];var iy=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(Ke(xn))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Dd=function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n}(Dd||{});function ry(...n){let e=[],t=new Set,i=t.has(Dd.HttpTransferCacheOptions);for(let{\u0275providers:r,\u0275kind:s}of n)t.add(s),r.length&&e.push(r);return or([[],Tv(),t.has(Dd.NoHttpTransferCache)||i?[]:Xv({}),e])}var Fe="primary",No=Symbol("RouteTitle"),Od=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function ts(n){return new Od(n)}function AS(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function DS(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Wn(n[t],e[t]))return!1;return!0}function Wn(n,e){let t=n?Fd(n):void 0,i=e?Fd(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!uy(n[r],e[r]))return!1;return!0}function Fd(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function uy(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function dy(n){return n.length>0?n[n.length-1]:null}function Pi(n){return $l(n)?n:po(n)?wt(Promise.resolve(n)):Ce(n)}var IS={exact:fy,subset:py},hy={exact:RS,subset:PS,ignored:()=>!0};function sy(n,e,t){return IS[t.paths](n.root,e.root,t.matrixParams)&&hy[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function RS(n,e){return Wn(n,e)}function fy(n,e,t){if(!dr(n.segments,e.segments)||!Ec(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!fy(n.children[i],e.children[i],t))return!1;return!0}function PS(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>uy(n[t],e[t]))}function py(n,e,t){return my(n,e,e.segments,t)}function my(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!dr(r,t)||e.hasChildren()||!Ec(r,t,i))}else if(n.segments.length===t.length){if(!dr(n.segments,t)||!Ec(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!py(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!dr(n.segments,r)||!Ec(n.segments,r,i)||!n.children[Fe]?!1:my(n.children[Fe],e,s,i)}}function Ec(n,e,t){return e.every((i,r)=>hy[t](n[r].parameters,i.parameters))}var Ii=class{constructor(e=new et([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=ts(this.queryParams),this._queryParamMap}toString(){return OS.serialize(this)}},et=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return bc(this)}},ur=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=ts(this.parameters),this._parameterMap}toString(){return vy(this)}};function NS(n,e){return dr(n,e)&&n.every((t,i)=>Wn(t.parameters,e[i].parameters))}function dr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function LS(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Fe&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Fe&&(t=t.concat(e(r,i)))}),t}var ch=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>new Tc,providedIn:"root"});let n=e;return n})(),Tc=class{parse(e){let t=new kd(e);return new Ii(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${_o(e.root,!0)}`,i=kS(e.queryParams),r=typeof e.fragment=="string"?`#${FS(e.fragment)}`:"";return`${t}${i}${r}`}},OS=new Tc;function bc(n){return n.segments.map(e=>vy(e)).join("/")}function _o(n,e){if(!n.hasChildren())return bc(n);if(e){let t=n.children[Fe]?_o(n.children[Fe],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Fe&&i.push(`${r}:${_o(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=LS(n,(i,r)=>r===Fe?[_o(n.children[Fe],!1)]:[`${r}:${_o(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Fe]!=null?`${bc(n)}/${t[0]}`:`${bc(n)}/(${t.join("//")})`}}function gy(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Mc(n){return gy(n).replace(/%3B/gi,";")}function FS(n){return encodeURI(n)}function Ud(n){return gy(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Sc(n){return decodeURIComponent(n)}function oy(n){return Sc(n.replace(/\+/g,"%20"))}function vy(n){return`${Ud(n.path)}${US(n.parameters)}`}function US(n){return Object.entries(n).map(([e,t])=>`;${Ud(e)}=${Ud(t)}`).join("")}function kS(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Mc(t)}=${Mc(r)}`).join("&"):`${Mc(t)}=${Mc(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var BS=/^[^\/()?;#]+/;function Rd(n){let e=n.match(BS);return e?e[0]:""}var VS=/^[^\/()?;=#]+/;function zS(n){let e=n.match(VS);return e?e[0]:""}var HS=/^[^=?&#]+/;function GS(n){let e=n.match(HS);return e?e[0]:""}var WS=/^[^&#]+/;function jS(n){let e=n.match(WS);return e?e[0]:""}var kd=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new et([],{}):new et([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Fe]=new et(e,t)),i}parseSegment(){let e=Rd(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new be(4009,!1);return this.capture(e),new ur(Sc(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=zS(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Rd(this.remaining);r&&(i=r,this.capture(i))}e[Sc(t)]=Sc(i)}parseQueryParam(e){let t=GS(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=jS(this.remaining);o&&(i=o,this.capture(i))}let r=oy(t),s=oy(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Rd(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new be(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Fe);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Fe]:new et([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new be(4011,!1)}};function yy(n){return n.segments.length>0?new et([],{[Fe]:n}):n}function _y(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=_y(r);if(i===Fe&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new et(n.segments,e);return $S(t)}function $S(n){if(n.numberOfChildren===1&&n.children[Fe]){let e=n.children[Fe];return new et(n.segments.concat(e.segments),e.children)}return n}function ns(n){return n instanceof Ii}function qS(n,e,t=null,i=null){let r=xy(n);return My(r,e,t,i)}function xy(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new et(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=yy(i);return e??r}function My(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return Pd(r,r,r,t,i);let s=XS(e);if(s.toRoot())return Pd(r,r,new et([],{}),t,i);let o=YS(s,r,n),a=o.processChildren?wo(o.segmentGroup,o.index,s.commands):Ey(o.segmentGroup,o.index,s.commands);return Pd(r,o.segmentGroup,a,t,i)}function Cc(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function So(n){return typeof n=="object"&&n!=null&&n.outlets}function Pd(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=wy(n,e,t);let a=yy(_y(o));return new Ii(a,s,r)}function wy(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=wy(s,e,t)}),new et(n.segments,i)}var Ac=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Cc(i[0]))throw new be(4003,!1);let r=i.find(So);if(r&&r!==dy(i))throw new be(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function XS(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Ac(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Ac(t,e,i)}var Qr=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function YS(n,e,t){if(n.isAbsolute)return new Qr(e,!0,0);if(!t)return new Qr(e,!1,NaN);if(t.parent===null)return new Qr(t,!0,0);let i=Cc(n.commands[0])?0:1,r=t.segments.length-1+i;return ZS(t,r,n.numberOfDoubleDots)}function ZS(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new be(4005,!1);r=i.segments.length}return new Qr(i,!1,r-s)}function JS(n){return So(n[0])?n[0].outlets:{[Fe]:n}}function Ey(n,e,t){if(n??=new et([],{}),n.segments.length===0&&n.hasChildren())return wo(n,e,t);let i=KS(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new et(n.segments.slice(0,i.pathIndex),{});return s.children[Fe]=new et(n.segments.slice(i.pathIndex),n.children),wo(s,0,r)}else return i.match&&r.length===0?new et(n.segments,{}):i.match&&!n.hasChildren()?Bd(n,e,t):i.match?wo(n,0,r):Bd(n,e,t)}function wo(n,e,t){if(t.length===0)return new et(n.segments,{});{let i=JS(t),r={};if(Object.keys(i).some(s=>s!==Fe)&&n.children[Fe]&&n.numberOfChildren===1&&n.children[Fe].segments.length===0){let s=wo(n.children[Fe],e,t);return new et(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Ey(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new et(n.segments,r)}}function KS(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(So(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!cy(c,l,o))return s;i+=2}else{if(!cy(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Bd(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(So(s)){let c=QS(s.outlets);return new et(i,c)}if(r===0&&Cc(t[0])){let c=n.segments[e];i.push(new ur(c.path,ay(t[0]))),r++;continue}let o=So(s)?s.outlets[Fe]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Cc(a)?(i.push(new ur(o,ay(a))),r+=2):(i.push(new ur(o,{})),r++)}return new et(i,{})}function QS(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Bd(new et([],{}),0,i))}),e}function ay(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function cy(n,e,t){return n==t.path&&Wn(e,t.parameters)}var Eo="imperative",Ft=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Ft||{}),wn=class{constructor(e,t){this.id=e,this.url=t}},To=class extends wn{constructor(e,t,i="imperative",r=null){super(e,t),this.type=Ft.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},hr=class extends wn{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=Ft.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Mn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(Mn||{}),Vd=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Vd||{}),Ri=class extends wn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=Ft.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},fr=class extends wn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=Ft.NavigationSkipped}},Co=class extends wn{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=Ft.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Dc=class extends wn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Ft.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},zd=class extends wn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Ft.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Hd=class extends wn{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=Ft.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Gd=class extends wn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Ft.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Wd=class extends wn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Ft.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jd=class{constructor(e){this.route=e,this.type=Ft.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},$d=class{constructor(e){this.route=e,this.type=Ft.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},qd=class{constructor(e){this.snapshot=e,this.type=Ft.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Xd=class{constructor(e){this.snapshot=e,this.type=Ft.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Yd=class{constructor(e){this.snapshot=e,this.type=Ft.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zd=class{constructor(e){this.snapshot=e,this.type=Ft.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Ao=class{},Do=class{constructor(e){this.url=e}};var Jd=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new Oc,this.attachRef=null}},Oc=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let s=this.getOrCreateContext(i);s.outlet=r,this.contexts.set(i,s)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new Jd,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Ic=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Kd(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Kd(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Qd(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Qd(e,this._root).map(t=>t.value)}};function Kd(n,e){if(n===e.value)return e;for(let t of e.children){let i=Kd(n,t);if(i)return i}return null}function Qd(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Qd(n,t);if(i.length)return i.unshift(e),i}return[]}var an=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Kr(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Rc=class extends Ic{constructor(e,t){super(e),this.snapshot=t,uh(this,e)}toString(){return this.snapshot.toString()}};function by(n){let e=eT(n),t=new Lt([new ur("",{})]),i=new Lt({}),r=new Lt({}),s=new Lt({}),o=new Lt(""),a=new is(t,i,s,o,r,Fe,n,e.root);return a.snapshot=e.root,new Rc(new an(a,[]),e)}function eT(n){let e={},t={},i={},r="",s=new Io([],e,i,r,t,Fe,n,null,{});return new Pc("",new an(s,[]))}var is=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Ye(l=>l[No]))??Ce(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Ye(e=>ts(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Ye(e=>ts(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function lh(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:pe(pe({},e.params),n.params),data:pe(pe({},e.data),n.data),resolve:pe(pe(pe(pe({},n.data),e.data),r?.data),n._resolvedData)}:i={params:pe({},n.params),data:pe({},n.data),resolve:pe(pe({},n.data),n._resolvedData??{})},r&&Ty(r)&&(i.resolve[No]=r.title),i}var Io=class{get title(){return this.data?.[No]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ts(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ts(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Pc=class extends Ic{constructor(e,t){super(t),this.url=e,uh(this,t)}toString(){return Sy(this._root)}};function uh(n,e){e.value._routerState=n,e.children.forEach(t=>uh(n,t))}function Sy(n){let e=n.children.length>0?` { ${n.children.map(Sy).join(", ")} } `:"";return`${n.value}${e}`}function Nd(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Wn(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Wn(e.params,t.params)||n.paramsSubject.next(t.params),DS(e.url,t.url)||n.urlSubject.next(t.url),Wn(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function eh(n,e){let t=Wn(n.params,e.params)&&NS(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||eh(n.parent,e.parent))}function Ty(n){return typeof n.title=="string"||n.title===null}var tT=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=Fe,this.activateEvents=new Dn,this.deactivateEvents=new Dn,this.attachEvents=new Dn,this.detachEvents=new Dn,this.parentContexts=se(Oc),this.location=se(lc),this.changeDetector=se(lo),this.environmentInjector=se(_n),this.inputBinder=se(dh,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:s}=i.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new be(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new be(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new be(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new be(4013,!1);this._activatedRoute=i;let s=this.location,a=i.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new th(i,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=Wu({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[rc]});let n=e;return n})(),th=class{constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===is?this.route:e===Oc?this.childContexts:this.parent.get(e,t)}},dh=new We("");function nT(n,e,t){let i=Ro(n,e._root,t?t._root:void 0);return new Rc(i,e)}function Ro(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=iT(n,e,t);return new an(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Ro(n,a)),o}}let i=rT(e.value),r=e.children.map(s=>Ro(n,s));return new an(i,r)}}function iT(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Ro(n,i,r);return Ro(n,i)})}function rT(n){return new is(new Lt(n.url),new Lt(n.params),new Lt(n.queryParams),new Lt(n.fragment),new Lt(n.data),n.outlet,n.component,n)}var Cy="ngNavigationCancelingError";function Ay(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=ns(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=Dy(!1,Mn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function Dy(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[Cy]=!0,t.cancellationCode=e,t}function sT(n){return Iy(n)&&ns(n.url)}function Iy(n){return!!n&&n[Cy]}var oT=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=$a({type:e,selectors:[["ng-component"]],standalone:!0,features:[uc],decls:1,vars:0,template:function(r,s){r&1&&fo(0,"router-outlet")},dependencies:[tT],encapsulation:2});let n=e;return n})();function aT(n,e){return n.providers&&!n._injector&&(n._injector=vd(n.providers,e,`Route: ${n.path}`)),n._injector??e}function hh(n){let e=n.children&&n.children.map(hh),t=e?Mt(pe({},n),{children:e}):pe({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Fe&&(t.component=oT),t}function jn(n){return n.outlet||Fe}function cT(n,e){let t=n.filter(i=>jn(i)===e);return t.push(...n.filter(i=>jn(i)!==e)),t}function Lo(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var lT=(n,e,t,i)=>Ye(r=>(new nh(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),nh=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Nd(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Kr(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Kr(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Kr(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Kr(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Zd(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Xd(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Nd(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Nd(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=Lo(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},Nc=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},es=class{constructor(e,t){this.component=e,this.route=t}};function uT(n,e,t){let i=n._root,r=e?e._root:null;return xo(i,r,t,[i.value])}function dT(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function ss(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!zm(n)?n:e.get(n):i}function xo(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Kr(e);return n.children.forEach(o=>{hT(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>bo(a,t.getContext(o),r)),r}function hT(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=fT(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Nc(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?xo(n,e,a?a.children:null,i,r):xo(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new es(a.outlet.component,o))}else o&&bo(e,a,r),r.canActivateChecks.push(new Nc(i)),s.component?xo(n,null,a?a.children:null,i,r):xo(n,null,t,i,r);return r}function fT(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!dr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!dr(n.url,e.url)||!Wn(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!eh(n,e)||!Wn(n.queryParams,e.queryParams);case"paramsChange":default:return!eh(n,e)}}function bo(n,e,t){let i=Kr(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?bo(o,e.children.getContext(s),t):bo(o,null,t):bo(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new es(e.outlet.component,r)):t.canDeactivateChecks.push(new es(null,r)):t.canDeactivateChecks.push(new es(null,r))}function Oo(n){return typeof n=="function"}function pT(n){return typeof n=="boolean"}function mT(n){return n&&Oo(n.canLoad)}function gT(n){return n&&Oo(n.canActivate)}function vT(n){return n&&Oo(n.canActivateChild)}function yT(n){return n&&Oo(n.canDeactivate)}function _T(n){return n&&Oo(n.canMatch)}function Ry(n){return n instanceof Yn||n?.name==="EmptyError"}var wc=Symbol("INITIAL_VALUE");function rs(){return mn(n=>va(n.map(e=>e.pipe(Zn(1),Jl(wc)))).pipe(Ye(e=>{for(let t of e)if(t!==!0){if(t===wc)return wc;if(t===!1||t instanceof Ii)return t}return!0}),pn(e=>e!==wc),Zn(1)))}function xT(n,e){return Tt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Ce(Mt(pe({},t),{guardsResult:!0})):MT(o,i,r,n).pipe(Tt(a=>a&&pT(a)?wT(i,s,n,e):Ce(a)),Ye(a=>Mt(pe({},t),{guardsResult:a})))})}function MT(n,e,t,i){return wt(n).pipe(Tt(r=>CT(r.component,r.route,t,e,i)),Cn(r=>r!==!0,!0))}function wT(n,e,t,i){return wt(e).pipe(Ki(r=>kr(bT(r.route.parent,i),ET(r.route,i),TT(n,r.path,t),ST(n,r.route,t))),Cn(r=>r!==!0,!0))}function ET(n,e){return n!==null&&e&&e(new Yd(n)),Ce(!0)}function bT(n,e){return n!==null&&e&&e(new qd(n)),Ce(!0)}function ST(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Ce(!0);let r=i.map(s=>ya(()=>{let o=Lo(e)??t,a=ss(s,o),c=gT(a)?a.canActivate(e,n):Ai(o,()=>a(e,n));return Pi(c).pipe(Cn())}));return Ce(r).pipe(rs())}function TT(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>dT(o)).filter(o=>o!==null).map(o=>ya(()=>{let a=o.guards.map(c=>{let l=Lo(o.node)??t,u=ss(c,l),d=vT(u)?u.canActivateChild(i,n):Ai(l,()=>u(i,n));return Pi(d).pipe(Cn())});return Ce(a).pipe(rs())}));return Ce(s).pipe(rs())}function CT(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Ce(!0);let o=s.map(a=>{let c=Lo(e)??r,l=ss(a,c),u=yT(l)?l.canDeactivate(n,e,t,i):Ai(c,()=>l(n,e,t,i));return Pi(u).pipe(Cn())});return Ce(o).pipe(rs())}function AT(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Ce(!0);let s=r.map(o=>{let a=ss(o,n),c=mT(a)?a.canLoad(e,t):Ai(n,()=>a(e,t));return Pi(c)});return Ce(s).pipe(rs(),Py(i))}function Py(n){return Hl(Et(e=>{if(ns(e))throw Ay(n,e)}),Ye(e=>e===!0))}function DT(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Ce(!0);let s=r.map(o=>{let a=ss(o,n),c=_T(a)?a.canMatch(e,t):Ai(n,()=>a(e,t));return Pi(c)});return Ce(s).pipe(rs(),Py(i))}var Po=class{constructor(e){this.segmentGroup=e||null}},Lc=class extends Error{constructor(e){super(),this.urlTree=e}};function Jr(n){return Ur(new Po(n))}function IT(n){return Ur(new be(4e3,!1))}function RT(n){return Ur(Dy(!1,Mn.GuardRejected))}var ih=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Ce(i);if(r.numberOfChildren>1||!r.children[Fe])return IT(e.redirectTo);r=r.children[Fe]}}applyRedirectCommands(e,t,i){let r=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t.startsWith("/"))throw new Lc(r);return r}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Ii(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new et(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new be(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},rh={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function PT(n,e,t,i,r){let s=fh(n,e,t);return s.matched?(i=aT(e,i),DT(i,e,t,r).pipe(Ye(o=>o===!0?s:pe({},rh)))):Ce(s)}function fh(n,e,t){if(e.path==="**")return NT(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?pe({},rh):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||AS)(t,n,e);if(!r)return pe({},rh);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?pe(pe({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function NT(n){return{matched:!0,parameters:n.length>0?dy(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function ly(n,e,t,i){return t.length>0&&FT(n,t,i)?{segmentGroup:new et(e,OT(i,new et(t,n.children))),slicedSegments:[]}:t.length===0&&UT(n,t,i)?{segmentGroup:new et(n.segments,LT(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new et(n.segments,n.children),slicedSegments:t}}function LT(n,e,t,i){let r={};for(let s of t)if(Fc(n,e,s)&&!i[jn(s)]){let o=new et([],{});r[jn(s)]=o}return pe(pe({},i),r)}function OT(n,e){let t={};t[Fe]=e;for(let i of n)if(i.path===""&&jn(i)!==Fe){let r=new et([],{});t[jn(i)]=r}return t}function FT(n,e,t){return t.some(i=>Fc(n,e,i)&&jn(i)!==Fe)}function UT(n,e,t){return t.some(i=>Fc(n,e,i))}function Fc(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function kT(n,e,t,i){return jn(n)!==i&&(i===Fe||!Fc(e,t,n))?!1:fh(e,n,t).matched}function BT(n,e,t){return e.length===0&&!n.children[t]}var sh=class{};function VT(n,e,t,i,r,s,o="emptyOnly"){return new oh(n,e,t,i,r,o,s).recognize()}var zT=31,oh=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new ih(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new be(4002,`'${e.segmentGroup}'`)}recognize(){let e=ly(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(Ye(t=>{let i=new Io([],Object.freeze({}),Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,{},Fe,this.rootComponentType,null,{}),r=new an(i,t),s=new Pc("",r),o=qS(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,Fe).pipe(vi(i=>{if(i instanceof Lc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Po?this.noMatchError(i):i}))}inheritParamsAndData(e,t){let i=e.value,r=lh(i,t,this.paramsInheritanceStrategy);i.params=Object.freeze(r.params),i.data=Object.freeze(r.data),e.children.forEach(s=>this.inheritParamsAndData(s,i))}processSegmentGroup(e,t,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i):this.processSegment(e,t,i,i.segments,r,!0).pipe(Ye(s=>s instanceof an?[s]:[]))}processChildren(e,t,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return wt(r).pipe(Ki(s=>{let o=i.children[s],a=cT(t,s);return this.processSegmentGroup(e,a,o,s)}),Zl((s,o)=>(s.push(...o),s)),yi(null),Yl(),Tt(s=>{if(s===null)return Jr(i);let o=Ny(s);return HT(o),Ce(o)}))}processSegment(e,t,i,r,s,o){return wt(t).pipe(Ki(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,i,r,s,o).pipe(vi(c=>{if(c instanceof Po)return Ce(null);throw c}))),Cn(a=>!!a),vi(a=>{if(Ry(a))return BT(i,r,s)?Ce(new sh):Jr(i);throw a}))}processSegmentAgainstRoute(e,t,i,r,s,o,a){return kT(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o):Jr(r):Jr(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:u}=fh(t,r,s);if(!a)return Jr(t);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>zT&&(this.allowRedirects=!1));let d=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,d).pipe(Tt(h=>this.processSegment(e,i,t,h.concat(u),o,!1)))}matchSegmentAgainstRoute(e,t,i,r,s){let o=PT(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),o.pipe(mn(a=>a.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(mn(({routes:c})=>{let l=i._loadedInjector??e,{consumedSegments:u,remainingSegments:d,parameters:h}=a,m=new Io(u,h,Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,WT(i),jn(i),i.component??i._loadedComponent??null,i,jT(i)),{segmentGroup:g,slicedSegments:v}=ly(t,u,d,c);if(v.length===0&&g.hasChildren())return this.processChildren(l,c,g).pipe(Ye(f=>f===null?null:new an(m,f)));if(c.length===0&&v.length===0)return Ce(new an(m,[]));let p=jn(i)===s;return this.processSegment(l,c,g,v,p?Fe:s,!0).pipe(Ye(f=>new an(m,f instanceof an?[f]:[])))}))):Jr(t)))}getChildConfig(e,t,i){return t.children?Ce({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Ce({routes:t._loadedRoutes,injector:t._loadedInjector}):AT(e,t,i,this.urlSerializer).pipe(Tt(r=>r?this.configLoader.loadChildren(e,t).pipe(Et(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):RT(t))):Ce({routes:[],injector:e})}};function HT(n){n.sort((e,t)=>e.value.outlet===Fe?-1:t.value.outlet===Fe?1:e.value.outlet.localeCompare(t.value.outlet))}function GT(n){let e=n.value.routeConfig;return e&&e.path===""}function Ny(n){let e=[],t=new Set;for(let i of n){if(!GT(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=Ny(i.children);e.push(new an(i.value,r))}return e.filter(i=>!t.has(i))}function WT(n){return n.data||{}}function jT(n){return n.resolve||{}}function $T(n,e,t,i,r,s){return Tt(o=>VT(n,e,t,i,o.extractedUrl,r,s).pipe(Ye(({state:a,tree:c})=>Mt(pe({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function qT(n,e){return Tt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Ce(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of Ly(c))o.add(l);let a=0;return wt(o).pipe(Ki(c=>s.has(c)?XT(c,i,n,e):(c.data=lh(c,c.parent,n).resolve,Ce(void 0))),Et(()=>a++),Vr(1),Tt(c=>a===o.size?Ce(t):fn))})}function Ly(n){let e=n.children.map(t=>Ly(t)).flat();return[n,...e]}function XT(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!Ty(r)&&(s[No]=r.title),YT(s,n,e,i).pipe(Ye(o=>(n._resolvedData=o,n.data=lh(n,n.parent,t).resolve,null)))}function YT(n,e,t,i){let r=Fd(n);if(r.length===0)return Ce({});let s={};return wt(r).pipe(Tt(o=>ZT(n[o],e,t,i).pipe(Cn(),Et(a=>{s[o]=a}))),Vr(1),Xl(s),vi(o=>Ry(o)?fn:Ur(o)))}function ZT(n,e,t,i){let r=Lo(e)??i,s=ss(n,r),o=s.resolve?s.resolve(e,t):Ai(r,()=>s(e,t));return Pi(o)}function Ld(n){return mn(e=>{let t=n(e);return t?wt(t).pipe(Ye(()=>e)):Ce(e)})}var Oy=(()=>{let e=class e{buildTitle(i){let r,s=i.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===Fe);return r}getResolvedTitleForRoute(i){return i.data[No]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>se(JT),providedIn:"root"});let n=e;return n})(),JT=(()=>{let e=class e extends Oy{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(Ke(iy))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),ph=new We("",{providedIn:"root",factory:()=>({})}),mh=new We(""),KT=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=se(_d)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Ce(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Pi(i.loadComponent()).pipe(Ye(Fy),Et(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),Br(()=>{this.componentLoaders.delete(i)})),s=new Fr(r,()=>new nn).pipe(Or());return this.componentLoaders.set(i,s),s}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Ce({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=QT(r,this.compiler,i,this.onLoadEndListener).pipe(Br(()=>{this.childrenLoaders.delete(r)})),a=new Fr(o,()=>new nn).pipe(Or());return this.childrenLoaders.set(r,a),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function QT(n,e,t,i){return Pi(n.loadChildren()).pipe(Ye(Fy),Tt(r=>r instanceof io||Array.isArray(r)?Ce(r):wt(e.compileModuleAsync(r))),Ye(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(mh,[],{optional:!0,self:!0}).flat()),{routes:o.map(hh),injector:s}}))}function eC(n){return n&&typeof n=="object"&&"default"in n}function Fy(n){return eC(n)?n.default:n}var gh=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>se(tC),providedIn:"root"});let n=e;return n})(),tC=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),nC=new We("");var iC=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new nn,this.transitionAbortSubject=new nn,this.configLoader=se(KT),this.environmentInjector=se(_n),this.urlSerializer=se(ch),this.rootContexts=se(Oc),this.location=se(mo),this.inputBindingEnabled=se(dh,{optional:!0})!==null,this.titleStrategy=se(Oy),this.options=se(ph,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=se(gh),this.createViewTransition=se(nC,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Ce(void 0),this.rootComponentType=null;let i=s=>this.events.next(new jd(s)),r=s=>this.events.next(new $d(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(Mt(pe(pe({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,s){return this.transitions=new Lt({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Eo,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(pn(o=>o.id!==0),Ye(o=>Mt(pe({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),mn(o=>{this.currentTransition=o;let a=!1,c=!1;return Ce(o).pipe(Et(l=>{this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?Mt(pe({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),mn(l=>{let u=!i.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!u&&d!=="reload"){let h="";return this.events.next(new fr(l.id,this.urlSerializer.serialize(l.rawUrl),h,Vd.IgnoredSameUrlNavigation)),l.resolve(null),fn}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Ce(l).pipe(mn(h=>{let m=this.transitions?.getValue();return this.events.next(new To(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),m!==this.transitions?.getValue()?fn:Promise.resolve(h)}),$T(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,this.paramsInheritanceStrategy),Et(h=>{o.targetSnapshot=h.targetSnapshot,o.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=Mt(pe({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let m=new Dc(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(m)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:m,source:g,restoredState:v,extras:p}=l,f=new To(h,this.urlSerializer.serialize(m),g,v);this.events.next(f);let S=by(this.rootComponentType).snapshot;return this.currentTransition=o=Mt(pe({},l),{targetSnapshot:S,urlAfterRedirects:m,extras:Mt(pe({},p),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=m,Ce(o)}else{let h="";return this.events.next(new fr(l.id,this.urlSerializer.serialize(l.extractedUrl),h,Vd.IgnoredByUrlHandlingStrategy)),l.resolve(null),fn}}),Et(l=>{let u=new zd(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),Ye(l=>(this.currentTransition=o=Mt(pe({},l),{guards:uT(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),xT(this.environmentInjector,l=>this.events.next(l)),Et(l=>{if(o.guardsResult=l.guardsResult,ns(l.guardsResult))throw Ay(this.urlSerializer,l.guardsResult);let u=new Hd(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),pn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",Mn.GuardRejected),!1)),Ld(l=>{if(l.guards.canActivateChecks.length)return Ce(l).pipe(Et(u=>{let d=new Gd(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}),mn(u=>{let d=!1;return Ce(u).pipe(qT(this.paramsInheritanceStrategy,this.environmentInjector),Et({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(u,"",Mn.NoDataFromResolver)}}))}),Et(u=>{let d=new Wd(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}))}),Ld(l=>{let u=d=>{let h=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(d.routeConfig).pipe(Et(m=>{d.component=m}),Ye(()=>{})));for(let m of d.children)h.push(...u(m));return h};return va(u(l.targetSnapshot.root)).pipe(yi(null),Zn(1))}),Ld(()=>this.afterPreactivation()),mn(()=>{let{currentSnapshot:l,targetSnapshot:u}=o,d=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return d?wt(d).pipe(Ye(()=>o)):Ce(o)}),Ye(l=>{let u=nT(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=Mt(pe({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,o}),Et(()=>{this.events.next(new Ao)}),lT(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),Zn(1),Et({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new hr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),Kl(this.transitionAbortSubject.pipe(Et(l=>{throw l}))),Br(()=>{!a&&!c&&this.cancelNavigationTransition(o,"",Mn.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),vi(l=>{if(c=!0,Iy(l))this.events.next(new Ri(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),sT(l)?this.events.next(new Do(l.url)):o.resolve(!1);else{this.events.next(new Co(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(i.errorHandler(l))}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return fn}))}))}cancelNavigationTransition(i,r,s){let o=new Ri(i.id,this.urlSerializer.serialize(i.extractedUrl),r,s);this.events.next(o),i.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function rC(n){return n!==Eo}var sC=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>se(oC),providedIn:"root"});let n=e;return n})(),ah=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},oC=(()=>{let e=class e extends ah{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=ld(e)))(s||e)}})(),e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Uy=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>se(aC),providedIn:"root"});let n=e;return n})(),aC=(()=>{let e=class e extends Uy{constructor(){super(...arguments),this.location=se(mo),this.urlSerializer=se(ch),this.options=se(ph,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=se(gh),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Ii,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=by(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(r=>{r.type==="popstate"&&i(r.url,r.state)})}handleRouterEvent(i,r){if(i instanceof To)this.stateMemento=this.createStateMemento();else if(i instanceof fr)this.rawUrlTree=r.initialUrl;else if(i instanceof Dc){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else i instanceof Ao?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):i instanceof Ri&&(i.code===Mn.GuardRejected||i.code===Mn.NoDataFromResolver)?this.restoreHistory(r):i instanceof Co?this.restoreHistory(r,!0):i instanceof hr&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,r){let s=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=pe(pe({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=pe(pe({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===i.finalUrl&&o===0&&(this.resetState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=ld(e)))(s||e)}})(),e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Mo=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(Mo||{});function cC(n,e){n.events.pipe(pn(t=>t instanceof hr||t instanceof Ri||t instanceof Co||t instanceof fr),Ye(t=>t instanceof hr||t instanceof fr?Mo.COMPLETE:(t instanceof Ri?t.code===Mn.Redirect||t.code===Mn.SupersededByNewNavigation:!1)?Mo.REDIRECTING:Mo.FAILED),pn(t=>t!==Mo.REDIRECTING),Zn(1)).subscribe(()=>{e()})}function lC(n){throw n}var uC={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},dC={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},ky=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=se(dc),this.stateManager=se(Uy),this.options=se(ph,{optional:!0})||{},this.pendingTasks=se(ho),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=se(iC),this.urlSerializer=se(ch),this.location=se(mo),this.urlHandlingStrategy=se(gh),this._events=new nn,this.errorHandler=this.options.errorHandler||lC,this.navigated=!1,this.routeReuseStrategy=se(sC),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=se(mh,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!se(dh,{optional:!0}),this.eventsSubscription=new St,this.isNgZoneEnabled=se(mt)instanceof mt&&mt.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:i=>{this.console.warn(i)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(s!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof Ri&&r.code!==Mn.Redirect&&r.code!==Mn.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof hr)this.navigated=!0;else if(r instanceof Do){let a=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),c={info:s.extras.info,skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||rC(s.source)};this.scheduleNavigation(a,Eo,null,c,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}fC(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Eo,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(i,"popstate",r)},0)})}navigateToSyncWithBrowser(i,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=pe({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(i);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(hh),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,d=null;switch(c){case"merge":d=pe(pe({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let m=s?s.snapshot:this.routerState.snapshot.root;h=xy(m)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),h=this.currentUrlTree.root}return My(h,i,d,u??null)}navigateByUrl(i,r={skipLocationChange:!1}){let s=ns(i)?i:this.parseUrl(i),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,Eo,null,r)}navigate(i,r={skipLocationChange:!1}){return hC(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.urlSerializer.parse("/")}}isActive(i,r){let s;if(r===!0?s=pe({},uC):r===!1?s=pe({},dC):s=r,ns(i))return sy(this.currentUrlTree,i,s);let o=this.parseUrl(i);return sy(this.currentUrlTree,o,s)}removeEmptyProps(i){return Object.entries(i).reduce((r,[s,o])=>(o!=null&&(r[s]=o),r),{})}scheduleNavigation(i,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((h,m)=>{c=h,l=m});let d=this.pendingTasks.add();return cC(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:o,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(h=>Promise.reject(h))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function hC(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new be(4008,!1)}function fC(n){return!(n instanceof Ao)&&!(n instanceof Do)}var pC=new We("");function By(n,...e){return or([{provide:mh,multi:!0,useValue:n},[],{provide:is,useFactory:mC,deps:[ky]},{provide:Yr,multi:!0,useFactory:gC},e.map(t=>t.\u0275providers)])}function mC(n){return n.routerState.root}function gC(){let n=se(ar);return e=>{let t=n.get(Di);if(e!==t.components[0])return;let i=n.get(ky),r=n.get(vC);n.get(yC)===1&&i.initialNavigation(),n.get(_C,null,Ge.Optional)?.setUpPreloading(),n.get(pC,null,Ge.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var vC=new We("",{factory:()=>new nn}),yC=new We("",{providedIn:"root",factory:()=>1});var _C=new We("");var Vy=[];var zy={providers:[By(Vy),ry()]};var Pf="161";var xC=0,Hy=1,MC=2;var p_=1,wC=2,ci=3,Gi=0,Kt=1,ui=2,Vi=0,Ts=1,Gy=2,Wy=3,jy=4,EC=5,_r=100,bC=101,SC=102,$y=103,qy=104,TC=200,CC=201,AC=202,DC=203,Xh=204,Yh=205,IC=206,RC=207,PC=208,NC=209,LC=210,OC=211,FC=212,UC=213,kC=214,BC=0,VC=1,zC=2,sl=3,HC=4,GC=5,WC=6,jC=7,m_=0,$C=1,qC=2,zi=0,XC=1,YC=2,ZC=3,JC=4,KC=5,QC=6;var Xy=300,Is=301,Rs=302,Zh=303,Jh=304,Tl=306,Kh=1e3,Fn=1001,Qh=1002,$t=1003,Yy=1004;var Fo=1005;var Zt=1006,vh=1007;var Mr=1008;var Hi=1009,eA=1010,tA=1011,Nf=1012,g_=1013,Bi=1014,di=1015,Go=1016,v_=1017,y_=1018,wr=1020,nA=1021,Un=1023,iA=1024,rA=1025,Er=1026,Ps=1027,sA=1028,__=1029,oA=1030,x_=1031,M_=1033,yh=33776,_h=33777,xh=33778,Mh=33779,Zy=35840,Jy=35841,Ky=35842,Qy=35843,w_=36196,e0=37492,t0=37496,n0=37808,i0=37809,r0=37810,s0=37811,o0=37812,a0=37813,c0=37814,l0=37815,u0=37816,d0=37817,h0=37818,f0=37819,p0=37820,m0=37821,wh=36492,g0=36494,v0=36495,aA=36283,y0=36284,_0=36285,x0=36286;var ol=2300,al=2301,Eh=2302,M0=2400,w0=2401,E0=2402;var E_=3e3,br=3001,cA=3200,lA=3201,uA=0,dA=1,bn="",Ut="srgb",pi="srgb-linear",Lf="display-p3",Cl="display-p3-linear",cl="linear",pt="srgb",ll="rec709",ul="p3";var os=7680;var b0=519,hA=512,fA=513,pA=514,b_=515,mA=516,gA=517,vA=518,yA=519,S0=35044;var T0="300 es",ef=1035,hi=2e3,dl=2001,Wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bh=Math.PI/180,tf=180/Math.PI;function Xo(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Jt(n,e,t){return Math.max(e,Math.min(t,n))}function _A(n,e){return(n%e+e)%e}function Sh(n,e,t){return(1-t)*n+t*e}function C0(n){return(n&n-1)===0&&n!==0}function nf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Uo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var nt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],v=r[0],p=r[3],f=r[6],S=r[1],w=r[4],b=r[7],I=r[2],A=r[5],C=r[8];return s[0]=o*v+a*S+c*I,s[3]=o*p+a*w+c*A,s[6]=o*f+a*b+c*C,s[1]=l*v+u*S+d*I,s[4]=l*p+u*w+d*A,s[7]=l*f+u*b+d*C,s[2]=h*v+m*S+g*I,s[5]=h*p+m*w+g*A,s[8]=h*f+m*b+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,m=l*s-o*c,g=t*d+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Th.makeScale(e,t)),this}rotate(e){return this.premultiply(Th.makeRotation(-e)),this}translate(e,t){return this.premultiply(Th.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Th=new je;function S_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xA(){let n=Wo("canvas");return n.style.display="block",n}var A0={};function Cs(n){n in A0||(A0[n]=!0,console.warn(n))}var D0=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),I0=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Uc={[pi]:{transfer:cl,primaries:ll,toReference:n=>n,fromReference:n=>n},[Ut]:{transfer:pt,primaries:ll,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Cl]:{transfer:cl,primaries:ul,toReference:n=>n.applyMatrix3(I0),fromReference:n=>n.applyMatrix3(D0)},[Lf]:{transfer:pt,primaries:ul,toReference:n=>n.convertSRGBToLinear().applyMatrix3(I0),fromReference:n=>n.applyMatrix3(D0).convertLinearToSRGB()}},MA=new Set([pi,Cl]),ct={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!MA.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Uc[e].toReference,r=Uc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Uc[n].primaries},getTransfer:function(n){return n===bn?cl:Uc[n].transfer}};function As(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ch(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var as,hl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{as===void 0&&(as=Wo("canvas")),as.width=e.width,as.height=e.height;let i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=as}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=As(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(As(t[i]/255)*255):t[i]=As(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wA=0,fl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wA++}),this.uuid=Xo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ah(r[o].image)):s.push(Ah(r[o]))}else s=Ah(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Ah(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var EA=0,$i=(()=>{class n extends Wi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Fn,s=Fn,o=Zt,a=Mr,c=Un,l=Hi,u=n.DEFAULT_ANISOTROPY,d=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EA++}),this.uuid=Xo(),this.name="",this.source=new fl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===br?Ut:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kh:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Qh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kh:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Qh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?br:E_}set encoding(t){Cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===br?Ut:bn}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Xy,n.DEFAULT_ANISOTROPY=1,n})(),kt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],g=c[9],v=c[2],p=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,b=(m+1)/2,I=(f+1)/2,A=(u+h)/4,C=(d+v)/4,G=(g+p)/4;return w>b&&w>I?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=A/i,s=C/i):b>I?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=G/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=C/s,r=G/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-v)/S,this.z=(h-u)/S,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rf=class extends Wi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(Cs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===br?Ut:bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new $i(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mi=class extends rf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},pl=class extends $i{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sf=class extends $i{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ji=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==h||l!==m||u!==g){let p=1-a,f=c*h+l*m+u*g+d*v,S=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){let I=Math.sqrt(w),A=Math.atan2(I,f*S);p=Math.sin(p*A)/I,a=Math.sin(a*A)/I}let b=a*S;if(c=c*p+h*b,l=l*p+m*b,u=u*p+g*b,d=d*p+v*b,p===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*m-l*h,e[t+1]=c*g+u*h+l*d-a*m,e[t+2]=l*g+u*m+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"YZX":this._x=h*u*d+l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d-h*m*g;break;case"XZY":this._x=h*u*d-l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(R0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(R0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dh.copy(this).projectOnVector(e),this.sub(Dh)}reflect(e){return this.sub(Dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dh=new F,R0=new ji,Sr=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kc.copy(i.boundingBox)),kc.applyMatrix4(e.matrixWorld),this.union(kc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Bc.subVectors(this.max,ko),cs.subVectors(e.a,ko),ls.subVectors(e.b,ko),us.subVectors(e.c,ko),Ni.subVectors(ls,cs),Li.subVectors(us,ls),pr.subVectors(cs,us);let t=[0,-Ni.z,Ni.y,0,-Li.z,Li.y,0,-pr.z,pr.y,Ni.z,0,-Ni.x,Li.z,0,-Li.x,pr.z,0,-pr.x,-Ni.y,Ni.x,0,-Li.y,Li.x,0,-pr.y,pr.x,0];return!Ih(t,cs,ls,us,Bc)||(t=[1,0,0,0,1,0,0,0,1],!Ih(t,cs,ls,us,Bc))?!1:(Vc.crossVectors(Ni,Li),t=[Vc.x,Vc.y,Vc.z],Ih(t,cs,ls,us,Bc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ii=[new F,new F,new F,new F,new F,new F,new F,new F],Nn=new F,kc=new Sr,cs=new F,ls=new F,us=new F,Ni=new F,Li=new F,pr=new F,ko=new F,Bc=new F,Vc=new F,mr=new F;function Ih(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){mr.fromArray(n,s);let a=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),c=e.dot(mr),l=t.dot(mr),u=i.dot(mr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var bA=new Sr,Bo=new F,Rh=new F,jo=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):bA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);let t=Bo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Bo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Rh)),this.expandByPoint(Bo.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new F,Ph=new F,zc=new F,Oi=new F,Nh=new F,Hc=new F,Lh=new F,of=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ph.copy(e).add(t).multiplyScalar(.5),zc.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Ph);let s=e.distanceTo(t)*.5,o=-this.direction.dot(zc),a=Oi.dot(this.direction),c=-Oi.dot(zc),l=Oi.lengthSq(),u=Math.abs(1-o*o),d,h,m,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,m=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ph).addScaledVector(zc,h),m}intersectSphere(e,t){ri.subVectors(e.center,this.origin);let i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,i,r,s){Nh.subVectors(t,e),Hc.subVectors(i,e),Lh.crossVectors(Nh,Hc);let o=this.direction.dot(Lh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);let c=a*this.direction.dot(Hc.crossVectors(Oi,Hc));if(c<0)return null;let l=a*this.direction.dot(Nh.cross(Oi));if(l<0||c+l>o)return null;let u=-a*Oi.dot(Lh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,m,g,v,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,v,p)}set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,v,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,m=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=h-v*l,t[9]=-a*c,t[2]=v-h*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,m=c*d,g=l*u,v=l*d;t[0]=h+v*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,m=c*d,g=l*u,v=l*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,m=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SA,e,TA)}lookAt(e,t,i){let r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Fi.crossVectors(i,cn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Fi.crossVectors(i,cn)),Fi.normalize(),Gc.crossVectors(cn,Fi),r[0]=Fi.x,r[4]=Gc.x,r[8]=cn.x,r[1]=Fi.y,r[5]=Gc.y,r[9]=cn.y,r[2]=Fi.z,r[6]=Gc.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],v=i[6],p=i[10],f=i[14],S=i[3],w=i[7],b=i[11],I=i[15],A=r[0],C=r[4],G=r[8],ie=r[12],_=r[1],T=r[5],H=r[9],K=r[13],D=r[2],V=r[6],k=r[10],$=r[14],z=r[3],W=r[7],j=r[11],Q=r[15];return s[0]=o*A+a*_+c*D+l*z,s[4]=o*C+a*T+c*V+l*W,s[8]=o*G+a*H+c*k+l*j,s[12]=o*ie+a*K+c*$+l*Q,s[1]=u*A+d*_+h*D+m*z,s[5]=u*C+d*T+h*V+m*W,s[9]=u*G+d*H+h*k+m*j,s[13]=u*ie+d*K+h*$+m*Q,s[2]=g*A+v*_+p*D+f*z,s[6]=g*C+v*T+p*V+f*W,s[10]=g*G+v*H+p*k+f*j,s[14]=g*ie+v*K+p*$+f*Q,s[3]=S*A+w*_+b*D+I*z,s[7]=S*C+w*T+b*V+I*W,s[11]=S*G+w*H+b*k+I*j,s[15]=S*ie+w*K+b*$+I*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*m-i*c*m)+v*(+t*c*m-t*l*h+s*o*h-r*o*m+r*l*u-s*c*u)+p*(+t*l*d-t*a*m-s*o*d+i*o*m+s*a*u-i*l*u)+f*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],S=d*p*l-v*h*l+v*c*m-a*p*m-d*c*f+a*h*f,w=g*h*l-u*p*l-g*c*m+o*p*m+u*c*f-o*h*f,b=u*v*l-g*d*l+g*a*m-o*v*m-u*a*f+o*d*f,I=g*d*c-u*v*c-g*a*h+o*v*h+u*a*p-o*d*p,A=t*S+i*w+r*b+s*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=S*C,e[1]=(v*h*s-d*p*s-v*r*m+i*p*m+d*r*f-i*h*f)*C,e[2]=(a*p*s-v*c*s+v*r*l-i*p*l-a*r*f+i*c*f)*C,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*m-i*c*m)*C,e[4]=w*C,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*f+t*h*f)*C,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*f-t*c*f)*C,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*m+t*c*m)*C,e[8]=b*C,e[9]=(g*d*s-u*v*s-g*i*m+t*v*m+u*i*f-t*d*f)*C,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*f+t*a*f)*C,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*m-t*a*m)*C,e[12]=I*C,e[13]=(u*v*r-g*d*r+g*i*h-t*v*h-u*i*p+t*d*p)*C,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*p-t*a*p)*C,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,m=s*u,g=s*d,v=o*u,p=o*d,f=a*d,S=c*l,w=c*u,b=c*d,I=i.x,A=i.y,C=i.z;return r[0]=(1-(v+f))*I,r[1]=(m+b)*I,r[2]=(g-w)*I,r[3]=0,r[4]=(m-b)*A,r[5]=(1-(h+f))*A,r[6]=(p+S)*A,r[7]=0,r[8]=(g+w)*C,r[9]=(p-S)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=ds.set(r[0],r[1],r[2]).length(),o=ds.set(r[4],r[5],r[6]).length(),a=ds.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);let l=1/s,u=1/o,d=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,t.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=hi){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),m,g;if(a===hi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===dl)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=hi){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,m=(i+r)*u,g,v;if(a===hi)g=(o+s)*d,v=-2*d;else if(a===dl)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ds=new F,Ln=new Ht,SA=new F(0,0,0),TA=new F(1,1,1),Fi=new F,Gc=new F,cn=new F,P0=new Ht,N0=new ji,CA=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],m=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return P0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(P0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return N0.setFromEuler(this),this.setFromQuaternion(N0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),ml=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},AA=0,L0=new F,hs=new ji,si=new Ht,Wc=new F,Vo=new F,DA=new F,IA=new ji,O0=new F(1,0,0),F0=new F(0,1,0),U0=new F(0,0,1),RA={type:"added"},PA={type:"removed"},Us=(()=>{class n extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AA++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,i=new CA,r=new ji,s=new F(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new je}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(O0,t)}rotateY(t){return this.rotateOnAxis(F0,t)}rotateZ(t){return this.rotateOnAxis(U0,t)}translateOnAxis(t,i){return L0.copy(t).applyQuaternion(this.quaternion),this.position.add(L0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(O0,t)}translateY(t){return this.translateOnAxis(F0,t)}translateZ(t){return this.translateOnAxis(U0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Wc.copy(t):Wc.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Vo,Wc,this.up):si.lookAt(Wc,Vo,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(si),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(RA)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(PA)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,t,DA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,IA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++){let o=i[r];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),m=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new F(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),On=new F,oi=new F,Oh=new F,ai=new F,fs=new F,ps=new F,k0=new F,Fh=new F,Uh=new F,kh=new F,ws=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),On.subVectors(e,t),r.cross(On);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){On.subVectors(r,t),oi.subVectors(i,t),Oh.subVectors(e,t);let o=On.dot(On),a=On.dot(oi),c=On.dot(Oh),l=oi.dot(oi),u=oi.dot(Oh),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,m=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c)}static isFrontFacing(e,t,i,r){return On.subVectors(i,t),oi.subVectors(e,t),On.cross(oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),On.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;fs.subVectors(r,i),ps.subVectors(s,i),Fh.subVectors(e,i);let c=fs.dot(Fh),l=ps.dot(Fh);if(c<=0&&l<=0)return t.copy(i);Uh.subVectors(e,r);let u=fs.dot(Uh),d=ps.dot(Uh);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(fs,o);kh.subVectors(e,s);let m=fs.dot(kh),g=ps.dot(kh);if(g>=0&&m<=g)return t.copy(s);let v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ps,a);let p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return k0.subVectors(s,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(k0,a);let f=1/(p+v+h);return o=v*f,a=h*f,t.copy(i).addScaledVector(fs,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},T_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},jc={h:0,s:0,l:0};function Bh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=_A(e,1),t=Jt(t,0,1),i=Jt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Bh(o,s,e+1/3),this.g=Bh(o,s,e),this.b=Bh(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let i=T_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Ch(e.r),this.g=Ch(e.g),this.b=Ch(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return ct.fromWorkingColorSpace(zt.copy(this),e),Math.round(Jt(zt.r*255,0,255))*65536+Math.round(Jt(zt.g*255,0,255))*256+Math.round(Jt(zt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(zt.copy(this),t);let i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Ut){ct.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,r=zt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(jc);let i=Sh(Ui.h,jc.h,t),r=Sh(Ui.s,jc.s,t),s=Sh(Ui.l,jc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new tt;tt.NAMES=T_;var NA=0,Ns=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NA++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Ts,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=Yh,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xh&&(i.blendSrc=this.blendSrc),this.blendDst!==Yh&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ls=class extends Ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=m_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bt=new F,$c=new nt,Sn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=S0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Cs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$c.fromBufferAttribute(this,t),$c.applyMatrix3(e),this.setXY(t,$c.x,$c.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Uo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Uo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Uo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Uo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Uo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==S0&&(e.usage=this.usage),e}};var gl=class extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var vl=class extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var fi=class extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var LA=0,En=new Ht,Vh=new Us,ms=new F,ln=new Sr,zo=new Sr,Rt=new F,Tr=class n extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LA++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S_(e)?vl:gl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return Vh.lookAt(e),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(ln.min,zo.min),ln.expandByPoint(Rt),Rt.addVectors(ln.max,zo.max),ln.expandByPoint(Rt)):(ln.expandByPoint(zo.min),ln.expandByPoint(zo.max))}ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Rt.fromBufferAttribute(a,l),c&&(ms.fromBufferAttribute(e,l),Rt.add(ms)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let _=0;_<a;_++)l[_]=new F,u[_]=new F;let d=new F,h=new F,m=new F,g=new nt,v=new nt,p=new nt,f=new F,S=new F;function w(_,T,H){d.fromArray(r,_*3),h.fromArray(r,T*3),m.fromArray(r,H*3),g.fromArray(o,_*2),v.fromArray(o,T*2),p.fromArray(o,H*2),h.sub(d),m.sub(d),v.sub(g),p.sub(g);let K=1/(v.x*p.y-p.x*v.y);isFinite(K)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(K),S.copy(m).multiplyScalar(v.x).addScaledVector(h,-p.x).multiplyScalar(K),l[_].add(f),l[T].add(f),l[H].add(f),u[_].add(S),u[T].add(S),u[H].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let _=0,T=b.length;_<T;++_){let H=b[_],K=H.start,D=H.count;for(let V=K,k=K+D;V<k;V+=3)w(i[V+0],i[V+1],i[V+2])}let I=new F,A=new F,C=new F,G=new F;function ie(_){C.fromArray(s,_*3),G.copy(C);let T=l[_];I.copy(T),I.sub(C.multiplyScalar(C.dot(T))).normalize(),A.crossVectors(G,T);let K=A.dot(u[_])<0?-1:1;c[_*4]=I.x,c[_*4+1]=I.y,c[_*4+2]=I.z,c[_*4+3]=K}for(let _=0,T=b.length;_<T;++_){let H=b[_],K=H.start,D=H.count;for(let V=K,k=K+D;V<k;V+=3)ie(i[V+0]),ie(i[V+1]),ie(i[V+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){let g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),m=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*u;for(let f=0;f<u;f++)h[g++]=l[m++]}return new Sn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},B0=new Ht,gr=new of,qc=new jo,V0=new F,gs=new F,vs=new F,ys=new F,zh=new F,Xc=new F,Yc=new nt,Zc=new nt,Jc=new nt,z0=new F,H0=new F,G0=new F,Kc=new F,Qc=new F,un=class extends Us{constructor(e=new Tr,t=new Ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Xc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(zh.fromBufferAttribute(d,e),o?Xc.addScaledVector(zh,u):Xc.addScaledVector(zh.sub(t),u))}t.add(Xc)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qc.copy(i.boundingSphere),qc.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(qc.containsPoint(gr.origin)===!1&&(gr.intersectSphere(qc,V0)===null||gr.origin.distanceToSquared(V0)>(e.far-e.near)**2))&&(B0.copy(s).invert(),gr.copy(e.ray).applyMatrix4(B0),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let p=h[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),w=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,I=w;b<I;b+=3){let A=a.getX(b),C=a.getX(b+1),G=a.getX(b+2);r=el(this,f,e,i,l,u,d,A,C,G),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let S=a.getX(p),w=a.getX(p+1),b=a.getX(p+2);r=el(this,o,e,i,l,u,d,S,w,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let p=h[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),w=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,I=w;b<I;b+=3){let A=b,C=b+1,G=b+2;r=el(this,f,e,i,l,u,d,A,C,G),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let S=p,w=p+1,b=p+2;r=el(this,o,e,i,l,u,d,S,w,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function OA(n,e,t,i,r,s,o,a){let c;if(e.side===Kt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Gi,a),c===null)return null;Qc.copy(a),Qc.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Qc);return l<t.near||l>t.far?null:{distance:l,point:Qc.clone(),object:n}}function el(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,gs),n.getVertexPosition(c,vs),n.getVertexPosition(l,ys);let u=OA(n,e,t,i,gs,vs,ys,Kc);if(u){r&&(Yc.fromBufferAttribute(r,a),Zc.fromBufferAttribute(r,c),Jc.fromBufferAttribute(r,l),u.uv=ws.getInterpolation(Kc,gs,vs,ys,Yc,Zc,Jc,new nt)),s&&(Yc.fromBufferAttribute(s,a),Zc.fromBufferAttribute(s,c),Jc.fromBufferAttribute(s,l),u.uv1=ws.getInterpolation(Kc,gs,vs,ys,Yc,Zc,Jc,new nt),u.uv2=u.uv1),o&&(z0.fromBufferAttribute(o,a),H0.fromBufferAttribute(o,c),G0.fromBufferAttribute(o,l),u.normal=ws.getInterpolation(Kc,gs,vs,ys,z0,H0,G0,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new F,materialIndex:0};ws.getNormal(gs,vs,ys,d.normal),u.face=d}return u}var Cr=class n extends Tr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new fi(l,3)),this.setAttribute("normal",new fi(u,3)),this.setAttribute("uv",new fi(d,2));function g(v,p,f,S,w,b,I,A,C,G,ie){let _=b/C,T=I/G,H=b/2,K=I/2,D=A/2,V=C+1,k=G+1,$=0,z=0,W=new F;for(let j=0;j<k;j++){let Q=j*T-K;for(let re=0;re<V;re++){let Te=re*_-H;W[v]=Te*S,W[p]=Q*w,W[f]=D,l.push(W.x,W.y,W.z),W[v]=0,W[p]=0,W[f]=A>0?1:-1,u.push(W.x,W.y,W.z),d.push(re/C),d.push(1-j/G),$+=1}}for(let j=0;j<G;j++)for(let Q=0;Q<C;Q++){let re=h+Q+V*j,Te=h+Q+V*(j+1),B=h+(Q+1)+V*(j+1),Y=h+(Q+1)+V*j;c.push(re,Te,Y),c.push(Te,B,Y),z+=6}a.addGroup(m,z,ie),m+=z,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Os(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function jt(n){let e={};for(let t=0;t<n.length;t++){let i=Os(n[t]);for(let r in i)e[r]=i[r]}return e}function FA(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function C_(n){return n.getRenderTarget()===null?n.outputColorSpace:ct.workingColorSpace}var UA={clone:Os,merge:jt},kA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qn=class extends Ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kA,this.fragmentShader=BA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=FA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},yl=class extends Us{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new F,W0=new nt,j0=new nt,qt=class extends yl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=tf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tf*2*Math.atan(Math.tan(bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,W0,j0),t.subVectors(j0,W0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_s=-90,xs=1,af=class extends Us{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qt(_s,xs,e,t);r.layers=this.layers,this.add(r);let s=new qt(_s,xs,e,t);s.layers=this.layers,this.add(s);let o=new qt(_s,xs,e,t);o.layers=this.layers,this.add(o);let a=new qt(_s,xs,e,t);a.layers=this.layers,this.add(a);let c=new qt(_s,xs,e,t);c.layers=this.layers,this.add(c);let l=new qt(_s,xs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},_l=class extends $i{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Is,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cf=class extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Cs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===br?Ut:bn),this.texture=new _l(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cr(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:Vi});s.uniforms.tEquirect.value=t;let o=new un(r,s),a=t.minFilter;return t.minFilter===Mr&&(t.minFilter=Zt),new af(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Hh=new F,VA=new F,zA=new je,li=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Hh.subVectors(i,t).cross(VA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Hh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||zA.getNormalMatrix(e),r=this.coplanarPoint(Hh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vr=new jo,tl=new F,xl=class{constructor(e=new li,t=new li,i=new li,r=new li,s=new li,o=new li){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],m=r[8],g=r[9],v=r[10],p=r[11],f=r[12],S=r[13],w=r[14],b=r[15];if(i[0].setComponents(c-s,h-l,p-m,b-f).normalize(),i[1].setComponents(c+s,h+l,p+m,b+f).normalize(),i[2].setComponents(c+o,h+u,p+g,b+S).normalize(),i[3].setComponents(c-o,h-u,p-g,b-S).normalize(),i[4].setComponents(c-a,h-d,p-v,b-w).normalize(),t===hi)i[5].setComponents(c+a,h+d,p+v,b+w).normalize();else if(t===dl)i[5].setComponents(a,d,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(tl.x=r.normal.x>0?e.max.x:e.min.x,tl.y=r.normal.y>0?e.max.y:e.min.y,tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function A_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function HA(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,u){let d=l.array,h=l.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),l.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,d){let h=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,l),m.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let v=0,p=g.length;v<p;v++){let f=g[v];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=i.get(l);if(d===void 0)i.set(l,r(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,u),d.version=l.version}}return{get:o,remove:a,update:c}}var Ml=class n extends Tr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,m=[],g=[],v=[],p=[];for(let f=0;f<u;f++){let S=f*h-o;for(let w=0;w<l;w++){let b=w*d-s;g.push(b,-S,0),v.push(0,0,1),p.push(w/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){let w=S+l*f,b=S+l*(f+1),I=S+1+l*(f+1),A=S+1+l*f;m.push(w,b,A),m.push(b,I,A)}this.setIndex(m),this.setAttribute("position",new fi(g,3)),this.setAttribute("normal",new fi(v,3)),this.setAttribute("uv",new fi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},GA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WA=`#ifdef USE_ALPHAHASH
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
#endif`,jA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$A=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YA=`#ifdef USE_AOMAP
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
#endif`,ZA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JA=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,KA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,QA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tD=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nD=`#ifdef USE_IRIDESCENCE
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
#endif`,iD=`#ifdef USE_BUMPMAP
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
#endif`,rD=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cD=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dD=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hD=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,fD=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pD=`vec3 transformedNormal = objectNormal;
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
#endif`,mD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_D="gl_FragColor = linearToOutputTexel( gl_FragColor );",xD=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,MD=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,wD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ED=`#ifdef USE_ENVMAP
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
#endif`,bD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SD=`#ifdef USE_ENVMAP
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
#endif`,TD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ID=`#ifdef USE_GRADIENTMAP
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
}`,RD=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,PD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ND=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OD=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,FD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,UD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zD=`PhysicalMaterial material;
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
#endif`,HD=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,GD=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,WD=`#if defined( RE_IndirectDiffuse )
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
#endif`,jD=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$D=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qD=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XD=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,YD=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ZD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QD=`#if defined( USE_POINTS_UV )
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
#endif`,eI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nI=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rI=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,oI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aI=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dI=`#ifdef USE_NORMALMAP
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
#endif`,hI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vI=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,yI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_I=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bI=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,SI=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DI=`#ifdef USE_SKINNING
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
#endif`,II=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RI=`#ifdef USE_SKINNING
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
#endif`,PI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OI=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FI=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UI=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,HI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GI=`uniform sampler2D t2D;
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
}`,WI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jI=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$I=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XI=`#include <common>
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
}`,YI=`#if DEPTH_PACKING == 3200
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
	#endif
}`,ZI=`#define DISTANCE
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
}`,JI=`#define DISTANCE
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
}`,KI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eR=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tR=`uniform vec3 diffuse;
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
}`,nR=`#include <common>
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
}`,iR=`uniform vec3 diffuse;
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
}`,rR=`#define LAMBERT
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
}`,sR=`#define LAMBERT
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
}`,oR=`#define MATCAP
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
}`,aR=`#define MATCAP
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
}`,cR=`#define NORMAL
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
}`,lR=`#define NORMAL
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
}`,uR=`#define PHONG
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
}`,dR=`#define PHONG
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
}`,hR=`#define STANDARD
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
}`,fR=`#define STANDARD
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
}`,pR=`#define TOON
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
}`,mR=`#define TOON
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
}`,gR=`uniform float size;
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
}`,vR=`uniform vec3 diffuse;
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
}`,yR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,_R=`uniform vec3 color;
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
}`,xR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,MR=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:GA,alphahash_pars_fragment:WA,alphamap_fragment:jA,alphamap_pars_fragment:$A,alphatest_fragment:qA,alphatest_pars_fragment:XA,aomap_fragment:YA,aomap_pars_fragment:ZA,batching_pars_vertex:JA,batching_vertex:KA,begin_vertex:QA,beginnormal_vertex:eD,bsdfs:tD,iridescence_fragment:nD,bumpmap_pars_fragment:iD,clipping_planes_fragment:rD,clipping_planes_pars_fragment:sD,clipping_planes_pars_vertex:oD,clipping_planes_vertex:aD,color_fragment:cD,color_pars_fragment:lD,color_pars_vertex:uD,color_vertex:dD,common:hD,cube_uv_reflection_fragment:fD,defaultnormal_vertex:pD,displacementmap_pars_vertex:mD,displacementmap_vertex:gD,emissivemap_fragment:vD,emissivemap_pars_fragment:yD,colorspace_fragment:_D,colorspace_pars_fragment:xD,envmap_fragment:MD,envmap_common_pars_fragment:wD,envmap_pars_fragment:ED,envmap_pars_vertex:bD,envmap_physical_pars_fragment:FD,envmap_vertex:SD,fog_vertex:TD,fog_pars_vertex:CD,fog_fragment:AD,fog_pars_fragment:DD,gradientmap_pars_fragment:ID,lightmap_fragment:RD,lightmap_pars_fragment:PD,lights_lambert_fragment:ND,lights_lambert_pars_fragment:LD,lights_pars_begin:OD,lights_toon_fragment:UD,lights_toon_pars_fragment:kD,lights_phong_fragment:BD,lights_phong_pars_fragment:VD,lights_physical_fragment:zD,lights_physical_pars_fragment:HD,lights_fragment_begin:GD,lights_fragment_maps:WD,lights_fragment_end:jD,logdepthbuf_fragment:$D,logdepthbuf_pars_fragment:qD,logdepthbuf_pars_vertex:XD,logdepthbuf_vertex:YD,map_fragment:ZD,map_pars_fragment:JD,map_particle_fragment:KD,map_particle_pars_fragment:QD,metalnessmap_fragment:eI,metalnessmap_pars_fragment:tI,morphcolor_vertex:nI,morphnormal_vertex:iI,morphtarget_pars_vertex:rI,morphtarget_vertex:sI,normal_fragment_begin:oI,normal_fragment_maps:aI,normal_pars_fragment:cI,normal_pars_vertex:lI,normal_vertex:uI,normalmap_pars_fragment:dI,clearcoat_normal_fragment_begin:hI,clearcoat_normal_fragment_maps:fI,clearcoat_pars_fragment:pI,iridescence_pars_fragment:mI,opaque_fragment:gI,packing:vI,premultiplied_alpha_fragment:yI,project_vertex:_I,dithering_fragment:xI,dithering_pars_fragment:MI,roughnessmap_fragment:wI,roughnessmap_pars_fragment:EI,shadowmap_pars_fragment:bI,shadowmap_pars_vertex:SI,shadowmap_vertex:TI,shadowmask_pars_fragment:CI,skinbase_vertex:AI,skinning_pars_vertex:DI,skinning_vertex:II,skinnormal_vertex:RI,specularmap_fragment:PI,specularmap_pars_fragment:NI,tonemapping_fragment:LI,tonemapping_pars_fragment:OI,transmission_fragment:FI,transmission_pars_fragment:UI,uv_pars_fragment:kI,uv_pars_vertex:BI,uv_vertex:VI,worldpos_vertex:zI,background_vert:HI,background_frag:GI,backgroundCube_vert:WI,backgroundCube_frag:jI,cube_vert:$I,cube_frag:qI,depth_vert:XI,depth_frag:YI,distanceRGBA_vert:ZI,distanceRGBA_frag:JI,equirect_vert:KI,equirect_frag:QI,linedashed_vert:eR,linedashed_frag:tR,meshbasic_vert:nR,meshbasic_frag:iR,meshlambert_vert:rR,meshlambert_frag:sR,meshmatcap_vert:oR,meshmatcap_frag:aR,meshnormal_vert:cR,meshnormal_frag:lR,meshphong_vert:uR,meshphong_frag:dR,meshphysical_vert:hR,meshphysical_frag:fR,meshtoon_vert:pR,meshtoon_frag:mR,points_vert:gR,points_frag:vR,shadow_vert:yR,shadow_frag:_R,sprite_vert:xR,sprite_frag:MR},ne={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},$n={basic:{uniforms:jt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:jt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new tt(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:jt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:jt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:jt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new tt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:jt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:jt([ne.points,ne.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:jt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:jt([ne.common,ne.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:jt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:jt([ne.sprite,ne.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:jt([ne.common,ne.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:jt([ne.lights,ne.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};$n.physical={uniforms:jt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var nl={r:0,b:0,g:0};function wR(n,e,t,i,r,s,o){let a=new tt(0),c=s===!0?0:1,l,u,d=null,h=0,m=null;function g(p,f){let S=!1,w=f.isScene===!0?f.background:null;w&&w.isTexture&&(w=(f.backgroundBlurriness>0?t:e).get(w)),w===null?v(a,c):w&&w.isColor&&(v(w,1),S=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Tl)?(u===void 0&&(u=new un(new Cr(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Os($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=ct.getTransfer(w.colorSpace)!==pt,(d!==w||h!==w.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=w,h=w.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new un(new Ml(2,2),new qn({name:"BackgroundMaterial",uniforms:Os($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=ct.getTransfer(w.colorSpace)!==pt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=w,h=w.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,f){p.getRGB(nl,C_(n)),i.buffers.color.setClear(nl.r,nl.g,nl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(a,c)},render:g}}function ER(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=p(null),l=c,u=!1;function d(D,V,k,$,z){let W=!1;if(o){let j=v($,k,V);l!==j&&(l=j,m(l.object)),W=f(D,$,k,z),W&&S(D,$,k,z)}else{let j=V.wireframe===!0;(l.geometry!==$.id||l.program!==k.id||l.wireframe!==j)&&(l.geometry=$.id,l.program=k.id,l.wireframe=j,W=!0)}z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,G(D,V,k,$),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function v(D,V,k){let $=k.wireframe===!0,z=a[D.id];z===void 0&&(z={},a[D.id]=z);let W=z[V.id];W===void 0&&(W={},z[V.id]=W);let j=W[$];return j===void 0&&(j=p(h()),W[$]=j),j}function p(D){let V=[],k=[],$=[];for(let z=0;z<r;z++)V[z]=0,k[z]=0,$[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:k,attributeDivisors:$,object:D,attributes:{},index:null}}function f(D,V,k,$){let z=l.attributes,W=V.attributes,j=0,Q=k.getAttributes();for(let re in Q)if(Q[re].location>=0){let B=z[re],Y=W[re];if(Y===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),B===void 0||B.attribute!==Y||Y&&B.data!==Y.data)return!0;j++}return l.attributesNum!==j||l.index!==$}function S(D,V,k,$){let z={},W=V.attributes,j=0,Q=k.getAttributes();for(let re in Q)if(Q[re].location>=0){let B=W[re];B===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(B=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(B=D.instanceColor));let Y={};Y.attribute=B,B&&B.data&&(Y.data=B.data),z[re]=Y,j++}l.attributes=z,l.attributesNum=j,l.index=$}function w(){let D=l.newAttributes;for(let V=0,k=D.length;V<k;V++)D[V]=0}function b(D){I(D,0)}function I(D,V){let k=l.newAttributes,$=l.enabledAttributes,z=l.attributeDivisors;k[D]=1,$[D]===0&&(n.enableVertexAttribArray(D),$[D]=1),z[D]!==V&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,V),z[D]=V)}function A(){let D=l.newAttributes,V=l.enabledAttributes;for(let k=0,$=V.length;k<$;k++)V[k]!==D[k]&&(n.disableVertexAttribArray(k),V[k]=0)}function C(D,V,k,$,z,W,j){j===!0?n.vertexAttribIPointer(D,V,k,z,W):n.vertexAttribPointer(D,V,k,$,z,W)}function G(D,V,k,$){if(i.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();let z=$.attributes,W=k.getAttributes(),j=V.defaultAttributeValues;for(let Q in W){let re=W[Q];if(re.location>=0){let Te=z[Q];if(Te===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(Te=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(Te=D.instanceColor)),Te!==void 0){let B=Te.normalized,Y=Te.itemSize,ce=t.get(Te);if(ce===void 0)continue;let xe=ce.buffer,Me=ce.type,he=ce.bytesPerElement,Qe=i.isWebGL2===!0&&(Me===n.INT||Me===n.UNSIGNED_INT||Te.gpuType===g_);if(Te.isInterleavedBufferAttribute){let Le=Te.data,P=Le.stride,Pt=Te.offset;if(Le.isInstancedInterleavedBuffer){for(let ye=0;ye<re.locationSize;ye++)I(re.location+ye,Le.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let ye=0;ye<re.locationSize;ye++)b(re.location+ye);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let ye=0;ye<re.locationSize;ye++)C(re.location+ye,Y/re.locationSize,Me,B,P*he,(Pt+Y/re.locationSize*ye)*he,Qe)}else{if(Te.isInstancedBufferAttribute){for(let Le=0;Le<re.locationSize;Le++)I(re.location+Le,Te.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Le=0;Le<re.locationSize;Le++)b(re.location+Le);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Le=0;Le<re.locationSize;Le++)C(re.location+Le,Y/re.locationSize,Me,B,Y*he,Y/re.locationSize*Le*he,Qe)}}else if(j!==void 0){let B=j[Q];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(re.location,B);break;case 3:n.vertexAttrib3fv(re.location,B);break;case 4:n.vertexAttrib4fv(re.location,B);break;default:n.vertexAttrib1fv(re.location,B)}}}}A()}function ie(){H();for(let D in a){let V=a[D];for(let k in V){let $=V[k];for(let z in $)g($[z].object),delete $[z];delete V[k]}delete a[D]}}function _(D){if(a[D.id]===void 0)return;let V=a[D.id];for(let k in V){let $=V[k];for(let z in $)g($[z].object),delete $[z];delete V[k]}delete a[D.id]}function T(D){for(let V in a){let k=a[V];if(k[D.id]===void 0)continue;let $=k[D.id];for(let z in $)g($[z].object),delete $[z];delete k[D.id]}}function H(){K(),u=!0,l!==c&&(l=c,m(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:H,resetDefaultState:K,dispose:ie,releaseStatesOfGeometry:_,releaseStatesOfProgram:T,initAttributes:w,enableAttribute:b,disableUnusedAttributes:A}}function bR(n,e,t,i){let r=i.isWebGL2,s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function c(u,d,h){if(h===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,d,h),t.update(d,s,h)}function l(u,d,h){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(s,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function SR(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=h>0,b=o||e.has("OES_texture_float"),I=w&&b,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:w,floatFragmentTextures:b,floatVertexTextures:I,maxSamples:A}}function TR(n){let e=this,t=null,i=0,r=!1,s=!1,o=new li,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){let g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{let S=s?0:i,w=S*4,b=f.clippingState||null;c.value=b,b=u(g,h,w,m);for(let I=0;I!==w;++I)b[I]=t[I];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let f=m+v*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let w=0,b=m;w!==v;++w,b+=4)o.copy(d[w]).applyMatrix4(S,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function CR(n){let e=new WeakMap;function t(o,a){return a===Zh?o.mapping=Is:a===Jh&&(o.mapping=Rs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Zh||a===Jh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new cf(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var lf=class extends yl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Es=4,$0=[.125,.215,.35,.446,.526,.582],xr=20,Gh=new lf,q0=new tt,Wh=null,jh=0,$h=0,yr=(1+Math.sqrt(5))/2,Ms=1/yr,X0=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,yr,Ms),new F(0,yr,-Ms),new F(Ms,0,yr),new F(-Ms,0,yr),new F(yr,Ms,0),new F(-yr,Ms,0)],wl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Wh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wh,jh,$h),e.scissorTest=!1,il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Go,format:Un,colorSpace:pi,depthBuffer:!1},r=Y0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y0(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AR(s)),this._blurMaterial=DR(s,e,t)}return r}_compileMaterial(e){let t=new un(this._lodPlanes[0],e);this._renderer.compile(t,Gh)}_sceneToCubeUV(e,t,i,r){let a=new qt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(q0),u.toneMapping=zi,u.autoClear=!1;let m=new Ls({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new un(new Cr,m),v=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(q0),v=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let w=this._cubeSize;il(r,S*w,f>2?w:0,w,w),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Is||e.mapping===Rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=J0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;il(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Gh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=X0[(r-1)%X0.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new un(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xr-1),v=s/g,p=isFinite(s)?1+Math.floor(u*v):xr;p>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xr}`);let f=[],S=0;for(let C=0;C<xr;++C){let G=C/v,ie=Math.exp(-G*G/2);f.push(ie),C===0?S+=ie:C<p&&(S+=2*ie)}for(let C=0;C<f.length;C++)f[C]=f[C]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-i;let b=this._sizeLods[r],I=3*b*(r>w-Es?r-w+Es:0),A=4*(this._cubeSize-b);il(t,I,A,3*b,2*b),c.setRenderTarget(t),c.render(d,Gh)}};function AR(n){let e=[],t=[],i=[],r=n,s=n-Es+1+$0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Es?c=$0[o-n+Es-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,p=2,f=1,S=new Float32Array(v*g*m),w=new Float32Array(p*g*m),b=new Float32Array(f*g*m);for(let A=0;A<m;A++){let C=A%3*2/3-1,G=A>2?0:-1,ie=[C,G,0,C+2/3,G,0,C+2/3,G+1,0,C,G,0,C+2/3,G+1,0,C,G+1,0];S.set(ie,v*g*A),w.set(h,p*g*A);let _=[A,A,A,A,A,A];b.set(_,f*g*A)}let I=new Tr;I.setAttribute("position",new Sn(S,v)),I.setAttribute("uv",new Sn(w,p)),I.setAttribute("faceIndex",new Sn(b,f)),e.push(I),r>Es&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Y0(n,e,t){let i=new mi(n,e,t);return i.texture.mapping=Tl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function il(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function DR(n,e,t){let i=new Float32Array(xr),r=new F(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Of(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Z0(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Of(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function J0(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Of(){return`

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
	`}function IR(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Zh||c===Jh,u=c===Is||c===Rs;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new wl(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new wl(n));let h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function RR(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function PR(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let v=h.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}h.removeEventListener("dispose",o),delete r[h.id];let m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let v=m[g];for(let p=0,f=v.length;p<f;p++)e.update(v[p],n.ARRAY_BUFFER)}}function l(d){let h=[],m=d.index,g=d.attributes.position,v=0;if(m!==null){let S=m.array;v=m.version;for(let w=0,b=S.length;w<b;w+=3){let I=S[w+0],A=S[w+1],C=S[w+2];h.push(I,A,A,C,C,I)}}else if(g!==void 0){let S=g.array;v=g.version;for(let w=0,b=S.length/3-1;w<b;w+=3){let I=w+0,A=w+1,C=w+2;h.push(I,A,A,C,C,I)}}else return;let p=new(S_(h)?vl:gl)(h,1);p.version=v;let f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){let h=s.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function NR(n,e,t,i){let r=i.isWebGL2,s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,g){n.drawElements(s,g,a,m*c),t.update(g,s,1)}function d(m,g,v){if(v===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,a,m*c,v),t.update(g,s,v)}function h(m,g,v){if(v===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<v;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,v);let f=0;for(let S=0;S<v;S++)f+=g[S];t.update(f,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function LR(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function OR(n,e){return n[0]-e[0]}function FR(n,e){return Math.abs(e[1])-Math.abs(n[1])}function UR(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new kt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){let h=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0,p=s.get(u);if(p===void 0||p.count!==v){let V=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();let w=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],G=u.morphAttributes.color||[],ie=0;w===!0&&(ie=1),b===!0&&(ie=2),I===!0&&(ie=3);let _=u.attributes.position.count*ie,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let H=new Float32Array(_*T*4*v),K=new pl(H,_,T,v);K.type=di,K.needsUpdate=!0;let D=ie*4;for(let k=0;k<v;k++){let $=A[k],z=C[k],W=G[k],j=_*T*4*k;for(let Q=0;Q<$.count;Q++){let re=Q*D;w===!0&&(o.fromBufferAttribute($,Q),H[j+re+0]=o.x,H[j+re+1]=o.y,H[j+re+2]=o.z,H[j+re+3]=0),b===!0&&(o.fromBufferAttribute(z,Q),H[j+re+4]=o.x,H[j+re+5]=o.y,H[j+re+6]=o.z,H[j+re+7]=0),I===!0&&(o.fromBufferAttribute(W,Q),H[j+re+8]=o.x,H[j+re+9]=o.y,H[j+re+10]=o.z,H[j+re+11]=W.itemSize===4?o.w:1)}}p={count:v,texture:K,size:new nt(_,T)},s.set(u,p),u.addEventListener("dispose",V)}let f=0;for(let w=0;w<h.length;w++)f+=h[w];let S=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{let g=h===void 0?0:h.length,v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let b=0;b<g;b++)v[b]=[b,0];i[u.id]=v}for(let b=0;b<g;b++){let I=v[b];I[0]=b,I[1]=h[b]}v.sort(FR);for(let b=0;b<8;b++)b<g&&v[b][1]?(a[b][0]=v[b][0],a[b][1]=v[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(OR);let p=u.morphAttributes.position,f=u.morphAttributes.normal,S=0;for(let b=0;b<8;b++){let I=a[b],A=I[0],C=I[1];A!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+b)!==p[A]&&u.setAttribute("morphTarget"+b,p[A]),f&&u.getAttribute("morphNormal"+b)!==f[A]&&u.setAttribute("morphNormal"+b,f[A]),r[b]=C,S+=C):(p&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),f&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}let w=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(n,"morphTargetBaseInfluence",w),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function kR(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var El=class extends $i{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Er,u!==Er&&u!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Er&&(i=Bi),i===void 0&&u===Ps&&(i=wr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=c!==void 0?c:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},D_=new $i,I_=new El(1,1);I_.compareFunction=b_;var R_=new pl,P_=new sf,N_=new _l,K0=[],Q0=[],e_=new Float32Array(16),t_=new Float32Array(9),n_=new Float32Array(4);function ks(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=K0[r];if(s===void 0&&(s=new Float32Array(r),K0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Al(n,e){let t=Q0[e];t===void 0&&(t=new Int32Array(e),Q0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function BR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function VR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function zR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function HR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function GR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Ct(t,i))return;n_.set(i),n.uniformMatrix2fv(this.addr,!1,n_),At(t,i)}}function WR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Ct(t,i))return;t_.set(i),n.uniformMatrix3fv(this.addr,!1,t_),At(t,i)}}function jR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Ct(t,i))return;e_.set(i),n.uniformMatrix4fv(this.addr,!1,e_),At(t,i)}}function $R(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function XR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function YR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function ZR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function JR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function KR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function QR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function e1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?I_:D_;t.setTexture2D(e||s,r)}function t1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||P_,r)}function n1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||N_,r)}function i1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||R_,r)}function r1(n){switch(n){case 5126:return BR;case 35664:return VR;case 35665:return zR;case 35666:return HR;case 35674:return GR;case 35675:return WR;case 35676:return jR;case 5124:case 35670:return $R;case 35667:case 35671:return qR;case 35668:case 35672:return XR;case 35669:case 35673:return YR;case 5125:return ZR;case 36294:return JR;case 36295:return KR;case 36296:return QR;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}function s1(n,e){n.uniform1fv(this.addr,e)}function o1(n,e){let t=ks(e,this.size,2);n.uniform2fv(this.addr,t)}function a1(n,e){let t=ks(e,this.size,3);n.uniform3fv(this.addr,t)}function c1(n,e){let t=ks(e,this.size,4);n.uniform4fv(this.addr,t)}function l1(n,e){let t=ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function u1(n,e){let t=ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function d1(n,e){let t=ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function h1(n,e){n.uniform1iv(this.addr,e)}function f1(n,e){n.uniform2iv(this.addr,e)}function p1(n,e){n.uniform3iv(this.addr,e)}function m1(n,e){n.uniform4iv(this.addr,e)}function g1(n,e){n.uniform1uiv(this.addr,e)}function v1(n,e){n.uniform2uiv(this.addr,e)}function y1(n,e){n.uniform3uiv(this.addr,e)}function _1(n,e){n.uniform4uiv(this.addr,e)}function x1(n,e,t){let i=this.cache,r=e.length,s=Al(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||D_,s[o])}function M1(n,e,t){let i=this.cache,r=e.length,s=Al(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||P_,s[o])}function w1(n,e,t){let i=this.cache,r=e.length,s=Al(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||N_,s[o])}function E1(n,e,t){let i=this.cache,r=e.length,s=Al(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||R_,s[o])}function b1(n){switch(n){case 5126:return s1;case 35664:return o1;case 35665:return a1;case 35666:return c1;case 35674:return l1;case 35675:return u1;case 35676:return d1;case 5124:case 35670:return h1;case 35667:case 35671:return f1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return v1;case 36295:return y1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return E1}}var uf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=r1(t.type)}},df=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b1(t.type)}},hf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},qh=/(\w+)(\])?(\[|\.)?/g;function i_(n,e){n.seq.push(e),n.map[e.id]=e}function S1(n,e,t){let i=n.name,r=i.length;for(qh.lastIndex=0;;){let s=qh.exec(i),o=qh.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){i_(t,l===void 0?new uf(a,n,e):new df(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new hf(a),i_(t,d)),t=d}}}var Ds=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);S1(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function r_(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var T1=37297,C1=0;function A1(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function D1(n){let e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n),i;switch(e===t?i="":e===ul&&t===ll?i="LinearDisplayP3ToLinearSRGB":e===ll&&t===ul&&(i="LinearSRGBToLinearDisplayP3"),n){case pi:case Cl:return[i,"LinearTransferOETF"];case Ut:case Lf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function s_(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+A1(n.getShaderSource(e),o)}else return r}function I1(n,e){let t=D1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function R1(n,e){let t;switch(e){case XC:t="Linear";break;case YC:t="Reinhard";break;case ZC:t="OptimizedCineon";break;case JC:t="ACESFilmic";break;case QC:t="AgX";break;case KC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function P1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function N1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function L1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function O1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function bs(n){return n!==""}function o_(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function a_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var F1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(n){return n.replace(F1,k1)}var U1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function k1(n,e){let t=Be[e];if(t===void 0){let i=U1.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ff(t)}var B1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c_(n){return n.replace(B1,V1)}function V1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function l_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===p_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function H1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Is:case Rs:e="ENVMAP_TYPE_CUBE";break;case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function W1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case m_:e="ENVMAP_BLENDING_MULTIPLY";break;case $C:e="ENVMAP_BLENDING_MIX";break;case qC:e="ENVMAP_BLENDING_ADD";break}return e}function j1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $1(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=z1(t),l=H1(t),u=G1(t),d=W1(t),h=j1(t),m=t.isWebGL2?"":P1(t),g=N1(t),v=L1(s),p=r.createProgram(),f,S,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(bs).join(`
`),f.length>0&&(f+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(bs).join(`
`),S.length>0&&(S+=`
`)):(f=[l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),S=[m,l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?Be.tonemapping_pars_fragment:"",t.toneMapping!==zi?R1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,I1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),o=ff(o),o=o_(o,t),o=a_(o,t),a=ff(a),a=o_(a,t),a=a_(a,t),o=c_(o),a=c_(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===T0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===T0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let b=w+f+o,I=w+S+a,A=r_(r,r.VERTEX_SHADER,b),C=r_(r,r.FRAGMENT_SHADER,I);r.attachShader(p,A),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function G(H){if(n.debug.checkShaderErrors){let K=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(A).trim(),V=r.getShaderInfoLog(C).trim(),k=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,A,C);else{let z=s_(r,A,"vertex"),W=s_(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+K+`
`+z+`
`+W)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(D===""||V==="")&&($=!1);$&&(H.diagnostics={runnable:k,programLog:K,vertexShader:{log:D,prefix:f},fragmentShader:{log:V,prefix:S}})}r.deleteShader(A),r.deleteShader(C),ie=new Ds(r,p),_=O1(r,p)}let ie;this.getUniforms=function(){return ie===void 0&&G(this),ie};let _;this.getAttributes=function(){return _===void 0&&G(this),_};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(p,T1)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=C,this}var q1=0,pf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new mf(e),t.set(e,i)),i}},mf=class{constructor(e){this.id=q1++,this.code=e,this.usedTimes=0}};function X1(n,e,t,i,r,s,o){let a=new ml,c=new pf,l=new Set,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures,g=r.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function f(_,T,H,K,D){let V=K.fog,k=D.geometry,$=_.isMeshStandardMaterial?K.environment:null,z=(_.isMeshStandardMaterial?t:e).get(_.envMap||$),W=z&&z.mapping===Tl?z.image.height:null,j=v[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let Q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,re=Q!==void 0?Q.length:0,Te=0;k.morphAttributes.position!==void 0&&(Te=1),k.morphAttributes.normal!==void 0&&(Te=2),k.morphAttributes.color!==void 0&&(Te=3);let B,Y,ce,xe;if(j){let dt=$n[j];B=dt.vertexShader,Y=dt.fragmentShader}else B=_.vertexShader,Y=_.fragmentShader,c.update(_),ce=c.getVertexShaderID(_),xe=c.getFragmentShaderID(_);let Me=n.getRenderTarget(),he=D.isInstancedMesh===!0,Qe=D.isBatchedMesh===!0,Le=!!_.map,P=!!_.matcap,Pt=!!z,ye=!!_.aoMap,Ae=!!_.lightMap,ge=!!_.bumpMap,gt=!!_.normalMap,Ue=!!_.displacementMap,M=!!_.emissiveMap,y=!!_.metalnessMap,N=!!_.roughnessMap,J=_.anisotropy>0,q=_.clearcoat>0,Z=_.iridescence>0,fe=_.sheen>0,oe=_.transmission>0,le=J&&!!_.anisotropyMap,Ee=q&&!!_.clearcoatMap,Ve=q&&!!_.clearcoatNormalMap,X=q&&!!_.clearcoatRoughnessMap,at=Z&&!!_.iridescenceMap,$e=Z&&!!_.iridescenceThicknessMap,De=fe&&!!_.sheenColorMap,ve=fe&&!!_.sheenRoughnessMap,ue=!!_.specularMap,ke=!!_.specularColorMap,it=!!_.specularIntensityMap,ft=oe&&!!_.transmissionMap,qe=oe&&!!_.thicknessMap,lt=!!_.gradientMap,E=!!_.alphaMap,ee=_.alphaTest>0,te=!!_.alphaHash,de=!!_.extensions,_e=zi;_.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(_e=n.toneMapping);let rt={isWebGL2:d,shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:B,fragmentShader:Y,defines:_.defines,customVertexShaderID:ce,customFragmentShaderID:xe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Qe,instancing:he,instancingColor:he&&D.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:pi,alphaToCoverage:!!_.alphaToCoverage,map:Le,matcap:P,envMap:Pt,envMapMode:Pt&&z.mapping,envMapCubeUVHeight:W,aoMap:ye,lightMap:Ae,bumpMap:ge,normalMap:gt,displacementMap:m&&Ue,emissiveMap:M,normalMapObjectSpace:gt&&_.normalMapType===dA,normalMapTangentSpace:gt&&_.normalMapType===uA,metalnessMap:y,roughnessMap:N,anisotropy:J,anisotropyMap:le,clearcoat:q,clearcoatMap:Ee,clearcoatNormalMap:Ve,clearcoatRoughnessMap:X,iridescence:Z,iridescenceMap:at,iridescenceThicknessMap:$e,sheen:fe,sheenColorMap:De,sheenRoughnessMap:ve,specularMap:ue,specularColorMap:ke,specularIntensityMap:it,transmission:oe,transmissionMap:ft,thicknessMap:qe,gradientMap:lt,opaque:_.transparent===!1&&_.blending===Ts&&_.alphaToCoverage===!1,alphaMap:E,alphaTest:ee,alphaHash:te,combine:_.combine,mapUv:Le&&p(_.map.channel),aoMapUv:ye&&p(_.aoMap.channel),lightMapUv:Ae&&p(_.lightMap.channel),bumpMapUv:ge&&p(_.bumpMap.channel),normalMapUv:gt&&p(_.normalMap.channel),displacementMapUv:Ue&&p(_.displacementMap.channel),emissiveMapUv:M&&p(_.emissiveMap.channel),metalnessMapUv:y&&p(_.metalnessMap.channel),roughnessMapUv:N&&p(_.roughnessMap.channel),anisotropyMapUv:le&&p(_.anisotropyMap.channel),clearcoatMapUv:Ee&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&p(_.sheenRoughnessMap.channel),specularMapUv:ue&&p(_.specularMap.channel),specularColorMapUv:ke&&p(_.specularColorMap.channel),specularIntensityMapUv:it&&p(_.specularIntensityMap.channel),transmissionMapUv:ft&&p(_.transmissionMap.channel),thicknessMapUv:qe&&p(_.thicknessMap.channel),alphaMapUv:E&&p(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(gt||J),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Le||E),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Te,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Le&&_.map.isVideoTexture===!0&&ct.getTransfer(_.map.colorSpace)===pt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ui,flipSided:_.side===Kt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:de&&_.extensions.derivatives===!0,extensionFragDepth:de&&_.extensions.fragDepth===!0,extensionDrawBuffers:de&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:de&&_.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function S(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let H in _.defines)T.push(H),T.push(_.defines[H]);return _.isRawShaderMaterial===!1&&(w(T,_),b(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function w(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function b(_,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),_.push(a.mask)}function I(_){let T=v[_.type],H;if(T){let K=$n[T];H=UA.clone(K.uniforms)}else H=_.uniforms;return H}function A(_,T){let H;for(let K=0,D=u.length;K<D;K++){let V=u[K];if(V.cacheKey===T){H=V,++H.usedTimes;break}}return H===void 0&&(H=new $1(n,T,_,s),u.push(H)),H}function C(_){if(--_.usedTimes===0){let T=u.indexOf(_);u[T]=u[u.length-1],u.pop(),_.destroy()}}function G(_){c.remove(_)}function ie(){c.dispose()}return{getParameters:f,getProgramCacheKey:S,getUniforms:I,acquireProgram:A,releaseProgram:C,releaseShaderCache:G,programs:u,dispose:ie}}function Y1(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Z1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function u_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function d_(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,m,g,v,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=p),e++,f}function a(d,h,m,g,v,p){let f=o(d,h,m,g,v,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(d,h,m,g,v,p){let f=o(d,h,m,g,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||Z1),i.length>1&&i.sort(h||u_),r.length>1&&r.sort(h||u_)}function u(){for(let d=e,h=n.length;d<h;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function J1(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new d_,n.set(i,[o])):r>=s.length?(o=new d_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function K1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new tt};break;case"SpotLight":t={position:new F,direction:new F,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function Q1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var eP=0;function tP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nP(n,e){let t=new K1,i=Q1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);let s=new F,o=new Ht,a=new Ht;function c(u,d){let h=0,m=0,g=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let v=0,p=0,f=0,S=0,w=0,b=0,I=0,A=0,C=0,G=0,ie=0;u.sort(tP);let _=d===!0?Math.PI:1;for(let H=0,K=u.length;H<K;H++){let D=u[H],V=D.color,k=D.intensity,$=D.distance,z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=V.r*k*_,m+=V.g*k*_,g+=V.b*k*_;else if(D.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(D.sh.coefficients[W],k);ie++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*_),D.castShadow){let j=D.shadow,Q=i.get(D);Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,r.directionalShadow[v]=Q,r.directionalShadowMap[v]=z,r.directionalShadowMatrix[v]=D.shadow.matrix,b++}r.directional[v]=W,v++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(V).multiplyScalar(k*_),W.distance=$,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,r.spot[f]=W;let j=D.shadow;if(D.map&&(r.spotLightMap[C]=D.map,C++,j.updateMatrices(D),D.castShadow&&G++),r.spotLightMatrix[f]=j.matrix,D.castShadow){let Q=i.get(D);Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,r.spotShadow[f]=Q,r.spotShadowMap[f]=z,A++}f++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(V).multiplyScalar(k),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),r.rectArea[S]=W,S++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*_),W.distance=D.distance,W.decay=D.decay,D.castShadow){let j=D.shadow,Q=i.get(D);Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,Q.shadowCameraNear=j.camera.near,Q.shadowCameraFar=j.camera.far,r.pointShadow[p]=Q,r.pointShadowMap[p]=z,r.pointShadowMatrix[p]=D.shadow.matrix,I++}r.point[p]=W,p++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(k*_),W.groundColor.copy(D.groundColor).multiplyScalar(k*_),r.hemi[w]=W,w++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;let T=r.hash;(T.directionalLength!==v||T.pointLength!==p||T.spotLength!==f||T.rectAreaLength!==S||T.hemiLength!==w||T.numDirectionalShadows!==b||T.numPointShadows!==I||T.numSpotShadows!==A||T.numSpotMaps!==C||T.numLightProbes!==ie)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=S,r.point.length=p,r.hemi.length=w,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=A+C-G,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=ie,T.directionalLength=v,T.pointLength=p,T.spotLength=f,T.rectAreaLength=S,T.hemiLength=w,T.numDirectionalShadows=b,T.numPointShadows=I,T.numSpotShadows=A,T.numSpotMaps=C,T.numLightProbes=ie,r.version=eP++)}function l(u,d){let h=0,m=0,g=0,v=0,p=0,f=d.matrixWorldInverse;for(let S=0,w=u.length;S<w;S++){let b=u[S];if(b.isDirectionalLight){let I=r.directional[h];I.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),h++}else if(b.isSpotLight){let I=r.spot[g];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),g++}else if(b.isRectAreaLight){let I=r.rectArea[v];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(f),a.identity(),o.copy(b.matrixWorld),o.premultiply(f),a.extractRotation(o),I.halfWidth.set(b.width*.5,0,0),I.halfHeight.set(0,b.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let I=r.point[m];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(f),m++}else if(b.isHemisphereLight){let I=r.hemi[p];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:r}}function h_(n,e){let t=new nP(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function iP(n,e){let t=new WeakMap;function i(s,o=0){let a=t.get(s),c;return a===void 0?(c=new h_(n,e),t.set(s,[c])):o>=a.length?(c=new h_(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}var gf=class extends Ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vf=class extends Ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},rP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sP=`uniform sampler2D shadow_pass;
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
}`;function oP(n,e,t){let i=new xl,r=new nt,s=new nt,o=new kt,a=new gf({depthPacking:lA}),c=new vf,l={},u=t.maxTextureSize,d={[Gi]:Kt,[Kt]:Gi,[ui]:ui},h=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:rP,fragmentShader:sP}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new Tr;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new un(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=p_;let f=this.type;this.render=function(A,C,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let ie=n.getRenderTarget(),_=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Vi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let K=f!==ci&&this.type===ci,D=f===ci&&this.type!==ci;for(let V=0,k=A.length;V<k;V++){let $=A[V],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let W=z.getFrameExtents();if(r.multiply(W),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,z.mapSize.y=s.y)),z.map===null||K===!0||D===!0){let Q=this.type!==ci?{minFilter:$t,magFilter:$t}:{};z.map!==null&&z.map.dispose(),z.map=new mi(r.x,r.y,Q),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let j=z.getViewportCount();for(let Q=0;Q<j;Q++){let re=z.getViewport(Q);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),H.viewport(o),z.updateMatrices($,Q),i=z.getFrustum(),b(C,G,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===ci&&S(z,G),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(ie,_,T)};function S(A,C){let G=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new mi(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,G,h,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,G,m,v,null)}function w(A,C,G,ie){let _=null,T=G.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)_=T;else if(_=G.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let H=_.uuid,K=C.uuid,D=l[H];D===void 0&&(D={},l[H]=D);let V=D[K];V===void 0&&(V=_.clone(),D[K]=V,C.addEventListener("dispose",I)),_=V}if(_.visible=C.visible,_.wireframe=C.wireframe,ie===ci?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:d[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,G.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let H=n.properties.get(_);H.light=G}return _}function b(A,C,G,ie,_){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===ci)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld);let K=e.update(A),D=A.material;if(Array.isArray(D)){let V=K.groups;for(let k=0,$=V.length;k<$;k++){let z=V[k],W=D[z.materialIndex];if(W&&W.visible){let j=w(A,W,ie,_);A.onBeforeShadow(n,A,C,G,K,j,z),n.renderBufferDirect(G,null,K,j,A,z),A.onAfterShadow(n,A,C,G,K,j,z)}}}else if(D.visible){let V=w(A,D,ie,_);A.onBeforeShadow(n,A,C,G,K,V,null),n.renderBufferDirect(G,null,K,V,A,null),A.onAfterShadow(n,A,C,G,K,V,null)}}let H=A.children;for(let K=0,D=H.length;K<D;K++)b(H[K],C,G,ie,_)}function I(A){A.target.removeEventListener("dispose",I);for(let G in l){let ie=l[G],_=A.target.uuid;_ in ie&&(ie[_].dispose(),delete ie[_])}}}function aP(n,e,t){let i=t.isWebGL2;function r(){let E=!1,ee=new kt,te=null,de=new kt(0,0,0,0);return{setMask:function(_e){te!==_e&&!E&&(n.colorMask(_e,_e,_e,_e),te=_e)},setLocked:function(_e){E=_e},setClear:function(_e,rt,dt,Nt,dn){dn===!0&&(_e*=Nt,rt*=Nt,dt*=Nt),ee.set(_e,rt,dt,Nt),de.equals(ee)===!1&&(n.clearColor(_e,rt,dt,Nt),de.copy(ee))},reset:function(){E=!1,te=null,de.set(-1,0,0,0)}}}function s(){let E=!1,ee=null,te=null,de=null;return{setTest:function(_e){_e?he(n.DEPTH_TEST):Qe(n.DEPTH_TEST)},setMask:function(_e){ee!==_e&&!E&&(n.depthMask(_e),ee=_e)},setFunc:function(_e){if(te!==_e){switch(_e){case BC:n.depthFunc(n.NEVER);break;case VC:n.depthFunc(n.ALWAYS);break;case zC:n.depthFunc(n.LESS);break;case sl:n.depthFunc(n.LEQUAL);break;case HC:n.depthFunc(n.EQUAL);break;case GC:n.depthFunc(n.GEQUAL);break;case WC:n.depthFunc(n.GREATER);break;case jC:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=_e}},setLocked:function(_e){E=_e},setClear:function(_e){de!==_e&&(n.clearDepth(_e),de=_e)},reset:function(){E=!1,ee=null,te=null,de=null}}}function o(){let E=!1,ee=null,te=null,de=null,_e=null,rt=null,dt=null,Nt=null,dn=null;return{setTest:function(ht){E||(ht?he(n.STENCIL_TEST):Qe(n.STENCIL_TEST))},setMask:function(ht){ee!==ht&&!E&&(n.stencilMask(ht),ee=ht)},setFunc:function(ht,Gt,Bn){(te!==ht||de!==Gt||_e!==Bn)&&(n.stencilFunc(ht,Gt,Bn),te=ht,de=Gt,_e=Bn)},setOp:function(ht,Gt,Bn){(rt!==ht||dt!==Gt||Nt!==Bn)&&(n.stencilOp(ht,Gt,Bn),rt=ht,dt=Gt,Nt=Bn)},setLocked:function(ht){E=ht},setClear:function(ht){dn!==ht&&(n.clearStencil(ht),dn=ht)},reset:function(){E=!1,ee=null,te=null,de=null,_e=null,rt=null,dt=null,Nt=null,dn=null}}}let a=new r,c=new s,l=new o,u=new WeakMap,d=new WeakMap,h={},m={},g=new WeakMap,v=[],p=null,f=!1,S=null,w=null,b=null,I=null,A=null,C=null,G=null,ie=new tt(0,0,0),_=0,T=!1,H=null,K=null,D=null,V=null,k=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,W=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=W>=2);let Q=null,re={},Te=n.getParameter(n.SCISSOR_BOX),B=n.getParameter(n.VIEWPORT),Y=new kt().fromArray(Te),ce=new kt().fromArray(B);function xe(E,ee,te,de){let _e=new Uint8Array(4),rt=n.createTexture();n.bindTexture(E,rt),n.texParameteri(E,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(E,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<te;dt++)i&&(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)?n.texImage3D(ee,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(ee+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return rt}let Me={};Me[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Me[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),he(n.DEPTH_TEST),c.setFunc(sl),Ue(!1),M(Hy),he(n.CULL_FACE),ge(Vi);function he(E){h[E]!==!0&&(n.enable(E),h[E]=!0)}function Qe(E){h[E]!==!1&&(n.disable(E),h[E]=!1)}function Le(E,ee){return m[E]!==ee?(n.bindFramebuffer(E,ee),m[E]=ee,i&&(E===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ee),E===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ee)),!0):!1}function P(E,ee){let te=v,de=!1;if(E)if(te=g.get(ee),te===void 0&&(te=[],g.set(ee,te)),E.isWebGLMultipleRenderTargets){let _e=E.texture;if(te.length!==_e.length||te[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,dt=_e.length;rt<dt;rt++)te[rt]=n.COLOR_ATTACHMENT0+rt;te.length=_e.length,de=!0}}else te[0]!==n.COLOR_ATTACHMENT0&&(te[0]=n.COLOR_ATTACHMENT0,de=!0);else te[0]!==n.BACK&&(te[0]=n.BACK,de=!0);de&&(t.isWebGL2?n.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Pt(E){return p!==E?(n.useProgram(E),p=E,!0):!1}let ye={[_r]:n.FUNC_ADD,[bC]:n.FUNC_SUBTRACT,[SC]:n.FUNC_REVERSE_SUBTRACT};if(i)ye[$y]=n.MIN,ye[qy]=n.MAX;else{let E=e.get("EXT_blend_minmax");E!==null&&(ye[$y]=E.MIN_EXT,ye[qy]=E.MAX_EXT)}let Ae={[TC]:n.ZERO,[CC]:n.ONE,[AC]:n.SRC_COLOR,[Xh]:n.SRC_ALPHA,[LC]:n.SRC_ALPHA_SATURATE,[PC]:n.DST_COLOR,[IC]:n.DST_ALPHA,[DC]:n.ONE_MINUS_SRC_COLOR,[Yh]:n.ONE_MINUS_SRC_ALPHA,[NC]:n.ONE_MINUS_DST_COLOR,[RC]:n.ONE_MINUS_DST_ALPHA,[OC]:n.CONSTANT_COLOR,[FC]:n.ONE_MINUS_CONSTANT_COLOR,[UC]:n.CONSTANT_ALPHA,[kC]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(E,ee,te,de,_e,rt,dt,Nt,dn,ht){if(E===Vi){f===!0&&(Qe(n.BLEND),f=!1);return}if(f===!1&&(he(n.BLEND),f=!0),E!==EC){if(E!==S||ht!==T){if((w!==_r||A!==_r)&&(n.blendEquation(n.FUNC_ADD),w=_r,A=_r),ht)switch(E){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gy:n.blendFunc(n.ONE,n.ONE);break;case Wy:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jy:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gy:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wy:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jy:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}b=null,I=null,C=null,G=null,ie.set(0,0,0),_=0,S=E,T=ht}return}_e=_e||ee,rt=rt||te,dt=dt||de,(ee!==w||_e!==A)&&(n.blendEquationSeparate(ye[ee],ye[_e]),w=ee,A=_e),(te!==b||de!==I||rt!==C||dt!==G)&&(n.blendFuncSeparate(Ae[te],Ae[de],Ae[rt],Ae[dt]),b=te,I=de,C=rt,G=dt),(Nt.equals(ie)===!1||dn!==_)&&(n.blendColor(Nt.r,Nt.g,Nt.b,dn),ie.copy(Nt),_=dn),S=E,T=!1}function gt(E,ee){E.side===ui?Qe(n.CULL_FACE):he(n.CULL_FACE);let te=E.side===Kt;ee&&(te=!te),Ue(te),E.blending===Ts&&E.transparent===!1?ge(Vi):ge(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),c.setFunc(E.depthFunc),c.setTest(E.depthTest),c.setMask(E.depthWrite),a.setMask(E.colorWrite);let de=E.stencilWrite;l.setTest(de),de&&(l.setMask(E.stencilWriteMask),l.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),l.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),N(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(E){H!==E&&(E?n.frontFace(n.CW):n.frontFace(n.CCW),H=E)}function M(E){E!==xC?(he(n.CULL_FACE),E!==K&&(E===Hy?n.cullFace(n.BACK):E===MC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qe(n.CULL_FACE),K=E}function y(E){E!==D&&(z&&n.lineWidth(E),D=E)}function N(E,ee,te){E?(he(n.POLYGON_OFFSET_FILL),(V!==ee||k!==te)&&(n.polygonOffset(ee,te),V=ee,k=te)):Qe(n.POLYGON_OFFSET_FILL)}function J(E){E?he(n.SCISSOR_TEST):Qe(n.SCISSOR_TEST)}function q(E){E===void 0&&(E=n.TEXTURE0+$-1),Q!==E&&(n.activeTexture(E),Q=E)}function Z(E,ee,te){te===void 0&&(Q===null?te=n.TEXTURE0+$-1:te=Q);let de=re[te];de===void 0&&(de={type:void 0,texture:void 0},re[te]=de),(de.type!==E||de.texture!==ee)&&(Q!==te&&(n.activeTexture(te),Q=te),n.bindTexture(E,ee||Me[E]),de.type=E,de.texture=ee)}function fe(){let E=re[Q];E!==void 0&&E.type!==void 0&&(n.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function le(){try{n.compressedTexImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ve(){try{n.texSubImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function X(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function at(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function $e(){try{n.texStorage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function De(){try{n.texStorage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ue(){try{n.texImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ke(E){Y.equals(E)===!1&&(n.scissor(E.x,E.y,E.z,E.w),Y.copy(E))}function it(E){ce.equals(E)===!1&&(n.viewport(E.x,E.y,E.z,E.w),ce.copy(E))}function ft(E,ee){let te=d.get(ee);te===void 0&&(te=new WeakMap,d.set(ee,te));let de=te.get(E);de===void 0&&(de=n.getUniformBlockIndex(ee,E.name),te.set(E,de))}function qe(E,ee){let de=d.get(ee).get(E);u.get(ee)!==de&&(n.uniformBlockBinding(ee,de,E.__bindingPointIndex),u.set(ee,de))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,re={},m={},g=new WeakMap,v=[],p=null,f=!1,S=null,w=null,b=null,I=null,A=null,C=null,G=null,ie=new tt(0,0,0),_=0,T=!1,H=null,K=null,D=null,V=null,k=null,Y.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:he,disable:Qe,bindFramebuffer:Le,drawBuffers:P,useProgram:Pt,setBlending:ge,setMaterial:gt,setFlipSided:Ue,setCullFace:M,setLineWidth:y,setPolygonOffset:N,setScissorTest:J,activeTexture:q,bindTexture:Z,unbindTexture:fe,compressedTexImage2D:oe,compressedTexImage3D:le,texImage2D:ve,texImage3D:ue,updateUBOMapping:ft,uniformBlockBinding:qe,texStorage2D:$e,texStorage3D:De,texSubImage2D:Ee,texSubImage3D:Ve,compressedTexSubImage2D:X,compressedTexSubImage3D:at,scissor:ke,viewport:it,reset:lt}}function cP(n,e,t,i,r,s,o){let a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,h=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,y){return m?new OffscreenCanvas(M,y):Wo("canvas")}function v(M,y,N,J){let q=1;if((M.width>J||M.height>J)&&(q=J/Math.max(M.width,M.height)),q<1||y===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let Z=y?nf:Math.floor,fe=Z(q*M.width),oe=Z(q*M.height);d===void 0&&(d=g(fe,oe));let le=N?g(fe,oe):d;return le.width=fe,le.height=oe,le.getContext("2d").drawImage(M,0,0,fe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+fe+"x"+oe+")."),le}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return C0(M.width)&&C0(M.height)}function f(M){return a?!1:M.wrapS!==Fn||M.wrapT!==Fn||M.minFilter!==$t&&M.minFilter!==Zt}function S(M,y){return M.generateMipmaps&&y&&M.minFilter!==$t&&M.minFilter!==Zt}function w(M){n.generateMipmap(M)}function b(M,y,N,J,q=!1){if(a===!1)return y;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Z=y;if(y===n.RED&&(N===n.FLOAT&&(Z=n.R32F),N===n.HALF_FLOAT&&(Z=n.R16F),N===n.UNSIGNED_BYTE&&(Z=n.R8)),y===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.R8UI),N===n.UNSIGNED_SHORT&&(Z=n.R16UI),N===n.UNSIGNED_INT&&(Z=n.R32UI),N===n.BYTE&&(Z=n.R8I),N===n.SHORT&&(Z=n.R16I),N===n.INT&&(Z=n.R32I)),y===n.RG&&(N===n.FLOAT&&(Z=n.RG32F),N===n.HALF_FLOAT&&(Z=n.RG16F),N===n.UNSIGNED_BYTE&&(Z=n.RG8)),y===n.RGBA){let fe=q?cl:ct.getTransfer(J);N===n.FLOAT&&(Z=n.RGBA32F),N===n.HALF_FLOAT&&(Z=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Z=fe===pt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function I(M,y,N){return S(M,N)===!0||M.isFramebufferTexture&&M.minFilter!==$t&&M.minFilter!==Zt?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function A(M){return M===$t||M===Yy||M===Fo?n.NEAREST:n.LINEAR}function C(M){let y=M.target;y.removeEventListener("dispose",C),ie(y),y.isVideoTexture&&u.delete(y)}function G(M){let y=M.target;y.removeEventListener("dispose",G),T(y)}function ie(M){let y=i.get(M);if(y.__webglInit===void 0)return;let N=M.source,J=h.get(N);if(J){let q=J[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&_(M),Object.keys(J).length===0&&h.delete(N)}i.remove(M)}function _(M){let y=i.get(M);n.deleteTexture(y.__webglTexture);let N=M.source,J=h.get(N);delete J[y.__cacheKey],o.memory.textures--}function T(M){let y=M.texture,N=i.get(M),J=i.get(y);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(N.__webglFramebuffer[q]))for(let Z=0;Z<N.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(N.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(N.__webglFramebuffer[q]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[q])}else{if(Array.isArray(N.__webglFramebuffer))for(let q=0;q<N.__webglFramebuffer.length;q++)n.deleteFramebuffer(N.__webglFramebuffer[q]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let q=0;q<N.__webglColorRenderbuffer.length;q++)N.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[q]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let q=0,Z=y.length;q<Z;q++){let fe=i.get(y[q]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(y[q])}i.remove(y),i.remove(M)}let H=0;function K(){H=0}function D(){let M=H;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),H+=1,M}function V(M){let y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function k(M,y){let N=i.get(M);if(M.isVideoTexture&&gt(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){let J=M.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,M,y);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+y)}function $(M,y){let N=i.get(M);if(M.version>0&&N.__version!==M.version){Y(N,M,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+y)}function z(M,y){let N=i.get(M);if(M.version>0&&N.__version!==M.version){Y(N,M,y);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+y)}function W(M,y){let N=i.get(M);if(M.version>0&&N.__version!==M.version){ce(N,M,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+y)}let j={[Kh]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[Qh]:n.MIRRORED_REPEAT},Q={[$t]:n.NEAREST,[Yy]:n.NEAREST_MIPMAP_NEAREST,[Fo]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[vh]:n.LINEAR_MIPMAP_NEAREST,[Mr]:n.LINEAR_MIPMAP_LINEAR},re={[hA]:n.NEVER,[yA]:n.ALWAYS,[fA]:n.LESS,[b_]:n.LEQUAL,[pA]:n.EQUAL,[vA]:n.GEQUAL,[mA]:n.GREATER,[gA]:n.NOTEQUAL};function Te(M,y,N){if(y.type===di&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Zt||y.magFilter===vh||y.magFilter===Fo||y.magFilter===Mr||y.minFilter===Zt||y.minFilter===vh||y.minFilter===Fo||y.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),N?(n.texParameteri(M,n.TEXTURE_WRAP_S,j[y.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,j[y.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,j[y.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Q[y.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Q[y.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==Fn||y.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,A(y.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,A(y.minFilter)),y.minFilter!==$t&&y.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,re[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let J=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===$t||y.minFilter!==Fo&&y.minFilter!==Mr||y.type===di&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Go&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(M,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function B(M,y){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",C));let J=y.source,q=h.get(J);q===void 0&&(q={},h.set(J,q));let Z=V(y);if(Z!==M.__cacheKey){q[Z]===void 0&&(q[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),q[Z].usedTimes++;let fe=q[M.__cacheKey];fe!==void 0&&(q[M.__cacheKey].usedTimes--,fe.usedTimes===0&&_(y)),M.__cacheKey=Z,M.__webglTexture=q[Z].texture}return N}function Y(M,y,N){let J=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=n.TEXTURE_3D);let q=B(M,y),Z=y.source;t.bindTexture(J,M.__webglTexture,n.TEXTURE0+N);let fe=i.get(Z);if(Z.version!==fe.__version||q===!0){t.activeTexture(n.TEXTURE0+N);let oe=ct.getPrimaries(ct.workingColorSpace),le=y.colorSpace===bn?null:ct.getPrimaries(y.colorSpace),Ee=y.colorSpace===bn||oe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Ve=f(y)&&p(y.image)===!1,X=v(y.image,Ve,!1,r.maxTextureSize);X=Ue(y,X);let at=p(X)||a,$e=s.convert(y.format,y.colorSpace),De=s.convert(y.type),ve=b(y.internalFormat,$e,De,y.colorSpace,y.isVideoTexture);Te(J,y,at);let ue,ke=y.mipmaps,it=a&&y.isVideoTexture!==!0&&ve!==w_,ft=fe.__version===void 0||q===!0,qe=Z.dataReady,lt=I(y,X,at);if(y.isDepthTexture)ve=n.DEPTH_COMPONENT,a?y.type===di?ve=n.DEPTH_COMPONENT32F:y.type===Bi?ve=n.DEPTH_COMPONENT24:y.type===wr?ve=n.DEPTH24_STENCIL8:ve=n.DEPTH_COMPONENT16:y.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Er&&ve===n.DEPTH_COMPONENT&&y.type!==Nf&&y.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Bi,De=s.convert(y.type)),y.format===Ps&&ve===n.DEPTH_COMPONENT&&(ve=n.DEPTH_STENCIL,y.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=wr,De=s.convert(y.type))),ft&&(it?t.texStorage2D(n.TEXTURE_2D,1,ve,X.width,X.height):t.texImage2D(n.TEXTURE_2D,0,ve,X.width,X.height,0,$e,De,null));else if(y.isDataTexture)if(ke.length>0&&at){it&&ft&&t.texStorage2D(n.TEXTURE_2D,lt,ve,ke[0].width,ke[0].height);for(let E=0,ee=ke.length;E<ee;E++)ue=ke[E],it?qe&&t.texSubImage2D(n.TEXTURE_2D,E,0,0,ue.width,ue.height,$e,De,ue.data):t.texImage2D(n.TEXTURE_2D,E,ve,ue.width,ue.height,0,$e,De,ue.data);y.generateMipmaps=!1}else it?(ft&&t.texStorage2D(n.TEXTURE_2D,lt,ve,X.width,X.height),qe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,X.width,X.height,$e,De,X.data)):t.texImage2D(n.TEXTURE_2D,0,ve,X.width,X.height,0,$e,De,X.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){it&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ve,ke[0].width,ke[0].height,X.depth);for(let E=0,ee=ke.length;E<ee;E++)ue=ke[E],y.format!==Un?$e!==null?it?qe&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,E,0,0,0,ue.width,ue.height,X.depth,$e,ue.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,E,ve,ue.width,ue.height,X.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?qe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,E,0,0,0,ue.width,ue.height,X.depth,$e,De,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,E,ve,ue.width,ue.height,X.depth,0,$e,De,ue.data)}else{it&&ft&&t.texStorage2D(n.TEXTURE_2D,lt,ve,ke[0].width,ke[0].height);for(let E=0,ee=ke.length;E<ee;E++)ue=ke[E],y.format!==Un?$e!==null?it?qe&&t.compressedTexSubImage2D(n.TEXTURE_2D,E,0,0,ue.width,ue.height,$e,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,E,ve,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?qe&&t.texSubImage2D(n.TEXTURE_2D,E,0,0,ue.width,ue.height,$e,De,ue.data):t.texImage2D(n.TEXTURE_2D,E,ve,ue.width,ue.height,0,$e,De,ue.data)}else if(y.isDataArrayTexture)it?(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ve,X.width,X.height,X.depth),qe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,$e,De,X.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,X.width,X.height,X.depth,0,$e,De,X.data);else if(y.isData3DTexture)it?(ft&&t.texStorage3D(n.TEXTURE_3D,lt,ve,X.width,X.height,X.depth),qe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,$e,De,X.data)):t.texImage3D(n.TEXTURE_3D,0,ve,X.width,X.height,X.depth,0,$e,De,X.data);else if(y.isFramebufferTexture){if(ft)if(it)t.texStorage2D(n.TEXTURE_2D,lt,ve,X.width,X.height);else{let E=X.width,ee=X.height;for(let te=0;te<lt;te++)t.texImage2D(n.TEXTURE_2D,te,ve,E,ee,0,$e,De,null),E>>=1,ee>>=1}}else if(ke.length>0&&at){it&&ft&&t.texStorage2D(n.TEXTURE_2D,lt,ve,ke[0].width,ke[0].height);for(let E=0,ee=ke.length;E<ee;E++)ue=ke[E],it?qe&&t.texSubImage2D(n.TEXTURE_2D,E,0,0,$e,De,ue):t.texImage2D(n.TEXTURE_2D,E,ve,$e,De,ue);y.generateMipmaps=!1}else it?(ft&&t.texStorage2D(n.TEXTURE_2D,lt,ve,X.width,X.height),qe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,$e,De,X)):t.texImage2D(n.TEXTURE_2D,0,ve,$e,De,X);S(y,at)&&w(J),fe.__version=Z.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function ce(M,y,N){if(y.image.length!==6)return;let J=B(M,y),q=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+N);let Z=i.get(q);if(q.version!==Z.__version||J===!0){t.activeTexture(n.TEXTURE0+N);let fe=ct.getPrimaries(ct.workingColorSpace),oe=y.colorSpace===bn?null:ct.getPrimaries(y.colorSpace),le=y.colorSpace===bn||fe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Ee=y.isCompressedTexture||y.image[0].isCompressedTexture,Ve=y.image[0]&&y.image[0].isDataTexture,X=[];for(let E=0;E<6;E++)!Ee&&!Ve?X[E]=v(y.image[E],!1,!0,r.maxCubemapSize):X[E]=Ve?y.image[E].image:y.image[E],X[E]=Ue(y,X[E]);let at=X[0],$e=p(at)||a,De=s.convert(y.format,y.colorSpace),ve=s.convert(y.type),ue=b(y.internalFormat,De,ve,y.colorSpace),ke=a&&y.isVideoTexture!==!0,it=Z.__version===void 0||J===!0,ft=q.dataReady,qe=I(y,at,$e);Te(n.TEXTURE_CUBE_MAP,y,$e);let lt;if(Ee){ke&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,ue,at.width,at.height);for(let E=0;E<6;E++){lt=X[E].mipmaps;for(let ee=0;ee<lt.length;ee++){let te=lt[ee];y.format!==Un?De!==null?ke?ft&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,ee,0,0,te.width,te.height,De,te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,ee,ue,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?ft&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,ee,0,0,te.width,te.height,De,ve,te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,ee,ue,te.width,te.height,0,De,ve,te.data)}}}else{lt=y.mipmaps,ke&&it&&(lt.length>0&&qe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,ue,X[0].width,X[0].height));for(let E=0;E<6;E++)if(Ve){ke?ft&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,0,0,X[E].width,X[E].height,De,ve,X[E].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,ue,X[E].width,X[E].height,0,De,ve,X[E].data);for(let ee=0;ee<lt.length;ee++){let de=lt[ee].image[E].image;ke?ft&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,ee+1,0,0,de.width,de.height,De,ve,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,ee+1,ue,de.width,de.height,0,De,ve,de.data)}}else{ke?ft&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,0,0,De,ve,X[E]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,ue,De,ve,X[E]);for(let ee=0;ee<lt.length;ee++){let te=lt[ee];ke?ft&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,ee+1,0,0,De,ve,te.image[E]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,ee+1,ue,De,ve,te.image[E])}}}S(y,$e)&&w(n.TEXTURE_CUBE_MAP),Z.__version=q.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function xe(M,y,N,J,q,Z){let fe=s.convert(N.format,N.colorSpace),oe=s.convert(N.type),le=b(N.internalFormat,fe,oe,N.colorSpace);if(!i.get(y).__hasExternalTextures){let Ve=Math.max(1,y.width>>Z),X=Math.max(1,y.height>>Z);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,Z,le,Ve,X,y.depth,0,fe,oe,null):t.texImage2D(q,Z,le,Ve,X,0,fe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),ge(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,q,i.get(N).__webglTexture,0,Ae(y)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,q,i.get(N).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(M,y,N){if(n.bindRenderbuffer(n.RENDERBUFFER,M),y.depthBuffer&&!y.stencilBuffer){let J=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(N||ge(y)){let q=y.depthTexture;q&&q.isDepthTexture&&(q.type===di?J=n.DEPTH_COMPONENT32F:q.type===Bi&&(J=n.DEPTH_COMPONENT24));let Z=Ae(y);ge(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,J,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,J,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(y.depthBuffer&&y.stencilBuffer){let J=Ae(y);N&&ge(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,y.width,y.height):ge(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{let J=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let q=0;q<J.length;q++){let Z=J[q],fe=s.convert(Z.format,Z.colorSpace),oe=s.convert(Z.type),le=b(Z.internalFormat,fe,oe,Z.colorSpace),Ee=Ae(y);N&&ge(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,le,y.width,y.height):ge(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,le,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,le,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k(y.depthTexture,0);let J=i.get(y.depthTexture).__webglTexture,q=Ae(y);if(y.depthTexture.format===Er)ge(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(y.depthTexture.format===Ps)ge(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Qe(M){let y=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");he(y.__webglFramebuffer,M)}else if(N){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]=n.createRenderbuffer(),Me(y.__webglDepthbuffer[J],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),Me(y.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(M,y,N){let J=i.get(M);y!==void 0&&xe(J.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Qe(M)}function P(M){let y=M.texture,N=i.get(M),J=i.get(y);M.addEventListener("dispose",G),M.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=y.version,o.memory.textures++);let q=M.isWebGLCubeRenderTarget===!0,Z=M.isWebGLMultipleRenderTargets===!0,fe=p(M)||a;if(q){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let le=0;le<y.mipmaps.length;le++)N.__webglFramebuffer[oe][le]=n.createFramebuffer()}else N.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)N.__webglFramebuffer[oe]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Z)if(r.drawBuffers){let oe=M.texture;for(let le=0,Ee=oe.length;le<Ee;le++){let Ve=i.get(oe[le]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&ge(M)===!1){let oe=Z?y:[y];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<oe.length;le++){let Ee=oe[le];N.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[le]);let Ve=s.convert(Ee.format,Ee.colorSpace),X=s.convert(Ee.type),at=b(Ee.internalFormat,Ve,X,Ee.colorSpace,M.isXRRenderTarget===!0),$e=Ae(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,at,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,N.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Te(n.TEXTURE_CUBE_MAP,y,fe);for(let oe=0;oe<6;oe++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)xe(N.__webglFramebuffer[oe][le],M,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else xe(N.__webglFramebuffer[oe],M,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);S(y,fe)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){let oe=M.texture;for(let le=0,Ee=oe.length;le<Ee;le++){let Ve=oe[le],X=i.get(Ve);t.bindTexture(n.TEXTURE_2D,X.__webglTexture),Te(n.TEXTURE_2D,Ve,fe),xe(N.__webglFramebuffer,M,Ve,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),S(Ve,fe)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?oe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,J.__webglTexture),Te(oe,y,fe),a&&y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)xe(N.__webglFramebuffer[le],M,y,n.COLOR_ATTACHMENT0,oe,le);else xe(N.__webglFramebuffer,M,y,n.COLOR_ATTACHMENT0,oe,0);S(y,fe)&&w(oe),t.unbindTexture()}M.depthBuffer&&Qe(M)}function Pt(M){let y=p(M)||a,N=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0,q=N.length;J<q;J++){let Z=N[J];if(S(Z,y)){let fe=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(Z).__webglTexture;t.bindTexture(fe,oe),w(fe),t.unbindTexture()}}}function ye(M){if(a&&M.samples>0&&ge(M)===!1){let y=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],N=M.width,J=M.height,q=n.COLOR_BUFFER_BIT,Z=[],fe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(M),le=M.isWebGLMultipleRenderTargets===!0;if(le)for(let Ee=0;Ee<y.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){Z.push(n.COLOR_ATTACHMENT0+Ee),M.depthBuffer&&Z.push(fe);let Ve=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Ve===!1&&(M.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),le&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Ee]),Ve===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[fe])),le){let X=i.get(y[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,X,0)}n.blitFramebuffer(0,0,N,J,0,0,N,J,q,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Ee=0;Ee<y.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Ee]);let Ve=i.get(y[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ae(M){return Math.min(r.maxSamples,M.samples)}function ge(M){let y=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function gt(M){let y=o.render.frame;u.get(M)!==y&&(u.set(M,y),M.update())}function Ue(M,y){let N=M.colorSpace,J=M.format,q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===ef||N!==pi&&N!==bn&&(ct.getTransfer(N)===pt?a===!1?e.has("EXT_sRGB")===!0&&J===Un?(M.format=ef,M.minFilter=Zt,M.generateMipmaps=!1):y=hl.sRGBToLinear(y):(J!==Un||q!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}this.allocateTextureUnit=D,this.resetTextureUnits=K,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=Le,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ge}function lP(n,e,t){let i=t.isWebGL2;function r(s,o=bn){let a,c=ct.getTransfer(o);if(s===Hi)return n.UNSIGNED_BYTE;if(s===v_)return n.UNSIGNED_SHORT_4_4_4_4;if(s===y_)return n.UNSIGNED_SHORT_5_5_5_1;if(s===eA)return n.BYTE;if(s===tA)return n.SHORT;if(s===Nf)return n.UNSIGNED_SHORT;if(s===g_)return n.INT;if(s===Bi)return n.UNSIGNED_INT;if(s===di)return n.FLOAT;if(s===Go)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===nA)return n.ALPHA;if(s===Un)return n.RGBA;if(s===iA)return n.LUMINANCE;if(s===rA)return n.LUMINANCE_ALPHA;if(s===Er)return n.DEPTH_COMPONENT;if(s===Ps)return n.DEPTH_STENCIL;if(s===ef)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===sA)return n.RED;if(s===__)return n.RED_INTEGER;if(s===oA)return n.RG;if(s===x_)return n.RG_INTEGER;if(s===M_)return n.RGBA_INTEGER;if(s===yh||s===_h||s===xh||s===Mh)if(c===pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===yh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_h)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===yh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_h)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zy||s===Jy||s===Ky||s===Qy)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Zy)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jy)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ky)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qy)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===w_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===e0||s===t0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===e0)return c===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===t0)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===n0||s===i0||s===r0||s===s0||s===o0||s===a0||s===c0||s===l0||s===u0||s===d0||s===h0||s===f0||s===p0||s===m0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===n0)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===i0)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===r0)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===s0)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===o0)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===a0)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===c0)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===l0)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===u0)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===d0)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===h0)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===f0)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===p0)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===m0)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wh||s===g0||s===v0)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===wh)return c===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===g0)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===v0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===aA||s===y0||s===_0||s===x0)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===wh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===y0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===x0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var yf=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ss=class extends Us{constructor(){super(),this.isGroup=!0,this.type="Group"}},uP={type:"move"},Ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,i),f=this._getHandJoint(l,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uP)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},dP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_f=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new $i,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){let i=t.cameras[0].viewport,r=new qn({extensions:{fragDepth:!0},vertexShader:dP,fragmentShader:hP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new un(new Ml(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},xf=class extends Wi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,g=null,v=new _f,p=t.getContextAttributes(),f=null,S=null,w=[],b=[],I=new nt,A=null,C=new qt;C.layers.enable(1),C.viewport=new kt;let G=new qt;G.layers.enable(2),G.viewport=new kt;let ie=[C,G],_=new yf;_.layers.enable(1),_.layers.enable(2);let T=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Y=w[B];return Y===void 0&&(Y=new Ho,w[B]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(B){let Y=w[B];return Y===void 0&&(Y=new Ho,w[B]=Y),Y.getGripSpace()},this.getHand=function(B){let Y=w[B];return Y===void 0&&(Y=new Ho,w[B]=Y),Y.getHandSpace()};function K(B){let Y=b.indexOf(B.inputSource);if(Y===-1)return;let ce=w[Y];ce!==void 0&&(ce.update(B.inputSource,B.frame,l||o),ce.dispatchEvent({type:B.type,data:B.inputSource}))}function D(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",V);for(let B=0;B<w.length;B++){let Y=b[B];Y!==null&&(b[B]=null,w[B].disconnect(Y))}T=null,H=null,v.reset(),e.setRenderTarget(f),m=null,h=null,d=null,r=null,S=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(B){return Ko(this,null,function*(){if(r=B,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",D),r.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),A=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new mi(m.framebufferWidth,m.framebufferHeight,{format:Un,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,ce=null,xe=null;p.depth&&(xe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=p.stencil?Ps:Er,ce=p.stencil?wr:Bi);let Me={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new mi(h.textureWidth,h.textureHeight,{format:Un,type:Hi,depthTexture:new El(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let he=e.properties.get(S);he.__ignoreDepthValues=h.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function V(B){for(let Y=0;Y<B.removed.length;Y++){let ce=B.removed[Y],xe=b.indexOf(ce);xe>=0&&(b[xe]=null,w[xe].disconnect(ce))}for(let Y=0;Y<B.added.length;Y++){let ce=B.added[Y],xe=b.indexOf(ce);if(xe===-1){for(let he=0;he<w.length;he++)if(he>=b.length){b.push(ce),xe=he;break}else if(b[he]===null){b[he]=ce,xe=he;break}if(xe===-1)break}let Me=w[xe];Me&&Me.connect(ce)}}let k=new F,$=new F;function z(B,Y,ce){k.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);let xe=k.distanceTo($),Me=Y.projectionMatrix.elements,he=ce.projectionMatrix.elements,Qe=Me[14]/(Me[10]-1),Le=Me[14]/(Me[10]+1),P=(Me[9]+1)/Me[5],Pt=(Me[9]-1)/Me[5],ye=(Me[8]-1)/Me[0],Ae=(he[8]+1)/he[0],ge=Qe*ye,gt=Qe*Ae,Ue=xe/(-ye+Ae),M=Ue*-ye;Y.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(M),B.translateZ(Ue),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let y=Qe+Ue,N=Le+Ue,J=ge-M,q=gt+(xe-M),Z=P*Le/N*y,fe=Pt*Le/N*y;B.projectionMatrix.makePerspective(J,q,Z,fe,y,N),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function W(B,Y){Y===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Y.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;v.texture!==null&&(B.near=v.depthNear,B.far=v.depthFar),_.near=G.near=C.near=B.near,_.far=G.far=C.far=B.far,(T!==_.near||H!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,H=_.far,C.near=T,C.far=H,G.near=T,G.far=H,C.updateProjectionMatrix(),G.updateProjectionMatrix(),B.updateProjectionMatrix());let Y=B.parent,ce=_.cameras;W(_,Y);for(let xe=0;xe<ce.length;xe++)W(ce[xe],Y);ce.length===2?z(_,C,G):_.projectionMatrix.copy(C.projectionMatrix),j(B,_,Y)};function j(B,Y,ce){ce===null?B.matrix.copy(Y.matrixWorld):(B.matrix.copy(ce.matrixWorld),B.matrix.invert(),B.matrix.multiply(Y.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=tf*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(B){c=B,h!==null&&(h.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return v.texture!==null};let Q=null;function re(B,Y){if(u=Y.getViewerPose(l||o),g=Y,u!==null){let ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let xe=!1;ce.length!==_.cameras.length&&(_.cameras.length=0,xe=!0);for(let he=0;he<ce.length;he++){let Qe=ce[he],Le=null;if(m!==null)Le=m.getViewport(Qe);else{let Pt=d.getViewSubImage(h,Qe);Le=Pt.viewport,he===0&&(e.setRenderTargetTextures(S,Pt.colorTexture,h.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(S))}let P=ie[he];P===void 0&&(P=new qt,P.layers.enable(he),P.viewport=new kt,ie[he]=P),P.matrix.fromArray(Qe.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Qe.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Le.x,Le.y,Le.width,Le.height),he===0&&(_.matrix.copy(P.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),xe===!0&&_.cameras.push(P)}let Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")){let he=d.getDepthInformation(ce[0]);he&&he.isValid&&he.texture&&v.init(e,he,r.renderState)}}for(let ce=0;ce<w.length;ce++){let xe=b[ce],Me=w[ce];xe!==null&&Me!==void 0&&Me.update(xe,Y,l||o)}v.render(e,_),Q&&Q(B,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}let Te=new A_;Te.setAnimationLoop(re),this.setAnimationLoop=function(B){Q=B},this.dispose=function(){}}};function fP(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,C_(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,S,w,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,b)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,S,w):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Kt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Kt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S=e.get(f).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let w=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*w,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,S,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=w*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pP(n,e,t,i){let r={},s={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,w){let b=w.program;i.uniformBlockBinding(S,b)}function l(S,w){let b=r[S.id];b===void 0&&(g(S),b=u(S),r[S.id]=b,S.addEventListener("dispose",p));let I=w.program;i.updateUBOMapping(S,I);let A=e.render.frame;s[S.id]!==A&&(h(S),s[S.id]=A)}function u(S){let w=d();S.__bindingPointIndex=w;let b=n.createBuffer(),I=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,I,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let w=r[S.id],b=S.uniforms,I=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,C=b.length;A<C;A++){let G=Array.isArray(b[A])?b[A]:[b[A]];for(let ie=0,_=G.length;ie<_;ie++){let T=G[ie];if(m(T,A,ie,I)===!0){let H=T.__offset,K=Array.isArray(T.value)?T.value:[T.value],D=0;for(let V=0;V<K.length;V++){let k=K[V],$=v(k);typeof k=="number"||typeof k=="boolean"?(T.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,H+D,T.__data)):k.isMatrix3?(T.__data[0]=k.elements[0],T.__data[1]=k.elements[1],T.__data[2]=k.elements[2],T.__data[3]=0,T.__data[4]=k.elements[3],T.__data[5]=k.elements[4],T.__data[6]=k.elements[5],T.__data[7]=0,T.__data[8]=k.elements[6],T.__data[9]=k.elements[7],T.__data[10]=k.elements[8],T.__data[11]=0):(k.toArray(T.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,w,b,I){let A=S.value,C=w+"_"+b;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{let G=I[C];if(typeof A=="number"||typeof A=="boolean"){if(G!==A)return I[C]=A,!0}else if(G.equals(A)===!1)return G.copy(A),!0}return!1}function g(S){let w=S.uniforms,b=0,I=16;for(let C=0,G=w.length;C<G;C++){let ie=Array.isArray(w[C])?w[C]:[w[C]];for(let _=0,T=ie.length;_<T;_++){let H=ie[_],K=Array.isArray(H.value)?H.value:[H.value];for(let D=0,V=K.length;D<V;D++){let k=K[D],$=v(k),z=b%I;z!==0&&I-z<$.boundary&&(b+=I-z),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=$.storage}}}let A=b%I;return A>0&&(b+=I-A),S.__size=b,S.__cache={},this}function v(S){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function p(S){let w=S.target;w.removeEventListener("dispose",p);let b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function f(){for(let S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var $o=class{constructor(e={}){let{canvas:t=xA(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let m=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;let w=this,b=!1,I=0,A=0,C=null,G=-1,ie=null,_=new kt,T=new kt,H=null,K=new tt(0),D=0,V=t.width,k=t.height,$=1,z=null,W=null,j=new kt(0,0,V,k),Q=new kt(0,0,V,k),re=!1,Te=new xl,B=!1,Y=!1,ce=null,xe=new Ht,Me=new nt,he=new F,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return C===null?$:1}let P=i;function Pt(x,R){for(let O=0;O<x.length;O++){let U=x[O],L=t.getContext(U,R);if(L!==null)return L}return null}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pf}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",E,!1),t.addEventListener("webglcontextcreationerror",ee,!1),P===null){let R=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&R.shift(),P=Pt(R,x),P===null)throw Pt(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ye,Ae,ge,gt,Ue,M,y,N,J,q,Z,fe,oe,le,Ee,Ve,X,at,$e,De,ve,ue,ke,it;function ft(){ye=new RR(P),Ae=new SR(P,ye,e),ye.init(Ae),ue=new lP(P,ye,Ae),ge=new aP(P,ye,Ae),gt=new LR(P),Ue=new Y1,M=new cP(P,ye,ge,Ue,Ae,ue,gt),y=new CR(w),N=new IR(w),J=new HA(P,Ae),ke=new ER(P,ye,J,Ae),q=new PR(P,J,gt,ke),Z=new kR(P,q,J,gt),$e=new UR(P,Ae,M),Ve=new TR(Ue),fe=new X1(w,y,N,ye,Ae,ke,Ve),oe=new fP(w,Ue),le=new J1,Ee=new iP(ye,Ae),at=new wR(w,y,N,ge,Z,h,c),X=new oP(w,Z,Ae),it=new pP(P,gt,Ae,ge),De=new bR(P,ye,gt,Ae),ve=new NR(P,ye,gt,Ae),gt.programs=fe.programs,w.capabilities=Ae,w.extensions=ye,w.properties=Ue,w.renderLists=le,w.shadowMap=X,w.state=ge,w.info=gt}ft();let qe=new xf(w,P);this.xr=qe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let x=ye.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ye.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(x){x!==void 0&&($=x,this.setSize(V,k,!1))},this.getSize=function(x){return x.set(V,k)},this.setSize=function(x,R,O=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=x,k=R,t.width=Math.floor(x*$),t.height=Math.floor(R*$),O===!0&&(t.style.width=x+"px",t.style.height=R+"px"),this.setViewport(0,0,x,R)},this.getDrawingBufferSize=function(x){return x.set(V*$,k*$).floor()},this.setDrawingBufferSize=function(x,R,O){V=x,k=R,$=O,t.width=Math.floor(x*O),t.height=Math.floor(R*O),this.setViewport(0,0,x,R)},this.getCurrentViewport=function(x){return x.copy(_)},this.getViewport=function(x){return x.copy(j)},this.setViewport=function(x,R,O,U){x.isVector4?j.set(x.x,x.y,x.z,x.w):j.set(x,R,O,U),ge.viewport(_.copy(j).multiplyScalar($).floor())},this.getScissor=function(x){return x.copy(Q)},this.setScissor=function(x,R,O,U){x.isVector4?Q.set(x.x,x.y,x.z,x.w):Q.set(x,R,O,U),ge.scissor(T.copy(Q).multiplyScalar($).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(x){ge.setScissorTest(re=x)},this.setOpaqueSort=function(x){z=x},this.setTransparentSort=function(x){W=x},this.getClearColor=function(x){return x.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(x=!0,R=!0,O=!0){let U=0;if(x){let L=!1;if(C!==null){let ae=C.texture.format;L=ae===M_||ae===x_||ae===__}if(L){let ae=C.texture.type,me=ae===Hi||ae===Bi||ae===Nf||ae===wr||ae===v_||ae===y_,we=at.getClearColor(),Se=at.getClearAlpha(),ze=we.r,Pe=we.g,Oe=we.b;me?(m[0]=ze,m[1]=Pe,m[2]=Oe,m[3]=Se,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=ze,g[1]=Pe,g[2]=Oe,g[3]=Se,P.clearBufferiv(P.COLOR,0,g))}else U|=P.COLOR_BUFFER_BIT}R&&(U|=P.DEPTH_BUFFER_BIT),O&&(U|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",E,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),le.dispose(),Ee.dispose(),Ue.dispose(),y.dispose(),N.dispose(),Z.dispose(),ke.dispose(),it.dispose(),fe.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",dn),qe.removeEventListener("sessionend",ht),ce&&(ce.dispose(),ce=null),Gt.stop()};function lt(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function E(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let x=gt.autoReset,R=X.enabled,O=X.autoUpdate,U=X.needsUpdate,L=X.type;ft(),gt.autoReset=x,X.enabled=R,X.autoUpdate=O,X.needsUpdate=U,X.type=L}function ee(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function te(x){let R=x.target;R.removeEventListener("dispose",te),de(R)}function de(x){_e(x),Ue.remove(x)}function _e(x){let R=Ue.get(x).programs;R!==void 0&&(R.forEach(function(O){fe.releaseProgram(O)}),x.isShaderMaterial&&fe.releaseShaderCache(x))}this.renderBufferDirect=function(x,R,O,U,L,ae){R===null&&(R=Qe);let me=L.isMesh&&L.matrixWorld.determinant()<0,we=U_(x,R,O,U,L);ge.setMaterial(U,me);let Se=O.index,ze=1;if(U.wireframe===!0){if(Se=q.getWireframeAttribute(O),Se===void 0)return;ze=2}let Pe=O.drawRange,Oe=O.attributes.position,_t=Pe.start*ze,Qt=(Pe.start+Pe.count)*ze;ae!==null&&(_t=Math.max(_t,ae.start*ze),Qt=Math.min(Qt,(ae.start+ae.count)*ze)),Se!==null?(_t=Math.max(_t,0),Qt=Math.min(Qt,Se.count)):Oe!=null&&(_t=Math.max(_t,0),Qt=Math.min(Qt,Oe.count));let Dt=Qt-_t;if(Dt<0||Dt===1/0)return;ke.setup(L,U,we,O,Se);let Xn,vt=De;if(Se!==null&&(Xn=J.get(Se),vt=ve,vt.setIndex(Xn)),L.isMesh)U.wireframe===!0?(ge.setLineWidth(U.wireframeLinewidth*Le()),vt.setMode(P.LINES)):vt.setMode(P.TRIANGLES);else if(L.isLine){let He=U.linewidth;He===void 0&&(He=1),ge.setLineWidth(He*Le()),L.isLineSegments?vt.setMode(P.LINES):L.isLineLoop?vt.setMode(P.LINE_LOOP):vt.setMode(P.LINE_STRIP)}else L.isPoints?vt.setMode(P.POINTS):L.isSprite&&vt.setMode(P.TRIANGLES);if(L.isBatchedMesh)vt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else if(L.isInstancedMesh)vt.renderInstances(_t,Dt,L.count);else if(O.isInstancedBufferGeometry){let He=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Dl=Math.min(O.instanceCount,He);vt.renderInstances(_t,Dt,Dl)}else vt.render(_t,Dt)};function rt(x,R,O){x.transparent===!0&&x.side===ui&&x.forceSinglePass===!1?(x.side=Kt,x.needsUpdate=!0,Zo(x,R,O),x.side=Gi,x.needsUpdate=!0,Zo(x,R,O),x.side=ui):Zo(x,R,O)}this.compile=function(x,R,O=null){O===null&&(O=x),p=Ee.get(O),p.init(),S.push(p),O.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),x!==O&&x.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights(w._useLegacyLights);let U=new Set;return x.traverse(function(L){let ae=L.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){let we=ae[me];rt(we,O,L),U.add(we)}else rt(ae,O,L),U.add(ae)}),S.pop(),p=null,U},this.compileAsync=function(x,R,O=null){let U=this.compile(x,R,O);return new Promise(L=>{function ae(){if(U.forEach(function(me){Ue.get(me).currentProgram.isReady()&&U.delete(me)}),U.size===0){L(x);return}setTimeout(ae,10)}ye.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let dt=null;function Nt(x){dt&&dt(x)}function dn(){Gt.stop()}function ht(){Gt.start()}let Gt=new A_;Gt.setAnimationLoop(Nt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(x){dt=x,qe.setAnimationLoop(x),x===null?Gt.stop():Gt.start()},qe.addEventListener("sessionstart",dn),qe.addEventListener("sessionend",ht),this.render=function(x,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(R),R=qe.getCamera()),x.isScene===!0&&x.onBeforeRender(w,x,R,C),p=Ee.get(x,S.length),p.init(),S.push(p),xe.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Te.setFromProjectionMatrix(xe),Y=this.localClippingEnabled,B=Ve.init(this.clippingPlanes,Y),v=le.get(x,f.length),v.init(),f.push(v),Bn(x,R,0,w.sortObjects),v.finish(),w.sortObjects===!0&&v.sort(z,W),this.info.render.frame++,B===!0&&Ve.beginShadows();let O=p.state.shadowsArray;if(X.render(O,x,R),B===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1)&&at.render(v,x),p.setupLights(w._useLegacyLights),R.isArrayCamera){let U=R.cameras;for(let L=0,ae=U.length;L<ae;L++){let me=U[L];kf(v,x,me,me.viewport)}}else kf(v,x,R);C!==null&&(M.updateMultisampleRenderTarget(C),M.updateRenderTargetMipmap(C)),x.isScene===!0&&x.onAfterRender(w,x,R),ke.resetDefaultState(),G=-1,ie=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Bn(x,R,O,U){if(x.visible===!1)return;if(x.layers.test(R.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(R);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Te.intersectsSprite(x)){U&&he.setFromMatrixPosition(x.matrixWorld).applyMatrix4(xe);let me=Z.update(x),we=x.material;we.visible&&v.push(x,me,we,O,he.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Te.intersectsObject(x))){let me=Z.update(x),we=x.material;if(U&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),he.copy(x.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),he.copy(me.boundingSphere.center)),he.applyMatrix4(x.matrixWorld).applyMatrix4(xe)),Array.isArray(we)){let Se=me.groups;for(let ze=0,Pe=Se.length;ze<Pe;ze++){let Oe=Se[ze],_t=we[Oe.materialIndex];_t&&_t.visible&&v.push(x,me,_t,O,he.z,Oe)}}else we.visible&&v.push(x,me,we,O,he.z,null)}}let ae=x.children;for(let me=0,we=ae.length;me<we;me++)Bn(ae[me],R,O,U)}function kf(x,R,O,U){let L=x.opaque,ae=x.transmissive,me=x.transparent;p.setupLightsView(O),B===!0&&Ve.setGlobalState(w.clippingPlanes,O),ae.length>0&&F_(L,ae,R,O),U&&ge.viewport(_.copy(U)),L.length>0&&Yo(L,R,O),ae.length>0&&Yo(ae,R,O),me.length>0&&Yo(me,R,O),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function F_(x,R,O,U){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;let ae=Ae.isWebGL2;ce===null&&(ce=new mi(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Go:Hi,minFilter:Mr,samples:ae?4:0})),w.getDrawingBufferSize(Me),ae?ce.setSize(Me.x,Me.y):ce.setSize(nf(Me.x),nf(Me.y));let me=w.getRenderTarget();w.setRenderTarget(ce),w.getClearColor(K),D=w.getClearAlpha(),D<1&&w.setClearColor(16777215,.5),w.clear();let we=w.toneMapping;w.toneMapping=zi,Yo(x,O,U),M.updateMultisampleRenderTarget(ce),M.updateRenderTargetMipmap(ce);let Se=!1;for(let ze=0,Pe=R.length;ze<Pe;ze++){let Oe=R[ze],_t=Oe.object,Qt=Oe.geometry,Dt=Oe.material,Xn=Oe.group;if(Dt.side===ui&&_t.layers.test(U.layers)){let vt=Dt.side;Dt.side=Kt,Dt.needsUpdate=!0,Bf(_t,O,U,Qt,Dt,Xn),Dt.side=vt,Dt.needsUpdate=!0,Se=!0}}Se===!0&&(M.updateMultisampleRenderTarget(ce),M.updateRenderTargetMipmap(ce)),w.setRenderTarget(me),w.setClearColor(K,D),w.toneMapping=we}function Yo(x,R,O){let U=R.isScene===!0?R.overrideMaterial:null;for(let L=0,ae=x.length;L<ae;L++){let me=x[L],we=me.object,Se=me.geometry,ze=U===null?me.material:U,Pe=me.group;we.layers.test(O.layers)&&Bf(we,R,O,Se,ze,Pe)}}function Bf(x,R,O,U,L,ae){x.onBeforeRender(w,R,O,U,L,ae),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),L.onBeforeRender(w,R,O,U,x,ae),L.transparent===!0&&L.side===ui&&L.forceSinglePass===!1?(L.side=Kt,L.needsUpdate=!0,w.renderBufferDirect(O,R,U,L,x,ae),L.side=Gi,L.needsUpdate=!0,w.renderBufferDirect(O,R,U,L,x,ae),L.side=ui):w.renderBufferDirect(O,R,U,L,x,ae),x.onAfterRender(w,R,O,U,L,ae)}function Zo(x,R,O){R.isScene!==!0&&(R=Qe);let U=Ue.get(x),L=p.state.lights,ae=p.state.shadowsArray,me=L.state.version,we=fe.getParameters(x,L.state,ae,R,O),Se=fe.getProgramCacheKey(we),ze=U.programs;U.environment=x.isMeshStandardMaterial?R.environment:null,U.fog=R.fog,U.envMap=(x.isMeshStandardMaterial?N:y).get(x.envMap||U.environment),ze===void 0&&(x.addEventListener("dispose",te),ze=new Map,U.programs=ze);let Pe=ze.get(Se);if(Pe!==void 0){if(U.currentProgram===Pe&&U.lightsStateVersion===me)return zf(x,we),Pe}else we.uniforms=fe.getUniforms(x),x.onBuild(O,we,w),x.onBeforeCompile(we,w),Pe=fe.acquireProgram(we,Se),ze.set(Se,Pe),U.uniforms=we.uniforms;let Oe=U.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Oe.clippingPlanes=Ve.uniform),zf(x,we),U.needsLights=B_(x),U.lightsStateVersion=me,U.needsLights&&(Oe.ambientLightColor.value=L.state.ambient,Oe.lightProbe.value=L.state.probe,Oe.directionalLights.value=L.state.directional,Oe.directionalLightShadows.value=L.state.directionalShadow,Oe.spotLights.value=L.state.spot,Oe.spotLightShadows.value=L.state.spotShadow,Oe.rectAreaLights.value=L.state.rectArea,Oe.ltc_1.value=L.state.rectAreaLTC1,Oe.ltc_2.value=L.state.rectAreaLTC2,Oe.pointLights.value=L.state.point,Oe.pointLightShadows.value=L.state.pointShadow,Oe.hemisphereLights.value=L.state.hemi,Oe.directionalShadowMap.value=L.state.directionalShadowMap,Oe.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Oe.spotShadowMap.value=L.state.spotShadowMap,Oe.spotLightMatrix.value=L.state.spotLightMatrix,Oe.spotLightMap.value=L.state.spotLightMap,Oe.pointShadowMap.value=L.state.pointShadowMap,Oe.pointShadowMatrix.value=L.state.pointShadowMatrix),U.currentProgram=Pe,U.uniformsList=null,Pe}function Vf(x){if(x.uniformsList===null){let R=x.currentProgram.getUniforms();x.uniformsList=Ds.seqWithValue(R.seq,x.uniforms)}return x.uniformsList}function zf(x,R){let O=Ue.get(x);O.outputColorSpace=R.outputColorSpace,O.batching=R.batching,O.instancing=R.instancing,O.instancingColor=R.instancingColor,O.skinning=R.skinning,O.morphTargets=R.morphTargets,O.morphNormals=R.morphNormals,O.morphColors=R.morphColors,O.morphTargetsCount=R.morphTargetsCount,O.numClippingPlanes=R.numClippingPlanes,O.numIntersection=R.numClipIntersection,O.vertexAlphas=R.vertexAlphas,O.vertexTangents=R.vertexTangents,O.toneMapping=R.toneMapping}function U_(x,R,O,U,L){R.isScene!==!0&&(R=Qe),M.resetTextureUnits();let ae=R.fog,me=U.isMeshStandardMaterial?R.environment:null,we=C===null?w.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:pi,Se=(U.isMeshStandardMaterial?N:y).get(U.envMap||me),ze=U.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pe=!!O.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Oe=!!O.morphAttributes.position,_t=!!O.morphAttributes.normal,Qt=!!O.morphAttributes.color,Dt=zi;U.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Dt=w.toneMapping);let Xn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,vt=Xn!==void 0?Xn.length:0,He=Ue.get(U),Dl=p.state.lights;if(B===!0&&(Y===!0||x!==ie)){let hn=x===ie&&U.id===G;Ve.setState(U,x,hn)}let yt=!1;U.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Dl.state.version||He.outputColorSpace!==we||L.isBatchedMesh&&He.batching===!1||!L.isBatchedMesh&&He.batching===!0||L.isInstancedMesh&&He.instancing===!1||!L.isInstancedMesh&&He.instancing===!0||L.isSkinnedMesh&&He.skinning===!1||!L.isSkinnedMesh&&He.skinning===!0||L.isInstancedMesh&&He.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&He.instancingColor===!1&&L.instanceColor!==null||He.envMap!==Se||U.fog===!0&&He.fog!==ae||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ve.numPlanes||He.numIntersection!==Ve.numIntersection)||He.vertexAlphas!==ze||He.vertexTangents!==Pe||He.morphTargets!==Oe||He.morphNormals!==_t||He.morphColors!==Qt||He.toneMapping!==Dt||Ae.isWebGL2===!0&&He.morphTargetsCount!==vt)&&(yt=!0):(yt=!0,He.__version=U.version);let qi=He.currentProgram;yt===!0&&(qi=Zo(U,R,L));let Hf=!1,Bs=!1,Il=!1,Bt=qi.getUniforms(),Xi=He.uniforms;if(ge.useProgram(qi.program)&&(Hf=!0,Bs=!0,Il=!0),U.id!==G&&(G=U.id,Bs=!0),Hf||ie!==x){Bt.setValue(P,"projectionMatrix",x.projectionMatrix),Bt.setValue(P,"viewMatrix",x.matrixWorldInverse);let hn=Bt.map.cameraPosition;hn!==void 0&&hn.setValue(P,he.setFromMatrixPosition(x.matrixWorld)),Ae.logarithmicDepthBuffer&&Bt.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Bt.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),ie!==x&&(ie=x,Bs=!0,Il=!0)}if(L.isSkinnedMesh){Bt.setOptional(P,L,"bindMatrix"),Bt.setOptional(P,L,"bindMatrixInverse");let hn=L.skeleton;hn&&(Ae.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Bt.setValue(P,"boneTexture",hn.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}L.isBatchedMesh&&(Bt.setOptional(P,L,"batchingTexture"),Bt.setValue(P,"batchingTexture",L._matricesTexture,M));let Rl=O.morphAttributes;if((Rl.position!==void 0||Rl.normal!==void 0||Rl.color!==void 0&&Ae.isWebGL2===!0)&&$e.update(L,O,qi),(Bs||He.receiveShadow!==L.receiveShadow)&&(He.receiveShadow=L.receiveShadow,Bt.setValue(P,"receiveShadow",L.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Xi.envMap.value=Se,Xi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),Bs&&(Bt.setValue(P,"toneMappingExposure",w.toneMappingExposure),He.needsLights&&k_(Xi,Il),ae&&U.fog===!0&&oe.refreshFogUniforms(Xi,ae),oe.refreshMaterialUniforms(Xi,U,$,k,ce),Ds.upload(P,Vf(He),Xi,M)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Ds.upload(P,Vf(He),Xi,M),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Bt.setValue(P,"center",L.center),Bt.setValue(P,"modelViewMatrix",L.modelViewMatrix),Bt.setValue(P,"normalMatrix",L.normalMatrix),Bt.setValue(P,"modelMatrix",L.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let hn=U.uniformsGroups;for(let Pl=0,V_=hn.length;Pl<V_;Pl++)if(Ae.isWebGL2){let Gf=hn[Pl];it.update(Gf,qi),it.bind(Gf,qi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qi}function k_(x,R){x.ambientLightColor.needsUpdate=R,x.lightProbe.needsUpdate=R,x.directionalLights.needsUpdate=R,x.directionalLightShadows.needsUpdate=R,x.pointLights.needsUpdate=R,x.pointLightShadows.needsUpdate=R,x.spotLights.needsUpdate=R,x.spotLightShadows.needsUpdate=R,x.rectAreaLights.needsUpdate=R,x.hemisphereLights.needsUpdate=R}function B_(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(x,R,O){Ue.get(x.texture).__webglTexture=R,Ue.get(x.depthTexture).__webglTexture=O;let U=Ue.get(x);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=O===void 0,U.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,R){let O=Ue.get(x);O.__webglFramebuffer=R,O.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(x,R=0,O=0){C=x,I=R,A=O;let U=!0,L=null,ae=!1,me=!1;if(x){let Se=Ue.get(x);Se.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(P.FRAMEBUFFER,null),U=!1):Se.__webglFramebuffer===void 0?M.setupRenderTarget(x):Se.__hasExternalTextures&&M.rebindTextures(x,Ue.get(x.texture).__webglTexture,Ue.get(x.depthTexture).__webglTexture);let ze=x.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(me=!0);let Pe=Ue.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pe[R])?L=Pe[R][O]:L=Pe[R],ae=!0):Ae.isWebGL2&&x.samples>0&&M.useMultisampledRTT(x)===!1?L=Ue.get(x).__webglMultisampledFramebuffer:Array.isArray(Pe)?L=Pe[O]:L=Pe,_.copy(x.viewport),T.copy(x.scissor),H=x.scissorTest}else _.copy(j).multiplyScalar($).floor(),T.copy(Q).multiplyScalar($).floor(),H=re;if(ge.bindFramebuffer(P.FRAMEBUFFER,L)&&Ae.drawBuffers&&U&&ge.drawBuffers(x,L),ge.viewport(_),ge.scissor(T),ge.setScissorTest(H),ae){let Se=Ue.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+R,Se.__webglTexture,O)}else if(me){let Se=Ue.get(x.texture),ze=R||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.__webglTexture,O||0,ze)}G=-1},this.readRenderTargetPixels=function(x,R,O,U,L,ae,me){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ue.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){ge.bindFramebuffer(P.FRAMEBUFFER,we);try{let Se=x.texture,ze=Se.format,Pe=Se.type;if(ze!==Un&&ue.convert(ze)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Oe=Pe===Go&&(ye.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Pe!==Hi&&ue.convert(Pe)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===di&&(Ae.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=x.width-U&&O>=0&&O<=x.height-L&&P.readPixels(R,O,U,L,ue.convert(ze),ue.convert(Pe),ae)}finally{let Se=C!==null?Ue.get(C).__webglFramebuffer:null;ge.bindFramebuffer(P.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(x,R,O=0){let U=Math.pow(2,-O),L=Math.floor(R.image.width*U),ae=Math.floor(R.image.height*U);M.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,x.x,x.y,L,ae),ge.unbindTexture()},this.copyTextureToTexture=function(x,R,O,U=0){let L=R.image.width,ae=R.image.height,me=ue.convert(O.format),we=ue.convert(O.type);M.setTexture2D(O,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment),R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,x.x,x.y,L,ae,me,we,R.image.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,x.x,x.y,R.mipmaps[0].width,R.mipmaps[0].height,me,R.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,U,x.x,x.y,me,we,R.image),U===0&&O.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(x,R,O,U,L=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ae=x.max.x-x.min.x+1,me=x.max.y-x.min.y+1,we=x.max.z-x.min.z+1,Se=ue.convert(U.format),ze=ue.convert(U.type),Pe;if(U.isData3DTexture)M.setTexture3D(U,0),Pe=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)M.setTexture2DArray(U,0),Pe=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);let Oe=P.getParameter(P.UNPACK_ROW_LENGTH),_t=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Qt=P.getParameter(P.UNPACK_SKIP_PIXELS),Dt=P.getParameter(P.UNPACK_SKIP_ROWS),Xn=P.getParameter(P.UNPACK_SKIP_IMAGES),vt=O.isCompressedTexture?O.mipmaps[L]:O.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,vt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,vt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,x.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,x.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,x.min.z),O.isDataTexture||O.isData3DTexture?P.texSubImage3D(Pe,L,R.x,R.y,R.z,ae,me,we,Se,ze,vt.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Pe,L,R.x,R.y,R.z,ae,me,we,Se,vt.data)):P.texSubImage3D(Pe,L,R.x,R.y,R.z,ae,me,we,Se,ze,vt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Oe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Qt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Dt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xn),L===0&&U.generateMipmaps&&P.generateMipmap(Pe),ge.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?M.setTextureCube(x,0):x.isData3DTexture?M.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?M.setTexture2DArray(x,0):M.setTexture2D(x,0),ge.unbindTexture()},this.resetState=function(){I=0,A=0,C=null,ge.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Lf?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===Cl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?br:E_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===br?Ut:pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Mf=class extends $o{};Mf.prototype.isWebGL1Renderer=!0;var bl=class extends Us{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};function rl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function mP(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Fs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wf=class extends Fs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:M0,endingEnd:M0}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case w0:s=e,a=2*t-i;break;case E0:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case w0:o=e,c=2*i-t;break;case E0:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),v=g*g,p=v*g,f=-h*p+2*h*v-h*g,S=(1+h)*p+(-1.5-2*h)*v+(-.5+h)*g+1,w=(-1-m)*p+(1.5+m)*v+.5*g,b=m*p-m*v;for(let I=0;I!==a;++I)s[I]=f*o[u+I]+S*o[l+I]+w*o[c+I]+b*o[d+I];return s}},Ef=class extends Fs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},bf=class extends Fs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rl(t,this.TimeBufferType),this.values=rl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:rl(e.times,Array),values:rl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new bf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ef(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ol:t=this.InterpolantFactoryMethodDiscrete;break;case al:t=this.InterpolantFactoryMethodLinear;break;case Eh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ol;case this.InterpolantFactoryMethodLinear:return al;case this.InterpolantFactoryMethodSmooth:return Eh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&mP(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Eh,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,m=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let m=0;m!==i;++m)t[h+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=al;var Ar=class extends kn{};Ar.prototype.ValueTypeName="bool";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=ol;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Sf=class extends kn{};Sf.prototype.ValueTypeName="color";var Tf=class extends kn{};Tf.prototype.ValueTypeName="number";var Cf=class extends Fs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)ji.slerpFlat(s,0,o,l-a,o,l,c);return s}},qo=class extends kn{InterpolantFactoryMethodLinear(e){return new Cf(this.times,this.values,this.getValueSize(),e)}};qo.prototype.ValueTypeName="quaternion";qo.prototype.DefaultInterpolation=al;qo.prototype.InterpolantFactoryMethodSmooth=void 0;var Dr=class extends kn{};Dr.prototype.ValueTypeName="string";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=ol;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Af=class extends kn{};Af.prototype.ValueTypeName="vector";var f_={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Df=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},gP=new Df,L_=(()=>{class n{constructor(t){this.manager=t!==void 0?t:gP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})();var If=class extends L_{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=f_.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Wo("img");function c(){u(),f_.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var Sl=class extends L_{constructor(e){super(e)}load(e,t,i,r){let s=new $i,o=new If(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}};var Ff="\\[\\]\\.:\\/",vP=new RegExp("["+Ff+"]","g"),Uf="[^"+Ff+"]",yP="[^"+Ff.replace("\\.","")+"]",_P=/((?:WC+[\/:])*)/.source.replace("WC",Uf),xP=/(WCOD+)?/.source.replace("WCOD",yP),MP=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uf),wP=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uf),EP=new RegExp("^"+_P+xP+MP+wP+"$"),bP=["material","materials","bones","map"],Rf=class{constructor(e,t,i){let r=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},xt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vP,"")}static parseTrackName(t){let i=EP.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);bP.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Rf,n})();xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var s3=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pf);var O_=(()=>{let e=class e{constructor(i){this.ngZone=i}ngOnInit(){this.createThreeJsBox()}createThreeJsBox(){let i=document.getElementById("canvas-box");i.width=window.innerWidth*.8,i.height=window.innerHeight*.8;let r=1,s=1;if(!i)return;let o=new $o({canvas:i}),a=new bl,c=new qt(75,i.width/i.height,.1,1e3);c.position.z=5;let u=new Sl().load("https://cdn.jsdelivr.net/gh/yanivdg/tell-me@main/src/assets/tell-me.jpg"),d=new Ls({map:u}),h=new Cr,m=[];for(let v=0;v<7;v++){let p=new un(h,d);p.position.x=Math.random()*4-2,p.position.y=Math.random()*4-2,p.position.z=Math.random()*4-2,m.push(p),a.add(p)}let g=()=>{this.ngZone.runOutsideAngular(()=>{requestAnimationFrame(g)}),m.forEach(v=>{v.rotation.x+=.01,v.rotation.y+=.01,v.rotation.x+=.01,v.rotation.y+=.01,v.position.x+=r*.01,(v.position.x>=i.width/200||v.position.x<=-i.width/200)&&(r*=-1),v.position.y+=s*.01,(v.position.y>=i.height/200||v.position.y<=-i.height/200)&&(s*=-1)}),o.render(a,c)};g()}};e.\u0275fac=function(r){return new(r||e)(co(mt))},e.\u0275cmp=$a({type:e,selectors:[["app-root"]],standalone:!0,features:[uc],decls:1,vars:0,consts:[["id","canvas-box"]],template:function(r,s){r&1&&fo(0,"canvas",0)}});let n=e;return n})();ny(O_,zy).catch(n=>console.error(n));
