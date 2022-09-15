import{getIcon as t}from"../../scripts/scripts.js";function e(){}function n(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(n)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e){t.value=null==e?"":e}let x;function b(t){x=t}const v=[],$=[],y=[],k=[],w=Promise.resolve();let _=!1;function q(t){y.push(t)}const L=new Set;let R=0;function j(){const t=x;do{for(;R<v.length;){const t=v[R];R++,b(t),A(t.$$)}for(b(null),v.length=0,R=0;$.length;)$.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];L.has(e)||(L.add(e),e())}y.length=0}while(v.length);for(;k.length;)k.pop()();_=!1,L.clear(),b(t)}function A(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const E=new Set;function I(t,e){t&&t.i&&(E.delete(t),t.i(e))}function T(t,e,o,a){const{fragment:i,on_mount:u,on_destroy:l,after_update:c}=t.$$;i&&i.m(e,o),a||q((()=>{const e=u.map(n).filter(r);l?l.push(...e):s(e),t.$$.on_mount=[]})),c.forEach(q)}function H(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(v.push(t),_||(_=!0,w.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(t,n,r,a,i,u,c,d=[-1]){const f=x;b(t);const h=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:d,skip_bound:!1,root:n.target||f.$$.root};c&&c(h.root);let m=!1;if(h.ctx=r?r(t,n.props||{},((e,n,...o)=>{const s=o.length?o[0]:n;return h.ctx&&i(h.ctx[e],h.ctx[e]=s)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](s),m&&M(t,e)),n})):[],h.update(),m=!0,s(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(l)}else h.fragment&&h.fragment.c();n.intro&&I(t.$$.fragment),T(t,n.target,n.anchor,n.customElement),j()}b(f)}class S{$destroy(){H(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(t,e,n){const o=t.slice();return o[21]=e[n],o[23]=n,o}function Y(t){let n,o,s,r,a,d,p,g,x,b=t[12](t[23]+1)+"";return{c(){n=c("div"),o=c("div"),s=c("button"),p=f(),m(s,"type","button"),m(s,"aria-label",r=t[23]+1),m(s,"class",a="stars "+t[21].class+" svelte-x1hndu"),s.value=d=t[23]+1,m(o,"class","vertical-line svelte-x1hndu")},m(e,r){u(e,n,r),i(n,o),i(o,s),s.innerHTML=b,i(n,p),g||(x=h(s,"click",t[9]),g=!0)},p:e,d(t){t&&l(n),g=!1,x()}}}function C(t){let n,o,r,a,x,b,v,$,y,k,w,_,q,L,R,j,A,E,I,T,H,M,O,S,C,D,z,B,P,Q,F,G,J=t[12](t[6].length)+"",K=t[0].text+"",U=t[0].img+"",V=t[0].textareaLabel+"",X=[...t[6]],Z=[];for(let e=0;e<X.length;e+=1)Z[e]=Y(W(t,X,e));return{c(){n=c("main"),o=c("div"),r=c("h2"),a=d("Rate our Quick Action"),x=c("span"),b=f(),v=c("form"),$=c("div"),y=c("div"),k=c("span"),w=d(K),_=f(),q=c("div"),L=f(),R=c("input"),j=f(),A=c("div"),E=f(),I=c("div");for(let t=0;t<Z.length;t+=1)Z[t].c();T=f(),H=c("div"),M=c("label"),O=d(V),S=f(),C=c("textarea"),B=f(),P=c("input"),m(x,"class","rating-stars svelte-x1hndu"),m(r,"id","rate-our-quick-action"),m(r,"class","svelte-x1hndu"),m(k,"class","tooltip--text svelte-x1hndu"),m(q,"class","tooltip--image svelte-x1hndu"),m(y,"class","tooltip svelte-x1hndu"),m(R,"type","range"),m(R,"min","1"),m(R,"max",t[6].length),m(R,"step","0.001"),m(R,"aria-labelledby","rate-our-quick-action"),m(R,"class","svelte-x1hndu"),m(A,"class","slider-fill svelte-x1hndu"),m($,"class","slider svelte-x1hndu"),m(I,"class","slider-bottom svelte-x1hndu"),m(M,"for","comment"),m(M,"class","svelte-x1hndu"),m(C,"id","comment"),m(C,"name","comment"),m(C,"rows","5"),m(C,"placeholder",D=t[0].textareaInside),C.required=z=t[0].feedbackRequired,m(C,"class","svelte-x1hndu"),m(P,"type","submit"),P.value="Submit rating",m(P,"class","svelte-x1hndu"),m(H,"class","slider-comment svelte-x1hndu"),m(v,"class","svelte-x1hndu"),m(o,"class",Q="ratings block "+(t[1]&&t[0].class)+" svelte-x1hndu"),m(n,"class","svelte-x1hndu")},m(e,s){u(e,n,s),i(n,o),i(o,r),i(r,a),i(r,x),x.innerHTML=J,i(o,b),i(o,v),i(v,$),i($,y),i(y,k),i(k,w),i(y,_),i(y,q),q.innerHTML=U,t[13](y),i($,L),i($,R),t[14](R),g(R,t[2]),i($,j),i($,A),t[16](A),i(v,E),i(v,I);for(let t=0;t<Z.length;t+=1)Z[t].m(I,null);i(v,T),i(v,H),i(H,M),i(M,O),i(H,S),i(H,C),i(H,B),i(H,P),F||(G=[h(R,"change",t[15]),h(R,"input",t[15]),h(R,"change",t[8]),h(R,"input",t[7]),h(R,"mousedown",t[10]),h(R,"touchstart",t[10],{passive:!0}),h(R,"mouseup",t[11]),h(R,"touchend",t[11],{passive:!0}),h(P,"submit",N)],F=!0)},p(t,[e]){if(1&e&&K!==(K=t[0].text+"")&&p(w,K),1&e&&U!==(U=t[0].img+"")&&(q.innerHTML=U),4&e&&g(R,t[2]),4672&e){let n;for(X=[...t[6]],n=0;n<X.length;n+=1){const o=W(t,X,n);Z[n]?Z[n].p(o,e):(Z[n]=Y(o),Z[n].c(),Z[n].m(I,null))}for(;n<Z.length;n+=1)Z[n].d(1);Z.length=X.length}1&e&&V!==(V=t[0].textareaLabel+"")&&p(O,V),1&e&&D!==(D=t[0].textareaInside)&&m(C,"placeholder",D),1&e&&z!==(z=t[0].feedbackRequired)&&(C.required=z),3&e&&Q!==(Q="ratings block "+(t[1]&&t[0].class)+" svelte-x1hndu")&&m(o,"class",Q)},i:e,o:e,d(e){e&&l(n),t[13](null),t[14](null),t[16](null),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(Z,e),F=!1,s(G)}}}function N(t){t.preventDefault(),this.submitted=!0}function D(e,n,o){function s(e){return t(e)}const r=[{class:"one-star",img:s("emoji-angry-face"),text:"Disappointing",textareaLabel:"We're sorry to hear that. What went wrong?",textareaInside:"Your feedback (Required)",feedbackRequired:!0},{class:"two-stars",img:s("emoji-thinking-face"),text:"Insufficient",textareaLabel:"We value your feedback. How can we improve?",textareaInside:"Your feedback (Required)",feedbackRequired:!0},{class:"three-stars",img:s("emoji-upside-down-face"),text:"Satisfied",textareaLabel:"Satisfied is good, but what would make us great?",textareaInside:"Your feedback (Optional)",feedbackRequired:!1},{class:"four-stars",img:s("emoji-smiling-face"),text:"Helpful",textareaLabel:"Was there more we could do to be better?",textareaInside:"Your feedback (Optional)",feedbackRequired:!1},{class:"five-stars",img:s("emoji-star-struck"),text:"Amazing",textareaLabel:"That's great. Could you tell us what you loved?",textareaInside:"Your feedback (Optional)",feedbackRequired:!1}];let a,i,u,l=r.at(4),c=s("star"),d=!1,f=4;function h(t){const e=Math.round(t);return o(1,d=!0),o(0,l=r.at(e-1)),o(1,d=!0),e}function m(t){const e=a,n=u,o=i,s=(t-e.getAttribute("min"))/(e.getAttribute("max")-e.getAttribute("min")),r=60*(s-.25)*-1-.1,l=s*e.offsetWidth-15+r;n.style.left=`${l}px`,o.style.width=`${l+30}px`}return[l,d,f,a,i,u,r,function(t){const{value:e}=t.target;h(e),m(e)},function(t){const e=h(t.target.value);o(2,f=e),m(e)},function(){const{value:t}=this;h(t),m(t)},function(){o(5,u.style.transition="none",u),o(4,i.style.transition="none",i)},function(){o(5,u.style.transition="left .3s, right .3s",u),o(4,i.style.transition="width .3s",i)},function(t){let e="";for(let n=0;n<t;n++)e+=c;return e},function(t){$[t?"unshift":"push"]((()=>{u=t,o(5,u)}))},function(t){$[t?"unshift":"push"]((()=>{a=t,o(3,a)}))},function(){var t;t=this.value,f=""===t?null:+t,o(2,f)},function(t){$[t?"unshift":"push"]((()=>{i=t,o(4,i)}))}]}class z extends S{constructor(t){super(),O(this,t,D,C,a,{})}}function B(t){let n,o;return n=new z({}),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,e){T(n,t,e),o=!0},p:e,i(t){o||(I(n.$$.fragment,t),o=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(E.has(t))return;E.add(t),(void 0).c.push((()=>{E.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(n.$$.fragment,t),o=!1},d(t){H(n,t)}}}class P extends S{constructor(t){super(),O(this,t,null,B,a,{})}}function Q(t){const e=document.createElement("div");new P({target:e}),t.innerHTML="",t.appendChild(e)}export{Q as default};
//# sourceMappingURL=lit-rewrite.js.map
