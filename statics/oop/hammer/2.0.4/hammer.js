define("hammer/2.0.4/hammer",[],function(t,e,i){!function(t,e,n,r){"use strict";function s(t,e,i){return setTimeout(l(t,i),e)}function o(t,e,i){return Array.isArray(t)?(a(t,i[e],i),!0):!1}function a(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==r)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function h(t,e,i){for(var n=Object.keys(e),s=0;s<n.length;)(!i||i&&t[n[s]]===r)&&(t[n[s]]=e[n[s]]),s++;return t}function u(t,e){return h(t,e,!0)}function c(t,e,i){var n,r=e.prototype;n=t.prototype=Object.create(r),n.constructor=t,n._super=r,i&&h(n,i)}function l(t,e){return function(){return t.apply(e,arguments)}}function p(t,e){return typeof t==le?t.apply(e?e[0]||r:r,e):t}function f(t,e){return t===r?e:t}function d(t,e,i){a(T(e),function(e){t.addEventListener(e,i,!1)})}function v(t,e,i){a(T(e),function(e){t.removeEventListener(e,i,!1)})}function m(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function g(t,e){return t.indexOf(e)>-1}function T(t){return t.trim().split(/\s+/g)}function y(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function E(t){return Array.prototype.slice.call(t,0)}function I(t,e,i){for(var n=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];y(r,o)<0&&n.push(t[s]),r[s]=o,s++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function A(t,e){for(var i,n,s=e[0].toUpperCase()+e.slice(1),o=0;o<ue.length;){if(i=ue[o],n=i?i+s:e,n in t)return n;o++}return r}function _(){return ve++}function D(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function S(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){p(t.options.enable,[t])&&i.handler(e)},this.init()}function w(t){var e,i=t.options.inputClass;return new(e=i?i:Te?q:ye?k:ge?G:W)(t,b)}function b(t,e,i){var n=i.pointers.length,r=i.changedPointers.length,s=e&Se&&n-r===0,o=e&(be|Ce)&&n-r===0;i.isFirst=!!s,i.isFinal=!!o,s&&(t.session={}),i.eventType=e,C(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function C(t,e){var i=t.session,n=e.pointers,r=n.length;i.firstInput||(i.firstInput=N(e)),r>1&&!i.firstMultiple?i.firstMultiple=N(e):1===r&&(i.firstMultiple=!1);var s=i.firstInput,o=i.firstMultiple,a=o?o.center:s.center,h=e.center=P(n);e.timeStamp=de(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=X(a,h),e.distance=x(a,h),R(i,e),e.offsetDirection=O(e.deltaX,e.deltaY),e.scale=o?F(o.pointers,n):1,e.rotation=o?Y(o.pointers,n):0,z(i,e);var u=t.element;m(e.srcEvent.target,u)&&(u=e.srcEvent.target),e.target=u}function R(t,e){var i=e.center,n=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};(e.eventType===Se||s.eventType===be)&&(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=r.x+(i.x-n.x),e.deltaY=r.y+(i.y-n.y)}function z(t,e){var i,n,s,o,a=t.lastInterval||e,h=e.timeStamp-a.timeStamp;if(e.eventType!=Ce&&(h>De||a.velocity===r)){var u=a.deltaX-e.deltaX,c=a.deltaY-e.deltaY,l=M(h,u,c);n=l.x,s=l.y,i=fe(l.x)>fe(l.y)?l.x:l.y,o=O(u,c),t.lastInterval=e}else i=a.velocity,n=a.velocityX,s=a.velocityY,o=a.direction;e.velocity=i,e.velocityX=n,e.velocityY=s,e.direction=o}function N(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:pe(t.pointers[i].clientX),clientY:pe(t.pointers[i].clientY)},i++;return{timeStamp:de(),pointers:e,center:P(e),deltaX:t.deltaX,deltaY:t.deltaY}}function P(t){var e=t.length;if(1===e)return{x:pe(t[0].clientX),y:pe(t[0].clientY)};for(var i=0,n=0,r=0;e>r;)i+=t[r].clientX,n+=t[r].clientY,r++;return{x:pe(i/e),y:pe(n/e)}}function M(t,e,i){return{x:e/t||0,y:i/t||0}}function O(t,e){return t===e?Re:fe(t)>=fe(e)?t>0?ze:Ne:e>0?Pe:Me}function x(t,e,i){i||(i=Ye);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(n*n+r*r)}function X(t,e,i){i||(i=Ye);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return 180*Math.atan2(r,n)/Math.PI}function Y(t,e){return X(e[1],e[0],Fe)-X(t[1],t[0],Fe)}function F(t,e){return x(e[0],e[1],Fe)/x(t[0],t[1],Fe)}function W(){this.evEl=qe,this.evWin=Le,this.allow=!0,this.pressed=!1,S.apply(this,arguments)}function q(){this.evEl=Ue,this.evWin=Ge,S.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function L(){this.evTarget=je,this.evWin=Ze,this.started=!1,S.apply(this,arguments)}function H(t,e){var i=E(t.touches),n=E(t.changedTouches);return e&(be|Ce)&&(i=I(i.concat(n),"identifier",!0)),[i,n]}function k(){this.evTarget=Je,this.targetIds={},S.apply(this,arguments)}function U(t,e){var i=E(t.touches),n=this.targetIds;if(e&(Se|we)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var r,s,o=E(t.changedTouches),a=[],h=this.target;if(s=i.filter(function(t){return m(t.target,h)}),e===Se)for(r=0;r<s.length;)n[s[r].identifier]=!0,r++;for(r=0;r<o.length;)n[o[r].identifier]&&a.push(o[r]),e&(be|Ce)&&delete n[o[r].identifier],r++;return a.length?[I(s.concat(a),"identifier",!0),a]:void 0}function G(){S.apply(this,arguments);var t=l(this.handler,this);this.touch=new k(this.manager,t),this.mouse=new W(this.manager,t)}function V(t,e){this.manager=t,this.set(e)}function j(t){if(g(t,ii))return ii;var e=g(t,ni),i=g(t,ri);return e&&i?ni+" "+ri:e||i?e?ni:ri:g(t,ei)?ei:ti}function Z(t){this.id=_(),this.manager=null,this.options=u(t||{},this.defaults),this.options.enable=f(this.options.enable,!0),this.state=si,this.simultaneous={},this.requireFail=[]}function B(t){return t&ci?"cancel":t&hi?"end":t&ai?"move":t&oi?"start":""}function J(t){return t==Me?"down":t==Pe?"up":t==ze?"left":t==Ne?"right":""}function K(t,e){var i=e.manager;return i?i.get(t):t}function Q(){Z.apply(this,arguments)}function $(){Q.apply(this,arguments),this.pX=null,this.pY=null}function te(){Q.apply(this,arguments)}function ee(){Z.apply(this,arguments),this._timer=null,this._input=null}function ie(){Q.apply(this,arguments)}function ne(){Q.apply(this,arguments)}function re(){Z.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function se(t,e){return e=e||{},e.recognizers=f(e.recognizers,se.defaults.preset),new oe(t,e)}function oe(t,e){e=e||{},this.options=u(e,se.defaults),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=w(this),this.touchAction=new V(this,this.options.touchAction),ae(this,!0),a(e.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ae(t,e){var i=t.element;a(t.options.cssProps,function(t,n){i.style[A(i.style,n)]=e?t:""})}function he(t,i){var n=e.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=i,i.target.dispatchEvent(n)}var ue=["","webkit","moz","MS","ms","o"],ce=e.createElement("div"),le="function",pe=Math.round,fe=Math.abs,de=Date.now,ve=1,me=/mobile|tablet|ip(ad|hone|od)|android/i,ge="ontouchstart"in t,Te=A(t,"PointerEvent")!==r,ye=ge&&me.test(navigator.userAgent),Ee="touch",Ie="pen",Ae="mouse",_e="kinect",De=25,Se=1,we=2,be=4,Ce=8,Re=1,ze=2,Ne=4,Pe=8,Me=16,Oe=ze|Ne,xe=Pe|Me,Xe=Oe|xe,Ye=["x","y"],Fe=["clientX","clientY"];S.prototype={handler:function(){},init:function(){this.evEl&&d(this.element,this.evEl,this.domHandler),this.evTarget&&d(this.target,this.evTarget,this.domHandler),this.evWin&&d(D(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&v(this.element,this.evEl,this.domHandler),this.evTarget&&v(this.target,this.evTarget,this.domHandler),this.evWin&&v(D(this.element),this.evWin,this.domHandler)}};var We={mousedown:Se,mousemove:we,mouseup:be},qe="mousedown",Le="mousemove mouseup";c(W,S,{handler:function(t){var e=We[t.type];e&Se&&0===t.button&&(this.pressed=!0),e&we&&1!==t.which&&(e=be),this.pressed&&this.allow&&(e&be&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:Ae,srcEvent:t}))}});var He={pointerdown:Se,pointermove:we,pointerup:be,pointercancel:Ce,pointerout:Ce},ke={2:Ee,3:Ie,4:Ae,5:_e},Ue="pointerdown",Ge="pointermove pointerup pointercancel";t.MSPointerEvent&&(Ue="MSPointerDown",Ge="MSPointerMove MSPointerUp MSPointerCancel"),c(q,S,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),r=He[n],s=ke[t.pointerType]||t.pointerType,o=s==Ee,a=y(e,t.pointerId,"pointerId");r&Se&&(0===t.button||o)?0>a&&(e.push(t),a=e.length-1):r&(be|Ce)&&(i=!0),0>a||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(a,1))}});var Ve={touchstart:Se,touchmove:we,touchend:be,touchcancel:Ce},je="touchstart",Ze="touchstart touchmove touchend touchcancel";c(L,S,{handler:function(t){var e=Ve[t.type];if(e===Se&&(this.started=!0),this.started){var i=H.call(this,t,e);e&(be|Ce)&&i[0].length-i[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:Ee,srcEvent:t})}}});var Be={touchstart:Se,touchmove:we,touchend:be,touchcancel:Ce},Je="touchstart touchmove touchend touchcancel";c(k,S,{handler:function(t){var e=Be[t.type],i=U.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:Ee,srcEvent:t})}}),c(G,S,{handler:function(t,e,i){var n=i.pointerType==Ee,r=i.pointerType==Ae;if(n)this.mouse.allow=!1;else if(r&&!this.mouse.allow)return;e&(be|Ce)&&(this.mouse.allow=!0),this.callback(t,e,i)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ke=A(ce.style,"touchAction"),Qe=Ke!==r,$e="compute",ti="auto",ei="manipulation",ii="none",ni="pan-x",ri="pan-y";V.prototype={set:function(t){t==$e&&(t=this.compute()),Qe&&(this.manager.element.style[Ke]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return a(this.manager.recognizers,function(e){p(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),j(t.join(" "))},preventDefaults:function(t){if(!Qe){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var n=this.actions,r=g(n,ii),s=g(n,ri),o=g(n,ni);return r||s&&i&Oe||o&&i&xe?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var si=1,oi=2,ai=4,hi=8,ui=hi,ci=16,li=32;Z.prototype={defaults:{},set:function(t){return h(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(o(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=K(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return o(t,"dropRecognizeWith",this)?this:(t=K(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(o(t,"requireFailure",this))return this;var e=this.requireFail;return t=K(t,this),-1===y(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(o(t,"dropRequireFailure",this))return this;t=K(t,this);var e=y(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(i.options.event+(e?B(n):""),t)}var i=this,n=this.state;hi>n&&e(!0),e(),n>=hi&&e(!0)},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=li)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(li|si)))return!1;t++}return!0},recognize:function(t){var e=h({},t);return p(this.options.enable,[this,e])?(this.state&(ui|ci|li)&&(this.state=si),this.state=this.process(e),void(this.state&(oi|ai|hi|ci)&&this.tryEmit(e))):(this.reset(),void(this.state=li))},process:function(){},getTouchAction:function(){},reset:function(){}},c(Q,Z,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(oi|ai),r=this.attrTest(t);return n&&(i&Ce||!r)?e|ci:n||r?i&be?e|hi:e&oi?e|ai:oi:li}}),c($,Q,{defaults:{event:"pan",threshold:10,pointers:1,direction:Xe},getTouchAction:function(){var t=this.options.direction,e=[];return t&Oe&&e.push(ri),t&xe&&e.push(ni),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&Oe?(r=0===s?Re:0>s?ze:Ne,i=s!=this.pX,n=Math.abs(t.deltaX)):(r=0===o?Re:0>o?Pe:Me,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=r,i&&n>e.threshold&&r&e.direction},attrTest:function(t){return Q.prototype.attrTest.call(this,t)&&(this.state&oi||!(this.state&oi)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=J(t.direction);e&&this.manager.emit(this.options.event+e,t),this._super.emit.call(this,t)}}),c(te,Q,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ii]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&oi)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out";this.manager.emit(this.options.event+e,t)}}}),c(ee,Z,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[ti]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(be|Ce)&&!r)this.reset();else if(t.eventType&Se)this.reset(),this._timer=s(function(){this.state=ui,this.tryEmit()},e.time,this);else if(t.eventType&be)return ui;return li},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===ui&&(t&&t.eventType&be?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=de(),this.manager.emit(this.options.event,this._input)))}}),c(ie,Q,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ii]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&oi)}}),c(ne,Q,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Oe|xe,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(Oe|xe)?e=t.velocity:i&Oe?e=t.velocityX:i&xe&&(e=t.velocityY),this._super.attrTest.call(this,t)&&i&t.direction&&t.distance>this.options.threshold&&fe(e)>this.options.velocity&&t.eventType&be},emit:function(t){var e=J(t.direction);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),c(re,Z,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ei]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&Se&&0===this.count)return this.failTimeout();if(n&&r&&i){if(t.eventType!=be)return this.failTimeout();var o=this.pTime?t.timeStamp-this.pTime<e.interval:!0,a=!this.pCenter||x(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,a&&o?this.count+=1:this.count=1,this._input=t;var h=this.count%e.taps;if(0===h)return this.hasRequireFailures()?(this._timer=s(function(){this.state=ui,this.tryEmit()},e.interval,this),oi):ui}return li},failTimeout:function(){return this._timer=s(function(){this.state=li},this.options.interval,this),li},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ui&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),se.VERSION="2.0.4",se.defaults={domEvents:!1,touchAction:$e,enable:!0,inputTarget:null,inputClass:null,preset:[[ie,{enable:!1}],[te,{enable:!1},["rotate"]],[ne,{direction:Oe}],[$,{direction:Oe},["swipe"]],[re],[re,{event:"doubletap",taps:2},["tap"]],[ee]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var pi=1,fi=2;oe.prototype={set:function(t){return h(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?fi:pi},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&ui)&&(r=e.curRecognizer=null);for(var s=0;s<n.length;)i=n[s],e.stopped===fi||r&&i!=r&&!i.canRecognizeWith(r)?i.reset():i.recognize(t),!r&&i.state&(oi|ai|hi)&&(r=e.curRecognizer=i),s++}},get:function(t){if(t instanceof Z)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(o(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(o(t,"remove",this))return this;var e=this.recognizers;return t=this.get(t),e.splice(y(e,t),1),this.touchAction.update(),this},on:function(t,e){var i=this.handlers;return a(T(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this},off:function(t,e){var i=this.handlers;return a(T(t),function(t){e?i[t].splice(y(i[t],e),1):delete i[t]}),this},emit:function(t,e){this.options.domEvents&&he(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&ae(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(se,{INPUT_START:Se,INPUT_MOVE:we,INPUT_END:be,INPUT_CANCEL:Ce,STATE_POSSIBLE:si,STATE_BEGAN:oi,STATE_CHANGED:ai,STATE_ENDED:hi,STATE_RECOGNIZED:ui,STATE_CANCELLED:ci,STATE_FAILED:li,DIRECTION_NONE:Re,DIRECTION_LEFT:ze,DIRECTION_RIGHT:Ne,DIRECTION_UP:Pe,DIRECTION_DOWN:Me,DIRECTION_HORIZONTAL:Oe,DIRECTION_VERTICAL:xe,DIRECTION_ALL:Xe,Manager:oe,Input:S,TouchAction:V,TouchInput:k,MouseInput:W,PointerEventInput:q,TouchMouseInput:G,SingleTouchInput:L,Recognizer:Z,AttrRecognizer:Q,Tap:re,Pan:$,Swipe:ne,Pinch:te,Rotate:ie,Press:ee,on:d,off:v,each:a,merge:u,extend:h,inherit:c,bindFn:l,prefixed:A}),typeof define==le&&define.amd?define(function(){return se}):"undefined"!=typeof i&&i.exports?i.exports=se:t[n]=se}(window,document,"Hammer")});