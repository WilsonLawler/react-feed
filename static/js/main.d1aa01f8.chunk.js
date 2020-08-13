(this["webpackJsonpcommunity-feed"]=this["webpackJsonpcommunity-feed"]||[]).push([[0],{33:function(n,e,t){n.exports=t(57)},57:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(27),c=t.n(o),i=t(12),u=t(10),s=t(11),l=t(14),f=t(13),d=t(1),p=t(2),v=t(3);function m(){var n=Object(d.a)(["\n  pointer-events: none;\n"]);return m=function(){return n},n}function b(){var n=Object(d.a)(["\n  background-color: orange;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]);return b=function(){return n},n}var h=p.b.div(b()),g=p.b.h1(m()),j=function(){return r.a.createElement(h,null,r.a.createElement(g,null,"Q&A Feed"))},w=t(15),y=t.n(w),x=t(17),O=t(22),k=t.n(O);function E(){var n=Object(d.a)(["\n  margin-left: 5%;\n"]);return E=function(){return n},n}function S(){var n=Object(d.a)(["\n  display: block;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n"]);return S=function(){return n},n}function A(){var n=Object(d.a)(["\n  display: flex;\n  flex-basis: 40%;\n  align-items: center;\n  justify-content: flex-end;\n"]);return A=function(){return n},n}var q=p.b.div(A()),_=p.b.img(S()),C=p.b.h3(E()),W=function(n){var e=n.data;return r.a.createElement(q,null,r.a.createElement(_,{src:e.profile_image}),r.a.createElement(C,null,e.display_name))};function U(){var n=Object(d.a)(["\n  flex-basis: 80%;\n"]);return U=function(){return n},n}function B(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 2%;\n"]);return B=function(){return n},n}function D(){var n=Object(d.a)(["\n  width: 100%;\n  padding-bottom: 10px;\n  text-align: center;\n  border-bottom: 1px solid darkGray;\n"]);return D=function(){return n},n}function F(){var n=Object(d.a)(["\n  text-align: left;\n  padding: 1%;\n  background: lightGray;\n  border-radius: 5px;\n  margin-bottom: 2%;\n"]);return F=function(){return n},n}var I=p.b.div(F()),L=p.b.h2(D()),N=p.b.div(B()),R=p.b.div(U()),M=function(n){var e=n.data;return r.a.createElement(I,null,r.a.createElement(L,null,e.title),r.a.createElement(N,null,r.a.createElement(R,null,"Views: ".concat(e.view_count," | Answers: ").concat(e.answer_count)),r.a.createElement(W,{data:e.owner})))};function P(){var n=Object(d.a)(["\n  padding: 1%;\n  background: lightBlue;\n  color: white;\n  text-decoration: none;\n  border-radius: 5px;\n"]);return P=function(){return n},n}function z(){var n=Object(d.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return z=function(){return n},n}function G(){var n=Object(d.a)(["\n  text-decoration: none;\n  color: inherit;\n"]);return G=function(){return n},n}function J(){var n=Object(d.a)(["\n  text-align: center;\n"]);return J=function(){return n},n}function T(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  margin: 5%;\n"]);return T=function(){return n},n}var H=p.b.div(T()),Q=p.b.div(J()),V=Object(p.b)(i.b)(G()),$=p.b.div(z()),K=Object(p.b)(i.b)(P()),X=function(n){Object(l.a)(t,n);var e=Object(f.a)(t);function t(n){var a;Object(u.a)(this,t),(a=e.call(this,n)).fetchApi=function(){var n=Object(x.a)(y.a.mark((function n(e){var t,r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat("https://api.stackexchange.com/2.2/","questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow").concat(e?"&page=".concat(e):""));case 3:return t=n.sent,n.next=6,t.json();case 6:(r=n.sent)&&a.setState({data:r,loading:!1}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),a.setState({loading:!1,error:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}();var r=k.a.parse(n.location.search);return a.state={data:[],page:r.page?parseInt(r.page):1,loading:!0,error:""},a}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var n=this.state.page;this.fetchApi(n)}},{key:"componentDidUpdate",value:function(n,e){var t=this;if(n.location.search!==this.props.location.search){var a=k.a.parse(this.props.location.search);this.setState({page:parseInt(a.page)},(function(){t.fetchApi(t.state.page)}))}}},{key:"render",value:function(){var n=this.state,e=n.data,t=n.page,a=n.loading,o=n.error,c=this.props.match;return a||o?r.a.createElement(Q,null,a?"Loading...":o):r.a.createElement(H,null,e.items.map((function(n){return r.a.createElement(V,{key:n.question_id,to:"/questions/".concat(n.question_id)},r.a.createElement(M,{data:n}))})),r.a.createElement($,null,t>1&&r.a.createElement(K,{to:"".concat(c.url,"?page=").concat(t-1)},"Previous"),e.has_more&&r.a.createElement(K,{to:"".concat(c.url,"?page=").concat(t+1)},"Next")))}}]),t}(a.Component);function Y(){var n=Object(d.a)(["\n  text-align: center;\n"]);return Y=function(){return n},n}function Z(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  margin: 5%;\n"]);return Z=function(){return n},n}var nn=p.b.div(Z()),en=p.b.div(Y()),tn=function(n){Object(l.a)(t,n);var e=Object(f.a)(t);function t(){var n;return Object(u.a)(this,t),(n=e.call(this)).state={data:[],loading:!0,error:""},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var n=Object(x.a)(y.a.mark((function n(){var e,t,a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props.match,n.prev=1,n.next=4,fetch("".concat("https://api.stackexchange.com/2.2/","questions/").concat(e.params.id,"?site=stackoverflow"));case 4:return t=n.sent,n.next=7,t.json();case 7:(a=n.sent)&&this.setState({data:a,loading:!1}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),this.setState({loading:!1,error:n.t0.message});case 14:case"end":return n.stop()}}),n,this,[[1,11]])})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state,e=n.data,t=n.loading,a=n.error;return t||a?r.a.createElement(en,null,t?"Loading...":a):r.a.createElement(nn,null,r.a.createElement(M,{key:e.items[0].question_id,data:e.items[0]}))}}]),t}(a.Component);function an(){var n=Object(d.a)(["\n  text-align: center;\n"]);return an=function(){return n},n}function rn(){var n=Object(d.a)(['\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n']);return rn=function(){return n},n}var on=Object(p.a)(rn()),cn=p.b.div(an()),un=function(n){Object(l.a)(t,n);var e=Object(f.a)(t);function t(){return Object(u.a)(this,t),e.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(on,null),r.a.createElement(cn,null,r.a.createElement(j,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:X}),r.a.createElement(v.a,{path:"/questions/:id",component:tn}),r.a.createElement(v.a,{path:"/questions",component:X}))))}}]),t}(a.Component),sn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ln(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}c.a.hydrate(r.a.createElement(i.a,{basename:"/react-feed"},r.a.createElement(un,null)),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/react-feed",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-feed","/service-worker.js");sn?(!function(n,e){fetch(n).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):ln(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ln(e,n)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.d1aa01f8.chunk.js.map