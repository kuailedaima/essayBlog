import{u as U,f as se,g as te,h as Y,i as ae,P as le,t as re,j as ue,k as L,l as w,m as ie,w as M,n as t,p as oe,R as O,q as ne,s as ce,v as ve,C as pe,x as de,y as he,z as ye,A as me,B as ge,D as fe,E as He,F as T,G as $,H as Ee,I as D,J as Re}from"./app-_kPj5gm0.js";const ke=["/","/notes/codeSnippet/01_%E5%89%8D%E8%A8%80.html","/notes/codeSnippet/02_el-date-picker%E4%B8%8D%E8%83%BD%E8%B6%85%E8%BF%87%E5%BD%93%E5%89%8D%E6%97%B6%E9%97%B4.html","/notes/vue/01.html","/server/node/01.html","/server/node/02.html","/notes/javaScript/01.html","/404.html","/notes/codeSnippet/","/notes/","/notes/vue/","/server/node/","/server/","/notes/javaScript/","/category/","/category/%E5%89%8D%E7%AB%AF/","/category/%E6%9C%8D%E5%8A%A1%E7%AB%AF/","/tag/","/tag/js/","/tag/element-ui/","/tag/vue/","/tag/node/","/article/","/star/","/timeline/"],Se="SEARCH_PRO_QUERY_HISTORY",g=U(Se,[]),we=()=>{const{queryHistoryCount:a}=D,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},b=a=>ke[a.id]+("anchor"in a?`#${a.anchor}`:""),De="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=D,f=U(De,[]),Qe=()=>{const a=I>0;return{enabled:a,resultHistory:f,addResultHistory:l=>{if(a){const r={link:b(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,I-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},qe=a=>{const l=pe(),r=Y(),Q=de(),i=L(0),R=w(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:q}=me(),H=Ee(c=>{const E=c.join(" "),{searchFilter:x=d=>d,splitWord:A,suggestionsFilter:j,...m}=l.value;E?(i.value+=1,y(c.join(" "),r.value,m).then(d=>x(d,E,r.value,Q.value)).then(d=>{i.value-=1,h.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(h.value=[])})):h.value=[]},D.searchDelay-D.suggestDelay);M([a,r],([c])=>H(c),{immediate:!0}),ge(()=>{q()})}),{isSearching:R,results:h}};var Ae=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),Q=Y(),i=ae(le),{enabled:R,addQueryHistory:h,queryHistory:y,removeQueryHistory:q}=we(),{enabled:H,resultHistory:c,addResultHistory:E,removeResultHistory:x}=Qe(),A=R||H,j=re(a,"queries"),{results:m,isSearching:d}=qe(j),u=ue({isQuery:!0,index:0}),v=L(0),p=L(0),P=w(()=>A&&(y.value.length>0||c.value.length>0)),C=w(()=>m.value.length>0),B=w(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=B.value.contents.length-1},V=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},K=()=>{p.value<B.value.contents.length-1?p.value+=1:V()},N=()=>{p.value>0?p.value-=1:J()},F=e=>e.map(s=>Re(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[o,S=""]=He(s)?s[Q.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",F([o,...n,S])))}return e.display.map(s=>t("div",F(s)))},k=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>R?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t(T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:o=>{o.preventDefault(),o.stopPropagation(),q(s)}})]))])):null,Z=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t(O,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{k()}},()=>[t(T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>F(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:o=>{o.preventDefault(),o.stopPropagation(),x(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(C.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const s=B.value.contents[p.value];h(a.queries.join(" ")),E(s),r.push(b(s)),k()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),k())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!C.value:!P.value}],id:"search-pro-results"},a.queries.length?d.value?t(oe,{hint:i.value.searching}):C.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const S=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:S}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const _=S&&p.value===ee;return t(O,{to:b(n),class:["search-pro-result-item",{active:_,"aria-selected":_}],onClick:()=>{h(a.queries.join(" ")),E(n),k()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:A?P.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Ae as default};
