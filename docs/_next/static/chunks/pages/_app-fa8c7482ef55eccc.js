(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5326)}])},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,u=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(c){u=!0,o=c}finally{try{l||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,l=(a=n(7294))&&a.__esModule?a:{default:a},u=n(6273),c=n(387),i=n(7190);var s={};function f(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),a=l.default.useMemo((function(){var t=o(u.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?u.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,p=a.as,h=e.children,m=e.replace,y=e.shallow,v=e.scroll,g=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var b=(t=l.default.Children.only(h))&&"object"===typeof t&&t.ref,w=o(i.useIntersection({rootMargin:"200px"}),2),j=w[0],k=w[1],E=l.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);l.default.useEffect((function(){var e=k&&n&&u.isLocalURL(d),t="undefined"!==typeof g?g:r&&r.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(r,d,p,{locale:t})}),[p,d,k,g,n,r]);var S={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:l}))}(e,r,d,p,m,y,v,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var x="undefined"!==typeof g?g:r&&r.locale,A=r&&r.isLocaleDomain&&u.getDomainLocale(p,x,r&&r.locales,r&&r.domainLocales);S.href=A||u.addBasePath(u.addLocale(p,x,r&&r.defaultLocale))}return l.default.cloneElement(t,S)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,u=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(c){u=!0,o=c}finally{try{l||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,r=a.useRef(),i=o(a.useState(!1),2),s=i[0],f=i[1],d=a.useCallback((function(e){r.current&&(r.current(),r.current=void 0),n||s||e&&e.tagName&&(r.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,l=r.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return a.useEffect((function(){if(!u&&!s){var e=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[s]),[d,s]};var a=n(7294),l=n(9311),u="undefined"!==typeof IntersectionObserver;var c=new Map},5326:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),o=n(7294),a=n(1163),l=n(619),u=n(1664),c=n(6779),i=n(5574);n(4481);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,u=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(c){u=!0,o=c}finally{try{l||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(){var e=f((0,l.Z)("/sounds/switch-on.mp3"),1)[0],t=f((0,l.Z)("/sounds/switch-off.mp3"),1)[0];return(0,r.jsx)("header",{className:"app-header",children:(0,r.jsx)("div",{className:"app-container",children:(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)(u.default,{href:"/",passHref:!0,children:(0,r.jsx)("h2",{className:"logo",children:"Dev blog"})}),(0,r.jsx)("div",{className:"content",children:(0,r.jsx)("div",{className:"darkMode",onClick:function(){return function(){var n=(0,i.Y)();localStorage.theme=n?"light":"dark",document.documentElement.classList=localStorage.theme,(0,c.H6)(!n),n?e():t()}()},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})})})})]})})})}function p(){var e=(new Date).getFullYear();return(0,r.jsx)("footer",{className:"app-footer",children:(0,r.jsx)("div",{className:"app-container",children:(0,r.jsxs)("div",{className:"content",children:[(0,r.jsxs)("div",{className:"block mt-6 links",children:[(0,r.jsx)(u.default,{href:"/",passHref:!0,children:(0,r.jsx)("h2",{children:"\ud83c\udfe0 Home"})}),(0,r.jsx)(u.default,{href:"/miscellaneous/newsletter",passHref:!0,children:(0,r.jsx)("h2",{children:"\ud83d\udcf0 Newsletter"})}),(0,r.jsx)(u.default,{href:"/miscellaneous/privacy-policy",passHref:!0,children:(0,r.jsx)("h2",{children:"\ud83d\udd0f Privacy"})}),(0,r.jsx)(u.default,{href:"/miscellaneous/contact",passHref:!0,children:(0,r.jsx)("h2",{children:"\ud83d\udcec Contact"})})]}),(0,r.jsxs)("p",{className:"copyrights",children:["\xa9 ",e," Dan Fleser. All Rights Reserved"]})]})})})}n(7727);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}function y(e){var t=e.Component,n=e.pageProps,l=(0,a.useRouter)();return(0,o.useEffect)((function(){var e=(0,i.Y)();e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),(0,c.H6)(e);var t=function(e){!function(e){window.gtag("config","G-7S4HKQEZW9",{page_path:e})}(e)};return l.events.on("routeChangeComplete",t),function(){l.events.off("routeChangeComplete",t)}}),[l.events]),(0,r.jsxs)("div",{className:"app",children:[(0,r.jsx)(d,{}),(0,r.jsx)("main",{children:(0,r.jsx)("div",{className:"app-container",children:(0,r.jsx)(t,m({},n))})}),(0,r.jsx)(p,{})]})}},6779:function(e,t,n){"use strict";n.d(t,{yS:function(){return r},rv:function(){return o},H6:function(){return a}});var r="post-comments";function o(e,t){var n=document.createElement("script");n.setAttribute("src","https://utteranc.es/client.js"),n.setAttribute("crossorigin","anonymous"),n.setAttribute("async",!0),n.setAttribute("repo","danfleser/blog"),n.setAttribute("issue-term","title"),n.setAttribute("theme",t?"github-dark":"github-light"),e.appendChild(n)}function a(e){var t=document.getElementById(r);null!==t&&(t.innerHTML="",o(t,e))}},4481:function(e,t,n){"use strict";n.d(t,{_0:function(){return u},N8:function(){return c},dd:function(){return i}});var r=n(225),o=[];function a(){o=[],document.querySelectorAll("[data-tag]").forEach((function(e){e.classList.remove("selected-tag")})),document.querySelectorAll("[data-tags]").forEach((function(e){e.style.display="block"}))}function l(){document.querySelectorAll("[data-name]").forEach((function(e){e.style.display="block"})),document.getElementById(r.Np).style.display="none"}function u(e){if(a(),l(),e){var t=document.querySelectorAll("[data-name]"),n=t.length;t.forEach((function(t){t.dataset.name.toLowerCase().includes(e)||(t.style.display="none",n--)})),n||(document.getElementById(r.Np).style.display="block")}}function c(e,t){i().value="",l(),t(),o.find((function(t){return t===e}))?(o=o.filter((function(t){return t!==e})),document.querySelectorAll("[data-tag]").forEach((function(t){t.dataset.tag.includes(e)&&t.classList.remove("selected-tag")}))):(o.push(e),document.querySelectorAll("[data-tag]").forEach((function(t){t.dataset.tag.includes(e)&&t.classList.add("selected-tag")}))),o.length?document.querySelectorAll("[data-tags]").forEach((function(e){o.find((function(t){return e.dataset.tags.includes(t)}))?e.style.display="block":e.style.display="none"})):a()}function i(){return document.querySelector('input[type="search"]')}},225:function(e,t,n){"use strict";n.d(t,{Np:function(){return l},L0:function(){return a},tC:function(){return o}});var r=JSON.parse('{"F":{"title":"Development blog","category":"Software developers tech news","author":{"name":"Dan Fleser","email":"danfleser.dev@gmail.com","summary":"I am a web developer with 8+ years of experience focused on working with the latest technologies, recently switched from 8-5 job to freelancing. Helping companies around the world design and implement top-of-the-line scalable enterprise solutions. Follow me in my journey.","facebookPageId":"fleser.dan","twitterId":"@danfleser"},"description":"Dan Fleser development blog","keywords":"webdevelopment, softwaredeveloper, react, angular","url":"https://danfleser.com/","language":"en-US"}}');function o(){return r.F}function a(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}var l="no-results"},5574:function(e,t,n){"use strict";function r(){return"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches}n.d(t,{Y:function(){return r}})},7727:function(){},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},619:function(e,t,n){"use strict";var r=n(7294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.Z=function(e,t){void 0===t&&(t={});var a,l=t,u=l.volume,c=void 0===u?1:u,i=l.playbackRate,s=void 0===i?1:i,f=l.soundEnabled,d=void 0===f||f,p=l.interrupt,h=void 0!==p&&p,m=l.onload,y=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(l,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),v=r.useRef(null),g=r.useRef(!1),b=r.useState(null),w=b[0],j=b[1],k=r.useState(null),E=k[0],S=k[1],x=function(){"function"===typeof m&&m.call(this),g.current&&j(1e3*this.duration()),S(this)};a=function(){return n.e(766).then(n.t.bind(n,1766,23)).then((function(t){var n;g.current||(v.current=null!==(n=t.Howl)&&void 0!==n?n:t.default.Howl,g.current=!0,new v.current(o({src:Array.isArray(e)?e:[e],volume:c,rate:s,onload:x},y)))})),function(){g.current=!1}},(0,r.useEffect)(a,[]),r.useEffect((function(){v.current&&E&&S(new v.current(o({src:Array.isArray(e)?e:[e],volume:c,onload:x},y)))}),[JSON.stringify(e)]),r.useEffect((function(){E&&(E.volume(c),E.rate(s))}),[c,s]);var A=r.useCallback((function(e){"undefined"===typeof e&&(e={}),E&&(d||e.forceSoundEnabled)&&(h&&E.stop(),e.playbackRate&&E.rate(e.playbackRate),E.play(e.id))}),[E,d,h]),N=r.useCallback((function(e){E&&E.stop(e)}),[E]),C=r.useCallback((function(e){E&&E.pause(e)}),[E]);return[A,{sound:E,stop:N,pause:C,duration:w}]}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);