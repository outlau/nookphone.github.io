var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function d(){return l(" ")}function f(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}let y;function v(t){y=t}function w(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}const b=[],E=[],T=[],I=[],S=Promise.resolve();let C=!1;function A(t){T.push(t)}const D=new Set;let _=0;function k(){const t=y;do{for(;_<b.length;){const t=b[_];_++,v(t),N(t.$$)}for(v(null),b.length=0,_=0;E.length;)E.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];D.has(e)||(D.add(e),e())}T.length=0}while(b.length);for(;I.length;)I.pop()();C=!1,D.clear(),v(t)}function N(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const x=new Set;function L(t,e){-1===t.$$.dirty[0]&&(b.push(t),C||(C=!0,S.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(r,o,a,u,h,l,d,f=[-1]){const p=y;v(r);const g=r.$$={fragment:null,ctx:null,props:l,update:t,not_equal:h,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(p?p.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||p.$$.root};d&&d(g.root);let m=!1;if(g.ctx=a?a(r,o.props||{},((t,e,...n)=>{const s=n.length?n[0]:e;return g.ctx&&h(g.ctx[t],g.ctx[t]=s)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](s),m&&L(r,t)),e})):[],g.update(),m=!0,s(g.before_update),g.fragment=!!u&&u(g.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);g.fragment&&g.fragment.l(t),t.forEach(c)}else g.fragment&&g.fragment.c();o.intro&&((w=r.$$.fragment)&&w.i&&(x.delete(w),w.i(b))),function(t,n,r,o){const{fragment:a,on_mount:c,on_destroy:u,after_update:h}=t.$$;a&&a.m(n,r),o||A((()=>{const n=c.map(e).filter(i);u?u.push(...n):s(n),t.$$.on_mount=[]})),h.forEach(A)}(r,o.target,o.anchor,o.customElement),k()}var w,b;v(p)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const M=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},O={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const i=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,h=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(M(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(r>>10)),e[s++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==r||null==o||null==a)throw Error();const c=i<<2|r>>4;if(s.push(c),64!==o){const t=r<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},P=function(t){return function(t){const e=M(t);return O.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class F{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}function V(){return"object"==typeof indexedDB}function U(){return new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}class B extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,j.prototype.create)}}class j{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace($,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new B(s,o,n)}}const $=/\{\$([^}]+)}/g;function q(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(K(n)&&K(r)){if(!q(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function K(t){return null!==t&&"object"==typeof t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function G(t,e=1e3,n=2){const s=e*Math.pow(n,t),i=Math.round(.5*s*(Math.random()-.5)*2);return Math.min(144e5,s+i)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function H(t){return t&&t._delegate?t._delegate:t}class z{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const W="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Q{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new F;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))try{this.getOrInitializeService({instanceIdentifier:W})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===W?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:W:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Y{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Q(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var X;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(X||(X={}));const J={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Z=X.INFO,tt={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},et=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=tt[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class nt{constructor(t){this.name=t,this._logLevel=Z,this._logHandler=et,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in X))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?J[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...t),this._logHandler(this,X.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...t),this._logHandler(this,X.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,X.INFO,...t),this._logHandler(this,X.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,X.WARN,...t),this._logHandler(this,X.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...t),this._logHandler(this,X.ERROR,...t)}}let st,it;const rt=new WeakMap,ot=new WeakMap,at=new WeakMap,ct=new WeakMap,ut=new WeakMap;let ht={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return ot.get(t);if("objectStoreNames"===e)return t.objectStoreNames||at.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ft(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function lt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(it||(it=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(pt(this),e),ft(rt.get(this))}:function(...e){return ft(t.apply(pt(this),e))}:function(e,...n){const s=t.call(pt(this),e,...n);return at.set(s,e.sort?e.sort():[e]),ft(s)}}function dt(t){return"function"==typeof t?lt(t):(t instanceof IDBTransaction&&function(t){if(ot.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),s()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));ot.set(t,e)}(t),e=t,(st||(st=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,ht):t);var e}function ft(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(ft(t.result)),s()},r=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&rt.set(e,t)})).catch((()=>{})),ut.set(e,t),e}(t);if(ct.has(t))return ct.get(t);const e=dt(t);return e!==t&&(ct.set(t,e),ut.set(e,t)),e}const pt=t=>ut.get(t);function gt(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ft(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(ft(o.result),t.oldVersion,t.newVersion,ft(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const mt=["get","getKey","getAll","getAllKeys","count"],yt=["put","add","delete","clear"],vt=new Map;function wt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(vt.get(e))return vt.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=yt.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!mt.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&r.done]))[0]};return vt.set(e,r),r}ht=(t=>({...t,get:(e,n,s)=>wt(e,n)||t.get(e,n,s),has:(e,n)=>!!wt(e,n)||t.has(e,n)}))(ht);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class bt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Et="@firebase/app",Tt="0.7.33",It=new nt("@firebase/app"),St="[DEFAULT]",Ct={[Et]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},At=new Map,Dt=new Map;function _t(t,e){try{t.container.addComponent(e)}catch(n){It.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kt(t){const e=t.name;if(Dt.has(e))return It.debug(`There were multiple attempts to register component ${e}.`),!1;Dt.set(e,t);for(const e of At.values())_t(e,t);return!0}function Nt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const xt=new j("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Lt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new z("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Rt(t,e,n){var s;let i=null!==(s=Ct[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void It.warn(t.join(" "))}kt(new z(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Mt="firebase-heartbeat-store";let Ot=null;function Pt(){return Ot||(Ot=gt("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Mt)}}).catch((t=>{throw xt.create("idb-open",{originalErrorMessage:t.message})}))),Ot}async function Ft(t,e){var n;try{const n=(await Pt()).transaction(Mt,"readwrite"),s=n.objectStore(Mt);return await s.put(e,Vt(t)),n.done}catch(t){if(t instanceof B)It.warn(t.message);else{const e=xt.create("idb-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message});It.warn(e.message)}}}function Vt(t){return`${t.name}!${t.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ut{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new jt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Bt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Bt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let s=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),$t(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$t(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=P(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Bt(){return(new Date).toISOString().substring(0,10)}class jt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!V()&&U().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){var e;try{return(await Pt()).transaction(Mt).objectStore(Mt).get(Vt(t))}catch(t){if(t instanceof B)It.warn(t.message);else{const n=xt.create("idb-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message});It.warn(n.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ft(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ft(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function $t(t){return P(JSON.stringify({version:2,heartbeats:t})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var qt;qt="",kt(new z("platform-logger",(t=>new bt(t)),"PRIVATE")),kt(new z("heartbeat",(t=>new Ut(t)),"PRIVATE")),Rt(Et,Tt,qt),Rt(Et,Tt,"esm2017"),Rt("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Rt("firebase","9.10.0","app");const Kt="@firebase/installations",Gt="0.5.12",Ht=1e4,zt="w:0.5.12",Wt="FIS_v2",Qt=36e5,Yt=new j("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Xt(t){return t instanceof B&&t.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Jt({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function Zt(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function te(t,e){const n=(await e.json()).error;return Yt.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function ee({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ne(t,{refreshToken:e}){const n=ee(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)),n}async function se(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function ie(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const re=/^[cdef][\w-]{21}$/;function oe(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);return re.test(e)?e:""}catch(t){return""}}function ae(t){return`${t.appName}!${t.appId}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ce=new Map;function ue(t,e){const n=ae(t);he(n,e),function(t,e){const n=function(){!le&&"BroadcastChannel"in self&&(le=new BroadcastChannel("[Firebase] FID Change"),le.onmessage=t=>{he(t.data.key,t.data.fid)});return le}();n&&n.postMessage({key:t,fid:e});0===ce.size&&le&&(le.close(),le=null)}(n,e)}function he(t,e){const n=ce.get(t);if(n)for(const t of n)t(e)}let le=null;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const de="firebase-installations-store";let fe=null;function pe(){return fe||(fe=gt("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(de)}})),fe}async function ge(t,e){const n=ae(t),s=(await pe()).transaction(de,"readwrite"),i=s.objectStore(de),r=await i.get(n);return await i.put(e,n),await s.done,r&&r.fid===e.fid||ue(t,e.fid),e}async function me(t){const e=ae(t),n=(await pe()).transaction(de,"readwrite");await n.objectStore(de).delete(e),await n.done}async function ye(t,e){const n=ae(t),s=(await pe()).transaction(de,"readwrite"),i=s.objectStore(de),r=await i.get(n),o=e(r);return void 0===o?await i.delete(n):await i.put(o,n),await s.done,!o||r&&r.fid===o.fid||ue(t,o.fid),o}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function ve(t){let e;const n=await ye(t.appConfig,(n=>{const s=function(t){return Ee(t||{fid:oe(),registrationStatus:0})}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(Yt.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Jt(t),i=ee(t),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={fid:n,authVersion:Wt,appId:t.appId,sdkVersion:zt},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await se((()=>fetch(s,a)));if(c.ok){const t=await c.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:Zt(t.authToken)}}throw await te("Create Installation",c)}(t,e);return ge(t.appConfig,n)}catch(n){throw Xt(n)&&409===n.customData.serverCode?await me(t.appConfig):await ge(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:s}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:we(t)}:{installationEntry:e}}(t,s);return e=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function we(t){let e=await be(t.appConfig);for(;1===e.registrationStatus;)await ie(100),e=await be(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await ve(t);return n||e}return e}function be(t){return ye(t,(t=>{if(!t)throw Yt.create("installation-not-found");return Ee(t)}))}function Ee(t){return 1===(e=t).registrationStatus&&e.registrationTime+Ht<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function Te({appConfig:t,heartbeatServiceProvider:e},n){const s=function(t,{fid:e}){return`${Jt(t)}/${e}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t,n),i=ne(t,n),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={installation:{sdkVersion:zt,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await se((()=>fetch(s,a)));if(c.ok){return Zt(await c.json())}throw await te("Generate Auth Token",c)}async function Ie(t,e=!1){let n;const s=await ye(t.appConfig,(s=>{if(!Ce(s))throw Yt.create("not-registered");const i=s.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Qt}(t)}(i))return s;if(1===i.requestStatus)return n=async function(t,e){let n=await Se(t.appConfig);for(;1===n.authToken.requestStatus;)await ie(100),n=await Se(t.appConfig);const s=n.authToken;return 0===s.requestStatus?Ie(t,e):s}(t,e),s;{if(!navigator.onLine)throw Yt.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(s);return n=async function(t,e){try{const n=await Te(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await ge(t.appConfig,s),n}catch(n){if(!Xt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ge(t.appConfig,n)}else await me(t.appConfig);throw n}}(t,e),e}}));return n?await n:s.authToken}function Se(t){return ye(t,(t=>{if(!Ce(t))throw Yt.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+Ht<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}))}function Ce(t){return void 0!==t&&2===t.registrationStatus}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Ae(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await ve(t);e&&await e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n);return(await Ie(n,e)).token}function De(t){return Yt.create("missing-app-config-values",{valueName:t})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const _e="installations",ke=t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw De("App Configuration");if(!t.name)throw De("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw De(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:Nt(e,"heartbeat"),_delete:()=>Promise.resolve()}},Ne=t=>{const e=Nt(t.getProvider("app").getImmediate(),_e).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:s}=await ve(e);return s?s.catch(console.error):Ie(e).catch(console.error),n.fid}(e),getToken:t=>Ae(e,t)}};kt(new z(_e,ke,"PUBLIC")),kt(new z("installations-internal",Ne,"PRIVATE")),Rt(Kt,Gt),Rt(Kt,Gt,"esm2017");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const xe="analytics",Le="https://www.googletagmanager.com/gtag/js",Re=new nt("@firebase/analytics");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Me(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function Oe(t,e,n,s){return async function(i,r,o){try{"event"===i?await async function(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let t=i.send_to;Array.isArray(t)||(t=[t]);const s=await Me(n);for(const n of t){const t=s.find((t=>t.measurementId===n)),i=t&&e[t.appId];if(!i){r=[];break}r.push(i)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(t){Re.error(t)}}(t,e,n,r,o):"config"===i?await async function(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const t=(await Me(n)).find((t=>t.measurementId===i));t&&await e[t.appId]}}catch(t){Re.error(t)}t("config",i,r)}(t,e,n,s,r,o):"consent"===i?t("consent","update",o):t("set",r)}catch(t){Re.error(t)}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Pe=new j("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const Fe=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function Ve(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ue(t,e=Fe,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Pe.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Pe.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new je;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),Be({appId:s,apiKey:i,measurementId:r},o,a,e)}async function Be(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Fe){var r,o;const{appId:a,measurementId:c}=t;try{await function(t,e){return new Promise(((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener((()=>{clearTimeout(r),s(Pe.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(s,e)}catch(t){if(c)return Re.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===(r=t)||void 0===r?void 0:r.message}]`),{appId:a,measurementId:c};throw t}try{const e=await async function(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:Ve(s)},r="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(r,i);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw Pe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return i.deleteThrottleMetadata(a),e}catch(e){const r=e;if(!function(t){if(!(t instanceof B&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(r)){if(i.deleteThrottleMetadata(a),c)return Re.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==r?void 0:r.message}]`),{appId:a,measurementId:c};throw e}const u=503===Number(null===(o=null==r?void 0:r.customData)||void 0===o?void 0:o.httpStatus)?G(n,i.intervalMillis,30):G(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(a,h),Re.debug(`Calling attemptFetch again in ${u} millis`),Be(t,h,s,i)}}class je{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}async function $e(t,e,n,s,i,r,o){var a;const c=Ue(t);c.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&Re.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>Re.error(t))),e.push(c);const u=
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(){var t;if(!V())return Re.warn(Pe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await U()}catch(e){return Re.warn(Pe.create("indexeddb-unavailable",{errorInfo:null===(t=e)||void 0===t?void 0:t.toString()}).message),!1}return!0}().then((t=>t?s.getId():void 0)),[h,l]=await Promise.all([c,u]);(function(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Le))return e;return null})()||function(t,e){const n=document.createElement("script");n.src=`${Le}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(r,h.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=l&&(d.firebase_id=l),i("config",h.measurementId,d),h.measurementId}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qe{constructor(t){this.app=t}_delete(){return delete Ke[this.app.options.appId],Promise.resolve()}}let Ke={},Ge=[];const He={};let ze,We,Qe="dataLayer",Ye=!1;function Xe(){const t=[];if(function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=Pe.create("invalid-analytics-context",{errorInfo:e});Re.warn(n.message)}}function Je(t,e,n){Xe();const s=t.options.appId;if(!s)throw Pe.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Pe.create("no-api-key");Re.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Ke[s])throw Pe.create("already-exists",{id:s});if(!Ye){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(Qe);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,s,i){let r=function(...t){window[s].push(arguments)};return window[i]&&"function"==typeof window[i]&&(r=window[i]),window[i]=Oe(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}(Ke,Ge,He,Qe,"gtag");We=t,ze=e,Ye=!0}Ke[s]=$e(t,Ge,He,e,ze,Qe,n);return new qe(t)}function Ze(t,e,n,s){t=H(t),async function(t,e,n,s,i){if(i&&i.global)t("event",n,s);else{const i=await e;t("event",n,Object.assign(Object.assign({},s),{send_to:i}))}}(We,Ke[t.app.options.appId],e,n,s).catch((t=>Re.error(t)))}const tn="@firebase/analytics",en="0.8.0";kt(new z(xe,((t,{options:e})=>Je(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),kt(new z("analytics-internal",(function(t){try{const e=t.getProvider(xe).getImmediate();return{logEvent:(t,n,s)=>Ze(e,t,n,s)}}catch(t){throw Pe.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),Rt(tn,en),Rt(tn,en,"esm2017");var nn,sn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},rn=rn||{},on=sn||self;function an(){}function cn(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function un(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var hn="closure_uid_"+(1e9*Math.random()>>>0),ln=0;function dn(t,e,n){return t.call.apply(t.bind,arguments)}function fn(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function pn(t,e,n){return(pn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?dn:fn).apply(null,arguments)}function gn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function mn(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function yn(){this.s=this.s,this.o=this.o}yn.prototype.s=!1,yn.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,hn)&&t[hn]||(t[hn]=++ln))},yn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vn=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function wn(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function bn(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(cn(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let i=0;i<s;i++)t[e+i]=n[i]}else t.push(n)}}function En(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}En.prototype.h=function(){this.defaultPrevented=!0};var Tn=function(){if(!on.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{on.addEventListener("test",an,e),on.removeEventListener("test",an,e)}catch(t){}return t}();function In(t){return/^[\s\xa0]*$/.test(t)}var Sn=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Cn(t,e){return t<e?-1:t>e?1:0}function An(){var t=on.navigator;return t&&(t=t.userAgent)?t:""}function Dn(t){return-1!=An().indexOf(t)}function _n(t){return _n[" "](t),t}_n[" "]=an;var kn,Nn,xn=Dn("Opera"),Ln=Dn("Trident")||Dn("MSIE"),Rn=Dn("Edge"),Mn=Rn||Ln,On=Dn("Gecko")&&!(-1!=An().toLowerCase().indexOf("webkit")&&!Dn("Edge"))&&!(Dn("Trident")||Dn("MSIE"))&&!Dn("Edge"),Pn=-1!=An().toLowerCase().indexOf("webkit")&&!Dn("Edge");function Fn(){var t=on.document;return t?t.documentMode:void 0}t:{var Vn="",Un=(Nn=An(),On?/rv:([^\);]+)(\)|;)/.exec(Nn):Rn?/Edge\/([\d\.]+)/.exec(Nn):Ln?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Nn):Pn?/WebKit\/(\S+)/.exec(Nn):xn?/(?:Version)[ \/]?(\S+)/.exec(Nn):void 0);if(Un&&(Vn=Un?Un[1]:""),Ln){var Bn=Fn();if(null!=Bn&&Bn>parseFloat(Vn)){kn=String(Bn);break t}}kn=Vn}var jn,$n={};function qn(){return function(t){var e=$n;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Sn(String(kn)).split("."),n=Sn("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=Cn(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||Cn(0==i[2].length,0==r[2].length)||Cn(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(on.document&&Ln){var Kn=Fn();jn=Kn||(parseInt(kn,10)||void 0)}else jn=void 0;var Gn=jn;function Hn(t,e){if(En.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(On){t:{try{_n(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:zn[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Hn.X.h.call(this)}}mn(Hn,En);var zn={2:"touch",3:"pen",4:"mouse"};Hn.prototype.h=function(){Hn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wn="closure_listenable_"+(1e6*Math.random()|0),Qn=0;function Yn(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Qn,this.ba=this.ea=!1}function Xn(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Jn(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Zn(t){const e={};for(const n in t)e[n]=t[n];return e}const ts="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function es(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<ts.length;e++)n=ts[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ns(t){this.src=t,this.g={},this.h=0}function ss(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=vn(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Xn(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function is(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}ns.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=is(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new Yn(e,this.src,r,!!s,i)).ea=n,t.push(e)),e};var rs="closure_lm_"+(1e6*Math.random()|0),os={};function as(t,e,n,s,i){if(s&&s.once)return us(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)as(t,e[r],n,s,i);return null}return n=ms(n),t&&t[Wn]?t.N(e,n,un(s)?!!s.capture:!!s,i):cs(t,e,n,!1,s,i)}function cs(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=un(i)?!!i.capture:!!i,a=ps(t);if(a||(t[rs]=a=new ns(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=fs;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Tn||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(ds(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function us(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)us(t,e[r],n,s,i);return null}return n=ms(n),t&&t[Wn]?t.O(e,n,un(s)?!!s.capture:!!s,i):cs(t,e,n,!0,s,i)}function hs(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)hs(t,e[r],n,s,i);else s=un(s)?!!s.capture:!!s,n=ms(n),t&&t[Wn]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=is(r=t.g[e],n,s,i))&&(Xn(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=ps(t))&&(e=t.g[e.toString()],t=-1,e&&(t=is(e,n,s,i)),(n=-1<t?e[t]:null)&&ls(n))}function ls(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Wn])ss(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ds(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ps(e))?(ss(n,t),0==n.h&&(n.src=null,e[rs]=null)):Xn(t)}}}function ds(t){return t in os?os[t]:os[t]="on"+t}function fs(t,e){if(t.ba)t=!0;else{e=new Hn(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ls(t),t=n.call(s,e)}return t}function ps(t){return(t=t[rs])instanceof ns?t:null}var gs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ms(t){return"function"==typeof t?t:(t[gs]||(t[gs]=function(e){return t.handleEvent(e)}),t[gs])}function ys(){yn.call(this),this.i=new ns(this),this.P=this,this.I=null}function vs(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new En(e,t);else if(e instanceof En)e.target=e.target||t;else{var i=e;es(e=new En(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ws(o,s,!0,e)&&i}if(i=ws(o=e.g=t,s,!0,e)&&i,i=ws(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=ws(o=e.g=n[r],s,!1,e)&&i}function ws(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ss(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}mn(ys,yn),ys.prototype[Wn]=!0,ys.prototype.removeEventListener=function(t,e,n,s){hs(this,t,e,n,s)},ys.prototype.M=function(){if(ys.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Xn(n[s]);delete e.g[t],e.h--}}this.I=null},ys.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},ys.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var bs=on.JSON.stringify;function Es(){var t=_s;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Ts,Is=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ss),(t=>t.reset()));class Ss{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Cs(t){on.setTimeout((()=>{throw t}),0)}function As(t,e){Ts||function(){var t=on.Promise.resolve(void 0);Ts=function(){t.then(ks)}}(),Ds||(Ts(),Ds=!0),_s.add(t,e)}var Ds=!1,_s=new class{constructor(){this.h=this.g=null}add(t,e){const n=Is.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function ks(){for(var t;t=Es();){try{t.h.call(t.g)}catch(t){Cs(t)}var e=Is;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ds=!1}function Ns(t,e){ys.call(this),this.h=t||1,this.g=e||on,this.j=pn(this.kb,this),this.l=Date.now()}function xs(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Ls(t,e,n){if("function"==typeof t)n&&(t=pn(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=pn(t.handleEvent,t)}return 2147483647<Number(e)?-1:on.setTimeout(t,e||0)}function Rs(t){t.g=Ls((()=>{t.g=null,t.i&&(t.i=!1,Rs(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}mn(Ns,ys),(nn=Ns.prototype).ca=!1,nn.R=null,nn.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),vs(this,"tick"),this.ca&&(xs(this),this.start()))}},nn.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},nn.M=function(){Ns.X.M.call(this),xs(this),delete this.g};class Ms extends yn{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Rs(this)}M(){super.M(),this.g&&(on.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Os(t){yn.call(this),this.h=t,this.g={}}mn(Os,yn);var Ps=[];function Fs(t,e,n,s){Array.isArray(n)||(n&&(Ps[0]=n.toString()),n=Ps);for(var i=0;i<n.length;i++){var r=as(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Vs(t){Jn(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ls(t)}),t),t.g={}}function Us(){this.g=!0}function Bs(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return bs(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}Os.prototype.M=function(){Os.X.M.call(this),Vs(this)},Os.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Us.prototype.Aa=function(){this.g=!1},Us.prototype.info=function(){};var js={},$s=null;function qs(){return $s=$s||new ys}function Ks(t){En.call(this,js.Oa,t)}function Gs(t){const e=qs();vs(e,new Ks(e))}function Hs(t,e){En.call(this,js.STAT_EVENT,t),this.stat=e}function zs(t){const e=qs();vs(e,new Hs(e,t))}function Ws(t,e){En.call(this,js.Pa,t),this.size=e}function Qs(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return on.setTimeout((function(){t()}),e)}js.Oa="serverreachability",mn(Ks,En),js.STAT_EVENT="statevent",mn(Hs,En),js.Pa="timingevent",mn(Ws,En);var Ys={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},Xs={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Js(){}function Zs(t){return t.h||(t.h=t.i())}function ti(){}Js.prototype.h=null;var ei,ni={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function si(){En.call(this,"d")}function ii(){En.call(this,"c")}function ri(){}function oi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Os(this),this.O=ci,t=Mn?125:void 0,this.T=new Ns(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ai}function ai(){this.i=null,this.g="",this.h=!1}mn(si,En),mn(ii,En),mn(ri,Js),ri.prototype.g=function(){return new XMLHttpRequest},ri.prototype.i=function(){return{}},ei=new ri;var ci=45e3,ui={},hi={};function li(t,e,n){t.K=1,t.v=Ni(Ci(e)),t.s=n,t.P=!0,di(t,null)}function di(t,e){t.F=Date.now(),mi(t),t.A=Ci(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),qi(n.i,"t",s),t.C=0,n=t.l.H,t.h=new ai,t.g=$r(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Ms(pn(t.Ka,t,t.g),t.N)),Fs(t.S,t.g,"readystatechange",t.hb),e=t.H?Zn(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Gs(),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function fi(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function pi(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=gi(t,n),s==hi){4==e&&(t.o=4,zs(14),i=!1),Bs(t.j,t.m,null,"[Incomplete Response]");break}if(s==ui){t.o=4,zs(15),Bs(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Bs(t.j,t.m,s,null),Ei(t,s)}fi(t)&&s!=hi&&s!=ui&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,zs(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mr(e),e.K=!0,zs(11))):(Bs(t.j,t.m,n,"[Invalid Chunked Response]"),bi(t),wi(t))}function gi(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?hi:(n=Number(e.substring(n,s)),isNaN(n)?ui:(s+=1)+n>e.length?hi:(e=e.substr(s,n),t.C=s+n,e))}function mi(t){t.V=Date.now()+t.O,yi(t,t.O)}function yi(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Qs(pn(t.fb,t),e)}function vi(t){t.B&&(on.clearTimeout(t.B),t.B=null)}function wi(t){0==t.l.G||t.I||Fr(t.l,t)}function bi(t){vi(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,xs(t.T),Vs(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ei(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Qi(n.h,t)))if(!t.J&&Qi(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Pr(n),Ar(n)}Rr(n),zs(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Qs(pn(n.bb,n),6e3));if(1>=Wi(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Ur(n,11)}else if((t.J||n.g==t)&&Pr(n),!In(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Yi(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,ki(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((s=n).sa=jr(s,s.H?s.ka:null,s.V),o.J){Xi(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(vi(a),mi(a)),s.g=o}else Lr(s);0<n.i.length&&_r(n)}else"stop"!=u[0]&&"close"!=u[0]||Ur(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Ur(n,7):Cr(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}Gs()}catch(t){}}function Ti(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(cn(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(cn(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(cn(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}(nn=oi.prototype).setTimeout=function(t){this.O=t},nn.hb=function(t){t=t.target;const e=this.L;e&&3==wr(t)?e.l():this.Ka(t)},nn.Ka=function(t){try{if(t==this.g)t:{const h=wr(this.g);var e=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||Mn||this.g&&(this.h.h||this.g.fa()||br(this.g)))){this.I||4!=h||7==e||Gs(),vi(this);var n=this.g.aa();this.Y=n;e:if(fi(this)){var s=br(this.g);t="";var i=s.length,r=4==wr(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){bi(this),wi(this);var o="";break e}this.h.i=new on.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!In(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,zs(12),bi(this),wi(this);break t}Bs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ei(this,n)}this.P?(pi(this,h,o),Mn&&this.i&&3==h&&(Fs(this.S,this.T,"tick",this.gb),this.T.start())):(Bs(this.j,this.m,o,null),Ei(this,o)),4==h&&bi(this),this.i&&!this.I&&(4==h?Fr(this.l,this):(this.i=!1,mi(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,zs(12)):(this.o=0,zs(13)),bi(this),wi(this)}}}catch(t){}},nn.gb=function(){if(this.g){var t=wr(this.g),e=this.g.fa();this.C<e.length&&(vi(this),pi(this,t,e),this.i&&4!=t&&mi(this))}},nn.cancel=function(){this.I=!0,bi(this)},nn.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Gs(),zs(17)),bi(this),this.o=2,wi(this)):yi(this,this.V-t)};var Ii=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Si(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Si){this.h=void 0!==e?e:t.h,Ai(this,t.j),this.s=t.s,this.g=t.g,Di(this,t.m),this.l=t.l,e=t.i;var n=new Ui;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),_i(this,n),this.o=t.o}else t&&(n=String(t).match(Ii))?(this.h=!!e,Ai(this,n[1]||"",!0),this.s=xi(n[2]||""),this.g=xi(n[3]||"",!0),Di(this,n[4]),this.l=xi(n[5]||"",!0),_i(this,n[6]||"",!0),this.o=xi(n[7]||"")):(this.h=!!e,this.i=new Ui(null,this.h))}function Ci(t){return new Si(t)}function Ai(t,e,n){t.j=n?xi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Di(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _i(t,e,n){e instanceof Ui?(t.i=e,function(t,e){e&&!t.j&&(Bi(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ji(this,e),qi(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Li(e,Fi)),t.i=new Ui(e,t.h))}function ki(t,e,n){t.i.set(e,n)}function Ni(t){return ki(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Li(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ri),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ri(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Si.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Li(e,Mi,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Li(e,Mi,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Li(n,"/"==n.charAt(0)?Pi:Oi,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Li(n,Vi)),t.join("")};var Mi=/[#\/\?@]/g,Oi=/[#\?:]/g,Pi=/[#\?]/g,Fi=/[#\?@]/g,Vi=/#/g;function Ui(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Bi(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ji(t,e){Bi(t),e=Ki(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $i(t,e){return Bi(t),e=Ki(t,e),t.g.has(e)}function qi(t,e,n){ji(t,e),0<n.length&&(t.i=null,t.g.set(Ki(t,e),wn(n)),t.h+=n.length)}function Ki(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(nn=Ui.prototype).add=function(t,e){Bi(this),this.i=null,t=Ki(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},nn.forEach=function(t,e){Bi(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},nn.oa=function(){Bi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},nn.W=function(t){Bi(this);let e=[];if("string"==typeof t)$i(this,t)&&(e=e.concat(this.g.get(Ki(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},nn.set=function(t,e){return Bi(this),this.i=null,$i(this,t=Ki(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},nn.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},nn.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Gi(t){this.l=t||Hi,on.PerformanceNavigationTiming?t=0<(t=on.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(on.g&&on.g.Ga&&on.g.Ga()&&on.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hi=10;function zi(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Wi(t){return t.h?1:t.g?t.g.size:0}function Qi(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Yi(t,e){t.g?t.g.add(e):t.h=e}function Xi(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ji(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return wn(t.i)}function Zi(){}function tr(){this.g=new Zi}function er(t,e,n){const s=n||"";try{Ti(t,(function(t,n){let i=t;un(t)&&(i=bs(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function nr(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function sr(t){this.l=t.$b||null,this.j=t.ib||!1}function ir(t,e){ys.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=rr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Gi.prototype.cancel=function(){if(this.i=Ji(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Zi.prototype.stringify=function(t){return on.JSON.stringify(t,void 0)},Zi.prototype.parse=function(t){return on.JSON.parse(t,void 0)},mn(sr,Js),sr.prototype.g=function(){return new ir(this.l,this.j)},sr.prototype.i=function(t){return function(){return t}}({}),mn(ir,ys);var rr=0;function or(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}function ar(t){t.readyState=4,t.l=null,t.j=null,t.A=null,cr(t)}function cr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(nn=ir.prototype).open=function(t,e){if(this.readyState!=rr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,cr(this)},nn.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||on).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))},nn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ar(this)),this.readyState=rr},nn.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,cr(this)),this.g&&(this.readyState=3,cr(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(void 0!==on.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;or(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))},nn.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ar(this):cr(this),3==this.readyState&&or(this)}},nn.Ua=function(t){this.g&&(this.response=this.responseText=t,ar(this))},nn.Ta=function(t){this.g&&(this.response=t,ar(this))},nn.ga=function(){this.g&&ar(this)},nn.setRequestHeader=function(t,e){this.v.append(t,e)},nn.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},nn.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ir.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ur=on.JSON.parse;function hr(t){ys.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lr,this.K=this.L=!1}mn(hr,ys);var lr="",dr=/^https?$/i,fr=["POST","PUT"];function pr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gr(t),yr(t)}function gr(t){t.D||(t.D=!0,vs(t,"complete"),vs(t,"error"))}function mr(t){if(t.h&&void 0!==rn&&(!t.C[1]||4!=wr(t)||2!=t.aa()))if(t.v&&4==wr(t))Ls(t.Ha,0,t);else if(vs(t,"readystatechange"),4==wr(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(Ii)[1]||null;if(!i&&on.self&&on.self.location){var r=on.self.location.protocol;i=r.substr(0,r.length-1)}s=!dr.test(i?i.toLowerCase():"")}n=s}if(n)vs(t,"complete"),vs(t,"success");else{t.m=6;try{var o=2<wr(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",gr(t)}}finally{yr(t)}}}function yr(t,e){if(t.g){vr(t);const n=t.g,s=t.C[0]?an:null;t.g=null,t.C=null,e||vs(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function vr(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(on.clearTimeout(t.A),t.A=null)}function wr(t){return t.g?t.g.readyState:0}function br(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case lr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Er(t){let e="";return Jn(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Tr(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Er(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ki(t,e,n))}function Ir(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Sr(t){this.Ca=0,this.i=[],this.j=new Us,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Ir("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Ir("baseRetryDelayMs",5e3,t),this.ab=Ir("retryDelaySeedMs",1e4,t),this.Za=Ir("forwardChannelMaxRetries",2,t),this.ta=Ir("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Gi(t&&t.concurrentRequestLimit),this.Fa=new tr,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Cr(t){if(Dr(t),3==t.G){var e=t.U++,n=Ci(t.F);ki(n,"SID",t.I),ki(n,"RID",e),ki(n,"TYPE","terminate"),Nr(t,n),(e=new oi(t,t.j,e,void 0)).K=2,e.v=Ni(Ci(n)),n=!1,on.navigator&&on.navigator.sendBeacon&&(n=on.navigator.sendBeacon(e.v.toString(),"")),!n&&on.Image&&((new Image).src=e.v,n=!0),n||(e.g=$r(e.l,null),e.g.da(e.v)),e.F=Date.now(),mi(e)}Br(t)}function Ar(t){t.g&&(Mr(t),t.g.cancel(),t.g=null)}function Dr(t){Ar(t),t.u&&(on.clearTimeout(t.u),t.u=null),Pr(t),t.h.cancel(),t.m&&("number"==typeof t.m&&on.clearTimeout(t.m),t.m=null)}function _r(t){zi(t.h)||t.m||(t.m=!0,As(t.Ja,t),t.C=0)}function kr(t,e){var n;n=e?e.m:t.U++;const s=Ci(t.F);ki(s,"SID",t.I),ki(s,"RID",n),ki(s,"AID",t.T),Nr(t,s),t.o&&t.s&&Tr(s,t.o,t.s),n=new oi(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=xr(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Yi(t.h,n),li(n,s,e)}function Nr(t,e){t.ia&&Jn(t.ia,(function(t,n){ki(e,n,t)})),t.l&&Ti({},(function(t,n){ki(e,n,t)}))}function xr(t,e,n){n=Math.min(t.i.length,n);var s=t.l?pn(t.l.Qa,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{er(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function Lr(t){t.g||t.u||(t.Z=1,As(t.Ia,t),t.A=0)}function Rr(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Qs(pn(t.Ia,t),Vr(t,t.A)),t.A++,!0)}function Mr(t){null!=t.B&&(on.clearTimeout(t.B),t.B=null)}function Or(t){t.g=new oi(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Ci(t.sa);ki(e,"RID","rpc"),ki(e,"SID",t.I),ki(e,"CI",t.L?"0":"1"),ki(e,"AID",t.T),ki(e,"TYPE","xmlhttp"),Nr(t,e),t.o&&t.s&&Tr(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ni(Ci(e)),n.s=null,n.P=!0,di(n,t)}function Pr(t){null!=t.v&&(on.clearTimeout(t.v),t.v=null)}function Fr(t,e){var n=null;if(t.g==e){Pr(t),Mr(t),t.g=null;var s=2}else{if(!Qi(t.h,e))return;n=e.D,Xi(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;vs(s=qs(),new Ws(s,n)),_r(t)}else Lr(t);else if(3==(i=e.o)||0==i&&0<t.pa||!(1==s&&function(t,e){return!(Wi(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Ya?0:t.Za)||(t.m=Qs(pn(t.Ja,t,e),Vr(t,t.C)),t.C++,0)))}(t,e)||2==s&&Rr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ur(t,5);break;case 4:Ur(t,10);break;case 3:Ur(t,6);break;default:Ur(t,2)}}function Vr(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function Ur(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=pn(t.jb,t);n||(n=new Si("//www.google.com/images/cleardot.gif"),on.location&&"http"==on.location.protocol||Ai(n,"https"),Ni(n)),function(t,e){const n=new Us;if(on.Image){const s=new Image;s.onload=gn(nr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=gn(nr,n,s,"TestLoadImage: error",!1,e),s.onabort=gn(nr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=gn(nr,n,s,"TestLoadImage: timeout",!1,e),on.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else zs(2);t.G=0,t.l&&t.l.va(e),Br(t),Dr(t)}function Br(t){if(t.G=0,t.la=[],t.l){const e=Ji(t.h);0==e.length&&0==t.i.length||(bn(t.la,e),bn(t.la,t.i),t.h.i.length=0,wn(t.i),t.i.length=0),t.l.ua()}}function jr(t,e,n){var s=n instanceof Si?Ci(n):new Si(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),Di(s,s.m);else{var i=on.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Si(null,void 0);s&&Ai(r,s),e&&(r.g=e),i&&Di(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&ki(s,n,e),ki(s,"VER",t.ma),Nr(t,s),s}function $r(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new hr(new sr({ib:!0})):new hr(t.ra)).L=t.H,e}function qr(){}function Kr(){if(Ln&&!(10<=Number(Gn)))throw Error("Environmental error: no available transport.")}function Gr(t,e){ys.call(this),this.g=new Sr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!In(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!In(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Wr(this)}function Hr(t){si.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function zr(){ii.call(this),this.status=1}function Wr(t){this.g=t}(nn=hr.prototype).da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ei.g(),this.C=this.u?Zs(this.u):Zs(ei),this.g.onreadystatechange=pn(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void pr(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=on.FormData&&t instanceof on.FormData,!(0<=vn(fr,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vr(this),0<this.B&&((this.K=function(t){return Ln&&qn()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pn(this.qa,this)):this.A=Ls(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){pr(this,t)}},nn.qa=function(){void 0!==rn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vs(this,"timeout"),this.abort(8))},nn.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,vs(this,"complete"),vs(this,"abort"),yr(this))},nn.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yr(this,!0)),hr.X.M.call(this)},nn.Ha=function(){this.s||(this.F||this.v||this.l?mr(this):this.eb())},nn.eb=function(){mr(this)},nn.aa=function(){try{return 2<wr(this)?this.g.status:-1}catch(t){return-1}},nn.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},nn.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ur(e)}},nn.Ea=function(){return this.m},nn.Na=function(){return"string"==typeof this.j?this.j:String(this.j)},(nn=Sr.prototype).ma=8,nn.G=1,nn.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new oi(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Zn(r),es(r,this.S)):r=this.S),null!==this.o||this.N||(i.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=xr(this,i,e),ki(n=Ci(this.F),"RID",t),ki(n,"CVER",22),this.D&&ki(n,"X-HTTP-Session-Id",this.D),Nr(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Er(r)))+"&"+e:this.o&&Tr(n,this.o,r)),Yi(this.h,i),this.Xa&&ki(n,"TYPE","init"),this.O?(ki(n,"$req",e),ki(n,"SID","null"),i.Z=!0,li(i,n,null)):li(i,n,e),this.G=2}}else 3==this.G&&(t?kr(this,t):0==this.i.length||zi(this.h)||kr(this))},nn.Ia=function(){if(this.u=null,Or(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Qs(pn(this.cb,this),t)}},nn.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,zs(10),Ar(this),Or(this))},nn.bb=function(){null!=this.v&&(this.v=null,Ar(this),Rr(this),zs(19))},nn.jb=function(t){t?(this.j.info("Successfully pinged google.com"),zs(2)):(this.j.info("Failed to ping google.com"),zs(1))},(nn=qr.prototype).xa=function(){},nn.wa=function(){},nn.va=function(){},nn.ua=function(){},nn.Qa=function(){},Kr.prototype.g=function(t,e){return new Gr(t,e)},mn(Gr,ys),Gr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;zs(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=jr(t,null,t.V),_r(t)},Gr.prototype.close=function(){Cr(this.g)},Gr.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=bs(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.$a++,t)),3==e.G&&_r(e)},Gr.prototype.M=function(){this.g.l=null,delete this.j,Cr(this.g),delete this.g,Gr.X.M.call(this)},mn(Hr,si),mn(zr,ii),mn(Wr,qr),Wr.prototype.xa=function(){vs(this.g,"a")},Wr.prototype.wa=function(t){vs(this.g,new Hr(t))},Wr.prototype.va=function(t){vs(this.g,new zr)},Wr.prototype.ua=function(){vs(this.g,"b")},Kr.prototype.createWebChannel=Kr.prototype.g,Gr.prototype.send=Gr.prototype.u,Gr.prototype.open=Gr.prototype.m,Gr.prototype.close=Gr.prototype.close,Ys.NO_ERROR=0,Ys.TIMEOUT=8,Ys.HTTP_ERROR=6,Xs.COMPLETE="complete",ti.EventType=ni,ni.OPEN="a",ni.CLOSE="b",ni.ERROR="c",ni.MESSAGE="d",ys.prototype.listen=ys.prototype.N,hr.prototype.listenOnce=hr.prototype.O,hr.prototype.getLastError=hr.prototype.Na,hr.prototype.getLastErrorCode=hr.prototype.Ea,hr.prototype.getStatus=hr.prototype.aa,hr.prototype.getResponseJson=hr.prototype.Ra,hr.prototype.getResponseText=hr.prototype.fa,hr.prototype.send=hr.prototype.da;var Qr=Ys,Yr=Xs,Xr=js,Jr=10,Zr=11,to=sr,eo=ti,no=hr;const so="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class io{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}io.UNAUTHENTICATED=new io(null),io.GOOGLE_CREDENTIALS=new io("google-credentials-uid"),io.FIRST_PARTY=new io("first-party-uid"),io.MOCK_USER=new io("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let ro="9.10.0";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const oo=new nt("@firebase/firestore");function ao(){return oo.logLevel}function co(t,...e){if(oo.logLevel<=X.DEBUG){const n=e.map(lo);oo.debug(`Firestore (${ro}): ${t}`,...n)}}function uo(t,...e){if(oo.logLevel<=X.ERROR){const n=e.map(lo);oo.error(`Firestore (${ro}): ${t}`,...n)}}function ho(t,...e){if(oo.logLevel<=X.WARN){const n=e.map(lo);oo.warn(`Firestore (${ro}): ${t}`,...n)}}function lo(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function fo(t="Unexpected state"){const e=`FIRESTORE (${ro}) INTERNAL ASSERTION FAILED: `+t;throw uo(e),new Error(e)}function po(t,e){t||fo()}function go(t,e){return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const mo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class yo extends B{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vo{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class bo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(io.UNAUTHENTICATED)))}shutdown(){}}class Eo{constructor(t){this.t=t,this.currentUser=io.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new vo;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vo,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{co("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(co("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vo)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(co("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(po("string"==typeof e.accessToken),new wo(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return po(null===t||"string"==typeof t),new io(t)}}class To{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=io.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(po(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Io{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}getToken(){return Promise.resolve(new To(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(io.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class So{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Co{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&co("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,co("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{co("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?s(t):co("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(po("string"==typeof t.token),this.A=t.token,new So(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ao(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Do{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Ao(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function _o(t,e){return t<e?-1:t>e?1:0}function ko(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class No{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new yo(mo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new yo(mo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new yo(mo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new yo(mo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return No.fromMillis(Date.now())}static fromDate(t){return No.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new No(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_o(this.nanoseconds,t.nanoseconds):_o(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xo{constructor(t){this.timestamp=t}static fromTimestamp(t){return new xo(t)}static min(){return new xo(new No(0,0))}static max(){return new xo(new No(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lo{constructor(t,e,n){void 0===e?e=0:e>t.length&&fo(),void 0===n?n=t.length-e:n>t.length-e&&fo(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Lo.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Lo?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ro extends Lo{construct(t,e,n){return new Ro(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new yo(mo.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ro(e)}static emptyPath(){return new Ro([])}}const Mo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oo extends Lo{construct(t,e,n){return new Oo(t,e,n)}static isValidIdentifier(t){return Mo.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oo.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Oo(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new yo(mo.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new yo(mo.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new yo(mo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new yo(mo.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Oo(e)}static emptyPath(){return new Oo([])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Po{constructor(t){this.path=t}static fromPath(t){return new Po(Ro.fromString(t))}static fromName(t){return new Po(Ro.fromString(t).popFirst(5))}static empty(){return new Po(Ro.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ro.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ro.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Po(new Ro(t.slice()))}}function Fo(t){return new Vo(t.readTime,t.key,-1)}class Vo{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Vo(xo.min(),Po.empty(),-1)}static max(){return new Vo(xo.max(),Po.empty(),-1)}}function Uo(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Po.comparator(t.documentKey,e.documentKey),0!==n?n:_o(t.largestBatchId,e.largestBatchId))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Bo(t){if(t.code!==mo.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;co("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jo{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&fo(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new jo(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof jo?e:jo.resolve(e)}catch(t){return jo.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):jo.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):jo.reject(e)}static resolve(t){return new jo(((e,n)=>{e(t)}))}static reject(t){return new jo(((e,n)=>{n(t)}))}static waitFor(t){return new jo(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=jo.resolve(!1);for(const n of t)e=e.next((t=>t?jo.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new jo(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new jo(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}function $o(t){return"IndexedDbTransactionError"===t.name}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ko(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Go(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ho(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */qo.at=-1;class zo{constructor(t,e){this.comparator=t,this.root=e||Qo.EMPTY}insert(t,e){return new zo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Qo.BLACK,null,null))}remove(t){return new zo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Qo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wo(this.root,t,this.comparator,!0)}}class Wo{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Qo{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Qo.RED,this.left=null!=s?s:Qo.EMPTY,this.right=null!=i?i:Qo.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Qo(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Qo.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Qo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Qo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fo();if(this.right.isRed())throw fo();const t=this.left.check();if(t!==this.right.check())throw fo();return t+(this.isRed()?0:1)}}Qo.EMPTY=null,Qo.RED=!0,Qo.BLACK=!1,Qo.EMPTY=new class{constructor(){this.size=0}get key(){throw fo()}get value(){throw fo()}get color(){throw fo()}get left(){throw fo()}get right(){throw fo()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Qo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Yo{constructor(t){this.comparator=t,this.data=new zo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xo(this.data.getIterator())}getIteratorFrom(t){return new Xo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Yo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Yo(this.comparator);return e.data=t,e}}class Xo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Jo{constructor(t){this.fields=t,t.sort(Oo.comparator)}static empty(){return new Jo([])}unionWith(t){let e=new Yo(Oo.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Jo(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ko(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zo{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Zo(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Zo(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _o(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Zo.EMPTY_BYTE_STRING=new Zo("");const ta=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ea(t){if(po(!!t),"string"==typeof t){let e=0;const n=ta.exec(t);if(po(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:na(t.seconds),nanos:na(t.nanos)}}function na(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function sa(t){return"string"==typeof t?Zo.fromBase64String(t):Zo.fromUint8Array(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ia(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ra(t){const e=t.mapValue.fields.__previous_value__;return ia(e)?ra(e):e}function oa(t){const e=ea(t.mapValue.fields.__local_write_time__.timestampValue);return new No(e.seconds,e.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class aa{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ca{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ca("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ca&&t.projectId===this.projectId&&t.database===this.database}}function ua(t){return null==t}function ha(t){return 0===t&&1/t==-1/0}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const la={fields:{__type__:{stringValue:"__max__"}}};function da(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ia(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)?9007199254740991:10:fo()}function fa(t,e){if(t===e)return!0;const n=da(t);if(n!==da(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oa(t).isEqual(oa(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ea(t.timestampValue),s=ea(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return sa(t.bytesValue).isEqual(sa(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return na(t.geoPointValue.latitude)===na(e.geoPointValue.latitude)&&na(t.geoPointValue.longitude)===na(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return na(t.integerValue)===na(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=na(t.doubleValue),s=na(e.doubleValue);return n===s?ha(n)===ha(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return ko(t.arrayValue.values||[],e.arrayValue.values||[],fa);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Ko(n)!==Ko(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!fa(n[t],s[t])))return!1;return!0}(t,e);default:return fo()}}function pa(t,e){return void 0!==(t.values||[]).find((t=>fa(t,e)))}function ga(t,e){if(t===e)return 0;const n=da(t),s=da(e);if(n!==s)return _o(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _o(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=na(t.integerValue||t.doubleValue),s=na(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return ma(t.timestampValue,e.timestampValue);case 4:return ma(oa(t),oa(e));case 5:return _o(t.stringValue,e.stringValue);case 6:return function(t,e){const n=sa(t),s=sa(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=_o(n[t],s[t]);if(0!==e)return e}return _o(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=_o(na(t.latitude),na(e.latitude));return 0!==n?n:_o(na(t.longitude),na(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=ga(n[t],s[t]);if(e)return e}return _o(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===la&&e===la)return 0;if(t===la)return 1;if(e===la)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=_o(s[t],r[t]);if(0!==e)return e;const o=ga(n[s[t]],i[r[t]]);if(0!==o)return o}return _o(s.length,r.length)}(t.mapValue,e.mapValue);default:throw fo()}}function ma(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return _o(t,e);const n=ea(t),s=ea(e),i=_o(n.seconds,s.seconds);return 0!==i?i:_o(n.nanos,s.nanos)}function ya(t){return va(t)}function va(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ea(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?sa(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Po.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=va(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${va(t.fields[i])}`;return n+"}"}(t.mapValue):fo();var e,n}function wa(t){return!!t&&"integerValue"in t}function ba(t){return!!t&&"arrayValue"in t}function Ea(t){return!!t&&"nullValue"in t}function Ta(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ia(t){return!!t&&"mapValue"in t}function Sa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Go(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Sa(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Sa(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Ca{constructor(t){this.value=t}static empty(){return new Ca({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ia(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Sa(e)}setAll(t){let e=Oo.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Sa(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Ia(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return fa(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Ia(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Go(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Ca(Sa(this.value))}}function Aa(t){const e=[];return Go(t.fields,((t,n)=>{const s=new Oo([t]);if(Ia(n)){const t=Aa(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Jo(e)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Da{constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new Da(t,0,xo.min(),xo.min(),Ca.empty(),0)}static newFoundDocument(t,e,n){return new Da(t,1,e,xo.min(),n,0)}static newNoDocument(t,e){return new Da(t,2,e,xo.min(),Ca.empty(),0)}static newUnknownDocument(t,e){return new Da(t,3,e,xo.min(),Ca.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ca.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ca.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xo.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Da&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Da(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _a{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.ht=null}}function ka(t,e=null,n=[],s=[],i=null,r=null,o=null){return new _a(t,e,n,s,i,r,o)}function Na(t){const e=go(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+ya(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),ua(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ya(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ya(t))).join(",")),e.ht=t}return e.ht}function xa(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ka(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!fa(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ha(t.startAt,e.startAt)&&Ha(t.endAt,e.endAt)}function La(t){return Po.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Ra extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new Ma(t,e,n):"array-contains"===e?new Va(t,n):"in"===e?new Ua(t,n):"not-in"===e?new Ba(t,n):"array-contains-any"===e?new ja(t,n):new Ra(t,e,n)}static lt(t,e,n){return"in"===e?new Oa(t,n):new Pa(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(ga(e,this.value)):null!==e&&da(this.value)===da(e)&&this.ft(ga(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return fo()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ma extends Ra{constructor(t,e,n){super(t,e,n),this.key=Po.fromName(n.referenceValue)}matches(t){const e=Po.comparator(t.key,this.key);return this.ft(e)}}class Oa extends Ra{constructor(t,e){super(t,"in",e),this.keys=Fa("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Pa extends Ra{constructor(t,e){super(t,"not-in",e),this.keys=Fa("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Fa(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Po.fromName(t.referenceValue)))}class Va extends Ra{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ba(e)&&pa(e.arrayValue,this.value)}}class Ua extends Ra{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&pa(this.value.arrayValue,e)}}class Ba extends Ra{constructor(t,e){super(t,"not-in",e)}matches(t){if(pa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!pa(this.value.arrayValue,e)}}class ja extends Ra{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ba(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>pa(this.value.arrayValue,t)))}}class $a{constructor(t,e){this.position=t,this.inclusive=e}}class qa{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ka(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ga(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?Po.comparator(Po.fromName(o.referenceValue),n.key):ga(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function Ha(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fa(t.position[n],e.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class za{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Wa(t){return new za(t)}function Qa(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ya(t){const e=go(t);if(null===e._t){e._t=[];const t=function(t){for(const e of t.filters)if(e.dt())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new qa(t)),e._t.push(new qa(Oo.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new qa(Oo.keyField(),t))}}}return e._t}function Xa(t){const e=go(t);if(!e.wt)if("F"===e.limitType)e.wt=ka(e.path,e.collectionGroup,Ya(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Ya(e)){const e="desc"===n.dir?"asc":"desc";t.push(new qa(n.field,e))}const n=e.endAt?new $a(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new $a(e.startAt.position,e.startAt.inclusive):null;e.wt=ka(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.wt}function Ja(t,e,n){return new za(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Za(t,e){return xa(Xa(t),Xa(e))&&t.limitType===e.limitType}function tc(t){return`${Na(Xa(t))}|lt:${t.limitType}`}function ec(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ya(e.value)}`;var e})).join(", ")}]`),ua(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ya(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ya(t))).join(",")),`Target(${e})`}(Xa(t))}; limitType=${t.limitType})`}function nc(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Po.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Ga(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,Ya(t),e))&&!(t.endAt&&!function(t,e,n){const s=Ga(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,Ya(t),e))}(t,e)}function sc(t){return(e,n)=>{let s=!1;for(const i of Ya(t)){const t=ic(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function ic(t,e,n){const s=t.field.isKeyField()?Po.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?ga(s,i):fo()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return fo()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function rc(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ha(e)?"-0":e}}function oc(t){return{integerValue:""+t}}function ac(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?oc(e):rc(t,e)}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cc{constructor(){this._=void 0}}function uc(t,e,n){return t instanceof dc?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof fc?pc(t,e):t instanceof gc?mc(t,e):function(t,e){const n=lc(t,e),s=vc(n)+vc(t.yt);return wa(n)&&wa(t.yt)?oc(s):rc(t.It,s)}(t,e)}function hc(t,e,n){return t instanceof fc?pc(t,e):t instanceof gc?mc(t,e):n}function lc(t,e){return t instanceof yc?wa(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class dc extends cc{}class fc extends cc{constructor(t){super(),this.elements=t}}function pc(t,e){const n=wc(e);for(const e of t.elements)n.some((t=>fa(t,e)))||n.push(e);return{arrayValue:{values:n}}}class gc extends cc{constructor(t){super(),this.elements=t}}function mc(t,e){let n=wc(e);for(const e of t.elements)n=n.filter((t=>!fa(t,e)));return{arrayValue:{values:n}}}class yc extends cc{constructor(t,e){super(),this.It=t,this.yt=e}}function vc(t){return na(t.integerValue||t.doubleValue)}function wc(t){return ba(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class bc{constructor(t,e){this.version=t,this.transformResults=e}}class Ec{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ec}static exists(t){return new Ec(void 0,t)}static updateTime(t){return new Ec(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Tc(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ic{}function Sc(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Mc(t.key,Ec.none()):new kc(t.key,t.data,Ec.none());{const n=t.data,s=Ca.empty();let i=new Yo(Oo.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new Nc(t.key,s,new Jo(i.toArray()),Ec.none())}}function Cc(t,e,n){t instanceof kc?function(t,e,n){const s=t.value.clone(),i=Lc(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Nc?function(t,e,n){if(!Tc(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Lc(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(xc(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ac(t,e,n,s){return t instanceof kc?function(t,e,n,s){if(!Tc(t.precondition,e))return n;const i=t.value.clone(),r=Rc(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof Nc?function(t,e,n,s){if(!Tc(t.precondition,e))return n;const i=Rc(t.fieldTransforms,s,e),r=e.data;return r.setAll(xc(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return Tc(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Dc(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=lc(s.transform,t||null);null!=i&&(null===n&&(n=Ca.empty()),n.set(s.field,i))}return n||null}function _c(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ko(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof fc&&e instanceof fc||t instanceof gc&&e instanceof gc?ko(t.elements,e.elements,fa):t instanceof yc&&e instanceof yc?fa(t.yt,e.yt):t instanceof dc&&e instanceof dc}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class kc extends Ic{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Nc extends Ic{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function xc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Lc(t,e,n){const s=new Map;po(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,hc(o,a,n[i]))}return s}function Rc(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,uc(t,r,e))}return s}class Mc extends Ic{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Oc extends Ic{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pc{constructor(t){this.count=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Fc,Vc;function Uc(t){if(void 0===t)return uo("GRPC error has no .code"),mo.UNKNOWN;switch(t){case Fc.OK:return mo.OK;case Fc.CANCELLED:return mo.CANCELLED;case Fc.UNKNOWN:return mo.UNKNOWN;case Fc.DEADLINE_EXCEEDED:return mo.DEADLINE_EXCEEDED;case Fc.RESOURCE_EXHAUSTED:return mo.RESOURCE_EXHAUSTED;case Fc.INTERNAL:return mo.INTERNAL;case Fc.UNAVAILABLE:return mo.UNAVAILABLE;case Fc.UNAUTHENTICATED:return mo.UNAUTHENTICATED;case Fc.INVALID_ARGUMENT:return mo.INVALID_ARGUMENT;case Fc.NOT_FOUND:return mo.NOT_FOUND;case Fc.ALREADY_EXISTS:return mo.ALREADY_EXISTS;case Fc.PERMISSION_DENIED:return mo.PERMISSION_DENIED;case Fc.FAILED_PRECONDITION:return mo.FAILED_PRECONDITION;case Fc.ABORTED:return mo.ABORTED;case Fc.OUT_OF_RANGE:return mo.OUT_OF_RANGE;case Fc.UNIMPLEMENTED:return mo.UNIMPLEMENTED;case Fc.DATA_LOSS:return mo.DATA_LOSS;default:return fo()}}(Vc=Fc||(Fc={}))[Vc.OK=0]="OK",Vc[Vc.CANCELLED=1]="CANCELLED",Vc[Vc.UNKNOWN=2]="UNKNOWN",Vc[Vc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Vc[Vc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Vc[Vc.NOT_FOUND=5]="NOT_FOUND",Vc[Vc.ALREADY_EXISTS=6]="ALREADY_EXISTS",Vc[Vc.PERMISSION_DENIED=7]="PERMISSION_DENIED",Vc[Vc.UNAUTHENTICATED=16]="UNAUTHENTICATED",Vc[Vc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Vc[Vc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Vc[Vc.ABORTED=10]="ABORTED",Vc[Vc.OUT_OF_RANGE=11]="OUT_OF_RANGE",Vc[Vc.UNIMPLEMENTED=12]="UNIMPLEMENTED",Vc[Vc.INTERNAL=13]="INTERNAL",Vc[Vc.UNAVAILABLE=14]="UNAVAILABLE",Vc[Vc.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Bc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Go(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return Ho(this.inner)}size(){return this.innerSize}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const jc=new zo(Po.comparator);function $c(){return jc}const qc=new zo(Po.comparator);function Kc(...t){let e=qc;for(const n of t)e=e.insert(n.key,n);return e}function Gc(t){let e=qc;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Hc(){return Wc()}function zc(){return Wc()}function Wc(){return new Bc((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Qc=new zo(Po.comparator),Yc=new Yo(Po.comparator);function Xc(...t){let e=Yc;for(const n of t)e=e.add(n);return e}const Jc=new Yo(_o);function Zc(){return Jc}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tu{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,eu.createSynthesizedTargetChangeForCurrentChange(t,e)),new tu(xo.min(),n,Zc(),$c(),Xc())}}class eu{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new eu(Zo.EMPTY_BYTE_STRING,e,Xc(),Xc(),Xc())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nu{constructor(t,e,n,s){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=s}}class su{constructor(t,e){this.targetId=t,this.At=e}}class iu{constructor(t,e,n=Zo.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ru{constructor(){this.Rt=0,this.bt=cu(),this.Pt=Zo.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=Xc(),e=Xc(),n=Xc();return this.bt.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:fo()}})),new eu(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=cu()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Mt(t){this.Vt=!0,this.bt=this.bt.remove(t)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class ou{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=$c(),this.qt=au(),this.Kt=new Yo(_o)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:fo()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,s=this.Xt(e);if(s){const t=s.target;if(La(t))if(0===n){const n=new Po(t.path);this.jt(e,n,Da.newNoDocument(n,xo.min()))}else po(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,s)=>{const i=this.Xt(s);if(i){if(n.current&&La(i.target)){const e=new Po(i.target.path);null!==this.Ut.get(e)||this.ee(s,e)||this.jt(s,e,Da.newNoDocument(e,t))}n.Dt&&(e.set(s,n.xt()),n.Nt())}}));let n=Xc();this.qt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const s=new tu(t,e,this.Kt,this.Ut,n);return this.Ut=$c(),this.qt=au(),this.Kt=new Yo(_o),s}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const s=this.zt(t);this.ee(t,e)?s.kt(e,1):s.Mt(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.zt(t).Ot()}zt(t){let e=this.Lt.get(t);return e||(e=new ru,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new Yo(_o),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||co("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new ru),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function au(){return new zo(Po.comparator)}function cu(){return new zo(Po.comparator)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const uu={asc:"ASCENDING",desc:"DESCENDING"},hu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class lu{constructor(t,e){this.databaseId=t,this.gt=e}}function du(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fu(t,e){return t.gt?e.toBase64():e.toUint8Array()}function pu(t,e){return du(t,e.toTimestamp())}function gu(t){return po(!!t),xo.fromTimestamp(function(t){const e=ea(t);return new No(e.seconds,e.nanos)}(t))}function mu(t,e){return function(t){return new Ro(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function yu(t){const e=Ro.fromString(t);return po(Ou(e)),e}function vu(t,e){return mu(t.databaseId,e.path)}function wu(t,e){const n=yu(e);if(n.get(1)!==t.databaseId.projectId)throw new yo(mo.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new yo(mo.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Po(Tu(n))}function bu(t,e){return mu(t.databaseId,e)}function Eu(t){return new Ro(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Tu(t){return po(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Iu(t,e,n){return{name:vu(t,e),fields:n.value.mapValue.fields}}function Su(t,e){return{documents:[bu(t,e.path)]}}function Cu(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=bu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=bu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Ta(t.value))return{unaryFilter:{field:Nu(t.field),op:"IS_NAN"}};if(Ea(t.value))return{unaryFilter:{field:Nu(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ta(t.value))return{unaryFilter:{field:Nu(t.field),op:"IS_NOT_NAN"}};if(Ea(t.value))return{unaryFilter:{field:Nu(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nu(t.field),op:ku(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Nu(t.field),direction:_u(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.gt||ua(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Au(t){let e=function(t){const e=yu(t);return 4===e.length?Ro.emptyPath():Tu(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){po(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Du(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new qa(xu(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ua(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new $a(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new $a(n,e)}(n.endAt)),function(t,e,n,s,i,r,o,a){return new za(t,e,n,s,i,r,o,a)}(e,i,o,r,a,"F",c,u)}function Du(t){return t?void 0!==t.unaryFilter?[Ru(t)]:void 0!==t.fieldFilter?[Lu(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Du(t))).reduce(((t,e)=>t.concat(e))):fo():[]}function _u(t){return uu[t]}function ku(t){return hu[t]}function Nu(t){return{fieldPath:t.canonicalString()}}function xu(t){return Oo.fromServerFormat(t.fieldPath)}function Lu(t){return Ra.create(xu(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fo()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ru(t){switch(t.unaryFilter.op){case"IS_NAN":const e=xu(t.unaryFilter.field);return Ra.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=xu(t.unaryFilter.field);return Ra.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xu(t.unaryFilter.field);return Ra.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=xu(t.unaryFilter.field);return Ra.create(i,"!=",{nullValue:"NULL_VALUE"});default:return fo()}}function Mu(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ou(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pu{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Cc(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ac(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ac(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=zc();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=Sc(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(xo.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Xc())}isEqual(t){return this.batchId===t.batchId&&ko(this.mutations,t.mutations,((t,e)=>_c(t,e)))&&ko(this.baseMutations,t.baseMutations,((t,e)=>_c(t,e)))}}class Fu{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){po(t.mutations.length===n.length);let s=Qc;const i=t.mutations;for(let t=0;t<i.length;t++)s=s.insert(i[t].key,n[t].version);return new Fu(t,e,n,s)}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vu{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Uu{constructor(t,e,n,s,i=xo.min(),r=xo.min(),o=Zo.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Uu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Uu(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Uu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bu{constructor(t){this.re=t}}function ju(t){const e=Au({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ja(e,e.limit,"L"):e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $u{constructor(){this.Ye=new qu}addToCollectionParentIndex(t,e){return this.Ye.add(e),jo.resolve()}getCollectionParents(t,e){return jo.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return jo.resolve()}deleteFieldIndex(t,e){return jo.resolve()}getDocumentsMatchingTarget(t,e){return jo.resolve(null)}getIndexType(t,e){return jo.resolve(0)}getFieldIndexes(t,e){return jo.resolve([])}getNextCollectionGroupToUpdate(t){return jo.resolve(null)}getMinOffset(t,e){return jo.resolve(Vo.min())}getMinOffsetFromCollectionGroup(t,e){return jo.resolve(Vo.min())}updateCollectionGroup(t,e,n){return jo.resolve()}updateIndexEntries(t,e){return jo.resolve()}}class qu{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Yo(Ro.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Yo(Ro.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ku{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Ku(0)}static vn(){return new Ku(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Gu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hu{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Ac(n.mutation,t,Jo.empty(),No.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Xc()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Xc()){const s=Hc();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=Kc();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Hc();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Xc())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=$c();const r=Wc(),o=Wc();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Nc)?i=i.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),Ac(o.mutation,e,o.mutation.getFieldMask(),No.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Gu(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Wc();let s=new zo(((t,e)=>t-e)),i=Xc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Jo.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||Xc()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=zc();c.forEach((t=>{if(!i.has(t)){const s=Sc(e.get(t),n.get(t));null!==s&&u.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return jo.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Po.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):jo.resolve(Hc());let o=-1,a=i;return r.next((e=>jo.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?jo.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Xc()))).next((t=>({batchId:o,changes:Gc(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Po(e)).next((t=>{let e=Kc();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=Kc();return this.indexManager.getCollectionParents(t,s).next((r=>jo.forEach(r,(r=>{const o=function(t,e){return new za(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,Da.newInvalidDocument(n)))}));let n=Kc();return s.forEach(((s,i)=>{const r=t.get(s);void 0!==r&&Ac(r.mutation,i,Jo.empty(),No.now()),nc(e,i)&&(n=n.insert(s,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):jo.resolve(Da.newInvalidDocument(e))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zu{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return jo.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:gu(n.createTime)}),jo.resolve()}getNamedQuery(t,e){return jo.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:ju(t.bundledQuery),readTime:gu(t.readTime)}}(e)),jo.resolve()}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wu{constructor(){this.overlays=new zo(Po.comparator),this.es=new Map}getOverlay(t,e){return jo.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Hc();return jo.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ue(t,e,s)})),jo.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.es.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),jo.resolve()}getOverlaysForCollection(t,e,n){const s=Hc(),i=e.length+1,r=new Po(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return jo.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new zo(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Hc(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Hc(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return jo.resolve(o)}ue(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.es.get(s.largestBatchId).delete(n.key);this.es.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Vu(e,n));let i=this.es.get(e);void 0===i&&(i=Xc(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qu{constructor(){this.ns=new Yo(Yu.ss),this.rs=new Yo(Yu.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Yu(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Yu(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new Po(new Ro([])),n=new Yu(e,t),s=new Yu(e,t+1),i=[];return this.rs.forEachInRange([n,s],(t=>{this.cs(t),i.push(t.key)})),i}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new Po(new Ro([])),n=new Yu(e,t),s=new Yu(e,t+1);let i=Xc();return this.rs.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Yu(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Yu{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return Po.comparator(t.key,e.key)||_o(t._s,e._s)}static os(t,e){return _o(t._s,e._s)||Po.comparator(t.key,e.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Yo(Yu.ss)}checkEmpty(t){return jo.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Pu(i,e,n,s);this.mutationQueue.push(r);for(const e of s)this.gs=this.gs.add(new Yu(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return jo.resolve(r)}lookupMutationBatch(t,e){return jo.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ps(n),i=s<0?0:s;return jo.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return jo.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return jo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Yu(e,0),s=new Yu(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,s],(t=>{const e=this.ys(t._s);i.push(e)})),jo.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Yo(_o);return e.forEach((t=>{const e=new Yu(t,0),s=new Yu(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,s],(t=>{n=n.add(t._s)}))})),jo.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;Po.isDocumentKey(i)||(i=i.child(""));const r=new Yu(new Po(i),0);let o=new Yo(_o);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t._s)),!0)}),r),jo.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){po(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return jo.forEach(e.mutations,(s=>{const i=new Yu(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Yu(e,0),s=this.gs.firstAfterOrEqual(n);return jo.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,jo.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ju{constructor(t){this.Es=t,this.docs=new zo(Po.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return jo.resolve(n?n.document.mutableCopy():Da.newInvalidDocument(e))}getEntries(t,e){let n=$c();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Da.newInvalidDocument(t))})),jo.resolve(n)}getAllFromCollection(t,e,n){let s=$c();const i=new Po(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Uo(Fo(i),n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return jo.resolve(s)}getAllFromCollectionGroup(t,e,n,s){fo()}As(t,e){return jo.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Zu(this)}getSize(t){return jo.resolve(this.size)}}class Zu extends class{constructor(){this.changes=new Bc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Da.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?jo.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(n)})),jo.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class th{constructor(t){this.persistence=t,this.Rs=new Bc((t=>Na(t)),xa),this.lastRemoteSnapshotVersion=xo.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Qu,this.targetCount=0,this.vs=Ku.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),jo.resolve()}getLastRemoteSnapshotVersion(t){return jo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return jo.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),jo.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),jo.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Ku(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,jo.resolve()}updateTargetData(t,e){return this.Dn(e),jo.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,jo.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Rs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),jo.waitFor(i).next((()=>s))}getTargetCount(t){return jo.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return jo.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),jo.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),jo.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),jo.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return jo.resolve(n)}containsKey(t,e){return jo.resolve(this.Ps.containsKey(e))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class eh{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new qo(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new th(this),this.indexManager=new $u,this.remoteDocumentCache=function(t){return new Ju(t)}((t=>this.referenceDelegate.xs(t))),this.It=new Bu(e),this.Ns=new zu(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Wu,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Xu(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){co("MemoryPersistence","Starting transaction:",t);const s=new nh(this.Ss.next());return this.referenceDelegate.ks(),n(s).next((t=>this.referenceDelegate.Ms(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Os(t,e){return jo.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class nh extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class sh{constructor(t){this.persistence=t,this.Fs=new Qu,this.$s=null}static Bs(t){return new sh(t)}get Ls(){if(this.$s)return this.$s;throw fo()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),jo.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),jo.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),jo.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Ms(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return jo.forEach(this.Ls,(n=>{const s=Po.fromPath(n);return this.Us(t,s).next((t=>{t||e.removeEntry(s,xo.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return jo.or([()=>jo.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ih{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=s}static Ci(t,e){let n=Xc(),s=Xc();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new ih(t,e.fromCache,n,s)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rh{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.ki(t,e).next((i=>i||this.Mi(t,e,s,n))).next((n=>n||this.Oi(t,e)))}ki(t,e){if(Qa(e))return jo.resolve(null);let n=Xa(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=Ja(e,null,"F"),n=Xa(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=Xc(...s);return this.Ni.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Fi(e,s);return this.$i(e,r,i,n.readTime)?this.ki(t,Ja(e,null,"F")):this.Bi(t,r,e,n)}))))})))))}Mi(t,e,n,s){return Qa(e)||s.isEqual(xo.min())?this.Oi(t,e):this.Ni.getDocuments(t,n).next((i=>{const r=this.Fi(e,i);return this.$i(e,r,n,s)?this.Oi(t,e):(ao()<=X.DEBUG&&co("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ec(e)),this.Bi(t,r,e,function(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=xo.fromTimestamp(1e9===s?new No(n+1,0):new No(n,s));return new Vo(i,Po.empty(),e)}(s,-1)))}))}Fi(t,e){let n=new Yo(sc(t));return e.forEach(((e,s)=>{nc(t,s)&&(n=n.add(s))})),n}$i(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Oi(t,e){return ao()<=X.DEBUG&&co("QueryEngine","Using full collection scan to execute query:",ec(e)),this.Ni.getDocumentsMatchingQuery(t,e,Vo.min())}Bi(t,e,n,s){return this.Ni.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class oh{constructor(t,e,n,s){this.persistence=t,this.Li=e,this.It=s,this.Ui=new zo(_o),this.qi=new Bc((t=>Na(t)),xa),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Hu(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}async function ah(t,e){const n=go(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=Xc();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function ch(t){const e=go(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function uh(t,e){const n=go(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,r.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Zo.EMPTY_BYTE_STRING,xo.min()).withLastLimboFreeSnapshotVersion(xo.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,s)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,r)&&o.push(n.Cs.updateTargetData(t,u))}));let a=$c(),c=Xc();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n){let s=Xc(),i=Xc();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=$c();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(xo.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):co("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Wi:s,zi:i}}))}(t,r,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!s.isEqual(xo.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return jo.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ui=i,t)))}function hh(t,e){const n=go(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}async function lh(t,e,n){const s=go(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!$o(t))throw t;co("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function dh(t,e,n){const s=go(t);let i=xo.min(),r=Xc();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=go(t),i=s.qi.get(n);return void 0!==i?jo.resolve(s.Ui.get(i)):s.Cs.getTargetData(e,n)}(s,t,Xa(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Li.getDocumentsMatchingQuery(t,e,n?i:xo.min(),n?r:Xc()))).next((t=>(function(t,e,n){let s=xo.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Ki.set(e,s)}(s,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,Hi:r})))))}class fh{constructor(){this.activeTargetIds=Zc()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ph{constructor(){this.Lr=new fh,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new fh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gh{qr(t){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){co("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){co("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const yh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vh{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,e,n,s,i){const r=this.ao(t,e);co("RestConnection","Sending: ",r,n);const o={};return this.ho(o,s,i),this.lo(t,r,o,n).then((t=>(co("RestConnection","Received: ",t),t)),(e=>{throw ho("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}fo(t,e,n,s,i,r){return this.co(t,e,n,s,i)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+ro,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=yh[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,n,s){return new Promise(((i,r)=>{const o=new no;o.listenOnce(Yr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Qr.NO_ERROR:const e=o.getResponseJson();co("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Qr.TIMEOUT:co("Connection",'RPC "'+t+'" timed out'),r(new yo(mo.DEADLINE_EXCEEDED,"Request time out"));break;case Qr.HTTP_ERROR:const n=o.getStatus();if(co("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(mo).indexOf(e)>=0?e:mo.UNKNOWN}(t.status);r(new yo(e,t.message))}else r(new yo(mo.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new yo(mo.UNAVAILABLE,"Connection failed."));break;default:fo()}}finally{co("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}_o(t,e,n){const s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new Kr,r=qs(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new to({})),this.ho(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=s.join("");co("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,h=!1;const l=new vh({Hr:t=>{h?co("Connection","Not sending because WebChannel is closed:",t):(u||(co("Connection","Opening WebChannel transport."),c.open(),u=!0),co("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,eo.EventType.OPEN,(()=>{h||co("Connection","WebChannel transport opened.")})),d(c,eo.EventType.CLOSE,(()=>{h||(h=!0,co("Connection","WebChannel transport closed"),l.io())})),d(c,eo.EventType.ERROR,(t=>{h||(h=!0,ho("Connection","WebChannel transport errored:",t),l.io(new yo(mo.UNAVAILABLE,"The operation could not be completed")))})),d(c,eo.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];po(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){co("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Fc[t];if(void 0!==e)return Uc(e)}(t),n=i.message;void 0===e&&(e=mo.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,l.io(new yo(e,n)),c.close()}else co("Connection","WebChannel received:",n),l.ro(n)}})),d(r,Xr.STAT_EVENT,(t=>{t.stat===Jr?co("Connection","Detected buffering proxy"):t.stat===Zr&&co("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.so()}),0),l}}function bh(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Eh(t){return new lu(t,!0)}class Th{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Hs=t,this.timerId=e,this.wo=n,this.mo=s,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),s=Math.max(0,e-n);s>0&&co("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,s,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ih{constructor(t,e,n,s,i,r,o,a){this.Hs=t,this.Po=n,this.vo=s,this.Vo=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Th(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===mo.RESOURCE_EXHAUSTED?(uo(e.toString()),uo("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):e&&e.code===mo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new yo(mo.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Mo(){this.state=5,this.xo.Ao((async()=>{this.state=0,this.start()}))}Qo(t){return co("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(co("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Sh extends Ih{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.It=i}jo(t,e){return this.Vo._o("Listen",t,e)}onMessage(t){this.xo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:fo()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.gt?(po(void 0===e||"string"==typeof e),Zo.fromBase64String(e||"")):(po(void 0===e||e instanceof Uint8Array),Zo.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?mo.UNKNOWN:Uc(t.code);return new yo(e,t.message||"")}(o);n=new iu(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=wu(t,s.document.name),r=gu(s.document.updateTime),o=new Ca({mapValue:{fields:s.document.fields}}),a=Da.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new nu(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=wu(t,s.document),r=s.readTime?gu(s.readTime):xo.min(),o=Da.newNoDocument(i,r),a=s.removedTargetIds||[];n=new nu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=wu(t,s.document),r=s.removedTargetIds||[];n=new nu([],r,i,null)}else{if(!("filter"in e))return fo();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new Pc(s),r=t.targetId;n=new su(r,i)}}return n}(this.It,t),n=function(t){if(!("targetChange"in t))return xo.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?xo.min():e.readTime?gu(e.readTime):xo.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=Eu(this.It),e.addTarget=function(t,e){let n;const s=e.target;return n=La(s)?{documents:Su(t,s)}:{query:Cu(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=fu(t,e.resumeToken):e.snapshotVersion.compareTo(xo.min())>0&&(n.readTime=du(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return fo()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.It,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=Eu(this.It),e.removeTarget=t,this.Bo(e)}}class Ch extends Ih{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,e){return this.Vo._o("Write",t,e)}onMessage(t){if(po(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=function(t,e){return t&&t.length>0?(po(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?gu(t.updateTime):gu(e);return n.isEqual(xo.min())&&(n=gu(e)),new bc(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=gu(t.commitTime);return this.listener.Zo(n,e)}return po(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Eu(this.It),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof kc)n={update:Iu(t,e.key,e.value)};else if(e instanceof Mc)n={delete:vu(t,e.key)};else if(e instanceof Nc)n={update:Iu(t,e.key,e.data),updateMask:Mu(e.fieldMask)};else{if(!(e instanceof Oc))return fo();n={verify:vu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof dc)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof fc)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof gc)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof yc)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw fo()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:pu(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:fo()}(t,e.precondition)),n}(this.It,t)))};this.Bo(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ah extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.Vo=n,this.It=s,this.nu=!1}su(){if(this.nu)throw new yo(mo.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.Vo.co(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===mo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new yo(mo.UNKNOWN,t.toString())}))}fo(t,e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.Vo.fo(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===mo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new yo(mo.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class Dh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(uo(e),this.ou=!1):co("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _h{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr((t=>{n.enqueueAndForget((async()=>{Fh(this)&&(co("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=go(t);e._u.add(4),await Nh(e),e.gu.set("Unknown"),e._u.delete(4),await kh(e)}(this))}))})),this.gu=new Dh(n,s)}}async function kh(t){if(Fh(t))for(const e of t.wu)await e(!0)}async function Nh(t){for(const e of t.wu)await e(!1)}function xh(t,e){const n=go(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Ph(n)?Oh(n):tl(n).ko()&&Rh(n,e))}function Lh(t,e){const n=go(t),s=tl(n);n.du.delete(e),s.ko()&&Mh(n,e),0===n.du.size&&(s.ko()?s.Fo():Fh(n)&&n.gu.set("Unknown"))}function Rh(t,e){t.yu.Ot(e.targetId),tl(t).zo(e)}function Mh(t,e){t.yu.Ot(e),tl(t).Ho(e)}function Oh(t){t.yu=new ou({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),tl(t).start(),t.gu.uu()}function Ph(t){return Fh(t)&&!tl(t).No()&&t.du.size>0}function Fh(t){return 0===go(t)._u.size}function Vh(t){t.yu=void 0}async function Uh(t){t.du.forEach(((e,n)=>{Rh(t,e)}))}async function Bh(t,e){Vh(t),Ph(t)?(t.gu.hu(e),Oh(t)):t.gu.set("Unknown")}async function jh(t,e,n){if(t.gu.set("Online"),e instanceof iu&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.du.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.du.delete(s),t.yu.removeTarget(s))}(t,e)}catch(n){co("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await $h(t,n)}else if(e instanceof nu?t.yu.Gt(e):e instanceof su?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(xo.min()))try{const e=await ch(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.te(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.du.get(s);i&&t.du.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(Zo.EMPTY_BYTE_STRING,n.snapshotVersion)),Mh(t,e);const s=new Uu(n.target,e,1,n.sequenceNumber);Rh(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){co("RemoteStore","Failed to raise snapshot:",e),await $h(t,e)}}async function $h(t,e,n){if(!$o(e))throw e;t._u.add(1),await Nh(t),t.gu.set("Offline"),n||(n=()=>ch(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{co("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await kh(t)}))}function qh(t,e){return e().catch((n=>$h(t,n,e)))}async function Kh(t){const e=go(t),n=el(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Gh(e);)try{const t=await hh(e.localStore,s);if(null===t){0===e.fu.length&&n.Fo();break}s=t.batchId,Hh(e,t)}catch(t){await $h(e,t)}zh(e)&&Wh(e)}function Gh(t){return Fh(t)&&t.fu.length<10}function Hh(t,e){t.fu.push(e);const n=el(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function zh(t){return Fh(t)&&!el(t).No()&&t.fu.length>0}function Wh(t){el(t).start()}async function Qh(t){el(t).eu()}async function Yh(t){const e=el(t);for(const n of t.fu)e.Xo(n.mutations)}async function Xh(t,e,n){const s=t.fu.shift(),i=Fu.from(s,e,n);await qh(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Kh(t)}async function Jh(t,e){e&&el(t).Yo&&await async function(t,e){if(function(t){switch(t){default:return fo();case mo.CANCELLED:case mo.UNKNOWN:case mo.DEADLINE_EXCEEDED:case mo.RESOURCE_EXHAUSTED:case mo.INTERNAL:case mo.UNAVAILABLE:case mo.UNAUTHENTICATED:return!1;case mo.INVALID_ARGUMENT:case mo.NOT_FOUND:case mo.ALREADY_EXISTS:case mo.PERMISSION_DENIED:case mo.FAILED_PRECONDITION:case mo.ABORTED:case mo.OUT_OF_RANGE:case mo.UNIMPLEMENTED:case mo.DATA_LOSS:return!0}}(n=e.code)&&n!==mo.ABORTED){const n=t.fu.shift();el(t).Oo(),await qh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Kh(t)}var n}(t,e),zh(t)&&Wh(t)}async function Zh(t,e){const n=go(t);n.asyncQueue.verifyOperationInProgress(),co("RemoteStore","RemoteStore received new credentials");const s=Fh(n);n._u.add(3),await Nh(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await kh(n)}function tl(t){return t.pu||(t.pu=function(t,e,n){const s=go(t);return s.su(),new Sh(e,s.Vo,s.authCredentials,s.appCheckCredentials,s.It,n)
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}(t.datastore,t.asyncQueue,{Yr:Uh.bind(null,t),Zr:Bh.bind(null,t),Wo:jh.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),Ph(t)?Oh(t):t.gu.set("Unknown")):(await t.pu.stop(),Vh(t))}))),t.pu}function el(t){return t.Iu||(t.Iu=function(t,e,n){const s=go(t);return s.su(),new Ch(e,s.Vo,s.authCredentials,s.appCheckCredentials,s.It,n)}(t.datastore,t.asyncQueue,{Yr:Qh.bind(null,t),Zr:Jh.bind(null,t),tu:Yh.bind(null,t),Zo:Xh.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Oo(),await Kh(t)):(await t.Iu.stop(),t.fu.length>0&&(co("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class nl{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new vo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new nl(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new yo(mo.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sl(t,e){if(uo("AsyncQueue",`${e}: ${t}`),$o(t))return new yo(mo.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class il{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Po.comparator(e.key,n.key):(t,e)=>Po.comparator(t.key,e.key),this.keyedMap=Kc(),this.sortedSet=new zo(this.comparator)}static emptySet(t){return new il(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof il))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new il;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rl{constructor(){this.Tu=new zo(Po.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):fo():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class ol{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new ol(t,e,il.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Za(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class al{constructor(){this.Au=void 0,this.listeners=[]}}class cl{constructor(){this.queries=new Bc((t=>tc(t)),Za),this.onlineState="Unknown",this.Ru=new Set}}async function ul(t,e){const n=go(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new al),i)try{r.Au=await n.onListen(s)}catch(t){const n=sl(t,`Initialization of query '${ec(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&fl(n)}async function hl(t,e){const n=go(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function ll(t,e){const n=go(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Pu(t)&&(s=!0);i.Au=t}}s&&fl(n)}function dl(t,e,n){const s=go(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function fl(t){t.Ru.forEach((t=>{t.next()}))}class pl{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ol(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.Nu&&n||t.docs.isEmpty()&&"Offline"!==e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=ol.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Vu=!0,this.vu.next(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gl{constructor(t){this.key=t}}class ml{constructor(t){this.key=t}}class yl{constructor(t,e){this.query=t,this.Lu=e,this.Uu=null,this.current=!1,this.qu=Xc(),this.mutatedKeys=Xc(),this.Ku=sc(t),this.Gu=new il(this.Ku)}get Qu(){return this.Lu}ju(t,e){const n=e?e.Wu:new rl,s=e?e.Gu:this.Gu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),h=nc(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.zu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Ku(h,a)>0||c&&this.Ku(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(r=r.add(h),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Gu:r,Wu:n,$i:o,mutatedKeys:i}}zu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const i=t.Wu.Eu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fo()}};return n(t)-n(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t.type,e.type)||this.Ku(t.doc,e.doc))),this.Hu(n);const r=e?this.Ju():[],o=0===this.qu.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==i.length||a?{snapshot:new ol(this.query,t.Gu,s,i,t.mutatedKeys,0===o,a,!1),Yu:r}:{Yu:r}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new rl,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach((t=>this.Lu=this.Lu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Lu=this.Lu.delete(t))),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.qu;this.qu=Xc(),this.Gu.forEach((t=>{this.Xu(t.key)&&(this.qu=this.qu.add(t.key))}));const e=[];return t.forEach((t=>{this.qu.has(t)||e.push(new ml(t))})),this.qu.forEach((n=>{t.has(n)||e.push(new gl(n))})),e}Zu(t){this.Lu=t.Hi,this.qu=Xc();const e=this.ju(t.documents);return this.applyChanges(e,!0)}tc(){return ol.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.Uu)}}class vl{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class wl{constructor(t){this.key=t,this.ec=!1}}class bl{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.nc={},this.sc=new Bc((t=>tc(t)),Za),this.ic=new Map,this.rc=new Set,this.oc=new zo(Po.comparator),this.uc=new Map,this.cc=new Qu,this.ac={},this.hc=new Map,this.lc=Ku.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function El(t,e){const n=function(t){const e=go(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Al.bind(null,e),e.nc.Wo=ll.bind(null,e.eventManager),e.nc._c=dl.bind(null,e.eventManager),e}(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const t=await function(t,e){const n=go(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Cs.getTargetData(t,e).next((i=>i?(s=i,jo.resolve(s)):n.Cs.allocateTargetId(t).next((i=>(s=new Uu(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ui.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}(n.localStore,Xa(e));n.isPrimaryClient&&xh(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await async function(t,e,n,s){t.dc=(e,n,s)=>async function(t,e,n,s){let i=e.view.ju(n);i.$i&&(i=await dh(t.localStore,e.query,!1).then((({documents:t})=>e.view.ju(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return Rl(t,e.targetId,o.Yu),o.snapshot}(t,e,n,s);const i=await dh(t.localStore,e,!0),r=new yl(e,i.Hi),o=r.ju(i.documents),a=eu.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);Rl(t,n,c.Yu);const u=new vl(e,n,r);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}(n,e,s,"current"===r)}return i}async function Tl(t,e){const n=go(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter((t=>!Za(t,e)))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await lh(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Lh(n.remoteStore,s.targetId),xl(n,s.targetId)})).catch(Bo)):(xl(n,s.targetId),await lh(n.localStore,s.targetId,!0))}async function Il(t,e,n){const s=function(t){const e=go(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Dl.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_l.bind(null,e),e}(t);try{const t=await function(t,e){const n=go(t),s=No.now(),i=e.reduce(((t,e)=>t.add(e.key)),Xc());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=$c(),c=Xc();return n.Gi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{r=i;const o=[];for(const t of e){const e=Dc(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new Nc(t.key,e,Aa(e.value.mapValue),Ec.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:Gc(r)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.ac[t.currentUser.toKey()];s||(s=new zo(_o)),s=s.insert(e,n),t.ac[t.currentUser.toKey()]=s}(s,t.batchId,n),await Pl(s,t.changes),await Kh(s.remoteStore)}catch(t){const e=sl(t,"Failed to persist write");n.reject(e)}}async function Sl(t,e){const n=go(t);try{const t=await uh(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.uc.get(e);s&&(po(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.ec=!0:t.modifiedDocuments.size>0?po(s.ec):t.removedDocuments.size>0&&(po(s.ec),s.ec=!1))})),await Pl(n,t,e)}catch(t){await Bo(t)}}function Cl(t,e,n){const s=go(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.sc.forEach(((n,s)=>{const i=s.view.bu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=go(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.bu(e)&&(s=!0)})),s&&fl(n)}(s.eventManager,e),t.length&&s.nc.Wo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Al(t,e,n){const s=go(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let t=new zo(Po.comparator);t=t.insert(r,Da.newNoDocument(r,xo.min()));const n=Xc().add(r),i=new tu(xo.min(),new Map,new Yo(_o),t,n);await Sl(s,i),s.oc=s.oc.remove(r),s.uc.delete(e),Ol(s)}else await lh(s.localStore,e,!1).then((()=>xl(s,e,n))).catch(Bo)}async function Dl(t,e){const n=go(t),s=e.batch.batchId;try{const t=await function(t,e){const n=go(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=jo.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);po(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Xc();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);Nl(n,s,null),kl(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Pl(n,t)}catch(t){await Bo(t)}}async function _l(t,e,n){const s=go(t);try{const t=await function(t,e){const n=go(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(po(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);Nl(s,e,n),kl(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Pl(s,t)}catch(n){await Bo(n)}}function kl(t,e){(t.hc.get(e)||[]).forEach((t=>{t.resolve()})),t.hc.delete(e)}function Nl(t,e,n){const s=go(t);let i=s.ac[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function xl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach((e=>{t.cc.containsKey(e)||Ll(t,e)}))}function Ll(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);null!==n&&(Lh(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Ol(t))}function Rl(t,e,n){for(const s of n)s instanceof gl?(t.cc.addReference(s.key,e),Ml(t,s)):s instanceof ml?(co("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Ll(t,s.key)):fo()}function Ml(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(co("SyncEngine","New document in limbo: "+n),t.rc.add(s),Ol(t))}function Ol(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new Po(Ro.fromString(e)),s=t.lc.next();t.uc.set(s,new wl(n)),t.oc=t.oc.insert(n,s),xh(t.remoteStore,new Uu(Xa(Wa(n.path)),s,2,qo.at))}}async function Pl(t,e,n){const s=go(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach(((t,a)=>{o.push(s.dc(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=ih.Ci(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.nc.Wo(i),await async function(t,e){const n=go(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>jo.forEach(e,(e=>jo.forEach(e.Si,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>jo.forEach(e.Di,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!$o(t))throw t;co("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ui.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.Ui=n.Ui.insert(e,i)}}}(s.localStore,r))}async function Fl(t,e){const n=go(t);if(!n.currentUser.isEqual(e)){co("SyncEngine","User change. New user:",e.toKey());const t=await ah(n.localStore,e);n.currentUser=e,function(t,e){t.hc.forEach((t=>{t.forEach((t=>{t.reject(new yo(mo.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.hc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Pl(n,t.ji)}}function Vl(t,e){const n=go(t),s=n.uc.get(e);if(s&&s.ec)return Xc().add(s.key);{let t=Xc();const s=n.ic.get(e);if(!s)return t;for(const e of s){const s=n.sc.get(e);t=t.unionWith(s.view.Qu)}return t}}class Ul{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Eh(t.databaseInfo.databaseId),this.sharedClientState=this.mc(t),this.persistence=this.gc(t),await this.persistence.start(),this.localStore=this.yc(t),this.gcScheduler=this.Ic(t,this.localStore),this.indexBackfillerScheduler=this.Tc(t,this.localStore)}Ic(t,e){return null}Tc(t,e){return null}yc(t){return function(t,e,n,s){return new oh(t,e,n,s)}(this.persistence,new rh,t.initialUser,this.It)}gc(t){return new eh(sh.Bs,this.It)}mc(t){return new ph}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Bl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Cl(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fl.bind(null,this.syncEngine),await async function(t,e){const n=go(t);e?(n._u.delete(2),await kh(n)):e||(n._u.add(2),await Nh(n),n.gu.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new cl}createDatastore(t){const e=Eh(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new wh(s));var s;return function(t,e,n,s){return new Ah(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Cl(this.syncEngine,t,0),r=mh.C()?new mh:new gh,new _h(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new bl(t,e,n,s,i,r);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=go(t);co("RemoteStore","RemoteStore shutting down."),e._u.add(5),await Nh(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ac(this.observer.next,t)}error(t){this.observer.error?this.Ac(this.observer.error,t):uo("Uncaught Error in snapshot listener:",t)}Rc(){this.muted=!0}Ac(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $l{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=io.UNAUTHENTICATED,this.clientId=Do.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{co("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(co("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new yo(mo.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new vo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=sl(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ql(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(co("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),co("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await ah(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new Ul)),t.offlineComponents}(t);co("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Zh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Zh(e.remoteStore,n))),t.onlineComponents=e}async function Kl(t){return t.onlineComponents||(co("FirestoreClient","Using default OnlineComponentProvider"),await ql(t,new Bl)),t.onlineComponents}async function Gl(t){const e=await Kl(t),n=e.eventManager;return n.onListen=El.bind(null,e.syncEngine),n.onUnlisten=Tl.bind(null,e.syncEngine),n}const Hl=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function zl(t,e,n){if(!n)throw new yo(mo.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wl(t){if(!Po.isDocumentKey(t))throw new yo(mo.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ql(t){if(Po.isDocumentKey(t))throw new yo(mo.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":fo()}function Xl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new yo(mo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yl(t);throw new yo(mo.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Jl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new yo(mo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new yo(mo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new yo(mo.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zl{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new yo(mo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new yo(mo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new bo;switch(t.type){case"gapi":const e=t.client;return new Io(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new yo(mo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Hl.get(t);e&&(co("ComponentProvider","Removing Datastore"),Hl.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class td{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nd(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new td(this.firestore,t,this._key)}}class ed{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ed(this.firestore,t,this._query)}}class nd extends ed{constructor(t,e,n){super(t,e,Wa(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new td(this.firestore,null,new Po(t))}withConverter(t){return new nd(this.firestore,t,this._path)}}function sd(t,e,...n){if(t=H(t),zl("collection","path",e),t instanceof Zl){const s=Ro.fromString(e,...n);return Ql(s),new nd(t,null,s)}{if(!(t instanceof td||t instanceof nd))throw new yo(mo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ro.fromString(e,...n));return Ql(s),new nd(t.firestore,null,s)}}function id(t,e,...n){if(t=H(t),1===arguments.length&&(e=Do.R()),zl("doc","path",e),t instanceof Zl){const s=Ro.fromString(e,...n);return Wl(s),new td(t,null,new Po(s))}{if(!(t instanceof td||t instanceof nd))throw new yo(mo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ro.fromString(e,...n));return Wl(s),new td(t.firestore,t instanceof nd?t.converter:null,new Po(s))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rd{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Th(this,"async_queue_retry"),this.jc=()=>{const t=bh();t&&co("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.bo()};const t=bh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Wc(),this.zc(t)}enterRestrictedMode(t){if(!this.Lc){this.Lc=!0,this.Gc=t||!1;const e=bh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.jc)}}enqueue(t){if(this.Wc(),this.Lc)return new Promise((()=>{}));const e=new vo;return this.zc((()=>this.Lc&&this.Gc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Bc.push(t),this.Hc())))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(t){if(!$o(t))throw t;co("AsyncQueue","Operation failed with retryable error: "+t)}this.Bc.length>0&&this.xo.Ao((()=>this.Hc()))}}zc(t){const e=this.$c.then((()=>(this.Kc=!0,t().catch((t=>{this.qc=t,this.Kc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);throw uo("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Kc=!1,t))))));return this.$c=e,e}enqueueAfterDelay(t,e,n){this.Wc(),this.Qc.indexOf(t)>-1&&(e=0);const s=nl.createAndSchedule(this,t,e,n,(t=>this.Jc(t)));return this.Uc.push(s),s}Wc(){this.qc&&fo()}verifyOperationInProgress(){}async Yc(){let t;do{t=this.$c,await t}while(t!==this.$c)}Xc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}Zc(t){return this.Yc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Yc()}))}ta(t){this.Qc.push(t)}Jc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}}function od(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)}class ad extends Zl{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new rd,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ud(this),this._firestoreClient.terminate()}}function cd(t){return t._firestoreClient||ud(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ud(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new aa(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new $l(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hd{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new yo(mo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oo(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ld{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ld(Zo.fromBase64String(t))}catch(t){throw new yo(mo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ld(Zo.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dd{constructor(t){this._methodName=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fd{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new yo(mo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new yo(mo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _o(this._lat,t._lat)||_o(this._long,t._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const pd=/^__.*__$/;class gd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Nc(t,this.data,this.fieldMask,e,this.fieldTransforms):new kc(t,this.data,e,this.fieldTransforms)}}class md{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Nc(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function yd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fo()}}class vd{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=s,void 0===i&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(t){return new vd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.sa({path:n,ra:!1});return s.oa(t),s}ua(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.sa({path:n,ra:!1});return s.ea(),s}ca(t){return this.sa({path:void 0,ra:!0})}aa(t){return Nd(t,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ea(){if(this.path)for(let t=0;t<this.path.length;t++)this.oa(this.path.get(t))}oa(t){if(0===t.length)throw this.aa("Document fields must not be empty");if(yd(this.na)&&pd.test(t))throw this.aa('Document fields cannot begin and end with "__"')}}class wd{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||Eh(t)}fa(t,e,n,s=!1){return new vd({na:t,methodName:e,la:n,path:Oo.emptyPath(),ra:!1,ha:s},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function bd(t){const e=t._freezeSettings(),n=Eh(t._databaseId);return new wd(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ed(t,e,n,s,i,r={}){const o=t.fa(r.merge||r.mergeFields?2:0,e,n,i);Ad("Data must be an object, but it was:",o,s);const a=Sd(s,o);let c,u;if(r.merge)c=new Jo(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=Dd(e,s,n);if(!o.contains(i))throw new yo(mo.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);xd(t,i)||t.push(i)}c=new Jo(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new gd(new Ca(a),c,u)}class Td extends dd{_toFieldTransform(t){if(2!==t.na)throw 1===t.na?t.aa(`${this._methodName}() can only appear at the top level of your update data`):t.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Td}}function Id(t,e){if(Cd(t=H(t)))return Ad("Unsupported field value:",e,t),Sd(t,e);if(t instanceof dd)return function(t,e){if(!yd(e.na))throw e.aa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.aa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&4!==e.na)throw e.aa("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=Id(i,e.ca(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=H(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ac(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=No.fromDate(t);return{timestampValue:du(e.It,n)}}if(t instanceof No){const n=new No(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:du(e.It,n)}}if(t instanceof fd)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ld)return{bytesValue:fu(e.It,t._byteString)};if(t instanceof td){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:mu(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.aa(`Unsupported field value: ${Yl(t)}`)}(t,e)}function Sd(t,e){const n={};return Ho(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Go(t,((t,s)=>{const i=Id(s,e.ia(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Cd(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof No||t instanceof fd||t instanceof ld||t instanceof td||t instanceof dd)}function Ad(t,e,n){if(!Cd(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Yl(n);throw"an object"===s?e.aa(t+" a custom object"):e.aa(t+" "+s)}}function Dd(t,e,n){if((e=H(e))instanceof hd)return e._internalPath;if("string"==typeof e)return kd(t,e);throw Nd("Field path arguments must be of type string or ",t,!1,void 0,n)}const _d=new RegExp("[~\\*/\\[\\]]");function kd(t,e,n){if(e.search(_d)>=0)throw Nd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hd(...e.split("."))._internalPath}catch(s){throw Nd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nd(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new yo(mo.INVALID_ARGUMENT,a+t+c)}function xd(t,e){return t.some((t=>t.isEqual(e)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ld{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new td(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Rd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Md("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Rd extends Ld{data(){return super.data()}}function Md(t,e){return"string"==typeof e?kd(t,e):e instanceof hd?e._internalPath:e._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Od{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Pd extends Ld{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Fd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Md("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Fd extends Pd{data(t={}){return super.data(t)}}class Vd{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Od(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Fd(this._firestore,this._userDataWriter,n.key,n,new Od(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new yo(mo.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Fd(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Od(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Fd(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Od(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Ud(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ud(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fo()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Bd(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new yo(mo.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function jd(t,...e){for(const n of e)t=n._apply(t);return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function $d(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class qd extends class{convertValue(t,e="none"){switch(da(t)){case 0:return null;case 1:return t.booleanValue;case 2:return na(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(sa(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw fo()}}convertObject(t,e){const n={};return Go(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new fd(na(t.latitude),na(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ra(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(oa(t));default:return null}}convertTimestamp(t){const e=ea(t);return new No(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ro.fromString(t);po(Ou(n));const s=new ca(n.get(1),n.get(3)),i=new Po(n.popFirst(5));return s.isEqual(e)||uo(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new ld(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new td(this.firestore,null,e)}}function Kd(t){t=Xl(t,ed);const e=Xl(t.firestore,ad),n=cd(e),s=new qd(e);return Bd(t._query),function(t,e,n={}){const s=new vo;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new jl({next:n=>{e.enqueueAndForget((()=>hl(t,o))),n.fromCache&&"server"===s.source?i.reject(new yo(mo.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new pl(n,r,{includeMetadataChanges:!0,Nu:!0});return ul(t,o)}(await Gl(t),t.asyncQueue,e,n,s))),s.promise}(n,t._query).then((n=>new Vd(e,s,t,n)))}function Gd(t,e,n,...s){t=Xl(t,td);const i=Xl(t.firestore,ad),r=bd(i);let o;return o="string"==typeof(e=H(e))||e instanceof hd?function(t,e,n,s,i,r){const o=t.fa(1,e,n),a=[Dd(e,s,n)],c=[i];if(r.length%2!=0)throw new yo(mo.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<r.length;t+=2)a.push(Dd(e,r[t])),c.push(r[t+1]);const u=[],h=Ca.empty();for(let t=a.length-1;t>=0;--t)if(!xd(u,a[t])){const e=a[t];let n=c[t];n=H(n);const s=o.ua(e);if(n instanceof Td)u.push(e);else{const t=Id(n,s);null!=t&&(u.push(e),h.set(e,t))}}const l=new Jo(u);return new md(h,l,o.fieldTransforms)}(r,"updateDoc",t._key,e,n,s):function(t,e,n,s){const i=t.fa(1,e,n);Ad("Data must be an object, but it was:",i,s);const r=[],o=Ca.empty();Go(s,((t,s)=>{const a=kd(e,t,n);s=H(s);const c=i.ua(a);if(s instanceof Td)r.push(a);else{const t=Id(s,c);null!=t&&(r.push(a),o.set(a,t))}}));const a=new Jo(r);return new md(o,a,i.fieldTransforms)}(r,"updateDoc",t._key,e),Qd(i,[o.toMutation(t._key,Ec.exists(!0))])}function Hd(t){return Qd(Xl(t.firestore,ad),[new Mc(t._key,Ec.none())])}function zd(t,e){const n=Xl(t.firestore,ad),s=id(t),i=$d(t.converter,e);return Qd(n,[Ed(bd(t.firestore),"addDoc",s._key,i,null!==t.converter,{}).toMutation(s._key,Ec.exists(!1))]).then((()=>s))}function Wd(t,...e){var n,s,i;t=H(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||od(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(od(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(s=t.error)||void 0===s?void 0:s.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,u,h;if(t instanceof td)u=Xl(t.firestore,ad),h=Wa(t._key.path),c={next:n=>{e[o]&&e[o](function(t,e,n){const s=n.docs.get(e._key),i=new qd(t);return new Pd(t,i,e._key,s,new Od(n.hasPendingWrites,n.fromCache),e.converter)}(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Xl(t,ed);u=Xl(n.firestore,ad),h=n._query;const s=new qd(u);c={next:t=>{e[o]&&e[o](new Vd(u,s,n,t))},error:e[o+1],complete:e[o+2]},Bd(t._query)}return function(t,e,n,s){const i=new jl(s),r=new pl(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>ul(await Gl(t),r))),()=>{i.Rc(),t.asyncQueue.enqueueAndForget((async()=>hl(await Gl(t),r)))}}(cd(u),h,a,c)}function Qd(t,e){return function(t,e){const n=new vo;return t.asyncQueue.enqueueAndForget((async()=>Il(await function(t){return Kl(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(cd(t),e)}!function(t,e=!0){ro="9.10.0",kt(new z("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new ad(new Eo(t.getProvider("auth-internal")),new Co(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new yo(mo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ca(t.options.projectId,e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),Rt(so,"3.5.0",t),Rt(so,"3.5.0","esm2017")}();const Yd=function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:St,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!=typeof s||!s)throw xt.create("bad-app-name",{appName:String(s)});const i=At.get(s);if(i){if(q(t,i.options)&&q(n,i.config))return i;throw xt.create("duplicate-app",{appName:s})}const r=new Y(s);for(const t of Dt.values())r.addComponent(t);const o=new Lt(t,n,r);return At.set(s,o),o}({apiKey:"AIzaSyCev1_lYnFceIViUt-VKLJhrAkzaDQB0BY",authDomain:"computas-stocks.firebaseapp.com",projectId:"computas-stocks",storageBucket:"computas-stocks.appspot.com",messagingSenderId:"1083268345932",appId:"1:1083268345932:web:8f73d2ba86d5532c3b04e9",measurementId:"G-WPSBWT9DSG"}),Xd=function(t,e){const n="object"==typeof t?t:function(t="[DEFAULT]"){const e=At.get(t);if(!e)throw xt.create("no-app",{appName:t});return e}(),s="string"==typeof t?t:e||"(default)";return Nt(n,"firestore").getImmediate({identifier:s})}(Yd);function Jd(t,e,n){const s=t.slice();return s[18]=e[n],s}function Zd(t,e,n){const s=t.slice();return s[21]=e[n],s}function tf(t){let e,n,i,r,u,m,y,v,w,b,E,T,I,S,C,A,D,_,k=t[21].name+"",N=t[21].count+"",x=t[21].maxCount+"";function L(){return t[11](t[21])}function R(){return t[12](t[21])}return{c(){e=h("div"),n=h("h1"),i=l(k),r=d(),u=h("div"),m=h("button"),y=l("-"),w=d(),b=l(N),E=l("/"),T=l(x),I=d(),S=h("button"),C=l("+"),p(n,"class","svelte-1x84txx"),m.disabled=v=t[21].count<=0,p(m,"class","svelte-1x84txx"),S.disabled=A=t[21].count>=t[21].maxCount,p(S,"class","svelte-1x84txx"),p(e,"class","milestone-container svelte-1x84txx")},m(t,s){a(t,e,s),o(e,n),o(n,i),o(e,r),o(e,u),o(u,m),o(m,y),o(u,w),o(u,b),o(u,E),o(u,T),o(u,I),o(u,S),o(S,C),D||(_=[f(m,"click",L),f(S,"click",R)],D=!0)},p(e,n){t=e,1&n&&k!==(k=t[21].name+"")&&g(i,k),1&n&&v!==(v=t[21].count<=0)&&(m.disabled=v),1&n&&N!==(N=t[21].count+"")&&g(b,N),1&n&&x!==(x=t[21].maxCount+"")&&g(T,x),1&n&&A!==(A=t[21].count>=t[21].maxCount)&&(S.disabled=A)},d(t){t&&c(e),D=!1,s(_)}}}function ef(t){let e,n,s,i,r,u,m,y,v=t[18].name+"";function w(...e){return t[13](t[18],...e)}return{c(){e=h("div"),n=h("h1"),s=l(v),i=d(),r=h("div"),u=h("input"),p(n,"class","svelte-1x84txx"),p(u,"type","checkbox"),p(e,"class","milestone-container svelte-1x84txx")},m(t,c){a(t,e,c),o(e,n),o(n,s),o(e,i),o(e,r),o(r,u),m||(y=f(u,"change",w),m=!0)},p(e,n){t=e,2&n&&v!==(v=t[18].name+"")&&g(s,v)},d(t){t&&c(e),m=!1,y()}}}function nf(e){let n,i,r,y,v,w,b,E,T,I,S,C,A,D,_,k,N,x,L,R,M,O,P,F,V,U,B,j,$,q,K,G,H,z,W,Q,Y=e[0],X=[];for(let t=0;t<Y.length;t+=1)X[t]=tf(Zd(e,Y,t));let J=e[1],Z=[];for(let t=0;t<J.length;t+=1)Z[t]=ef(Jd(e,J,t));return{c(){n=h("main"),i=h("button"),i.textContent="Reset",r=d(),y=h("h1"),y.textContent="Miles",v=d(),w=h("h2"),b=l(e[3]),E=l(" Miles"),T=d(),I=h("div"),S=h("input"),C=d(),A=h("button"),A.textContent="Pay",D=d(),_=h("h1"),_.textContent="Milestones",k=d();for(let t=0;t<X.length;t+=1)X[t].c();N=d(),x=h("h1"),x.textContent="Critters",L=d();for(let t=0;t<Z.length;t+=1)Z[t].c();R=d(),M=h("h1"),M.textContent="Shrine",O=d(),P=h("div"),F=h("h1"),F.textContent="Shrine nearness",V=d(),U=h("button"),B=l("-"),$=d(),q=l(e[2]),K=l("/2\n    "),G=h("button"),H=l("+"),p(y,"class","svelte-1x84txx"),p(A,"class","svelte-1x84txx"),p(I,"class","milestone-container svelte-1x84txx"),p(_,"class","svelte-1x84txx"),p(x,"class","svelte-1x84txx"),p(M,"class","svelte-1x84txx"),p(F,"class","svelte-1x84txx"),U.disabled=j=e[2]<=0,p(U,"class","svelte-1x84txx"),G.disabled=z=e[2]>=2,p(G,"class","svelte-1x84txx"),p(P,"class","milestone-container svelte-1x84txx"),p(n,"class","svelte-1x84txx")},m(t,s){a(t,n,s),o(n,i),o(n,r),o(n,y),o(n,v),o(n,w),o(w,b),o(w,E),o(n,T),o(n,I),o(I,S),m(S,e[4]),o(I,C),o(I,A),o(n,D),o(n,_),o(n,k);for(let t=0;t<X.length;t+=1)X[t].m(n,null);o(n,N),o(n,x),o(n,L);for(let t=0;t<Z.length;t+=1)Z[t].m(n,null);o(n,R),o(n,M),o(n,O),o(n,P),o(P,F),o(P,V),o(P,U),o(U,B),o(P,$),o(P,q),o(P,K),o(P,G),o(G,H),W||(Q=[f(i,"click",e[5]),f(S,"input",e[10]),f(A,"click",e[9]),f(U,"click",e[14]),f(G,"click",e[15])],W=!0)},p(t,[e]){if(8&e&&g(b,t[3]),16&e&&S.value!==t[4]&&m(S,t[4]),65&e){let s;for(Y=t[0],s=0;s<Y.length;s+=1){const i=Zd(t,Y,s);X[s]?X[s].p(i,e):(X[s]=tf(i),X[s].c(),X[s].m(n,N))}for(;s<X.length;s+=1)X[s].d(1);X.length=Y.length}if(258&e){let s;for(J=t[1],s=0;s<J.length;s+=1){const i=Jd(t,J,s);Z[s]?Z[s].p(i,e):(Z[s]=ef(i),Z[s].c(),Z[s].m(n,R))}for(;s<Z.length;s+=1)Z[s].d(1);Z.length=J.length}4&e&&j!==(j=t[2]<=0)&&(U.disabled=j),4&e&&g(q,t[2]),4&e&&z!==(z=t[2]>=2)&&(G.disabled=z)},i:t,o:t,d(t){t&&c(n),u(X,t),u(Z,t),W=!1,s(Q)}}}const sf="milestones",rf="critters";function of(t,e,n){const s=[{miles:300,name:"Dig up 3 fossils",count:0,maxCount:3},{miles:300,name:"Shake a tree",count:0,maxCount:1},{miles:400,name:"Shoot down a balloon",count:0,maxCount:1},{miles:400,name:"Get a 3 star island",count:0,maxCount:1}],i=[{name:"Great Purple Emperor"},{name:"Pink ladybug"},{name:"Brown Giant Ant"},{name:"Orangeriet Skull"},{name:"Orangeriet Body"},{name:"Orangeriet Legs"},{name:"Bee"}];let r,o,a=[],c=[];async function u(t,e){const n=id(Xd,sf,t.id);await Gd(n,{count:t.count+e})}async function h(t){const e=id(Xd,"shrine","firstshrine");await Gd(e,{nearness:r+t})}async function l(t,e){console.log(e);const n=id(Xd,rf,e.id);await Gd(n,{found:t.target.checked})}w((async()=>{Wd(jd(sd(Xd,sf)),(t=>{const e=[];t.forEach((t=>{e.push(Object.assign(Object.assign({},t.data()),{id:t.id}))})),console.log(e),n(0,a=e)}));Wd(jd(sd(Xd,rf)),(t=>{const e=[];t.forEach((t=>{e.push(Object.assign(Object.assign({},t.data()),{id:t.id}))})),console.log(e),n(1,c=e)})),Wd(id(Xd,"shrine","firstshrine"),(t=>{const e=t.metadata.hasPendingWrites?"Local":"Server";console.log(e," data: ",t.data()),n(2,r=t.data().nearness)})),Wd(id(Xd,"miles","miles"),(t=>{const e=t.metadata.hasPendingWrites?"Local":"Server";console.log(e," data: ",t.data()),n(3,o=t.data().value)}))}));let d="";return[a,c,r,o,d,async function(){(await Kd(sd(Xd,sf))).forEach((t=>{Hd(id(Xd,sf,t.id)),console.log(`Deleted ${t.id} => ${t.data()}`)})),await Promise.all(s.map((async t=>{await zd(sd(Xd,sf),t)}))),(await Kd(sd(Xd,rf))).forEach((t=>{Hd(id(Xd,rf,t.id)),console.log(`Deleted ${t.id} => ${t.data()}`)})),await Promise.all(i.map((async t=>{await zd(sd(Xd,rf),t)})));const t=id(Xd,"miles","miles");await function(t,e,n){t=Xl(t,td);const s=Xl(t.firestore,ad),i=$d(t.converter,e,n);return Qd(s,[Ed(bd(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Ec.none())])}(t,{value:0})},u,h,l,async function(){const t=id(Xd,"miles","miles");await Gd(t,{value:o-Number(d)})},function(){d=this.value,n(4,d)},t=>{u(t,-1)},t=>{u(t,1)},(t,e)=>l(e,t),()=>{h(-1)},()=>{h(1)}]}const af=new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),R(this,t,of,nf,r,{})}}({target:document.body});return af}();
//# sourceMappingURL=bundle.js.map
