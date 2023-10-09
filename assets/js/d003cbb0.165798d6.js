"use strict";(self.webpackChunkcs_201=self.webpackChunkcs_201||[]).push([[9912],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),m=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=m(n),d=a,k=s["".concat(o,".").concat(d)]||s[d]||c[d]||l;return n?r.createElement(k,p(p({ref:e},u),{},{components:n})):r.createElement(k,p({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[s]="string"==typeof t?t:a,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9828:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={id:"regexes",sidebar_position:19},p="\u6b63\u5219\u8868\u8fbe\u5f0f",i={unversionedId:"python/regexes",id:"python/regexes",title:"\u6b63\u5219\u8868\u8fbe\u5f0f",description:"\u6b63\u5219\u8868\u8fbe\u5f0f\u76f8\u5173\u77e5\u8bc6",source:"@site/docs/python/regexes.md",sourceDirName:"python",slug:"/python/regexes",permalink:"/cs201/python/regexes",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{id:"regexes",sidebar_position:19},sidebar:"pythonSidebar",previous:{title:"\u6587\u4ef6\u64cd\u4f5c",permalink:"/cs201/python/file"},next:{title:"pip\u5305\u7ba1\u7406",permalink:"/cs201/python/pip"}},o={},m=[{value:"\u6b63\u5219\u8868\u8fbe\u5f0f\u76f8\u5173\u77e5\u8bc6",id:"\u6b63\u5219\u8868\u8fbe\u5f0f\u76f8\u5173\u77e5\u8bc6",level:2},{value:"Python\u5bf9\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u652f\u6301",id:"python\u5bf9\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u652f\u6301",level:2},{value:"\u4f8b\u5b501\uff1a\u9a8c\u8bc1\u8f93\u5165\u7528\u6237\u540d\u548cQQ\u53f7\u662f\u5426\u6709\u6548\u5e76\u7ed9\u51fa\u5bf9\u5e94\u7684\u63d0\u793a\u4fe1\u606f\u3002",id:"\u4f8b\u5b501\u9a8c\u8bc1\u8f93\u5165\u7528\u6237\u540d\u548cqq\u53f7\u662f\u5426\u6709\u6548\u5e76\u7ed9\u51fa\u5bf9\u5e94\u7684\u63d0\u793a\u4fe1\u606f",level:3},{value:"\u4f8b\u5b502\uff1a\u4ece\u4e00\u6bb5\u6587\u5b57\u4e2d\u63d0\u53d6\u51fa\u56fd\u5185\u624b\u673a\u53f7\u7801\u3002",id:"\u4f8b\u5b502\u4ece\u4e00\u6bb5\u6587\u5b57\u4e2d\u63d0\u53d6\u51fa\u56fd\u5185\u624b\u673a\u53f7\u7801",level:3},{value:"\u4f8b\u5b503\uff1a\u66ff\u6362\u5b57\u7b26\u4e32\u4e2d\u7684\u4e0d\u826f\u5185\u5bb9",id:"\u4f8b\u5b503\u66ff\u6362\u5b57\u7b26\u4e32\u4e2d\u7684\u4e0d\u826f\u5185\u5bb9",level:3},{value:"\u4f8b\u5b504\uff1a\u62c6\u5206\u957f\u5b57\u7b26\u4e32",id:"\u4f8b\u5b504\u62c6\u5206\u957f\u5b57\u7b26\u4e32",level:3},{value:"\u540e\u8bdd",id:"\u540e\u8bdd",level:3}],u={toc:m},s="wrapper";function c(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6b63\u5219\u8868\u8fbe\u5f0f"},"\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,a.kt)("h2",{id:"\u6b63\u5219\u8868\u8fbe\u5f0f\u76f8\u5173\u77e5\u8bc6"},"\u6b63\u5219\u8868\u8fbe\u5f0f\u76f8\u5173\u77e5\u8bc6"),(0,a.kt)("p",null,"\u5728\u7f16\u5199\u5904\u7406\u5b57\u7b26\u4e32\u7684\u7a0b\u5e8f\u6216\u7f51\u9875\u65f6\uff0c\u7ecf\u5e38\u4f1a\u6709\u67e5\u627e\u7b26\u5408\u67d0\u4e9b\u590d\u6742\u89c4\u5219\u7684\u5b57\u7b26\u4e32\u7684\u9700\u8981\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u5c31\u662f\u7528\u4e8e\u63cf\u8ff0\u8fd9\u4e9b\u89c4\u5219\u7684\u5de5\u5177\uff0c\u6362\u53e5\u8bdd\u8bf4\u6b63\u5219\u8868\u8fbe\u5f0f\u662f\u4e00\u79cd\u5de5\u5177\uff0c\u5b83\u5b9a\u4e49\u4e86\u5b57\u7b26\u4e32\u7684\u5339\u914d\u6a21\u5f0f\uff08\u5982\u4f55\u68c0\u67e5\u4e00\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u6709\u8ddf\u67d0\u79cd\u6a21\u5f0f\u5339\u914d\u7684\u90e8\u5206\u6216\u8005\u4ece\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\u5c06\u4e0e\u6a21\u5f0f\u5339\u914d\u7684\u90e8\u5206\u63d0\u53d6\u51fa\u6765\u6216\u8005\u66ff\u6362\u6389\uff09\u3002\u5982\u679c\u4f60\u5728Windows\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u4f7f\u7528\u8fc7\u6587\u4ef6\u67e5\u627e\u5e76\u4e14\u5728\u6307\u5b9a\u6587\u4ef6\u540d\u65f6\u4f7f\u7528\u8fc7\u901a\u914d\u7b26\uff08","*","\u548c?\uff09\uff0c\u90a3\u4e48\u6b63\u5219\u8868\u8fbe\u5f0f\u4e5f\u662f\u4e0e\u4e4b\u7c7b\u4f3c\u7684\u7528\u6765\u8fdb\u884c\u6587\u672c\u5339\u914d\u7684\u5de5\u5177\uff0c\u53ea\u4e0d\u8fc7\u6bd4\u8d77\u901a\u914d\u7b26\u6b63\u5219\u8868\u8fbe\u5f0f\u66f4\u5f3a\u5927\uff0c\u5b83\u80fd\u66f4\u7cbe\u786e\u5730\u63cf\u8ff0\u4f60\u7684\u9700\u6c42\uff08\u5f53\u7136\u4f60\u4ed8\u51fa\u7684\u4ee3\u4ef7\u662f\u4e66\u5199\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u6bd4\u6253\u51fa\u4e00\u4e2a\u901a\u914d\u7b26\u8981\u590d\u6742\u5f97\u591a\uff0c\u8981\u77e5\u9053\u4efb\u4f55\u7ed9\u4f60\u5e26\u6765\u597d\u5904\u7684\u4e1c\u897f\u90fd\u662f\u6709\u4ee3\u4ef7\u7684\uff0c\u5c31\u5982\u540c\u5b66\u4e60\u4e00\u95e8\u7f16\u7a0b\u8bed\u8a00\u4e00\u6837\uff09\uff0c\u6bd4\u5982\u4f60\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u7528\u6765\u67e5\u627e\u6240\u6709\u4ee50\u5f00\u5934\uff0c\u540e\u9762\u8ddf\u77402-3\u4e2a\u6570\u5b57\uff0c\u7136\u540e\u662f\u4e00\u4e2a\u8fde\u5b57\u53f7\u201c-\u201d\uff0c\u6700\u540e\u662f7\u62168\u4f4d\u6570\u5b57\u7684\u5b57\u7b26\u4e32\uff08\u50cf028-12345678\u62160813-7654321\uff09\uff0c\u8fd9\u4e0d\u5c31\u662f\u56fd\u5185\u7684\u5ea7\u673a\u53f7\u7801\u5417\u3002\u6700\u521d\u8ba1\u7b97\u673a\u662f\u4e3a\u4e86\u505a\u6570\u5b66\u8fd0\u7b97\u800c\u8bde\u751f\u7684\uff0c\u5904\u7406\u7684\u4fe1\u606f\u57fa\u672c\u4e0a\u90fd\u662f\u6570\u503c\uff0c\u800c\u4eca\u5929\u6211\u4eec\u5728\u65e5\u5e38\u5de5\u4f5c\u4e2d\u5904\u7406\u7684\u4fe1\u606f\u57fa\u672c\u4e0a\u90fd\u662f\u6587\u672c\u6570\u636e\uff0c\u6211\u4eec\u5e0c\u671b\u8ba1\u7b97\u673a\u80fd\u591f\u8bc6\u522b\u548c\u5904\u7406\u7b26\u5408\u67d0\u4e9b\u6a21\u5f0f\u7684\u6587\u672c\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u5c31\u663e\u5f97\u975e\u5e38\u91cd\u8981\u4e86\u3002\u4eca\u5929\u51e0\u4e4e\u6240\u6709\u7684\u7f16\u7a0b\u8bed\u8a00\u90fd\u63d0\u4f9b\u4e86\u5bf9\u6b63\u5219\u8868\u8fbe\u5f0f\u64cd\u4f5c\u7684\u652f\u6301\uff0cPython\u901a\u8fc7\u6807\u51c6\u5e93\u4e2d\u7684re\u6a21\u5757\u6765\u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8003\u8651\u4e0b\u9762\u4e00\u4e2a\u95ee\u9898\uff1a\u6211\u4eec\u4ece\u67d0\u4e2a\u5730\u65b9\uff08\u53ef\u80fd\u662f\u4e00\u4e2a\u6587\u672c\u6587\u4ef6\uff0c\u4e5f\u53ef\u80fd\u662f\u7f51\u7edc\u4e0a\u7684\u4e00\u5219\u65b0\u95fb\uff09\u83b7\u5f97\u4e86\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5e0c\u671b\u5728\u5b57\u7b26\u4e32\u4e2d\u627e\u51fa\u624b\u673a\u53f7\u548c\u5ea7\u673a\u53f7\u3002\u5f53\u7136\u6211\u4eec\u53ef\u4ee5\u8bbe\u5b9a\u624b\u673a\u53f7\u662f11\u4f4d\u7684\u6570\u5b57\uff08\u6ce8\u610f\u5e76\u4e0d\u662f\u968f\u673a\u768411\u4f4d\u6570\u5b57\uff0c\u56e0\u4e3a\u4f60\u6ca1\u6709\u89c1\u8fc7\u201c25012345678\u201d\u8fd9\u6837\u7684\u624b\u673a\u53f7\u5427\uff09\u800c\u5ea7\u673a\u53f7\u8ddf\u4e0a\u4e00\u6bb5\u4e2d\u63cf\u8ff0\u7684\u6a21\u5f0f\u76f8\u540c\uff0c\u5982\u679c\u4e0d\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u8981\u5b8c\u6210\u8fd9\u4e2a\u4efb\u52a1\u5c31\u4f1a\u5f88\u9ebb\u70e6\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u76f8\u5173\u77e5\u8bc6\uff0c\u5927\u5bb6\u53ef\u4ee5\u9605\u8bfb\u4e00\u7bc7\u975e\u5e38\u6709\u540d\u7684\u535a\u5ba2\u53eb",(0,a.kt)("a",{parentName:"p",href:"https://deerchao.net/tutorials/regex/regex.htm"},"\u300a\u6b63\u5219\u8868\u8fbe\u5f0f30\u5206\u949f\u5165\u95e8\u6559\u7a0b\u300b"),"\uff0c\u8bfb\u5b8c\u8fd9\u7bc7\u6587\u7ae0\u540e\u4f60\u5c31\u53ef\u4ee5\u770b\u61c2\u4e0b\u9762\u7684\u8868\u683c\uff0c\u8fd9\u662f\u6211\u4eec\u5bf9\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u7684\u4e00\u4e9b\u57fa\u672c\u7b26\u53f7\u8fdb\u884c\u7684\u627c\u8981\u603b\u7ed3\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")," \u5982\u679c\u9700\u8981\u5339\u914d\u7684\u5b57\u7b26\u662f\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u7684\u7279\u6b8a\u5b57\u7b26\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528","\\","\u8fdb\u884c\u8f6c\u4e49\u5904\u7406\uff0c\u4f8b\u5982\u60f3\u5339\u914d\u5c0f\u6570\u70b9\u53ef\u4ee5\u5199\u6210","\\",".\u5c31\u53ef\u4ee5\u4e86\uff0c\u56e0\u4e3a\u76f4\u63a5\u5199.\u4f1a\u5339\u914d\u4efb\u610f\u5b57\u7b26\uff1b\u540c\u7406\uff0c\u60f3\u5339\u914d\u5706\u62ec\u53f7\u5fc5\u987b\u5199\u6210","\\","(\u548c","\\",")\uff0c\u5426\u5219\u5706\u62ec\u53f7\u88ab\u89c6\u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u7684\u5206\u7ec4\u3002")),(0,a.kt)("h2",{id:"python\u5bf9\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u652f\u6301"},"Python\u5bf9\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u652f\u6301"),(0,a.kt)("p",null,"Python\u63d0\u4f9b\u4e86re\u6a21\u5757\u6765\u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u76f8\u5173\u64cd\u4f5c\uff0c\u4e0b\u9762\u662fre\u6a21\u5757\u4e2d\u7684\u6838\u5fc3\u51fd\u6570\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"compile(pattern, flags=0)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7f16\u8bd1\u6b63\u5219\u8868\u8fbe\u5f0f\u8fd4\u56de\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"match(pattern, string, flags=0)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u5b57\u7b26\u4e32 \u6210\u529f\u8fd4\u56de\u5339\u914d\u5bf9\u8c61 \u5426\u5219\u8fd4\u56deNone")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"search(pattern, string, flags=0)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u641c\u7d22\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e00\u6b21\u51fa\u73b0\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u6a21\u5f0f \u6210\u529f\u8fd4\u56de\u5339\u914d\u5bf9\u8c61 \u5426\u5219\u8fd4\u56deNone")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"split(pattern, string, maxsplit=0, flags=0)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u6307\u5b9a\u7684\u6a21\u5f0f\u5206\u9694\u7b26\u62c6\u5206\u5b57\u7b26\u4e32 \u8fd4\u56de\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sub(pattern, repl, string, count=0, flags=0)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6307\u5b9a\u7684\u5b57\u7b26\u4e32\u66ff\u6362\u539f\u5b57\u7b26\u4e32\u4e2d\u4e0e\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7684\u6a21\u5f0f \u53ef\u4ee5\u7528count\u6307\u5b9a\u66ff\u6362\u7684\u6b21\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fullmatch(pattern, string, flags=0)"),(0,a.kt)("td",{parentName:"tr",align:null},"match\u51fd\u6570\u7684\u5b8c\u5168\u5339\u914d\uff08\u4ece\u5b57\u7b26\u4e32\u5f00\u5934\u5230\u7ed3\u5c3e\uff09\u7248\u672c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"findall(pattern, string, flags=0)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u67e5\u627e\u5b57\u7b26\u4e32\u6240\u6709\u4e0e\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7684\u6a21\u5f0f \u8fd4\u56de\u5b57\u7b26\u4e32\u7684\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"finditer(pattern, string, flags=0)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u67e5\u627e\u5b57\u7b26\u4e32\u6240\u6709\u4e0e\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7684\u6a21\u5f0f \u8fd4\u56de\u4e00\u4e2a\u8fed\u4ee3\u5668")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"purge()"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6e05\u9664\u9690\u5f0f\u7f16\u8bd1\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u7f13\u5b58")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"re.I / re.IGNORECASE"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5ffd\u7565\u5927\u5c0f\u5199\u5339\u914d\u6807\u8bb0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"re.M / re.MULTILINE"),(0,a.kt)("td",{parentName:"tr",align:null},"\u591a\u884c\u5339\u914d\u6807\u8bb0")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")," \u4e0a\u9762\u63d0\u5230\u7684re\u6a21\u5757\u4e2d\u7684\u8fd9\u4e9b\u51fd\u6570\uff0c\u5b9e\u9645\u5f00\u53d1\u4e2d\u4e5f\u53ef\u4ee5\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61\u7684\u65b9\u6cd5\u66ff\u4ee3\u5bf9\u8fd9\u4e9b\u51fd\u6570\u7684\u4f7f\u7528\uff0c\u5982\u679c\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u9700\u8981\u91cd\u590d\u7684\u4f7f\u7528\uff0c\u90a3\u4e48\u5148\u901a\u8fc7compile\u51fd\u6570\u7f16\u8bd1\u6b63\u5219\u8868\u8fbe\u5f0f\u5e76\u521b\u5efa\u51fa\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61\u65e0\u7591\u662f\u66f4\u4e3a\u660e\u667a\u7684\u9009\u62e9\u3002")),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u4e00\u7cfb\u5217\u7684\u4f8b\u5b50\u6765\u544a\u8bc9\u5927\u5bb6\u5728Python\u4e2d\u5982\u4f55\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,a.kt)("h3",{id:"\u4f8b\u5b501\u9a8c\u8bc1\u8f93\u5165\u7528\u6237\u540d\u548cqq\u53f7\u662f\u5426\u6709\u6548\u5e76\u7ed9\u51fa\u5bf9\u5e94\u7684\u63d0\u793a\u4fe1\u606f"},"\u4f8b\u5b501\uff1a\u9a8c\u8bc1\u8f93\u5165\u7528\u6237\u540d\u548cQQ\u53f7\u662f\u5426\u6709\u6548\u5e76\u7ed9\u51fa\u5bf9\u5e94\u7684\u63d0\u793a\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\"\"\"\n\u9a8c\u8bc1\u8f93\u5165\u7528\u6237\u540d\u548cQQ\u53f7\u662f\u5426\u6709\u6548\u5e76\u7ed9\u51fa\u5bf9\u5e94\u7684\u63d0\u793a\u4fe1\u606f\n\n\u8981\u6c42\uff1a\u7528\u6237\u540d\u5fc5\u987b\u7531\u5b57\u6bcd\u3001\u6570\u5b57\u6216\u4e0b\u5212\u7ebf\u6784\u6210\u4e14\u957f\u5ea6\u57286~20\u4e2a\u5b57\u7b26\u4e4b\u95f4\uff0cQQ\u53f7\u662f5~12\u7684\u6570\u5b57\u4e14\u9996\u4f4d\u4e0d\u80fd\u4e3a0\n\"\"\"\nimport re\n\n\ndef main():\n    username = input('\u8bf7\u8f93\u5165\u7528\u6237\u540d: ')\n    qq = input('\u8bf7\u8f93\u5165QQ\u53f7: ')\n    # match\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6b63\u5219\u8868\u8fbe\u5f0f\u5b57\u7b26\u4e32\u6216\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61\n    # \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8981\u8ddf\u6b63\u5219\u8868\u8fbe\u5f0f\u505a\u5339\u914d\u7684\u5b57\u7b26\u4e32\u5bf9\u8c61\n    m1 = re.match(r'^[0-9a-zA-Z_]{6,20}$', username)\n    if not m1:\n        print('\u8bf7\u8f93\u5165\u6709\u6548\u7684\u7528\u6237\u540d.')\n    m2 = re.match(r'^[1-9]\\d{4,11}$', qq)\n    if not m2:\n        print('\u8bf7\u8f93\u5165\u6709\u6548\u7684QQ\u53f7.')\n    if m1 and m2:\n        print('\u4f60\u8f93\u5165\u7684\u4fe1\u606f\u662f\u6709\u6548\u7684!')\n\n\nif __name__ == '__main__':\n    main()\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")," \u4e0a\u9762\u5728\u4e66\u5199\u6b63\u5219\u8868\u8fbe\u5f0f\u65f6\u4f7f\u7528\u4e86\u201c\u539f\u59cb\u5b57\u7b26\u4e32\u201d\u7684\u5199\u6cd5\uff08\u5728\u5b57\u7b26\u4e32\u524d\u9762\u52a0\u4e0a\u4e86r\uff09\uff0c\u6240\u8c13\u201c\u539f\u59cb\u5b57\u7b26\u4e32\u201d\u5c31\u662f\u5b57\u7b26\u4e32\u4e2d\u7684\u6bcf\u4e2a\u5b57\u7b26\u90fd\u662f\u5b83\u539f\u59cb\u7684\u610f\u4e49\uff0c\u8bf4\u5f97\u66f4\u76f4\u63a5\u4e00\u70b9\u5c31\u662f\u5b57\u7b26\u4e32\u4e2d\u6ca1\u6709\u6240\u8c13\u7684\u8f6c\u4e49\u5b57\u7b26\u5566\u3002\u56e0\u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u6709\u5f88\u591a\u5143\u5b57\u7b26\u548c\u9700\u8981\u8fdb\u884c\u8f6c\u4e49\u7684\u5730\u65b9\uff0c\u5982\u679c\u4e0d\u4f7f\u7528\u539f\u59cb\u5b57\u7b26\u4e32\u5c31\u9700\u8981\u5c06\u53cd\u659c\u6760\u5199\u4f5c","\\","\\","\uff0c\u4f8b\u5982\u8868\u793a\u6570\u5b57\u7684","\\","d\u5f97\u4e66\u5199\u6210","\\","\\","d\uff0c\u8fd9\u6837\u4e0d\u4ec5\u5199\u8d77\u6765\u4e0d\u65b9\u4fbf\uff0c\u9605\u8bfb\u7684\u65f6\u5019\u4e5f\u4f1a\u5f88\u5403\u529b\u3002")),(0,a.kt)("h3",{id:"\u4f8b\u5b502\u4ece\u4e00\u6bb5\u6587\u5b57\u4e2d\u63d0\u53d6\u51fa\u56fd\u5185\u624b\u673a\u53f7\u7801"},"\u4f8b\u5b502\uff1a\u4ece\u4e00\u6bb5\u6587\u5b57\u4e2d\u63d0\u53d6\u51fa\u56fd\u5185\u624b\u673a\u53f7\u7801\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u8fd9\u5f20\u56fe\u662f\u622a\u6b62\u52302017\u5e74\u5e95\uff0c\u56fd\u5185\u4e09\u5bb6\u8fd0\u8425\u5546\u63a8\u51fa\u7684\u624b\u673a\u53f7\u6bb5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import re\n\n\ndef main():\n    # \u521b\u5efa\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61 \u4f7f\u7528\u4e86\u524d\u77bb\u548c\u56de\u987e\u6765\u4fdd\u8bc1\u624b\u673a\u53f7\u524d\u540e\u4e0d\u5e94\u8be5\u51fa\u73b0\u6570\u5b57\n    pattern = re.compile(r'(?<=\\D)1[34578]\\d{9}(?=\\D)')\n    sentence = '''\n    \u91cd\u8981\u7684\u4e8b\u60c5\u8bf48130123456789\u904d\uff0c\u6211\u7684\u624b\u673a\u53f7\u662f13512346789\u8fd9\u4e2a\u9753\u53f7\uff0c\n    \u4e0d\u662f15600998765\uff0c\u4e5f\u662f110\u6216119\uff0c\u738b\u5927\u9524\u7684\u624b\u673a\u53f7\u624d\u662f15600998765\u3002\n    '''\n    # \u67e5\u627e\u6240\u6709\u5339\u914d\u5e76\u4fdd\u5b58\u5230\u4e00\u4e2a\u5217\u8868\u4e2d\n    mylist = re.findall(pattern, sentence)\n    print(mylist)\n    print('--------\u534e\u4e3d\u7684\u5206\u9694\u7ebf--------')\n    # \u901a\u8fc7\u8fed\u4ee3\u5668\u53d6\u51fa\u5339\u914d\u5bf9\u8c61\u5e76\u83b7\u5f97\u5339\u914d\u7684\u5185\u5bb9\n    for temp in pattern.finditer(sentence):\n        print(temp.group())\n    print('--------\u534e\u4e3d\u7684\u5206\u9694\u7ebf--------')\n    # \u901a\u8fc7search\u51fd\u6570\u6307\u5b9a\u641c\u7d22\u4f4d\u7f6e\u627e\u51fa\u6240\u6709\u5339\u914d\n    m = pattern.search(sentence)\n    while m:\n        print(m.group())\n        m = pattern.search(sentence, m.end())\n\n\nif __name__ == '__main__':\n    main()\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")," \u4e0a\u9762\u5339\u914d\u56fd\u5185\u624b\u673a\u53f7\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u5e76\u4e0d\u591f\u597d\uff0c\u56e0\u4e3a\u50cf14\u5f00\u5934\u7684\u53f7\u7801\u53ea\u6709145\u6216147\uff0c\u800c\u4e0a\u9762\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u5e76\u6ca1\u6709\u8003\u8651\u8fd9\u79cd\u60c5\u51b5\uff0c\u8981\u5339\u914d\u56fd\u5185\u624b\u673a\u53f7\uff0c\u66f4\u597d\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u5199\u6cd5\u662f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"(?<=\\D)(1[38]\\d{9}|14[57]\\d{8}|15[0-35-9]\\d{8}|17[678]\\d{8})(?=\\D)"),"\uff0c\u56fd\u5185\u6700\u8fd1\u597d\u50cf\u670919\u548c16\u5f00\u5934\u7684\u624b\u673a\u53f7\u4e86\uff0c\u4f46\u662f\u8fd9\u4e2a\u6682\u65f6\u4e0d\u5728\u6211\u4eec\u8003\u8651\u4e4b\u5217\u3002")),(0,a.kt)("h3",{id:"\u4f8b\u5b503\u66ff\u6362\u5b57\u7b26\u4e32\u4e2d\u7684\u4e0d\u826f\u5185\u5bb9"},"\u4f8b\u5b503\uff1a\u66ff\u6362\u5b57\u7b26\u4e32\u4e2d\u7684\u4e0d\u826f\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import re\n\n\ndef main():\n    sentence = '\u4f60\u4e2b\u662f\u50bb\u53c9\u5417? \u6211\u64cd\u4f60\u5927\u7237\u7684. Fuck you.'\n    purified = re.sub('[\u64cd\u8279]|fuck|shit|\u50bb[\u53c9\u7f3a]|\u715e\u7b14',\n                      '*', sentence, flags=re.IGNORECASE)\n    print(purified)  # \u4f60\u4e2b\u662f*\u5417? \u6211*\u4f60\u5927\u7237\u7684. * you.\n\n\nif __name__ == '__main__':\n    main()\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")," re\u6a21\u5757\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u76f8\u5173\u51fd\u6570\u4e2d\u90fd\u6709\u4e00\u4e2aflags\u53c2\u6570\uff0c\u5b83\u4ee3\u8868\u4e86\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u5339\u914d\u6807\u8bb0\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u6807\u8bb0\u6765\u6307\u5b9a\u5339\u914d\u65f6\u662f\u5426\u5ffd\u7565\u5927\u5c0f\u5199\u3001\u662f\u5426\u8fdb\u884c\u591a\u884c\u5339\u914d\u3001\u662f\u5426\u663e\u793a\u8c03\u8bd5\u4fe1\u606f\u7b49\u3002\u5982\u679c\u9700\u8981\u4e3aflags\u53c2\u6570\u6307\u5b9a\u591a\u4e2a\u503c\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"http://www.runoob.com/python/python-operators.html#ysf5"},"\u6309\u4f4d\u6216\u8fd0\u7b97\u7b26"),"\u8fdb\u884c\u53e0\u52a0\uff0c\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"flags=re.I | re.M"),"\u3002")),(0,a.kt)("h3",{id:"\u4f8b\u5b504\u62c6\u5206\u957f\u5b57\u7b26\u4e32"},"\u4f8b\u5b504\uff1a\u62c6\u5206\u957f\u5b57\u7b26\u4e32"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import re\n\n\ndef main():\n    poem = '\u7a97\u524d\u660e\u6708\u5149\uff0c\u7591\u662f\u5730\u4e0a\u971c\u3002\u4e3e\u5934\u671b\u660e\u6708\uff0c\u4f4e\u5934\u601d\u6545\u4e61\u3002'\n    sentence_list = re.split(r'[\uff0c\u3002, .]', poem)\n    while '' in sentence_list:\n        sentence_list.remove('')\n    print(sentence_list)  # ['\u7a97\u524d\u660e\u6708\u5149', '\u7591\u662f\u5730\u4e0a\u971c', '\u4e3e\u5934\u671b\u660e\u6708', '\u4f4e\u5934\u601d\u6545\u4e61']\n\n\nif __name__ == '__main__':\n    main()\n")),(0,a.kt)("h3",{id:"\u540e\u8bdd"},"\u540e\u8bdd"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u4ece\u4e8b\u722c\u866b\u7c7b\u5e94\u7528\u7684\u5f00\u53d1\uff0c\u90a3\u4e48\u6b63\u5219\u8868\u8fbe\u5f0f\u4e00\u5b9a\u662f\u4e00\u4e2a\u975e\u5e38\u597d\u7684\u52a9\u624b\uff0c\u56e0\u4e3a\u5b83\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u8fc5\u901f\u7684\u4ece\u7f51\u9875\u4ee3\u7801\u4e2d\u53d1\u73b0\u67d0\u79cd\u6211\u4eec\u6307\u5b9a\u7684\u6a21\u5f0f\u5e76\u63d0\u53d6\u51fa\u6211\u4eec\u9700\u8981\u7684\u4fe1\u606f\uff0c\u5f53\u7136\u5bf9\u4e8e\u521d\u5b66\u8005\u6765\u6536\uff0c\u8981\u7f16\u5199\u4e00\u4e2a\u6b63\u786e\u7684\u9002\u5f53\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u53ef\u80fd\u5e76\u4e0d\u662f\u4e00\u4ef6\u5bb9\u6613\u7684\u4e8b\u60c5\uff08\u5f53\u7136\u6709\u4e9b\u5e38\u7528\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u53ef\u4ee5\u76f4\u63a5\u5728\u7f51\u4e0a\u627e\u627e\uff09\uff0c\u6240\u4ee5\u5b9e\u9645\u5f00\u53d1\u722c\u866b\u5e94\u7528\u7684\u65f6\u5019\uff0c\u6709\u5f88\u591a\u4eba\u4f1a\u9009\u62e9",(0,a.kt)("a",{parentName:"p",href:"https://www.crummy.com/software/BeautifulSoup/"},"Beautiful Soup"),"\u6216",(0,a.kt)("a",{parentName:"p",href:"http://lxml.de/"},"Lxml"),"\u6765\u8fdb\u884c\u5339\u914d\u548c\u4fe1\u606f\u7684\u63d0\u53d6\uff0c\u524d\u8005\u7b80\u5355\u65b9\u4fbf\u4f46\u662f\u6027\u80fd\u8f83\u5dee\uff0c\u540e\u8005\u65e2\u597d\u7528\u6027\u80fd\u4e5f\u597d\uff0c\u4f46\u662f\u5b89\u88c5\u7a0d\u5acc\u9ebb\u70e6\uff0c\u8fd9\u4e9b\u5185\u5bb9\u6211\u4eec\u4f1a\u5728\u540e\u671f\u7684\u722c\u866b\u4e13\u9898\u4e2d\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u3002"))}c.isMDXComponent=!0}}]);