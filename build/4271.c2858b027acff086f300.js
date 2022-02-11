"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4271],{64271:(e,t,n)=>{n.r(t),n.d(t,{Debouncer:()=>y,Poll:()=>f,RateLimiter:()=>d,Throttler:()=>m});var i=n(19461),r=n(56475),o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var s=function(){return(s=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function c(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))}function u(e,t){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var l,p="function"==typeof requestAnimationFrame?requestAnimationFrame:setImmediate,h="function"==typeof cancelAnimationFrame?cancelAnimationFrame:clearImmediate,f=function(){function e(e){var t=this;this._disposed=new r.Signal(this),this._tick=new i.PromiseDelegate,this._ticked=new r.Signal(this),this._timeout=-1,this._factory=e.factory,this._standby=e.standby||l.DEFAULT_STANDBY,this._state=s(s({},l.DEFAULT_STATE),{timestamp:(new Date).getTime()});var n=e.frequency||{},o=Math.max(n.interval||0,n.max||0,l.DEFAULT_FREQUENCY.max);this.frequency=s(s(s({},l.DEFAULT_FREQUENCY),n),{max:o}),this.name=e.name||l.DEFAULT_NAME,"auto"in e&&!e.auto||p((function(){t.start()}))}return Object.defineProperty(e.prototype,"disposed",{get:function(){return this._disposed},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"frequency",{get:function(){return this._frequency},set:function(t){if(!this.isDisposed&&!i.JSONExt.deepEqual(t,this.frequency||{})){var n=t.backoff,r=t.interval,o=t.max;if(r=Math.round(r),o=Math.round(o),"number"==typeof n&&n<1)throw new Error("Poll backoff growth factor must be at least 1");if((r<0||r>o)&&r!==e.NEVER)throw new Error("Poll interval must be between 0 and max");if(o>e.MAX_INTERVAL&&o!==e.NEVER)throw new Error("Max interval must be less than "+e.MAX_INTERVAL);this._frequency={backoff:n,interval:r,max:o}}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isDisposed",{get:function(){return"disposed"===this.state.phase},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"standby",{get:function(){return this._standby},set:function(e){this.isDisposed||this.standby===e||(this._standby=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tick",{get:function(){return this._tick.promise},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ticked",{get:function(){return this._ticked},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this.isDisposed||(this._state=s(s({},l.DISPOSED_STATE),{timestamp:(new Date).getTime()}),this._tick.promise.catch((function(e){})),this._tick.reject(new Error("Poll ("+this.name+") is disposed.")),this._disposed.emit(void 0),r.Signal.clearData(this))},e.prototype.refresh=function(){return this.schedule({cancel:function(e){return"refreshed"===e.phase},interval:e.IMMEDIATE,phase:"refreshed"})},e.prototype.schedule=function(t){return void 0===t&&(t={}),c(this,void 0,void 0,(function(){var n,r,o,a,c,l=this;return u(this,(function(u){switch(u.label){case 0:return this.isDisposed||t.cancel&&t.cancel(this.state)?[2]:(n=this.state,r=this._tick,o=new i.PromiseDelegate,a=s({interval:this.frequency.interval,payload:null,phase:"standby",timestamp:(new Date).getTime()},t),this._state=a,this._tick=o,n.interval===e.IMMEDIATE?h(this._timeout):clearTimeout(this._timeout),this._ticked.emit(this.state),r.resolve(this),[4,r.promise]);case 1:return u.sent(),c=function(){l.isDisposed||l.tick!==o.promise||l._execute()},this._timeout=a.interval===e.IMMEDIATE?p(c):a.interval===e.NEVER?-1:setTimeout(c,a.interval),[2]}}))}))},e.prototype.start=function(){return this.schedule({cancel:function(e){var t=e.phase;return"constructed"!==t&&"standby"!==t&&"stopped"!==t},interval:e.IMMEDIATE,phase:"started"})},e.prototype.stop=function(){return this.schedule({cancel:function(e){return"stopped"===e.phase},interval:e.NEVER,phase:"stopped"})},e.prototype._execute=function(){var e=this,t="function"==typeof this.standby?this.standby():this.standby;if(t="never"!==t&&("when-hidden"===t?!("undefined"==typeof document||!document||!document.hidden):t))this.schedule();else{var n=this.tick;this._factory(this.state).then((function(t){e.isDisposed||e.tick!==n||e.schedule({payload:t,phase:"rejected"===e.state.phase?"reconnected":"resolved"})})).catch((function(t){e.isDisposed||e.tick!==n||e.schedule({interval:l.sleep(e.frequency,e.state),payload:t,phase:"rejected"})}))}},e}();!function(e){e.IMMEDIATE=0,e.MAX_INTERVAL=2147483647,e.NEVER=1/0}(f||(f={})),function(e){e.DEFAULT_BACKOFF=3,e.DEFAULT_FREQUENCY={backoff:!0,interval:1e3,max:3e4},e.DEFAULT_NAME="unknown",e.DEFAULT_STANDBY="when-hidden",e.DEFAULT_STATE={interval:f.NEVER,payload:null,phase:"constructed",timestamp:new Date(0).getTime()},e.DISPOSED_STATE={interval:f.NEVER,payload:null,phase:"disposed",timestamp:new Date(0).getTime()},e.sleep=function(t,n){var i=t.backoff,r=t.interval,o=t.max;if(r===f.NEVER)return r;var a=!0===i?e.DEFAULT_BACKOFF:!1===i?1:i,s=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}(r,n.interval*a);return Math.min(o,s)}}(l||(l={}));var d=function(){function e(e,t){var n=this;void 0===t&&(t=500),this.payload=null,this.limit=t,this.poll=new f({auto:!1,factory:function(){return c(n,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,e()];case 1:return[2,t.sent()]}}))}))},frequency:{backoff:!1,interval:f.NEVER,max:f.NEVER},standby:"never"}),this.payload=new i.PromiseDelegate,this.poll.ticked.connect((function(e,t){var r=n.payload;return"resolved"===t.phase?(n.payload=new i.PromiseDelegate,void r.resolve(t.payload)):"rejected"===t.phase||"stopped"===t.phase?(n.payload=new i.PromiseDelegate,r.promise.catch((function(e){})),void r.reject(t.payload)):void 0}),this)}return Object.defineProperty(e.prototype,"isDisposed",{get:function(){return null===this.payload},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this.isDisposed||(this.payload=null,this.poll.dispose())},e.prototype.stop=function(){return c(this,void 0,void 0,(function(){return u(this,(function(e){return[2,this.poll.stop()]}))}))},e}(),y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.invoke=function(){return this.poll.schedule({interval:this.limit,phase:"invoked"}),this.payload.promise},t}(d),m=function(e){function t(t,n){var i=e.call(this,t,"number"==typeof n?n:n&&n.limit)||this,r="leading";return"number"!=typeof n&&(r="edge"in(n=n||{})?n.edge:r),i._interval="trailing"===r?i.limit:f.IMMEDIATE,i}return a(t,e),t.prototype.invoke=function(){return"invoked"!==this.poll.state.phase&&this.poll.schedule({interval:this._interval,phase:"invoked"}),this.payload.promise},t}(d);m||(m={})}}]);
//# sourceMappingURL=4271.c2858b027acff086f300.js.map