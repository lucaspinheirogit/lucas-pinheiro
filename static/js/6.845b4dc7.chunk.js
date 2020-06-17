(this["webpackJsonplucas-pinheiro"]=this["webpackJsonplucas-pinheiro"]||[]).push([[6],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var i=n(0),o=n.n(i),r=n(77),a=n.n(r),s=n(78),l=n(6),c=n(1),u=n(2),d=n(5);function p(){var e=Object(c.a)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  border: 1px solid #7510f7;\n  background: transparent;\n  color: white;\n  padding: 7px 20px;\n  border-radius: 25px;\n  text-decoration: none;\n  transition: 0.5s ease-in-out;\n  font-family: 'Manrope', sans-serif;\n  font-size: 18px;\n\n  &:hover {\n    background: #7510f7;\n  }\n"]);return p=function(){return e},e}function f(){var e=Object(c.a)(["\n  color: white;\n  font-size: 14px;\n  margin-bottom: 0.5em;\n  width: 80%;\n\n  @media "," {\n    font-size: 16px;\n  }\n"]);return f=function(){return e},e}function h(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #141c31;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: 0.65s ease-in-out;\n\n  &:hover {\n    opacity: 1;\n  }\n"]);return h=function(){return e},e}function m(){var e=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  transition: 0.5s ease-in-out;\n"]);return m=function(){return e},e}function v(){var e=Object(c.a)(["\n  position: relative;\n  overflow: hidden;\n  border-radius: 1em;\n\n  &:hover {\n    img {\n      transform: scale(1.5);\n    }\n  }\n"]);return v=function(){return e},e}function y(){var e=Object(c.a)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, 300px);\n  grid-template-rows: repeat(auto-fit, 150px);\n  grid-gap: 1em;\n  padding: 2em 0;\n  margin: auto 0;\n\n  @media "," {\n    grid-template-columns: repeat(auto-fit, 350px);\n    grid-template-rows: repeat(auto-fit, 200px);\n    padding: 5em 0;\n  }\n"]);return y=function(){return e},e}var b=u.b.div(y(),d.b.md),w=u.b.div(v()),g=u.b.img(m()),E=u.b.div(h()),O=u.b.h2(f(),d.b.md),k=u.b.a(p()),x=n(11),R=[{key:"reactNativePerformance",imgSrc:x.a,url:"https://medium.com/@lucas_pinheiro/como-melhorar-a-performance-no-react-native-e0081f2245b"},{key:"communityContribuition",imgSrc:x.b,url:"https://medium.com/@lucas_pinheiro/contribuindo-para-a-comunidade-f5fdbfcc448"},{key:"reactI18N",imgSrc:x.c,url:"https://medium.com/@lucas_pinheiro/como-adicionar-internacionaliza%C3%A7%C3%A3o-i18n-na-sua-aplica%C3%A7%C3%A3o-react-a1ac4aea109d?sk=c312310e15967f690b713adbc53e08bc"}],T=function(){return o.a.createElement(s.a,{id:"ARTICLES",title:o.a.createElement(l.a,{path:"articlesSection.title"})},o.a.createElement(a.a,null,o.a.createElement(b,null,R.map((function(e){var t=e.key,n=e.imgSrc,i=e.url;return o.a.createElement(w,{key:t},o.a.createElement(g,{alt:t,src:n}),o.a.createElement(E,null,o.a.createElement(O,null,o.a.createElement(l.a,{path:"articlesSection.".concat(t)})),o.a.createElement(k,{target:"_blank",href:i,rel:"noopener noreferrer"},"Ver mais")))})))))}},71:function(e,t,n){e.exports=n(73)()},72:function(e,t,n){"use strict";function i(e){try{return h.insertRule(e,h.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(){u||(t.globalHide=u=!0,window.removeEventListener("scroll",o,!0),i("."+r+" { opacity: 0; }"),window.removeEventListener("orientationchange",o,!0),window.document.removeEventListener("visibilitychange",o))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,o){var r=Math.log(i),a=(Math.log(o)-r)/(n-t);return Math.exp(r+a*(e-t))},t.animation=function(e){if(!h)return"";var t="@keyframes "+(m+p)+"{"+e+"}",n=f[e];return n?""+m+n:(h.insertRule(t,h.cssRules.length),f[e]=p,""+m+p++)},t.hideAll=o,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var r=t.namespace="react-reveal",a=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=a=!1},u=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),d=(t.ie10=!1,t.collapseend=void 0),p=1,f={},h=!1,m=r+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=a=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),a&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=a=!1),a&&window.setTimeout(c,1500),s||(t.collapseend=d=document.createEvent("Event"),d.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(h=v.sheet,window.addEventListener("scroll",o,!0),window.addEventListener("orientationchange",o,!0),window.document.addEventListener("visibilitychange",o))}},73:function(e,t,n){"use strict";var i=n(74);function o(){}function r(){}r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,a){if(a!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n,n}},74:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},75:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),r.default.Children.count(i)<2?r.default.createElement(a.default,o({},e,{inEffect:t,outEffect:n,children:i})):(i=r.default.Children.map(i,(function(i){return r.default.createElement(a.default,o({},e,{inEffect:t,outEffect:n,children:i}))})),"Fragment"in r.default?r.default.createElement(r.default.Fragment,null,i):r.default.createElement("span",null,i))};var r=i(n(0)),a=i(n(76));e.exports=t.default},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(0),c=(i=l)&&i.__esModule?i:{default:i},u=n(71),d=n(72),p=(0,u.shape)({make:u.func,duration:u.number.isRequired,delay:u.number.isRequired,forever:u.bool,count:u.number.isRequired,style:u.object.isRequired,reverse:u.bool}),f={collapse:u.bool,collapseEl:u.element,cascade:u.bool,wait:u.number,force:u.bool,disabled:u.bool,appear:u.bool,enter:u.bool,exit:u.bool,fraction:u.number,refProp:u.string,innerRef:u.func,onReveal:u.func,unmountOnExit:u.bool,mountOnEnter:u.bool,inEffect:p.isRequired,outEffect:(0,u.oneOfType)([p,(0,u.oneOf)([!1])]).isRequired,ssrReveal:u.bool,collapseOnly:u.bool,ssrFadeout:u.bool},h={transitionGroup:u.object},m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,d.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?a({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!d.observerMode&&this.props.collapse&&window.document.dispatchEvent(d.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,o=n.forever,r=n.count,a=n.delay,s=n.duration;if(!o){this.animationEndTimeout=window.setTimeout((function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))}),a+(s+(t?s:0)*r))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),o=this.isOn?this.getDimensionValue():0,r=void 0,a=void 0;if(t.collapseOnly)r=n.duration/3,a=n.delay;else{var s=i>>2,l=s>>1;r=s,a=n.delay+(this.isOn?0:i-s-l),e.style.animationDuration=i-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:o,transition:"height "+r+"ms ease "+a+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:a({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(o,e,n):o),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),d.ssr&&(0,d.disableSsr)()}},{key:"handleObserve",value:function(e,t){r(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&d.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];d.globalHide||(0,d.hideAll)(),this&&this.el&&(e||(e=this.props),d.ssr&&(0,d.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):d.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||d.ssr&&!d.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):d.ssr&&(d.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],r=i.duration,s=i.reverse,l=n.length,u=2*r;this.props.collapse&&(u=parseInt(this.state.style.animationDuration,10),r=u/2);var p=s?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":o(e))&&e?c.default.cloneElement(e,{style:a({},e.props.style,t.state.style,{animationDuration:Math.round((0,d.cascade)(s?p--:p++,0,l,r,u))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,o=i.style,r=i.className,s=i.children,l=this.props.disabled?r:(this.props.outEffect?d.namespace:"")+(this.state.className?" "+this.state.className:"")+(r?" "+r:"")||void 0,u=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),u=a({},o,{opacity:1})):u=this.props.disabled?o:a({},o,this.state.style);var p=a({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:u},this.props.refProp,this.saveRef)),f=c.default.cloneElement(t,p,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:a({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:f}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:f}):f}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,d.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),o=Math.min(n,window.innerHeight)*(d.globalHide?e.fraction:0);return i>o-window.innerHeight&&i<n-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){d.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!d.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);m.propTypes=f,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=h,m.displayName="RevealBase",t.default=m,e.exports=t.default},77:function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function o(e,t){var n=t.left,i=t.right,o=t.up,r=t.down,a=t.top,s=t.bottom,l=t.mirror,c=t.opposite,d=(n?1:0)|(i?2:0)|(a||r?4:0)|(s||o?8:0)|(l?16:0)|(c?32:0)|(e?64:0);if(p.hasOwnProperty(d))return p[d];if(!l!=!(e&&c)){var f=[i,n,s,a,r,o];n=f[0],i=f[1],a=f[2],s=f[3],o=f[4],r=f[5]}var h=n||i,m=a||s||o||r,v=void 0;return h||m?e?v="40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(h?(n?"":"-")+"42px":"0")+", "+(m?(r||a?"-":"")+"60px":"0")+", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d("+(h?(i?"":"-")+"2000px":"0")+", "+(m?(o||s?"":"-")+"2000px":"0")+", 0);\n          transform-origin: "+(m?"center bottom":(n?"left":"right")+" center")+";\n        }":v="from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d("+(h?(n?"-":"")+"1000px":"0")+", "+(m?(r||a?"-":"")+"1000px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(h?(i?"-":"")+"10px":"0")+", "+(m?(o||s?"-":"")+"60px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }":v=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",p[d]=(0,u.animation)(v),p[d]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,t=e.children,n=(e.out,e.forever),r=e.timeout,a=e.duration,s=void 0===a?u.defaults.duration:a,l=e.delay,d=void 0===l?u.defaults.delay:l,p=e.count,f=void 0===p?u.defaults.count:p,h=i(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===r?s:r,delay:d,forever:n,count:f,style:{animationFillMode:"both"},reverse:h.left};return(0,c.default)(h,m,m,t)}Object.defineProperty(t,"__esModule",{value:!0});var a,s=n(71),l=n(75),c=(a=l)&&a.__esModule?a:{default:a},u=n(72),d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},p={};r.propTypes=d,t.default=r,e.exports=t.default},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var i=n(0),o=n.n(i),r=n(1),a=n(2),s=n(5);function l(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  background: #000f30;\n  margin-bottom: auto;\n"]);return l=function(){return e},e}function c(){var e=Object(r.a)(["\n  font-size: 32px;\n  margin-bottom: auto;\n  font-family: Minimal;\n  background-image: linear-gradient(to right, #000f30, #0d265c 50%, #000f30 100%);\n  background-size: 100%;\n  background-position: 50% 100%;\n  background-repeat: no-repeat;\n\n  @media "," {\n    font-size: 40px;\n  }\n"]);return c=function(){return e},e}function u(){var e=Object(r.a)(["\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: white;\n  text-align: center;\n  padding: 2em 1em;\n"]);return u=function(){return e},e}function d(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  color: white;\n  position: relative;\n  background-color: #000f30;\n"]);return d=function(){return e},e}var p=a.b.section(d()),f=a.b.div(u()),h=a.b.h2(c(),s.b.md),m=a.b.div(l()),v=function(e){var t=e.id,n=e.title,i=e.children;return o.a.createElement(p,{id:t},o.a.createElement(f,null,o.a.createElement(h,null,n),o.a.createElement(m,null,i)))}}}]);
//# sourceMappingURL=6.845b4dc7.chunk.js.map