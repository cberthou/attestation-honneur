(this["webpackJsonpattestation-honneur"]=this["webpackJsonpattestation-honneur"]||[]).push([[0],{11:function(e,t,n){e.exports=n.p+"static/media/checkbox-checked.336023cc.svg"},12:function(e,t,n){e.exports=n.p+"static/media/checkbox-empty.73962df0.svg"},19:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(9),u=n.n(a),o=(n(24),n(8),n(4)),i=n.n(o),l=n(10),s=n(1),d=n(3),m=n(2),f=n(11),p=n.n(f),v=n(12),b=n.n(v);function h(){var e=Object(s.a)(["\n    display: inline-block;\n    height: 20px;\n    width: 20px;\n    background-image: url(",");\n    background-size: cover;\n    cursor: pointer;\n    margin-bottom: -3px;\n    margin-right: 10px;\n"]);return h=function(){return e},e}function g(){var e=Object(s.a)(["\n    line-height: 20px;\n"]);return g=function(){return e},e}function E(){var e=Object(s.a)(["\n    display: none;\n"]);return E=function(){return e},e}function O(){var e=Object(s.a)(["\n    margin-top: 5px;\n    margin-bottom: 5px;\n"]);return O=function(){return e},e}var j=m.a.div(O()),k=m.a.input(E()),x=m.a.label(g()),C=m.a.div(h(),(function(e){return e.checked?p.a:b.a})),w=function(e){var t=e.children,n=e.id,a=Object(r.useState)(!1),u=Object(d.a)(a,2),o=u[0],i=u[1],l=Object(r.useCallback)((function(e){i(e.target.checked)}),[i]);return c.a.createElement(j,null,c.a.createElement(k,{id:n,type:"checkbox",checked:o,onChange:l}),c.a.createElement(x,{htmlFor:n},c.a.createElement(C,{checked:o}),t))};function y(){var e=Object(s.a)(["\n    cursor: pointer;\n"]);return y=function(){return e},e}var R=m.a.span(y()),S=function(e){var t=e.id,n=e.placeholder,a=Object(r.useState)(""),u=Object(d.a)(a,2),o=u[0],i=u[1],l=Object(r.useState)(!1),s=Object(d.a)(l,2),m=s[0],f=s[1],p=Object(r.useCallback)((function(e){return i(e.target.value)}),[i]),v=Object(r.useCallback)((function(){return f(!1)}),[f]),b=Object(r.useCallback)((function(){return f(!0)}),[f]);return Object(r.useEffect)((function(){var e=localStorage.getItem("".concat("attestation",":").concat(t));e&&i(e)}),[t]),Object(r.useEffect)((function(){localStorage.setItem("".concat("attestation",":").concat(t),o)}),[o,t]),m?c.a.createElement("input",{value:o,onChange:p,onBlur:v}):c.a.createElement(R,{onClick:b},o||n)},Y=n(6),X=n.n(Y);function D(){var e=Object(s.a)(["\n    border: 1px solid black;\n    overscroll-behavior: contain;\n"]);return D=function(){return e},e}function A(){var e=Object(s.a)(["\n    cursor: pointer;\n"]);return A=function(){return e},e}var T=m.a.img(A()),B=m.a.canvas(D()),I=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],u=Object(r.useState)(!1),o=Object(d.a)(u,2),i=o[0],l=o[1],s=Object(r.useRef)({width:0,height:0,flag:!1,prevX:0,currX:0,prevY:0,currY:0,dotFlag:!1}),m=Object(r.useRef)(),f=Object(r.useRef)();Object(r.useEffect)((function(){var e=m.current;m.current&&(f.current=e.getContext("2d"),s.current.width=m.current.width,s.current.height=m.current.height)}),[m,f,s,i]),Object(r.useEffect)((function(){var e=localStorage.getItem("attestation-signature");e?a(e):l(!0)}),[a,l]),Object(r.useEffect)((function(){localStorage.getItem(n)!==n&&localStorage.setItem("attestation-signature",n)}),[n]);var p=Object(r.useCallback)((function(){f.current.beginPath(),f.current.moveTo(s.current.prevX,s.current.prevY),f.current.lineTo(s.current.currX,s.current.currY),f.current.strokeStyle="black",f.current.lineWidth=2,f.current.stroke(),f.current.closePath()}),[f,s]),v=Object(r.useCallback)((function(e,t){var n=t.touches&&t.touches[0]?t.touches[0].clientX:t.clientX,r=t.touches&&t.touches[0]?t.touches[0].clientY:t.clientY;"down"===e&&(s.current.prevX=s.current.currX,s.current.prevY=s.current.currY,s.current.currX=n-m.current.getBoundingClientRect().left,s.current.currY=r-m.current.getBoundingClientRect().top,console.log(t.clientY),s.current.flag=!0,s.current.dotFlag=!0,s.current.dotFlag&&(f.current.beginPath(),f.current.fillStyle="black",f.current.fillRect(s.current.currX,s.current.currY,2,2),f.current.closePath(),s.current.dotFlag=!1)),"up"!==e&&"out"!==e||(s.current.flag=!1),"move"===e&&s.current.flag&&(s.current.prevX=s.current.currX,s.current.prevY=s.current.currY,s.current.currX=n-m.current.getBoundingClientRect().left,s.current.currY=r-m.current.getBoundingClientRect().top,p())}),[p,s,m,f]),b=Object(r.useCallback)((function(e){return e.preventDefault(),v("move",e),e.returnValue=!1,!1}),[v]),h=Object(r.useCallback)((function(e){return e.preventDefault(),v("down",e),e.returnValue=!1,!1}),[v]),g=Object(r.useCallback)((function(e){return e.preventDefault(),v("up",e),e.returnValue=!1,!1}),[v]),E=Object(r.useCallback)((function(e){return e.preventDefault(),v("out",e),e.returnValue=!1,!1}),[v]);Object(r.useEffect)((function(){var e=m.current;if(e){var t=function(t,n){e.addEventListener(t,n,{passive:!1})},n=function(t,n){e.removeEventListener(t,n)};return t("mousemove",b),t("touchmove",b),t("mousedown",h),t("touchstart",h),t("mouseup",g),t("touchend",g),t("mouseout",E),function(){n("mousemove",b),n("touchmove",b),n("mousedown",h),n("touchstart",h),n("mouseup",g),n("touchend",g),n("mouseout",E)}}}),[b,h,g,E,m,i]);var O=Object(r.useCallback)((function(){f.current.clearRect(0,0,s.current.width,s.current.height)}),[f,s]),j=Object(r.useCallback)((function(){var e=m.current.toDataURL();a(e),l(!1)}),[m,a,l]),k=Object(r.useCallback)((function(){l(!0)}),[l]);return c.a.createElement("div",{onTouchMove:function(e){console.log(e),e.preventDefault()}},i?c.a.createElement(c.a.Fragment,null,c.a.createElement(B,{ref:m,width:300,height:300}),c.a.createElement("div",null,c.a.createElement("input",{type:"button",onClick:O,value:"clear"}),c.a.createElement("input",{type:"button",onClick:j,value:"save"}))):c.a.createElement(T,{src:n,onClick:k}))},F=n(17),L=n.n(F);function M(){var e=Object(s.a)(["\n  text-align: right;\n  margin-top: 30px;\n"]);return M=function(){return e},e}function P(){var e=Object(s.a)(["\n  padding-top: 30px;\n  padding-bottom: 20px;\n"]);return P=function(){return e},e}function J(){var e=Object(s.a)(["\n  padding-top: 40px;\n  padding-bottom: 20px\n"]);return J=function(){return e},e}function q(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 40px;\n  box-sizing: border-box;\n  width: 800px;\n"]);return q=function(){return e},e}function N(){var e=Object(s.a)(["\n  text-align: center\n"]);return N=function(){return e},e}function V(){var e=Object(s.a)(["\n  text-align: center\n"]);return V=function(){return e},e}var U={textAlign:"center"},W={textAlign:"center"},z=m.a.h2(V()),G=m.a.div(N()),$=m.a.div(q()),H=m.a.div(J()),K=m.a.div(P()),Q=m.a.div(M()),Z=function(){var e=Object(r.useRef)(),t=Object(r.useCallback)(Object(l.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L()(e.current);case 2:t.sent.toBlob((function(e){var t=document.createElement("a");t.download="attestation-".concat(X()(Date.now(),"dd/mm/yyyy"),".png"),t.href=URL.createObjectURL(e),t.click()}));case 4:case"end":return t.stop()}}),t)}))),[e]);return c.a.createElement("div",null,c.a.createElement($,{ref:e},c.a.createElement(z,{style:U},"ATTESTATION DE D\xc9PLACEMENT D\xc9ROGATOIRE"),c.a.createElement(G,{style:W},"En application de l\u2019article 1er du d\xe9cret du 16 mars 2020 portant r\xe9glementation des d\xe9placements dans le cadre de la lutte contre la propagation du virus Covid-19 :"),c.a.createElement(H,null,c.a.createElement("div",null,"Je soussign\xe9(e)"),c.a.createElement("div",null,"Mme / M. : ",c.a.createElement(S,{id:"name",placeholder:"Pr\xe9nom Nom"})),c.a.createElement("div",null,"N\xe9(e) le : ",c.a.createElement(S,{id:"birthdate",placeholder:"JJ/MM/AAAA"})),c.a.createElement("div",null,"Demeurant : ",c.a.createElement(S,{id:"adress",placeholder:"Adresse"}))),c.a.createElement("div",null,"certifie que mon d\xe9placement est li\xe9 au motif suivant (cocher la case) autoris\xe9 par l\u2019article 1er du d\xe9cret du 16 mars 2020 portant r\xe9glementation des d\xe9placements dans le cadre de la lutte contre la propagation du virus Covid-19 :"),c.a.createElement(K,null,c.a.createElement(w,{id:"work-checkbox"},"d\xe9placements entre le domicile et le lieu d\u2019exercice de l\u2019activit\xe9 professionnelle, lorsqu\u2019ils sont indispensables \xe0 l\u2019exercice d\u2019activit\xe9s ne pouvant \xeatre organis\xe9es sous forme de t\xe9l\xe9travail (sur justificatif permanent) ou d\xe9placements professionnels ne pouvant \xeatre diff\xe9r\xe9s ;"),c.a.createElement(w,{id:"shop-checkbox"},"d\xe9placements pour effectuer des achats de premi\xe8re n\xe9cessit\xe9 dans des \xe9tablissements autoris\xe9s (liste sur gouvernement.fr);"),c.a.createElement(w,{id:"health-checkbox"},"d\xe9placements pour motif de sant\xe9;"),c.a.createElement(w,{id:"family-checkbox"},"d\xe9placements pour motif familial imp\xe9rieux, pour l\u2019assistance aux personnes vuln\xe9rables ou la garde d\u2019enfants ;"),c.a.createElement(w,{id:"short-checkbox"},"d\xe9placements brefs, \xe0 proximit\xe9 du domicile, li\xe9s \xe0 l\u2019activit\xe9 physique individuelle des personnes, \xe0 l\u2019exclusion de toute pratique sportive collective, et aux besoins des animaux de compagnie.")),c.a.createElement(Q,null,c.a.createElement("div",null,"Fait \xe0 ",c.a.createElement("span",null,"Bordeaux"),", le ",c.a.createElement("span",null,X()(Date.now(),"dd/mm/yyyy"))),c.a.createElement("div",null,"Signature :",c.a.createElement(I,null)))),c.a.createElement("button",{onClick:t},"T\xe9l\xe9charger"))};var _=function(){return c.a.createElement("div",null,c.a.createElement(Z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.a86b3948.chunk.js.map